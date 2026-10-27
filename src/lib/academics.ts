import "server-only";
import { and, desc, eq } from "drizzle-orm";
import type { SQLiteColumn } from "drizzle-orm/sqlite-core";
import { cohortSchedule, fromDateKey, openCohorts, today, weekStart, type CalendarTerm } from "./calendar";
import { getProgram } from "./content";
import { WEEKS_PER_COURSE, isSlot, resolveTerms, type Course, type Program, type Term } from "./content/schema";
import { db, schema } from "./db";
import type { Enrollment } from "./db/schema";

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

/** One term of a student's plan, with its real calendar dates. */
export type PlanTerm = Term & { calendar: CalendarTerm };

export function cohortStartOf(enrollment: Enrollment) {
  // Enrollments created before cohorts existed join the first cohort after they enrolled.
  return enrollment.cohortStart ? fromDateKey(enrollment.cohortStart) : openCohorts(enrollment.enrolledAt, 1)[0].start;
}

export function studentPlan(program: Program, enrollment: Enrollment): PlanTerm[] {
  const calendar = cohortSchedule(cohortStartOf(enrollment), program.terms.length);
  return resolveTerms(program, enrollment.concentration).map((t, i) => ({ ...t, calendar: calendar[i] }));
}

export async function getActiveEnrollment(userId: string) {
  const enrollment = await db
    .select()
    .from(schema.enrollments)
    .where(and(eq(schema.enrollments.userId, userId), eq(schema.enrollments.status, "active")))
    .get();
  if (!enrollment) return null;
  const program = getProgram(enrollment.programSlug);
  return program ? { enrollment, program, plan: studentPlan(program, enrollment) } : null;
}

export type ActiveEnrollment = NonNullable<Awaited<ReturnType<typeof getActiveEnrollment>>>;

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

/** Where a student stands in their program today. */
export function standing(plan: PlanTerm[], records: Records, now = today()) {
  const courses = plan.flatMap((t) => t.courses);
  const completed = courses.filter((c) => records.get(c)?.status === "completed").length;
  const current = plan.find((t) => now >= t.calendar.start && now <= t.calendar.end) ?? null;
  const next = plan.find((t) => t.calendar.start > now) ?? null;
  const phase = !plan.length || now < plan[0].calendar.start ? "before" : current ? "in-term" : next ? "break" : "finished";
  return {
    completed,
    total: courses.length,
    percent: courses.length ? Math.round((completed / courses.length) * 100) : 0,
    current,
    next,
    phase,
    pendingConcentration: courses.some(isSlot),
    graduated: courses.length > 0 && completed === courses.length,
  } as const;
}

export function termOfCourse(plan: PlanTerm[], code: string) {
  return plan.find((t) => t.courses.includes(code)) ?? null;
}

/** A course opens to a student on the first day of the term their cohort takes it. */
export function courseAccess(plan: PlanTerm[], records: Records, code: string, now = today()) {
  if (records.has(code)) return { allowed: true as const };
  const term = termOfCourse(plan, code);
  if (!term) return { allowed: false as const, reason: "This course is not part of your program plan." };
  if (now < term.calendar.start) return { allowed: false as const, reason: "opens", opens: term.calendar.start };
  return { allowed: true as const };
}

export function cumulativeGpa(records: Records) {
  const graded = [...records.values()].filter((r) => r.status === "completed" && r.grade != null);
  if (!graded.length) return null;
  return graded.reduce((sum, r) => sum + letterGrade(r.grade!).points, 0) / graded.length;
}

/**
 * Progress through one course. Weeks open on their calendar date (each Monday
 * of the term) once the previous week is complete; with no term (for example a
 * course kept from an earlier program) only the order rule applies.
 */
export async function getCourseWork(userId: string, course: Course, term: CalendarTerm | null = null, now = today()) {
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
    const opensAt = term ? weekStart(term, number) : null;
    return { number, lessonDone, quizBest, submission, complete, opensAt, dateOpen: !opensAt || now >= opensAt };
  });

  const unlocked = weeks.map((w, i) => w.dateOpen && (i === 0 || weeks[i - 1].complete));
  const finalBest = best(0);
  const finalOpensAt = term ? weekStart(term, WEEKS_PER_COURSE) : null;
  const finalUnlocked = weeks.every((w) => w.complete) && (!finalOpensAt || now >= finalOpensAt);

  const quizAvg = avg(weeks.map((w) => w.quizBest ?? 0));
  const assignmentAvg = avg(weeks.map((w) => w.submission?.score ?? 0));
  const grade =
    quizAvg * GRADE_WEIGHTS.quizzes +
    assignmentAvg * GRADE_WEIGHTS.assignments +
    (finalBest ?? 0) * GRADE_WEIGHTS.final;

  const completedWeeks = weeks.filter((w) => w.complete).length;
  const passedFinal = finalBest != null && finalBest >= PASSING_SCORE;
  return {
    weeks,
    unlocked,
    finalBest,
    finalUnlocked,
    finalOpensAt,
    quizAvg,
    assignmentAvg,
    grade,
    /** The term has ended and the course isn't finished; work stays open so the student can catch up. */
    overdue: !!term && now > term.end && !passedFinal,
    percent: Math.round(((completedWeeks + (passedFinal ? 1 : 0)) / (WEEKS_PER_COURSE + 1)) * 100),
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

/** Concentration can be chosen or changed until the student starts a concentration course. */
export function canChangeConcentration(program: Program, records: Records) {
  return !program.concentrations.some((c) => c.courses.some((code) => records.has(code)));
}

