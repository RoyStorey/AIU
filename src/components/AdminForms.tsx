"use client";

import Link from "next/link";
import { useActionState } from "react";
import { adminResetPassword, adminUpdateAccount } from "@/app/actions";
import { Submit } from "@/components/Forms";
export { ConfirmButton } from "@/components/Forms";

/** The tabs across the top of every administration page. */
export function AdminNav({ active }: { active: "accounts" | "commons" }) {
  return (
    <nav className="tabs" aria-label="Administration">
      <Link href="/admin" aria-current={active === "accounts" ? "page" : undefined}>Accounts</Link>
      <Link href="/admin/commons" aria-current={active === "commons" ? "page" : undefined}>The Commons</Link>
      <Link href="/corrections">Correction reports</Link>
    </nav>
  );
}

export function AccountForm({ id, name, email }: { id: number; name: string; email: string }) {
  const [state, action] = useActionState(adminUpdateAccount.bind(null, id), undefined);
  return (
    <form action={action}>
      {state?.error && <p className="form-error" role="alert">{state.error}</p>}
      {state?.notice && <p className="form-notice" role="status">{state.notice}</p>}
      <div className="field">
        <label htmlFor="acct-name">Name</label>
        <input id="acct-name" name="name" type="text" required maxLength={80} defaultValue={name} />
      </div>
      <div className="field">
        <label htmlFor="acct-email">Email</label>
        <input id="acct-email" name="email" type="email" required defaultValue={email} />
      </div>
      <Submit pending="Saving…">Save</Submit>
    </form>
  );
}

export function ResetPasswordForm({ id }: { id: number }) {
  const [state, action] = useActionState(adminResetPassword.bind(null, id), undefined);
  return (
    <form action={action} key={state?.nonce}
      onSubmit={(e) => { if (!window.confirm("Reset this student's password and sign them out everywhere?")) e.preventDefault(); }}>
      {state?.error && <p className="form-error" role="alert">{state.error}</p>}
      {state?.notice && <p className="form-notice admin-password" role="status">{state.notice}</p>}
      <div className="field">
        <label htmlFor="acct-pw">New password <span className="muted">(leave blank to generate one)</span></label>
        <input id="acct-pw" name="password" type="text" autoComplete="off" minLength={8} placeholder="Generated if left blank" />
      </div>
      <Submit pending="Resetting…" className="button secondary">Reset password</Submit>
    </form>
  );
}
