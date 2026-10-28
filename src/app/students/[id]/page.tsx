import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ActivityGrid } from "@/components/ActivityGrid";
import { RoseWindow } from "@/components/RoseWindow";
import { Seal } from "@/components/Standing";
import { currentUser } from "@/lib/auth";
import { passedCapstones } from "@/lib/capstone";
import { postsBy } from "@/lib/community";
import { canView, getStudent } from "@/lib/people";
import { LEVEL_NAME, activityByDay, standings, type Standing } from "@/lib/progress";

type Params = { params: Promise<{ id: string }> };

async function load(params: Params["params"]) {
  const id = Number((await params).id);
  const student = Number.isInteger(id) ? getStudent(id) : null;
  const viewer = await currentUser();
  if (!student || !canView(student, viewer)) return null;
  return { student, viewer };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const found = await load(params);
  return { title: found ? found.student.name : "Not found" };
}

const date = (t: string, style: "long" | "month" = "long") =>
  new Date(t.replace(" ", "T") + "Z").toLocaleDateString("en-US",
    style === "month" ? { month: "long", year: "numeric" } : { month: "long", day: "numeric", year: "numeric" });

function standingLine(s: Standing): string {
  if (s.level === "master") return `Master since ${date(s.mastery!.passedAt)}`;
  if (s.level === "expert") return s.completedAt ? `Expert since ${date(s.completedAt)}` : "Expert";
  if (s.lessonsDone === 0) return s.declared ? "Declared; not yet begun" : "Not yet begun";
  return `${s.coreDone} of ${s.core.length} courses · ${s.lessonsDone} ${s.lessonsDone === 1 ? "lesson" : "lessons"} completed`;
}

export default async function StudentProfile({ params }: Params) {
  const found = await load(params);
  if (!found) notFound();
  const { student, viewer } = found;
  const own = viewer?.id === student.id;
  const list = standings(student.id);
  const capstones = passedCapstones(student.id);
  const posts = postsBy(student.id, 5);
  const activity = activityByDay(student.id, 26 * 7);
  const masters = list.filter((s) => s.level === "master");
  const experts = list.filter((s) => s.level === "expert");
  const faculties = [...new Set(list.map((s) => s.concentration.subject_name))];

  return (
    <div className="wrap">
      <header className="page-head profile-head">
        <p className="eyebrow">
          Student since {date(student.created_at, "month")}
          {student.demo && <span className="demo-tag" style={{ marginLeft: "0.75rem" }}>sample student</span>}
          {own && student.visibility === "private" && <span className="muted"> · your profile is private</span>}
        </p>
        <h1>{student.name}</h1>
        {student.bio && <p className="lede">{student.bio}</p>}
        {(masters.length > 0 || experts.length > 0) && (
          <div className="profile-seals">
            {masters.map((s) => (
              <Seal key={s.concentration.id} level="master" concentration={s.concentration.name} size="large" href={`/capstones/${s.mastery!.capstoneId}`} />
            ))}
            {experts.map((s) => (
              <Seal key={s.concentration.id} level="expert" concentration={s.concentration.name} size="large"
                href={`/faculties/${s.concentration.subject_slug}/${s.concentration.slug}`} />
            ))}
          </div>
        )}
        {own && <p style={{ marginTop: "1rem" }}><Link href="/study#profile">Edit your profile</Link></p>}
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>Standing</h2>
          <span className="eyebrow">{list.length} {list.length === 1 ? "concentration" : "concentrations"}</span>
        </div>
        {list.length === 0 ? (
          <p className="muted">{own ? "You have" : `${student.name} has`} not yet begun a concentration.</p>
        ) : (
          <>
            <p className="muted measure rose-key">
              Each window is one concentration. Its panes are the courses of the program, filling as lessons are
              completed. An Expert, who has completed every course, has a ring at the center; a Master, who has also
              passed the capstone, a gold star.
            </p>
            {faculties.map((faculty) => (
              <div key={faculty} className="rose-faculty">
                <h3 className="side-head">Faculty of {faculty}</h3>
                <ul className="roses">
                  {list.filter((s) => s.concentration.subject_name === faculty).map((s) => (
                    <li key={s.concentration.id} className={`rose-card level-${s.level}`}>
                      <Link href={`/faculties/${s.concentration.subject_slug}/${s.concentration.slug}`} className="rose-link">
                        <RoseWindow
                          label={s.concentration.name}
                          level={s.level}
                          panes={s.core.map((c) => ({ code: c.code, title: c.title, completed: c.completed, total: c.lessons + c.planned, done: c.done }))}
                        />
                      </Link>
                      <div>
                        <h4><Link href={`/faculties/${s.concentration.subject_slug}/${s.concentration.slug}`}>{s.concentration.name}</Link></h4>
                        <p className={`level-name level-${s.level}`}>{LEVEL_NAME[s.level]}</p>
                        <p className="muted">{standingLine(s)}</p>
                        {s.mastery && (
                          <p className="rose-capstone">Capstone: <Link href={`/capstones/${s.mastery.capstoneId}`}><em>{s.mastery.title}</em></Link></p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <details className="transcript">
              <summary>Transcript</summary>
              <table>
                <thead>
                  <tr><th scope="col">Concentration</th><th scope="col">Courses</th><th scope="col">Lessons completed</th><th scope="col">Standing</th></tr>
                </thead>
                <tbody>
                  {list.map((s) => (
                    <tr key={s.concentration.id}>
                      <th scope="row">{s.concentration.name}<span className="muted"> · {s.concentration.subject_name}</span></th>
                      <td>{s.coreDone} of {s.core.length}</td>
                      <td>{s.lessonsDone}</td>
                      <td>{LEVEL_NAME[s.level]}{s.mastery && ` (${s.mastery.mark})`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </details>
          </>
        )}
      </section>

      {capstones.length > 0 && (
        <section className="section">
          <div className="section-head"><h2>Capstones</h2><span className="eyebrow">The work that made a Master</span></div>
          <ul className="capstone-cards">
            {capstones.map((c) => (
              <li key={c.id}>
                <p className="eyebrow">{c.concentration} · {c.assessment?.mark}</p>
                <h3><Link href={`/capstones/${c.id}`}>{c.title}</Link></h3>
                {c.assessment?.citation && <p className="report-citation">“{c.assessment.citation}”</p>}
                <p>{c.abstract}</p>
                <p><Link href={`/capstones/${c.id}`}>Read the capstone →</Link></p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="section">
        <div className="section-head"><h2>Study</h2><span className="eyebrow">The last six months</span></div>
        <ActivityGrid counts={activity} />
      </section>

      {posts.length > 0 && (
        <section className="section">
          <div className="section-head"><h2>In the common rooms</h2></div>
          <ul className="post-list">
            {posts.map((p) => (
              <li key={p.id}>
                <Link href={`/faculties/${p.subject_slug}/${p.slug}/common-room/${p.thread_id}`}>{p.thread_title}</Link>
                <span className="muted"> · {p.concentration} · {date(p.created_at)}</span>
                <p>{p.body.length > 220 ? `${p.body.slice(0, 220).trimEnd()}…` : p.body}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
