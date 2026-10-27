import fs from "node:fs";
import path from "node:path";
import { Course, Program, School, courseSlug, type CourseSummary } from "../../src/lib/content/schema";

/** Plain filesystem access to /content for scripts (no React request cache). */

export const CONTENT = path.join(process.cwd(), "content");
const p = (...parts: string[]) => path.join(CONTENT, ...parts);

function read<T>(file: string, fallback: T): T {
  return fs.existsSync(file) ? (JSON.parse(fs.readFileSync(file, "utf8")) as T) : fallback;
}

export function write(file: string, data: unknown) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
}

export const schools = () => School.array().parse(read(p("schools.json"), []));
export const saveSchools = (s: School[]) => write(p("schools.json"), s);

export const subjects = () => read<Record<string, string>>(p("subjects.json"), {});
export const saveSubjects = (s: Record<string, string>) =>
  write(p("subjects.json"), Object.fromEntries(Object.entries(s).sort(([a], [b]) => a.localeCompare(b))));

export const programFile = (slug: string) => p("programs", `${slug}.json`);
export const courseFile = (code: string) => p("courses", `${courseSlug(code)}.json`);

export function programs() {
  const dir = p("programs");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => Program.parse(read(path.join(dir, f), {})));
}

export function courses() {
  const dir = p("courses");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => Course.parse(read(path.join(dir, f), {})));
}

export function course(code: string) {
  const file = courseFile(code);
  return fs.existsSync(file) ? Course.parse(read(file, {})) : undefined;
}

export function saveCourse(c: Course) {
  write(courseFile(c.code), Course.parse(c));
}

/** Writes a "planned" course stub unless the course already exists. */
export function ensureCourseStub(summary: CourseSummary) {
  if (course(summary.code)) return false;
  saveCourse({ ...summary, status: "planned", outcomes: [], weeks: [], finalExam: [], resources: [] });
  return true;
}
