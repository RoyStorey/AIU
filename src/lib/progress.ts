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
    const done = course.lessons > 0 && course.planned === 0 && completed >= course.lessons;
    return { ...course, completed, done };
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

// ——— Standing: Student, Expert, Master ———

/**
 * A student's standing in a concentration. Completing every course in the
 * program (Foundations through Seminar) makes an Expert; an Expert who also
 * passes the capstone is a Master. Courses added later as Continuing Studies
 * are not required.
 */
export type Level = "master" | "expert" | "student";

export const LEVEL_NAME: Record<Level, string> = { master: "Master", expert: "Expert", student: "Student" };

/** The highest stage counted toward completing a program. */
const CORE_STAGE = 4;

export type Mastery = {
  capstoneId: number;
  title: string;
  mark: string;
  citation: string;
  passedAt: string;
};

export type Standing = {
  concentration: Concentration & { subject_name: string };
  declared: boolean;
  courses: CourseStanding[];
  /** The courses that count toward completion. */
  core: CourseStanding[];
  coreDone: number;
  lessonsDone: number;
  lessonsTotal: number;
  complete: boolean;
  completedAt: string | null;
  level: Level;
  mastery: Mastery | null;
  lastActive: string | null;
};

function masteryOf(userId: number, concentrationId: number): Mastery | null {
  const row = db.prepare(`
    SELECT id, title, assessment, created_at FROM capstones
    WHERE user_id = ? AND concentration_id = ? AND passed = 1
    ORDER BY id LIMIT 1
  `).get(userId, concentrationId) as { id: number; title: string; assessment: string; created_at: string } | undefined;
  if (!row) return null;
  const assessment = JSON.parse(row.assessment) as { mark: string; citation: string };
  return { capstoneId: row.id, title: row.title, mark: assessment.mark, citation: assessment.citation, passedAt: row.created_at };
}

export function standing(userId: number, concentrationId: number): Standing | null {
  const concentration = db.prepare(`
    SELECT c.*, s.name AS subject_name FROM concentrations c JOIN subjects s ON s.slug = c.subject_slug WHERE c.id = ?
  `).get(concentrationId) as (Concentration & { subject_name: string }) | undefined;
  if (!concentration) return null;

  const courses = programStanding(userId, concentrationId);
  const core = courses.filter((c) => c.stage <= CORE_STAGE);
  const coreDone = core.filter((c) => c.done).length;
  const complete = core.length > 0 && coreDone === core.length;
  const { last, finished } = db.prepare(`
    SELECT MAX(p.completed_at) AS last,
           MAX(CASE WHEN k.stage <= ${CORE_STAGE} THEN p.completed_at END) AS finished
    FROM lesson_progress p JOIN courses k ON k.id = p.course_id
    WHERE p.user_id = ? AND k.concentration_id = ?
  `).get(userId, concentrationId) as { last: string | null; finished: string | null };
  const mastery = masteryOf(userId, concentrationId);

  return {
    concentration,
    declared: isEnrolled(userId, concentrationId),
    courses,
    core,
    coreDone,
    lessonsDone: courses.reduce((sum, c) => sum + c.completed, 0),
    lessonsTotal: courses.reduce((sum, c) => sum + c.lessons + c.planned, 0),
    complete,
    completedAt: complete ? finished : null,
    level: mastery ? "master" : complete ? "expert" : "student",
    mastery,
    lastActive: last,
  };
}

/** Every concentration a student has declared, begun, or mastered, best standing first. */
export function standings(userId: number): Standing[] {
  const ids = db.prepare(`
    SELECT concentration_id AS id FROM enrollments WHERE user_id = ?
    UNION SELECT k.concentration_id FROM lesson_progress p JOIN courses k ON k.id = p.course_id WHERE p.user_id = ?
    UNION SELECT concentration_id FROM capstones WHERE user_id = ? AND passed = 1
  `).all(userId, userId, userId) as { id: number }[];
  const rank: Record<Level, number> = { master: 0, expert: 1, student: 2 };
  return ids
    .map(({ id }) => standing(userId, id))
    .filter((s): s is Standing => s !== null)
    .sort((a, b) =>
      rank[a.level] - rank[b.level]
      || b.lessonsDone / Math.max(1, b.lessonsTotal) - a.lessonsDone / Math.max(1, a.lessonsTotal)
      || a.concentration.name.localeCompare(b.concentration.name));
}

/** A student's level in one concentration, cheaply, for badges beside their name. */
export function levelIn(userId: number, concentrationId: number): Level {
  return standing(userId, concentrationId)?.level ?? "student";
}

// ——— Where a student left off ———

export function recordVisit(userId: number, courseId: string, lesson: number, page: number) {
  db.prepare(`
    INSERT INTO visits (user_id, course_id, lesson_index, page_index) VALUES (?, ?, ?, ?)
    ON CONFLICT (user_id, course_id) DO UPDATE SET
      lesson_index = excluded.lesson_index, page_index = excluded.page_index, visited_at = datetime('now')
  `).run(userId, courseId, lesson, page);
}

export type Visit = { course_id: string; code: string; title: string; lesson_index: number; page_index: number; visited_at: string };

/** The places a student last read, most recent first. */
export function recentVisits(userId: number, limit = 3): Visit[] {
  return db.prepare(`
    SELECT v.course_id, c.code, c.title, v.lesson_index, v.page_index, v.visited_at
    FROM visits v JOIN courses c ON c.id = v.course_id
    WHERE v.user_id = ? ORDER BY v.visited_at DESC LIMIT ?
  `).all(userId, limit) as Visit[];
}

export function lastVisit(userId: number, courseId: string): Visit | null {
  return recentVisits(userId, 50).find((v) => v.course_id === courseId) ?? null;
}

// ——— Activity ———

/** The number of things a student did on each day: lessons completed, essays, posts, capstones. */
export function activityByDay(userId: number, days: number): Map<string, number> {
  const since = `-${days} days`;
  const rows = db.prepare(`
    SELECT day, COUNT(*) AS n FROM (
      SELECT date(completed_at) AS day FROM lesson_progress WHERE user_id = ? AND completed_at >= datetime('now', ?)
      UNION ALL SELECT date(created_at) FROM essays WHERE user_id = ? AND created_at >= datetime('now', ?)
      UNION ALL SELECT date(created_at) FROM posts WHERE user_id = ? AND created_at >= datetime('now', ?)
      UNION ALL SELECT date(created_at) FROM capstones WHERE user_id = ? AND created_at >= datetime('now', ?)
      UNION ALL SELECT date(created_at) FROM corrections WHERE user_id = ? AND created_at >= datetime('now', ?)
    ) GROUP BY day
  `).all(userId, since, userId, since, userId, since, userId, since, userId, since) as { day: string; n: number }[];
  return new Map(rows.map((r) => [r.day, r.n]));
}
