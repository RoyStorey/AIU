"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import {
  inquire, proposeConcentration, replyToThread, reportCorrection, saveNote, signIn, signUp,
  startThread, submitCapstone, submitEssay, updateProfile, type FormState,
} from "@/app/actions";

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
  if (state?.error) return <p className="form-error" role="alert">{state.error}</p>;
  if (state?.notice) return <p className="form-notice" role="status">{state.notice}</p>;
  return null;
}

const countWords = (text: string) => text.split(/\s+/).filter(Boolean).length;

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

export function ProfileForm({ bio, visibility }: { bio: string; visibility: "public" | "private" }) {
  const [state, action] = useActionState(updateProfile, undefined);
  return (
    <form action={action}>
      <ErrorNote state={state} />
      <div className="field">
        <label htmlFor="bio">A few words about yourself <span className="muted">(shown on your profile)</span></label>
        <textarea id="bio" name="bio" rows={4} maxLength={1200} defaultValue={bio}
          placeholder="What you read, what you are studying, what you hope to learn." />
      </div>
      <fieldset className="field radio-row">
        <legend>Who may see your profile</legend>
        <label><input type="radio" name="visibility" value="public" defaultChecked={visibility === "public"} /> Everyone: your standing, capstones, and common-room posts</label>
        <label><input type="radio" name="visibility" value="private" defaultChecked={visibility === "private"} /> Only you</label>
      </fieldset>
      <Submit pending="Saving…">Save profile</Submit>
    </form>
  );
}

export function CorrectionForm({ courseId, lessonIndex, pages, page, back }: {
  courseId: string;
  lessonIndex: number;
  pages: string[];
  page?: number;
  back: string;
}) {
  const [state, action] = useActionState(reportCorrection, undefined);
  return (
    <form action={action} className="correction-form">
      <ErrorNote state={state} />
      <input type="hidden" name="course" value={courseId} />
      <input type="hidden" name="lesson" value={lessonIndex} />
      <input type="hidden" name="back" value={back} />
      <div className="field-row">
        <div className="field">
          <label htmlFor="kind">Kind of report</label>
          <select id="kind" name="kind" defaultValue="error">
            <option value="error">Error of fact</option>
            <option value="doubt">Doubtful claim</option>
            <option value="link">Broken or wrong link</option>
            <option value="comment">Comment</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="page">Where</label>
          <select id="page" name="page" defaultValue={page !== undefined ? String(page) : ""}>
            <option value="">The lesson as a whole</option>
            {pages.map((title, i) => <option key={i} value={i}>Page {i + 1}: {title}</option>)}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="quote">The passage <span className="muted">(optional; copy the words in question)</span></label>
        <input id="quote" name="quote" type="text" maxLength={600} />
      </div>
      <div className="field">
        <label htmlFor="body">What is wrong, or what you would add</label>
        <textarea id="body" name="body" rows={4} required minLength={20} maxLength={4000}
          placeholder="Say what you believe is correct and how you know: an edition, a page, a scholar." />
      </div>
      <Submit pending="Posting…">Post report</Submit>
    </form>
  );
}

export function NoteForm({ courseId, lessonIndex, pageIndex, body }: {
  courseId: string;
  lessonIndex: number;
  pageIndex: number;
  body: string;
}) {
  const [state, action] = useActionState(saveNote, undefined);
  return (
    <form action={action} className="note-form">
      <input type="hidden" name="course" value={courseId} />
      <input type="hidden" name="lesson" value={lessonIndex} />
      <input type="hidden" name="page" value={pageIndex} />
      <label htmlFor="note" className="visually-hidden">Your notes on this page</label>
      <textarea id="note" name="body" rows={5} defaultValue={body}
        placeholder="Lines worth keeping, questions, connections to other poems. Only you can see these." />
      <div className="actions" style={{ justifyContent: "space-between", marginTop: "0.5rem" }}>
        <ErrorNote state={state} />
        <Submit pending="Saving…" className="button quiet">Save note</Submit>
      </div>
    </form>
  );
}

export function CapstoneForm({ concentrationId, options, minWords, maxWords, draft }: {
  concentrationId: number;
  options: string[];
  minWords: number;
  maxWords: number;
  draft?: { option: string; title: string; abstract: string; body: string };
}) {
  const [state, action] = useActionState(submitCapstone, undefined);
  const [body, setBody] = useState(draft?.body ?? "");
  const [abstract, setAbstract] = useState(draft?.abstract ?? "");
  const count = countWords(body);
  const abstractCount = countWords(abstract);
  return (
    <form action={action}>
      <ErrorNote state={state} />
      <input type="hidden" name="concentration" value={concentrationId} />
      <div className="field">
        <label htmlFor="option">Form</label>
        <select id="option" name="option" defaultValue={draft?.option ?? options[0]}>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" required maxLength={200} defaultValue={draft?.title} />
      </div>
      <div className="field">
        <label htmlFor="abstract">Abstract <span className="muted">(50–300 words; shown on your profile)</span></label>
        <textarea id="abstract" name="abstract" rows={4} value={abstract} onChange={(e) => setAbstract(e.target.value)} />
        <span className="hint">{abstractCount} words</span>
      </div>
      <div className="field">
        <label htmlFor="body">The work <span className="muted">(Markdown: ## for headings, &gt; for quotations)</span></label>
        <textarea id="body" name="body" rows={24} value={body} onChange={(e) => setBody(e.target.value)} />
      </div>
      <div className="actions" style={{ justifyContent: "space-between" }}>
        <span className="muted">
          {count.toLocaleString()} words · {minWords.toLocaleString()}–{maxWords.toLocaleString()} asked
        </span>
        <Submit pending="Submitting…">Submit for examination</Submit>
      </div>
    </form>
  );
}

export function ThreadForm({ concentrationId }: { concentrationId: number }) {
  const [state, action] = useActionState(startThread, undefined);
  return (
    <form action={action}>
      <ErrorNote state={state} />
      <input type="hidden" name="concentration" value={concentrationId} />
      <div className="field">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" required maxLength={160}
          placeholder="A question, a reading group, a poem you can't stop thinking about" />
      </div>
      <div className="field">
        <label htmlFor="body">Your post</label>
        <textarea id="body" name="body" rows={6} required />
      </div>
      <Submit pending="Posting…">Start the thread</Submit>
    </form>
  );
}

export function ReplyForm({ threadId, back }: { threadId: number; back: string }) {
  const [state, action] = useActionState(replyToThread, undefined);
  return (
    <form action={action} key={state?.nonce}>
      <ErrorNote state={state} />
      <input type="hidden" name="thread" value={threadId} />
      <input type="hidden" name="back" value={back} />
      <label htmlFor="reply" className="visually-hidden">Your reply</label>
      <textarea id="reply" name="body" rows={5} required placeholder="Write a reply…" />
      <div className="actions"><Submit pending="Posting…">Reply</Submit></div>
    </form>
  );
}
