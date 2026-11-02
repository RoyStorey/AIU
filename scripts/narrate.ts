/**
 * Renders studio narration ahead of time, so listeners never wait.
 *
 *   npm run narrate -- "AMH 101"                     every lesson, every voice the provider offers
 *   npm run narrate -- "AMH 101" --voices heart,george
 *   npm run narrate -- "AMH 101" --lesson 2 --voices heart
 *   npm run narrate -- --setup                       download the Kokoro model and voices, then stop
 *   npm run narrate -- --previews                    render the short voice samples in public/narration/previews
 *
 * Audio already rendered is skipped, so the command can be stopped and run again.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { authoredCourses } from "@/content/courses";
import { ensureKokoroFiles } from "@/lib/narration/kokoro";
import { pageNarration } from "@/lib/narration/script";
import { speakable } from "@/lib/narration/speakable";
import { findRendered, hashFor, narrationProvider, requestRender } from "@/lib/narration/store";
import { KOKORO_VOICES, OPENAI_VOICES, voiceSlug, type StudioVoice } from "@/lib/narration/voices";

const args = process.argv.slice(2);
const flag = (name: string) => {
  const i = args.indexOf(`--${name}`);
  return i < 0 ? undefined : args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : "";
};
const provider = narrationProvider();
const family = provider === "openai" ? OPENAI_VOICES : KOKORO_VOICES;

function pickVoices(): StudioVoice[] {
  const wanted = flag("voices");
  if (!wanted || wanted === "all") return family;
  return wanted.split(",").map((w) => {
    const v = family.find((f) => f.name.toLowerCase() === w.trim().toLowerCase() || f.id === w.trim() || f.engineVoice === w.trim());
    if (!v) throw new Error(`Unknown voice "${w}". Choose from: ${family.map((f) => f.name).join(", ")}.`);
    return v;
  });
}

const clock = (s: number) => `${Math.floor(s / 3600)}h${String(Math.floor((s % 3600) / 60)).padStart(2, "0")}m`;

async function previews() {
  const line = speakable("In April 1775, British regulars marched out of Boston toward Concord. By nightfall the colonies were at war, and the question was no longer whether Parliament could tax America, but whether it could govern it at all.");
  const dir = join("public", "narration", "previews");
  await mkdir(dir, { recursive: true });
  for (const v of pickVoices()) {
    const r = await requestRender(v, { id: "preview", kind: "paragraph", text: line, words: line.split(/\s+/).length });
    const { readFile } = await import("node:fs/promises");
    await writeFile(join(dir, `${voiceSlug(v.id)}.mp3`), await readFile(r.file));
    console.log(`  ${v.name}: ${r.duration.toFixed(1)}s`);
  }
}

async function main() {
  if (provider === "off") throw new Error("AIU_NARRATION_PROVIDER is off.");
  const voices = pickVoices();
  if (provider === "kokoro") await ensureKokoroFiles(voices.map((v) => v.engineVoice), (s) => console.log(s));
  if (args.includes("--setup")) return console.log("Kokoro is ready.");
  if (args.includes("--previews")) return previews();

  const code = args.find((a, i) => !a.startsWith("--") && !(i > 0 && args[i - 1].startsWith("--")));
  const course = code && authoredCourses[Object.keys(authoredCourses).find((k) => k.replace(/\s/g, "").toLowerCase() === code.replace(/[\s-]/g, "").toLowerCase()) ?? ""];
  if (!course) throw new Error(`Name a course, e.g. npm run narrate -- "AMH 101". Courses: ${Object.keys(authoredCourses).join(", ")}.`);
  const only = flag("lesson") ? Number(flag("lesson")) : undefined;

  const work = course.lessons.flatMap((lesson, li) => (only && li + 1 !== only ? [] :
    lesson.pages.flatMap((_, pi) => pageNarration(lesson, li, pi).map((block) => ({ li, pi, block })))));
  for (const voice of voices) {
    const todo = work.filter((w) => !findRendered(voice, hashFor(voice, w.block)));
    console.log(`${voice.name} (${voice.description}): ${work.length - todo.length} of ${work.length} passages already rendered.`);
    const started = Date.now();
    let audio = 0;
    for (const [i, w] of todo.entries()) {
      const r = await requestRender(voice, w.block);
      audio += r.duration;
      const elapsed = (Date.now() - started) / 1000;
      const left = (elapsed / (i + 1)) * (todo.length - i - 1);
      process.stdout.write(`\r  lesson ${w.li + 1}, page ${w.pi + 1}: ${i + 1}/${todo.length} passages, ${clock(audio)} of audio, about ${clock(left)} left   `);
    }
    if (todo.length) process.stdout.write("\n");
  }
}

main().then(() => process.exit(0), (e) => { console.error(e instanceof Error ? e.message : e); process.exit(1); });
