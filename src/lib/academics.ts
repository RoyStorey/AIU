import "server-only";
import { and, desc, eq } from "drizzle-orm";
import type { SQLiteColumn } from "drizzle-orm/sqlite-core";
import { getCourse, getProgram } from "./content";
import { WEEKS_PER_COURSE, type Course, type Program } from "./content/schema";
import { db, schema } from "./db";

export const PASSING_SCORE = 70;
export const GRADE_WEIGHTS = { quizzes: 0.4, assignments: 0.3, final: 0.3 };

const LETTERS: [number, string, number][] = [
  [93, "A", 4.0],
  [90, "A-", 3.7],
  [87, "B+", 3.3],
  [83, "B", 3.0],
  [80, "B-", 2.7],
  [77, "C+", 2.3],
  [73, "C", 2.0],
  [70, "C-", 1.7],
  [60, "D", 1.0],
  [0, "F", 0],
];

export function letterGrade(score: number) {
  const [, letter, points] = LETTERS.find(([min]) => score >= min)!;
  return { letter, points };
}

export async function getActiveEnrollment(userId: string) {
  const enrollment = await db
    .select()
    .from(schema.enrollments)
    .where(and(eq(schema.enrollments.userId, userId), eq(schema.enrollments.status, "active")))
    .get();
  if (!enrollment) return null;
  const program = getProgram(enrollment.programSlug);
  return program ? { enrollment, program } : null;
}

export async function getLatestEnrollment(userId: string) {
  return db
    .select()
    .from(schema.enrollments)
    .where(eq(schema.enrollments.userId, userId))
    .orderBy(desc(schema.enrollments.enrolledAt))
    .get();
}

export async function getCourseRecords(userId: string) {
  const rows = await db.select().from(schema.courseRecords).where(eq(schema.courseRecords.userId, userId));
  return new Map(rows.map((r) => [r.courseCode, r]));
}

export type Records = Awaited<ReturnType<typeof getCourseRecords>>;

/** Where a student stands in their degree plan. */
export function degreeProgress(program: Program, records: Records) {
  let earned = 0;
  let total = 0;
  let currentTerm: Program["terms"][number] | null = null;
  for (const term of program.terms) {
    for (const code of term.courses) {
      const credits = getCourse(code)?.credits ?? 3;
      total += credits;
      if (records.get(code)?.status === "completed") earned += credits;
      else if (!currentTerm) currentTerm = term;
    }
  }
  return { earned, total, percent: total ? Math.round((earned / total) * 100) : 0, currentTerm };
}

export function cumulativeGpa(records: Records) {
  let points = 0;
  let credits = 0;
  for (const record of records.values()) {
    if (record.status !== "completed" || record.grade == null) continue;
    const c = getCourse(record.courseCode)?.credits ?? 3;
    points += letterGrade(record.grade).points * c;
    credits += c;
  }
  return credits ? points / credits : null;
}

/**
 * A student may open a course when it is in their program and they have
 * finished every course in earlier terms, or when they already have a record
 * for it (so finished courses stay available for review).
 */
export function courseAccess(program: Program, records: Records, code: string) {
  if (records.has(code)) return { allowed: true as const };
  const termIdx = program.terms.findIndex((t) => t.courses.includes(code));
  if (termIdx === -1) return { allowed: false as const, reason: "This course is not part of your degree plan." };
  const blocked = program.terms
    .slice(0, termIdx)
    .flatMap((t) => t.courses)
    .filter((c) => records.get(c)?.status !== "completed");
  if (blocked.length)
    return {
      allowed: false as const,
      reason: `Complete your earlier terms first (${blocked.slice(0, 3).join(", ")}${blocked.length > 3 ? "…" : ""}).`,
    };
  return { allowed: true as const };
}

export async function getCourseWork(userId: string, course: Course) {
  const where = (t: { userId: SQLiteColumn; courseCode: SQLiteColumn }) =>
    and(eq(t.userId, userId), eq(t.courseCode, course.code));

  const [lessons, attempts, submissions] = await Promise.all([
    db.select().from(schema.lessonCompletions).where(where(schema.lessonCompletions)),
    db.select().from(schema.quizAttempts).where(where(schema.quizAttempts)),
    db
      .select()
      .from(schema.assignmentSubmissions)
      .where(where(schema.assignmentSubmissions))
      .orderBy(desc(schema.assignmentSubmissions.createdAt)),
  ]);

  const best = (week: number) => {
    const scores = attempts.filter((a) => a.week === week).map((a) => a.score);
    return scores.length ? Math.max(...scores) : null;
  };

  const weeks = Array.from({ length: WEEKS_PER_COURSE }, (_, i) => {
    const number = i + 1;
    const lessonDone = lessons.some((l) => l.week === number);
    const quizBest = best(number);
    const submission = submissions.find((s) => s.week === number) ?? null;
    const complete = lessonDone && quizBest != null && quizBest >= PASSING_SCORE && submission != null;
    return { number, lessonDone, quizBest, submission, complete };
  });

  // Weeks open in order: each one unlocks when the previous week is complete.
  const unlocked = weeks.map((_, i) => i === 0 || weeks[i - 1].complete);
  const finalBest = best(0);
  const finalUnlocked = weeks.every((w) => w.complete);

  const quizAvg = avg(weeks.map((w) => w.quizBest ?? 0));
  const assignmentAvg = avg(weeks.map((w) => w.submission?.score ?? 0));
  const grade =
    quizAvg * GRADE_WEIGHTS.quizzes +
    assignmentAvg * GRADE_WEIGHTS.assignments +
    (finalBest ?? 0) * GRADE_WEIGHTS.final;

  const completedWeeks = weeks.filter((w) => w.complete).length;
  return {
    weeks,
    unlocked,
    finalBest,
    finalUnlocked,
    quizAvg,
    assignmentAvg,
    grade,
    percent: Math.round(((completedWeeks + (finalBest != null && finalBest >= PASSING_SCORE ? 1 : 0)) / (WEEKS_PER_COURSE + 1)) * 100),
  };
}

export type CourseWork = Awaited<ReturnType<typeof getCourseWork>>;

function avg(values: number[]) {
  return values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
}

export function gradeQuiz(questions: { answerIndex: number }[], answers: number[]) {
  const correct = questions.filter((q, i) => answers[i] === q.answerIndex).length;
  return questions.length ? (correct / questions.length) * 100 : 0;
}
