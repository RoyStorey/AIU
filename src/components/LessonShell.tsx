import Link from "next/link";
import { Citation } from "@/components/Citation";
import { Media } from "@/components/Media";
import type { CourseWithContent } from "@/lib/catalogue";
import { toRoman } from "@/lib/roman";
import type { Lesson } from "@/lib/schema";
import { checkMinutes, exerciseMinutes, formatMinutes, lessonMinutes, pageMinutes } from "@/lib/timing";

/** Where a student is within a lesson: its overview, one of its pages, or its exercises. */
export type Step = { kind: "overview" } | { kind: "page"; page: number } | { kind: "exercises" };

export const lessonHref = (courseId: string, index: number, step: Step = { kind: "overview" }) => {
  const base = `/courses/${courseId}/lessons/${index + 1}`;
  return step.kind === "overview" ? base : step.kind === "exercises" ? `${base}/exercises` : `${base}/${step.page + 1}`;
};

/** The ordered steps of a lesson, each with its estimated time. */
export function lessonSteps(courseId: string, index: number, lesson: Lesson) {
  return [
    ...lesson.pages.map((page, p) => ({
      key: `page-${p}`,
      step: { kind: "page", page: p } as Step,
      label: page.title,
      numeral: toRoman(p + 1).toLowerCase(),
      minutes: pageMinutes(page),
      href: lessonHref(courseId, index, { kind: "page", page: p }),
    })),
    {
      key: "exercises",
      step: { kind: "exercises" } as Step,
      label: lesson.reflection ? "Knowledge Check & Written Exercise" : "Knowledge Check",
      numeral: "✦",
      minutes: checkMinutes(lesson) + exerciseMinutes(lesson),
      href: lessonHref(courseId, index, { kind: "exercises" }),
    },
  ];
}

const sameStep = (a: Step, b: Step) =>
  a.kind === b.kind && (a.kind !== "page" || (b.kind === "page" && a.page === b.page));

export function StepList({ courseId, index, lesson, current, large }: {
  courseId: string;
  index: number;
  lesson: Lesson;
  current?: Step;
  large?: boolean;
}) {
  return (
    <ol className={large ? "steps-list large" : "steps-list"}>
      {lessonSteps(courseId, index, lesson).map((s) => {
        const here = current && sameStep(current, s.step);
        return (
          <li key={s.key}>
            <Link href={s.href} aria-current={here ? "page" : undefined}>
              <span className="numeral">{s.numeral}</span>
              <span className="label">{s.label}</span>
              <span className="minutes">{formatMinutes(s.minutes)}</span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

export function LessonShell({ course, index, step, completed, children }: {
  course: CourseWithContent;
  index: number;
  step: Step;
  completed: boolean;
  children: React.ReactNode;
}) {
  const lessons = course.content!.lessons;
  const lesson = lessons[index];
  const { subject, concentration } = course;

  return (
    <div className="wrap">
      <header className="lesson-top">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href={`/faculties/${subject.slug}`}>{subject.name}</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/faculties/${subject.slug}/${concentration.slug}`}>{concentration.name}</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/courses/${course.id}`}>{course.code} {course.title}</Link>
        </nav>
      </header>
      <nav className="tabs" aria-label="Course">
        <Link href={`/courses/${course.id}`}>Syllabus</Link>
        <Link href={lessonHref(course.id, index)} aria-current="page">Lessons</Link>
        <Link href={`/courses/${course.id}/library`}>Reference Shelf</Link>
      </nav>

      <header className="lesson-head measure">
        <p className="eyebrow">
          {step.kind === "overview" ? (
            <>Lesson {toRoman(index + 1)} of {toRoman(lessons.length)}</>
          ) : (
            <Link href={lessonHref(course.id, index)}>Lesson {toRoman(index + 1)} of {toRoman(lessons.length)}</Link>
          )}
          <span className="muted"> · about {formatMinutes(lessonMinutes(lesson))}</span>
          {completed && <span className="mark done" style={{ marginLeft: "1rem" }}>Completed</span>}
        </p>
        <h1>{lesson.title}</h1>
        {step.kind === "overview" && <p className="lede">{lesson.summary}</p>}
      </header>

      <div className="lesson-layout">
        <article>{children}</article>
        <aside className="lesson-aside">
          {step.kind !== "overview" && (
            <>
              <h3 className="side-head">In This Lesson</h3>
              <StepList courseId={course.id} index={index} lesson={lesson} current={step} />
            </>
          )}
          {lesson.readings.length > 0 && (
            <>
              <h3 className="side-head">Assigned Reading</h3>
              <ul className="citations">
                {lesson.readings.map((r, i) => <Citation key={i} resource={r} />)}
              </ul>
            </>
          )}
          {lesson.media.length > 0 && (
            <>
              <h3 className="side-head">Listening &amp; Viewing</h3>
              <div className="media-list">
                {lesson.media.map((m, i) => <Media key={i} resource={m} />)}
              </div>
            </>
          )}
          <p className="muted side-note">
            Readings and recordings are supplementary; times shown cover the lesson itself.
          </p>
        </aside>
      </div>
    </div>
  );
}

export function Pager({ prev, next }: {
  prev?: { href: string; label: string; dir?: string };
  next?: { href: string; label: string; dir?: string };
}) {
  return (
    <nav className="pager" aria-label="Lesson pages">
      {prev && (
        <Link href={prev.href}>
          <span className="dir">← {prev.dir ?? "Previous"}</span>
          <span className="t">{prev.label}</span>
        </Link>
      )}
      {next && (
        <Link href={next.href} className="next">
          <span className="dir">{next.dir ?? "Next"} →</span>
          <span className="t">{next.label}</span>
        </Link>
      )}
    </nav>
  );
}
