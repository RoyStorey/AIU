/**
 * Chatterbox (Resemble AI, MIT), a natural-sounding neural voice that runs on an
 * NVIDIA GPU. It is a Python model, so it runs in a worker process
 * (scripts/chatterbox_worker.py) that stays loaded between passages; this module
 * starts it, sends it passages, and reads back the audio.
 *
 * Set up with `npm run narrate:setup-gpu` (Windows), which makes the Python
 * environment .venv-tts. AIU_CHATTERBOX_PYTHON points at another Python.
 */
import { spawn, spawnSync, type ChildProcessWithoutNullStreams } from "node:child_process";
import { createHash, randomBytes } from "node:crypto";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { mkdir, readFile, unlink } from "node:fs/promises";
import { join, resolve } from "node:path";
import { ffmpegPath } from "@/lib/narration/ffmpeg";
import { spellNumbers } from "@/lib/narration/numbers";
import { customVoice, KOKORO_VOICES, type StudioVoice } from "@/lib/narration/voices";

const MAX_CHUNK = 280;

export function chatterboxPython(): string | null {
  const configured = process.env.AIU_CHATTERBOX_PYTHON;
  if (configured) return existsSync(configured) ? configured : null;
  const venv = resolve(".venv-tts");
  for (const p of [join(venv, "Scripts", "python.exe"), join(venv, "bin", "python")]) if (existsSync(p)) return p;
  return null;
}

export const chatterboxAvailable = () => Boolean(chatterboxPython()) || process.env.AIU_CHATTERBOX_FAKE === "1";

const settings = () => ({
  model: (process.env.AIU_CHATTERBOX_MODEL ?? "standard").toLowerCase(),
  exaggeration: Number(process.env.AIU_CHATTERBOX_EXAGGERATION ?? 0.5),
  cfg: Number(process.env.AIU_CHATTERBOX_CFG ?? 0.5),
  temperature: Number(process.env.AIU_CHATTERBOX_TEMPERATURE ?? 0.8),
});

/* ---------- Voices ---------- */

export const customVoicesDir = () => resolve(process.env.AIU_CUSTOM_VOICES_DIR ?? "data/voices");

/** Clips in data/voices/ (WAV, MP3, or FLAC, at least ten seconds of one clear speaker), as voices. */
export function customVoices(): StudioVoice[] {
  const dir = customVoicesDir();
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((f) => /\.(wav|mp3|flac)$/i.test(f)).map((f) => customVoice(f.replace(/\.[^.]+$/, "")));
}

/** The reference clip a voice speaks like, or null for Chatterbox's own voice. */
function referenceSource(voice: StudioVoice): string | null {
  if (voice.engineVoice === "builtin") return null;
  if (voice.engineVoice.startsWith("custom:")) {
    const name = voice.engineVoice.slice("custom:".length);
    const dir = customVoicesDir();
    const file = existsSync(dir) ? readdirSync(dir).find((f) => customVoice(f.replace(/\.[^.]+$/, "")).engineVoice === voice.engineVoice) : undefined;
    if (!file) throw new Error(`No clip for the voice "${name}" in ${dir}.`);
    return join(dir, file);
  }
  const kokoro = KOKORO_VOICES.find((k) => k.engineVoice === voice.engineVoice);
  if (!kokoro) throw new Error(`Unknown Chatterbox voice ${voice.id}.`);
  return resolve("public", "narration", "previews", `kokoro-${kokoro.engineVoice}.mp3`);
}

const fingerprints = new Map<string, string>();
/** Identifies the engine and the voice's clip, so that changing either re-renders the narration. */
export function chatterboxEngine(voice: StudioVoice): string {
  const s = settings();
  let ref = "builtin";
  const source = referenceSource(voice);
  if (source && existsSync(source)) {
    const key = `${source}:${statSync(source).mtimeMs}`;
    if (!fingerprints.has(key)) fingerprints.set(key, createHash("sha256").update(readFileSync(source)).digest("hex").slice(0, 12));
    ref = fingerprints.get(key)!;
  }
  return `chatterbox-${s.model}-e${s.exaggeration}-c${s.cfg}-t${s.temperature}-${ref}`;
}

/** Clips are converted once to 24 kHz mono WAV, which the model reads most reliably. */
async function referenceClip(voice: StudioVoice): Promise<string | null> {
  const source = referenceSource(voice);
  if (!source) return null;
  if (!existsSync(source)) throw new Error(`The voice clip ${source} is missing.`);
  if (/\.wav$/i.test(source)) return source;
  const dir = resolve(process.env.AIU_NARRATION_DIR ?? "data/narration", ".refs");
  await mkdir(dir, { recursive: true });
  const out = join(dir, `${chatterboxEngine(voice).split("-").pop()}.wav`);
  if (!existsSync(out)) {
    const r = spawnSync(ffmpegPath(), ["-hide_banner", "-loglevel", "error", "-y", "-i", source, "-ac", "1", "-ar", "24000", out]);
    if (r.status !== 0) return source; // without ffmpeg, let the model read the clip as it is
  }
  return out;
}

/* ---------- Text ---------- */

