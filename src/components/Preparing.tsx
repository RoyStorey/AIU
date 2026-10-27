import { AutoRefresh } from "@/components/AutoRefresh";

export function Quill({ className = "quill" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M41 6C27 8 16 18 11 35l-3 7" />
      <path d="M41 6c-3 9-9 16-17 20l-9 4" />
      <path d="M24 16c-2 5-6 9-11 12" />
    </svg>
  );
}

/** Shown while the forge drafts something; keeps the page fresh until it is ready. */
export function Preparing({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="preparing" role="status" aria-live="polite">
      <Quill />
      <h2>{title}</h2>
      {children}
      <p className="muted"><small>This page will update on its own. You may leave and return.</small></p>
      <AutoRefresh />
    </div>
  );
}
