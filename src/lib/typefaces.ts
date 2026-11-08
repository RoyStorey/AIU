/**
 * The typefaces a student can read Cornerstone in. Garamond is the house face;
 * the others are offered for comfort and taste. The choice is kept in a cookie
 * and set on <html data-font>, where globals.css maps it to the font stacks.
 */
export const FONT_COOKIE = "cornerstone-font";

export type Typeface = { id: string; name: string; description: string; family: string };

export const TYPEFACES: Typeface[] = [
  { id: "garamond", name: "Garamond", description: "The house face: Cormorant for headings, EB Garamond for reading. Classical and literary.", family: "var(--font-serif)" },
  { id: "crimson", name: "Crimson", description: "A compact old-style book face, like a well-made printed page.", family: "var(--font-crimson)" },
  { id: "literata", name: "Literata", description: "Designed for long reading on screens; sturdy and very clear.", family: "var(--font-literata)" },
  { id: "spectral", name: "Spectral", description: "Slender and elegant, with a light touch.", family: "var(--font-spectral)" },
  { id: "sans", name: "Source Sans", description: "A clean sans-serif for reading, with Cormorant headings kept for character.", family: "var(--font-sans)" },
];

export const DEFAULT_TYPEFACE = "garamond";

export const findTypeface = (id: string | undefined) => TYPEFACES.find((t) => t.id === id && t.id !== DEFAULT_TYPEFACE);
