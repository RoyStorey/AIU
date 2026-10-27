import Link from "next/link";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { withdrawFrom } from "@/app/actions";
import { ThemePicker } from "@/components/ThemePicker";
import { requireUser } from "@/lib/auth";
import { enrollments } from "@/lib/progress";
import { DEFAULT_THEME, THEME_COOKIE, findTheme } from "@/lib/themes";

export const metadata: Metadata = { title: "My Studies" };

export default async function Study() {
  const user = await requireUser("/study");
  const programs = enrollments(user.id);
  const theme = findTheme((await cookies()).get(THEME_COOKIE)?.value)?.id ?? DEFAULT_THEME.id;
  const since = new Date(user.created_at.replace(" ", "T") + "Z").toLocaleDateString("en-US", { month: "long", year: "numeric" });

  return (
    <div className="wrap">
      <header className="page-head">
        <p className="eyebrow">Student since {since}</p>
        <h1>{user.name}</h1>
        <p className="lede">Your declared concentrations and your standing in each.</p>
      </header>

      {programs.length === 0 ? (
        <div className="notice measure">
          <h3>You have not yet declared a concentration</h3>
          <p>Visit the <Link href="/faculties">Faculties</Link> to choose a program of study, or return to the <Link href="/">front page</Link> and tell us what you would like to learn.</p>
        </div>
      ) : (
        programs.map(({ concentration, courses, coursesDone, lessonsDone, complete, next }) => {
          const path = `/faculties/${concentration.subject_slug}/${concentration.slug}`;
          return (
            <section key={concentration.id} className="study-program">
              <div>
                <span className="eyebrow">Faculty of {concentration.subject_name}</span>
                <h2><Link href={path}>{concentration.name}</Link></h2>
                {complete ? (
                  <p>
                    <span className="mark done">Program complete.</span>{" "}
                    <Link href={path}>Continue your studies beyond the curriculum →</Link>
                  </p>
                ) : next ? (
                  <p>
                    Next course: <Link href={`/courses/${next.id}`}>{next.code} {next.title}</Link>
                    {next.completed > 0 && <span className="muted"> — {next.completed} of {next.lessons} lessons complete</span>}
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

      <section className="section" style={{ marginTop: "2rem" }}>
        <div className="section-head">
          <h2>Appearance</h2>
          <span className="eyebrow">Temporary · for choosing the house colors</span>
        </div>
        <p className="muted measure">Choose a palette to see the whole site in it. Your choice is remembered on this device.</p>
        <ThemePicker current={theme} />
      </section>
    </div>
  );
}
