import Link from "next/link";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SignUpForm } from "@/components/Forms";
import { currentUser } from "@/lib/auth";

export const metadata: Metadata = { title: "Matriculate" };

export default async function SignUp({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const { next } = await searchParams;
  if (await currentUser()) redirect(next ?? "/study");
  return (
    <div className="wrap">
      <div className="auth">
        <p className="eyebrow" style={{ textAlign: "center" }}>Admission</p>
        <h1>Matriculate</h1>
        <p className="lede">Enroll as a student of the Academy. Admission is open to all; tuition is free.</p>
        <SignUpForm next={next} />
        <p className="alt">Already enrolled? <Link href={next ? `/login?next=${encodeURIComponent(next)}` : "/login"}>Sign in</Link></p>
      </div>
    </div>
  );
}
