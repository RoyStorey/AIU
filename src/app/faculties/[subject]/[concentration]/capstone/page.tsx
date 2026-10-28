import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AssessmentReport } from "@/components/Assessment";
import { AutoRefresh } from "@/components/AutoRefresh";
import { ConcentrationHeader } from "@/components/ConcentrationHeader";
import { CapstoneForm } from "@/components/Forms";
import { Markdown } from "@/components/Markdown";
import { Quill } from "@/components/Preparing";
import { Seal, StudentName } from "@/components/Standing";
import { currentUser } from "@/lib/auth";
import { capstoneFor, mastersOf, submissionsFor } from "@/lib/capstone";
import { getConcentration, getSubject } from "@/lib/catalogue";
import { forgeAvailable } from "@/lib/forge";
import { standing } from "@/lib/progress";
import { CAPSTONE_LIMITS } from "@/lib/schema";

type Params = { params: Promise<{ subject: string; concentration: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = await params;
  const c = getConcentration(p.subject, p.concentration);
  return { title: c ? `Capstone · ${c.name}` : "Not found" };
}

const when = (t: string) =>
  new Date(t.replace(" ", "T") + "Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

export default async function CapstonePage({ params }: Params) {
  const p = await params;
  const subject = getSubject(p.subject);
  const concentration = getConcentration(p.subject, p.concentration);
  if (!subject || !concentration || concentration.status !== "ready") notFound();

  const brief = capstoneFor(concentration);
  const user = await currentUser();
  const mine = user ? standing(user.id, concentration.id) : null;
  const submissions = user ? submissionsFor(user.id, concentration.id) : [];
  const [latest] = submissions;
  const masters = mastersOf(concentration.id);
  const min = Math.max(CAPSTONE_LIMITS.min, brief.words.min);
  const max = Math.min(CAPSTONE_LIMITS.max, brief.words.max);
  const base = `/faculties/${subject.slug}/${concentration.slug}`;
  const canSubmit = !!mine?.complete && mine.level !== "master" && latest?.status !== "drafting";

  return (
    <div className="wrap">
      <ConcentrationHeader subject={subject} concentration={concentration} active="capstone" title={brief.title} lede={brief.summary} />

      <div className="program-layout">
        <div>
          <Markdown>{brief.brief}</Markdown>

          <h2 className="capstone-h">Forms the capstone may take</h2>
          <dl className="options">
            {brief.options.map((o) => (
              <div key={o.name}>
                <dt>{o.name}</dt>
                <dd>{o.description}</dd>
              </div>
            ))}
          </dl>

          <h2 className="capstone-h">Requirements</h2>
          <ol className="objectives measure">
            {brief.requirements.map((r) => <li key={r}>{r}</li>)}
          </ol>
          <p className="measure">
            <strong>Length:</strong> {min.toLocaleString()} to {max.toLocaleString()} words, with an abstract of 50 to
            300 words. Write in Markdown: <code>##</code> for section headings, <code>&gt;</code> for quotations, a blank
            line between paragraphs.
          </p>

          <h2 className="capstone-h">How it is examined</h2>
          <p className="measure">
            An examiner reads the whole submission against the brief and marks each criterion from one to four, with
            comments and notes in the margin, then gives an overall mark: Distinction, Merit, Pass, or Revise. Any mark
            but Revise passes. A passing capstone makes you a <strong>Master</strong> of {concentration.name}, and is shown
            on your profile and in the concentration&apos;s Hall of Masters for others to read. A capstone marked Revise
            may be revised and resubmitted as often as you like.
          </p>
          <table className="rubric">
            <thead><tr><th scope="col">Criterion</th><th scope="col">What the examiner looks for</th></tr></thead>
            <tbody>
              {brief.rubric.map((r) => (
                <tr key={r.name}><th scope="row">{r.name}</th><td>{r.description}</td></tr>
              ))}
            </tbody>
          </table>

          {submissions.length > 0 && (
            <section className="section" id="submissions">
              <h2 className="capstone-h">Your submissions</h2>
              {latest.status === "drafting" && (
                <div className="preparing" role="status" aria-live="polite" style={{ padding: "2.5rem 1rem" }}>
                  <Quill />
                  <h3 style={{ fontSize: "1.5rem" }}>The examiner is reading “{latest.title}”</h3>
                  <p>A full examination takes a few minutes. You may leave this page; the report will be here when you return.</p>
                  <AutoRefresh every={8000} />
                </div>
              )}
              {latest.status === "failed" && <p className="form-error">Your last submission could not be examined: {latest.error}</p>}
              {submissions.filter((s) => s.status === "ready").map((s) => (
                <article key={s.id} className="submission">
                  <p className="eyebrow">Submitted {when(s.created_at)}{s.option && ` · ${s.option}`}</p>
                  <h3><Link href={`/capstones/${s.id}`}>{s.title}</Link></h3>
                  {s.assessment && <AssessmentReport assessment={s.assessment} />}
                </article>
              ))}
            </section>
          )}

          {canSubmit && forgeAvailable() && (
            <section className="section" id="submit">
              <h2 className="capstone-h">{latest?.passed === false && latest.status === "ready" ? "Revise and resubmit" : "Submit your capstone"}</h2>
              <CapstoneForm
                concentrationId={concentration.id}
                options={brief.options.map((o) => o.name)}
                minWords={min}
                maxWords={max}
                draft={latest ? { option: latest.option, title: latest.title, abstract: latest.abstract, body: latest.body } : undefined}
              />
            </section>
          )}
        </div>

        <aside className="aside">
          <div className="aside-block">
            <span className="eyebrow">Your standing</span>
            {!user ? (
              <p style={{ marginTop: "0.4rem" }}>
                <Link href={`/login?next=${base}/capstone`}>Sign in</Link> to see your standing. The capstone opens to
                students who have completed every course in the program.
              </p>
            ) : mine?.level === "master" ? (
              <>
                <p style={{ margin: "0.6rem 0" }}><Seal level="master" concentration={concentration.name} size="large" href={`/capstones/${mine.mastery!.capstoneId}`} /></p>
                <p>You passed the capstone with <strong>{mine.mastery!.mark}</strong> on {when(mine.mastery!.passedAt)}.</p>
              </>
            ) : mine?.complete ? (
              <>
                <p style={{ margin: "0.6rem 0" }}><Seal level="expert" concentration={concentration.name} size="large" /></p>
                <p>You have completed the program and are an Expert in {concentration.name}. The capstone is open to you.</p>
                {!forgeAvailable() && <p className="muted">Capstones are examined once the forge is configured with an Anthropic API key.</p>}
                {canSubmit && forgeAvailable() && <p><a href="#submit">Submit your capstone ↓</a></p>}
              </>
            ) : (
              <>
                <div className="figure-big">{mine?.coreDone ?? 0} <span className="muted" style={{ fontSize: "1.3rem" }}>of {mine?.core.length ?? 0} courses</span></div>
                <div className="meter"><span style={{ width: `${mine?.core.length ? (mine.coreDone / mine.core.length) * 100 : 0}%` }} /></div>
                <p>
                  The capstone opens when you have completed every course in the program. Read the brief now: the best
                  capstones grow from questions you notice along the way.
                </p>
              </>
            )}
          </div>

          <div className="aside-block">
            <span className="eyebrow">Hall of Masters</span>
            {masters.length === 0 ? (
              <p style={{ marginTop: "0.4rem" }}>No one has yet passed this capstone. The first Master&apos;s work will be shown here.</p>
            ) : (
              <ul className="masters-mini">
                {masters.map((m) => (
                  <li key={m.submission.id}>
                    <StudentName id={m.user.id} name={m.user.name} level="master" concentration={concentration.name} capstoneId={m.submission.id} demo={m.user.demo} />
                    <Link href={`/capstones/${m.submission.id}`}><em>{m.submission.title}</em></Link>
                    <span className="muted"> · {m.submission.assessment?.mark}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
