"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { submitKnowledgeCheck } from "@/app/actions";
import { toRoman } from "@/lib/roman";

type Result = Awaited<ReturnType<typeof submitKnowledgeCheck>>;

export function KnowledgeCheck({
  courseId,
  lessonIndex,
  questions,
  passingPercent,
  alreadyPassed,
  next,
}: {
  courseId: string;
  lessonIndex: number;
  questions: { prompt: string; choices: string[] }[];
  passingPercent: number;
  alreadyPassed: boolean;
  next: { href: string; label: string };
}) {
  const [chosen, setChosen] = useState<(number | null)[]>(() => questions.map(() => null));
  const [result, setResult] = useState<Result | null>(null);
  const [pending, startTransition] = useTransition();
  const complete = chosen.every((c) => c !== null);

  function submit(event: React.FormEvent) {
    event.preventDefault();
    startTransition(async () => {
      setResult(await submitKnowledgeCheck(courseId, lessonIndex, chosen.map((c) => c ?? -1)));
    });
  }

  function retry() {
    setResult(null);
    setChosen(questions.map(() => null));
  }

  const score = result ? result.answers.filter((a, i) => a === chosen[i]).length : 0;

  return (
    <form onSubmit={submit}>
      {questions.map((q, qi) => (
        <fieldset key={qi} className="question">
          <legend>
            <span className="numeral">{toRoman(qi + 1).toLowerCase()}.</span>
            <span>{q.prompt}</span>
          </legend>
          <div className="choices">
            {q.choices.map((choice, ci) => {
              const state = !result
                ? chosen[qi] === ci ? "selected" : ""
                : ci === result.answers[qi] ? "correct" : chosen[qi] === ci ? "incorrect" : "";
              return (
                <label key={ci} className={`choice ${state}`}>
                  <input
                    type="radio"
                    name={`q${qi}`}
                    checked={chosen[qi] === ci}
                    disabled={!!result}
                    onChange={() => setChosen((prev) => prev.map((c, i) => (i === qi ? ci : c)))}
                  />
                  <span>{choice}</span>
                </label>
              );
            })}
          </div>
          {result && <p className="explanation">{result.explanations[qi]}</p>}
        </fieldset>
      ))}

      {!result ? (
        <div className="actions">
          <button type="submit" className="button" disabled={!complete || pending}>
            {pending ? "Grading…" : "Submit answers"}
          </button>
          {alreadyPassed && <span className="mark done">Already completed</span>}
          {!complete && <span className="muted">Answer every question to submit.</span>}
        </div>
      ) : (
        <div className={`verdict ${result.passed ? "pass" : ""}`} role="status">
          <h3>{score} of {questions.length} correct.</h3>
          {result.passed ? (
            <p>
              {result.signedIn
                ? "This lesson is recorded as complete."
                : <>You passed. <Link href={`/signup?next=/courses/${courseId}/lessons/${lessonIndex + 1}`}>Matriculate</Link> to have your progress recorded.</>}
            </p>
          ) : (
            <p>A lesson is complete at {passingPercent}% or better. Review the lecture and readings, then try again.</p>
          )}
          <div className="actions">
            {result.passed && <Link className="button" href={next.href}>{next.label}</Link>}
            <button type="button" className="button quiet" onClick={retry}>Try again</button>
          </div>
        </div>
      )}
    </form>
  );
}
