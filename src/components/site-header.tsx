import Link from "next/link";
import { isAdminEmail } from "@/lib/admin";
import { getCurrentUser } from "@/lib/auth";
import { Crest } from "./crest";
import { ButtonLink } from "./ui";

const nav = [
  { href: "/programs", label: "Programs" },
  { href: "/courses", label: "Course Catalog" },
  { href: "/admissions", label: "Admissions" },
  { href: "/about", label: "About" },
];

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Crest className="h-11 w-10 shrink-0" />
      <span className="leading-tight">
        <span className={`block font-display text-lg font-semibold ${light ? "text-white" : "text-navy-900"}`}>
          Artificial Intelligence
        </span>
        <span className={`block text-[0.68rem] font-semibold uppercase tracking-[0.28em] ${light ? "text-gold-300" : "text-gold-600"}`}>
          University
        </span>
      </span>
    </Link>
  );
}

export async function SiteHeader() {
  const user = await getCurrentUser();
  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-white/95 backdrop-blur">
      <div className="hidden bg-navy-900 text-xs text-navy-200 sm:block">
        <div className="container-page flex h-8 items-center justify-end gap-6">
          <Link href="/calendar" className="hover:text-white">Academic Calendar</Link>
          <Link href="/about#approach" className="hover:text-white">Our Approach</Link>
          {user && isAdminEmail(user.email) && <Link href="/admin" className="text-gold-300 hover:text-white">Administration</Link>}
          {user ? (
            <Link href="/student" className="hover:text-white">Student Portal</Link>
          ) : (
            <Link href="/login" className="hover:text-white">Student Login</Link>
          )}
        </div>
      </div>
      <div className="container-page flex h-18 items-center justify-between gap-6">
        <Wordmark />
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm font-medium text-navy-800 hover:bg-navy-50">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          {user ? (
            <ButtonLink href="/student">My Courses</ButtonLink>
          ) : (
            <>
              <Link href="/login" className="text-sm font-medium text-navy-800 hover:text-navy-600">Sign in</Link>
              <ButtonLink href="/apply" variant="gold">Apply Now</ButtonLink>
            </>
          )}
        </div>
        <details className="group relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center rounded-md p-2 text-navy-800 hover:bg-navy-50 [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </summary>
          <div className="absolute right-0 mt-2 w-64 rounded-lg border border-navy-100 bg-white p-2 shadow-xl">
            {[...nav, { href: "/calendar", label: "Academic Calendar" }].map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-md px-3 py-2 text-sm font-medium text-navy-800 hover:bg-navy-50">
                {item.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-navy-100 pt-2">
              {user ? (
                <ButtonLink href="/student" className="w-full">My Courses</ButtonLink>
              ) : (
                <div className="grid gap-2">
                  <ButtonLink href="/apply" variant="gold" className="w-full">Apply Now</ButtonLink>
                  <ButtonLink href="/login" variant="secondary" className="w-full">Sign in</ButtonLink>
                </div>
              )}
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
