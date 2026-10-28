import Link from "next/link";
import type { Metadata } from "next";
import { Seal } from "@/components/Standing";
import { directory } from "@/lib/people";

export const metadata: Metadata = { title: "Students" };

export default function Students() {
  const students = directory();
  return (
    <div className="wrap">
      <header className="page-head">
        <p className="eyebrow">The roll</p>
        <h1>Students</h1>
        <p className="lede">
          Everyone studying at Cornerstone who keeps a public profile, with their standing in each concentration.
          Masters, who have passed a concentration&apos;s capstone, are listed first.
        </p>
      </header>
      {students.length === 0 ? (
        <p className="notice measure">No one has a public profile yet.</p>
      ) : (
        <ul className="roll">
          {students.map((s) => (
            <li key={s.id}>
              <Link href={`/students/${s.id}`} className="roll-name">{s.name}</Link>
              {s.demo && <span className="demo-tag">sample</span>}
              <div className="roll-seals">
                {s.masters.map((c) => <Seal key={c} level="master" concentration={c} size="large" />)}
                {s.experts.map((c) => <Seal key={c} level="expert" concentration={c} size="large" />)}
                {s.masters.length + s.experts.length === 0 && (
                  <span className="muted">{s.studying === 0 ? "Not yet studying" : `Studying ${s.studying} ${s.studying === 1 ? "concentration" : "concentrations"}`}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
