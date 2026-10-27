import Link from "next/link";
import type { Metadata } from "next";
import { listConcentrations, listSubjects } from "@/lib/catalogue";
import { toRoman } from "@/lib/schema";

export const metadata: Metadata = { title: "The Faculties" };

export default function Faculties() {
  const subjects = listSubjects();
  return (
    <div className="wrap">
      <header className="page-head">
        <p className="eyebrow">The Catalogue</p>
        <h1>The Faculties</h1>
        <p className="lede">
          Each faculty offers several concentrations, and each concentration is a complete program of study—from
          foundational courses to an advanced seminar.
        </p>
      </header>

      {subjects.map((s, i) => (
        <section key={s.slug} className="section" style={{ paddingTop: i === 0 ? 0 : undefined }}>
          <div className="section-head">
            <h2>
              <span className="accent" style={{ fontSize: "0.7em", marginRight: "0.75rem" }}>{toRoman(i + 1)}</span>
              <Link href={`/faculties/${s.slug}`} style={{ textDecoration: "none" }}>{s.name}</Link>
            </h2>
            <Link href={`/faculties/${s.slug}`} className="eyebrow">Enter the faculty →</Link>
          </div>
          <div className="grid">
            {listConcentrations(s.slug).map((c) => (
              <Link key={c.id} href={`/faculties/${s.slug}/${c.slug}`} className="card">
                <span className="eyebrow">{s.name}</span>
                <h3>{c.name}</h3>
                <p>{c.description}</p>
                <div className="card-foot">
                  <span>{c.status === "drafting" ? "Being drafted" : `${c.courses} courses`}</span>
                  <span>View program →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
