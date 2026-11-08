"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "@/app/actions";

/**
 * The site's main navigation. Only the section the reader is in takes the
 * accent color: Faculties for the catalogue and its courses, Dashboard for the
 * front page, Account for settings and notes, Admin for administration.
 */
export function MainNav({ signedIn, admin }: { signedIn: boolean; admin: boolean }) {
  const path = usePathname() ?? "/";
  const section =
    path === "/" ? "dashboard"
    : path.startsWith("/admin") ? "admin"
    : path.startsWith("/study") ? "account"
    : path.startsWith("/faculties") || path.startsWith("/courses") || path.startsWith("/capstones") ? "faculties"
    : path.startsWith("/login") ? "login"
    : path.startsWith("/signup") ? "signup"
    : null;
  const current = (name: string) => (section === name ? "page" : undefined);

  return (
    <nav className="nav" aria-label="Primary">
      <Link href="/faculties" aria-current={current("faculties")}>Faculties</Link>
      {signedIn ? (
        <>
          {admin && <Link href="/admin" className="nav-optional" aria-current={current("admin")}>Admin</Link>}
          <Link href="/" className="nav-strong" aria-current={current("dashboard")}>Dashboard</Link>
          <Link href="/study" className="nav-optional" aria-current={current("account")}>Account</Link>
          <form action={signOut} className="nav-optional">
            <button type="submit">Sign out</button>
          </form>
        </>
      ) : (
        <>
          <Link href="/login" className="nav-optional" aria-current={current("login")}>Sign in</Link>
          <Link href="/signup" className="nav-strong" aria-current={current("signup")}>Enroll</Link>
        </>
      )}
    </nav>
  );
}
