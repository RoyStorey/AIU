import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AssessmentReport } from "@/components/Assessment";
import { Markdown } from "@/components/Markdown";
import { Seal, StudentName } from "@/components/Standing";
import { currentUser } from "@/lib/auth";
import { getSubmission } from "@/lib/capstone";
import { getConcentrationById, getSubject } from "@/lib/catalogue";
import { getStudent } from "@/lib/people";

type Params = { params: Promise<{ id: string }> };

/** A capstone is public once it has passed and its author's profile is public; otherwise only its author sees it. */
async function load(params: Params["params"]) {
  const id = Number((await params).id);
  const submission = Number.isInteger(id) ? getSubmission(id) : null;
  if (!submission) return null;
  const author = getStudent(submission.user_id)!;
  const viewer = await currentUser();
  const visible = viewer?.id === author.id || (submission.passed && author.visibility === "public");
  if (!visible) return null;
  const concentration = getConcentrationById(submission.concentration_id)!;
  return { submission, author, viewer, concentration, subject: getSubject(concentration.subject_slug)! };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const found = await load(params);
  return { title: found ? `${found.submission.title} · ${found.author.name}` : "Not found" };
}

const when = (t: string) =>
  new Date(t.replace(" ", "T") + "Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

const words = (t: string) => t.split(/\s+/).filter(Boolean).length;

export default async function CapstoneView({ params }: Params) {
  const found = await load(params);
  if (!found) notFound();
  const { submission, author, viewer, concentration, subject } = found;
  const base = `/faculties/${subject.slug}/${concentration.slug}`;
  const { assessment } = submission;

  return (
    <div className="wrap">
      <header className="page-head capstone-head">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href={`/faculties/${subject.slug}`}>{subject.name}</Link>
          <span aria-hidden="true">/</span>
          <Link href={base}>{concentration.name}</Link>
          <span aria-hidden="true">/</span>
          <Link href={`${base}/capstone`}>Capstone</Link>
        </nav>
        <p className="eyebrow" style={{ marginTop: "1.5rem" }}>
          {submission.passed ? `A capstone in ${concentration.name}` : "Your capstone submission"}
          {submission.option && ` · ${submission.option}`}
        </p>
        <h1>{submission.title}</h1>
        <p className="capstone-byline">
          <StudentName id={author.id} name={author.name} demo={author.demo} />
          <span className="muted"> · {when(submission.created_at)} · {words(submission.body).toLocaleString()} words</span>
        </p>
        {submission.passed && assessment && (
          <div className="capstone-seal">
            <Seal level="master" concentration={concentration.name} size="large" />
            <span className={`report-mark-inline mark-${assessment.mark.toLowerCase()}`}>{assessment.mark}</span>
            {assessment.citation && <p className="report-citation">“{assessment.citation}”</p>}
          </div>
        )}
      </header>

      <div className="capstone-layout">
        <article className="capstone-body">
          <section className="abstract">
            <h2 className="side-head">Abstract</h2>
            <p>{submission.abstract}</p>
          </section>
          <Markdown>{submission.body}</Markdown>
        </article>
      </div>

      {assessment && (
        <section className="section capstone-report measure" style={{ maxWidth: "48rem" }}>
          <AssessmentReport assessment={assessment} />
        </section>
      )}
      {!assessment && viewer?.id === author.id && (
        <p className="notice measure">This submission has not yet been examined. See the <Link href={`${base}/capstone`}>capstone page</Link>.</p>
      )}
    </div>
  );
}
