import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "gold" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-navy-800 text-white hover:bg-navy-700 shadow-sm",
  secondary: "bg-white text-navy-800 ring-1 ring-inset ring-navy-200 hover:bg-navy-50",
  gold: "bg-gold-400 text-navy-950 hover:bg-gold-300 shadow-sm",
  ghost: "text-navy-700 hover:bg-navy-50",
};

export function buttonClass(variant: Variant = "primary", extra = "") {
  return `inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-500 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${extra}`;
}

export function ButtonLink({ variant, className = "", ...props }: ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link className={buttonClass(variant, className)} {...props} />;
}

export function Button({ variant, className = "", ...props }: ComponentProps<"button"> & { variant?: Variant }) {
  return <button className={buttonClass(variant, className)} {...props} />;
}

export function ProgressBar({ value, className = "" }: { value: number; className?: string }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={`h-2 w-full overflow-hidden rounded-full bg-navy-100 ${className}`} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full rounded-full bg-gold-400 transition-all" style={{ width: `${pct}%` }} />
    </div>
  );
}

export function Badge({ children, tone = "navy" }: { children: ReactNode; tone?: "navy" | "gold" | "green" | "gray" }) {
  const tones = {
    navy: "bg-navy-50 text-navy-700 ring-navy-200",
    gold: "bg-gold-50 text-gold-600 ring-gold-200",
    green: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    gray: "bg-gray-50 text-gray-600 ring-gray-200",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function PageHeader({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <section className="border-b border-navy-100 bg-paper">
      <div className="container-page py-12 sm:py-16">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-3 text-4xl font-semibold text-navy-900 sm:text-5xl">{title}</h1>
        {children && <div className="mt-4 max-w-3xl text-lg text-navy-700/80">{children}</div>}
      </div>
    </section>
  );
}

export function Field({ label, hint, ...props }: ComponentProps<"input"> & { label: string; hint?: string }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-navy-900">{label}</span>
      <input
        className="mt-1.5 block w-full rounded-md border-0 bg-white px-3 py-2.5 text-ink shadow-sm ring-1 ring-inset ring-navy-200 placeholder:text-navy-300 focus:ring-2 focus:ring-inset focus:ring-navy-500"
        {...props}
      />
      {hint && <span className="mt-1 block text-xs text-navy-500">{hint}</span>}
    </label>
  );
}

export const categoryLabel: Record<string, string> = {
  "general-education": "General Education",
  "major-core": "Major Core",
  "major-elective": "Major Elective",
  capstone: "Capstone",
};
