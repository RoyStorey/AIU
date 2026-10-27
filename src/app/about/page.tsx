import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui";
import { getCourses, getPrograms } from "@/lib/content";

export const metadata: Metadata = { title: "About AIU" };

export default function AboutPage() {
  const programs = getPrograms();
  const courses = getCourses();
  const published = courses.filter((c) => c.status === "published").length;
  return (
    <>
      <PageHeader eyebrow="About" title="About Artificial Intelligence University">
        AIU exists to make a complete, structured undergraduate curriculum available to anyone who wants to learn.
      </PageHeader>
      <div className="container-page max-w-3xl space-y-14 py-14 leading-relaxed text-navy-800/90">
        <section>
          <h2 className="text-2xl font-semibold text-navy-900">Our mission</h2>
          <p className="mt-4">
            A university education is more than a collection of facts. It is a sequence: foundational courses that make
            advanced ones possible, a balance of breadth and depth, and the steady discipline of finishing one term and
            starting the next. AIU offers that structure, from a first-year seminar to a senior capstone, freely and
            on your own schedule.
          </p>
        </section>

        <section id="approach" className="scroll-mt-32">
          <h2 className="text-2xl font-semibold text-navy-900">How our courses are made</h2>
          <p className="mt-4">
            AIU&apos;s curriculum is written by AI. When the university adds a degree, an AI model drafts the complete
            four-year plan: its learning outcomes, the sequence of 40 courses, and the prerequisites that connect them.
            Each course is then developed in the same way, week by week, into lessons, key terms, quizzes, written
            assignments with rubrics, and a cumulative final exam.
          </p>
          <p className="mt-4">
            Every plan is checked automatically before it is published: each course must appear once, every
            prerequisite must come in an earlier term, and every assessment must be well-formed. The curriculum is then
            published in full, so anyone can read any course in the catalog before enrolling.
          </p>
          <p className="mt-4">
            AI-written material can contain mistakes. We encourage students to read critically, verify important claims
            against other sources, and treat their coursework as the start of their learning rather than the end of it.
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
            and the programs it offers do not confer academic degrees. Credits earned at AIU are not transferable to
            other institutions. What you will take away is the knowledge itself.
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
