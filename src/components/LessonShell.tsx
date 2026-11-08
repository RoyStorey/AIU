import Link from "next/link";
import { Citation } from "@/components/Citation";
import { resourceSources } from "@/lib/books";
import { LessonDrawer } from "@/components/LessonDrawer";
import { Media } from "@/components/Media";
import type { CourseWithContent } from "@/lib/catalogue";
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
      numeral: (p + 1),
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

/** A lesson's assigned readings and recordings, with a note on how they relate to its timing. */
export function LessonResources({ lesson }: { lesson: Lesson }) {
  const sources = resourceSources(lesson.readings);
  if (!lesson.readings.length && !lesson.media.length) return null;
  return (
    <div className="lesson-resources">
      {lesson.readings.length > 0 && (
        <>
          <h3 className="side-head">Assigned Reading</h3>
          <ul className="citations">
            {lesson.readings.map((r, i) => <Citation key={i} resource={r} source={sources[i]} />)}
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
      <p className="muted side-note">Readings and recordings are supplementary; times shown cover the lesson itself.</p>
    </div>
  );
}

/**
 * The slim bar above a lesson page: the contents button (with the number of
 * readings and recordings it holds) and a marker for each page, the current
 * one filled and those before it touched with gold.
 */
function LessonBar({ course, index, lesson, step }: { course: CourseWithContent; index: number; lesson: Lesson; step: Step }) {
  const steps = lessonSteps(course.id, index, lesson);
  const here = steps.findIndex((s) => sameStep(step, s.step));
  const extras = lesson.readings.length + lesson.media.length;
  return (
    <div className="lesson-bar">
      <LessonDrawer title={lesson.title} label="Contents" count={extras}>
        <h3 className="side-head">In This Lesson</h3>
        <StepList courseId={course.id} index={index} lesson={lesson} current={step} />
        <LessonResources lesson={lesson} />
      </LessonDrawer>
      <ol className="lesson-pips" aria-label="Pages of this lesson">
        {steps.map((s, i) => (
          <li key={s.key}>
            <Link href={s.href} title={`${s.label} · ${formatMinutes(s.minutes)}`}
              aria-current={i === here ? "page" : undefined}
              className={i < here ? "is-before" : s.step.kind === "exercises" ? "is-check" : undefined}>
              <span className="visually-hidden">{s.label}</span>
              <span aria-hidden="true">{s.numeral}</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function LessonShell({ course, index, step, completed, children }: {
  course: CourseWithContent;
  index: number;
  step: Step;
  completed: boolean;
  children: React.ReactNode;
}) {
  const { lessons, forthcoming = [] } = course.content!;
  const lesson = lessons[index];
  const of = (lessons.length + forthcoming.length);
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

      <div className="lesson-column">
        <header className="lesson-head">
          <p className="eyebrow">
            {step.kind === "overview" ? (
              <>Lesson {(index + 1)} of {of}</>
            ) : (
              <Link href={lessonHref(course.id, index)}>Lesson {(index + 1)} of {of}</Link>
            )}
            <span className="muted"> · about {formatMinutes(lessonMinutes(lesson))}</span>
            {completed && <span className="mark done" style={{ marginLeft: "1rem" }}>Completed</span>}
          </p>
          <h1>{lesson.title}</h1>
          {step.kind === "overview" && <p className="lede">{lesson.summary}</p>}
        </header>
        {step.kind !== "overview" && <LessonBar course={course} index={index} lesson={lesson} step={step} />}
        <article>{children}</article>
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
