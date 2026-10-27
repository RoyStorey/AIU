import type { Question } from "@/lib/content/schema";
import { Button } from "./ui";

type PublicQuestion = Pick<Question, "prompt" | "choices">;

/** Renders questions without answers; grading happens in a server action. */
export function QuizForm({
  action,
  hidden,
  questions,
  submitLabel,
}: {
  action: (formData: FormData) => Promise<void>;
  hidden: Record<string, string | number>;
  questions: PublicQuestion[];
  submitLabel: string;
}) {
  return (
    <form action={action} className="space-y-6">
      {Object.entries(hidden).map(([k, v]) => (
        <input key={k} type="hidden" name={k} value={v} />
      ))}
      {questions.map((q, i) => (
        <fieldset key={i} className="rounded-lg border border-navy-100 bg-white p-5">
          <legend className="sr-only">Question {i + 1}</legend>
          <p className="font-medium text-navy-900">
            <span className="mr-2 text-navy-400">{i + 1}.</span>
            {q.prompt}
          </p>
          <div className="mt-4 space-y-2">
            {q.choices.map((choice, j) => (
              <label key={j} className="flex cursor-pointer items-start gap-3 rounded-md px-3 py-2 text-sm text-navy-800 ring-1 ring-inset ring-navy-100 hover:bg-navy-50 has-[:checked]:bg-navy-50 has-[:checked]:ring-navy-400">
                <input type="radio" name={`q${i}`} value={j} required className="mt-0.5 accent-navy-700" />
                <span>{choice}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ))}
      <Button>{submitLabel}</Button>
    </form>
  );
}

export function QuizReview({ questions, answers, revealAnswers }: { questions: Question[]; answers: number[]; revealAnswers: boolean }) {
  return (
    <ol className="space-y-4">
      {questions.map((q, i) => {
        const correct = answers[i] === q.answerIndex;
        return (
          <li key={i} className={`rounded-lg border p-5 ${correct ? "border-emerald-200 bg-emerald-50/50" : "border-red-200 bg-red-50/40"}`}>
            <p className="font-medium text-navy-900">
              <span className="mr-2 text-navy-400">{i + 1}.</span>
              {q.prompt}
            </p>
            <p className="mt-2 text-sm">
              <span className={correct ? "font-semibold text-emerald-700" : "font-semibold text-red-700"}>{correct ? "Correct" : "Incorrect"}</span>
              {answers[i] >= 0 && <span className="text-navy-600"> · Your answer: {q.choices[answers[i]]}</span>}
            </p>
            {revealAnswers && (
              <div className="mt-2 text-sm text-navy-700">
                {!correct && <p><span className="font-semibold">Correct answer:</span> {q.choices[q.answerIndex]}</p>}
                <p className="mt-1 text-navy-600">{q.explanation}</p>
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
