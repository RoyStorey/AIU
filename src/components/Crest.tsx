import { hashString } from "@/lib/links";

const TINCTURES = ["#ff5a36", "#ffcb2e", "#2ed59a", "#4d8bff", "#9b5de5", "#ff7ccf", "#fffaf0"];
const CHARGES = ["🦉", "🐌", "🦊", "🐙", "🦔", "🐉", "🦚", "🐸", "🦄", "🐝", "🦩", "🐢", "🦭", "🐿️", "🦥", "🐳"];
export const MOTTOS = [
  "Semper Curiosus",
  "Footnotes Before Breakfast",
  "Per Libros Ad Astra",
  "Why? Why? Why?",
  "Ad Infinitum Et Ultra",
  "Nullius In Verba",
  "Lege, Quaere, Mirare",
  "Carpe Librum",
  "Many Tabs, One Mind",
  "Festina Lente",
];

const SHIELD = "M10 8 H110 V60 C110 98 82 120 60 132 C38 120 10 98 10 60 Z";

/** A procedurally generated coat of arms: same name, same crest, forever. */
export function Crest({ seed, motto, size = 160 }: { seed: string; motto?: number; size?: number }) {
  const h = hashString(seed || "anonymous scholar");
  const a = TINCTURES[h % TINCTURES.length];
  let b = TINCTURES[(h >>> 4) % TINCTURES.length];
  if (b === a) b = TINCTURES[(h % TINCTURES.length + 3) % TINCTURES.length];
  const division = (h >>> 8) % 6;
  const charge = CHARGES[(h >>> 12) % CHARGES.length];
  const id = `crest-${h}`;
  const words = MOTTOS[(motto ?? h >>> 16) % MOTTOS.length];

  const fields: Record<number, React.ReactNode> = {
    0: <rect x="60" y="0" width="60" height="140" fill={b} />,
    1: <rect x="0" y="0" width="120" height="58" fill={b} />,
    2: <polygon points="0,0 120,140 0,140" fill={b} />,
    3: (
      <>
        <rect x="60" y="0" width="60" height="58" fill={b} />
        <rect x="0" y="58" width="60" height="82" fill={b} />
      </>
    ),
    4: <polygon points="0,140 60,62 120,140" fill={b} />,
    5: (
      <>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={i * 24 + 6} y="0" width="12" height="140" fill={b} />
        ))}
      </>
    ),
  };

  return (
    <svg viewBox="0 0 120 170" width={size} height={(size * 170) / 120} role="img" aria-label={`Crest: ${words}`}>
      <defs>
        <clipPath id={id}>
          <path d={SHIELD} />
        </clipPath>
      </defs>
      <path d={SHIELD} transform="translate(4 4)" fill="#16130f" />
      <g clipPath={`url(#${id})`}>
        <rect width="120" height="140" fill={a} />
        {fields[division]}
      </g>
      <path d={SHIELD} fill="none" stroke="#16130f" strokeWidth="4" />
      <circle cx="60" cy="66" r="25" fill="#fffaf0" stroke="#16130f" strokeWidth="3.5" />
      <text x="60" y="77" fontSize="30" textAnchor="middle">
        {charge}
      </text>
      <path d="M4 140 L18 132 L102 132 L116 140 L102 160 L18 160 Z" fill="#fffaf0" stroke="#16130f" strokeWidth="3" />
      <text
        x="60"
        y="150"
        fontSize={words.length > 18 ? 7 : 8.5}
        fontWeight="800"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fill="#16130f"
      >
        {words.toUpperCase()}
      </text>
    </svg>
  );
}
