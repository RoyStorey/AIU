import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { Preparing } from "@/components/Preparing";
import { getInquiry } from "@/lib/registrar";

export const metadata: Metadata = { title: "Your Inquiry" };

export default async function InquiryPage({ params }: { params: Promise<{ id: string }> }) {
  const inquiry = getInquiry(Number((await params).id));
  if (!inquiry) notFound();
  if (inquiry.status === "ready" && inquiry.path) redirect(inquiry.path);

  return (
    <div className="wrap">
      <header className="page-head">
        <p className="eyebrow">An inquiry to the Registrar</p>
        <h1>“{inquiry.query}”</h1>
      </header>
      {inquiry.status === "failed" ? (
        <div className="notice measure">
          <h3>The faculty could not draft this program</h3>
          <p className="muted">{inquiry.error}</p>
          <p><Link href="/">Return to the front page</Link> and try phrasing your request differently.</p>
        </div>
      ) : (
        <Preparing title="The faculty is considering your request">
          <p>
            The University does not yet teach this subject. The faculty is deciding where it belongs and drafting a
            full program of study. This usually takes a minute or two.
          </p>
        </Preparing>
      )}
    </div>
  );
}
