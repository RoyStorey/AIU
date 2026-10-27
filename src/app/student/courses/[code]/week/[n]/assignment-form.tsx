"use client";

import { useActionState, useState } from "react";
import { submitAssignment } from "@/app/actions/coursework";
import { Button } from "@/components/ui";

export function AssignmentForm({ course, week, minWords, resubmit }: { course: string; week: number; minWords: number; resubmit: boolean }) {
  const [state, action, pending] = useActionState(submitAssignment, undefined);
  const [words, setWords] = useState(0);
  return (
    <form action={action} className="space-y-3">
      <input type="hidden" name="course" value={course} />
      <input type="hidden" name="week" value={week} />
      <textarea
        name="body"
        rows={12}
        required
        onChange={(e) => setWords(e.target.value.trim().split(/\s+/).filter(Boolean).length)}
        className="block w-full rounded-lg border-0 bg-white p-4 text-sm leading-relaxed shadow-sm ring-1 ring-inset ring-navy-200 focus:ring-2 focus:ring-navy-500"
        placeholder="Write your response here…"
      />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className={`text-xs ${words >= minWords ? "text-emerald-700" : "text-navy-500"}`}>
          {words} / {minWords} words minimum
        </span>
        <Button disabled={pending}>{pending ? "Submitting for review…" : resubmit ? "Resubmit assignment" : "Submit assignment"}</Button>
      </div>
      {state?.error && <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{state.error}</p>}
    </form>
  );
}
