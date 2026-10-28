import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ConcentrationHeader } from "@/components/ConcentrationHeader";
import { RoseWindow } from "@/components/RoseWindow";
import { Seal } from "@/components/Standing";
import { getConcentration, getSubject } from "@/lib/catalogue";
import { studentsOf } from "@/lib/people";
import type { Level } from "@/lib/progress";

type Params = { params: Promise<{ subject: string; concentration: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = await params;
  const c = getConcentration(p.subject, p.concentration);
  return { title: c ? `Students · ${c.name}` : "Not found" };
}

const date = (t: string) =>
  new Date(t.replace(" ", "T") + "Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

const HEADING: Record<Level, string> = { master: "Masters", expert: "Experts", student: "Studying" };

const NOTE: Record<Level, string> = {
  master: "Completed every course and passed the capstone. Their capstones are open to read.",
  expert: "Completed every course in the program.",
  student: "Working through the program.",
};

export default async function ConcentrationStudents({ params }: Params) {
  const p = await params;
  const subject = getSubject(p.subject);
  const concentration = getConcentration(p.subject, p.concentration);
  if (!subject || !concentration || concentration.status !== "ready") notFound();

  const students = studentsOf(concentration.id);
  const base = `/faculties/${subject.slug}/${concentration.slug}`;

  return (
    <div className="wrap">
      <ConcentrationHeader subject={subject} concentration={concentration} active="students"
        title={`Students of ${concentration.name}`}
        lede={`Everyone studying ${concentration.name} who keeps a public profile, with their standing in the program. Masters are listed first; follow a Master's seal to read the capstone that earned it.`} />

      {students.length === 0 ? (
        <p className="notice measure">
          No one with a public profile is studying {concentration.name} yet. <Link href={base}>Declare the concentration</Link> to be the first.
        </p>
      ) : (
        (["master", "expert", "student"] as Level[]).map((level) => {
          const group = students.filter((s) => s.standing.level === level);
          if (group.length === 0) return null;
          return (
            <section key={level} className="section" style={{ paddingTop: 0 }} aria-labelledby={`h-${level}`}>
              <div className="section-head">
                <h2 id={`h-${level}`}>{HEADING[level]}</h2>
                <span className="eyebrow">{group.length}</span>
              </div>
              <p className="muted" style={{ marginTop: "-0.5rem" }}>{NOTE[level]}</p>
              <ul className="roses">
                {group.map((s) => {
                  const st = s.standing;
                  return (
                    <li key={s.id} className={`rose-card level-${level}`}>
                      <Link href={`/students/${s.id}`} className="rose-link">
                        <RoseWindow
                          label={`${s.name} in ${concentration.name}`}
                          level={level}
                          size={96}
                          panes={st.core.map((c) => ({ code: c.code, title: c.title, completed: c.completed, total: c.lessons + c.planned, done: c.done }))}
                        />
                      </Link>
                      <div>
                        <h4>
                          <Link href={`/students/${s.id}`}>{s.name}</Link>
                          {s.demo && <span className="demo-tag">sample</span>}
                        </h4>
                        {level === "student" ? (
                          <p className="muted">
                            {st.coreDone} of {st.core.length} courses · {st.lessonsDone} {st.lessonsDone === 1 ? "lesson" : "lessons"} completed
                          </p>
                        ) : (
                          <p>
                            <Seal level={level} concentration={concentration.name}
                              href={st.mastery ? `/capstones/${st.mastery.capstoneId}` : undefined} />
                            <span className="muted">
                              {" "}since {date(st.mastery?.passedAt ?? st.completedAt ?? s.created_at)}
                            </span>
                          </p>
                        )}
                        {st.mastery && (
                          <p className="rose-capstone"><Link href={`/capstones/${st.mastery.capstoneId}`}><em>{st.mastery.title}</em></Link> · {st.mastery.mark}</p>
                        )}
                        {s.bio && <p className="muted roll-bio">{s.bio.length > 140 ? `${s.bio.slice(0, 140).trimEnd()}…` : s.bio}</p>}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })
      )}
      <p className="muted side-note">Only students with public profiles are listed.</p>
    </div>
  );
}
