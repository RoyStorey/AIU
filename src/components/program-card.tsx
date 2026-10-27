import Link from "next/link";
import { getSchool, programCredits } from "@/lib/content";
import type { Program } from "@/lib/content/schema";

export function ProgramCard({ program }: { program: Program }) {
  const school = getSchool(program.school);
  return (
    <Link
      href={`/programs/${program.slug}`}
      className="group flex flex-col rounded-xl border border-navy-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-navy-200 hover:shadow-md"
    >
      <p className="eyebrow">{school?.name ?? "AIU"}</p>
      <h3 className="mt-3 text-xl font-semibold text-navy-900 group-hover:text-navy-700">{program.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700/80">{program.tagline}</p>
      <div className="mt-6 flex items-center justify-between border-t border-navy-100 pt-4 text-xs font-medium text-navy-500">
        <span>{programCredits(program)} credits · 4 years · {program.terms.length} terms</span>
        <span className="text-navy-700 transition group-hover:translate-x-0.5">View program →</span>
      </div>
    </Link>
  );
}
