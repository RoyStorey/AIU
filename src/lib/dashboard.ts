import "server-only";
import { db } from "@/lib/db";
import { getCourse } from "@/lib/catalogue";
import { activityByDay, lessonScores, recentVisits, standings } from "@/lib/progress";
import { PACES, findPace, schedule, type Pace, type PaceId, type Session } from "@/lib/pace";
import { lessonMinutes } from "@/lib/timing";

// ——— A student's chosen pace ———

export function preferredPace(userId: number): Pace {
  const row = db.prepare("SELECT pace FROM users WHERE id = ?").get(userId) as { pace: string } | undefined;
  return findPace(row?.pace);
}

export function savePace(userId: number, pace: PaceId) {
  db.prepare("UPDATE users SET pace = ? WHERE id = ?").run(findPace(pace).id, userId);
}

// ——— The dashboard ———

export type Resume = {
  href: string;
  code: string;
  title: string;
  lesson: number;
  lessonTitle: string;
  page: number;
  pages: number;
  pageTitle: string;
};

export type ActiveCourse = {
  id: string;
  code: string;
  title: string;
  completed: number;
  open: number;
  planned: number;
  next: { index: number; title: string; minutes: number } | null;
  averageMinutes: number;
};

/** Each pace's plan for the active courses: lessons set on study days, and each course's finishing day. */
export type Plans = Record<PaceId, { sessions: Session[]; finish: (string | null)[] }>;

export type Assignment = { kind: "lesson" | "exercise" | "capstone"; href: string; title: string; detail: string };

export type Stats = { lessons: number; minutes: number; coursesDone: number; weeks: number };

export type Dashboard = {
  resume: Resume | null;
  recent: Resume[];
  active: ActiveCourse[];
  assignments: Assignment[];
  stats: Stats;
  pace: Pace;
  plans: Plans;
};

/** Monday of the week containing `day` (YYYY-MM-DD), as YYYY-MM-DD. */
function weekOf(day: string): string {
  const d = new Date(`${day}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 6) % 7));
  return d.toISOString().slice(0, 10);
}

/** Consecutive weeks of study, counting back from this week (or last week, if this one has not begun). */
function weeksInARow(userId: number): number {
  const weeks = new Set([...activityByDay(userId, 400).keys()].map(weekOf));
  const cursor = new Date(`${weekOf(new Date().toISOString().slice(0, 10))}T12:00:00Z`);
  if (!weeks.has(cursor.toISOString().slice(0, 10))) cursor.setUTCDate(cursor.getUTCDate() - 7);
  let n = 0;
  while (weeks.has(cursor.toISOString().slice(0, 10))) {
    n++;
    cursor.setUTCDate(cursor.getUTCDate() - 7);
  }
  return n;
}

export function dashboard(userId: number): Dashboard {
  const pace = preferredPace(userId);

  const resumes: Resume[] = [];
  for (const v of recentVisits(userId, 4)) {
    const lesson = getCourse(v.course_id)?.content?.lessons[v.lesson_index];
    const page = lesson?.pages[v.page_index];
    if (!lesson || !page) continue;
    resumes.push({
      href: `/courses/${v.course_id}/lessons/${v.lesson_index + 1}/${v.page_index + 1}`,
      code: v.code, title: v.title,
      lesson: v.lesson_index + 1, lessonTitle: lesson.title,
      page: v.page_index + 1, pages: lesson.pages.length, pageTitle: page.title,
    });
  }

  const courseIds = (db.prepare(`
    SELECT course_id, MAX(at) AS at FROM (
      SELECT course_id, completed_at AS at FROM lesson_progress WHERE user_id = ?
      UNION ALL SELECT course_id, visited_at FROM visits WHERE user_id = ?
    ) GROUP BY course_id ORDER BY at DESC
  `).all(userId, userId) as { course_id: string }[]).map((r) => r.course_id);

  const written = new Set((db.prepare("SELECT course_id, lesson_index FROM essays WHERE user_id = ?")
    .all(userId) as { course_id: string; lesson_index: number }[]).map((e) => `${e.course_id}:${e.lesson_index}`));

  const stats: Stats = { lessons: 0, minutes: 0, coursesDone: 0, weeks: weeksInARow(userId) };
  const active: ActiveCourse[] = [];
  const exercises: Assignment[] = [];

  for (const id of courseIds) {
    const course = getCourse(id);
    const content = course?.content;
    if (!course || !content || !content.lessons.length) continue;
    const scores = lessonScores(userId, id);
    const done = content.lessons.map((_, i) => scores.has(i));
    const completed = done.filter(Boolean).length;
    const planned = content.forthcoming?.length ?? 0;
    const minutes = content.lessons.map(lessonMinutes);

    stats.lessons += completed;
    stats.minutes += minutes.reduce((sum, m, i) => sum + (done[i] ? m : 0), 0);
    if (completed === content.lessons.length && planned === 0) stats.coursesDone++;

    content.lessons.forEach((lesson, i) => {
      if (done[i] && lesson.reflection && !written.has(`${id}:${i}`)) {
        exercises.push({
          kind: "exercise",
          href: `/courses/${id}/lessons/${i + 1}/exercises`,
          title: `Written exercise: ${lesson.title}`,
          detail: `${course.code}, Lesson ${i + 1}`,
        });
      }
    });

    if (completed < content.lessons.length) {
      const nextIndex = done.indexOf(false);
      const averageMinutes = minutes.reduce((a, b) => a + b, 0) / minutes.length;
      active.push({
        id, code: course.code, title: course.title,
        completed, open: content.lessons.length, planned,
        next: { index: nextIndex, title: content.lessons[nextIndex].title, minutes: minutes[nextIndex] },
        averageMinutes,
      });
    }
  }

  const lessons: Assignment[] = active.map((c) => ({
    kind: "lesson",
    href: `/courses/${c.id}/lessons/${c.next!.index + 1}`,
    title: c.next!.title,
    detail: `${c.code}, Lesson ${c.next!.index + 1}`,
  }));

  const capstones: Assignment[] = standings(userId)
    .filter((s) => s.level === "expert")
    .map((s) => ({
      kind: "capstone",
      href: `/faculties/${s.concentration.subject_slug}/${s.concentration.slug}/capstone`,
      title: `The ${s.concentration.name} capstone`,
      detail: "Every course complete; the capstone makes you a Master",
    }));

  const queue = active.map((c) => ({ remaining: c.open - c.completed, nextLesson: c.next!.index + 1 }));
  const plans = Object.fromEntries(PACES.map((p) => [p.id, schedule(queue, p)])) as Plans;

  return {
    plans,
    resume: resumes[0] ?? null,
    recent: resumes.slice(1),
    active,
    assignments: [...lessons, ...exercises.slice(0, 4), ...capstones].slice(0, 8),
    stats,
    pace,
  };
}
