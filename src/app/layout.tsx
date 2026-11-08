import type { Metadata } from "next";
import Link from "next/link";
import { EB_Garamond, Libre_Caslon_Display, Libre_Caslon_Text } from "next/font/google";
import { Crest } from "@/components/Crest";
import { cookies } from "next/headers";
import { currentUser, isAdmin } from "@/lib/auth";
import { THEME_COOKIE, findTheme, themeStylesheet } from "@/lib/themes";
import { signOut } from "@/app/actions";
import { NarrationProvider } from "@/components/narration/NarrationProvider";
import "./globals.css";

/** Caslon: the face in which the Declaration of Independence was first printed. */
const display = Libre_Caslon_Display({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-display",
});

const caslon = Libre_Caslon_Text({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-caslon",
});

/** Kept for Greek and other characters Caslon does not carry. */
const serif = EB_Garamond({
  subsets: ["latin", "latin-ext", "greek"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: { default: "Cornerstone", template: "%s · Cornerstone" },
  description:
    "An American academy of the humanities, with programs of study in Literature, Classics, History, Theology, and Linguistics.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await currentUser();
  const theme = findTheme((await cookies()).get(THEME_COOKIE)?.value);

  return (
    <html lang="en" className={`${display.variable} ${caslon.variable} ${serif.variable}`} data-theme={theme?.id}>
      <head>
        <style>{themeStylesheet}</style>
      </head>
      <body>
        <header className="masthead">
          <div className="wrap masthead-inner">
            <Link href="/" className="brand" aria-label="Cornerstone, home">
              <Crest className="brand-mark" />
              <span className="brand-name">
                Cornerstone
                <span>Est. 2026</span>
              </span>
            </Link>
            <nav className="nav" aria-label="Primary">
              <Link href="/faculties">Departments</Link>
              {user ? (
                <>
                  {isAdmin(user) && <Link href="/admin" className="nav-optional">Admin</Link>}
                  <Link href="/study" className="nav-optional">My Studies</Link>
                  <Link href="/" className="nav-strong">Dashboard</Link>
                  <form action={signOut} className="nav-optional">
                    <button type="submit">Sign out</button>
                  </form>
                </>
              ) : (
                <>
                  <Link href="/login" className="nav-optional">Sign in</Link>
                  <Link href="/signup" className="nav-strong">Enroll</Link>
                </>
              )}
            </nav>
          </div>
          <div className="wrap"><hr className="rule-double" /></div>
        </header>

        <NarrationProvider>
          <main>{children}</main>
        </NarrationProvider>

        <footer className="colophon">
          <div className="wrap">
            <div className="colophon-inner">
              <p><em>Cornerstone.</em> No degree is conferred; the learning is real.</p>
              <p className="gold-motto">“I cannot live without books.” <span>Thomas Jefferson</span></p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
