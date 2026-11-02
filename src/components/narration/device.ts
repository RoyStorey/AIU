/**
 * Helpers for the browser side of narration: the voices installed on this
 * device (spoken by the Web Speech API), and the small pieces of logic the
 * player shares between studio and device voices.
 */

/** A very short silent clip, played inside the tap that starts listening, so phones allow audio to follow. */
export const SILENCE = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//OEwAAAAAAAAAAAAEluZm8AAAAPAAAABQAAATgAsbGxsbGxsbGxsbGxsbGxsbGxscTExMTExMTExMTExMTExMTExMTE2NjY2NjY2NjY2NjY2NjY2NjY2Njs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P//////////////////////////AAAAAExhdmM2MC4zMQAAAAAAAAAAAAAAACQEUAAAAAAAAAE4P2i7tAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUxAAAAANIAAAAAExBTUUzLjEwMFVV//MUxAsAAANIAAAAAFVVVVVVVVVVVVVV//MUxBYAAANIAAAAAFVVVVVVVVVVVVVV//MUxCEAAANIAAAAAFVVVVVVVVVVVVVV//MUxCwAAANIAAAAAFVVVVVVVVVVVVVV";

export type DeviceVoice = { id: string; name: string; lang: string; quality: number; voice: SpeechSynthesisVoice };

/** Rough quality ranking: neural and "enhanced" system voices first, novelty voices last. */
function quality(v: SpeechSynthesisVoice): number {
  const n = v.name.toLowerCase();
  let q = 0;
  if (/natural|neural|premium|enhanced|online/.test(n)) q += 3;
  if (/google|microsoft|siri|samantha|daniel|karen|moira|serena|arthur|martha/.test(n)) q += 1;
  if (/^en[-_](us|gb)/i.test(v.lang)) q += 1;
  if (/albert|bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox|fred|junior|ralph|kathy|grandpa|grandma|rocko|shelley|eddy|flo|reed|sandy/.test(n)) q -= 5;
  return q;
}

export function deviceVoices(): DeviceVoice[] {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return [];
  return window.speechSynthesis.getVoices()
    .filter((v) => /^en([-_]|$)/i.test(v.lang))
    .map((v) => ({ id: `device:${v.voiceURI}`, name: v.name.replace(/\s*\(.*?\)\s*$/, ""), lang: v.lang, quality: quality(v), voice: v }))
    .filter((v) => v.quality > -3)
    .sort((a, b) => b.quality - a.quality || a.name.localeCompare(b.name));
}

/** Sentences, for device voices: some browsers cut off long utterances, and sentences let progress be shown. */
export function sentences(text: string): string[] {
  return text.split(/(?<=[.!?…]["”’')\]]*)(?<!\b[A-Z]\.)(?<!\b[A-Z]\.[A-Z]\.)\s+(?=["“‘(]?[A-Z0-9])/).map((s) => s.trim()).filter(Boolean);
}

export const clock = (s: number) => {
  const t = Math.max(0, Math.round(s));
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const sec = String(t % 60).padStart(2, "0");
  return h ? `${h}:${String(m).padStart(2, "0")}:${sec}` : `${m}:${sec}`;
};

/** Reads or writes a small JSON value in localStorage, tolerating private modes that refuse. */
export function stored<T>(key: string): T | null {
  try { const v = localStorage.getItem(key); return v ? (JSON.parse(v) as T) : null; } catch { return null; }
}
export function store(key: string, value: unknown) {
  try { if (value === null) localStorage.removeItem(key); else localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable */ }
}

export type ResumePoint = { page: number; block: string; offset: number; at: number; title: string };
export const resumeKey = (courseId: string, lesson: number) => `cornerstone-listen:${courseId}:${lesson}`;
