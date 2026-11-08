import Link from "next/link";
import { Crest } from "@/components/Crest";
import { currentUser } from "@/lib/auth";
import { isOpen, listCourses, listConcentrations, listSubjects } from "@/lib/catalogue";

/** The front page, for visitors and students alike; students' own page is the dashboard. */
export default async function Home() {
  const user = await currentUser();
  return <Welcome signedIn={!!user} />;
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

function Welcome({ signedIn }: { signedIn: boolean }) {
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
          {signedIn
            ? <Link className="button" href="/dashboard">Go to your dashboard</Link>
            : <Link className="button" href="/signup">Enroll</Link>}
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
