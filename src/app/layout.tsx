import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, EB_Garamond } from "next/font/google";
import { Crest } from "@/components/Crest";
import { cookies } from "next/headers";
import { currentUser } from "@/lib/auth";
import { THEME_COOKIE, findTheme, themeStylesheet } from "@/lib/themes";
import { signOut } from "@/app/actions";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const serif = EB_Garamond({
  subsets: ["latin", "latin-ext", "greek"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: { default: "Cornerstone", template: "%s · Cornerstone" },
  description:
    "An academy of the humanities, with programs of study in Literature, Classics, History, Theology, and Linguistics.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await currentUser();
  const theme = findTheme((await cookies()).get(THEME_COOKIE)?.value);

  return (
    <html lang="en" className={`${display.variable} ${serif.variable}`} data-theme={theme?.id}>
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
                <span>Founded MMXXVI</span>
              </span>
            </Link>
            <nav className="nav" aria-label="Primary">
              <Link href="/faculties">Faculties</Link>
              <Link href="/students" className="nav-optional">Students</Link>
              {user ? (
                <>
                  <Link href="/study" className="nav-strong">My Studies</Link>
                  <form action={signOut} className="nav-optional">
                    <button type="submit">Sign out</button>
                  </form>
                </>
              ) : (
                <>
                  <Link href="/login" className="nav-optional">Sign in</Link>
                  <Link href="/signup" className="nav-strong">Matriculate</Link>
                </>
              )}
            </nav>
          </div>
          <div className="wrap"><hr className="rule-double" /></div>
        </header>

        <main>{children}</main>

        <footer className="colophon">
          <div className="wrap">
            <div className="colophon-inner">
              <p><em>Cornerstone.</em> No degree is conferred; the learning is real.</p>
              <p className="gold-motto">Tolle, lege.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
