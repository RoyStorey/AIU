import Link from "next/link";
import { Crest } from "@/components/Crest";
import { InquiryForm } from "@/components/Forms";
import { listSubjects } from "@/lib/catalogue";
import { toRoman } from "@/lib/schema";

export default function Home() {
  const subjects = listSubjects();

  return (
    <>
      <section className="wrap hero">
        <Crest className="crest" />
        <p className="eyebrow">An academy of the humanities</p>
        <h1>Cornerstone</h1>
        <p className="motto">
          Tolle, lege. <span>— “Take up and read.” Augustine, Confessions VIII</span>
        </p>
        <InquiryForm />
      </section>

      <section className="wrap section">
        <div className="section-head">
          <h2>The Faculties</h2>
          <Link href="/faculties" className="eyebrow">The full catalogue →</Link>
        </div>
        <ul className="faculties">
          {subjects.map((s, i) => (
            <li key={s.slug}>
              <Link href={`/faculties/${s.slug}`} className="faculty">
                <span className="numeral">{toRoman(i + 1)}</span>
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

      <div className="wrap"><div className="fleuron" aria-hidden="true">❦</div></div>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div className="section-head"><h2>The Course of Study</h2></div>
        <div className="steps">
          <div className="step">
            <span className="numeral">I</span>
            <h3>Declare a concentration</h3>
            <p>Choose a faculty, then a concentration within it: Poetry, Latin, American History, Biblical Studies. No prerequisites are required.</p>
          </div>
          <div className="step">
            <span className="numeral">II</span>
            <h3>Follow the program</h3>
            <p>Each program runs from Foundations to a capstone Seminar. Every course has lectures, assigned readings, recorded lectures and audio, a reference shelf, and knowledge checks.</p>
          </div>
          <div className="step">
            <span className="numeral">III</span>
            <h3>Become a Master</h3>
            <p>Complete every course to become an Expert; pass the concentration&apos;s capstone to become a Master, with your work shown in its Hall of Masters. Then, if you wish, the faculty will draft further courses at the level of graduate study.</p>
          </div>
        </div>
      </section>
    </>
  );
}
