/**
 * Writes numbers out in words, for speech models that read digits unreliably:
 * years as years ("1776" → "seventeen seventy-six"), decades ("1760s" →
 * "seventeen sixties"), ordinals ("18th" → "eighteenth"), sums of money, and
 * plain quantities ("250,000" → "two hundred fifty thousand").
 */

const ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve",
  "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const SCALES: [number, string][] = [[1e12, "trillion"], [1e9, "billion"], [1e6, "million"], [1e3, "thousand"]];

function belowHundred(n: number): string {
  if (n < 20) return ONES[n];
  return TENS[Math.floor(n / 10)] + (n % 10 ? `-${ONES[n % 10]}` : "");
}

function belowThousand(n: number): string {
  const h = Math.floor(n / 100);
  const rest = n % 100;
  return [h ? `${ONES[h]} hundred` : "", rest || !h ? belowHundred(rest) : ""].filter(Boolean).join(" ");
}

export function cardinal(n: number): string {
  if (!Number.isFinite(n)) return String(n);
  if (n < 0) return `minus ${cardinal(-n)}`;
  if (n < 1000) return belowThousand(n);
  const parts: string[] = [];
  let rest = Math.floor(n);
  for (const [size, name] of SCALES) {
    if (rest >= size) {
      parts.push(`${belowThousand(Math.floor(rest / size))} ${name}`);
      rest %= size;
    }
  }
  if (rest) parts.push(belowThousand(rest));
  return parts.join(" ");
}

const ORDINAL_WORDS: Record<string, string> = {
  one: "first", two: "second", three: "third", five: "fifth", eight: "eighth", nine: "ninth", twelve: "twelfth",
};
export function ordinal(n: number): string {
  const words = cardinal(n);
  return words.replace(/(\w+)$/, (last) => ORDINAL_WORDS[last] ?? (last.endsWith("y") ? `${last.slice(0, -1)}ieth` : `${last}th`));
}

/** A year as it is said: 1776 → seventeen seventy-six, 1800 → eighteen hundred, 1905 → nineteen oh five, 2008 → two thousand eight. */
export function year(n: number, plural = false): string {
  const s = (w: string) => (plural ? w.replace(/y$/, "ie") + "s" : w);
  if (n >= 2000 && n < 2010) return plural ? "two thousands" : cardinal(n);
  if (n % 1000 === 0) return s(cardinal(n));
  const hi = Math.floor(n / 100);
  const lo = n % 100;
  if (lo === 0) return `${belowHundred(hi)} ${plural ? "hundreds" : "hundred"}`;
  if (lo < 10) return `${belowHundred(hi)} oh ${s(ONES[lo])}`;
  return `${belowHundred(hi)} ${s(belowHundred(lo))}`;
}

export function spellNumbers(text: string): string {
  return text
    // Money: $40, $1.50, £3.
    .replace(/([$£])(\d[\d,]*)(?:\.(\d{1,2}))?\b/g, (_, sign: string, whole: string, cents?: string) => {
      const n = Number(whole.replace(/,/g, ""));
      const unit = sign === "$" ? (n === 1 ? "dollar" : "dollars") : (n === 1 ? "pound" : "pounds");
      const small = cents ? Number(cents.padEnd(2, "0")) : 0;
      const tail = small ? ` and ${cardinal(small)} ${sign === "$" ? (small === 1 ? "cent" : "cents") : "pence"}` : "";
      return `${cardinal(n)} ${unit}${tail}`;
    })
    // Decades and years: 1760s, 1776 (four-digit numbers from 1100 to 2099 are read as years).
    .replace(/\b(1[1-9]\d{2}|20\d{2})(s)?\b(?![,.]\d)/g, (_, y: string, s?: string) => year(Number(y), Boolean(s)))
    // Ordinals: 1st, 18th, 22nd.
    .replace(/\b(\d+)(st|nd|rd|th)\b/g, (_, n: string) => ordinal(Number(n)))
    // Decimals: 1.2 million → one point two million.
    .replace(/\b(\d+)\.(\d+)\b/g, (_, a: string, b: string) => `${cardinal(Number(a))} point ${b.split("").map((d) => ONES[Number(d)]).join(" ")}`)
    // Everything else: 250,000 → two hundred fifty thousand.
    .replace(/\b\d{1,3}(?:,\d{3})+\b|\b\d+\b/g, (m) => cardinal(Number(m.replace(/,/g, ""))));
}
