import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import {
  Course,
  Program,
  School,
  courseSlug,
  type Course as CourseT,
  type Program as ProgramT,
  type School as SchoolT,
} from "./schema";

export const CONTENT_DIR = path.join(process.cwd(), "content");

function readJson(file: string): unknown {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function listJson(dir: string) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .sort()
    .map((f) => path.join(dir, f));
}

export const getSchools = cache((): SchoolT[] => {
  const file = path.join(CONTENT_DIR, "schools.json");
  return School.array().parse(readJson(file));
});

export const getSchool = cache((slug: string) => getSchools().find((s) => s.slug === slug));

export const getPrograms = cache((): ProgramT[] =>
  listJson(path.join(CONTENT_DIR, "programs"))
    .map((f) => Program.parse(readJson(f)))
    .sort((a, b) => a.title.localeCompare(b.title)),
);

export const getProgram = cache((slug: string) => getPrograms().find((p) => p.slug === slug));

export const getCourses = cache((): CourseT[] =>
  listJson(path.join(CONTENT_DIR, "courses")).map((f) => Course.parse(readJson(f))),
);

export const getCourse = cache((code: string): CourseT | undefined => {
  const file = path.join(CONTENT_DIR, "courses", `${courseSlug(code)}.json`);
  if (!fs.existsSync(file)) return undefined;
  return Course.parse(readJson(file));
});

/** Every course in a program, in degree-plan order. */
export const getProgramCourses = cache((slug: string) => {
  const program = getProgram(slug);
  if (!program) return [];
  return program.terms.flatMap((term) =>
    term.courses.map((code) => ({ term, course: getCourse(code) })),
  );
});

export function programCredits(program: ProgramT) {
  return program.terms
    .flatMap((t) => t.courses)
    .reduce((sum, code) => sum + (getCourse(code)?.credits ?? 0), 0);
}

export function programPublishedShare(program: ProgramT) {
  const codes = program.terms.flatMap((t) => t.courses);
  const published = codes.filter((c) => getCourse(c)?.status === "published").length;
  return { published, total: codes.length };
}

export function programsUsingCourse(code: string) {
  return getPrograms().filter((p) => p.terms.some((t) => t.courses.includes(code)));
}

export const getSubjects = cache((): Record<string, string> => {
  const file = path.join(CONTENT_DIR, "subjects.json");
  return fs.existsSync(file) ? (readJson(file) as Record<string, string>) : {};
});

export const subjectOf = (code: string) => code.split(" ")[0];