/** Sentences, grouped into chunks the model renders well; over-long sentences are split at their clauses. */
export function chunksFor(text: string): string[] {
  const sentences = spellNumbers(text)
    .split(/(?<=[.!?…]["”’')\]]*)(?<!\b[A-Z]\.)(?<!\b[A-Z]\.[A-Z]\.)\s+(?=["“‘(]?[A-Za-z])/)
    .map((s) => s.trim()).filter(Boolean);
  const pieces = sentences.flatMap((s) => {
    if (s.length <= MAX_CHUNK) return [s];
    const out: string[] = [];
    let part = "";
    for (const clause of s.split(/(?<=[,;:—])\s+/)) {
      if (part && part.length + clause.length + 1 > MAX_CHUNK) { out.push(part); part = clause; }
      else part = part ? `${part} ${clause}` : clause;
    }
    if (part) out.push(part);
    return out;
  });
  const chunks: string[] = [];
  for (const p of pieces) {
    const last = chunks[chunks.length - 1];
    if (last && last.length + p.length + 1 <= MAX_CHUNK && /[.!?…]["”’')\]]*$/.test(last)) chunks[chunks.length - 1] = `${last} ${p}`;
    else chunks.push(p);
  }
  return chunks;
}

/* ---------- The worker ---------- */

type Reply = { id?: number; ok?: boolean; ready?: boolean; samples?: number; error?: string; sr?: number; device?: string; retries?: number };
type Worker = {
  proc: ChildProcessWithoutNullStreams;
  ready: Promise<{ sr: number; device: string }>;
  pending: Map<number, { ok: (r: Reply) => void; fail: (e: Error) => void }>;
  log: string[];
};

let worker: Worker | null = null;
let nextId = 1;
let idle: NodeJS.Timeout | undefined;
let echo = false;

/** Shows the worker's own messages (model download, warnings) as they come: for the command line. */
export function showChatterboxLog(on: boolean) { echo = on; }

function start(): Worker {
  const python = chatterboxPython();
  const fake = process.env.AIU_CHATTERBOX_FAKE === "1";
  if (!python && !fake) throw new Error("Chatterbox is not set up. Run: npm run narrate:setup-gpu");
  const proc = spawn(python ?? "python3", [resolve("scripts", "chatterbox_worker.py")], {
    env: { ...process.env, PYTHONUNBUFFERED: "1", PYTHONIOENCODING: "utf-8" },
  });
  const w: Worker = { proc, pending: new Map(), log: [], ready: undefined as unknown as Worker["ready"] };
  w.ready = new Promise((ok, fail) => {
    let buffer = "";
    proc.stdout.setEncoding("utf8");
    proc.stdout.on("data", (data: string) => {
      buffer += data;
      let nl: number;
      while ((nl = buffer.indexOf("\n")) >= 0) {
        const line = buffer.slice(0, nl).trim();
        buffer = buffer.slice(nl + 1);
        if (!line) continue;
        let msg: Reply;
        try { msg = JSON.parse(line); } catch { continue; }
        if (msg.ready === true) ok({ sr: msg.sr!, device: msg.device! });
        else if (msg.ready === false) fail(new Error(`Chatterbox could not start: ${msg.error}`));
        else if (msg.id !== undefined) {
          const p = w.pending.get(msg.id);
          w.pending.delete(msg.id);
          if (p && msg.ok) p.ok(msg);
          else if (p) p.fail(new Error(msg.error ?? "Chatterbox failed."));
        }
      }
    });
    proc.stderr.setEncoding("utf8");
    proc.stderr.on("data", (d: string) => {
      if (echo) process.stderr.write(d);
      w.log.push(...d.split(/\r?\n/).filter(Boolean));
      if (w.log.length > 40) w.log.splice(0, w.log.length - 40);
    });
    proc.on("error", (e) => fail(e));
    proc.on("exit", (code) => {
      const why = new Error(`Chatterbox stopped (exit ${code}). Last messages:\n${w.log.slice(-12).join("\n")}`);
      fail(why);
      for (const p of w.pending.values()) p.fail(why);
      w.pending.clear();
      if (worker === w) worker = null;
    });
  });
  w.ready.catch(() => {});
  return w;
}

/** Stops the worker (and frees the GPU) after ten idle minutes. */
function keepAlive() {
  clearTimeout(idle);
  idle = setTimeout(() => { worker?.proc.stdin.end(); worker = null; }, 10 * 60_000);
  idle.unref?.();
}

export async function chatterboxSynthesize(text: string, voice: StudioVoice): Promise<{ samples: Float32Array; sampleRate: number }> {
  worker ??= start();
  const w = worker;
  const { sr } = await w.ready;
  const ref = await referenceClip(voice);
  const dir = resolve(process.env.AIU_NARRATION_DIR ?? "data/narration", ".tmp");
  await mkdir(dir, { recursive: true });
  const out = join(dir, `${randomBytes(8).toString("hex")}.f32`);
  const id = nextId++;
  const s = settings();
  const reply = new Promise<Reply>((ok, fail) => w.pending.set(id, { ok, fail }));
  w.proc.stdin.write(JSON.stringify({ id, chunks: chunksFor(text), ref, out, exaggeration: s.exaggeration, cfg: s.cfg, temperature: s.temperature }) + "\n");
  try {
    await reply;
    const bytes = await readFile(out);
    return { samples: new Float32Array(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength)), sampleRate: sr };
  } finally {
    await unlink(out).catch(() => {});
    keepAlive();
  }
}

/** Starts the worker ahead of the first passage and reports where it runs ("cuda", "cpu"). */
export async function warmChatterbox(): Promise<string> {
  worker ??= start();
  return (await worker.ready).device;
}
