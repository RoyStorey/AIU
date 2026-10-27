"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { inquire, proposeConcentration, signIn, signUp, type FormState } from "@/app/actions";

export function Submit({ children, pending: pendingLabel, className = "button" }: {
  children: React.ReactNode;
  pending?: string;
  className?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={className} disabled={pending}>
      {pending ? (pendingLabel ?? "One moment…") : children}
    </button>
  );
}

function ErrorNote({ state }: { state: FormState }) {
  return state?.error ? <p className="form-error" role="alert">{state.error}</p> : null;
}

export function InquiryForm() {
  const [state, action] = useActionState(inquire, undefined);
  return (
    <form action={action} className="inquiry">
      <label htmlFor="q">What would you like to study?</label>
      <div className="inquiry-row">
        <input id="q" name="q" type="search" required autoComplete="off" placeholder="I want to learn Latin…" />
        <Submit pending="Consulting…">Inquire</Submit>
      </div>
      <p className="hint">Try “Poetry,” “the Classics,” “Medieval History,” or a subject we do not yet teach.</p>
      <div style={{ marginTop: "1rem" }}><ErrorNote state={state} /></div>
    </form>
  );
}

export function SignUpForm({ next }: { next?: string }) {
  const [state, action] = useActionState(signUp, undefined);
  return (
    <form action={action}>
      <ErrorNote state={state} />
      <input type="hidden" name="next" value={next ?? ""} />
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required minLength={8} autoComplete="new-password" />
        <span className="hint">At least eight characters.</span>
      </div>
      <Submit pending="Enrolling…">Matriculate</Submit>
    </form>
  );
}

export function SignInForm({ next }: { next?: string }) {
  const [state, action] = useActionState(signIn, undefined);
  return (
    <form action={action}>
      <ErrorNote state={state} />
      <input type="hidden" name="next" value={next ?? ""} />
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required autoComplete="current-password" />
      </div>
      <Submit pending="Signing in…">Sign in</Submit>
    </form>
  );
}

export function ProposeForm({ subject, subjectName }: { subject: string; subjectName: string }) {
  const [state, action] = useActionState(proposeConcentration, undefined);
  return (
    <form action={action}>
      <ErrorNote state={state} />
      <input type="hidden" name="subject" value={subject} />
      <div className="field">
        <label htmlFor="name">Concentration</label>
        <input id="name" name="name" type="text" required placeholder={`A new area of ${subjectName}`} />
      </div>
      <div className="field">
        <label htmlFor="note">What draws you to it? <span className="muted">(optional)</span></label>
        <textarea id="note" name="note" rows={3} placeholder="Authors, periods, or questions you hope to study." />
      </div>
      <Submit pending="Submitting…">Propose a program of study</Submit>
    </form>
  );
}
