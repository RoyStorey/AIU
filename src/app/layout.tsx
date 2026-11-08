import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Crimson_Pro, EB_Garamond, Literata, Source_Sans_3, Spectral } from "next/font/google";
import { Crest } from "@/components/Crest";
import { cookies } from "next/headers";
import { currentUser, isAdmin } from "@/lib/auth";
import { THEME_COOKIE, findTheme, themeStylesheet } from "@/lib/themes";
import { FONT_COOKIE, findTypeface } from "@/lib/typefaces";
import { MainNav } from "@/components/MainNav";
import { NarrationProvider } from "@/components/narration/NarrationProvider";
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

// The optional typefaces are not preloaded: a browser fetches one only when a student chooses it.
const crimson = Crimson_Pro({ subsets: ["latin", "latin-ext"], style: ["normal", "italic"], variable: "--font-crimson", preload: false });
const literata = Literata({ subsets: ["latin", "latin-ext"], style: ["normal", "italic"], axes: ["opsz"], variable: "--font-literata", preload: false });
const spectral = Spectral({ subsets: ["latin", "latin-ext"], weight: ["300", "400", "500", "600"], style: ["normal", "italic"], variable: "--font-spectral", preload: false });
const sans = Source_Sans_3({ subsets: ["latin", "latin-ext"], style: ["normal", "italic"], variable: "--font-sans", preload: false });
const optional = [crimson, literata, spectral, sans].map((f) => f.variable).join(" ");

export const metadata: Metadata = {
  title: { default: "Cornerstone", template: "%s · Cornerstone" },
  description:
    "An American academy of the humanities, with programs of study in Literature, Classics, History, Theology, and Linguistics.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await currentUser();
  const jar = await cookies();
  const theme = findTheme(jar.get(THEME_COOKIE)?.value);
  const font = findTypeface(jar.get(FONT_COOKIE)?.value);

  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${optional}`} data-theme={theme?.id} data-font={font?.id}>
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
            <MainNav signedIn={!!user} admin={isAdmin(user)} />
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
