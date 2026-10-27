import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { and, desc, eq } from "drizzle-orm";
import { completeLesson, submitQuiz } from "@/app/actions/coursework";
import { Markdown } from "@/components/markdown";
import { QuizForm, QuizReview } from "@/components/quiz-form";
import { WeekResources } from "@/components/resources";
import { Badge, Button } from "@/components/ui";
import { PASSING_SCORE, getCourseWork } from "@/lib/academics";
import { formatShortDate } from "@/lib/calendar";
import { loadClassroom } from "@/lib/classroom";
import { courseSlug } from "@/lib/content/schema";
import { db, schema } from "@/lib/db";
import { AssignmentForm } from "./assignment-form";

type Props = { params: Promise<{ code: string; n: string }>; searchParams: Promise<{ quiz?: string }> };

export const metadata: Metadata = { title: "Weekly Module" };

export default async function WeekPage({ params, searchParams }: Props) {
  const { code, n } = await params;
  const { quiz: quizMode } = await searchParams;
  const { user, course, record, term } = await loadClassroom(code);
  const base = `/student/courses/${courseSlug(course.code)}`;
  if (!record) redirect(base);

  const week = course.weeks.find((w) => w.number === Number(n));
  if (!week) notFound();
  const work = await getCourseWork(user.id, course, term);
  if (!work.unlocked[week.number - 1]) redirect(base);
  const status = work.weeks[week.number - 1];

  const lastAttempt =
    quizMode === "review"
      ? await db
          .select()
          .from(schema.quizAttempts)
          .where(and(eq(schema.quizAttempts.userId, user.id), eq(schema.quizAttempts.courseCode, course.code), eq(schema.quizAttempts.week, week.number)))
          .orderBy(desc(schema.quizAttempts.createdAt))
          .get()
      : undefined;

  const prev = course.weeks.find((w) => w.number === week.number - 1);
  const next = course.weeks.find((w) => w.number === week.number + 1);
  const hidden = { course: course.code, week: week.number };

  return (
    <div className="container-page py-10">
      <nav className="text-sm text-navy-500">
        <Link href={base} className="hover:text-navy-800">{course.code}: {course.title}</Link>
        <span className="mx-2">/</span>
        <span>Week {week.number}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_17rem]">
        <article className="min-w-0">
          <p className="eyebrow">Week {week.number} of {course.weeks.length}</p>
          <h1 className="mt-2 text-4xl font-semibold text-navy-900">{week.title}</h1>
          <p className="mt-3 text-lg text-navy-700/80">{week.overview}</p>

          <div className="mt-8 rounded-xl border border-navy-100 bg-white p-6">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-navy-500">This week you will</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-navy-800 marker:text-gold-500">
              {week.objectives.map((o) => <li key={o}>{o}</li>)}
            </ul>
          </div>

          <section className="mt-8 rounded-xl border border-navy-100 bg-white p-6 sm:p-10">
            <Markdown>{week.lesson}</Markdown>
            {week.keyTerms.length > 0 && (
              <div className="mt-10 border-t border-navy-100 pt-8">
                <h2 className="text-xl font-semibold text-navy-900">Key terms</h2>
                <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                  {week.keyTerms.map((t) => (
                    <div key={t.term} className="rounded-lg bg-paper p-4">
                      <dt className="font-semibold text-navy-900">{t.term}</dt>
                      <dd className="mt-1 text-sm text-navy-700">{t.definition}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
            <div className="mt-10 flex items-center justify-between border-t border-navy-100 pt-6">
              {status.lessonDone ? (
                <Badge tone="green">✓ Lesson complete</Badge>
              ) : (
                <form action={completeLesson}>
                  <input type="hidden" name="course" value={course.code} />
                  <input type="hidden" name="week" value={week.number} />
                  <Button>Mark lesson complete</Button>
                </form>
              )}
              <span className="text-xs text-navy-400">Lesson authored by AI. Verify important claims.</span>
            </div>
          </section>

          {week.resources.length > 0 && (
            <div className="mt-8">
              <WeekResources resources={week.resources} />
            </div>
          )}

          <section id="quiz" className="mt-12 scroll-mt-32">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-2xl font-semibold text-navy-900">Week {week.number} quiz</h2>
              <p className="text-sm text-navy-500">
                {status.quizBest != null ? `Best score: ${Math.round(status.quizBest)}%` : `${week.quiz.length} questions`} · Pass with {PASSING_SCORE}%
              </p>
            </div>
            <div className="mt-5">
              {!status.lessonDone ? (
                <p className="rounded-lg border border-dashed border-navy-200 bg-white/60 p-5 text-sm text-navy-600">Mark the lesson complete to open the quiz.</p>
              ) : lastAttempt ? (
                <div className="space-y-5">
                  <div className={`rounded-lg p-4 text-sm font-medium ${lastAttempt.score >= PASSING_SCORE ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800"}`}>
                    You scored {Math.round(lastAttempt.score)}%.{" "}
                    {lastAttempt.score >= PASSING_SCORE ? "Nicely done — you passed this week's quiz." : "Review the explanations below and try again."}
                  </div>
                  <QuizReview questions={week.quiz} answers={lastAttempt.answers} revealAnswers />
                  <Link href={`${base}/week/${week.number}#quiz`} className="inline-block text-sm font-semibold text-navy-700 hover:text-navy-900">Retake quiz →</Link>
                </div>
              ) : (
                <QuizForm action={submitQuiz} hidden={hidden} questions={week.quiz.map(({ prompt, choices }) => ({ prompt, choices }))} submitLabel="Submit quiz" />
              )}
            </div>
          </section>

          <section id="assignment" className="mt-12 scroll-mt-32">
            <h2 className="text-2xl font-semibold text-navy-900">Written assignment</h2>
            <div className="mt-5 rounded-xl border border-navy-100 bg-white p-6">
              <h3 className="font-sans text-lg font-semibold text-navy-900">{week.assignment.title}</h3>
              <Markdown className="mt-3 text-sm">{week.assignment.prompt}</Markdown>
              <h4 className="mt-5 text-xs font-semibold uppercase tracking-wider text-navy-500">Rubric</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-navy-700 marker:text-gold-500">
                {week.assignment.rubric.map((r) => <li key={r}>{r}</li>)}
              </ul>
            </div>
            {status.submission && (
              <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50/50 p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-sans font-semibold text-navy-900">Feedback on your submission</h3>
                  <Badge tone="green">{Math.round(status.submission.score)}% · {status.submission.gradedBy === "ai" ? "Reviewed by AI instructor" : "Completion credit"}</Badge>
                </div>
                <Markdown className="mt-3 text-sm">{status.submission.feedback}</Markdown>
                <details className="mt-4 text-sm">
                  <summary className="cursor-pointer font-medium text-navy-700">Your submission</summary>
                  <p className="mt-2 whitespace-pre-wrap text-navy-700">{status.submission.body}</p>
                </details>
              </div>
            )}
            <div className="mt-5">
              <AssignmentForm course={course.code} week={week.number} minWords={week.assignment.minWords} resubmit={!!status.submission} />
            </div>
          </section>

          <div className="mt-12 flex justify-between border-t border-navy-100 pt-6 text-sm font-semibold">
            {prev ? <Link href={`${base}/week/${prev.number}`} className="text-navy-700 hover:text-navy-900">← Week {prev.number}</Link> : <span />}
            {next && work.unlocked[next.number - 1] ? (
              <Link href={`${base}/week/${next.number}`} className="text-navy-700 hover:text-navy-900">Week {next.number} →</Link>
            ) : !next && work.finalUnlocked ? (
              <Link href={`${base}/final`} className="text-navy-700 hover:text-navy-900">Final exam →</Link>
            ) : (
              <span className="font-normal text-navy-400">
                {next && !work.weeks[next.number - 1].dateOpen
                  ? `Week ${next.number} opens ${formatShortDate(work.weeks[next.number - 1].opensAt!)}`
                  : !next && work.finalOpensAt && !work.finalUnlocked && work.weeks.every((w) => w.complete)
                    ? `Final exam opens ${formatShortDate(work.finalOpensAt)}`
                    : "Complete this week to continue"}
              </span>
            )}
          </div>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-32 rounded-xl border border-navy-100 bg-white p-5 text-sm">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-navy-500">Checklist</p>
            <ul className="mt-3 space-y-2">
              <Item done={status.lessonDone} href="#">Read the lesson</Item>
              <Item done={(status.quizBest ?? 0) >= PASSING_SCORE} href="#quiz">Pass the quiz</Item>
              <Item done={!!status.submission} href="#assignment">Submit the assignment</Item>
            </ul>
            <div className="mt-5 border-t border-navy-100 pt-4">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-navy-500">Weeks</p>
              <ol className="mt-2 grid grid-cols-4 gap-2">
                {work.weeks.map((w, i) => (
                  <li key={w.number}>
                    {work.unlocked[i] ? (
                      <Link href={`${base}/week/${w.number}`} className={`flex h-9 items-center justify-center rounded-md text-xs font-semibold ${w.number === week.number ? "bg-navy-800 text-white" : w.complete ? "bg-emerald-100 text-emerald-800" : "bg-navy-50 text-navy-700"}`}>{w.number}</Link>
                    ) : (
                      <span className="flex h-9 items-center justify-center rounded-md bg-gray-50 text-xs text-gray-300">{w.number}</span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Item({ done, href, children }: { done: boolean; href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className={`flex items-center gap-2 ${done ? "text-emerald-700" : "text-navy-700"}`}>
        <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[0.65rem] ${done ? "bg-emerald-600 text-white" : "ring-1 ring-navy-300"}`}>{done ? "✓" : ""}</span>
        {children}
      </a>
    </li>
  );
}
