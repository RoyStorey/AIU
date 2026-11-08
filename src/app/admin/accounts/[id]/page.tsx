import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import {
  adminClearBio, adminDeleteAccount, adminResetCourse, adminSetVisibility, adminSignOut, adminWithdraw,
} from "@/app/actions";
import { AccountForm, AdminNav, ConfirmButton, ResetPasswordForm } from "@/components/AdminForms";
import { account, daysSince, mayManage } from "@/lib/admin";
import { currentUser, isAdmin } from "@/lib/auth";

export const metadata: Metadata = { title: "Account · Administration" };

type Params = { params: Promise<{ id: string }> };

const date = (t: string) =>
  new Date(t.replace(" ", "T") + "Z").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export default async function AdminAccount({ params }: Params) {
  const user = await currentUser();
  if (!isAdmin(user)) notFound();
  const id = Number((await params).id);
  if (id === user!.id) redirect("/study");
  const a = account(id);
  if (!a) notFound();
  const editable = mayManage(user!, id);
  const idle = daysSince(a.last_active);

  return (
    <div className="wrap">
      <header className="page-head" style={{ paddingBottom: "1.5rem" }}>
        <nav className="crumbs" aria-label="Breadcrumb"><Link href="/admin">Administration</Link></nav>
        <p className="eyebrow" style={{ marginTop: "1.5rem" }}>
          {a.admin ? "Administrator" : a.demo ? "Sample student" : "Student"} · joined {date(a.created_at)}
        </p>
        <h1>{a.name}</h1>
        <p className="lede">
          {a.email} · last active {idle === 0 ? "today" : `${idle} ${idle === 1 ? "day" : "days"} ago`} ·{" "}
          <Link href={`/students/${a.id}`}>public profile</Link>
        </p>
      </header>
      <AdminNav active="accounts" />

      {!editable && (
        <p className="notice" style={{ marginTop: "2rem" }}>Other administrators’ accounts can be viewed here but not changed.</p>
      )}

      <dl className="admin-stats" style={{ marginTop: "2rem" }}>
        <div><dt>Lessons</dt><dd>{a.lessons}</dd></div>
        <div><dt>Essays</dt><dd>{a.essays}</dd></div>
        <div><dt>Posts</dt><dd>{a.posts}</dd></div>
        <div><dt>Signed in on</dt><dd>{a.sessions} <span className="muted" style={{ fontSize: "1rem" }}>{a.sessions === 1 ? "device" : "devices"}</span></dd></div>
      </dl>

      <div className="admin-account">
        {editable && (
          <section>
            <h2>Name and email</h2>
            <AccountForm id={a.id} name={a.name} email={a.email} />
          </section>
        )}

        {editable && (
          <section>
            <h2>Password</h2>
            <p className="muted">Set a password, or leave the field blank for a generated one. The student is signed out everywhere and should change it on their Account page.</p>
            <ResetPasswordForm id={a.id} />
            {a.sessions > 0 && (
              <div style={{ marginTop: "1.25rem" }}>
                <ConfirmButton action={adminSignOut.bind(null, a.id)} label={`Sign out of ${a.sessions} ${a.sessions === 1 ? "device" : "devices"}`}
                  question="Sign this student out everywhere?" className="button quiet" />
              </div>
            )}
          </section>
        )}

        <section>
          <h2>Profile</h2>
          <p>
            Visible to <strong>{a.visibility === "private" ? "only them" : "everyone"}</strong>.
            {editable && (
              <> <ConfirmButton action={adminSetVisibility.bind(null, a.id, a.visibility === "private" ? "public" : "private")}
                label={a.visibility === "private" ? "Make public" : "Make private"} question="Change who may see this profile?" /></>
            )}
          </p>
          {a.bio ? <blockquote className="admin-bio">{a.bio}</blockquote> : <p className="muted">No introduction.</p>}
          {editable && a.bio && (
            <ConfirmButton action={adminClearBio.bind(null, a.id)} label="Clear the introduction" question="Remove this student's introduction?" />
          )}
        </section>

        <section>
          <h2>Declared programs</h2>
          {a.programs.length ? (
            <ul className="account-programs">
              {a.programs.map((p) => (
                <li key={p.id}>
                  <div>
                    <Link href={`/faculties/${p.subject_slug}/${p.slug}`}>{p.name}</Link>
                    <span className="muted"> · {p.subject} · declared {date(p.declared_at)}</span>
                  </div>
                  {editable && (
                    <ConfirmButton action={adminWithdraw.bind(null, a.id, p.id)} label="Withdraw"
                      question={`Withdraw ${a.name} from ${p.name}? Their completed lessons are kept.`} />
                  )}
                </li>
              ))}
            </ul>
          ) : <p className="muted">None.</p>}
        </section>

        <section>
          <h2>Courses studied</h2>
          {a.courses.length ? (
            <ul className="account-programs">
              {a.courses.map((c) => (
                <li key={c.id}>
                  <div>
                    <Link href={`/courses/${c.id}`}>{c.code} {c.title}</Link>
                    <span className="muted"> · {c.lessons} {c.lessons === 1 ? "lesson" : "lessons"} completed · last {date(c.last)}</span>
                  </div>
                  {editable && (
                    <ConfirmButton action={adminResetCourse.bind(null, a.id, c.id)} label="Reset progress"
                      question={`Clear ${a.name}'s completed lessons in ${c.code}? This cannot be undone.`} />
                  )}
                </li>
              ))}
            </ul>
          ) : <p className="muted">No lessons completed.</p>}
        </section>

        {a.capstoneList.length > 0 && (
          <section>
            <h2>Capstones</h2>
            <ul className="account-programs">
              {a.capstoneList.map((c) => (
                <li key={c.id}>
                  <div>
                    <Link href={`/capstones/${c.id}`}>{c.title}</Link>
                    <span className="muted"> · {c.passed ? "passed" : c.status === "ready" ? "to revise" : c.status} · {date(c.created_at)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {editable && (
          <section className="admin-danger">
            <h2>Delete the account</h2>
            <p className="muted">Removes the account and everything in it: progress, essays, notes, capstones, reports, and posts. It cannot be undone.</p>
            <ConfirmButton action={adminDeleteAccount.bind(null, a.id)} label={`Delete ${a.name}’s account`}
              question={`Permanently delete ${a.name} (${a.email}) and everything belonging to them?`} className="button danger" />
          </section>
        )}
      </div>
    </div>
  );
}
