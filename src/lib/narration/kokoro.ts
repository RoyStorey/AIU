/**
 * Kokoro-82M, an open-weight neural text-to-speech model (Apache-2.0), run on
 * the server with ONNX Runtime. The text normalization and phonemization below
 * are adapted from kokoro-js 1.2.1 (Apache-2.0, © Joshua Lochner / hexgrad).
 *
 * Needs the optional packages `onnxruntime-node` and `phonemizer`, and the
 * model weights and voice files, which are downloaded on first use from the
 * model's official repository into AIU_KOKORO_DIR (default data/models/kokoro).
 */
import { existsSync } from "node:fs";
import { availableParallelism } from "node:os";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";

export const KOKORO_SAMPLE_RATE = 24_000;
const STYLE_DIM = 256;
const MAX_PHONEMES = 500;
const REPO = "https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX/resolve/main";
const MODEL_FILE = "model_quantized.onnx";

export const kokoroDir = () => resolve(process.env.AIU_KOKORO_DIR ?? "data/models/kokoro");

/* ---------- Text normalization (from kokoro-js) ---------- */

function splitNum(match: string): string {
  if (match.includes(".")) return match;
  if (match.includes(":")) {
    const [h, m] = match.split(":").map(Number);
    return m === 0 ? `${h} o'clock` : m < 10 ? `${h} oh ${m}` : `${h} ${m}`;
  }
  const year = parseInt(match.slice(0, 4), 10);
  if (year < 1100 || year % 1000 < 10) return match;
  const left = match.slice(0, 2);
  const right = parseInt(match.slice(2, 4), 10);
  const s = match.endsWith("s") ? "s" : "";
  if (year % 1000 >= 100 && year % 1000 <= 999) {
    if (right === 0) return `${left} hundred${s}`;
    if (right < 10) return `${left} oh ${right}${s}`;
  }
  return `${left} ${right}${s}`;
}

function money(match: string): string {
  const unit = match[0] === "$" ? "dollar" : "pound";
  if (isNaN(Number(match.slice(1)))) return `${match.slice(1)} ${unit}s`;
  if (!match.includes(".")) return `${match.slice(1)} ${unit}${match.slice(1) === "1" ? "" : "s"}`;
  const [whole, frac] = match.slice(1).split(".");
  const cents = parseInt(frac.padEnd(2, "0"), 10);
  const small = match[0] === "$" ? (cents === 1 ? "cent" : "cents") : (cents === 1 ? "penny" : "pence");
  return `${whole} ${unit}${whole === "1" ? "" : "s"} and ${cents} ${small}`;
}

const point = (match: string) => {
  const [a, b] = match.split(".");
  return `${a} point ${b.split("").join(" ")}`;
};

