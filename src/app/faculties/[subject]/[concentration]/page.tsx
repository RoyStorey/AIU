import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { continueStudies, declare, retryProposal } from "@/app/actions";
import { Submit } from "@/components/Forms";
import { Preparing } from "@/components/Preparing";
import { AutoRefresh } from "@/components/AutoRefresh";
import { currentUser } from "@/lib/auth";
import { getConcentration, getSubject } from "@/lib/catalogue";
import { forgeAvailable } from "@/lib/forge";
import { continuationStatus, isEnrolled, programStanding, type CourseStanding } from "@/lib/progress";
import { stageName, toRoman } from "@/lib/schema";

type Params = { params: Promise<{ subject: string; concentration: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = await params;
  const c = getConcentration(p.subject, p.concentration);
  return { title: c ? c.name : "Not found" };
}

function Standing({ course, enrolled }: { course: CourseStanding; enrolled: boolean }) {
  const total = course.lessons + course.planned;
  if (course.status === "drafting") return <span className="mark progress">Being prepared</span>;
  if (!enrolled) return <span className="mark pending">{total ? `${total} lessons` : "Outline"}</span>;
  if (course.done) return <span className="mark done">Completed</span>;
  if (course.completed > 0) return <span className="mark progress">{course.completed} of {total} lessons</span>;
  return <span className="mark pending">Not begun</span>;
}

export default async function ProgramPage({ params }: Params) {
  const p = await params;
  const subject = getSubject(p.subject);
  const concentration = getConcentration(p.subject, p.concentration);
  if (!subject || !concentration) notFound();

  const user = await currentUser();
  const enrolled = user ? isEnrolled(user.id, concentration.id) : false;
  const courses = programStanding(user?.id ?? null, concentration.id);
  const stages = [...new Set(courses.map((c) => c.stage))].sort((a, b) => a - b);
  const done = courses.filter((c) => c.done).length;
  const complete = enrolled && courses.length > 0 && done === courses.length;
  const next = courses.find((c) => !c.done);
  const continuation = continuationStatus(concentration.id);
  const coursesDrafting = courses.some((c) => c.status === "drafting") && continuation?.status !== "drafting";

  return (
    <div className="wrap">
      <header className="page-head">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/faculties">Faculties</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/faculties/${subject.slug}`}>{subject.name}</Link>
        </nav>
        <h1>{concentration.name}</h1>
        <p className="lede">{concentration.description}</p>
      </header>

      {concentration.status === "drafting" ? (
        <Preparing title="The faculty is drafting this program">
          <p>A complete program of study—foundations through seminar—is being designed. This usually takes a minute or two.</p>
        </Preparing>
      ) : concentration.status === "failed" && courses.length === 0 ? (
        <div className="notice">
          <h3>The draft was interrupted</h3>
          <p className="muted">{concentration.error}</p>
          {user && forgeAvailable() && (
            <form action={retryProposal.bind(null, concentration.id)}>
              <Submit>Ask the faculty again</Submit>
            </form>
          )}
        </div>
      ) : (
        <div className="program-layout">
          <div>
            {stages.map((stage) => (
              <section key={stage} className="stage">
                <div className="stage-head">
                  <span className="numeral">{toRoman(stage)}</span>
                  <h2>{stageName(stage)}</h2>
                </div>
                {courses.filter((c) => c.stage === stage).map((course) => (
                  <Link key={course.id} href={`/courses/${course.id}`} className="course-row">
                    <span className="code">{course.code}</span>
                    <div>
                      <h3>{course.title}</h3>
                      <p>{course.summary}</p>
                      {course.texts.length > 0 && <div className="texts">{course.texts.join(" · ")}</div>}
                    </div>
                    <span className="standing"><Standing course={course} enrolled={enrolled} /></span>
                  </Link>
                ))}
              </section>
            ))}

            {continuation?.status === "drafting" && (
              <Preparing title="Further courses are being drafted">
                <p>The faculty is designing advanced courses that extend this program.</p>
              </Preparing>
            )}
            {continuation?.status === "failed" && (
              <div className="notice">
                <h3>The continuation could not be drafted</h3>
                <p className="muted">{continuation.error}</p>
              </div>
            )}
          </div>

          <aside className="aside">
            {!enrolled ? (
              <div className="aside-block">
                <h3>Declare this concentration</h3>
                <p>Declaring adds the program to your studies and records your progress through each course.</p>
                {user ? (
                  <form action={declare.bind(null, concentration.id)}>
                    <Submit pending="Declaring…">Declare</Submit>
                  </form>
                ) : (
                  <Link className="button" href={`/signup?next=/faculties/${subject.slug}/${concentration.slug}`}>
                    Matriculate to declare
                  </Link>
                )}
              </div>
            ) : (
              <div className="aside-block">
                <span className="eyebrow">Your standing</span>
                <div className="figure-big">{done} <span className="muted" style={{ fontSize: "1.3rem" }}>of {courses.length} courses</span></div>
                <div className="meter"><span style={{ width: `${courses.length ? (done / courses.length) * 100 : 0}%` }} /></div>
                {next && !complete && (
                  <p style={{ marginTop: "1rem" }}>
                    Next: <Link href={`/courses/${next.id}`}>{next.code} {next.title}</Link>
                  </p>
                )}
              </div>
            )}

            {complete && continuation?.status !== "drafting" && (
              <div className="aside-block">
                <h3>Program complete</h3>
                <p>
                  You have completed every course in this program. If you wish to go further, the faculty will draft
                  advanced courses at the level of graduate study.
                </p>
                {forgeAvailable() ? (
                  <form action={continueStudies.bind(null, concentration.id)}>
                    <Submit pending="Requesting…">Continue your studies</Submit>
                  </form>
                ) : (
                  <p className="muted">Continuing studies requires the forge to be configured with an Anthropic API key.</p>
                )}
              </div>
            )}

            <div className="aside-block">
              <h3>About this program</h3>
              <p>
                {courses.length} courses in {stages.length} stages. Courses may be taken in any order, though the
                stages are arranged to build upon one another.
              </p>
            </div>
          </aside>
        </div>
      )}
      {coursesDrafting && <AutoRefresh />}
    </div>
  );
}
