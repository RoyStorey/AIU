"use server";

import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { PASSING_SCORE, degreeProgress, getCourseRecords, getCourseWork, gradeQuiz } from "@/lib/academics";
import { newId } from "@/lib/auth";
import { loadClassroom } from "@/lib/classroom";
import { courseSlug } from "@/lib/content/schema";
import { db, schema } from "@/lib/db";
import { gradeAssignment, wordCount } from "@/lib/grading";

const base = (code: string) => `/student/courses/${courseSlug(code)}`;

function readAnswers(formData: FormData, count: number) {
  return Array.from({ length: count }, (_, i) => {
    const v = formData.get(`q${i}`);
    return v == null ? -1 : Number(v);
  });
}

export async function startCourse(formData: FormData) {
  const { user, course, record } = await loadClassroom(String(formData.get("course")));
  if (!record) {
    await db
      .insert(schema.courseRecords)
      .values({ id: newId(), userId: user.id, courseCode: course.code, status: "in_progress" })
      .onConflictDoNothing();
  }
  redirect(`${base(course.code)}/week/1`);
}

async function loadWeek(formData: FormData) {
  const ctx = await loadClassroom(String(formData.get("course")));
  if (!ctx.record) redirect(base(ctx.course.code));
  const n = Number(formData.get("week"));
  const week = ctx.course.weeks.find((w) => w.number === n);
  if (!week) redirect(base(ctx.course.code));
  const work = await getCourseWork(ctx.user.id, ctx.course);
  if (!work.unlocked[n - 1]) redirect(base(ctx.course.code));
  return { ...ctx, week, work };
}

export async function completeLesson(formData: FormData) {
  const { user, course, week } = await loadWeek(formData);
  await db
    .insert(schema.lessonCompletions)
    .values({ userId: user.id, courseCode: course.code, week: week.number })
    .onConflictDoNothing();
  revalidatePath(`${base(course.code)}/week/${week.number}`);
  redirect(`${base(course.code)}/week/${week.number}#quiz`);
}

export async function submitQuiz(formData: FormData) {
  const { user, course, week } = await loadWeek(formData);
  const answers = readAnswers(formData, week.quiz.length);
  const score = gradeQuiz(week.quiz, answers);
  await db.insert(schema.quizAttempts).values({ id: newId(), userId: user.id, courseCode: course.code, week: week.number, score, answers });
  revalidatePath(`${base(course.code)}/week/${week.number}`);
  redirect(`${base(course.code)}/week/${week.number}?quiz=review#quiz`);
}

export type AssignmentState = { error?: string } | undefined;

export async function submitAssignment(_: AssignmentState, formData: FormData): Promise<AssignmentState> {
  const { user, course, week } = await loadWeek(formData);
  const body = String(formData.get("body") ?? "").trim();
  const words = wordCount(body);
  if (words < week.assignment.minWords) {
    return { error: `Your response has ${words} words. This assignment asks for at least ${week.assignment.minWords}.` };
  }
  const result = await gradeAssignment(course, week, week.assignment, body);
  await db.insert(schema.assignmentSubmissions).values({
    id: newId(),
    userId: user.id,
    courseCode: course.code,
    week: week.number,
    body,
    ...result,
  });
  revalidatePath(`${base(course.code)}/week/${week.number}`);
  redirect(`${base(course.code)}/week/${week.number}?submitted=1#assignment`);
}

export async function submitFinal(formData: FormData) {
  const { user, course, record, active } = await loadClassroom(String(formData.get("course")));
  if (!record) redirect(base(course.code));
  const work = await getCourseWork(user.id, course);
  if (!work.finalUnlocked) redirect(base(course.code));

  const answers = readAnswers(formData, course.finalExam.length);
  const score = gradeQuiz(course.finalExam, answers);
  await db.insert(schema.quizAttempts).values({ id: newId(), userId: user.id, courseCode: course.code, week: 0, score, answers });

  if (score >= PASSING_SCORE && record.status !== "completed") {
    const updated = await getCourseWork(user.id, course);
    await db
      .update(schema.courseRecords)
      .set({ status: "completed", grade: Math.round(updated.grade * 10) / 10, completedAt: new Date() })
      .where(and(eq(schema.courseRecords.userId, user.id), eq(schema.courseRecords.courseCode, course.code)));

    if (active) {
      const progress = degreeProgress(active.program, await getCourseRecords(user.id));
      if (!progress.currentTerm) {
        await db
          .update(schema.enrollments)
          .set({ status: "graduated", endedAt: new Date() })
          .where(eq(schema.enrollments.id, active.enrollment.id));
        redirect("/student/diploma");
      }
    }
  }
  revalidatePath(base(course.code), "layout");
  redirect(`${base(course.code)}/final?result=1`);
}
