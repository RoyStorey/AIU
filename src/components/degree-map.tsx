import Link from "next/link";
import { formatDate, termName, type CalendarTerm } from "@/lib/calendar";
import { getCourse } from "@/lib/content";
import { courseSlug, isSlot, slotNumber, termYear, type Term } from "@/lib/content/schema";
import { categoryLabel } from "./ui";

type Status = "completed" | "in_progress" | "current" | "incomplete" | undefined;
type MapTerm = Term & { calendar?: CalendarTerm };

/**
 * The full plan, grouped by year. With calendar dates it shows a student's
 * actual terms; otherwise terms are numbered. Unfilled concentration slots
 * render as placeholders.
 */
export function DegreeMap({ terms, status }: { terms: MapTerm[]; status?: (code: string, term: MapTerm) => Status }) {
  const years = [...new Set(terms.map((t) => termYear(t.index)))];
  return (
    <div className="space-y-10">
      {years.map((year) => {
        const inYear = terms.filter((t) => termYear(t.index) === year);
        return (
          <div key={year}>
            <h3 className="flex items-baseline gap-3 text-xl font-semibold text-navy-900">
              Year {year}
              <span className="font-sans text-sm font-normal text-navy-500">{inYear.reduce((n, t) => n + t.courses.length, 0)} courses</span>
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {inYear.map((term) => (
                <div key={term.index} className="rounded-lg border border-navy-100 bg-white">
                  <div className="border-b border-navy-100 bg-navy-50/60 px-4 py-2.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-600">
                      {term.calendar ? termName(term.calendar) : `Term ${term.index}`}
                    </p>
                    <p className="text-[0.7rem] text-navy-400">
                      {term.calendar ? `Term ${term.index} · begins ${formatDate(term.calendar.start)}` : "8 weeks"}
                    </p>
                  </div>
                  <ul className="divide-y divide-navy-50">
                    {term.courses.map((code) => (
                      <li key={code}>
                        {isSlot(code) ? (
                          <a href="#concentrations" className="block px-4 py-3 hover:bg-navy-50/50">
                            <span className="text-xs font-semibold text-gold-600">Concentration</span>
                            <span className="mt-0.5 block text-sm font-medium italic leading-snug text-navy-700">
                              Concentration course {slotNumber(code)}
                            </span>
                            <span className="mt-1 block text-[0.7rem] text-navy-400">Depends on your concentration</span>
                          </a>
                        ) : (
                          <CourseCell code={code} status={status?.(code, term)} />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CourseCell({ code, status }: { code: string; status: Status }) {
  const course = getCourse(code);
  return (
    <Link href={`/courses/${courseSlug(code)}`} className="block px-4 py-3 hover:bg-navy-50/50">
      <span className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold text-navy-500">{code}</span>
        {status && <StatusDot status={status} />}
      </span>
      <span className="mt-0.5 block text-sm font-medium leading-snug text-navy-900">{course?.title ?? code}</span>
      {course && <span className="mt-1 block text-[0.7rem] text-navy-400">{categoryLabel[course.category]}</span>}
    </Link>
  );
}

function StatusDot({ status }: { status: NonNullable<Status> }) {
  const map = {
    completed: ["bg-emerald-500", "Completed"],
    in_progress: ["bg-gold-400", "In progress"],
    current: ["bg-navy-400", "This term"],
    incomplete: ["bg-red-400", "Incomplete"],
  } as const;
  const [color, label] = map[status];
  return (
    <span className="flex items-center gap-1 text-[0.65rem] font-medium text-navy-500">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      {label}
    </span>
  );
}
