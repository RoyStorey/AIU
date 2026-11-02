"""
Cornerstone's Chatterbox narration worker.

Keeps Resemble AI's Chatterbox text-to-speech model loaded (on the GPU when there
is one) and renders passages sent to it by the narration engine
(src/lib/narration/chatterbox.ts). It speaks JSON lines:

  on start:  {"ready": true, "sr": 24000, "device": "cuda", "model": "standard"}
  request:   {"id": 1, "chunks": ["…", "…"], "ref": "voice.wav" | null, "out": "file.f32",
              "exaggeration": 0.5, "cfg": 0.5, "temperature": 0.8}
  reply:     {"id": 1, "ok": true, "samples": 123456, "retries": 0}
             {"id": 1, "ok": false, "error": "…"}

Each chunk is rendered, checked for the model's occasional failures (running on
past the text, or stopping short), re-rendered if it failed, trimmed of silence,
and joined to the others with a short pause. The result is written to `out` as
32-bit float mono samples.

Settings (environment): AIU_CHATTERBOX_MODEL = standard (default) | turbo;
AIU_CHATTERBOX_DEVICE = cuda | cpu (default: cuda if available).
AIU_CHATTERBOX_FAKE=1 replaces the model with tones, for testing the pipeline.
"""
import hashlib
import json
import os
import sys
import traceback

# Keep the real stdout for replies; anything the libraries print goes to stderr.
_proto = os.fdopen(os.dup(1), "w", buffering=1, encoding="utf-8")
os.dup2(2, 1)
sys.stdout = sys.stderr

import numpy as np  # noqa: E402


def send(obj):
    _proto.write(json.dumps(obj) + "\n")
    _proto.flush()


class FakeModel:
    """Stands in for Chatterbox in tests: a quiet tone as long as the text would take to say."""

    sr = 24000
    conds = object()

    def __init__(self):
        self.calls = {}

    def generate(self, text, **_):
        n = self.calls.get(text, 0)
        self.calls[text] = n + 1
        seconds = len(text) / 14
        if "BABBLE" in text and n == 0:  # the first attempt runs on, as the real model sometimes does
            seconds *= 4
        t = np.arange(int(seconds * self.sr)) / self.sr
        return 0.1 * np.sin(2 * np.pi * 220 * t).astype(np.float32)

    def prepare_conditionals(self, path, **_):
        if not os.path.exists(path):
            raise FileNotFoundError(path)


def trim(wav, sr):
    """Cuts leading and trailing silence, keeping a little air at each end."""
    frame = int(sr * 0.01)
    if len(wav) < frame * 3:
        return wav
    usable = len(wav) // frame * frame
    rms = np.sqrt(np.mean(wav[:usable].reshape(-1, frame) ** 2, axis=1))
    loud = np.where(rms > max(rms.max() * 0.03, 1e-4))[0]
    if len(loud) == 0:
        return wav
    start = max(0, loud[0] * frame - int(sr * 0.04))
    end = min(len(wav), (loud[-1] + 1) * frame + int(sr * 0.12))
    return wav[start:end]


def plausible(seconds, text):
    """Ordinary speech runs about 14 characters a second; far outside that, the model has misfired."""
    chars = max(len(text), 1)
    return chars / 32 <= seconds <= chars / 7 + 1.5


def main():
    fake = os.environ.get("AIU_CHATTERBOX_FAKE") == "1"
    kind = os.environ.get("AIU_CHATTERBOX_MODEL", "standard").lower()
    if fake:
        model, device, torch = FakeModel(), "fake", None
    else:
        import torch

        device = os.environ.get("AIU_CHATTERBOX_DEVICE") or ("cuda" if torch.cuda.is_available() else "cpu")
        if kind == "turbo":
            from chatterbox.tts_turbo import ChatterboxTurboTTS as Model
        else:
            from chatterbox.tts import ChatterboxTTS as Model
        model = Model.from_pretrained(device=device)

    builtin = getattr(model, "conds", None)
    voices = {}  # reference clip -> prepared conditionals
    send({"ready": True, "sr": model.sr, "device": device, "model": kind})

    def use_voice(ref, exaggeration):
        if not ref:
            if builtin is None:
                raise RuntimeError("This model has no built-in voice; choose a voice with a reference clip.")
            model.conds = builtin
            return
        if ref not in voices:
            if kind == "turbo":
                model.prepare_conditionals(ref)
            else:
                model.prepare_conditionals(ref, exaggeration=exaggeration)
            voices[ref] = model.conds
        model.conds = voices[ref]

    def render(text, job):
        options = {"temperature": float(job.get("temperature", 0.8))}
        if kind != "turbo":
            options.update(exaggeration=float(job.get("exaggeration", 0.5)), cfg_weight=float(job.get("cfg", 0.5)))
        seed = int(hashlib.sha256(text.encode()).hexdigest()[:8], 16)
        best, retries = None, 0
        for attempt in range(3):
            if torch is not None:
                torch.manual_seed(seed + attempt)
            wav = model.generate(text, **options)
            wav = wav.squeeze(0).detach().cpu().numpy() if hasattr(wav, "detach") else np.asarray(wav)
            wav = trim(wav.astype(np.float32), model.sr)
            if plausible(len(wav) / model.sr, text):
                return wav, retries
            retries += 1
            sys.stderr.write(f"[chatterbox] retrying a misfire ({len(wav) / model.sr:.1f}s for {len(text)} characters)\n")
            if best is None or abs(len(wav) / model.sr - len(text) / 14) < abs(len(best) / model.sr - len(text) / 14):
                best = wav
        return best, retries

    for line in sys.stdin:
        line = line.strip()
        if not line:
            continue
        job = {}
        try:
            job = json.loads(line)
            use_voice(job.get("ref"), float(job.get("exaggeration", 0.5)))
            gap = np.zeros(int(model.sr * 0.18), dtype=np.float32)
            parts, retries = [], 0
            for i, chunk in enumerate(job["chunks"]):
                wav, r = render(chunk, job)
                retries += r
                parts.append(wav)
                if i < len(job["chunks"]) - 1:
                    parts.append(gap)
            audio = np.concatenate(parts) if parts else np.zeros(0, dtype=np.float32)
            audio.astype("<f4").tofile(job["out"])
            send({"id": job.get("id"), "ok": True, "samples": int(len(audio)), "retries": retries})
        except Exception as e:  # report and carry on with the next passage
            traceback.print_exc()
            send({"id": job.get("id"), "ok": False, "error": f"{type(e).__name__}: {e}"})


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        traceback.print_exc()
        send({"ready": False, "error": f"{type(e).__name__}: {e}"})
        sys.exit(1)
