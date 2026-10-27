import { z } from "zod";

/**
 * Curriculum schemas. These are shared by the website (to read /content) and
 * by the generation scripts (to constrain and validate model output), so the
 * shape of a degree is defined in exactly one place.
 */

export const SESSIONS = ["Fall I", "Fall II", "Spring I", "Spring II", "Summer"] as const;
export const YEARS = 4;
export const TERMS_PER_YEAR = SESSIONS.length;
export const TOTAL_TERMS = YEARS * TERMS_PER_YEAR;
export const COURSES_PER_TERM = 2;
export const WEEKS_PER_COURSE = 8;
export const CREDITS_PER_COURSE = 3;

export const COURSE_CATEGORIES = [
  "general-education",
  "major-core",
  "major-elective",
  "capstone",
] as const;

export const CourseCategory = z.enum(COURSE_CATEGORIES);

export const CourseCode = z
  .string()
  .regex(/^[A-Z]{2,4} \d{3}$/, "Course codes look like 'CS 101'");

export const School = z.object({
  slug: z.string(),
  name: z.string(),
  description: z.string(),
});
export type School = z.infer<typeof School>;

export const Question = z.object({
  prompt: z.string(),
  choices: z.array(z.string()).describe("Exactly four answer choices"),
  answerIndex: z.number().int().describe("Zero-based index of the correct choice"),
  explanation: z.string().describe("Why the correct answer is correct"),
});
export type Question = z.infer<typeof Question>;

export const Assignment = z.object({
  title: z.string(),
  prompt: z.string().describe("Markdown. What the student must write or produce."),
  rubric: z.array(z.string()).describe("3-5 criteria used for grading"),
  minWords: z.number().int(),
});
export type Assignment = z.infer<typeof Assignment>;

export const Week = z.object({
  number: z.number().int(),
  title: z.string(),
  overview: z.string(),
  objectives: z.array(z.string()),
  lesson: z.string().describe("The full lesson in Markdown"),
  keyTerms: z.array(z.object({ term: z.string(), definition: z.string() })),
  quiz: z.array(Question),
  assignment: Assignment,
});
export type Week = z.infer<typeof Week>;

/** What a degree plan knows about a course before its materials exist. */
export const CourseSummary = z.object({
  code: CourseCode,
  title: z.string(),
  credits: z.number().int(),
  category: CourseCategory,
  description: z.string(),
  prerequisites: z.array(CourseCode),
});
export type CourseSummary = z.infer<typeof CourseSummary>;

export const Generation = z.object({
  model: z.string(),
  generatedAt: z.string(),
});

export const Course = CourseSummary.extend({
  status: z.enum(["planned", "published"]),
  outcomes: z.array(z.string()).default([]),
  weeks: z.array(Week).default([]),
  finalExam: z.array(Question).default([]),
  generation: Generation.optional(),
});
export type Course = z.infer<typeof Course>;

export const Term = z.object({
  index: z.number().int(),
  year: z.number().int(),
  session: z.enum(SESSIONS),
  courses: z.array(CourseCode),
});
export type Term = z.infer<typeof Term>;

export const Program = z.object({
  slug: z.string(),
  title: z.string(),
  degree: z.string(),
  major: z.string(),
  school: z.string(),
  tagline: z.string(),
  overview: z.string(),
  outcomes: z.array(z.string()),
  careers: z.array(z.object({ title: z.string(), description: z.string() })),
  terms: z.array(Term),
  generation: Generation.optional(),
});
export type Program = z.infer<typeof Program>;

export function termLabel(term: Pick<Term, "year" | "session">) {
  return `Year ${term.year} · ${term.session}`;
}

export function courseSlug(code: string) {
  return code.toLowerCase().replace(/\s+/g, "-");
}

export function codeFromSlug(slug: string) {
  const match = /^([a-z]{2,4})-(\d{3})$/.exec(slug.toLowerCase());
  return match ? `${match[1].toUpperCase()} ${match[2]}` : null;
}
