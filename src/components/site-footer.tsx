import Link from "next/link";
import { getSchools } from "@/lib/content";
import { getVisiblePrograms } from "@/lib/visibility";
import { Wordmark } from "./site-header";

export async function SiteFooter() {
  const programs = await getVisiblePrograms();
  const schools = getSchools().filter((s) => programs.some((p) => p.school === s.slug));
  return (
    <footer className="mt-auto bg-navy-950 text-navy-200">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Wordmark light />
          <p className="mt-5 text-sm leading-relaxed text-navy-300">
            Serious study in a single discipline, open to anyone with the curiosity to begin.
          </p>
        </div>
        <FooterCol title="Academics">
          <Link href="/programs">Programs</Link>
          <Link href="/courses">Course Catalog</Link>
          <Link href="/calendar">Academic Calendar</Link>
        </FooterCol>
        <FooterCol title="Schools">
          {schools.map((s) => (
            <Link key={s.slug} href={`/programs?school=${s.slug}`}>{s.name}</Link>
          ))}
        </FooterCol>
        <FooterCol title="Students">
          <Link href="/admissions">Admissions</Link>
          <Link href="/apply">Apply</Link>
          <Link href="/student">Student Portal</Link>
          <Link href="/about">About AIU</Link>
        </FooterCol>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Artificial Intelligence University</p>
          <p className="max-w-2xl sm:text-right">
            Curricula at AIU are written by AI models. AIU is an independent, experimental institution and is not
            accredited; its credentials are not academic degrees. <Link href="/about#approach" className="underline underline-offset-2 hover:text-navy-200">Learn more</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-gold-300">{title}</h3>
      <div className="mt-4 flex flex-col gap-2.5 text-sm [&_a:hover]:text-white">{children}</div>
    </div>
  );
}
