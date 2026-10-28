import Link from "next/link";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { withdrawFrom } from "@/app/actions";
import { ProfileForm } from "@/components/Forms";
import { Seal } from "@/components/Standing";
import { ThemePicker } from "@/components/ThemePicker";
import { requireUser } from "@/lib/auth";
import { getStudent } from "@/lib/people";
import { enrollments, recentVisits, standing } from "@/lib/progress";
import { toRoman } from "@/lib/roman";
import { DEFAULT_THEME, THEME_COOKIE, findTheme } from "@/lib/themes";

export const metadata: Metadata = { title: "My Studies" };

export default async function Study() {
  const user = await requireUser("/study");
  const programs = enrollments(user.id);
  const theme = findTheme((await cookies()).get(THEME_COOKIE)?.value)?.id ?? DEFAULT_THEME.id;
  const since = new Date(user.created_at.replace(" ", "T") + "Z").toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const profile = getStudent(user.id)!;
  const visits = recentVisits(user.id, 3);

  return (
    <div className="wrap">
      <header className="page-head">
        <p className="eyebrow">Student since {since}</p>
        <h1>{user.name}</h1>
        <p className="lede">Your declared concentrations and your standing in each.</p>
        <p className="study-links">
          <Link href={`/students/${user.id}`}>Your public profile</Link>
          <Link href="/study/notes">Your commonplace book</Link>
          <a href="#profile">Edit your profile</a>
        </p>
      </header>

      {visits.length > 0 && (
        <section className="resume" aria-labelledby="resume-head">
          <h2 id="resume-head" className="side-head">Pick up where you left off</h2>
          <ul>
            {visits.map((v) => (
              <li key={v.course_id}>
                <Link href={`/courses/${v.course_id}/lessons/${v.lesson_index + 1}/${v.page_index + 1}`}>
                  {v.code} {v.title} <span className="muted">· Lesson {toRoman(v.lesson_index + 1)}, page {toRoman(v.page_index + 1).toLowerCase()}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {programs.length === 0 ? (
        <div className="notice measure">
          <h3>You have not yet declared a concentration</h3>
          <p>Visit the <Link href="/faculties">Faculties</Link> to choose a program of study, or return to the <Link href="/">front page</Link> and tell us what you would like to learn.</p>
        </div>
      ) : (
        programs.map(({ concentration, courses, coursesDone, lessonsDone, complete, next }) => {
          const path = `/faculties/${concentration.subject_slug}/${concentration.slug}`;
          const mine = standing(user.id, concentration.id);
          return (
            <section key={concentration.id} className="study-program">
              <div>
                <span className="eyebrow">Faculty of {concentration.subject_name}</span>
                <h2><Link href={path}>{concentration.name}</Link></h2>
                {mine && mine.level !== "student" && (
                  <p>
                    <Seal level={mine.level} concentration={concentration.name} size="large"
                      href={mine.mastery ? `/capstones/${mine.mastery.capstoneId}` : `${path}/capstone`} />
                    {mine.level === "expert" && <> <Link href={`${path}/capstone`}>Take the capstone to become a Master →</Link></>}
                  </p>
                )}
                {complete ? (
                  <p>
                    <span className="mark done">Program complete.</span>{" "}
                    <Link href={path}>Continue your studies beyond the curriculum →</Link>
                  </p>
                ) : next ? (
                  <p>
                    Next course: <Link href={`/courses/${next.id}`}>{next.code} {next.title}</Link>
                    {next.completed > 0 && <span className="muted"> — {next.completed} of {next.lessons + next.planned} lessons complete</span>}
                  </p>
                ) : null}
                <form action={withdrawFrom.bind(null, concentration.id)}>
                  <button type="submit" className="link-button" style={{ fontSize: "0.95rem", color: "var(--muted)" }}>
                    Withdraw from this concentration
                  </button>
                </form>
              </div>
              <div>
                <div className="figure-big">{coursesDone} <span className="muted" style={{ fontSize: "1.2rem" }}>of {courses.length} courses</span></div>
                <div className="meter"><span style={{ width: `${courses.length ? (coursesDone / courses.length) * 100 : 0}%` }} /></div>
                <p className="muted" style={{ fontSize: "0.98rem" }}>{lessonsDone} {lessonsDone === 1 ? "lesson" : "lessons"} completed</p>
              </div>
            </section>
          );
        })
      )}

      <section className="section" style={{ marginTop: "2rem" }} id="profile">
        <div className="section-head">
          <h2>Your profile</h2>
          <span className="eyebrow"><Link href={`/students/${user.id}`}>View it</Link></span>
        </div>
        <div className="measure"><ProfileForm bio={profile.bio} visibility={profile.visibility} /></div>
      </section>

      <section className="section" style={{ marginTop: "2rem" }}>
        <div className="section-head">
          <h2>Appearance</h2>
          <span className="eyebrow">Nine house palettes</span>
        </div>
        <p className="muted measure">Choose a palette to see the whole site in it. Your choice is remembered on this device.</p>
        <ThemePicker current={theme} />
      </section>
    </div>
  );
}
