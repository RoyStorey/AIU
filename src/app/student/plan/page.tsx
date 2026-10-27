import type { Metadata } from "next";
import Link from "next/link";
import { DegreeMap } from "@/components/degree-map";
import { ButtonLink } from "@/components/ui";
import { getActiveEnrollment, getCourseRecords, standing } from "@/lib/academics";
import { requireUser } from "@/lib/auth";
import { termName, today } from "@/lib/calendar";

export const metadata: Metadata = { title: "My Plan" };

export default async function PlanPage() {
  const user = await requireUser();
  const active = await getActiveEnrollment(user.id);
  if (!active) {
    return (
      <div className="container-page py-14 text-center">
        <p className="text-navy-700">You are not enrolled in a program.</p>
        <ButtonLink href="/programs" className="mt-4">Choose a program</ButtonLink>
      </div>
    );
  }
  const records = await getCourseRecords(user.id);
  const now = today();
  const { completed, total, current } = standing(active.plan, records, now);
  const concentration = active.program.concentrations.find((c) => c.slug === active.enrollment.concentration);
  return (
    <div className="container-page py-10">
      <p className="eyebrow">My plan</p>
      <h1 className="mt-2 text-3xl font-semibold text-navy-900">{active.program.credential}</h1>
      <p className="mt-2 text-sm text-navy-600">
        {termName(active.plan[0].calendar)} cohort
        {concentration && ` · ${concentration.name} concentration`} · {completed} of {total} courses complete ·{" "}
        <Link href={`/programs/${active.program.slug}`} className="font-semibold text-navy-700 hover:text-navy-900">Program details</Link>
      </p>
      <div className="mt-8">
        <DegreeMap
          terms={active.plan}
          status={(code, term) => {
            const r = records.get(code);
            if (r?.status === "completed") return "completed";
            if (term.calendar && term.calendar.end < now) return "incomplete";
            if (r) return "in_progress";
            return current?.index === term.index ? "current" : undefined;
          }}
        />
      </div>
    </div>
  );
}
