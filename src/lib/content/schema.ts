import { z } from "zod";

/**
 * Curriculum schemas. These are shared by the website (to read /content) and
 * by the generation scripts (to constrain and validate model output), so the
 * shape of a program is defined in exactly one place.
 */

export const SESSIONS = ["Fall I", "Fall II", "Spring I", "Spring II", "Summer"] as const;
export type Session = (typeof SESSIONS)[number];
export const TERMS_PER_YEAR = SESSIONS.length;
export const COURSES_PER_TERM = 2;
export const WEEKS_PER_COURSE = 8;
export const DEFAULT_YEARS = 3;

export const COURSE_CATEGORIES = ["foundation", "core", "concentration", "capstone"] as const;
export const CourseCategory = z.enum(COURSE_CATEGORIES);

export const CourseCode = z
  .string()
  .regex(/^[A-Z]{2,4} \d{3}$/, "Course codes look like 'CS 101'");

/** A term entry like "@2" is the second concentration course in the student's chosen concentration. */
export const SlotRef = z.string().regex(/^@\d+$/);
export const isSlot = (code: string) => code.startsWith("@");
export const slotNumber = (code: string) => Number(code.slice(1));

export const School = z.object({
  slug: z.string(),
  name: z.string(),
  description: z.string(),
});
export type School = z.infer<typeof School>;

export const RESOURCE_KINDS = ["book", "video", "documentary", "lecture", "podcast", "website"] as const;

/**
 * A real, human-made resource for further study. Links are derived from the
 * title and creator (store and library searches) unless `url` holds a link that
 * was checked, so a resource never points at an invented URL.
 */
export const Resource = z.object({
  kind: z.enum(RESOURCE_KINDS),
  title: z.string(),
  creator: z.string().describe("Author, director, channel, or publisher"),
  year: z.number().int().nullable().default(null),
  note: z.string().describe("One sentence on why it is worth a student's time"),
  url: z.string().url().nullable().default(null),
  isbn: z.string().nullable().default(null),
  verified: z.boolean().default(false),
});
export type Resource = z.infer<typeof Resource>;

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
  resources: z.array(Resource).default([]),
});
export type Week = z.infer<typeof Week>;

/** What a program plan knows about a course before its materials exist. */
export const CourseSummary = z.object({
  code: CourseCode,
  title: z.string(),
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
  resources: z.array(Resource).default([]),
  generation: Generation.optional(),
});
export type Course = z.infer<typeof Course>;

export const Term = z.object({
  index: z.number().int(),
  courses: z.array(z.union([CourseCode, SlotRef])),
});
export type Term = z.infer<typeof Term>;

export const Concentration = z.object({
  slug: z.string(),
  name: z.string(),
  description: z.string(),
  courses: z.array(CourseCode).describe("Fills the plan's @1, @2, … slots in order"),
});
export type Concentration = z.infer<typeof Concentration>;

export const Program = z.object({
  slug: z.string(),
  title: z.string().describe('The discipline, e.g. "History"'),
  credential: z.string().describe('e.g. "Certificate in History"'),
  school: z.string(),
  tagline: z.string(),
  overview: z.string(),
  outcomes: z.array(z.string()),
  careers: z.array(z.object({ title: z.string(), description: z.string() })),
  terms: z.array(Term),
  concentrations: z.array(Concentration).default([]),
  generation: Generation.optional(),
});
export type Program = z.infer<typeof Program>;

export const termYear = (index: number) => Math.ceil(index / TERMS_PER_YEAR);
export const programYears = (program: Pick<Program, "terms">) => Math.ceil(program.terms.length / TERMS_PER_YEAR);

export function durationLabel(program: Pick<Program, "terms">) {
  const n = program.terms.length;
  const years = Math.floor(n / TERMS_PER_YEAR);
  const extra = n % TERMS_PER_YEAR;
  const parts = [years && `${years} year${years === 1 ? "" : "s"}`, extra && `${extra} term${extra === 1 ? "" : "s"}`];
  return parts.filter(Boolean).join(", ");
}

