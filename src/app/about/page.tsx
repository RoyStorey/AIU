import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui";
import { getVisibleCourses, getVisiblePrograms } from "@/lib/visibility";

export const metadata: Metadata = { title: "About AIU" };

export default async function AboutPage() {
  const programs = await getVisiblePrograms();
  const courses = await getVisibleCourses();
  const published = courses.filter((c) => c.status === "published").length;
  return (
    <>
      <PageHeader eyebrow="About" title="About Artificial Intelligence University">
        AIU exists to make deep, structured study of a discipline available to anyone who wants to learn.
      </PageHeader>
      <div className="container-page max-w-3xl space-y-14 py-14 leading-relaxed text-navy-800/90">
        <section>
          <h2 className="text-2xl font-semibold text-navy-900">Our mission</h2>
          <p className="mt-4">
            Learning a field well is more than collecting facts. It is a sequence: foundational courses that make
            advanced ones possible, a focus you choose for yourself, and the steady discipline of finishing one term and
            starting the next with people who are doing the same. AIU offers that structure in a single discipline, from
            a first course to a capstone, studied together in cohorts.
          </p>
        </section>

        <section id="approach" className="scroll-mt-32">
          <h2 className="text-2xl font-semibold text-navy-900">How our courses are made</h2>
          <p className="mt-4">
            AIU&apos;s curriculum is written by AI. When the university adds a program, an AI model drafts the complete
            plan: its learning outcomes, the sequence of courses, its concentrations, and the prerequisites that connect
            them. Each course is then developed in the same way, week by week, into lessons, key terms, quizzes, written
            assignments with rubrics, and a cumulative final exam.
          </p>
          <p className="mt-4">
            Every plan is checked automatically before it is published: each course must appear once, every
            prerequisite must come in an earlier term for every concentration, and every assessment must be well-formed.
            The curriculum is then published in full, so anyone can read any course in the catalog before enrolling.
          </p>
          <p className="mt-4">
            AI-written material can contain mistakes, so no AIU course stands alone. Each one recommends published books,
            lectures, and documentaries by human scholars and creators, and we encourage students to read critically,
            check important claims against those sources, and treat their coursework as the start of their learning
            rather than the end of it.
            When an AI grader reviews a written assignment, it provides feedback against the published rubric.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-navy-900">AIU by the numbers</h2>
          <dl className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3">
            <Num value={programs.length} label="Degree programs" />
            <Num value={courses.length} label="Courses in the catalog" />
            <Num value={published} label="Courses with full materials" />
          </dl>
        </section>

        <section className="rounded-xl border border-navy-100 bg-paper p-6 text-sm">
          <h2 className="font-sans text-base font-semibold text-navy-900">Accreditation and credentials</h2>
          <p className="mt-2">
            AIU is an independent, experimental institution. It is not accredited by any recognized accrediting body,
            and its certificates are not academic degrees. Coursework completed at AIU is not transferable to other
            institutions. What you will take away is the knowledge itself.
          </p>
        </section>

        <p>
          <Link href="/programs" className="font-semibold text-navy-700 hover:text-navy-900">Explore our programs →</Link>
        </p>
      </div>
    </>
  );
}

function Num({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-lg border border-navy-100 p-5">
      <dd className="font-display text-4xl font-semibold text-navy-900">{value}</dd>
      <dt className="mt-1 text-xs font-medium uppercase tracking-wider text-navy-500">{label}</dt>
    </div>
  );
}
