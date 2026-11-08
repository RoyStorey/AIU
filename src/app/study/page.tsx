import Link from "next/link";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { signOut, withdrawFrom } from "@/app/actions";
import { ProfileForm } from "@/components/Forms";
import { ThemePicker } from "@/components/ThemePicker";
import { requireUser } from "@/lib/auth";
import { getStudent } from "@/lib/people";
import { enrollments } from "@/lib/progress";
import { DEFAULT_THEME, THEME_COOKIE, findTheme } from "@/lib/themes";

export const metadata: Metadata = { title: "Account" };

/**
 * The student's account: profile, appearance, and the programs they have
 * declared. Progress and plans live on the dashboard; this page is for
 * settings only.
 */
export default async function Account() {
  const user = await requireUser("/study");
  const programs = enrollments(user.id);
  const theme = findTheme((await cookies()).get(THEME_COOKIE)?.value)?.id ?? DEFAULT_THEME.id;
  const since = new Date(user.created_at.replace(" ", "T") + "Z").toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const profile = getStudent(user.id)!;
  const declared = (at: string) => new Date(at.replace(" ", "T") + "Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return (
    <div className="wrap">
      <header className="page-head">
        <p className="eyebrow">Student since {since}</p>
        <h1>Account</h1>
        <p className="lede">Your profile, the look of the site, and the programs you have declared. Your progress and plans are on your <Link href="/">dashboard</Link>.</p>
        <p className="study-links">
          <Link href={`/students/${user.id}`}>Your public profile</Link>
          <Link href="/study/notes">Your commonplace book</Link>
        </p>
      </header>

      <section className="section" style={{ paddingTop: 0 }} id="profile">
        <div className="section-head">
          <h2>Profile</h2>
          <span className="eyebrow"><Link href={`/students/${user.id}`}>View it</Link></span>
        </div>
        <div className="measure"><ProfileForm bio={profile.bio} visibility={profile.visibility} /></div>
      </section>

      <section className="section" id="programs">
        <div className="section-head">
          <h2>Declared programs</h2>
          <span className="eyebrow"><Link href="/faculties">Declare another →</Link></span>
        </div>
        {programs.length === 0 ? (
          <p className="muted measure">You have not declared a concentration. Visit the <Link href="/faculties">Faculties</Link> to choose one.</p>
        ) : (
          <ul className="account-programs">
            {programs.map(({ concentration, declared_at }) => (
              <li key={concentration.id}>
                <div>
                  <Link href={`/faculties/${concentration.subject_slug}/${concentration.slug}`}>{concentration.name}</Link>
                  <span className="muted"> · Faculty of {concentration.subject_name} · declared {declared(declared_at)}</span>
                </div>
                <form action={withdrawFrom.bind(null, concentration.id)}>
                  <button type="submit" className="link-button">Withdraw</button>
                </form>
              </li>
            ))}
          </ul>
        )}
        <p className="muted measure" style={{ fontSize: "0.95rem", marginTop: "1rem" }}>
          Withdrawing removes a program from your dashboard. Lessons you have completed stay on your record.
        </p>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Appearance</h2>
          <span className="eyebrow">Eighteen house palettes</span>
        </div>
        <p className="muted measure">Choose a palette to see the whole site in it. Your choice is remembered on this device.</p>
        <ThemePicker current={theme} />
      </section>

      <section className="section">
        <form action={signOut}>
          <button type="submit" className="button quiet">Sign out</button>
        </form>
      </section>
    </div>
  );
}
