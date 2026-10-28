import "server-only";
import { db } from "@/lib/db";

/** A student's private notes on lesson pages: their commonplace book. */

export type Note = {
  course_id: string;
  code: string;
  course_title: string;
  lesson_index: number;
  page_index: number;
  body: string;
  updated_at: string;
};

export function noteFor(userId: number, courseId: string, lesson: number, page: number): string {
  const row = db.prepare(`
    SELECT body FROM notes WHERE user_id = ? AND course_id = ? AND lesson_index = ? AND page_index = ?
  `).get(userId, courseId, lesson, page) as { body: string } | undefined;
  return row?.body ?? "";
}

export function saveNote(userId: number, courseId: string, lesson: number, page: number, body: string) {
  if (!body.trim()) {
    db.prepare("DELETE FROM notes WHERE user_id = ? AND course_id = ? AND lesson_index = ? AND page_index = ?")
      .run(userId, courseId, lesson, page);
    return;
  }
  db.prepare(`
    INSERT INTO notes (user_id, course_id, lesson_index, page_index, body) VALUES (?, ?, ?, ?, ?)
    ON CONFLICT (user_id, course_id, lesson_index, page_index) DO UPDATE SET body = excluded.body, updated_at = datetime('now')
  `).run(userId, courseId, lesson, page, body);
}

/** All of a student's notes, grouped in course and lesson order. */
export function commonplaceBook(userId: number): Note[] {
  return db.prepare(`
    SELECT n.course_id, c.code, c.title AS course_title, n.lesson_index, n.page_index, n.body, n.updated_at
    FROM notes n JOIN courses c ON c.id = n.course_id
    WHERE n.user_id = ? ORDER BY c.code, n.lesson_index, n.page_index
  `).all(userId) as Note[];
}
