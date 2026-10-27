import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { enrollInProgram } from "@/app/actions/enrollment";
import { Button } from "@/components/ui";
import { getActiveEnrollment } from "@/lib/academics";
import { getCurrentUser } from "@/lib/auth";
import { cohortSchedule, daysUntil, formatDate, openCohorts, termName, toDateKey, today } from "@/lib/calendar";
import { getCourse, getProgram } from "@/lib/content";
import { isProgramVisible } from "@/lib/visibility";

export const metadata: Metadata = { title: "Enroll" };

type Props = { params: Promise<{ slug: string }>; searchParams: Promise<{ error?: string }> };

export default async function EnrollPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { error } = await searchParams;
  const program = getProgram(slug);
  if (!program || !(await isProgramVisible(slug))) notFound();

  const user = await getCurrentUser();
  if (!user) redirect(`/apply?program=${slug}`);
  const active = await getActiveEnrollment(user.id);
  if (active?.program.slug === slug) redirect("/student");

  const cohorts = openCohorts();
  const now = today();

  return (
    <div className="flex-1 bg-paper">
      <div className="container-page max-w-3xl py-12">
        <Link href={`/programs/${slug}`} className="text-sm text-navy-500 hover:text-navy-800">← {program.title}</Link>
        <p className="mt-6 eyebrow">Enrollment</p>
        <h1 className="mt-2 text-4xl font-semibold text-navy-900">{program.credential}</h1>
        <p className="mt-3 text-navy-700/80">
          Students begin in cohorts. Everyone in your cohort starts on the same day, opens the same week of material each
          Monday, and moves into the next term together.
        </p>

        <form action={enrollInProgram} className="mt-10 space-y-10">
          <input type="hidden" name="program" value={slug} />

          <fieldset>
            <legend className="text-lg font-semibold text-navy-900">1. Choose your start term</legend>
            {error === "cohort" && <p className="mt-2 text-sm text-red-700">Please choose one of the open start terms.</p>}
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {cohorts.map((t, i) => {
                const end = cohortSchedule(t.start, program.terms.length).at(-1)!;
                const started = t.start <= now;
                return (
                  <label key={toDateKey(t.start)} className="cursor-pointer rounded-xl border border-navy-200 bg-white p-4 ring-navy-600 has-[:checked]:border-navy-600 has-[:checked]:ring-2">
                    <input type="radio" name="cohort" value={toDateKey(t.start)} defaultChecked={i === 0} className="sr-only" />
                    <span className="block font-semibold text-navy-900">{termName(t)} cohort</span>
                    <span className="mt-1 block text-sm text-navy-600">
                      {started ? `Began ${formatDate(t.start)} · late registration` : `Begins ${formatDate(t.start)}`}
                    </span>
                    <span className="mt-1 block text-xs text-navy-400">
                      {started ? "Join now" : `In ${daysUntil(t.start, now)} days`} · completes {termName(end)}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          {program.concentrations.length > 0 && (
            <fieldset>
              <legend className="text-lg font-semibold text-navy-900">2. Choose a concentration</legend>
              <p className="mt-1 text-sm text-navy-600">You can decide later and change it until your first concentration course begins.</p>
              <div className="mt-4 space-y-3">
                {program.concentrations.map((c) => (
                  <label key={c.slug} className="block cursor-pointer rounded-xl border border-navy-200 bg-white p-4 ring-navy-600 has-[:checked]:border-navy-600 has-[:checked]:ring-2">
                    <input type="radio" name="concentration" value={c.slug} className="sr-only" />
                    <span className="block font-semibold text-navy-900">{c.name}</span>
                    <span className="mt-1 block text-sm text-navy-700/80">{c.description}</span>
                    <span className="mt-2 block text-xs text-navy-500">{c.courses.map((code) => getCourse(code)?.title ?? code).join(" · ")}</span>
                  </label>
                ))}
                <label className="block cursor-pointer rounded-xl border border-dashed border-navy-200 bg-white/60 p-4 ring-navy-600 has-[:checked]:border-navy-600 has-[:checked]:ring-2">
                  <input type="radio" name="concentration" value="" defaultChecked className="sr-only" />
                  <span className="block font-semibold text-navy-900">Decide later</span>
                </label>
              </div>
            </fieldset>
          )}

          {active && (
            <div className="rounded-xl border border-gold-200 bg-gold-50 p-5 text-sm text-navy-800">
              <label className="flex items-start gap-3">
                <input type="checkbox" name="confirmSwitch" value="yes" required className="mt-1 accent-navy-700" />
                <span>
                  I understand this withdraws me from the <strong>{active.program.credential}</strong>. Courses I have
                  completed stay on my transcript and count toward this program if it includes them.
                </span>
              </label>
              {error === "confirm" && <p className="mt-2 text-red-700">Please confirm to switch programs.</p>}
            </div>
          )}

          <Button className="px-6 py-3 text-base">Confirm enrollment</Button>
        </form>
      </div>
    </div>
  );
}
