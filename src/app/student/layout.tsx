import Link from "next/link";
import { signOut } from "@/app/actions/auth";
import { requireUser } from "@/lib/auth";

export default async function StudentLayout({ children }: { children: React.ReactNode }) {
  const user = await requireUser();
  return (
    <div className="flex flex-1 flex-col bg-paper">
      <div className="border-b border-navy-100 bg-white">
        <div className="container-page flex flex-wrap items-center justify-between gap-4 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">Student Portal</p>
            <p className="mt-0.5 text-sm text-navy-700">
              <span className="font-semibold text-navy-900">{user.name}</span>
              <span className="mx-2 text-navy-300">|</span>
              Student ID {user.studentNumber}
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-1 text-sm font-medium">
            <Link href="/student" className="rounded-md px-3 py-2 text-navy-700 hover:bg-navy-50">Dashboard</Link>
            <Link href="/student/plan" className="rounded-md px-3 py-2 text-navy-700 hover:bg-navy-50">My Plan</Link>
            <Link href="/student/transcript" className="rounded-md px-3 py-2 text-navy-700 hover:bg-navy-50">Transcript</Link>
            <form action={signOut}>
              <button className="rounded-md px-3 py-2 text-navy-500 hover:bg-navy-50 hover:text-navy-800">Sign out</button>
            </form>
          </nav>
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
