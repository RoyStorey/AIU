import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Crest } from "@/components/crest";
import { getLatestEnrollment } from "@/lib/academics";
import { requireUser } from "@/lib/auth";
import { getProgram } from "@/lib/content";
import { formatDate } from "@/lib/calendar";

export const metadata: Metadata = { title: "Certificate" };

export default async function DiplomaPage() {
  const user = await requireUser();
  const enrollment = await getLatestEnrollment(user.id);
  if (enrollment?.status !== "graduated") redirect("/student");
  const program = getProgram(enrollment.programSlug);

  return (
    <div className="container-page py-12">
      <div className="mx-auto max-w-3xl border-[10px] border-double border-gold-400 bg-[#fffdf7] p-3 shadow-lg">
        <div className="border border-gold-300 px-8 py-14 text-center sm:px-16">
          <Crest className="mx-auto h-24 w-20" />
          <p className="mt-6 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">Artificial Intelligence University</p>
          <p className="mt-8 font-display text-lg italic text-navy-700">upon the recommendation of the faculty hereby recognizes that</p>
          <p className="mt-6 font-display text-4xl font-semibold text-navy-900 sm:text-5xl">{user.name}</p>
          <p className="mt-6 font-display text-lg italic text-navy-700">has completed the full course of study for the</p>
          <p className="mt-4 font-display text-2xl font-semibold text-navy-900">{program?.credential}</p>
          <p className="mt-10 text-sm text-navy-600">Awarded {enrollment.endedAt ? formatDate(enrollment.endedAt) : ""} · Student ID {user.studentNumber}</p>
          <p className="mt-8 text-[0.65rem] uppercase tracking-widest text-navy-400">Certificate of completion · Non-accredited</p>
        </div>
      </div>
    </div>
  );
}
