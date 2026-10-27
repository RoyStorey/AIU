import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { enrollInProgram } from "@/app/actions/enrollment";
import { DegreeMap } from "@/components/degree-map";
import { Button, ButtonLink } from "@/components/ui";
import { getActiveEnrollment } from "@/lib/academics";
import { getCurrentUser } from "@/lib/auth";
import { getCourse, getProgram, getSchool, programCredits, programPublishedShare } from "@/lib/content";
import { COURSE_CATEGORIES } from "@/lib/content/schema";
import { categoryLabel } from "@/components/ui";

type Props = { params: Promise<{ slug: string }>; searchParams: Promise<{ switch?: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const program = getProgram((await params).slug);
  return program ? { title: program.title, description: program.tagline } : {};
}

export default async function ProgramPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { switch: confirmingSwitch } = await searchParams;
  const program = getProgram(slug);
  if (!program) notFound();

  const school = getSchool(program.school);
  const user = await getCurrentUser();
  const active = user ? await getActiveEnrollment(user.id) : null;
  const credits = programCredits(program);
  const { published, total } = programPublishedShare(program);
  const codes = program.terms.flatMap((t) => t.courses);
  const byCategory = COURSE_CATEGORIES.map((c) => ({
    category: c,
    count: codes.filter((code) => getCourse(code)?.category === c).length,
  })).filter((c) => c.count);

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="container-page py-14 sm:py-20">
          <nav className="text-sm text-navy-300">
            <Link href="/programs" className="hover:text-white">Programs</Link>
            <span className="mx-2">/</span>
            <span>{school?.name}</span>
          </nav>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">{program.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-100/90">{program.tagline}</p>
          <div className="mt-8">
            <EnrollControl slug={program.slug} activeSlug={active?.program.slug} activeTitle={active?.program.title} confirming={!!confirmingSwitch} />
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
            <h2 className="text-2xl font-semibold text-navy-900">Career paths</h2>
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
              <Row label="Degree" value={program.degree} />
              <Row label="School" value={school?.name ?? ""} />
              <Row label="Total credits" value={String(credits)} />
              <Row label="Duration" value="4 years · 20 terms" />
              <Row label="Term length" value="8 weeks, 2 courses" />
              {byCategory.map((c) => (
                <Row key={c.category} label={categoryLabel[c.category]} value={`${c.count} courses`} />
              ))}
            </dl>
            {published < total && (
              <p className="mt-4 text-xs leading-relaxed text-navy-500">
                Course materials are published term by term. {published} of {total} courses currently have full materials
                online.
              </p>
            )}
          </div>
        </aside>
      </div>

      <section id="degree-map" className="border-t border-navy-100 bg-paper py-14">
        <div className="container-page">
          <p className="eyebrow">Degree map</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy-900">Your four years, term by term</h2>
          <p className="mt-3 max-w-2xl text-navy-700/80">
            Each academic year has five eight-week terms. You take two courses per term, and each course builds on the
            ones before it.
          </p>
          <div className="mt-10">
            <DegreeMap program={program} />
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

function EnrollControl({ slug, activeSlug, activeTitle, confirming }: { slug: string; activeSlug?: string; activeTitle?: string; confirming: boolean }) {
  if (activeSlug === slug) {
    return (
      <div className="flex flex-wrap items-center gap-4">
        <ButtonLink href="/student" variant="gold">Go to my courses</ButtonLink>
        <span className="text-sm text-navy-200">You are enrolled in this program.</span>
      </div>
    );
  }
  if (activeSlug && confirming) {
    return (
      <form action={enrollInProgram} className="max-w-xl rounded-lg bg-white/10 p-5">
        <input type="hidden" name="program" value={slug} />
        <input type="hidden" name="confirmSwitch" value="yes" />
        <p className="text-sm text-navy-100">
          You are currently enrolled in the <strong className="text-white">{activeTitle}</strong>. Switching will withdraw
          you from that program. Any course you have already completed stays on your transcript and counts toward this
          program if it is part of the degree plan.
        </p>
        <div className="mt-4 flex gap-3">
          <Button variant="gold">Switch programs</Button>
          <ButtonLink href={`/programs/${slug}`} variant="light" className="">Cancel</ButtonLink>
        </div>
      </form>
    );
  }
  return (
    <form action={enrollInProgram} className="flex flex-wrap items-center gap-4">
      <input type="hidden" name="program" value={slug} />
      <Button variant="gold" className="px-6 py-3 text-base">{activeSlug ? "Switch to this program" : "Enroll in this program"}</Button>
      <Link href="#degree-map" className="text-sm font-semibold text-navy-100 hover:text-white">View the degree map ↓</Link>
    </form>
  );
}
