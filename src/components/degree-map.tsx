import Link from "next/link";
import { getCourse } from "@/lib/content";
import { courseSlug, termLabel, type Program } from "@/lib/content/schema";
import { categoryLabel } from "./ui";

type Status = "completed" | "in_progress" | "current" | undefined;

/** The full four-year plan, grouped by year. Optionally shows a student's progress. */
export function DegreeMap({ program, status }: { program: Program; status?: (code: string) => Status }) {
  const years = [1, 2, 3, 4].map((y) => program.terms.filter((t) => t.year === y));
  return (
    <div className="space-y-10">
      {years.map((terms, i) => (
        <div key={i}>
          <h3 className="flex items-baseline gap-3 text-xl font-semibold text-navy-900">
            Year {i + 1}
            <span className="font-sans text-sm font-normal text-navy-500">
              {terms.reduce((n, t) => n + t.courses.reduce((c, code) => c + (getCourse(code)?.credits ?? 0), 0), 0)} credits
            </span>
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {terms.map((term) => (
              <div key={term.index} className="rounded-lg border border-navy-100 bg-white">
                <div className="border-b border-navy-100 bg-navy-50/60 px-4 py-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy-600">{term.session}</p>
                  <p className="text-[0.7rem] text-navy-400">Term {term.index}</p>
                </div>
                <ul className="divide-y divide-navy-50">
                  {term.courses.map((code) => {
                    const course = getCourse(code);
                    const s = status?.(code);
                    return (
                      <li key={code}>
                        <Link href={`/courses/${courseSlug(code)}`} className="block px-4 py-3 hover:bg-navy-50/50" title={termLabel(term)}>
                          <span className="flex items-center justify-between gap-2">
                            <span className="text-xs font-semibold text-navy-500">{code}</span>
                            {s && <StatusDot status={s} />}
                          </span>
                          <span className="mt-0.5 block text-sm font-medium leading-snug text-navy-900">{course?.title ?? code}</span>
                          {course && <span className="mt-1 block text-[0.7rem] text-navy-400">{categoryLabel[course.category]} · {course.credits} cr</span>}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function StatusDot({ status }: { status: NonNullable<Status> }) {
  const map = {
    completed: ["bg-emerald-500", "Completed"],
    in_progress: ["bg-gold-400", "In progress"],
    current: ["bg-navy-400", "Current term"],
  } as const;
  const [color, label] = map[status];
  return (
    <span className="flex items-center gap-1 text-[0.65rem] font-medium text-navy-500">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      {label}
    </span>
  );
}
