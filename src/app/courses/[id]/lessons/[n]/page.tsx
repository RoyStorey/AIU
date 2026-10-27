import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { Citation } from "@/components/Citation";
import { CourseHeader } from "@/components/CourseHeader";
import { KnowledgeCheck } from "@/components/KnowledgeCheck";
import { Markdown } from "@/components/Markdown";
import { Media } from "@/components/Media";
import { WrittenExercise } from "@/components/WrittenExercise";
import { currentUser } from "@/lib/auth";
import { getCourse } from "@/lib/catalogue";
import { PASSING, lessonScores } from "@/lib/progress";
import { toRoman } from "@/lib/schema";

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

export default async function LessonPage({ params }: Params) {
  const { course, index, lesson } = await load(params);
  if (!course) notFound();
  if (!course.content) redirect(`/courses/${course.id}`);
  if (!lesson) notFound();

  const lessons = course.content.lessons;
  const user = await currentUser();
  const passed = user ? lessonScores(user.id, course.id).has(index) : false;
  const prev = index > 0 ? lessons[index - 1] : null;
  const following = index < lessons.length - 1 ? lessons[index + 1] : null;
  const nextLink = following
    ? { href: `/courses/${course.id}/lessons/${index + 2}`, label: "Proceed to the next lesson" }
    : { href: `/courses/${course.id}`, label: "Return to the syllabus" };

  return (
    <div className="wrap">
      <CourseHeader course={course} active={null} />
      <nav className="tabs" aria-label="Course">
        <Link href={`/courses/${course.id}`}>Syllabus</Link>
        <Link href={`/courses/${course.id}/lessons/${index + 1}`} aria-current="page">Lessons</Link>
        <Link href={`/courses/${course.id}/library`}>Reference Shelf</Link>
      </nav>

      <header className="measure" style={{ marginBottom: "2.5rem" }}>
        <p className="eyebrow">
          Lesson {toRoman(index + 1)} of {toRoman(lessons.length)}
          {passed && <span className="mark done" style={{ marginLeft: "1rem" }}>Completed</span>}
        </p>
        <h2 style={{ fontSize: "clamp(2.1rem, 5vw, 3rem)", margin: "0.35rem 0 0.6rem" }}>{lesson.title}</h2>
        <p style={{ fontSize: "1.25rem", fontStyle: "italic", color: "var(--ink-soft)", margin: 0 }}>{lesson.summary}</p>
      </header>

      <div className="lesson-layout">
        <article>
          <Markdown>{lesson.lecture}</Markdown>

          <section className="examination" id="knowledge-check">
            <h2>Knowledge Check</h2>
            <p>
              Answer each question, then submit. A score of {Math.round(PASSING * 100)}% or better completes the lesson.
            </p>
            <KnowledgeCheck
              courseId={course.id}
              lessonIndex={index}
              questions={lesson.questions.map(({ prompt, choices }) => ({ prompt, choices }))}
              passingPercent={Math.round(PASSING * 100)}
              alreadyPassed={passed}
              next={nextLink}
            />
          </section>

          {lesson.reflection && (
            <WrittenExercise prompt={lesson.reflection} courseId={course.id} lessonIndex={index} user={user} />
          )}

          <nav className="pager" aria-label="Lessons">
            {prev && (
              <Link href={`/courses/${course.id}/lessons/${index}`}>
                <span className="dir">← Previous</span>
                <span className="t">{prev.title}</span>
              </Link>
            )}
            {following && (
              <Link href={`/courses/${course.id}/lessons/${index + 2}`} className="next">
                <span className="dir">Next →</span>
                <span className="t">{following.title}</span>
              </Link>
            )}
          </nav>
        </article>

        <aside className="lesson-aside">
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
        </aside>
      </div>
    </div>
  );
}
