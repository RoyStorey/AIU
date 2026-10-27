import Link from "next/link";
import { requireAdmin } from "@/lib/admin";

export const metadata = { title: { default: "Administration", template: "%s | AIU Administration" } };

const nav = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/programs", label: "Programs" },
  { href: "/admin/cohorts", label: "Cohorts" },
  { href: "/admin/students", label: "Students" },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await requireAdmin();
  return (
    <div className="flex flex-1 flex-col bg-paper">
      <div className="border-b border-navy-100 bg-white">
        <div className="container-page flex flex-wrap items-center justify-between gap-4 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">Administration</p>
            <p className="mt-0.5 text-sm text-navy-700">Signed in as {user.email}</p>
          </div>
          <nav className="flex flex-wrap gap-1 text-sm font-medium">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="rounded-md px-3 py-2 text-navy-700 hover:bg-navy-50">{n.label}</Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="container-page flex-1 py-10">{children}</div>
    </div>
  );
}
