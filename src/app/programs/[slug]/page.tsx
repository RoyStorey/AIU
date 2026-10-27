import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DegreeMap } from "@/components/degree-map";
import { Badge, ButtonLink, categoryLabel } from "@/components/ui";
import { getActiveEnrollment } from "@/lib/academics";
import { isAdminEmail } from "@/lib/admin";
import { getCurrentUser } from "@/lib/auth";
import { cohortSchedule, formatDate, openCohorts, termName, today } from "@/lib/calendar";
import { getCourse, getProgram, getSchool, programCourseCount, programPublishedShare } from "@/lib/content";
import { COURSE_CATEGORIES, courseSlug, durationLabel, isSlot } from "@/lib/content/schema";
import { isProgramVisible } from "@/lib/visibility";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const program = getProgram((await params).slug);
  return program ? { title: program.credential, description: program.tagline } : {};
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const user = await getCurrentUser();
  const visible = await isProgramVisible(slug);
  const admin = !!user && isAdminEmail(user.email);
  if (!visible && !admin) notFound();

  const school = getSchool(program.school);
  const active = user ? await getActiveEnrollment(user.id) : null;
  const { published, total } = programPublishedShare(program);
  const codes = program.terms.flatMap((t) => t.courses);
  const byCategory = COURSE_CATEGORIES.map((c) => ({
    category: c,
    count: c === "concentration" ? codes.filter(isSlot).length : codes.filter((code) => getCourse(code)?.category === c).length,
  })).filter((c) => c.count);

  const nextCohort = openCohorts(undefined, 1)[0];
  const finishes = cohortSchedule(nextCohort.start, program.terms.length).at(-1)!;

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="container-page py-14 sm:py-20">
          <nav className="text-sm text-navy-300">
            <Link href="/programs" className="hover:text-white">Programs</Link>
            <span className="mx-2">/</span>
            <span>{school?.name}</span>
          </nav>
          {!visible && <p className="mt-6"><Badge tone="gold">Hidden from the public · visible to administrators</Badge></p>}
          <p className="mt-6 eyebrow !text-gold-300">{program.credential}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">{program.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-100/90">{program.tagline}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {active?.program.slug === slug ? (
              <>
                <ButtonLink href="/student" variant="gold">Go to my courses</ButtonLink>
                <span className="text-sm text-navy-200">You are enrolled in this program.</span>
              </>
            ) : (
              <>
                <ButtonLink href={`/enroll/${slug}`} variant="gold" className="px-6 py-3 text-base">
                  {active ? "Switch to this program" : "Enroll in this program"}
                </ButtonLink>
                <span className="text-sm text-navy-200">
                  {nextCohort.start <= today() ? (
                    <>The {termName(nextCohort)} cohort began {formatDate(nextCohort.start)} · late registration open</>
                  ) : (
                    <>Next cohort begins <strong className="text-white">{formatDate(nextCohort.start)}</strong></>
                  )}
                </span>
              </>
            )}
          </div>
        </div>
      </section>

      <div className="container-page grid gap-12 py-14 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-navy-900">Program overview</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-navy-800/90">
              {program.overview.split(/\n\n+/).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-navy-900">What you will learn</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {program.outcomes.map((o) => (
                <li key={o} className="flex gap-3 rounded-lg bg-paper p-4 text-sm leading-relaxed text-navy-800">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" fill="currentColor"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" /></svg>
                  {o}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-navy-900">Where it leads</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {program.careers.map((c) => (
                <div key={c.title} className="rounded-lg border border-navy-100 p-5">
                  <h3 className="font-sans text-base font-semibold text-navy-900">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-navy-700/80">{c.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:pt-2">
          <div className="sticky top-32 rounded-xl border border-navy-100 bg-paper p-6">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-navy-500">At a glance</h2>
            <dl className="mt-4 divide-y divide-navy-100 text-sm">
              <Row label="Credential" value={program.credential} />
              <Row label="School" value={school?.name ?? ""} />
              <Row label="Length" value={`${durationLabel(program)} · ${program.terms.length} terms`} />
              <Row label="Courses" value={String(programCourseCount(program))} />
              <Row label="Each term" value="8 weeks, 2 courses" />
              {byCategory.map((c) => (
                <Row key={c.category} label={categoryLabel[c.category]} value={`${c.count} courses`} />
              ))}
              <Row label="Next cohort" value={termName(nextCohort)} />
              <Row label="Completes" value={`${termName(finishes)}*`} />
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-navy-500">
              *For students who join the next cohort. Everyone in a cohort starts and moves through terms together.
              {published < total && ` Materials are published ahead of each term; ${published} of ${total} courses are online now.`}
            </p>
          </div>
        </aside>
      </div>

      {program.concentrations.length > 0 && (
        <section id="concentrations" className="scroll-mt-32 border-t border-navy-100 py-14">
          <div className="container-page">
            <p className="eyebrow">Concentrations</p>
            <h2 className="mt-3 text-3xl font-semibold text-navy-900">Choose your focus</h2>
            <p className="mt-3 max-w-2xl text-navy-700/80">
              Every student takes the same core. You choose one concentration, at enrollment or later, which fills the
              concentration courses in your plan. You can change it until you begin your first concentration course.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {program.concentrations.map((c) => (
                <div key={c.slug} className="flex flex-col rounded-xl border-t-4 border-gold-400 bg-navy-50/60 p-6">
                  <h3 className="text-xl font-semibold text-navy-900">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700/80">{c.description}</p>
                  <ol className="mt-4 space-y-1.5 text-sm">
                    {c.courses.map((code) => (
                      <li key={code}>
                        <Link href={`/courses/${courseSlug(code)}`} className="text-navy-800 hover:text-navy-600">
                          <span className="font-semibold text-navy-500">{code}</span> {getCourse(code)?.title}
                        </Link>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="degree-map" className="border-t border-navy-100 bg-paper py-14">
        <div className="container-page">
          <p className="eyebrow">Program map</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy-900">Term by term</h2>
          <p className="mt-3 max-w-2xl text-navy-700/80">
            Each year has five eight-week terms. You take two courses per term, and each course builds on the ones
            before it.
          </p>
          <div className="mt-10">
            <DegreeMap terms={program.terms} />
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 py-2.5">
      <dt className="text-navy-500">{label}</dt>
      <dd className="text-right font-medium text-navy-900">{value}</dd>
    </div>
  );
}
