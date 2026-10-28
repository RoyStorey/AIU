import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ConcentrationHeader } from "@/components/ConcentrationHeader";
import { ThreadForm } from "@/components/Forms";
import { StudentName } from "@/components/Standing";
import { currentUser } from "@/lib/auth";
import { mastersOf } from "@/lib/capstone";
import { getConcentration, getSubject } from "@/lib/catalogue";
import { threads } from "@/lib/community";
import { studentsOf } from "@/lib/people";
import { isEnrolled } from "@/lib/progress";

type Params = { params: Promise<{ subject: string; concentration: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = await params;
  const c = getConcentration(p.subject, p.concentration);
  return { title: c ? `Common Room · ${c.name}` : "Not found" };
}

const when = (t: string) =>
  new Date(t.replace(" ", "T") + "Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

export default async function CommonRoom({ params }: Params) {
  const p = await params;
  const subject = getSubject(p.subject);
  const concentration = getConcentration(p.subject, p.concentration);
  if (!subject || !concentration || concentration.status !== "ready") notFound();

  const user = await currentUser();
  const base = `/faculties/${subject.slug}/${concentration.slug}`;
  const masters = mastersOf(concentration.id);
  const roster = studentsOf(concentration.id);
  const list = threads(concentration.id);
  const levelOf = new Map(roster.map((m) => [m.id, m.standing]));
  const enrolled = user ? isEnrolled(user.id, concentration.id) : false;
  const experts = roster.filter((m) => m.standing.level === "expert");
  const studying = roster.filter((m) => m.standing.level === "student");

  return (
    <div className="wrap">
      <ConcentrationHeader subject={subject} concentration={concentration} active="common-room"
        title="The Common Room" lede={`Where the students of ${concentration.name} meet: to ask questions, read together, and see the work of those who have mastered it.`} />

      <div className="program-layout">
        <div>
          <section className="hall" aria-labelledby="hall-head">
            <div className="section-head">
              <h2 id="hall-head">Hall of Masters</h2>
              <span className="eyebrow">{masters.length} {masters.length === 1 ? "Master" : "Masters"}</span>
            </div>
            {masters.length === 0 ? (
              <p className="muted">No one has yet passed the <Link href={`${base}/capstone`}>capstone</Link>. The first Master&apos;s work will hang here.</p>
            ) : (
              <ul className="capstone-cards">
                {masters.map((m) => (
                  <li key={m.submission.id}>
                    <p className="eyebrow">
                      <StudentName id={m.user.id} name={m.user.name} level="master" concentration={concentration.name} capstoneId={m.submission.id} demo={m.user.demo} />
                      <span className="muted"> · {m.submission.assessment?.mark} · {when(m.submission.created_at)}</span>
                    </p>
                    <h3><Link href={`/capstones/${m.submission.id}`}>{m.submission.title}</Link></h3>
                    {m.submission.assessment?.citation && <p className="report-citation">“{m.submission.assessment.citation}”</p>}
                    <p><Link href={`/capstones/${m.submission.id}`}>Read the capstone →</Link></p>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="section" aria-labelledby="threads-head">
            <div className="section-head">
              <h2 id="threads-head">Discussion</h2>
              <span className="eyebrow">{list.length} {list.length === 1 ? "thread" : "threads"}</span>
            </div>
            {list.length === 0 ? (
              <p className="muted">No one has started a thread yet.</p>
            ) : (
              <ul className="threads">
                {list.map((t) => {
                  const s = levelOf.get(t.user_id);
                  return (
                    <li key={t.id}>
                      <Link href={`${base}/common-room/${t.id}`} className="thread-title">{t.title}</Link>
                      <p className="byline">
                        <StudentName id={t.user_id} name={t.user_name} level={s?.level} concentration={concentration.name} capstoneId={s?.mastery?.capstoneId} />
                        <span className="muted"> · {t.replies} {t.replies === 1 ? "reply" : "replies"} · last {when(t.last_at)}</span>
                      </p>
                    </li>
                  );
                })}
              </ul>
            )}
            <details className="report-new" style={{ marginTop: "1.5rem" }}>
              <summary>Start a thread</summary>
              {user ? (
                <>
                  {!enrolled && <p className="muted">You have not declared {concentration.name}; you are welcome to post all the same.</p>}
                  <ThreadForm concentrationId={concentration.id} />
                </>
              ) : (
                <p className="muted"><Link href={`/login?next=${base}/common-room`}>Sign in</Link> to start a thread.</p>
              )}
            </details>
          </section>
        </div>

        <aside className="aside">
          <div className="aside-block">
            <span className="eyebrow">Members</span>
            <div className="figure-big">{roster.length}</div>
            <p className="muted">{masters.length} {masters.length === 1 ? "Master" : "Masters"} · {experts.length} {experts.length === 1 ? "Expert" : "Experts"} · {studying.length} studying</p>
            <p><Link href={`${base}/students`}>See them all →</Link></p>
          </div>

        </aside>
      </div>
    </div>
  );
}
