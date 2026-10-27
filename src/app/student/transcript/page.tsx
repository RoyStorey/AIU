import type { Metadata } from "next";
import { cumulativeGpa, getCourseRecords, getLatestEnrollment, letterGrade } from "@/lib/academics";
import { requireUser } from "@/lib/auth";
import { getCourse, getProgram } from "@/lib/content";
import { formatDate } from "@/lib/calendar";

export const metadata: Metadata = { title: "Transcript" };

export default async function TranscriptPage() {
  const user = await requireUser();
  const records = await getCourseRecords(user.id);
  const enrollment = await getLatestEnrollment(user.id);
  const program = enrollment ? getProgram(enrollment.programSlug) : undefined;
  const completed = [...records.values()]
    .filter((r) => r.status === "completed")
    .sort((a, b) => (a.completedAt?.getTime() ?? 0) - (b.completedAt?.getTime() ?? 0));
  const gpa = cumulativeGpa(records);
  const credits = completed.reduce((n, r) => n + (getCourse(r.courseCode)?.credits ?? 0), 0);

  return (
    <div className="container-page py-10">
      <div className="mx-auto max-w-4xl rounded-xl border border-navy-100 bg-white p-8 shadow-sm sm:p-10">
        <div className="flex flex-wrap items-start justify-between gap-6 border-b-2 border-navy-800 pb-6">
          <div>
            <p className="font-display text-2xl font-semibold text-navy-900">Artificial Intelligence University</p>
            <p className="text-sm uppercase tracking-[0.2em] text-navy-500">Unofficial Academic Transcript</p>
          </div>
          <dl className="text-sm text-navy-700">
            <div><dt className="inline font-semibold">Student:</dt> <dd className="inline">{user.name}</dd></div>
            <div><dt className="inline font-semibold">Student ID:</dt> <dd className="inline">{user.studentNumber}</dd></div>
            {program && <div><dt className="inline font-semibold">Program:</dt> <dd className="inline">{program.title}</dd></div>}
          </dl>
        </div>

        {completed.length === 0 ? (
          <p className="py-12 text-center text-navy-600">No completed courses yet. Grades appear here as you finish each course.</p>
        ) : (
          <table className="mt-6 w-full text-sm">
            <thead className="border-b border-navy-100 text-left text-xs uppercase tracking-wider text-navy-500">
              <tr>
                <th className="py-2 pr-4 font-semibold">Course</th>
                <th className="py-2 pr-4 font-semibold">Title</th>
                <th className="hidden py-2 pr-4 font-semibold sm:table-cell">Completed</th>
                <th className="py-2 pr-4 text-right font-semibold">Credits</th>
                <th className="py-2 text-right font-semibold">Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-50">
              {completed.map((r) => {
                const course = getCourse(r.courseCode);
                return (
                  <tr key={r.id}>
                    <td className="py-2.5 pr-4 font-medium text-navy-700">{r.courseCode}</td>
                    <td className="py-2.5 pr-4 text-navy-900">{course?.title}</td>
                    <td className="hidden py-2.5 pr-4 text-navy-500 sm:table-cell">{r.completedAt ? formatDate(r.completedAt) : ""}</td>
                    <td className="py-2.5 pr-4 text-right">{course?.credits}</td>
                    <td className="py-2.5 text-right font-semibold">{letterGrade(r.grade ?? 0).letter}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        <div className="mt-6 flex justify-end gap-10 border-t-2 border-navy-800 pt-4 text-sm">
          <p><span className="text-navy-500">Credits earned</span> <strong className="ml-2 text-navy-900">{credits}</strong></p>
          <p><span className="text-navy-500">Cumulative GPA</span> <strong className="ml-2 text-navy-900">{gpa != null ? gpa.toFixed(2) : "—"}</strong></p>
        </div>
      </div>
    </div>
  );
}
