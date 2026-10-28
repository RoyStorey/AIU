import Link from "next/link";
import { AutoRefresh } from "@/components/AutoRefresh";
import { EssayForm } from "@/components/Forms";
import { Quill } from "@/components/Preparing";
import type { User } from "@/lib/auth";
import { forgeAvailable } from "@/lib/forge";
import { essaysFor, type Essay } from "@/lib/registrar";
import { ESSAY_LIMITS, type Feedback } from "@/lib/schema";
import { formatMinutes } from "@/lib/timing";

const MARK_NOTE: Record<Feedback["mark"], string> = {
  Distinction: "An excellent piece of work.",
  Merit: "A good piece of work.",
  Pass: "A sound piece of work with room to grow.",
  Revise: "Not yet at the standard; revise and resubmit.",
};

function when(timestamp: string) {
  return new Date(timestamp.replace(" ", "T") + "Z").toLocaleDateString("en-US", { month: "long", day: "numeric" });
}

function Report({ feedback }: { feedback: Feedback }) {
  return (
    <div className="report">
      <div className="report-head">
        <span className="eyebrow">Tutor’s report</span>
        <div className={`report-mark mark-${feedback.mark.toLowerCase()}`}>{feedback.mark}</div>
        <p className="muted">{MARK_NOTE[feedback.mark]}</p>
      </div>
      <p className="report-summary">{feedback.summary}</p>

      <table className="report-criteria">
        <tbody>
          {feedback.criteria.map((c) => (
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
          <ul>{feedback.strengths.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
        <div>
          <h4>To improve</h4>
          <ul>{feedback.improvements.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
      </div>

      {feedback.annotations.length > 0 && (
        <>
          <h4>In the margin</h4>
          <ul className="annotations">
            {feedback.annotations.map((a, i) => (
              <li key={i}>
                <q>{a.quote}</q>
                <span>{a.comment}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <div className="report-next">
        <h4>Next step</h4>
        <p>{feedback.nextStep}</p>
      </div>
    </div>
  );
}

/**
 * A lesson's written exercise: the question, the student's response, and the
 * tutor's report on each submission.
 */
export function WrittenExercise({ prompt, minutes, courseId, lessonIndex, user }: {
  prompt: string;
  minutes: number;
  courseId: string;
  lessonIndex: number;
  user: User | null;
}) {
  const essays: Essay[] = user ? essaysFor(user.id, courseId, lessonIndex) : [];
  const [latest] = essays;
  const graded = essays.find((e) => e.status === "ready");
  const here = `/courses/${courseId}/lessons/${lessonIndex + 1}/exercises`;

  return (
    <section className="exercise" id="written-exercise">
      <p className="eyebrow">About {formatMinutes(minutes)}</p>
      <h2>Written Exercise</h2>
      <p className="exercise-prompt">{prompt}</p>

      {!user ? (
        <p className="muted">
          <Link href={`/login?next=${here}`}>Sign in</Link> or <Link href={`/signup?next=${here}`}>matriculate</Link> to
          submit your response and receive a tutor&apos;s report.
        </p>
      ) : !forgeAvailable() ? (
        <p className="muted">Written responses are marked by a tutor once the forge is configured with an Anthropic API key.</p>
      ) : latest?.status === "drafting" ? (
        <div className="preparing" role="status" aria-live="polite" style={{ padding: "2.5rem 1rem" }}>
          <Quill />
          <h3 style={{ fontSize: "1.5rem" }}>Your tutor is reading your essay</h3>
          <p>A report usually takes under a minute. You may keep studying; this will update on its own.</p>
          <AutoRefresh every={5000} />
        </div>
      ) : (
        <>
          {latest?.status === "failed" && <p className="form-error">Your last submission could not be marked: {latest.error}</p>}
          <EssayForm
            courseId={courseId}
            lessonIndex={lessonIndex}
            draft={latest?.response ?? ""}
            minWords={ESSAY_LIMITS.min}
            revising={!!graded}
          />
        </>
      )}

      {graded?.feedback && <Report feedback={graded.feedback} />}

      {essays.filter((e) => e.status === "ready").length > 1 && (
        <p className="muted" style={{ marginTop: "1rem", fontSize: "0.98rem" }}>
          Earlier submissions:{" "}
          {essays.filter((e) => e.status === "ready").slice(1).map((e) => `${e.feedback!.mark} (${when(e.created_at)})`).join(" · ")}
        </p>
      )}
    </section>
  );
}
