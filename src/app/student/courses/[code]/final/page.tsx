import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { and, desc, eq } from "drizzle-orm";
import { submitFinal } from "@/app/actions/coursework";
import { QuizForm, QuizReview } from "@/components/quiz-form";
import { ButtonLink } from "@/components/ui";
import { PASSING_SCORE, getCourseWork, letterGrade } from "@/lib/academics";
import { loadClassroom } from "@/lib/classroom";
import { courseSlug } from "@/lib/content/schema";
import { db, schema } from "@/lib/db";

type Props = { params: Promise<{ code: string }>; searchParams: Promise<{ result?: string; retake?: string }> };

export const metadata: Metadata = { title: "Final Examination" };

export default async function FinalPage({ params, searchParams }: Props) {
  const { result, retake } = await searchParams;
  const { user, course, record, term } = await loadClassroom((await params).code);
  const base = `/student/courses/${courseSlug(course.code)}`;
  if (!record) redirect(base);
  const work = await getCourseWork(user.id, course, term);
  if (!work.finalUnlocked) redirect(base);

  const last = await db
    .select()
    .from(schema.quizAttempts)
    .where(and(eq(schema.quizAttempts.userId, user.id), eq(schema.quizAttempts.courseCode, course.code), eq(schema.quizAttempts.week, 0)))
    .orderBy(desc(schema.quizAttempts.createdAt))
    .get();
  const showResult = last && (result || (record.status === "completed" && !retake));

  return (
    <div className="container-page max-w-3xl py-10">
      <Link href={base} className="text-sm text-navy-500 hover:text-navy-800">← {course.code}: {course.title}</Link>
      <p className="mt-6 eyebrow">Final examination</p>
      <h1 className="mt-2 text-4xl font-semibold text-navy-900">{course.code} Final Exam</h1>
      <p className="mt-3 text-navy-700/80">
        {course.finalExam.length} questions covering all eight weeks. You need {PASSING_SCORE}% to pass and complete the
        course. Your best attempt counts toward your grade.
      </p>

      <div className="mt-8">
        {showResult ? (
          <div className="space-y-6">
            <div className={`rounded-xl p-6 ${last.score >= PASSING_SCORE ? "bg-navy-900 text-white" : "border border-red-200 bg-red-50"}`}>
              <p className={`text-sm font-semibold uppercase tracking-wider ${last.score >= PASSING_SCORE ? "text-gold-300" : "text-red-700"}`}>
                {last.score >= PASSING_SCORE ? "Passed" : "Not yet passed"}
              </p>
              <p className="mt-2 font-display text-4xl font-semibold">{Math.round(last.score)}%</p>
              {record.status === "completed" ? (
                <p className="mt-3">
                  {course.code} is complete. Final course grade: <strong>{letterGrade(record.grade ?? 0).letter}</strong> ({record.grade?.toFixed(1)}%).
                </p>
              ) : (
                <p className="mt-3 text-red-800">Review the weekly lessons for the questions you missed, then try again.</p>
              )}
              <div className="mt-5 flex flex-wrap gap-3">
                {record.status === "completed" ? (
                  <ButtonLink href="/student" variant="gold">Back to dashboard</ButtonLink>
                ) : (
                  <ButtonLink href={`${base}/final?retake=1`}>Retake the exam</ButtonLink>
                )}
              </div>
            </div>
            <QuizReview questions={course.finalExam} answers={last.answers} revealAnswers={false} />
          </div>
        ) : (
          <QuizForm
            action={submitFinal}
            hidden={{ course: course.code }}
            questions={course.finalExam.map(({ prompt, choices }) => ({ prompt, choices }))}
            submitLabel="Submit final exam"
          />
        )}
      </div>
    </div>
  );
}
