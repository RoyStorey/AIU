export function Crest({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 56" className={className} aria-hidden="true">
      <path
        d="M24 2 L45 9 V27 C45 40 36 49 24 54 C12 49 3 40 3 27 V9 Z"
        fill="var(--color-navy-800)"
        stroke="var(--color-gold-400)"
        strokeWidth="2"
      />
      <path
        d="M24 7 L40 12.5 V27 C40 37.5 33 44.8 24 48.8 C15 44.8 8 37.5 8 27 V12.5 Z"
        fill="none"
        stroke="var(--color-gold-400)"
        strokeOpacity="0.45"
        strokeWidth="0.8"
      />
      {/* An open book whose pages are joined by a small network of nodes */}
      <path d="M13 33 C17 31 21 31 24 33 C27 31 31 31 35 33 V22 C31 20 27 20 24 22 C21 20 17 20 13 22 Z" fill="none" stroke="var(--color-gold-300)" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M24 22 V33" stroke="var(--color-gold-300)" strokeWidth="1.2" />
      <g fill="var(--color-gold-300)">
        <circle cx="24" cy="14" r="1.6" />
        <circle cx="18" cy="16.5" r="1.1" />
        <circle cx="30" cy="16.5" r="1.1" />
      </g>
      <path d="M18 16.5 L24 14 L30 16.5" stroke="var(--color-gold-300)" strokeWidth="0.8" fill="none" />
      <text x="24" y="43" textAnchor="middle" fontFamily="var(--font-serif)" fontSize="7" fontWeight="600" letterSpacing="1.2" fill="var(--color-gold-200)">
        AIU
      </text>
    </svg>
  );
}
