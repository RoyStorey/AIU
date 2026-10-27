/** Parses "1-5" or "1,3,7-9" into a set of numbers. */
export function parseRange(spec: string) {
  const out = new Set<number>();
  for (const part of spec.split(",")) {
    const [a, b] = part.split("-").map((n) => Number(n.trim()));
    for (let i = a; i <= (b || a); i++) out.add(i);
  }
  return out;
}
