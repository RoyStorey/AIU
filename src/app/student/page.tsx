import type { Metadata } from "next";
import Link from "next/link";
import { and, count, eq } from "drizzle-orm";
import { declareConcentration } from "@/app/actions/enrollment";
import { CourseTile } from "@/components/course-tile";
import { Button, ButtonLink, ProgressBar } from "@/components/ui";
import {
  canChangeConcentration,
  cumulativeGpa,
  getActiveEnrollment,
  getCourseRecords,
  getCourseWork,
  getLatestEnrollment,
  standing,
  type PlanTerm,
} from "@/lib/academics";
import { requireUser } from "@/lib/auth";
import { daysUntil, formatDate, termName, today } from "@/lib/calendar";
import { getCourse, getProgram } from "@/lib/content";
import { isSlot } from "@/lib/content/schema";
import { db, schema } from "@/lib/db";

export const metadata: Metadata = { title: "Dashboard" };

export default async function Dashboard({ searchParams }: { searchParams: Promise<{ welcome?: string }> }) {
  const { welcome } = await searchParams;
  const user = await requireUser();
  const active = await getActiveEnrollment(user.id);
  const records = await getCourseRecords(user.id);

  if (!active) {
    const latest = await getLatestEnrollment(user.id);
    if (latest?.status === "graduated") {
      const program = getProgram(latest.programSlug);
      return (
        <div className="container-page py-14">
          <div className="rounded-2xl bg-navy-900 p-10 text-white">
            <p className="eyebrow !text-gold-300">Congratulations</p>
            <h1 className="mt-3 text-4xl font-semibold">You completed the {program?.credential}.</h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/student/diploma" variant="gold">View your certificate</ButtonLink>
              <ButtonLink href="/student/transcript" variant="light">Transcript</ButtonLink>
              <ButtonLink href="/programs" variant="light">Start another program</ButtonLink>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container-page py-14">
        <div className="rounded-2xl border border-navy-100 bg-white p-10 text-center">
          <h1 className="text-3xl font-semibold text-navy-900">Welcome to AIU, {user.name.split(" ")[0]}.</h1>
          <p className="mx-auto mt-3 max-w-lg text-navy-700/80">You are not enrolled in a program yet. Choose a program and join its next cohort.</p>
          <ButtonLink href="/programs" className="mt-6">Choose a program</ButtonLink>
        </div>
      </div>
    );
  }

  const { program, enrollment, plan } = active;
  const now = today();
  const s = standing(plan, records, now);
  const gpa = cumulativeGpa(records);
  const concentration = program.concentrations.find((c) => c.slug === enrollment.concentration);
  const canDeclare = program.concentrations.length > 0 && canChangeConcentration(program, records);
  const [cohortSize] = await db
    .select({ n: count() })
    .from(schema.enrollments)
    .where(
      and(
        eq(schema.enrollments.programSlug, program.slug),
        eq(schema.enrollments.cohortStart, enrollment.cohortStart ?? ""),
        eq(schema.enrollments.status, "active"),
      ),
    );

  const focus = s.current ?? s.next; // the term to show on the dashboard
  const tiles = focus ? await termTiles(user.id, focus, records, now) : [];
  const unfinished = plan
    .filter((t) => t.calendar.end < now && t !== focus)
    .flatMap((t) => t.courses.filter((c) => !isSlot(c) && records.get(c)?.status !== "completed"));
  const after = focus ? plan.find((t) => t.index === focus.index + 1) : undefined;
  const cohortName = termName(plan[0].calendar);
  const weekOfTerm = s.current ? Math.floor((now.getTime() - s.current.calendar.start.getTime()) / (7 * 86400000)) + 1 : null;

  return (
    <div className="container-page space-y-10 py-10">
      {welcome && (
        <div className="rounded-xl border border-gold-200 bg-gold-50 px-6 py-4 text-sm text-navy-800">
          <strong className="font-semibold">Welcome to the {cohortName} cohort.</strong>{" "}
          {s.phase === "before"
            ? `Your first term begins ${formatDate(plan[0].calendar.start)}. Your courses open that morning.`
            : "Your first term is open. Begin with either course; each starts with Week 1."}
        </div>
      )}

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-navy-100 bg-white p-6 lg:col-span-2">
          <p className="eyebrow">My program</p>
          <h1 className="mt-2 text-3xl font-semibold text-navy-900">{program.credential}</h1>
          <p className="mt-1 text-sm text-navy-600">
            {concentration ? `${concentration.name} concentration` : program.concentrations.length ? "Concentration not yet declared" : ""}
            {program.concentrations.length > 0 && " · "}
            {cohortName} cohort · {cohortSize.n} student{cohortSize.n === 1 ? "" : "s"}
          </p>
          <div className="mt-6">
            <div className="mb-2 flex justify-between text-sm text-navy-600">
              <span>Program progress</span>
              <span className="font-medium text-navy-900">{s.completed} of {s.total} courses</span>
            </div>
            <ProgressBar value={s.percent} className="h-3" />
          </div>
          <p className="mt-3 text-xs text-navy-500">Final term ends {formatDate(plan.at(-1)!.calendar.end)}</p>
          <Link href="/student/plan" className="mt-4 inline-block text-sm font-semibold text-navy-700 hover:text-navy-900">View my plan →</Link>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
          {s.current ? (
            <Metric label="Current term" value={`Week ${Math.min(weekOfTerm!, 8)}`} sub={`${termName(s.current.calendar)} · Term ${s.current.index}`} />
          ) : s.next ? (
            <Metric label={s.phase === "before" ? "Classes begin" : "Next term begins"} value={`${daysUntil(s.next.calendar.start, now)} days`} sub={formatDate(s.next.calendar.start)} />
          ) : (
            <Metric label="Program" value="Final term done" sub="Finish any open courses" />
          )}
          <Metric label="GPA" value={gpa != null ? gpa.toFixed(2) : "—"} sub={gpa != null ? "4.00 scale" : "No grades yet"} />
        </div>
      </section>

      {s.pendingConcentration && canDeclare && (
        <section className="rounded-xl border border-navy-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-navy-900">Declare your concentration</h2>
          <p className="mt-1 text-sm text-navy-600">
            Your plan includes {plan.flatMap((t) => t.courses).filter(isSlot).length} concentration courses, beginning{" "}
            {formatDate(plan.find((t) => t.courses.some(isSlot))!.calendar.start)}.
          </p>
          <form action={declareConcentration} className="mt-4 flex flex-wrap items-center gap-3">
            <select name="concentration" required className="rounded-md border-0 bg-white px-3 py-2.5 text-sm shadow-sm ring-1 ring-inset ring-navy-200">
              {program.concentrations.map((c) => (
                <option key={c.slug} value={c.slug}>{c.name}</option>
              ))}
            </select>
            <Button>Declare</Button>
            <Link href={`/programs/${program.slug}#concentrations`} className="text-sm font-semibold text-navy-700">Compare concentrations</Link>
          </form>
        </section>
      )}

      {focus && (
        <section>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-2xl font-semibold text-navy-900">{s.current ? "This term" : "Your next term"}</h2>
            <p className="text-sm text-navy-500">
              {termName(focus.calendar)} · {formatDate(focus.calendar.start)} – {formatDate(focus.calendar.end)}
            </p>
          </div>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            {tiles.map((t) =>
              t.slot ? (
                <div key={t.code} className="rounded-xl border border-dashed border-navy-200 bg-white/60 p-6 text-sm text-navy-600">
                  <p className="font-semibold text-navy-900">Concentration course</p>
                  <p className="mt-1">Declare a concentration to see this course.</p>
                </div>
              ) : (
                <CourseTile key={t.code} code={t.code} record={t.record} percent={t.percent} overdue={t.overdue} opensAt={t.opensAt} />
              ),
            )}
          </div>
        </section>
      )}

      {unfinished.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-navy-900">Unfinished from earlier terms</h2>
          <p className="mt-1 text-sm text-navy-600">These courses stay open so you can catch up.</p>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {unfinished.map((code) => (
              <CourseTile key={code} code={code} record={records.get(code)} overdue />
            ))}
          </div>
        </section>
      )}

      {after && (
        <section>
          <h2 className="text-lg font-semibold text-navy-900">Up next · {termName(after.calendar)}</h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {after.courses.map((code) => (
              <li key={code} className="rounded-lg border border-dashed border-navy-200 bg-white/60 px-5 py-4 text-sm">
                {isSlot(code) ? (
                  <span className="italic text-navy-600">Concentration course</span>
                ) : (
                  <>
                    <span className="font-semibold text-navy-500">{code}</span>
                    <span className="ml-2 text-navy-800">{getCourse(code)?.title}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

async function termTiles(userId: string, term: PlanTerm, records: Awaited<ReturnType<typeof getCourseRecords>>, now: Date) {
  return Promise.all(
    term.courses.map(async (code) => {
      if (isSlot(code)) return { code, slot: true as const };
      const course = getCourse(code);
      const record = records.get(code);
      const work = record && course?.status === "published" ? await getCourseWork(userId, course, term.calendar, now) : null;
      return {
        code,
        slot: false as const,
        record,
        percent: work?.percent,
        overdue: work?.overdue,
        opensAt: now < term.calendar.start ? term.calendar.start : null,
      };
    }),
  );
}

function Metric({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-xl border border-navy-100 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">{label}</p>
      <p className="mt-2 font-display text-3xl font-semibold text-navy-900">{value}</p>
      <p className="mt-0.5 text-xs text-navy-500">{sub}</p>
    </div>
  );
}
