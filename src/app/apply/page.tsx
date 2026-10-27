import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Crest } from "@/components/crest";
import { getCurrentUser } from "@/lib/auth";
import { getProgram, getPrograms } from "@/lib/content";
import { ApplyForm } from "./apply-form";

export const metadata: Metadata = { title: "Apply" };

export default async function ApplyPage({ searchParams }: { searchParams: Promise<{ program?: string }> }) {
  const { program } = await searchParams;
  if (await getCurrentUser()) redirect(program ? `/programs/${program}` : "/student");
  const programs = getPrograms().map((p) => ({ slug: p.slug, title: p.title }));
  const chosen = program ? getProgram(program) : undefined;

  return (
    <div className="grid flex-1 lg:grid-cols-2">
      <div className="hidden flex-col justify-between bg-navy-900 p-12 text-white lg:flex">
        <Crest className="h-20 w-18" />
        <div>
          <p className="eyebrow !text-gold-300">Admissions</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight">Begin your degree today.</h1>
          <p className="mt-4 max-w-md text-navy-200">
            Open admission, no fees, and your first term opens the moment you enroll.
          </p>
        </div>
        <p className="text-xs text-navy-400">AIU is an experimental, non-accredited institution.</p>
      </div>
      <div className="flex items-center justify-center px-4 py-14 sm:px-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold text-navy-900">Application for admission</h2>
          <p className="mt-2 text-sm text-navy-600">
            {chosen ? <>Applying to the <strong>{chosen.title}</strong>.</> : "Create your student account."} Already a student?{" "}
            <Link href="/login" className="font-semibold text-navy-700 hover:text-navy-900">Sign in</Link>
          </p>
          <div className="mt-8">
            <ApplyForm programs={programs} selected={chosen?.slug} />
          </div>
        </div>
      </div>
    </div>
  );
}
