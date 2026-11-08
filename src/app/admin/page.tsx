import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AccountsTable, type AccountRow } from "@/components/AccountsTable";
import { AdminNav } from "@/components/AdminForms";
import { accounts, daysSince, siteStats } from "@/lib/admin";
import { currentUser, isAdmin } from "@/lib/auth";

export const metadata: Metadata = { title: "Administration" };

type Search = { searchParams: Promise<{ idle?: string; never?: string; q?: string }> };

const THRESHOLDS = [0, 30, 90, 180, 365];

const date = (t: string) =>
  new Date(t.replace(" ", "T") + "Z").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export default async function Admin({ searchParams }: Search) {
  const user = await currentUser();
  if (!isAdmin(user)) notFound();

  const params = await searchParams;
  const idle = THRESHOLDS.includes(Number(params.idle)) ? Number(params.idle) : 0;
  const never = params.never === "1";
  const q = (params.q ?? "").trim().toLowerCase();

  const all = accounts().map((a) => ({ ...a, idleDays: daysSince(a.last_active) }));
  const shown = all.filter((a) =>
    a.idleDays >= idle
    && (!never || (a.lessons === 0 && a.posts === 0 && a.declared === 0 && a.capstones === 0))
    && (!q || a.name.toLowerCase().includes(q) || a.email.toLowerCase().includes(q)));

  const rows: AccountRow[] = shown.map((a) => ({
    id: a.id,
    name: a.name,
    email: a.email,
    joined: date(a.created_at),
    lastActive: date(a.last_active),
    idleDays: a.idleDays,
    lessons: a.lessons,
    declared: a.declared,
    posts: a.posts,
    capstones: a.capstones,
    demo: a.demo,
    admin: a.admin,
    you: a.id === user!.id,
  }));

  const count = (days: number) => all.filter((a) => a.idleDays >= days).length;
  const neverStudied = all.filter((a) => a.lessons === 0 && a.posts === 0 && a.declared === 0 && a.capstones === 0).length;
  const site = siteStats();

  return (
    <div className="wrap">
      <header className="page-head">
        <p className="eyebrow">Administration</p>
        <h1>Accounts</h1>
        <p className="lede">
          Every account, with when it was last active and what it has done. Open an account to change its name or
          email, reset its password, sign it out, or manage its programs and progress.
        </p>
      </header>
      <AdminNav active="accounts" />

      <h2 className="admin-h">The academy</h2>
      <dl className="admin-stats">
        <div><dt>Lessons completed</dt><dd>{site.lessons}</dd></div>
        <div><dt>In the last 30 days</dt><dd>{site.lessons30}</dd></div>
        <div><dt>Essays submitted</dt><dd>{site.essays}</dd></div>
        <div><dt>Courses open</dt><dd>{site.openCourses} <span className="muted" style={{ fontSize: "1rem" }}>of {site.allCourses}</span></dd></div>
        <div><dt>Posts, 30 days</dt><dd>{site.posts30}</dd></div>
        <div><dt>Open reports</dt><dd>{site.openReports > 0 ? <Link href="/corrections">{site.openReports}</Link> : 0}</dd></div>
      </dl>

      <h2 className="admin-h">Students</h2>
      <dl className="admin-stats">
        <div><dt>Accounts</dt><dd>{all.length}</dd></div>
        <div><dt>Active in 30 days</dt><dd>{all.length - count(30)}</dd></div>
        <div><dt>Inactive 90+ days</dt><dd>{count(90)}</dd></div>
        <div><dt>Never began</dt><dd>{neverStudied}</dd></div>
      </dl>

      <form className="admin-filters" method="get">
        <div className="field">
          <label htmlFor="idle">Inactive for at least</label>
          <select id="idle" name="idle" defaultValue={String(idle)}>
            {THRESHOLDS.map((d) => <option key={d} value={d}>{d === 0 ? "Any time (all accounts)" : `${d} days`}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="q">Name or email</label>
          <input id="q" name="q" type="search" defaultValue={params.q ?? ""} />
        </div>
        <label className="admin-check">
          <input type="checkbox" name="never" value="1" defaultChecked={never} />
          Only accounts that never began (no concentration, lesson, post, or capstone)
        </label>
        <div className="actions" style={{ marginTop: 0 }}>
          <button type="submit" className="button quiet">Filter</button>
          {(idle || never || q) ? <Link href="/admin">Clear</Link> : null}
        </div>
      </form>

      <p className="muted" style={{ fontSize: "1rem" }}>
        Showing {rows.length} of {all.length}. Your own account and other administrators cannot be deleted here.
        Sample students return when the server restarts unless <code>AIU_DEMO=off</code> is set.
      </p>
      <AccountsTable rows={rows} />
    </div>
  );
}
