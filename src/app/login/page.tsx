import Link from "next/link";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SignInForm } from "@/components/Forms";
import { currentUser } from "@/lib/auth";

export const metadata: Metadata = { title: "Sign in" };

export default async function Login({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const { next } = await searchParams;
  if (await currentUser()) redirect(next ?? "/study");
  return (
    <div className="wrap">
      <div className="auth">
        <p className="eyebrow" style={{ textAlign: "center" }}>Welcome back</p>
        <h1>Sign in</h1>
        <p className="lede">Return to your studies.</p>
        <SignInForm next={next} />
        <p className="alt">New to the Academy? <Link href={next ? `/signup?next=${encodeURIComponent(next)}` : "/signup"}>Matriculate</Link></p>
      </div>
    </div>
  );
}
