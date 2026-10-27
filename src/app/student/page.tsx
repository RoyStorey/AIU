import type { Metadata } from "next";
import Link from "next/link";
import { CourseTile } from "@/components/course-tile";
import { ButtonLink, ProgressBar } from "@/components/ui";
import { cumulativeGpa, degreeProgress, getActiveEnrollment, getCourseRecords, getCourseWork, getLatestEnrollment } from "@/lib/academics";
import { requireUser } from "@/lib/auth";
import { getCourse, getProgram } from "@/lib/content";
import { termLabel } from "@/lib/content/schema";

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
            <p className="eyebrow !text-gold-300">Congratulations, graduate</p>
            <h1 className="mt-3 text-4xl font-semibold">You completed the {program?.title}.</h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/student/diploma" variant="gold">View your diploma</ButtonLink>
              <ButtonLink href="/student/transcript" variant="light" className="">Transcript</ButtonLink>
              <ButtonLink href="/programs" variant="light" className="">Start another program</ButtonLink>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container-page py-14">
        <div className="rounded-2xl border border-navy-100 bg-white p-10 text-center">
          <h1 className="text-3xl font-semibold text-navy-900">Welcome to AIU, {user.name.split(" ")[0]}.</h1>
          <p className="mx-auto mt-3 max-w-lg text-navy-700/80">
            You are not enrolled in a program yet. Choose a degree program to open your first term.
          </p>
          <ButtonLink href="/programs" className="mt-6">Choose a program</ButtonLink>
        </div>
      </div>
    );
  }

  const { program } = active;
  const progress = degreeProgress(program, records);
  const gpa = cumulativeGpa(records);
  const term = progress.currentTerm;
  const percents = term
    ? await Promise.all(
        term.courses.map(async (code) => {
          const course = getCourse(code);
          return records.get(code) && course?.status === "published" ? (await getCourseWork(user.id, course)).percent : undefined;
        }),
      )
    : [];
  const nextTerm = term ? program.terms.find((t) => t.index === term.index + 1) : undefined;

  return (
    <div className="container-page space-y-10 py-10">
      {welcome && (
        <div className="rounded-xl border border-gold-200 bg-gold-50 px-6 py-4 text-sm text-navy-800">
          <strong className="font-semibold">Welcome to the {program.title}.</strong> Your first term is open. Begin with
          either course; each one starts with Week 1.
        </div>
      )}

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-navy-100 bg-white p-6 lg:col-span-2">
          <p className="eyebrow">My program</p>
          <h1 className="mt-2 text-3xl font-semibold text-navy-900">{program.title}</h1>
          <div className="mt-6">
            <div className="mb-2 flex justify-between text-sm text-navy-600">
              <span>Degree progress</span>
              <span className="font-medium text-navy-900">{progress.earned} of {progress.total} credits</span>
            </div>
            <ProgressBar value={progress.percent} className="h-3" />
          </div>
          <Link href="/student/plan" className="mt-5 inline-block text-sm font-semibold text-navy-700 hover:text-navy-900">View degree plan →</Link>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
          <Metric label="Current term" value={term ? `Term ${term.index}` : "—"} sub={term ? termLabel(term) : ""} />
          <Metric label="Cumulative GPA" value={gpa != null ? gpa.toFixed(2) : "—"} sub={gpa != null ? "4.00 scale" : "No grades yet"} />
        </div>
      </section>

      {term && (
        <section>
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold text-navy-900">This term</h2>
            <p className="text-sm text-navy-500">{termLabel(term)} · Term {term.index} of {program.terms.length}</p>
          </div>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            {term.courses.map((code, i) => (
              <CourseTile key={code} code={code} record={records.get(code)} percent={percents[i]} />
            ))}
          </div>
        </section>
      )}

      {nextTerm && (
        <section>
          <h2 className="text-lg font-semibold text-navy-900">Up next · {termLabel(nextTerm)}</h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {nextTerm.courses.map((code) => (
              <li key={code} className="rounded-lg border border-dashed border-navy-200 bg-white/60 px-5 py-4 text-sm">
                <span className="font-semibold text-navy-500">{code}</span>
                <span className="ml-2 text-navy-800">{getCourse(code)?.title}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
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
