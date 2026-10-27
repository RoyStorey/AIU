import "server-only";
import { db } from "@/lib/db";
import { listCourses, type Concentration, type Course } from "@/lib/catalogue";

/** The share of questions a student must answer correctly to complete a lesson. */
export const PASSING = 0.7;

export function isEnrolled(userId: number, concentrationId: number): boolean {
  return !!db.prepare("SELECT 1 FROM enrollments WHERE user_id = ? AND concentration_id = ?")
    .get(userId, concentrationId);
}

export function enroll(userId: number, concentrationId: number) {
  db.prepare("INSERT OR IGNORE INTO enrollments (user_id, concentration_id) VALUES (?, ?)")
    .run(userId, concentrationId);
}

export function withdraw(userId: number, concentrationId: number) {
  db.prepare("DELETE FROM enrollments WHERE user_id = ? AND concentration_id = ?")
    .run(userId, concentrationId);
}

/** Scores keyed by lesson index for one course. */
export function lessonScores(userId: number, courseId: string): Map<number, number> {
  const rows = db.prepare(
    "SELECT lesson_index, score FROM lesson_progress WHERE user_id = ? AND course_id = ?",
  ).all(userId, courseId) as { lesson_index: number; score: number }[];
  return new Map(rows.map((r) => [r.lesson_index, r.score]));
}

export function recordLesson(userId: number, courseId: string, lesson: number, score: number) {
  db.prepare(`
    INSERT INTO lesson_progress (user_id, course_id, lesson_index, score) VALUES (?, ?, ?, ?)
    ON CONFLICT (user_id, course_id, lesson_index) DO UPDATE SET
      score = MAX(score, excluded.score), completed_at = datetime('now')
  `).run(userId, courseId, lesson, score);
}

export type CourseStanding = Course & { completed: number; done: boolean };

/** Every course in a program with the student's standing in each. */
export function programStanding(userId: number | null, concentrationId: number): CourseStanding[] {
  const courses = listCourses(concentrationId);
  const counts = new Map<string, number>();
  if (userId !== null) {
    const rows = db.prepare(`
      SELECT p.course_id, COUNT(*) AS n FROM lesson_progress p
      JOIN courses c ON c.id = p.course_id
      WHERE p.user_id = ? AND c.concentration_id = ?
      GROUP BY p.course_id
    `).all(userId, concentrationId) as { course_id: string; n: number }[];
    for (const r of rows) counts.set(r.course_id, r.n);
  }
  return courses.map((course) => {
    const completed = Math.min(counts.get(course.id) ?? 0, course.lessons);
    return { ...course, completed, done: course.lessons > 0 && completed >= course.lessons };
  });
}

export type Enrollment = {
  concentration: Concentration & { subject_name: string };
  declared_at: string;
  courses: CourseStanding[];
  lessonsDone: number;
  coursesDone: number;
  complete: boolean;
  next: CourseStanding | null;
};

export function enrollments(userId: number): Enrollment[] {
  const rows = db.prepare(`
    SELECT c.*, s.name AS subject_name, e.declared_at
    FROM enrollments e
    JOIN concentrations c ON c.id = e.concentration_id
    JOIN subjects s ON s.slug = c.subject_slug
    WHERE e.user_id = ? ORDER BY e.declared_at DESC
  `).all(userId) as unknown as (Concentration & { subject_name: string; declared_at: string })[];

  return rows.map(({ declared_at, ...concentration }) => {
    const courses = programStanding(userId, concentration.id);
    const coursesDone = courses.filter((c) => c.done).length;
    return {
      concentration,
      declared_at,
      courses,
      lessonsDone: courses.reduce((sum, c) => sum + c.completed, 0),
      coursesDone,
      complete: courses.length > 0 && coursesDone === courses.length,
      next: courses.find((c) => !c.done) ?? null,
    };
  });
}

export function continuationStatus(concentrationId: number): { status: string; error: string | null } | null {
  const row = db.prepare("SELECT status, error FROM continuations WHERE concentration_id = ?")
    .get(concentrationId);
  return (row as { status: string; error: string | null } | undefined) ?? null;
}
