import type { Metadata } from "next";
import { ButtonLink, PageHeader } from "@/components/ui";
import { GRADE_WEIGHTS, PASSING_SCORE } from "@/lib/academics";

export const metadata: Metadata = { title: "Admissions" };

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader eyebrow="Admissions" title="Open admission, every term">
        AIU admits every applicant. There are no application fees, transcripts, or deadlines: create your student
        account, choose a program, and begin your first term the same day.
      </PageHeader>
      <div className="container-page grid gap-14 py-14 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-12">
          <Section title="How to apply">
            <ol className="space-y-4">
              {[
                ["Explore the programs", "Read the full degree map, course descriptions, and published materials for any program."],
                ["Create your student account", "All you need is your name, an email address, and a password. You will receive a student ID number."],
                ["Enroll in a program", "Your first term opens immediately, with two courses ready to begin."],
              ].map(([t, b], i) => (
                <li key={t} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-800 text-sm font-semibold text-white">{i + 1}</span>
                  <div>
                    <h3 className="font-sans font-semibold text-navy-900">{t}</h3>
                    <p className="mt-1 text-navy-700/80">{b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>
          <Section title="Academic policies">
            <dl className="space-y-5 text-navy-800/90">
              <Policy term="Course structure">
                Every course runs eight weeks. Each week includes a lesson, a short quiz, and a written assignment. A
                cumulative final exam closes the course.
              </Policy>
              <Policy term="Progression">
                Weeks open in order. To move on, read the lesson, score at least {PASSING_SCORE}% on the weekly quiz
                (retakes are unlimited), and submit the written assignment. Terms open in order as well: you begin a new
                term once both courses in the previous term are complete.
              </Policy>
              <Policy term="Grading">
                Final course grades combine weekly quizzes ({GRADE_WEIGHTS.quizzes * 100}%), written assignments (
                {GRADE_WEIGHTS.assignments * 100}%), and the final exam ({GRADE_WEIGHTS.final * 100}%). A course is
                complete when you pass the final exam with at least {PASSING_SCORE}%. Grades are recorded on a standard
                A–F scale and a 4.0 grade-point average.
              </Policy>
              <Policy term="Changing programs">
                You may change programs at any time. Completed courses remain on your transcript and count toward any
                program that includes them, which makes general education courses fully transferable.
              </Policy>
            </dl>
          </Section>
        </div>
        <aside>
          <div className="sticky top-32 rounded-xl bg-navy-900 p-7 text-white">
            <h2 className="text-2xl font-semibold">Ready to begin?</h2>
            <p className="mt-3 text-sm text-navy-200">Your application takes about a minute.</p>
            <ButtonLink href="/apply" variant="gold" className="mt-6 w-full">Apply now</ButtonLink>
            <ButtonLink href="/programs" variant="ghost" className="mt-2 w-full text-white hover:bg-white/10">Browse programs</ButtonLink>
          </div>
        </aside>
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold text-navy-900">{title}</h2>
      {children}
    </section>
  );
}

function Policy({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-gold-300 pl-5">
      <dt className="font-sans font-semibold text-navy-900">{term}</dt>
      <dd className="mt-1 leading-relaxed">{children}</dd>
    </div>
  );
}
