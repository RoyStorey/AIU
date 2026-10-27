/** The University's mark: an open book beneath a star, within a double ring. */
export function Crest({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" stroke="currentColor">
      <circle cx="32" cy="32" r="30.5" strokeWidth="1.2" />
      <circle cx="32" cy="32" r="27" strokeWidth="0.6" />
      <path d="M32 13.5l1.4 3.2 3.4.3-2.6 2.2.8 3.4-3-1.8-3 1.8.8-3.4-2.6-2.2 3.4-.3z" fill="currentColor" stroke="none" />
      <path
        d="M32 44.5c-4.6-3-10-3.6-15-2.6V27.4c5-1 10.4-.4 15 2.6m0 14.5c4.6-3 10-3.6 15-2.6V27.4c-5-1-10.4-.4-15 2.6m0 14.5V30"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M20 32c3.5-.5 6.8 0 9.5 1.4M20 36c3.5-.5 6.8 0 9.5 1.4M44 32c-3.5-.5-6.8 0-9.5 1.4M44 36c-3.5-.5-6.8 0-9.5 1.4" strokeWidth="0.6" />
    </svg>
  );
}
