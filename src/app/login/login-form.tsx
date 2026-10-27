"use client";

import { useActionState } from "react";
import { signIn } from "@/app/actions/auth";
import { Button, Field } from "@/components/ui";

export function LoginForm({ next }: { next?: string }) {
  const [state, action, pending] = useActionState(signIn, undefined);
  return (
    <form action={action} className="space-y-5">
      <input type="hidden" name="next" value={next ?? ""} />
      <Field label="Email address" name="email" type="email" autoComplete="email" required />
      <Field label="Password" name="password" type="password" autoComplete="current-password" required />
      {state?.error && <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{state.error}</p>}
      <Button className="w-full py-3" disabled={pending}>{pending ? "Signing in…" : "Sign in"}</Button>
    </form>
  );
}
