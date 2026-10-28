import Link from "next/link";
import type { Level } from "@/lib/progress";

/**
 * The seal shown beside a student's name. A Master's seal is gold and leads to
 * the capstone that earned it; an Expert's is a plain ring.
 */
export function Seal({ level, concentration, href, size = "small" }: {
  level: Level;
  concentration?: string;
  href?: string;
  size?: "small" | "large";
}) {
  if (level === "student") return null;
  const label = level === "master" ? "Master" : "Expert";
  const title = concentration ? `${label} of ${concentration}` : label;
  const body = (
    <span className={`seal seal-${level} seal-${size}`} title={title}>
      <svg viewBox="0 0 20 20" aria-hidden="true">
        {level === "master" ? (
          <>
            <circle cx="10" cy="10" r="9" className="seal-disc" />
            <path d="M10 4.2l1.6 3.6 3.9.4-2.9 2.6.8 3.9L10 12.8l-3.4 1.9.8-3.9-2.9-2.6 3.9-.4z" className="seal-star" />
          </>
        ) : (
          <>
            <circle cx="10" cy="10" r="8.2" className="seal-ring" />
            <circle cx="10" cy="10" r="3" className="seal-dot" />
          </>
        )}
      </svg>
      <span>{size === "large" ? title : label}</span>
    </span>
  );
  return href ? <Link href={href} className="seal-link">{body}</Link> : body;
}

/** A student's name, linked to their profile, with their seal in the concentration at hand. */
export function StudentName({ id, name, level, concentration, capstoneId, demo }: {
  id: number;
  name: string;
  level?: Level;
  concentration?: string;
  capstoneId?: number;
  demo?: boolean;
}) {
  return (
    <span className="student-name">
      <Link href={`/students/${id}`}>{name}</Link>
      {level && level !== "student" && (
        <Seal level={level} concentration={concentration} href={capstoneId ? `/capstones/${capstoneId}` : undefined} />
      )}
      {demo && <span className="demo-tag" title="A sample student, for demonstration">sample</span>}
    </span>
  );
}
