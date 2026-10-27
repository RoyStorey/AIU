import { Badge } from "@/components/ui";
import { getEnrollmentRows } from "@/lib/admin-data";
import { formatDate } from "@/lib/calendar";

export const metadata = { title: "Students" };

export default async function AdminStudents() {
  const rows = (await getEnrollmentRows()).sort((a, b) => b.enrollment.enrolledAt.getTime() - a.enrollment.enrolledAt.getTime());
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h1 className="text-3xl font-semibold text-navy-900">Students</h1>
        <a href="/admin/cohorts/export" className="text-sm font-semibold text-navy-700 hover:text-navy-900">Download all (CSV)</a>
      </div>
      {rows.length === 0 ? (
        <p className="mt-10 text-navy-600">No enrollments yet.</p>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-xl border border-navy-100 bg-white">
          <table className="w-full min-w-[48rem] text-left text-sm">
            <thead className="bg-navy-50 text-xs uppercase tracking-wider text-navy-600">
              <tr>
                <th className="px-5 py-3 font-semibold">Student</th>
                <th className="px-5 py-3 font-semibold">Program</th>
                <th className="px-5 py-3 font-semibold">Cohort</th>
                <th className="px-5 py-3 font-semibold">Completed</th>
                <th className="px-5 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-50">
              {rows.map((r) => (
                <tr key={r.enrollment.id}>
                  <td className="px-5 py-3">
                    <p className="font-medium text-navy-900">{r.user.name}</p>
                    <p className="text-xs text-navy-500">{r.user.email} · {r.user.studentNumber}</p>
                  </td>
                  <td className="px-5 py-3 text-navy-700">
                    {r.program?.title ?? r.enrollment.programSlug}
                    {r.concentration && <p className="text-xs text-navy-500">{r.concentration}</p>}
                  </td>
                  <td className="px-5 py-3 text-navy-700">{r.cohortName}</td>
                  <td className="px-5 py-3 text-navy-700">{r.coursesCompleted} courses</td>
                  <td className="px-5 py-3">
                    <Badge tone={r.enrollment.status === "active" ? "green" : "gray"}>{r.enrollment.status}</Badge>
                    <p className="mt-1 text-xs text-navy-400">Enrolled {formatDate(r.enrollment.enrolledAt)}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
