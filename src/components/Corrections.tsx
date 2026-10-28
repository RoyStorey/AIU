import Link from "next/link";
import { settleCorrection, withdrawCorrection } from "@/app/actions";
import { AutoRefresh } from "@/components/AutoRefresh";
import { CorrectionForm, Submit } from "@/components/Forms";
import { StudentName } from "@/components/Standing";
import type { User } from "@/lib/auth";
import { KINDS, STATUSES, correctionsFor, type Correction } from "@/lib/corrections";
import { forgeAvailable } from "@/lib/forge";
import { isFaculty } from "@/lib/people";
import { levelIn } from "@/lib/progress";
import { toRoman } from "@/lib/roman";
import type { Caveat, Lesson } from "@/lib/schema";

const CAVEAT_LABEL: Record<Caveat["kind"], string> = {
  uncertain: "Uncertain",
  disputed: "Disputed",
  corrected: "Corrected",
};

const VERDICT: Record<NonNullable<Correction["review"]>["verdict"], string> = {
  "likely-error": "The report is probably right",
  "likely-correct": "The lesson is probably right",
  uncertain: "The evidence is unclear",
};

const when = (t: string) =>
  new Date(t.replace(" ", "T") + "Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

const pageLabel = (lesson: Lesson, page: number) => `Page ${toRoman(page + 1).toLowerCase()}: ${lesson.pages[page]?.title ?? ""}`;

/**
 * A lesson's Comments & Corrections: the editors' own notes on claims that are
 * uncertain or disputed, then the reports students have sent in, with the
 * fact-checker's first look and the faculty's answer. On a single page, only
 * what concerns that page (and the lesson as a whole) is shown.
 */
export function Corrections({ courseId, concentrationId, concentration, lessonIndex, lesson, page, user, back }: {
  courseId: string;
  concentrationId: number;
  concentration: string;
  lessonIndex: number;
  lesson: Lesson;
  page?: number;
  user: User | null;
  back: string;
}) {
  const here = (p: number | null | undefined) => page === undefined || p === undefined || p === null || p === page;
  const caveats = (lesson.caveats ?? []).filter((c) => here(c.page === undefined ? undefined : c.page - 1));
  const reports = correctionsFor(courseId, lessonIndex).filter((r) => here(r.page_index));
  const faculty = isFaculty(user);
  const waiting = reports.some((r) => r.review_status === "drafting" && r.user_id === user?.id);
  const levels = new Map<number, ReturnType<typeof levelIn>>();
  for (const r of reports) if (!levels.has(r.user_id)) levels.set(r.user_id, levelIn(r.user_id, concentrationId));

  return (
    <section className="corrections" id="corrections" aria-labelledby="corrections-head">
      <div className="section-head">
        <h2 id="corrections-head">Comments &amp; Corrections</h2>
        <span className="eyebrow">{caveats.length + reports.length === 0 ? "None yet" : `${caveats.length} editor's ${caveats.length === 1 ? "note" : "notes"} · ${reports.length} ${reports.length === 1 ? "report" : "reports"}`}</span>
      </div>
      <p className="muted corrections-intro">
        These lessons are written with care, and some were drafted with the help of an AI model, so they can
        contain errors: a misattributed quotation, a wrong date, a confident claim that is only legend. The
        editors list the claims they are least sure of below. If you find something wrong, or doubtful, say so
        here, with your source; every report is public and is answered.
      </p>

      {caveats.length > 0 && (
        <>
          <h3 className="side-head">Editors&apos; notes</h3>
          <ul className="caveats">
            {caveats.map((c, i) => (
              <li key={i} className={`caveat caveat-${c.kind}`}>
                <div className="caveat-meta">
                  <span className={`flag flag-${c.kind}`}>{CAVEAT_LABEL[c.kind]}</span>
                  {c.page && page === undefined && <span className="muted">{pageLabel(lesson, c.page - 1)}</span>}
                </div>
                <p className="caveat-claim">{c.claim}</p>
                <p>{c.note}</p>
              </li>
            ))}
          </ul>
        </>
      )}

      {reports.length > 0 && (
        <>
          <h3 className="side-head">Reports from students</h3>
          <ul className="reports">
            {reports.map((r) => (
              <li key={r.id} className="report-item" id={`report-${r.id}`}>
                <div className="caveat-meta">
                  <span className={`flag flag-${r.kind}`}>{KINDS[r.kind]}</span>
                  <span className={`flag status-${r.status}`}>{STATUSES[r.status]}</span>
                  {r.page_index !== null && page === undefined && <span className="muted">{pageLabel(lesson, r.page_index)}</span>}
                </div>
                {r.quote && <blockquote className="report-quote">{r.quote}</blockquote>}
                <p>{r.body}</p>
                <p className="byline">
                  <StudentName id={r.user_id} name={r.user_name} level={levels.get(r.user_id)} concentration={concentration} /> · {when(r.created_at)}
                </p>
                {r.review_status === "drafting" && <p className="review muted">A fact-checker is looking at this report…</p>}
                {r.review && (
                  <div className={`review verdict-${r.review.verdict}`}>
                    <span className="eyebrow">Fact-checker&apos;s first look · {VERDICT[r.review.verdict]}</span>
                    <p>{r.review.explanation}</p>
                    <p className="muted review-note">An automated first look, not a ruling. The faculty decides.</p>
                  </div>
                )}
                {r.response && (
                  <div className="faculty-response">
                    <span className="eyebrow">The faculty answers</span>
                    <p>{r.response}</p>
                  </div>
                )}
                {faculty && (
                  <form action={settleCorrection} className="settle">
                    <input type="hidden" name="id" value={r.id} />
                    <select name="status" defaultValue={r.status} aria-label="Status">
                      {Object.entries(STATUSES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                    </select>
                    <input type="text" name="response" defaultValue={r.response ?? ""} placeholder="The faculty's answer" aria-label="Answer" />
                    <Submit className="button quiet" pending="Saving…">Answer</Submit>
                  </form>
                )}
                {user?.id === r.user_id && r.status === "open" && (
                  <form action={withdrawCorrection.bind(null, r.id)}>
                    <button type="submit" className="link-button muted" style={{ fontSize: "0.95rem" }}>Withdraw my report</button>
                  </form>
                )}
              </li>
            ))}
          </ul>
        </>
      )}

      <details className="report-new">
        <summary>Report an error or add a comment</summary>
        {user ? (
          <>
            <CorrectionForm courseId={courseId} lessonIndex={lessonIndex} pages={lesson.pages.map((p) => p.title)} page={page} back={back} />
            {forgeAvailable() && <p className="muted" style={{ fontSize: "0.95rem" }}>Reports of errors are given a first look by an automated fact-checker within a minute or so.</p>}
          </>
        ) : (
          <p className="muted"><Link href={`/login?next=${encodeURIComponent(back)}`}>Sign in</Link> to post a report.</p>
        )}
      </details>
      {waiting && <AutoRefresh every={8000} />}
    </section>
  );
}
