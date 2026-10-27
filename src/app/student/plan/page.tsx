import type { Metadata } from "next";
import { DegreeMap } from "@/components/degree-map";
import { ButtonLink } from "@/components/ui";
import { degreeProgress, getActiveEnrollment, getCourseRecords } from "@/lib/academics";
import { requireUser } from "@/lib/auth";

export const metadata: Metadata = { title: "Degree Plan" };

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
  const { currentTerm, earned, total } = degreeProgress(active.program, records);
  return (
    <div className="container-page py-10">
      <p className="eyebrow">Degree plan</p>
      <h1 className="mt-2 text-3xl font-semibold text-navy-900">{active.program.title}</h1>
      <p className="mt-2 text-sm text-navy-600">{earned} of {total} credits earned</p>
      <div className="mt-8">
        <DegreeMap
          program={active.program}
          status={(code) => {
            const r = records.get(code);
            if (r) return r.status;
            return currentTerm?.courses.includes(code) ? "current" : undefined;
          }}
        />
      </div>
    </div>
  );
}
