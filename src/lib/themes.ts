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

/** light; dusk = mid-dark, softer than full night; dark = deep night. */
export type Tone = "light" | "dusk" | "dark";

export type Theme = { id: string; name: string; description: string; scheme: "light" | "dark"; tone?: Tone; tokens: Tokens };

export const toneOf = (t: Theme): Tone => t.tone ?? t.scheme;

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
  {
    id: "slate-dusk", name: "Slate Dusk", scheme: "dark", tone: "dusk",
    description: "Blue-grey evening slate, sky-blue links, soft gold.",
    tokens: { paper: "#2c3340", "paper-raised": "#343c4b", "paper-sunk": "#252b36", ink: "#eef1f5", "ink-soft": "#cfd6e0", muted: "#a3adbb", rule: "#3e4757", "rule-strong": "#586377", accent: "#9fc0ea", "accent-soft": "#bcd3f0", gold: "#dcbc7a", success: "#a6dbb5", danger: "#f2a99c", band: "#222833", "band-ink": "#eef1f5", "band-muted": "#a3adbb", "band-gold": "#dcbc7a" },
  },
  {
    id: "heather", name: "Heather & Rose", scheme: "dark", tone: "dusk",
    description: "Muted plum-grey with dusty rose and gold.",
    tokens: { paper: "#332c37", "paper-raised": "#3c3441", "paper-sunk": "#2a242e", ink: "#f3edf2", "ink-soft": "#d9cfd7", muted: "#ada1ab", rule: "#483f4d", "rule-strong": "#64586a", accent: "#e8adc0", "accent-soft": "#f1c6d3", gold: "#dcb877", success: "#a6dbb5", danger: "#f5aa9e", band: "#28222b", "band-ink": "#f3edf2", "band-muted": "#ada1ab", "band-gold": "#dcb877" },
  },
  {
    id: "sage-dusk", name: "Sage Dusk", scheme: "dark", tone: "dusk",
    description: "Grey-green like a garden at dusk, with brass.",
    tokens: { paper: "#2d3530", "paper-raised": "#363f39", "paper-sunk": "#252c28", ink: "#eff2ec", "ink-soft": "#d0d7cd", muted: "#a2ad9f", rule: "#414b44", "rule-strong": "#5b675e", accent: "#a9d3b2", "accent-soft": "#c3e2c9", gold: "#dcbb74", success: "#b4e0bd", danger: "#f2a99c", band: "#232a25", "band-ink": "#eff2ec", "band-muted": "#a2ad9f", "band-gold": "#dcbb74" },
  },
  {
    id: "study-den", name: "Study Den", scheme: "dark", tone: "dusk",
    description: "Warm walnut-brown with terracotta and gold.",
    tokens: { paper: "#36302b", "paper-raised": "#3f3833", "paper-sunk": "#2d2824", ink: "#f5eee4", "ink-soft": "#dcd2c5", muted: "#b0a497", rule: "#4b433c", "rule-strong": "#675d53", accent: "#eab48a", "accent-soft": "#f2c9a8", gold: "#dfbd78", success: "#a9d9b2", danger: "#f5a99c", band: "#2a2521", "band-ink": "#f5eee4", "band-muted": "#b0a497", "band-gold": "#dfbd78" },
  },
  {
    id: "harbor", name: "Harbor Fog", scheme: "dark", tone: "dusk",
    description: "Misty blue-teal with sea-glass accents.",
    tokens: { paper: "#283439", "paper-raised": "#303d43", "paper-sunk": "#212b2f", ink: "#edf3f3", "ink-soft": "#cdd9da", muted: "#9eaeb1", rule: "#3b494f", "rule-strong": "#53646b", accent: "#8fd3ca", "accent-soft": "#b0e2db", gold: "#dbb878", success: "#a9dcb6", danger: "#f2a99c", band: "#1f282c", "band-ink": "#edf3f3", "band-muted": "#9eaeb1", "band-gold": "#dbb878" },
  },
  {
    id: "nocturne", name: "Claret Nocturne", scheme: "dark", tone: "dark",
    description: "Deep wine-black with rose and old gold.",
    tokens: { paper: "#1a1215", "paper-raised": "#23191d", "paper-sunk": "#120c0f", ink: "#f0e6e5", "ink-soft": "#d0c2c2", muted: "#9e8d8f", rule: "#33252a", "rule-strong": "#4b363e", accent: "#e6a2ae", "accent-soft": "#f0c0c8", gold: "#d6b06c", success: "#9ccfa9", danger: "#ec9a8c", band: "#120c0f", "band-ink": "#f0e6e5", "band-muted": "#9e8d8f", "band-gold": "#d6b06c" },
  },
  {
    id: "obsidian", name: "Obsidian & Silver", scheme: "dark", tone: "dark",
    description: "Near-black monochrome with silver details.",
    tokens: { paper: "#121212", "paper-raised": "#1b1b1b", "paper-sunk": "#0b0b0b", ink: "#ececec", "ink-soft": "#c6c6c6", muted: "#919191", rule: "#272727", "rule-strong": "#3d3d3d", accent: "#d2d5db", "accent-soft": "#e6e8eb", gold: "#b9bec7", success: "#9ccfa9", danger: "#ec9a8c", band: "#0b0b0b", "band-ink": "#ececec", "band-muted": "#919191", "band-gold": "#c9ccd2" },
  },
  {
    id: "lagoon-night", name: "Lagoon at Night", scheme: "dark", tone: "dark",
    description: "Deep Venetian teal with bronze.",
    tokens: { paper: "#0e1c1d", "paper-raised": "#142628", "paper-sunk": "#091415", ink: "#e7f0ee", "ink-soft": "#c3d3d0", muted: "#87a09c", rule: "#1f3335", "rule-strong": "#334d4f", accent: "#86cdc5", "accent-soft": "#a9ddd7", gold: "#dbad74", success: "#9ccfa9", danger: "#ec9a8c", band: "#091415", "band-ink": "#e7f0ee", "band-muted": "#87a09c", "band-gold": "#dbad74" },
  },
  {
    id: "candlelight", name: "Candlelit Study", scheme: "dark", tone: "dark",
    description: "Dark umber and amber, like a desk by candlelight.",
    tokens: { paper: "#1b1612", "paper-raised": "#241e19", "paper-sunk": "#13100d", ink: "#f1e8d8", "ink-soft": "#d3c7b4", muted: "#a0937f", rule: "#322a23", "rule-strong": "#4a3f35", accent: "#e6ad66", "accent-soft": "#efc48c", gold: "#e6ad66", success: "#9ccfa9", danger: "#ec9a8c", band: "#13100d", "band-ink": "#f1e8d8", "band-muted": "#a0937f", "band-gold": "#e6ad66" },
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
