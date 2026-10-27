import "server-only";
import { db } from "@/lib/db";
import type { CourseContent } from "@/lib/schema";

export type Status = "ready" | "drafting" | "failed" | "outline";

export type Subject = {
  slug: string;
  name: string;
  description: string;
  epigraph: string | null;
  attribution: string | null;
  origin: string;
  concentrations: number;
};

export type Concentration = {
  id: number;
  subject_slug: string;
  slug: string;
  name: string;
  description: string;
  origin: string;
  status: Status;
  error: string | null;
};

export type Course = {
  id: string;
  concentration_id: number;
  code: string;
  title: string;
  stage: number;
  position: number;
  summary: string;
  texts: string[];
  status: Status;
  error: string | null;
  lessons: number;
};

export type CourseWithContent = Course & {
  content: CourseContent | null;
  concentration: Concentration;
  subject: Subject;
};

const COURSE_COLUMNS = `
  id, concentration_id, code, title, stage, position, summary, texts, status, error,
  COALESCE(json_array_length(content, '$.lessons'), 0) AS lessons
`;

/** A course as stored: its core texts and content are JSON strings. */
type CourseRow = Omit<Course, "texts"> & { texts: string; content?: string | null };

function toCourse(row: unknown): Course {
  const course = row as CourseRow;
  return { ...course, texts: JSON.parse(course.texts) };
}

export function listSubjects(): Subject[] {
  return db.prepare(`
    SELECT s.*, (SELECT COUNT(*) FROM concentrations c WHERE c.subject_slug = s.slug) AS concentrations
    FROM subjects s ORDER BY s.position, s.name
  `).all() as unknown as Subject[];
}

export function getSubject(slug: string): Subject | null {
  const row = db.prepare(`
    SELECT s.*, (SELECT COUNT(*) FROM concentrations c WHERE c.subject_slug = s.slug) AS concentrations
    FROM subjects s WHERE s.slug = ?
  `).get(slug);
  return (row as unknown as Subject) ?? null;
}

export function listConcentrations(subjectSlug: string): (Concentration & { courses: number })[] {
  return db.prepare(`
    SELECT c.*, (SELECT COUNT(*) FROM courses k WHERE k.concentration_id = c.id) AS courses
    FROM concentrations c WHERE c.subject_slug = ? ORDER BY c.position, c.id
  `).all(subjectSlug) as unknown as (Concentration & { courses: number })[];
}

export function getConcentration(subjectSlug: string, slug: string): Concentration | null {
  const row = db.prepare("SELECT * FROM concentrations WHERE subject_slug = ? AND slug = ?")
    .get(subjectSlug, slug);
  return (row as unknown as Concentration) ?? null;
}

export function getConcentrationById(id: number): Concentration | null {
  const row = db.prepare("SELECT * FROM concentrations WHERE id = ?").get(id);
  return (row as unknown as Concentration) ?? null;
}

export function listCourses(concentrationId: number): Course[] {
  return db.prepare(`
    SELECT ${COURSE_COLUMNS} FROM courses WHERE concentration_id = ? ORDER BY stage, position, code
  `).all(concentrationId).map(toCourse);
}

export function getCourse(id: string): CourseWithContent | null {
  const row = db.prepare(`SELECT ${COURSE_COLUMNS}, content FROM courses WHERE id = ?`).get(id) as CourseRow | undefined;
  if (!row) return null;
  const course = toCourse(row);
  const concentration = getConcentrationById(course.concentration_id)!;
  const subject = getSubject(concentration.subject_slug)!;
  const content = row.content ? (JSON.parse(row.content) as CourseContent) : null;
  return { ...course, content, concentration, subject };
}

export type SearchHit =
  | { kind: "subject"; subject: Subject }
  | { kind: "concentration"; concentration: Concentration; subject: string }
  | { kind: "course"; course: Course; concentration: Concentration };

/**
 * Finds what the Academy already teaches that answers a student's wish
 * ("I want to learn Latin"). Exact names rank first, then concentrations, then courses.
 */
export function search(query: string): SearchHit[] {
  const term = query
    .toLowerCase()
    .replace(/^(i\s+(want|would like|wish|hope)\s+to\s+(learn|study|read)( about)?|teach me( about)?|learn|study)\s+/, "")
    .replace(/^(the|a|an)\s+/, "")
    .replace(/[?.!]+$/, "")
    .trim();
  if (!term) return [];
  const like = `%${term}%`;

  const subjects = db.prepare(`
    SELECT s.*, 0 AS concentrations FROM subjects s
    WHERE lower(s.name) = ? OR lower(s.name) LIKE ?
    ORDER BY lower(s.name) = ? DESC
  `).all(term, like, term) as unknown as Subject[];

  const concentrations = db.prepare(`
    SELECT c.*, s.name AS subject_name FROM concentrations c JOIN subjects s ON s.slug = c.subject_slug
    WHERE lower(c.name) LIKE ? OR lower(c.description) LIKE ?
    ORDER BY lower(c.name) LIKE ? DESC, c.position
  `).all(like, `% ${term} %`, `${term}%`) as unknown as (Concentration & { subject_name: string })[];

  const courses = db.prepare(`
    SELECT ${COURSE_COLUMNS} FROM courses WHERE lower(title) LIKE ? ORDER BY stage, code LIMIT 12
  `).all(like).map(toCourse);

  return [
    ...subjects.map((subject) => ({ kind: "subject" as const, subject })),
    ...concentrations.map((concentration) => ({
      kind: "concentration" as const,
      concentration,
      subject: concentration.subject_name,
    })),
    ...courses.map((course) => ({
      kind: "course" as const,
      course,
      concentration: getConcentrationById(course.concentration_id)!,
    })),
  ];
}
