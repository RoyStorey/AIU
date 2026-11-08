import Link from "next/link";
import { Crest } from "@/components/Crest";
import { Seal } from "@/components/Standing";
import { currentUser, type User } from "@/lib/auth";
import { isOpen, listCourses, listConcentrations, listSubjects } from "@/lib/catalogue";
import { ActivityGrid } from "@/components/ActivityGrid";
import { StudyCalendar } from "@/components/StudyCalendar";
import { dashboard } from "@/lib/dashboard";
import { activityByDay, standings } from "@/lib/progress";

export default async function Home() {
  const user = await currentUser();
  return user ? <Dashboard user={user} /> : <Welcome />;
}

// ——— For visitors ———

/** A handful of open first courses, one from each faculty that has one. */
function firstCourses() {
  return listSubjects().flatMap((s) => {
    for (const c of listConcentrations(s.slug)) {
      const first = listCourses(c.id).find((k) => k.stage === 1 && isOpen(k));
      if (first) return [{ ...first, faculty: s.name }];
    }
    return [];
  });
}

function Welcome() {
  const subjects = listSubjects();
  const starts = firstCourses();

  return (
    <>
      <section className="wrap hero">
        <Crest className="crest" />
        <p className="eyebrow">An American academy of the humanities · Est. 2026</p>
        <h1>Cornerstone</h1>
        <p className="hero-lede">
          Serious courses in literature, history, theology, the classics, and language, built on the great texts
          and taken at your own pace.
        </p>
        <blockquote className="hero-quote">
          <p>“Learning is not attained by chance; it must be sought for with ardor and attended to with diligence.”</p>
          <cite>Abigail Adams, to John Quincy Adams, 1780</cite>
        </blockquote>
        <p className="hero-actions">
          <Link className="button" href="/signup">Enroll</Link>
          <Link className="button quiet" href="/faculties">Browse the faculties</Link>
        </p>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <h2>The Faculties</h2>
          <Link href="/faculties" className="eyebrow">The full catalog →</Link>
        </div>
        <ul className="faculties">
          {subjects.map((s) => (
            <li key={s.slug}>
              <Link href={`/faculties/${s.slug}`} className="faculty">
                <div>
                  <h3>{s.name}</h3>
                  <p>{s.description}</p>
                </div>
                <span className="count">{s.concentrations} concentrations</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {starts.length > 0 && (
        <section className="wrap section" style={{ paddingTop: 0 }}>
          <div className="section-head"><h2>A Place to Begin</h2></div>
          <div className="grid">
            {starts.map((c) => (
              <Link key={c.id} href={`/courses/${c.id}`} className="card">
                <span className="eyebrow">{c.faculty} · {c.code}</span>
                <h3>{c.title}</h3>
                <p>{c.summary}</p>
                <div className="card-foot"><span>{c.lessons} lessons</span><span>Open the course →</span></div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="wrap"><div className="fleuron" aria-hidden="true">❦</div></div>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div className="section-head"><h2>How It Works</h2></div>
        <div className="steps">
          <div className="step">
            <span className="numeral">1</span>
            <h3>Choose a concentration</h3>
            <p>Pick a faculty, then a program within it: Poetry, American History, Patristics, the Indigenous Americas. No prerequisites.</p>
          </div>
          <div className="step">
            <span className="numeral">2</span>
            <h3>Work through the courses</h3>
            <p>Each course has five lessons of about two hours: lectures you can read or listen to, primary sources, readings, a knowledge check, and a written reflection.</p>
          </div>
          <div className="step">
            <span className="numeral">3</span>
            <h3>Earn your standing</h3>
            <p>Complete every course in a program to become an Expert. Pass its capstone, a substantial piece of your own work, to become a Master.</p>
          </div>
        </div>
      </section>
    </>
  );
}

// ——— For students ———

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
      </header>

      {d.resume ? (
        <section className="dash-resume" aria-labelledby="resume-title">
          <div>
            <span className="eyebrow">Pick up where you left off</span>
            <h2 id="resume-title">{d.resume.pageTitle}</h2>
            <p className="muted">
              {d.resume.code} {d.resume.title} · Lesson {d.resume.lesson}, {d.resume.lessonTitle} · Page {d.resume.page} of {d.resume.pages}
            </p>
          </div>
          <Link className="button" href={d.resume.href}>Continue reading</Link>
        </section>
      ) : (
        <section className="dash-resume" aria-labelledby="resume-title">
          <div>
            <span className="eyebrow">Welcome to Cornerstone</span>
            <h2 id="resume-title">Choose a course and begin</h2>
            <p className="muted">Your reading, progress, and plans will gather here.</p>
          </div>
          <Link className="button" href="/faculties">Browse the faculties</Link>
        </section>
      )}

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
                    <span className={`upnext-kind kind-${a.kind}`}>
                      {a.kind === "lesson" ? "Lesson" : a.kind === "exercise" ? "Writing" : "Capstone"}
                    </span>
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
