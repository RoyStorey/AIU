import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { prepareCourse } from "@/app/actions";
import { CourseHeader } from "@/components/CourseHeader";
import { Submit } from "@/components/Forms";
import { Markdown } from "@/components/Markdown";
import { Preparing } from "@/components/Preparing";
import { currentUser } from "@/lib/auth";
import { getCourse } from "@/lib/catalogue";
import { forgeAvailable } from "@/lib/forge";
import { lessonScores } from "@/lib/progress";
import { toRoman } from "@/lib/schema";

type Params = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const course = getCourse((await params).id);
  return { title: course ? `${course.code} ${course.title}` : "Not found" };
}

function Outline({ course, signedIn }: { course: NonNullable<ReturnType<typeof getCourse>>; signedIn: boolean }) {
  if (course.status === "drafting") {
    return (
      <Preparing title="This course is being prepared">
        <p>
          Cornerstone’s librarian is searching for editions, lectures, and recordings, and the faculty is writing
          the lectures and knowledge checks. A full course usually takes three to six minutes.
        </p>
      </Preparing>
    );
  }
  return (
    <div className="program-layout">
      <div className="measure">
        <h2 style={{ fontSize: "1.85rem", marginBottom: "1rem" }}>Core Texts</h2>
        <ul className="citations" style={{ marginBottom: "2rem" }}>
          {course.texts.map((t) => {
            const [title, author] = t.split(" — ");
            return (
              <li key={t} className="citation">
                <span className="kind">Text</span>
                <div><span className="title">{title}</span>{author && <span className="by">, {author}</span>}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <aside className="aside">
        <div className="aside-block">
          {course.status === "failed" && (
            <>
              <h3>Preparation was interrupted</h3>
              <p className="muted">{course.error}</p>
            </>
          )}
          {course.status !== "failed" && <h3>This course is in outline</h3>}
          <p>
            Its lectures, readings, recordings, reference shelf, and knowledge checks are prepared the first time a
            student opens it.
          </p>
          {!forgeAvailable() ? (
            <p className="muted">Preparing courses requires the forge to be configured with an Anthropic API key.</p>
          ) : signedIn ? (
            <form action={prepareCourse.bind(null, course.id)}>
              <Submit pending="Requesting…">{course.status === "failed" ? "Try again" : "Prepare this course"}</Submit>
            </form>
          ) : (
            <Link className="button" href={`/signup?next=/courses/${course.id}`}>Matriculate to begin</Link>
          )}
        </div>
      </aside>
    </div>
  );
}

export default async function CoursePage({ params }: Params) {
  const course = getCourse((await params).id);
  if (!course) notFound();
  const user = await currentUser();

  if (!course.content) {
    return (
      <div className="wrap">
        <CourseHeader course={course} active={null} />
        <Outline course={course} signedIn={!!user} />
      </div>
    );
  }

  const { content } = course;
  const scores = user ? lessonScores(user.id, course.id) : new Map<number, number>();
  const next = content.lessons.findIndex((_, i) => !scores.has(i));

  return (
    <div className="wrap">
      <CourseHeader course={course} active="syllabus" />
      <div className="program-layout">
        <div>
          <Markdown>{content.overview}</Markdown>

          <h2 style={{ fontSize: "1.85rem", margin: "3rem 0 1rem" }}>Objectives</h2>
          <ol className="objectives measure">
            {content.objectives.map((o) => <li key={o}>{o}</li>)}
          </ol>

          <h2 style={{ fontSize: "1.85rem", margin: "3rem 0 1rem" }}>Lessons</h2>
          <ol className="syllabus">
            {content.lessons.map((lesson, i) => (
              <li key={i}>
                <Link href={`/courses/${course.id}/lessons/${i + 1}`}>
                  <span className="numeral">{toRoman(i + 1)}</span>
                  <div>
                    <h3>{lesson.title}</h3>
                    <p>{lesson.summary}</p>
                  </div>
                  <span className={`mark ${scores.has(i) ? "done" : "pending"}`}>
                    {scores.has(i) ? "Completed" : `${lesson.questions.length} questions`}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>

        <aside className="aside">
          <div className="aside-block">
            <span className="eyebrow">Progress</span>
            <div className="figure-big">
              {scores.size} <span className="muted" style={{ fontSize: "1.3rem" }}>of {content.lessons.length} lessons</span>
            </div>
            <div className="meter"><span style={{ width: `${(scores.size / content.lessons.length) * 100}%` }} /></div>
            <div style={{ marginTop: "1.25rem" }}>
              {next === -1 ? (
                <p className="mark done">Course completed</p>
              ) : (
                <Link className="button" href={`/courses/${course.id}/lessons/${next + 1}`}>
                  {scores.size === 0 ? "Begin the first lesson" : "Continue"}
                </Link>
              )}
            </div>
            {!user && <p className="muted" style={{ marginTop: "1rem" }}><Link href={`/signup?next=/courses/${course.id}`}>Matriculate</Link> to record your progress.</p>}
          </div>
          <div className="aside-block">
            <h3>Core Texts</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "1.02rem" }}>
              {course.texts.map((t) => <li key={t} style={{ marginBottom: "0.45rem" }}><em>{t.split(" — ")[0]}</em>{t.includes(" — ") && <span className="muted"> — {t.split(" — ")[1]}</span>}</li>)}
            </ul>
            <p style={{ marginTop: "1rem" }}><Link href={`/courses/${course.id}/library`}>The full reference shelf →</Link></p>
          </div>
        </aside>
      </div>
    </div>
  );
}
