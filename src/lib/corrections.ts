import "server-only";
import { db } from "@/lib/db";
import { getCourse } from "@/lib/catalogue";
import { forgeAvailable, reviewCorrection } from "@/lib/forge";
import type { Review } from "@/lib/schema";

/**
 * Comments and corrections: what students report about a lesson—an error of
 * fact, a doubtful claim, a broken link, or a comment—with the faculty's
 * answer and, where the forge is configured, a first look by a fact-checker.
 */

export const KINDS = {
  error: "Error of fact",
  doubt: "Doubtful claim",
  link: "Broken or wrong link",
  comment: "Comment",
} as const;
export type Kind = keyof typeof KINDS;

export const STATUSES = {
  open: "Open",
  confirmed: "Confirmed",
  corrected: "Corrected",
  dismissed: "Not an error",
} as const;
export type Status = keyof typeof STATUSES;

export type Correction = {
  id: number;
  course_id: string;
  lesson_index: number;
  page_index: number | null;
  user_id: number;
  user_name: string;
  kind: Kind;
  quote: string;
  body: string;
  status: Status;
  response: string | null;
  review: Review | null;
  review_status: "drafting" | "ready" | "failed" | null;
  created_at: string;
};

type Row = Omit<Correction, "review"> & { review: string | null };

const SELECT = `
  SELECT k.*, u.name AS user_name FROM corrections k JOIN users u ON u.id = k.user_id
`;

const toCorrection = (r: Row): Correction => ({ ...r, review: r.review ? (JSON.parse(r.review) as Review) : null });

export function correctionsFor(courseId: string, lessonIndex: number): Correction[] {
  return (db.prepare(`${SELECT} WHERE k.course_id = ? AND k.lesson_index = ? ORDER BY k.id DESC`)
    .all(courseId, lessonIndex) as Row[]).map(toCorrection);
}

/** Open reports across the whole academy, for the faculty. */
export function openCorrections(): (Correction & { code: string })[] {
  return (db.prepare(`
    SELECT k.*, u.name AS user_name, c.code FROM corrections k
    JOIN users u ON u.id = k.user_id JOIN courses c ON c.id = k.course_id
    WHERE k.status = 'open' ORDER BY k.id
  `).all() as (Row & { code: string })[]).map((r) => ({ ...toCorrection(r), code: r.code }));
}

export function getCorrection(id: number): Correction | null {
  const row = db.prepare(`${SELECT} WHERE k.id = ?`).get(id) as Row | undefined;
  return row ? toCorrection(row) : null;
}

export function reportCorrection(entry: {
  userId: number;
  courseId: string;
  lessonIndex: number;
  pageIndex: number | null;
  kind: Kind;
  quote: string;
  body: string;
}): number {
  const course = getCourse(entry.courseId);
  const lesson = course?.content?.lessons[entry.lessonIndex];
  if (!course || !lesson) throw new Error("No such lesson.");
  const review = forgeAvailable() && entry.kind !== "comment" ? "drafting" : null;
  const { id } = db.prepare(`
    INSERT INTO corrections (course_id, lesson_index, page_index, user_id, kind, quote, body, review_status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?) RETURNING id
  `).get(entry.courseId, entry.lessonIndex, entry.pageIndex, entry.userId, entry.kind, entry.quote, entry.body, review) as { id: number };

  if (review) {
    const page = entry.pageIndex !== null ? lesson.pages[entry.pageIndex] : null;
    reviewCorrection({
      course: `${course.code} ${course.title}`,
      lesson: lesson.title,
      passage: page ? `## ${page.title}\n\n${page.body}` : lesson.pages.map((p) => `## ${p.title}\n\n${p.body}`).join("\n\n"),
      quote: entry.quote,
      report: entry.body,
    })
      .then((result) => db.prepare("UPDATE corrections SET review = ?, review_status = 'ready' WHERE id = ?").run(JSON.stringify(result), id))
      .catch((error: unknown) => {
        console.error(error);
        db.prepare("UPDATE corrections SET review_status = 'failed' WHERE id = ?").run(id);
      });
  }
  return id;
}

export function settleCorrection(id: number, status: Status, response: string) {
  db.prepare("UPDATE corrections SET status = ?, response = ? WHERE id = ?").run(status, response || null, id);
}

export function withdrawCorrection(id: number, userId: number) {
  db.prepare("DELETE FROM corrections WHERE id = ? AND user_id = ? AND status = 'open'").run(id, userId);
}
