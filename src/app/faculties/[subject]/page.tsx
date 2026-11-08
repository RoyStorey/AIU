import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProposeForm } from "@/components/Forms";
import { currentUser, isAdmin } from "@/lib/auth";
import { availability, getSubject, listConcentrations } from "@/lib/catalogue";
import { forgeAvailable } from "@/lib/forge";

type Params = { params: Promise<{ subject: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const subject = getSubject((await params).subject);
  return { title: subject ? `Faculty of ${subject.name}` : "Not found" };
}

export default async function SubjectPage({ params }: Params) {
  const subject = getSubject((await params).subject);
  if (!subject) notFound();
  const concentrations = listConcentrations(subject.slug);
  const user = await currentUser();
  const admin = isAdmin(user);

  return (
    <div className="wrap">
      <header className="page-head">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/faculties">Faculties</Link>
        </nav>
        <h1>Faculty of {subject.name}</h1>
        <p className="lede">{subject.description}</p>
        {subject.epigraph && (
          <blockquote className="epigraph">
            <p>{subject.epigraph}</p>
            {subject.attribution && <cite>{subject.attribution}</cite>}
          </blockquote>
        )}
      </header>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="section-head">
          <h2>Choose a Concentration</h2>
          <span className="eyebrow">{concentrations.length} programs of study</span>
        </div>
        <div className="grid">
          {concentrations.map((c) => (
            <Link key={c.id} href={`/faculties/${subject.slug}/${c.slug}`} className="card">
              <span className="eyebrow">{c.origin === "seed" ? "Concentration" : "Proposed by a student"}</span>
              <h3>{c.name}</h3>
              <p>{c.description}</p>
              <div className="card-foot">
                <span>
                  {c.status === "drafting" ? "Being drafted" : c.status === "failed" ? "Drafting interrupted" : availability(c)}
                </span>
                <span>View program →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {admin && (
      <section className="section" id="propose">
        <div className="program-layout">
          <div className="measure">
            <h2 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>Propose a Concentration</h2>
            <p className="muted">
              Visible to administrators only. Name a program, and the forge will draft a complete program of
              study—foundations through seminar—with courses built on real texts, lectures, and recordings.
            </p>
            {!forgeAvailable() ? (
              <div className="notice">
                <h3>The forge is not yet lit</h3>
                <p>Drafting new programs requires an Anthropic API key. Set <em>ANTHROPIC_API_KEY</em> in the server’s environment and restart.</p>
              </div>
            ) : (
              <ProposeForm subject={subject.slug} subjectName={subject.name} />
            )}
          </div>
        </div>
      </section>
      )}
    </div>
  );
}