export function normalizeForKokoro(text: string): string {
  return text
    .replace(/[‘’]/g, "'").replace(/«/g, "“").replace(/»/g, "”").replace(/[“”]/g, '"')
    .replace(/\(/g, "«").replace(/\)/g, "»")
    .replace(/[^\S \n]/g, " ").replace(/  +/g, " ").replace(/(?<=\n) +(?=\n)/g, "")
    .replace(/\bD[Rr]\.(?= [A-Z])/g, "Doctor")
    .replace(/\b(?:Mr\.|MR\.(?= [A-Z]))/g, "Mister")
    .replace(/\b(?:Ms\.|MS\.(?= [A-Z]))/g, "Miss")
    .replace(/\b(?:Mrs\.|MRS\.(?= [A-Z]))/g, "Mrs")
    .replace(/\betc\.(?! [A-Z])/gi, "etc")
    .replace(/\d*\.\d+|\b\d{4}s?\b|(?<!:)\b(?:[1-9]|1[0-2]):[0-5]\d\b(?!:)/g, splitNum)
    .replace(/(?<=\d),(?=\d)/g, "")
    .replace(/[$£]\d+(?:\.\d+)?(?: hundred| thousand| (?:[bm]|tr)illion)*\b|[$£]\d+\.\d\d?\b/gi, money)
    .replace(/\d*\.\d+/g, point)
    .replace(/(?<=\d)-(?=\d)/g, " to ")
    .replace(/(?<=\d)S/g, " S")
    .replace(/(?<=[BCDFGHJ-NP-TV-Z])'?s\b/g, "'S")
    .replace(/(?<=X')S\b/g, "s")
    .replace(/(?:[A-Za-z]\.){2,} [a-z]/g, (m) => m.replace(/\./g, "-"))
    .replace(/(?<=[A-Z])\.(?=[A-Z])/gi, "-")
    .trim();
}

const PUNCTUATION = ';:,.!?¡¿—…"«»“”(){}[]';
const PUNCT_RUN = new RegExp(`(\\s*[${PUNCTUATION.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}]+\\s*)+`, "g");

type Phonemizer = (text: string, language: string) => Promise<string[]>;
let phonemizerModule: Promise<Phonemizer> | undefined;
const loadPhonemizer = () => (phonemizerModule ??= import("phonemizer").then((m) => m.phonemize as Phonemizer));

/** Text to the IPA phoneme string the model reads, keeping punctuation (which shapes the pauses) as it is. */
export async function phonemize(text: string, british: boolean): Promise<string> {
  const espeak = await loadPhonemizer();
  const normalized = normalizeForKokoro(text);
  const parts: { punct: boolean; text: string }[] = [];
  let last = 0;
  for (const m of normalized.matchAll(PUNCT_RUN)) {
    if (last < m.index!) parts.push({ punct: false, text: normalized.slice(last, m.index) });
    if (m[0].length) parts.push({ punct: true, text: m[0] });
    last = m.index! + m[0].length;
  }
  if (last < normalized.length) parts.push({ punct: false, text: normalized.slice(last) });
  const spoken = await Promise.all(parts.map(async (p) => (p.punct ? p.text : (await espeak(p.text, british ? "en" : "en-us")).join(" "))));
  let ipa = spoken.join("")
    .replace(/kəkˈoːɹoʊ/g, "kˈoʊkəɹoʊ").replace(/kəkˈɔːɹəʊ/g, "kˈəʊkəɹəʊ")
    .replace(/ʲ/g, "j").replace(/r/g, "ɹ").replace(/x/g, "k").replace(/ɬ/g, "l")
    .replace(/(?<=[a-zɹː])(?=hˈʌndɹɪd)/g, " ")
    .replace(/ z(?=[;:,.!?¡¿—…"«»“” ]|$)/g, "z");
  if (!british) ipa = ipa.replace(/(?<=nˈaɪn)ti(?!ː)/g, "di");
  return ipa.trim();
}

/* ---------- Tokens, voices, and the model ---------- */

/** Kokoro-82M's phoneme vocabulary (index 0, "$", is the padding token at either end). */
const VOCAB: Record<string, number> = {
  ";": 1, ":": 2, ",": 3, ".": 4, "!": 5, "?": 6, "—": 9, "…": 10, '"': 11, "(": 12, ")": 13, "“": 14, "”": 15, " ": 16,
  "̃": 17, "ʣ": 18, "ʥ": 19, "ʦ": 20, "ʨ": 21, "ᵝ": 22, "ꭧ": 23, A: 24, I: 25, O: 31, Q: 33, S: 35, T: 36,
  W: 39, Y: 41, "ᵊ": 42, a: 43, b: 44, c: 45, d: 46, e: 47, f: 48, h: 50, i: 51, j: 52, k: 53, l: 54, m: 55, n: 56,
  o: 57, p: 58, q: 59, r: 60, s: 61, t: 62, u: 63, v: 64, w: 65, x: 66, y: 67, z: 68, "ɑ": 69, "ɐ": 70, "ɒ": 71,
  "æ": 72, "β": 75, "ɔ": 76, "ɕ": 77, "ç": 78, "ɖ": 80, "ð": 81, "ʤ": 82, "ə": 83, "ɚ": 85, "ɛ": 86, "ɜ": 87,
  "ɟ": 90, "ɡ": 92, "ɥ": 99, "ɨ": 101, "ɪ": 102, "ʝ": 103, "ɯ": 110, "ɰ": 111, "ŋ": 112, "ɳ": 113, "ɲ": 114,
  "ɴ": 115, "ø": 116, "ɸ": 118, "θ": 119, "œ": 120, "ɹ": 123, "ɾ": 125, "ɻ": 126, "ʁ": 128, "ɽ": 129, "ʂ": 130,
  "ʃ": 131, "ʈ": 132, "ʧ": 133, "ʊ": 135, "ʋ": 136, "ʌ": 138, "ɣ": 139, "ɤ": 140, "χ": 142, "ʎ": 143, "ʒ": 147,
  "ʔ": 148, "ˈ": 156, "ˌ": 157, "ː": 158, "ʰ": 162, "ʲ": 164, "↓": 169, "→": 171, "↗": 172, "↘": 173, "ᵻ": 177,
};

const tokens = (ipa: string) => [0, ...[...ipa].flatMap((c) => (c in VOCAB ? [VOCAB[c]] : [])), 0];

async function download(url: string, to: string) {
  await mkdir(dirname(to), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Could not download ${url}: ${res.status} ${res.statusText}`);
  const tmp = `${to}.part`;
  await writeFile(tmp, Buffer.from(await res.arrayBuffer()));
  await rename(tmp, to);
}

/** Makes sure the model and the given voices are on disk, downloading what is missing. */
export async function ensureKokoroFiles(voices: string[], log: (s: string) => void = () => {}) {
  const dir = kokoroDir();
  const model = join(dir, MODEL_FILE);
  if (!existsSync(model)) {
    log(`Downloading the Kokoro model (about 92 MB) to ${model} …`);
    await download(`${REPO}/onnx/${MODEL_FILE}`, model);
  }
  for (const v of voices) {
    const file = join(dir, "voices", `${v}.bin`);
    if (!existsSync(file)) {
      log(`Downloading voice ${v} …`);
      await download(`${REPO}/voices/${v}.bin`, file);
    }
  }
}

type Ort = typeof import("onnxruntime-node");
type Session = import("onnxruntime-node").InferenceSession;
let session: Promise<{ ort: Ort; session: Session }> | undefined;
const styles = new Map<string, Float32Array>();

async function load() {
  return (session ??= (async () => {
    const ort = await import("onnxruntime-node");
    // Use every core for each inference (AIU_KOKORO_THREADS overrides): passages are rendered one at a time.
    const threads = Number(process.env.AIU_KOKORO_THREADS) || availableParallelism();
    const s = await ort.InferenceSession.create(join(kokoroDir(), MODEL_FILE), {
      graphOptimizationLevel: "all", intraOpNumThreads: threads, interOpNumThreads: 1, executionMode: "sequential",
    });
    return { ort, session: s };
  })().catch((e) => { session = undefined; throw e; }));
}

async function voiceStyles(voice: string): Promise<Float32Array> {
  let data = styles.get(voice);
  if (!data) {
    const bytes = await readFile(join(kokoroDir(), "voices", `${voice}.bin`));
    data = new Float32Array(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength));
    styles.set(voice, data);
  }
  return data;
}

/** Whether the optional runtime packages are installed. */
export async function kokoroAvailable(): Promise<boolean> {
  try {
    await import("onnxruntime-node");
    await import("phonemizer");
    return true;
  } catch {
    return false;
  }
}

/** Splits text into sentences, and over-long sentences at their commas, so each piece fits the model's window. */
function pieces(text: string): string[] {
  // A sentence ends at . ! ? or … (and any closing quote) before a capital, but not after an initial ("John Q. Adams", "B.C.").
  return text.split(/(?<=[.!?…]["”’')\]]*)(?<!\b[A-Z]\.)(?<!\b[A-Z]\.[A-Z]\.)\s+(?=["“‘(]?[A-Z0-9])/).map((s) => s.trim()).filter(Boolean);
}

/** Synthesizes a passage as 24 kHz mono samples. */
export async function kokoroSynthesize(text: string, voice: string): Promise<Float32Array> {
  await ensureKokoroFiles([voice]);
  const { ort, session: s } = await load();
  const style = await voiceStyles(voice);
  const british = voice.startsWith("b");

  // Group sentences into chunks that fit the model's window; split a sentence that alone is too long.
  const chunks: string[] = [];
  let current = "";
  for (const sentence of pieces(text)) {
    const ipa = await phonemize(sentence, british);
    if (ipa.length > MAX_PHONEMES) {
      if (current) chunks.push(current);
      current = "";
      let part = "";
      for (const clause of sentence.split(/(?<=[,;:—])\s+/)) {
        const joined = part ? `${part} ${clause}` : clause;
        if (part && (await phonemize(joined, british)).length > MAX_PHONEMES) { chunks.push(await phonemize(part, british)); part = clause; }
        else part = joined;
      }
      if (part) chunks.push(await phonemize(part, british));
      continue;
    }
    if (current && current.length + 1 + ipa.length > MAX_PHONEMES) { chunks.push(current); current = ipa; }
    else current = current ? `${current} ${ipa}` : ipa;
  }
  if (current) chunks.push(current);

  const gap = new Float32Array(Math.round(KOKORO_SAMPLE_RATE * 0.12));
  const parts: Float32Array[] = [];
  for (const ipa of chunks) {
    const ids = tokens(ipa.slice(0, 510));
    const index = Math.min(Math.max(ids.length - 2, 0), 509);
    const feeds = {
      input_ids: new ort.Tensor("int64", BigInt64Array.from(ids.map(BigInt)), [1, ids.length]),
      style: new ort.Tensor("float32", style.slice(index * STYLE_DIM, (index + 1) * STYLE_DIM), [1, STYLE_DIM]),
      speed: new ort.Tensor("float32", new Float32Array([1]), [1]),
    };
    const out = await s.run(feeds);
    parts.push(out[s.outputNames[0]].data as Float32Array, gap);
  }
  const total = parts.reduce((n, p) => n + p.length, 0);
  const all = new Float32Array(total);
  let at = 0;
  for (const p of parts) { all.set(p, at); at += p.length; }
  return all;
}
