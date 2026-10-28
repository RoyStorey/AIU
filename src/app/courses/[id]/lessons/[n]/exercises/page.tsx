import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { KnowledgeCheck } from "@/components/KnowledgeCheck";
import { LessonShell, Pager, lessonHref } from "@/components/LessonShell";
import { WrittenExercise } from "@/components/WrittenExercise";
import { currentUser } from "@/lib/auth";
import { getCourse } from "@/lib/catalogue";
import { PASSING, lessonScores } from "@/lib/progress";
import { choiceOrder } from "@/lib/shuffle";
import { checkMinutes, exerciseMinutes, formatMinutes } from "@/lib/timing";

type Params = { params: Promise<{ id: string; n: string }> };

async function load(params: Params["params"]) {
  const { id, n } = await params;
  const course = getCourse(id);
  const index = Number(n) - 1;
  return { course, index, lesson: course?.content?.lessons[index] };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { course, lesson } = await load(params);
  return { title: lesson && course ? `Exercises · ${lesson.title}` : "Not found" };
}

export default async function LessonExercises({ params }: Params) {
  const { course, index, lesson } = await load(params);
  if (!course) notFound();
  if (!course.content) redirect(`/courses/${course.id}`);
  if (!lesson) notFound();

  const lessons = course.content.lessons;
  const user = await currentUser();
  const completed = user ? lessonScores(user.id, course.id).has(index) : false;
  const following = lessons[index + 1];
  const next = following
    ? { href: lessonHref(course.id, index + 1), label: following.title }
    : { href: `/courses/${course.id}`, label: "Return to the syllabus" };
  const lastPage = lesson.pages.length - 1;

  return (
    <LessonShell course={course} index={index} step={{ kind: "exercises" }} completed={completed}>
      <section className="examination" id="knowledge-check" style={{ marginTop: 0, paddingTop: 0, borderTop: 0 }}>
        <p className="eyebrow">{formatMinutes(checkMinutes(lesson))}</p>
        <h2>Knowledge Check</h2>
        <p>
          Answer each question, then submit. A score of {Math.round(PASSING * 100)}% or better completes the lesson.
        </p>
        <KnowledgeCheck
          courseId={course.id}
          lessonIndex={index}
          questions={lesson.questions.map(({ prompt, choices }, qi) => ({
            prompt,
            choices: choiceOrder(course.id, index, qi, choices.length).map((c) => choices[c]),
          }))}
          passingPercent={Math.round(PASSING * 100)}
          alreadyPassed={completed}
          next={{ href: next.href, label: following ? "Proceed to the next lesson" : next.label }}
        />
      </section>

      {lesson.reflection && (
        <WrittenExercise
          prompt={lesson.reflection}
          minutes={exerciseMinutes(lesson)}
          courseId={course.id}
          lessonIndex={index}
          user={user}
        />
      )}

      <Pager
        prev={{ href: lessonHref(course.id, index, { kind: "page", page: lastPage }), label: lesson.pages[lastPage].title }}
        next={{ ...next, dir: following ? "Next lesson" : "Finish" }}
      />
    </LessonShell>
  );
}
