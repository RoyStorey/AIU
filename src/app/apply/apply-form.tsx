"use client";

import { useActionState } from "react";
import { signUp } from "@/app/actions/auth";
import { Button, Field } from "@/components/ui";

export function ApplyForm({ programs, selected }: { programs: { slug: string; title: string }[]; selected?: string }) {
  const [state, action, pending] = useActionState(signUp, undefined);
  return (
    <form action={action} className="space-y-5">
      <Field label="Full name" name="name" autoComplete="name" required />
      <Field label="Email address" name="email" type="email" autoComplete="email" required />
      <Field label="Password" name="password" type="password" autoComplete="new-password" minLength={8} required hint="At least 8 characters." />
      <label className="block">
        <span className="text-sm font-medium text-navy-900">Program of study</span>
        <select
          name="program"
          defaultValue={selected ?? ""}
          className="mt-1.5 block w-full rounded-md border-0 bg-white px-3 py-2.5 shadow-sm ring-1 ring-inset ring-navy-200 focus:ring-2 focus:ring-navy-500"
        >
          <option value="">Decide later</option>
          {programs.map((p) => (
            <option key={p.slug} value={p.slug}>{p.title}</option>
          ))}
        </select>
      </label>
      {state?.error && <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{state.error}</p>}
      <Button variant="primary" className="w-full py-3" disabled={pending}>
        {pending ? "Submitting…" : "Continue to enrollment"}
      </Button>
    </form>
  );
}
