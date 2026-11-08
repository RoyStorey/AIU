import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { prepareCourse } from "@/app/actions";
import { CourseHeader } from "@/components/CourseHeader";
import { Submit } from "@/components/Forms";
import { Markdown } from "@/components/Markdown";
import { Preparing, Quill } from "@/components/Preparing";
import { PacePanel } from "@/components/PacePanel";
import { preferredPace } from "@/lib/dashboard";
import { currentUser, isAdmin } from "@/lib/auth";
import { Obtain } from "@/components/Obtain";
import { bookKey, parseText, sourcesFor } from "@/lib/books";
import { getCourse, isOpen, listCourses } from "@/lib/catalogue";
import { forgeAvailable } from "@/lib/forge";
import { lastVisit, lessonScores } from "@/lib/progress";
import type { PlannedLesson } from "@/lib/schema";
import { formatMinutes, lessonMinutes, plannedMinutes } from "@/lib/timing";

type Params = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const course = getCourse((await params).id);
  return { title: course ? `${course.code} ${course.title}` : "Not found" };
}

function Outline({ course, admin }: { course: NonNullable<ReturnType<typeof getCourse>>; admin: boolean }) {
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
  const elsewhere = listCourses(course.concentration_id).filter((c) => c.id !== course.id && isOpen(c));
  return (
    <div className="program-layout">
      <div>
        <section className="in-preparation" aria-labelledby="in-prep-title">
          <Quill />
          <p className="eyebrow">In preparation</p>
          <h2 id="in-prep-title">This course is being written</h2>
          <p>
            The faculty is writing its lectures, source readings, and knowledge checks. It will open here when it is
            finished, held to the standard of the rest of the program: five lessons of about two hours each.
          </p>
          <p className="muted">Until then, the core texts below are the best way to begin.</p>
          {admin && forgeAvailable() && (
            <form action={prepareCourse.bind(null, course.id)} className="in-preparation-admin">
              {course.status === "failed" && <p className="muted">The forge was interrupted: {course.error}</p>}
              <Submit pending="Requesting…">{course.status === "failed" ? "Try the forge again" : "Draft it with the forge"}</Submit>
              <p className="muted"><small>Shown to administrators only.</small></p>
            </form>
          )}
        </section>
        <h2 style={{ fontSize: "1.85rem", margin: "3rem 0 1rem" }}>Core Texts</h2>
        <div className="measure"><CoreTexts texts={course.texts} /></div>
      </div>
      <aside className="aside">
        <div className="aside-block">
          <h3>Open now in {course.concentration.name}</h3>
          {elsewhere.length ? (
            <ul className="open-now">
              {elsewhere.map((c) => (
                <li key={c.id}>
                  <Link href={`/courses/${c.id}`}><span className="code">{c.code}</span> {c.title}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="muted">The first courses of this program are still being written.</p>
          )}
          <p style={{ marginTop: "1rem" }}>
            <Link href={`/faculties/${course.subject.slug}/${course.concentration.slug}`}>The whole program →</Link>
          </p>
        </div>
      </aside>
    </div>
  );
}

/** A course's core texts, each with a way to obtain it. */
function CoreTexts({ texts }: { texts: string[] }) {
  const books = texts.map(parseText);
  const sources = sourcesFor(books);
  return (
    <ul className="citations" style={{ marginBottom: "2rem" }}>
      {books.map((book) => (
        <li key={book.title} className="citation">
          <span className="kind">Text</span>
          <div>
            <span className="title">{book.title}</span>{book.author && <span className="by">, {book.author}</span>}
            <Obtain book={book} source={sources.get(bookKey(book))} />
          </div>
        </li>
      ))}
    </ul>
  );
}

/** A lesson the faculty has planned but not yet written, opened to show its plan. */
function Planned({ lesson, numeral }: { lesson: PlannedLesson; numeral: string }) {
  return (
    <li>
      <details className="planned">
        <summary>
          <span className="numeral">{numeral}</span>
          <div>
            <h3>{lesson.title}</h3>
            <p>{lesson.summary}</p>
          </div>
          <span className="mark pending">In preparation</span>
        </summary>
        <div className="plan">
          <ol>
            {lesson.pages.map((page) => (
              <li key={page.title}>
                <div>
                  <h4>{page.title}</h4>
                  <p>{page.summary}</p>
                </div>
                <span className="mark pending">{formatMinutes(page.minutes)}</span>
              </li>
            ))}
          </ol>
          <p className="muted">
            Followed by a knowledge check and a written exercise. About {formatMinutes(plannedMinutes(lesson))} in all.
          </p>
          {lesson.readings && lesson.readings.length > 0 && (
            <>
              <h4>Readings</h4>
              <ul>
                {lesson.readings.map((r) => (
                  <li key={r.title}><em>{r.title}</em>{r.author && <>, {r.author}</>}{r.note && <span className="muted"> — {r.note}</span>}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </details>
    </li>
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
        <Outline course={course} admin={isAdmin(user)} />
      </div>
    );
  }

  const { content } = course;
  const textSources = sourcesFor(course.texts.map(parseText));
  const scores = user ? lessonScores(user.id, course.id) : new Map<number, number>();
  const visit = user ? lastVisit(user.id, course.id) : null;
  /** The lesson the student is partway through: where they last read, if they have not completed it. */
  const reading = visit && !scores.has(visit.lesson_index) ? visit.lesson_index : -1;
  const next = content.lessons.findIndex((_, i) => !scores.has(i));
  const forthcoming = content.forthcoming ?? [];
  const total = content.lessons.length + forthcoming.length;
  const minutes = content.lessons.reduce((sum, l) => sum + lessonMinutes(l), 0)
    + forthcoming.reduce((sum, l) => sum + plannedMinutes(l), 0);

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
                  <span className="numeral">{(i + 1)}</span>
                  <div>
                    <h3>{lesson.title}</h3>
                    <p>{lesson.summary}</p>
                  </div>
                  <span className={`mark ${scores.has(i) ? "done" : i === reading ? "progress" : "pending"}`}>
                    {scores.has(i) ? "Completed" : i === reading ? "In progress" : formatMinutes(lessonMinutes(lesson))}
                  </span>
                </Link>
              </li>
            ))}
            {forthcoming.map((lesson, i) => (
              <Planned key={i} lesson={lesson} numeral={String(content.lessons.length + i + 1)} />
            ))}
          </ol>
        </div>

        <aside className="aside">
          <div className="aside-block">
            <span className="eyebrow">Length</span>
            <p style={{ margin: "0.25rem 0 1.25rem" }}>
              About {formatMinutes(minutes)} of study in {total} lessons, with further readings and recordings on the
              reference shelf.
            </p>
            {forthcoming.length > 0 && (
              <p className="muted" style={{ margin: "-0.75rem 0 1.25rem" }}>
                {content.lessons.length === 1 ? "The first lesson is" : `The first ${content.lessons.length} lessons are`} written;
                the rest are planned in outline and still in preparation.
              </p>
            )}
            <span className="eyebrow">Progress</span>
            <div className="figure-big">
              {scores.size} <span className="muted" style={{ fontSize: "1.3rem" }}>of {total} lessons</span>
            </div>
            <div className="meter"><span style={{ width: `${(scores.size / total) * 100}%` }} /></div>
            <div style={{ marginTop: "1.25rem" }}>
              {next === -1 ? (
                <p className={`mark ${forthcoming.length ? "progress" : "done"}`}>
                  {forthcoming.length ? "Written lessons completed" : "Course completed"}
                </p>
              ) : (
                <Link className="button" href={reading >= 0
                  ? `/courses/${course.id}/lessons/${reading + 1}/${visit!.page_index + 1}`
                  : `/courses/${course.id}/lessons/${next + 1}`}>
                  {scores.size === 0 && reading < 0 ? "Begin the first lesson" : "Continue"}
                </Link>
              )}
            </div>
            {!user && <p className="muted" style={{ marginTop: "1rem" }}><Link href={`/signup?next=/courses/${course.id}`}>Enroll</Link> to record your progress.</p>}
          </div>
          <PacePanel
            remaining={content.lessons.length - [...scores.keys()].filter((i) => i < content.lessons.length).length}
            averageMinutes={content.lessons.reduce((sum, l) => sum + lessonMinutes(l), 0) / content.lessons.length}
            chosen={user ? preferredPace(user.id).id : null}
            path={`/courses/${course.id}`}
            partial={forthcoming.length > 0}
          />
          <div className="aside-block">
            <h3>Core Texts</h3>
            <ul className="core-texts">
              {course.texts.map(parseText).map((book) => (
                <li key={book.title}>
                  <em>{book.title}</em>{book.author && <span className="muted"> — {book.author}</span>}
                  <Obtain book={book} source={textSources.get(bookKey(book))} />
                </li>
              ))}
            </ul>
            <p style={{ marginTop: "1rem" }}><Link href={`/courses/${course.id}/library`}>The full reference shelf →</Link></p>
          </div>
        </aside>
      </div>
    </div>
  );
}
