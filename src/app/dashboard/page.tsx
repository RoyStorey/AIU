import Link from "next/link";
import type { Metadata } from "next";
import { ActivityGrid } from "@/components/ActivityGrid";
import { Seal } from "@/components/Standing";
import { StudyCalendar } from "@/components/StudyCalendar";
import { requireUser, type User } from "@/lib/auth";
import { dashboard } from "@/lib/dashboard";
import { activityByDay, standings } from "@/lib/progress";

export const metadata: Metadata = { title: "Dashboard" };

export default async function DashboardPage() {
  const user = await requireUser("/dashboard");
  return <Dashboard user={user} />;
}

/** Whether the student joined before today, so the greeting can say "welcome back." */
function begunEver(user: User): boolean {
  return user.created_at < new Date(Date.now() - 86_400_000).toISOString().replace("T", " ");
}

function Dashboard({ user }: { user: User }) {
  const d = dashboard(user.id);
  const programs = standings(user.id).filter((s) => s.declared || s.lessonsDone > 0);
  const activity = activityByDay(user.id, 52 * 7);
  const first = user.name.split(/\s+/)[0];
  const today = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  const hours = Math.round(d.stats.minutes / 6) / 10;
  const begun = d.stats.lessons > 0 || d.resume !== null;

  return (
    <div className="wrap dash">
      <header className="dash-head">
        <p className="eyebrow">{today}</p>
        <h1>{begunEver(user) ? "Welcome back" : "Welcome"}, {first}.</h1>
        {d.resume ? (
          <p className="dash-continue">
            <span className="dash-continue-label">Continue reading</span>
            <Link href={d.resume.href}>{d.resume.pageTitle}</Link>
            <span className="muted">{d.resume.code} {d.resume.title} · Lesson {d.resume.lesson}, page {d.resume.page} of {d.resume.pages}</span>
          </p>
        ) : (
          <p className="dash-continue">
            <span className="muted">Declare a concentration and begin a course; your place will be kept here.</span>{" "}
            <Link href="/faculties">Browse the faculties →</Link>
          </p>
        )}
      </header>

      {begun && (
        <dl className="dash-stats">
          <div><dt>Lessons completed</dt><dd>{d.stats.lessons}</dd></div>
          <div><dt>Hours of study</dt><dd>{hours}</dd></div>
          <div><dt>Courses completed</dt><dd>{d.stats.coursesDone}</dd></div>
          <div><dt>Weeks in a row</dt><dd>{d.stats.weeks}</dd></div>
        </dl>
      )}

      <div className="dash-grid">
        <div>
          {d.active.length > 0 ? (
            <StudyCalendar
              courses={d.active.map((c) => ({ id: c.id, code: c.code, title: c.title, completed: c.completed, open: c.open }))}
              plans={d.plans}
              chosen={d.pace.id}
            />
          ) : (
            <section className="cal cal-empty">
              <h2 className="dash-h">Study calendar</h2>
              <p className="muted">Begin a course and your lessons will be set out here, at the pace you choose.</p>
            </section>
          )}
        </div>

        <section aria-labelledby="next-head">
          <h2 id="next-head" className="dash-h">Up next</h2>
          {d.assignments.length ? (
            <ul className="upnext">
              {d.assignments.map((a) => (
                <li key={a.href}>
                  <Link href={a.href}>
                    <span className={`upnext-kind kind-${a.kind}`}>{a.kind === "lesson" ? "Lesson" : "Capstone"}</span>
                    <span className="upnext-title">{a.title}</span>
                    <span className="upnext-detail">{a.detail}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="muted">Nothing waiting. <Link href="/faculties">Find a course to begin →</Link></p>
          )}
          {d.recent.length > 0 && (
            <>
              <h3 className="dash-h3">Also reading</h3>
              <ul className="dash-recent">
                {d.recent.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href}>{r.code} {r.title}</Link>
                    <span className="muted"> · Lesson {r.lesson}, page {r.page}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      </div>

      <section className="dash-section" aria-labelledby="activity-head">
        <div className="section-head">
          <h2 id="activity-head" className="dash-h">Your study</h2>
          <span className="eyebrow">The past year</span>
        </div>
        <ActivityGrid counts={activity} weeks={52} fluid />
      </section>

      <section className="dash-section" aria-labelledby="programs-head">
        <div className="section-head">
          <h2 id="programs-head" className="dash-h">Your programs</h2>
          <span className="eyebrow"><Link href="/faculties">Declare another →</Link></span>
        </div>
        {programs.length ? (
          <ul className="dash-programs">
            {programs.map((s) => {
              const path = `/faculties/${s.concentration.subject_slug}/${s.concentration.slug}`;
              const next = s.courses.find((c) => !c.done && c.lessons > 0);
              return (
                <li key={s.concentration.id}>
                  <span className="eyebrow">Faculty of {s.concentration.subject_name}</span>
                  <h3><Link href={path}>{s.concentration.name}</Link></h3>
                  {s.level !== "student" && (
                    <p><Seal level={s.level} concentration={s.concentration.name}
                      href={s.mastery ? `/capstones/${s.mastery.capstoneId}` : `${path}/capstone`} /></p>
                  )}
                  <div className="meter"><span style={{ width: `${s.core.length ? (s.coreDone / s.core.length) * 100 : 0}%` }} /></div>
                  <p className="muted">
                    {s.coreDone} of {s.core.length} courses · {s.lessonsDone} {s.lessonsDone === 1 ? "lesson" : "lessons"}
                  </p>
                  {s.level === "expert" ? (
                    <p><Link href={`${path}/capstone`}>Take the capstone →</Link></p>
                  ) : next ? (
                    <p>Next: <Link href={`/courses/${next.id}`}>{next.code} {next.title}</Link></p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="muted">You have not declared a concentration yet. <Link href="/faculties">See the programs →</Link></p>
        )}
        <p className="dash-links">
          <Link href="/study/notes">Your commonplace book</Link>
          <Link href={`/students/${user.id}`}>Your public profile</Link>
          <Link href="/study">Account and settings</Link>
        </p>
      </section>
    </div>
  );
}
