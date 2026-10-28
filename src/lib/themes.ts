/**
 * The house palettes a student can choose from My Studies. Each theme supplies
 * every color token in globals.css; the default theme is the one in globals.css
 * itself (navy and gold, following the system's light or dark setting).
 */

export const THEME_COOKIE = "cornerstone-theme";

type Tokens = {
  paper: string; "paper-raised": string; "paper-sunk": string;
  ink: string; "ink-soft": string; muted: string;
  rule: string; "rule-strong": string;
  accent: string; "accent-soft": string; gold: string;
  success: string; danger: string;
  band: string; "band-ink": string; "band-muted": string; "band-gold": string;
};

export type Theme = { id: string; name: string; description: string; scheme: "light" | "dark"; tokens: Tokens };

const light = { success: "#2f6b4f", danger: "#a3352b" };
const dark = { success: "#9ccfa9", danger: "#ec9a8c" };

export const THEMES: Theme[] = [
  {
    id: "oxford", name: "Oxford Stone", scheme: "light",
    description: "Oxford blue on cool stone, with antique gold.",
    tokens: {
      paper: "#f7f7f5", "paper-raised": "#ffffff", "paper-sunk": "#eeeeea",
      ink: "#14202e", "ink-soft": "#3a4655", muted: "#6f7782",
      rule: "#e2e2dc", "rule-strong": "#bdbdb3",
      accent: "#002147", "accent-soft": "#1c3d6e", gold: "#9b7a35", ...light,
      band: "#002147", "band-ink": "#ffffff", "band-muted": "#b5c0d3", "band-gold": "#d9b968",
    },
  },
  {
    id: "forest", name: "Forest & Brass", scheme: "light",
    description: "Deep library green and brass on warm white.",
    tokens: {
      paper: "#fbfaf6", "paper-raised": "#ffffff", "paper-sunk": "#f1efe7",
      ink: "#1a231d", "ink-soft": "#3b463f", muted: "#6d766f",
      rule: "#e3e1d6", "rule-strong": "#bdbaa8",
      accent: "#1f4a35", "accent-soft": "#2f6249", gold: "#a4802f", ...light,
      band: "#173827", "band-ink": "#f6f3ea", "band-muted": "#b3c2b8", "band-gold": "#d8b766",
    },
  },
  {
    id: "claret", name: "Claret & Slate", scheme: "light",
    description: "Crisp white with claret and a slate-grey footer.",
    tokens: {
      paper: "#ffffff", "paper-raised": "#fcfbfb", "paper-sunk": "#f4f3f4",
      ink: "#1d1c22", "ink-soft": "#3f3d47", muted: "#73717c",
      rule: "#e6e3e6", "rule-strong": "#c2bdc3",
      accent: "#6b1d33", "accent-soft": "#862c47", gold: "#9e7b3b", ...light,
      band: "#2b2a33", "band-ink": "#ffffff", "band-muted": "#b8b6c1", "band-gold": "#d9b56f",
    },
  },
  {
    id: "venetian", name: "Venetian Teal & Bronze", scheme: "light",
    description: "Lagoon teal and bronze on bright white.",
    tokens: {
      paper: "#fdfdfb", "paper-raised": "#ffffff", "paper-sunk": "#f0f4f3",
      ink: "#13201f", "ink-soft": "#34433f", muted: "#687672",
      rule: "#dfe6e4", "rule-strong": "#b4c3bf",
      accent: "#0f4c4a", "accent-soft": "#1d6663", gold: "#9a6b3a", ...light,
      band: "#0d3a39", "band-ink": "#f3f7f6", "band-muted": "#a9c3bf", "band-gold": "#d8a970",
    },
  },
  {
    id: "ivory", name: "Ivory & Oxblood", scheme: "light",
    description: "Warm parchment with an oxblood accent—the original look.",
    tokens: {
      paper: "#f7f3ea", "paper-raised": "#fbf8f2", "paper-sunk": "#efe9dc",
      ink: "#1e1b17", "ink-soft": "#46413a", muted: "#7c7468",
      rule: "#d9d0bf", "rule-strong": "#b9ad97",
      accent: "#6d1f2b", "accent-soft": "#8a3a45", gold: "#9c7c3c", success: "#3d5a3a", danger: "#8b2a1f",
      band: "#2a2420", "band-ink": "#f7f3ea", "band-muted": "#bfb4a3", "band-gold": "#d1ad68",
    },
  },
  {
    id: "graphite", name: "Graphite & Silver", scheme: "light",
    description: "Monochrome: black ink, white paper, silver details.",
    tokens: {
      paper: "#ffffff", "paper-raised": "#fafafa", "paper-sunk": "#f2f2f2",
      ink: "#111111", "ink-soft": "#383838", muted: "#6e6e6e",
      rule: "#e4e4e4", "rule-strong": "#bdbdbd",
      accent: "#1c1c1c", "accent-soft": "#3a3a3a", gold: "#868a91", ...light,
      band: "#161616", "band-ink": "#ffffff", "band-muted": "#a8a8a8", "band-gold": "#c9ccd2",
    },
  },
  {
    id: "midnight", name: "Midnight Library", scheme: "dark",
    description: "Ink-blue night with cream type and gold leaf.",
    tokens: {
      paper: "#0f1420", "paper-raised": "#161c2b", "paper-sunk": "#0a0e17",
      ink: "#ece6d8", "ink-soft": "#c9c2b2", muted: "#8e8a80",
      rule: "#232a3a", "rule-strong": "#384157",
      accent: "#d3b06a", "accent-soft": "#e2c88f", gold: "#d3b06a", ...dark,
      band: "#0a0e17", "band-ink": "#ece6d8", "band-muted": "#8e8a80", "band-gold": "#d3b06a",
    },
  },
  {
    id: "reading-room", name: "Reading Room", scheme: "dark",
    description: "Green-shaded lamplight: dark green with brass.",
    tokens: {
      paper: "#0f1a15", "paper-raised": "#15231c", "paper-sunk": "#0a120e",
      ink: "#ebe8dc", "ink-soft": "#c6c3b5", muted: "#8a9187",
      rule: "#213128", "rule-strong": "#34493c",
      accent: "#c9a45a", "accent-soft": "#dcbd7d", gold: "#c9a45a", ...dark,
      band: "#0a120e", "band-ink": "#ebe8dc", "band-muted": "#8a9187", "band-gold": "#c9a45a",
    },
  },
];

/** The default theme as shown in the picker; its colors live in globals.css. */
export const DEFAULT_THEME = {
  id: "navy",
  name: "Navy & Gold",
  description: "The current house colors. Follows your device's light or dark setting.",
  swatch: { paper: "#ffffff", ink: "#0e1a2f", accent: "#1a2d55", gold: "#a8822f", band: "#13224a" },
};

export const findTheme = (id: string | undefined) => THEMES.find((t) => t.id === id);

export const themeStylesheet = THEMES.map(({ id, scheme, tokens }) => {
  const vars = Object.entries(tokens).map(([k, v]) => `--${k}:${v}`).join(";");
  return `:root[data-theme="${id}"]{${vars};color-scheme:${scheme}}`;
}).join("\n");
