import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { academicYear, currentAcademicYearStart, formatDate } from "@/lib/calendar";

export const metadata: Metadata = { title: "Academic Calendar" };

export default function CalendarPage() {
  const start = currentAcademicYearStart();
  const years = [start, start + 1];
  const now = new Date();
  return (
    <>
      <PageHeader eyebrow="Academics" title="Academic Calendar">
        The AIU year is divided into five eight-week terms. Students may begin at any time and move at their own pace;
        the calendar below shows the standard schedule for students who complete one term every eight weeks.
      </PageHeader>
      <div className="container-page space-y-12 py-12">
        {years.map((y) => (
          <section key={y}>
            <h2 className="text-2xl font-semibold text-navy-900">Academic Year {y}–{String(y + 1).slice(2)}</h2>
            <div className="mt-5 overflow-hidden rounded-xl border border-navy-100">
              <table className="w-full text-left text-sm">
                <thead className="bg-navy-50 text-xs uppercase tracking-wider text-navy-600">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Term</th>
                    <th className="px-5 py-3 font-semibold">Begins</th>
                    <th className="px-5 py-3 font-semibold">Ends</th>
                    <th className="hidden px-5 py-3 font-semibold sm:table-cell">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-50">
                  {academicYear(y).map((t) => {
                    const status = now > t.end ? "Completed" : now >= t.start ? "In session" : "Upcoming";
                    return (
                      <tr key={t.session} className={status === "In session" ? "bg-gold-50/60" : ""}>
                        <td className="px-5 py-3.5 font-medium text-navy-900">{t.session}</td>
                        <td className="px-5 py-3.5 text-navy-700">{formatDate(t.start)}</td>
                        <td className="px-5 py-3.5 text-navy-700">{formatDate(t.end)}</td>
                        <td className="hidden px-5 py-3.5 text-navy-500 sm:table-cell">{status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        ))}
        <p className="text-sm text-navy-500">Winter recess falls between Fall II and Spring I; spring recess is the week before Spring II.</p>
      </div>
    </>
  );
}
