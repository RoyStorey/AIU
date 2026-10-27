/** Validates every file in /content. Runs in CI so a broken plan never ships. */
import { validateCourse, validateProgram } from "./lib/validate";
import * as io from "./lib/io";

const errors: string[] = [];
const schools = new Set(io.schools().map((s) => s.slug));
const subjects = io.subjects();

let courses: ReturnType<typeof io.courses> = [];
let programs: ReturnType<typeof io.programs> = [];
try {
  courses = io.courses();
  programs = io.programs();
} catch (err) {
  console.error("Content failed schema validation:\n", err);
  process.exit(1);
}

const catalog = new Map(courses.map((c) => [c.code, c]));
for (const p of programs) {
  if (!schools.has(p.school)) errors.push(`${p.slug}: unknown school "${p.school}"`);
  errors.push(...validateProgram(p, catalog).map((e) => `${p.slug}: ${e}`));
}
for (const c of courses) {
  errors.push(...validateCourse(c));
  if (!subjects[c.code.split(" ")[0]]) errors.push(`${c.code}: subject prefix missing from subjects.json`);
}

const published = courses.filter((c) => c.status === "published").length;
if (errors.length) {
  console.error(`✗ ${errors.length} problem(s):\n${errors.map((e) => `  - ${e}`).join("\n")}`);
  process.exit(1);
}
console.log(`✓ ${programs.length} programs, ${courses.length} courses (${published} with full materials), ${schools.size} schools`);
