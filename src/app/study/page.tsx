import Link from "next/link";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { signOut, withdrawFrom } from "@/app/actions";
import { ConfirmButton, PasswordForm, ProfileForm } from "@/components/Forms";
import { ThemePicker } from "@/components/ThemePicker";
import { TypefacePicker } from "@/components/TypefacePicker";
import { requireUser } from "@/lib/auth";
import { getStudent } from "@/lib/people";
import { enrollments } from "@/lib/progress";
import { DEFAULT_THEME, THEME_COOKIE, findTheme } from "@/lib/themes";
import { DEFAULT_TYPEFACE, FONT_COOKIE, findTypeface } from "@/lib/typefaces";

export const metadata: Metadata = { title: "Account" };

/**
 * The student's account: profile, password, declared programs, and palette.
 * Progress and plans live on the dashboard; this page is for settings only.
 */
export default async function Account() {
  const user = await requireUser("/study");
  const programs = enrollments(user.id);
  const jar = await cookies();
  const theme = findTheme(jar.get(THEME_COOKIE)?.value)?.id ?? DEFAULT_THEME.id;
  const typeface = findTypeface(jar.get(FONT_COOKIE)?.value)?.id ?? DEFAULT_TYPEFACE;
  const since = new Date(user.created_at.replace(" ", "T") + "Z").toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const profile = getStudent(user.id)!;

  return (
    <div className="wrap account">
      <header className="account-head">
        <div>
          <p className="eyebrow">Student since {since} · {user.email}</p>
          <h1>Account</h1>
        </div>
        <p className="study-links">
          <Link href="/dashboard">Dashboard</Link>
          <Link href={`/students/${user.id}`}>Public profile</Link>
          <Link href="/study/notes">Commonplace book</Link>
        </p>
      </header>

      <div className="account-grid">
        <section aria-labelledby="profile-head" id="profile">
          <h2 id="profile-head">Profile</h2>
          <ProfileForm name={user.name} bio={profile.bio} visibility={profile.visibility} />
        </section>

        <section aria-labelledby="password-head" id="password">
          <h2 id="password-head">Password</h2>
          <PasswordForm />
        </section>

        <section aria-labelledby="programs-head" id="programs">
          <h2 id="programs-head">Declared programs</h2>
          {programs.length === 0 ? (
            <p className="muted">None yet. <Link href="/faculties">Visit the Faculties →</Link></p>
          ) : (
            <ul className="account-programs">
              {programs.map(({ concentration }) => (
                <li key={concentration.id}>
                  <div>
                    <Link href={`/faculties/${concentration.subject_slug}/${concentration.slug}`}>{concentration.name}</Link>
                    <span className="muted"> · {concentration.subject_name}</span>
                  </div>
                  <ConfirmButton
                    action={withdrawFrom.bind(null, concentration.id)}
                    label="Withdraw"
                    question={`Withdraw from ${concentration.name}? It will leave your dashboard. The lessons you have completed stay on your record, and you can declare it again at any time.`}
                  />
                </li>
              ))}
            </ul>
          )}
          <p className="account-note"><Link href="/faculties">Declare another →</Link></p>
        </section>

        <section aria-labelledby="appearance-head">
          <h2 id="appearance-head">Appearance</h2>
          <ThemePicker current={theme} />
          <TypefacePicker current={typeface} />
        </section>
      </div>

      <form action={signOut} className="account-signout">
        <button type="submit" className="link-button">Sign out</button>
      </form>
    </div>
  );
}
