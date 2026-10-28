import Link from "next/link";
import type { Concentration, Subject } from "@/lib/catalogue";

export type ConcentrationTab = "program" | "capstone" | "students" | "common-room";

/** The heading and tabs shared by a concentration's program, capstone, students, and common room. */
export function ConcentrationHeader({ subject, concentration, active, title, lede, children }: {
  subject: Subject;
  concentration: Concentration;
  active: ConcentrationTab;
  title?: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  const base = `/faculties/${subject.slug}/${concentration.slug}`;
  const tab = (key: ConcentrationTab, href: string, label: string) => (
    <Link href={href} aria-current={active === key ? "page" : undefined}>{label}</Link>
  );
  return (
    <>
      <header className="page-head" style={{ paddingBottom: "1.5rem" }}>
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/faculties">Faculties</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/faculties/${subject.slug}`}>{subject.name}</Link>
          {active !== "program" && (
            <>
              <span aria-hidden="true">/</span>
              <Link href={base}>{concentration.name}</Link>
            </>
          )}
        </nav>
        <h1>{title ?? concentration.name}</h1>
        <p className="lede">{lede ?? concentration.description}</p>
        {children}
      </header>
      {concentration.status === "ready" && (
        <nav className="tabs" aria-label="Concentration">
          {tab("program", base, "Program")}
          {tab("capstone", `${base}/capstone`, "Capstone")}
          {tab("students", `${base}/students`, "Students")}
          {tab("common-room", `${base}/common-room`, "Common Room")}
        </nav>
      )}
    </>
  );
}
