/**
 * Renders studio narration ahead of time, so listeners never wait.
 *
 *   npm run narrate -- "AMH 101"                     every lesson, every voice the provider offers
 *   npm run narrate -- "AMH 101, ASH 101" --voices heart,george
 *   npm run narrate -- --narrated --voices chatterbox --until 07:00
 *                                                    every narrated course (AIU_NARRATION_COURSES); stop at 7 a.m.
 *   npm run narrate -- "AMH 101" --lesson 2 --voices heart
 *   npm run narrate -- --setup                       get the engine ready (Kokoro: download the model), then stop
 *   npm run narrate -- --previews                    render each voice's short sample for the player
 *
 * Settings come from .env.local, as for the site. Audio already rendered is
 * skipped, so the command can be stopped and run again, and run every night.
 */
import { loadEnvConfig } from "@next/env";
import { mkdir, readFile, unlink, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { authoredCourses } from "@/content/courses";
import { showChatterboxLog, warmChatterbox } from "@/lib/narration/chatterbox";
import { ensureKokoroFiles } from "@/lib/narration/kokoro";
import { pageNarration } from "@/lib/narration/script";
import { speakable } from "@/lib/narration/speakable";
import { findRendered, hashFor, isNarrated, narrationProvider, providerVoices, requestRender } from "@/lib/narration/store";
import { voiceSlug, type StudioVoice } from "@/lib/narration/voices";

loadEnvConfig(process.cwd());

const args = process.argv.slice(2);
const flag = (name: string) => {
  const i = args.indexOf(`--${name}`);
  return i < 0 ? undefined : args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : "";
};
const provider = narrationProvider();
const family = providerVoices(provider);
const tty = Boolean(process.stdout.isTTY);
const stamp = () => new Date().toLocaleString();

function pickVoices(): StudioVoice[] {
  const wanted = flag("voices");
  if (!wanted || wanted === "all") return family;
  const norm = (s: string) => s.toLowerCase().replace(/\s+hd$/, "").trim();
  return wanted.split(",").map((w) => {
    const v = family.find((f) => norm(f.name) === norm(w) || f.id === w.trim() || f.engineVoice === w.trim() || f.id.endsWith(`:${norm(w)}`));
    if (!v) throw new Error(`Unknown voice "${w}". Choose from: ${family.map((f) => f.name).join(", ")}.`);
    return v;
  });
}

/** "07:00" → the next time the clock reads 7:00. */
function deadline(): number | null {
  const until = flag("until");
  if (!until) return null;
  const m = until.match(/^(\d{1,2}):(\d{2})$/);
  if (!m) throw new Error(`--until takes a time like 07:00, not "${until}".`);
  const d = new Date();
  d.setHours(Number(m[1]), Number(m[2]), 0, 0);
  if (d.getTime() <= Date.now()) d.setDate(d.getDate() + 1);
  return d.getTime();
}

function courses() {
  const codes = Object.keys(authoredCourses);
  if (args.includes("--narrated")) return codes.filter(isNarrated);
  const named = args.find((a, i) => !a.startsWith("--") && !(i > 0 && args[i - 1].startsWith("--") && args[i - 1] !== "--narrated"));
  if (!named) return [];
  return named.split(",").map((n) => {
    const code = codes.find((k) => k.replace(/\s/g, "").toLowerCase() === n.replace(/[\s-]/g, "").toLowerCase());
    if (!code) throw new Error(`No course "${n.trim()}". Courses: ${codes.join(", ")}.`);
    return code;
  });
}

const clock = (s: number) => `${Math.floor(s / 3600)}h${String(Math.floor((s % 3600) / 60)).padStart(2, "0")}m`;

async function previews(voices: StudioVoice[]) {
  const line = speakable("In April 1775, British regulars marched out of Boston toward Concord. By nightfall the colonies were at war, and the question was no longer whether Parliament could tax America, but whether it could govern it at all.");
  const dir = join("public", "narration", "previews");
  await mkdir(dir, { recursive: true });
  for (const v of voices) {
    const r = await requestRender(v, { id: "preview", kind: "paragraph", text: line, words: line.split(/\s+/).length });
    await writeFile(join(dir, `${voiceSlug(v.id)}.mp3`), await readFile(r.file));
    // A sample is not narration: keep it out of the cache, so the voice isn't listed as recorded.
    await unlink(r.file).catch(() => {});
    await unlink(r.file.replace(/\.(mp3|wav)$/, ".json")).catch(() => {});
    console.log(`  ${v.name}: ${r.duration.toFixed(1)}s`);
  }
}

async function main() {
  if (provider === "off") throw new Error("AIU_NARRATION_PROVIDER is off.");
  const voices = pickVoices();
  if (provider === "kokoro") await ensureKokoroFiles(voices.map((v) => v.engineVoice), (s) => console.log(s));
  if (provider === "chatterbox") {
    showChatterboxLog(true);
    console.log("Starting Chatterbox (the first time, it downloads the model, a few GB) …");
    console.log(`Chatterbox is running on ${await warmChatterbox()}.`);
    showChatterboxLog(tty);
  }
  if (args.includes("--setup")) return console.log(`${provider} is ready.`);
  if (args.includes("--previews")) return previews(voices);

  const codes = courses();
  if (!codes.length) throw new Error(`Name a course, e.g. npm run narrate -- "AMH 101", or use --narrated. Courses: ${Object.keys(authoredCourses).join(", ")}.`);
  const only = flag("lesson") ? Number(flag("lesson")) : undefined;
  const stopAt = deadline();
  console.log(`${stamp()}: narrating ${codes.join(", ")} in ${voices.map((v) => v.name).join(", ")}${stopAt ? `, until ${new Date(stopAt).toLocaleTimeString()}` : ""}.`);

  for (const voice of voices) {
    for (const code of codes) {
      const course = authoredCourses[code];
      const work = course.lessons.flatMap((lesson, li) => (only && li + 1 !== only ? [] :
        lesson.pages.flatMap((_, pi) => pageNarration(lesson, li, pi).map((block) => ({ li, pi, block })))));
      const todo = work.filter((w) => !findRendered(voice, hashFor(voice, w.block)));
      console.log(`${code}, ${voice.name}: ${work.length - todo.length} of ${work.length} passages already rendered.`);
      const started = Date.now();
      let audio = 0;
      let page = "";
      for (const [i, w] of todo.entries()) {
        if (stopAt && Date.now() >= stopAt) {
          console.log(`\n${stamp()}: stopping, as asked. ${todo.length - i} passages are left for next time.`);
          return;
        }
        const r = await requestRender(voice, w.block);
        audio += r.duration;
        const elapsed = (Date.now() - started) / 1000;
        const left = (elapsed / (i + 1)) * (todo.length - i - 1);
        const here = `lesson ${w.li + 1}, page ${w.pi + 1}`;
        if (tty) process.stdout.write(`\r  ${here}: ${i + 1}/${todo.length} passages, ${clock(audio)} of audio, about ${clock(left)} left   `);
        else if (here !== page) console.log(`  ${stamp()}: ${here} (${i + 1}/${todo.length}, about ${clock(left)} left)`);
        page = here;
      }
      if (todo.length && tty) process.stdout.write("\n");
    }
  }
  console.log(`${stamp()}: done. Everything asked for is rendered.`);
}

main().then(() => process.exit(0), (e) => { console.error(`${stamp()}: ${e instanceof Error ? e.message : e}`); process.exit(1); });
