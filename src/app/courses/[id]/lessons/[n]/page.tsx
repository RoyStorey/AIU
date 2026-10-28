import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { LessonShell, StepList, lessonHref } from "@/components/LessonShell";
import { currentUser } from "@/lib/auth";
import { getCourse } from "@/lib/catalogue";
import { lessonScores } from "@/lib/progress";
import { WORDS_PER_MINUTE, formatMinutes, lessonMinutes } from "@/lib/timing";

type Params = { params: Promise<{ id: string; n: string }> };

async function load(params: Params["params"]) {
  const { id, n } = await params;
  const course = getCourse(id);
  const index = Number(n) - 1;
  return { course, index, lesson: course?.content?.lessons[index] };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { course, lesson } = await load(params);
  return { title: lesson && course ? `${lesson.title} · ${course.code}` : "Not found" };
}

export default async function LessonOverview({ params }: Params) {
  const { course, index, lesson } = await load(params);
  if (!course) notFound();
  if (!course.content) redirect(`/courses/${course.id}`);
  if (!lesson) notFound();

  const user = await currentUser();
  const completed = user ? lessonScores(user.id, course.id).has(index) : false;

  return (
    <LessonShell course={course} index={index} step={{ kind: "overview" }} completed={completed}>
      <section className="measure">
        <h2 className="section-title">Contents</h2>
        <StepList courseId={course.id} index={index} lesson={lesson} large />
        <p className="muted timing-note">
          About {formatMinutes(lessonMinutes(lesson))} in all. Times assume careful reading at about {WORDS_PER_MINUTE} words
          a minute, with time to work through sources and exercises; the assigned readings and recordings are additional.
        </p>
        <div className="actions">
          <Link className="button" href={lessonHref(course.id, index, { kind: "page", page: 0 })}>
            Begin the lesson
          </Link>
          <Link className="button quiet" href={lessonHref(course.id, index, { kind: "exercises" })}>
            Go to the exercises
          </Link>
        </div>
      </section>
    </LessonShell>
  );
}
