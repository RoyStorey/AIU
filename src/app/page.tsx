import Link from "next/link";
import { Crest } from "@/components/crest";
import { ProgramCard } from "@/components/program-card";
import { ButtonLink } from "@/components/ui";
import { getCourses, getPrograms, getSchools } from "@/lib/content";

export default function Home() {
  const programs = getPrograms();
  const schools = getSchools();
  const courses = getCourses();

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <HeroPattern />
        <div className="container-page relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="eyebrow !text-gold-300">Now enrolling for every term</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] sm:text-6xl">
              A complete undergraduate education, open to everyone.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100/90">
              Four-year degree programs organized into focused eight-week terms. Study a full curriculum at your own
              pace, earn credit course by course, and finish what you start.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/programs" variant="gold" className="px-6 py-3 text-base">Explore programs</ButtonLink>
              <ButtonLink href="/apply" variant="light" className="px-6 py-3 text-base">
                Apply now
              </ButtonLink>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <Crest className="mx-auto h-32 w-28" />
              <dl className="mt-8 grid grid-cols-2 gap-6 text-center">
                <Stat value="4" label="Years" />
                <Stat value="20" label="Eight-week terms" />
                <Stat value="40" label="Courses" />
                <Stat value="120" label="Credit hours" />
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-navy-100 bg-paper">
        <div className="container-page grid grid-cols-2 gap-6 py-8 text-center sm:grid-cols-4">
          <Fact value={String(programs.length)} label="Degree programs" />
          <Fact value={String(schools.length)} label="Academic schools" />
          <Fact value={String(courses.length)} label="Courses in the catalog" />
          <Fact value="$0" label="Tuition" />
        </div>
      </section>

      <section className="container-page py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Academics</p>
            <h2 className="mt-3 text-3xl font-semibold text-navy-900 sm:text-4xl">Degree programs</h2>
          </div>
          <Link href="/programs" className="text-sm font-semibold text-navy-700 hover:text-navy-900">All programs →</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.slice(0, 6).map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="container-page">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-navy-900 sm:text-4xl">
            The structure of a university, the flexibility of your own schedule.
          </h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              ["Choose a program", "Every program publishes its complete four-year degree map, so you can see every course before you apply."],
              ["Study in eight-week terms", "Each term pairs two courses. Every course runs eight weeks, with a lesson, quiz, and written assignment each week."],
              ["Earn your credit", "Pass weekly quizzes, complete assignments, and sit a final exam. Grades post to your transcript."],
              ["Graduate", "Complete all 40 courses and 120 credit hours to finish your program and receive your diploma."],
            ].map(([title, body], i) => (
              <li key={title} className="relative">
                <span className="font-display text-5xl font-semibold text-gold-300">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold text-navy-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/80">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page py-20">
        <p className="eyebrow">Our schools</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {schools.map((s) => (
            <Link key={s.slug} href={`/programs?school=${s.slug}`} className="group rounded-xl border-t-4 border-gold-400 bg-navy-50/60 p-7 transition hover:bg-navy-50">
              <h3 className="text-xl font-semibold text-navy-900">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-700/80">{s.description}</p>
              <p className="mt-5 text-sm font-semibold text-navy-700 group-hover:text-navy-900">
                {pluralize(programs.filter((p) => p.school === s.slug).length, "program")} →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-navy-100 bg-white">
        <div className="container-page grid gap-10 py-16 md:grid-cols-[1fr_2fr] md:items-center">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2 className="mt-3 text-3xl font-semibold text-navy-900">An open curriculum</h2>
          </div>
          <div className="text-navy-700/90">
            <p className="leading-relaxed">
              Every AIU course, from its syllabus to its weekly lessons and exams, is written by AI and published in
              full. Nothing is hidden behind a paywall or an admissions decision: you can read any course in the
              catalog before you enroll, and judge the work for yourself.
            </p>
            <Link href="/about#approach" className="mt-4 inline-block text-sm font-semibold text-navy-700 hover:text-navy-900">
              Read about how our courses are made →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy-800">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-14 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-white">Your first term can start today.</h2>
            <p className="mt-2 text-navy-200">Create your student account and enroll in a program in under a minute.</p>
          </div>
          <ButtonLink href="/apply" variant="gold" className="px-6 py-3 text-base">Start your application</ButtonLink>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd className="font-display text-4xl font-semibold text-gold-300">{value}</dd>
      <dd className="mt-1 text-xs uppercase tracking-wider text-navy-200">{label}</dd>
    </div>
  );
}

function Fact({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl font-semibold text-navy-900">{value}</p>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-navy-500">{label}</p>
    </div>
  );
}

function HeroPattern() {
  return (
    <svg className="absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden="true">
      <defs>
        <pattern id="hero-grid" width="56" height="56" patternUnits="userSpaceOnUse">
          <path d="M56 0H0V56" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="0" cy="0" r="2" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-grid)" />
    </svg>
  );
}

const pluralize = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;
