import type { Metadata } from "next";
import { ButtonLink, PageHeader } from "@/components/ui";
import { GRADE_WEIGHTS, PASSING_SCORE } from "@/lib/academics";
import { LATE_REGISTRATION_DAYS, formatDate, openCohorts, termName } from "@/lib/calendar";

export const metadata: Metadata = { title: "Admissions" };

export default function AdmissionsPage() {
  const cohorts = openCohorts();
  return (
    <>
      <PageHeader eyebrow="Admissions" title="Open admission, every term">
        AIU admits every applicant. There are no application fees, transcripts, or essays: create your student account,
        choose a program, and reserve a place in an upcoming cohort.
      </PageHeader>
      <div className="container-page grid gap-14 py-14 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-12">
          <Section title="How to apply">
            <ol className="space-y-4">
              {[
                ["Explore the programs", "Read the full plan, concentrations, course descriptions, and published materials for any program."],
                ["Create your student account", "All you need is your name, an email address, and a password. You will receive a student ID number."],
                ["Choose your cohort", "Pick the term you want to begin. Everyone in a cohort starts on the same day and moves through the program together."],
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
              <Policy term="Cohorts and terms">
                The academic year has five eight-week terms. Each cohort begins on the first day of a term and takes two
                courses per term. Late registration stays open for {LATE_REGISTRATION_DAYS} days after a term begins.
              </Policy>
              <Policy term="Weekly rhythm">
                A new week of material opens for your cohort every Monday. Each week includes a lesson, a quiz, and a
                written assignment, along with recommended books, lectures, and documentaries. Weeks open in order: to move
                on, read the lesson, score at least {PASSING_SCORE}% on the quiz (retakes are unlimited), and submit the
                assignment.
              </Policy>
              <Policy term="Grading">
                Course grades combine weekly quizzes ({GRADE_WEIGHTS.quizzes * 100}%), written assignments (
                {GRADE_WEIGHTS.assignments * 100}%), and the final exam ({GRADE_WEIGHTS.final * 100}%). The final exam opens
                in week 8, and passing it with at least {PASSING_SCORE}% completes the course. Grades are recorded on a
                standard A–F scale.
              </Policy>
              <Policy term="Falling behind">
                Your cohort moves on to the next term on schedule. A course you haven&apos;t finished is marked incomplete,
                but it stays open so you can catch up and complete it.
              </Policy>
              <Policy term="Concentrations">
                Programs with concentrations let you choose a focus. You can declare at enrollment or later, and change it
                until you begin your first concentration course.
              </Policy>
              <Policy term="Changing programs">
                You may change programs at any time; you join the new program&apos;s next cohort. Completed courses stay on
                your transcript and count toward any program that includes them.
              </Policy>
            </dl>
          </Section>
        </div>
        <aside>
          <div className="sticky top-32 rounded-xl bg-navy-900 p-7 text-white">
            <h2 className="text-2xl font-semibold">Upcoming cohorts</h2>
            <ul className="mt-4 space-y-2 text-sm text-navy-100">
              {cohorts.map((t) => (
                <li key={t.start.toISOString()} className="flex justify-between gap-4 border-b border-white/10 pb-2">
                  <span>{termName(t)}</span>
                  <span className="text-navy-300">{formatDate(t.start)}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href="/apply" variant="gold" className="mt-6 w-full">Apply now</ButtonLink>
            <ButtonLink href="/programs" variant="light" className="mt-2 w-full">Browse programs</ButtonLink>
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
