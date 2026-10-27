import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Crest } from "@/components/crest";
import { getCurrentUser } from "@/lib/auth";
import { LoginForm } from "./login-form";

export const metadata: Metadata = { title: "Student Login" };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const { next } = await searchParams;
  if (await getCurrentUser()) redirect(next ?? "/student");
  return (
    <div className="flex flex-1 items-center justify-center bg-paper px-4 py-16">
      <div className="w-full max-w-md rounded-2xl border border-navy-100 bg-white p-8 shadow-sm sm:p-10">
        <Crest className="mx-auto h-16 w-14" />
        <h1 className="mt-5 text-center text-3xl font-semibold text-navy-900">Student Portal</h1>
        <p className="mt-2 text-center text-sm text-navy-600">Sign in to continue your studies.</p>
        <div className="mt-8">
          <LoginForm next={next} />
        </div>
        <p className="mt-6 text-center text-sm text-navy-600">
          New to AIU? <Link href="/apply" className="font-semibold text-navy-700 hover:text-navy-900">Apply for admission</Link>
        </p>
      </div>
    </div>
  );
}
