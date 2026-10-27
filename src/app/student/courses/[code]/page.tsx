import type { Metadata } from "next";
import Link from "next/link";
import { startCourse } from "@/app/actions/coursework";
import { CourseResources } from "@/components/resources";
import { Badge, Button, ProgressBar } from "@/components/ui";
import { GRADE_WEIGHTS, PASSING_SCORE, getCourseWork, letterGrade } from "@/lib/academics";
import { formatDate, formatShortDate, termName } from "@/lib/calendar";
import { loadClassroom } from "@/lib/classroom";
import { courseSlug } from "@/lib/content/schema";

type Props = { params: Promise<{ code: string }> };

export const metadata: Metadata = { title: "Classroom" };

export default async function CourseHome({ params }: Props) {
  const { user, course, record, term } = await loadClassroom((await params).code);
  const work = await getCourseWork(user.id, course, term);
  const base = `/student/courses/${courseSlug(course.code)}`;

  return (
    <div className="container-page py-10">
      <Link href="/student" className="text-sm text-navy-500 hover:text-navy-800">← Dashboard</Link>
      <div className="mt-4 grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div>
          <p className="eyebrow">{course.code}{term && ` · ${termName(term)}`}</p>
          <h1 className="mt-2 text-4xl font-semibold text-navy-900">{course.title}</h1>
          <p className="mt-3 text-navy-700/80">{course.description}</p>
          {term && (
            <p className="mt-3 text-sm text-navy-500">
              {formatDate(term.start)} – {formatDate(term.end)} · a new week opens each Monday
            </p>
          )}
          {work.overdue && (
            <p className="mt-4 rounded-lg border border-gold-200 bg-gold-50 px-4 py-3 text-sm text-navy-800">
              This term has ended and the course is marked <strong>incomplete</strong>. Your work stays open, so you can still
              finish it.
            </p>
          )}

          {!record ? (
            <form action={startCourse} className="mt-8 rounded-xl border border-gold-200 bg-gold-50 p-6">
              <input type="hidden" name="course" value={course.code} />
              <h2 className="font-sans text-lg font-semibold text-navy-900">Ready to begin?</h2>
              <p className="mt-1 text-sm text-navy-700">
                This course has eight weekly modules and a final exam. A new week opens for your cohort each Monday. Read
                the lesson, pass the quiz with {PASSING_SCORE}% or higher, and submit the written assignment to move on.
              </p>
              <Button className="mt-4">Begin {course.code}</Button>
            </form>
          ) : (
            <div className="mt-8">
              <div className="mb-2 flex justify-between text-sm text-navy-600">
                <span>Course progress</span>
                <span>{work.percent}%</span>
              </div>
              <ProgressBar value={work.percent} className="h-3" />
            </div>
          )}

          <ol className="mt-8 space-y-3">
            {course.weeks.map((w, i) => {
              const s = work.weeks[i];
              const open = !!record && work.unlocked[i];
              const inner = (
                <>
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${s.complete ? "bg-emerald-600 text-white" : open ? "bg-navy-800 text-white" : "bg-navy-100 text-navy-400"}`}>
                    {s.complete ? "✓" : w.number}
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-navy-400">Week {w.number}</span>
                    <span className="block font-medium text-navy-900">{w.title}</span>
                    {record && (
                      <span className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-navy-500">
                        <Check done={s.lessonDone}>Lesson</Check>
                        <Check done={(s.quizBest ?? 0) >= PASSING_SCORE}>Quiz{s.quizBest != null ? ` · ${Math.round(s.quizBest)}%` : ""}</Check>
                        <Check done={!!s.submission}>Assignment{s.submission ? ` · ${Math.round(s.submission.score)}%` : ""}</Check>
                      </span>
                    )}
                  </span>
                  {!open && record && (
                    <span className="text-right text-xs text-navy-400">{s.dateOpen ? "Complete the week before" : `Opens ${formatShortDate(s.opensAt!)}`}</span>
                  )}
                </>
              );
              return (
                <li key={w.number}>
                  {open ? (
                    <Link href={`${base}/week/${w.number}`} className="flex items-center gap-4 rounded-xl border border-navy-100 bg-white p-4 transition hover:border-navy-300 hover:shadow-sm">{inner}</Link>
                  ) : (
                    <div className="flex items-center gap-4 rounded-xl border border-navy-100 bg-white/60 p-4">{inner}</div>
                  )}
                </li>
              );
            })}
            <li>
              {record && work.finalUnlocked ? (
                <Link href={`${base}/final`} className="flex items-center gap-4 rounded-xl border-2 border-gold-300 bg-white p-4 hover:shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 font-semibold text-navy-950">F</span>
                  <span className="flex-1">
                    <span className="block font-medium text-navy-900">Final examination</span>
                    <span className="text-xs text-navy-500">{work.finalBest != null ? `Best score ${Math.round(work.finalBest)}%` : `${course.finalExam.length} questions · pass with ${PASSING_SCORE}%`}</span>
                  </span>
                </Link>
              ) : (
                <div className="flex items-center gap-4 rounded-xl border border-dashed border-navy-200 bg-white/60 p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-100 font-semibold text-navy-400">F</span>
                  <span>
                    <span className="block font-medium text-navy-900">Final examination</span>
                    <span className="text-xs text-navy-500">
                      Opens when all eight weeks are complete{work.finalOpensAt && `, from ${formatShortDate(work.finalOpensAt)}`}
                    </span>
                  </span>
                </div>
              )}
            </li>
          </ol>
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl border border-navy-100 bg-white p-6">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-navy-500">Grade</h2>
            {record?.status === "completed" ? (
              <p className="mt-3 font-display text-4xl font-semibold text-navy-900">
                {letterGrade(record.grade ?? 0).letter} <span className="font-sans text-base font-normal text-navy-500">{record.grade?.toFixed(1)}%</span>
              </p>
            ) : (
              <p className="mt-3 text-sm text-navy-600">Your final grade posts when you pass the final exam.</p>
            )}
            <dl className="mt-4 space-y-2 text-sm">
              <GradeRow label={`Weekly quizzes (${GRADE_WEIGHTS.quizzes * 100}%)`} value={work.quizAvg} />
              <GradeRow label={`Assignments (${GRADE_WEIGHTS.assignments * 100}%)`} value={work.assignmentAvg} />
              <GradeRow label={`Final exam (${GRADE_WEIGHTS.final * 100}%)`} value={work.finalBest ?? 0} />
            </dl>
          </div>
          {course.outcomes.length > 0 && (
            <div className="rounded-xl border border-navy-100 bg-white p-6">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-navy-500">Learning outcomes</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-navy-700 marker:text-gold-500">
                {course.outcomes.map((o) => <li key={o}>{o}</li>)}
              </ul>
            </div>
          )}
          <Badge tone="gray">Materials authored by AI</Badge>
        </aside>
      </div>
      {course.resources.length > 0 && (
        <section className="mt-14 border-t border-navy-100 pt-10">
          <h2 className="text-2xl font-semibold text-navy-900">Beyond the lessons</h2>
          <p className="mt-2 text-sm text-navy-600">Real books and media by scholars and creators to deepen this course.</p>
          <div className="mt-6">
            <CourseResources resources={course.resources} />
          </div>
        </section>
      )}
    </div>
  );
}

function Check({ done, children }: { done: boolean; children: React.ReactNode }) {
  return <span className={done ? "text-emerald-700" : ""}>{done ? "✓ " : "○ "}{children}</span>;
}

function GradeRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex justify-between">
      <dt className="text-navy-600">{label}</dt>
      <dd className="font-medium text-navy-900">{Math.round(value)}%</dd>
    </div>
  );
}
