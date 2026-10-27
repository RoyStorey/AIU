"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { inquire, proposeConcentration, signIn, signUp, submitEssay, type FormState } from "@/app/actions";

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

export function EssayForm({ courseId, lessonIndex, draft, minWords, revising }: {
  courseId: string;
  lessonIndex: number;
  draft: string;
  minWords: number;
  revising: boolean;
}) {
  const [state, action] = useActionState(submitEssay, undefined);
  const [text, setText] = useState(draft);
  const count = text.split(/\s+/).filter(Boolean).length;
  return (
    <form action={action}>
      <ErrorNote state={state} />
      <input type="hidden" name="course" value={courseId} />
      <input type="hidden" name="lesson" value={lessonIndex} />
      <label htmlFor="response" className="visually-hidden">Your response</label>
      <textarea
        id="response"
        name="response"
        rows={14}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your response here. Make an argument, and support it from the lecture and readings."
      />
      <div className="actions" style={{ justifyContent: "space-between" }}>
        <span className="muted">{count} {count === 1 ? "word" : "words"}{count < minWords ? ` · at least ${minWords}` : ""}</span>
        <Submit pending="Submitting…">{revising ? "Submit revision" : "Submit for feedback"}</Submit>
      </div>
    </form>
  );
}
