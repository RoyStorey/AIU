/**
 * Studio narration on the server: which courses are narrated, which voices are
 * offered, and the cache of rendered audio. Each passage is rendered once per
 * voice and stored under data/narration/<voice>/<hash>.mp3, where the hash covers
 * the voice, the engine, and the exact words, so editing a lesson re-renders only
 * the passages that changed.
 */
import { spawn, spawnSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { mkdir, rename, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { ffmpegPath } from "@/lib/narration/ffmpeg";
import { blockHash, type NarrationBlock } from "@/lib/narration/script";
import { chatterboxAvailable, chatterboxEngine, chatterboxSynthesize, customVoices } from "@/lib/narration/chatterbox";
import { KOKORO_SAMPLE_RATE, kokoroAvailable, kokoroSynthesize } from "@/lib/narration/kokoro";
import { mp3Duration } from "@/lib/narration/mp3";
import { openaiSynthesize } from "@/lib/narration/openai";
import { CHATTERBOX_VOICES, KOKORO_VOICES, OPENAI_VOICES, voiceFromSlug, voiceSlug, type StudioVoice } from "@/lib/narration/voices";

export type Provider = "kokoro" | "chatterbox" | "openai" | "off";

export const narrationDir = () => resolve(process.env.AIU_NARRATION_DIR ?? "data/narration");

export function narrationProvider(): Provider {
  const p = (process.env.AIU_NARRATION_PROVIDER ?? "kokoro").toLowerCase();
  return p === "openai" || p === "chatterbox" || p === "off" ? p : "kokoro";
}

/** Courses with a Listen button, by code: AIU_NARRATION_COURSES ("AMH 101" by default; "all" for every course). */
export function isNarrated(code: string): boolean {
  const setting = (process.env.AIU_NARRATION_COURSES ?? "AMH 101").trim();
  if (setting.toLowerCase() === "all") return true;
  const norm = (s: string) => s.replace(/[\s-]+/g, "").toUpperCase();
  return setting.split(",").map(norm).includes(norm(code));
}

/** Who may cause new audio to be rendered by listening: "signed-in" (default), "admins", or "off" (pre-rendered only). */
export function onDemandPolicy(): "signed-in" | "admins" | "off" {
  const p = (process.env.AIU_NARRATION_ON_DEMAND ?? "signed-in").toLowerCase();
  return p === "admins" || p === "off" ? p : "signed-in";
}

/** The engine a voice is rendered with; part of the cache key, so changing models re-renders. */
export function engineOf(voice: StudioVoice): string {
  if (voice.provider === "kokoro") return "kokoro-82m-v1.0-q8";
  if (voice.provider === "chatterbox") return chatterboxEngine(voice);
  return `openai-${process.env.AIU_OPENAI_TTS_MODEL ?? "gpt-4o-mini-tts"}`;
}

/** The voices a provider offers on this server. */
export function providerVoices(provider: Provider): StudioVoice[] {
  if (provider === "kokoro") return KOKORO_VOICES;
  if (provider === "chatterbox") return [...CHATTERBOX_VOICES, ...customVoices()];
  if (provider === "openai") return OPENAI_VOICES;
  return [];
}

export const hashFor = (voice: StudioVoice, block: Pick<NarrationBlock, "text">) => blockHash(voice.id, block.text, engineOf(voice));

export type Rendered = { file: string; type: string; duration: number; bytes: number };

function paths(voice: StudioVoice, hash: string) {
  const dir = join(narrationDir(), voiceSlug(voice.id));
  return { dir, meta: join(dir, `${hash}.json`) };
}

/** The rendered audio for a passage, if it exists. */
export function findRendered(voice: StudioVoice, hash: string): Rendered | null {
  const { dir, meta } = paths(voice, hash);
  if (!existsSync(meta)) return null;
  try {
    const m = JSON.parse(readFileSync(meta, "utf8")) as Omit<Rendered, "file"> & { name: string };
    const file = join(dir, m.name);
    return existsSync(file) ? { file, type: m.type, duration: m.duration, bytes: m.bytes } : null;
  } catch {
    return null;
  }
}

/** Voices this server can render now, and voices with audio already rendered (which can be served without an engine). */
export async function studioStatus(): Promise<{ voices: StudioVoice[]; canRender: boolean; reason?: string }> {
  const provider = narrationProvider();
  let canRender = false;
  let reason: string | undefined;
  if (provider === "kokoro") {
    canRender = await kokoroAvailable();
    if (!canRender) reason = "The Kokoro engine is not installed on this server (npm install onnxruntime-node phonemizer).";
  } else if (provider === "chatterbox") {
    canRender = chatterboxAvailable();
    if (!canRender) reason = "Chatterbox is not set up on this server (npm run narrate:setup-gpu).";
  } else if (provider === "openai") {
    canRender = Boolean(process.env.OPENAI_API_KEY);
    if (!canRender) reason = "OPENAI_API_KEY is not set.";
  } else {
    reason = "Studio narration is turned off (AIU_NARRATION_PROVIDER=off).";
  }
  // Voices the server can render on request; when it renders only in advance, just those already recorded.
  const offered = canRender && onDemandPolicy() !== "off" ? providerVoices(provider) : [];
  // Voices with narration recorded (a folder holding at least one rendered passage), in the catalog's order.
  const recorded = existsSync(narrationDir())
    ? readdirSync(narrationDir(), { withFileTypes: true })
      .filter((d) => d.isDirectory() && readdirSync(join(narrationDir(), d.name)).some((f) => f.endsWith(".json")))
      .map((d) => voiceFromSlug(d.name)).filter((v): v is StudioVoice => Boolean(v))
    : [];
  const order = [...KOKORO_VOICES, ...CHATTERBOX_VOICES, ...OPENAI_VOICES].map((v) => v.id);
  const onDisk = recorded.sort((a, b) => (order.indexOf(a.id) + 1 || 999) - (order.indexOf(b.id) + 1 || 999));
  const voices = [...offered, ...onDisk.filter((v) => !offered.some((o) => o.id === v.id))];
  return { voices, canRender, reason };
}

/* ---------- Encoding ---------- */

let ffmpeg: boolean | undefined;
const hasFfmpeg = () => (ffmpeg ??= spawnSync(ffmpegPath(), ["-version"], { stdio: "ignore" }).status === 0);

function encodeMp3(samples: Float32Array, rate: number): Promise<Buffer> {
  return new Promise((ok, fail) => {
    const p = spawn(ffmpegPath(), ["-hide_banner", "-loglevel", "error", "-f", "f32le", "-ar", String(rate), "-ac", "1",
      "-i", "pipe:0", "-c:a", "libmp3lame", "-b:a", "64k", "-f", "mp3", "pipe:1"]);
    const out: Buffer[] = [];
    const err: Buffer[] = [];
    p.stdout.on("data", (d) => out.push(d));
    p.stderr.on("data", (d) => err.push(d));
    p.on("error", fail);
    p.on("close", (code) => (code === 0 ? ok(Buffer.concat(out)) : fail(new Error(`ffmpeg failed: ${Buffer.concat(err)}`))));
    p.stdin.end(Buffer.from(samples.buffer, samples.byteOffset, samples.byteLength));
  });
}

function encodeWav(samples: Float32Array, rate: number): Buffer {
  const data = Buffer.alloc(samples.length * 2);
  samples.forEach((s, i) => data.writeInt16LE(Math.round(Math.max(-1, Math.min(1, s)) * 32767), i * 2));
  const h = Buffer.alloc(44);
  h.write("RIFF", 0); h.writeUInt32LE(36 + data.length, 4); h.write("WAVE", 8); h.write("fmt ", 12);
  h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20); h.writeUInt16LE(1, 22); h.writeUInt32LE(rate, 24);
  h.writeUInt32LE(rate * 2, 28); h.writeUInt16LE(2, 32); h.writeUInt16LE(16, 34); h.write("data", 36);
  h.writeUInt32LE(data.length, 40);
  return Buffer.concat([h, data]);
}

/** A beat of silence after each passage, longer after headings, so the narration breathes. */
const PAUSE: Record<NarrationBlock["kind"], number> = { title: 0.8, heading: 0.55, paragraph: 0.35, quote: 0.45, list: 0.35, outro: 0.5 };

async function render(voice: StudioVoice, block: NarrationBlock, hash: string): Promise<Rendered> {
  let bytes: Buffer;
  let type = "audio/mpeg";
  let ext = "mp3";
  let duration: number;
  if (voice.provider === "kokoro" || voice.provider === "chatterbox") {
    const { samples: speech, sampleRate: rate } = voice.provider === "kokoro"
      ? { samples: await kokoroSynthesize(block.text, voice.engineVoice), sampleRate: KOKORO_SAMPLE_RATE }
      : await chatterboxSynthesize(block.text, voice);
    const samples = new Float32Array(speech.length + Math.round(PAUSE[block.kind] * rate));
    samples.set(speech);
    duration = samples.length / rate;
    if (hasFfmpeg()) bytes = await encodeMp3(samples, rate);
    else { bytes = encodeWav(samples, rate); type = "audio/wav"; ext = "wav"; }
  } else {
    bytes = await openaiSynthesize(block.text, voice.engineVoice);
    duration = mp3Duration(bytes);
  }
  const { dir, meta } = paths(voice, hash);
  await mkdir(dir, { recursive: true });
  const name = `${hash}.${ext}`;
  await writeFile(join(dir, `${name}.part`), bytes);
  await rename(join(dir, `${name}.part`), join(dir, name));
  await writeFile(meta, JSON.stringify({ name, type, duration: Math.round(duration * 1000) / 1000, bytes: bytes.length, words: block.words }));
  return { file: join(dir, name), type, duration, bytes: bytes.length };
}

/* ---------- The render queue ---------- */

type Job = { key: string; voice: StudioVoice; block: NarrationBlock; hash: string; priority: number; promise: Promise<Rendered>; start: () => void };
const queue: Job[] = [];
const jobs = new Map<string, Job>();
let running = 0;

function pump() {
  const limit = narrationProvider() === "openai" ? 3 : 1;
  while (running < limit && queue.length) {
    queue.sort((a, b) => b.priority - a.priority);
    const job = queue.shift()!;
    running++;
    job.start();
  }
}

/**
 * Renders a passage, or joins the render already under way. Listening asks with
 * high priority; read-ahead asks with low priority and is dropped if the queue is long.
 */
export function requestRender(voice: StudioVoice, block: NarrationBlock, priority = 10): Promise<Rendered> {
  const hash = hashFor(voice, block);
  const done = findRendered(voice, hash);
  if (done) return Promise.resolve(done);
  const key = `${voice.id}/${hash}`;
  const existing = jobs.get(key);
  if (existing) {
    existing.priority = Math.max(existing.priority, priority);
    return existing.promise;
  }
  let start!: () => void;
  const promise = new Promise<Rendered>((ok, fail) => {
    start = () => render(voice, block, hash).then(ok, fail).finally(() => { running--; jobs.delete(key); pump(); });
  });
  const job: Job = { key, voice, block, hash, priority, promise, start };
  jobs.set(key, job);
  queue.push(job);
  pump();
  return promise;
}

/** Quietly renders passages ahead of the listener. */
export function readAhead(voice: StudioVoice, blocks: NarrationBlock[]) {
  if (queue.length > 24) return;
  for (const b of blocks) requestRender(voice, b, 1).catch((e) => console.error("[narration] read-ahead failed:", e));
}
