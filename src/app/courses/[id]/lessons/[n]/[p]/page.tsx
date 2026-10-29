import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { LessonShell, Pager, lessonHref } from "@/components/LessonShell";
import { Corrections } from "@/components/Corrections";
import { Markdown } from "@/components/Markdown";
import { NotesBox } from "@/components/NotesBox";
import { currentUser } from "@/lib/auth";
import { getCourse } from "@/lib/catalogue";
import { lessonScores, recordVisit } from "@/lib/progress";
import { toRoman } from "@/lib/roman";
import { formatMinutes, pageMinutes } from "@/lib/timing";

type Params = { params: Promise<{ id: string; n: string; p: string }> };

async function load(params: Params["params"]) {
  const { id, n, p } = await params;
  const course = getCourse(id);
  const index = Number(n) - 1;
  const lesson = course?.content?.lessons[index];
  const pageIndex = /^\d+$/.test(p) ? Number(p) - 1 : -1;
  return { course, index, lesson, pageIndex, page: lesson?.pages[pageIndex] };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { course, page, lesson } = await load(params);
  return { title: page && lesson && course ? `${page.title} · ${lesson.title}` : "Not found" };
}

export default async function LessonPage({ params }: Params) {
  const { course, index, lesson, pageIndex, page } = await load(params);
  if (!course) notFound();
  if (!course.content) redirect(`/courses/${course.id}`);
  if (!lesson || !page) notFound();

  const user = await currentUser();
  const completed = user ? lessonScores(user.id, course.id).has(index) : false;
  const last = pageIndex === lesson.pages.length - 1;
  if (user) recordVisit(user.id, course.id, index, pageIndex);
  const here = `/courses/${course.id}/lessons/${index + 1}/${pageIndex + 1}`;

  return (
    <LessonShell course={course} index={index} step={{ kind: "page", page: pageIndex }} completed={completed}>
      <header className="page-title">
        <p className="eyebrow">
          Page {toRoman(pageIndex + 1).toLowerCase()} of {toRoman(lesson.pages.length).toLowerCase()} · {formatMinutes(pageMinutes(page))}
        </p>
        <h2>{page.title}</h2>
      </header>
      <Markdown>{page.body}</Markdown>
      <Pager
        prev={pageIndex === 0
          ? { href: lessonHref(course.id, index), label: "Lesson overview", dir: "Back" }
          : { href: lessonHref(course.id, index, { kind: "page", page: pageIndex - 1 }), label: lesson.pages[pageIndex - 1].title }}
        next={last
          ? { href: lessonHref(course.id, index, { kind: "exercises" }), label: "Knowledge check and exercise", dir: "Continue" }
          : { href: lessonHref(course.id, index, { kind: "page", page: pageIndex + 1 }), label: lesson.pages[pageIndex + 1].title }}
      />
      <NotesBox user={user} courseId={course.id} lessonIndex={index} pageIndex={pageIndex} pageTitle={page.title} />
      <Corrections
        courseId={course.id} concentrationId={course.concentration.id} concentration={course.concentration.name}
        lessonIndex={index} lesson={lesson} page={pageIndex} user={user} back={here}
      />
    </LessonShell>
  );
}