export const slotCount = (program: Pick<Program, "terms">) =>
  program.terms.flatMap((t) => t.courses).filter(isSlot).length;

/** The plan with concentration slots filled in; slots stay as "@n" when no concentration is chosen. */
export function resolveTerms(program: Program, concentration?: string | null): Term[] {
  const chosen = program.concentrations.find((c) => c.slug === concentration);
  return program.terms.map((t) => ({
    ...t,
    courses: t.courses.map((code) => (isSlot(code) && chosen ? chosen.courses[slotNumber(code) - 1] ?? code : code)),
  }));
}

/** Every course code a program can involve, including all concentration options. */
export function allProgramCodes(program: Program) {
  const codes = program.terms.flatMap((t) => t.courses).filter((c) => !isSlot(c));
  return [...new Set([...codes, ...program.concentrations.flatMap((c) => c.courses)])];
}

export function courseSlug(code: string) {
  return code.toLowerCase().replace(/\s+/g, "-");
}

export function codeFromSlug(slug: string) {
  const match = /^([a-z]{2,4})-(\d{3})$/.exec(slug.toLowerCase());
  return match ? `${match[1].toUpperCase()} ${match[2]}` : null;
}

// ---------------------------------------------------------------------------
// Resource links. Search links always lead somewhere real; direct links are
// used only when a resource carries a checked url or ISBN.
// ---------------------------------------------------------------------------

function isbn10(isbn: string) {
  const digits = isbn.replace(/[^0-9X]/gi, "");
  if (digits.length === 10) return digits;
  if (digits.length !== 13 || !digits.startsWith("978")) return null;
  const core = digits.slice(3, 12);
  const sum = core.split("").reduce((s, d, i) => s + Number(d) * (10 - i), 0);
  const check = (11 - (sum % 11)) % 11;
  return core + (check === 10 ? "X" : String(check));
}

export function resourceLinks(r: Resource, amazonTag?: string) {
  const q = encodeURIComponent(`${r.title} ${r.creator}`);
  const tag = amazonTag ? `&tag=${encodeURIComponent(amazonTag)}` : "";
  const links: { label: string; url: string }[] = [];
  switch (r.kind) {
    case "book": {
      const ten = r.isbn ? isbn10(r.isbn) : null;
      links.push({
        label: "Amazon",
        url: ten ? `https://www.amazon.com/dp/${ten}${amazonTag ? `?tag=${encodeURIComponent(amazonTag)}` : ""}` : `https://www.amazon.com/s?k=${q}&i=stripbooks${tag}`,
      });
      links.push({
        label: "Open Library",
        url: r.isbn ? `https://openlibrary.org/isbn/${r.isbn.replace(/[^0-9X]/gi, "")}` : `https://openlibrary.org/search?q=${q}`,
      });
      break;
    }
    case "video":
    case "lecture":
      links.push({ label: r.url ? "Watch" : "Find on YouTube", url: r.url ?? `https://www.youtube.com/results?search_query=${q}` });
      break;
    case "documentary":
      if (r.url) links.push({ label: "Watch", url: r.url });
      links.push({ label: "Where to watch", url: `https://www.justwatch.com/us/search?q=${encodeURIComponent(r.title)}` });
      break;
    case "podcast":
      links.push({ label: r.url ? "Listen" : "Find the podcast", url: r.url ?? `https://podcasts.apple.com/us/search?term=${encodeURIComponent(r.title)}` });
      break;
    case "website":
      if (r.url) links.push({ label: "Visit", url: r.url });
      break;
  }
  return links;
}

export function bookCover(r: Resource) {
  return r.kind === "book" && r.isbn ? `https://covers.openlibrary.org/b/isbn/${r.isbn.replace(/[^0-9X]/gi, "")}-M.jpg?default=false` : null;
}
