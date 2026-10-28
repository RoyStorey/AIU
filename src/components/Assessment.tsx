import type { Assessment } from "@/lib/schema";

const MARK_NOTE: Record<Assessment["mark"], string> = {
  Distinction: "An excellent capstone. The student is a Master of the concentration.",
  Merit: "A good capstone. The student is a Master of the concentration.",
  Pass: "A capstone that meets the standard. The student is a Master of the concentration.",
  Revise: "Not yet at the standard of the concentration. Revise and resubmit.",
};

/** An examiner's report on a capstone. */
export function AssessmentReport({ assessment, heading = "Examiner’s report" }: { assessment: Assessment; heading?: string }) {
  return (
    <div className="report">
      <div className="report-head">
        <span className="eyebrow">{heading}</span>
        <div className={`report-mark mark-${assessment.mark.toLowerCase()}`}>{assessment.mark}</div>
        <p className="muted">{MARK_NOTE[assessment.mark]}</p>
      </div>
      {assessment.citation && <p className="report-citation">“{assessment.citation}”</p>}
      <p className="report-summary">{assessment.summary}</p>

      <table className="report-criteria">
        <tbody>
          {assessment.criteria.map((c) => (
            <tr key={c.name}>
              <th scope="row">{c.name}</th>
              <td className="pips" aria-label={`${c.score} of 4`}>
                {[1, 2, 3, 4].map((n) => <span key={n} className={n <= c.score ? "on" : ""} />)}
              </td>
              <td>{c.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="report-columns">
        <div>
          <h4>Strengths</h4>
          <ul>{assessment.strengths.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
        <div>
          <h4>To improve</h4>
          <ul>{assessment.improvements.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
      </div>

      {assessment.annotations.length > 0 && (
        <>
          <h4>In the margin</h4>
          <ul className="annotations">
            {assessment.annotations.map((a, i) => (
              <li key={i}>
                <q>{a.quote}</q>
                <span>{a.comment}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
