"use client";

import { useState } from "react";
import { DEFAULT_THEME, THEME_COOKIE, THEMES, toneOf, type Tone } from "@/lib/themes";

type Option = { id: string; name: string; description: string; tone: Tone; swatch: { paper: string; ink: string; accent: string; gold: string; band: string } };

const OPTIONS: Option[] = [
  { ...DEFAULT_THEME, tone: "light" },
  ...THEMES.map((theme) => ({
    id: theme.id, name: theme.name, description: theme.description, tone: toneOf(theme), swatch: { paper: theme.tokens.paper, ink: theme.tokens.ink, accent: theme.tokens.accent, gold: theme.tokens.gold, band: theme.tokens.band },
  })),
];

const GROUPS: { tone: Tone; label: string }[] = [
  { tone: "light", label: "Light" },
  { tone: "soft", label: "Soft — muted, gentler than white" },
  { tone: "dusk", label: "Dusk — mid-dark, easier than full night" },
  { tone: "dark", label: "Dark" },
];

/**
 * A palette chooser: one dropdown, grouped by tone, with a small preview of the
 * chosen palette. The palette applies at once and is remembered in a cookie,
 * so every page renders in it.
 */
export function ThemePicker({ current }: { current: string }) {
  const [active, setActive] = useState(current);
  const chosen = OPTIONS.find((o) => o.id === active) ?? OPTIONS[0];

  function choose(id: string) {
    setActive(id);
    const root = document.documentElement;
    if (id === DEFAULT_THEME.id) {
      delete root.dataset.theme;
      document.cookie = `${THEME_COOKIE}=; path=/; max-age=0; samesite=lax`;
    } else {
      root.dataset.theme = id;
      document.cookie = `${THEME_COOKIE}=${id}; path=/; max-age=31536000; samesite=lax`;
    }
  }

  const { swatch } = chosen;
  return (
    <div className="theme-select">
      <span className="theme-swatch" style={{ background: swatch.paper }} aria-hidden="true">
        <span className="theme-swatch-title" style={{ color: swatch.ink }}>Aa</span>
        <span className="theme-swatch-accent" style={{ background: swatch.accent }} />
        <span className="theme-swatch-gold" style={{ background: swatch.gold }} />
        <span className="theme-swatch-band" style={{ background: swatch.band, borderTopColor: swatch.gold }} />
      </span>
      <div className="field">
        <label htmlFor="theme">Palette</label>
        <select id="theme" value={active} onChange={(e) => choose(e.target.value)}>
          {GROUPS.map(({ tone, label }) => (
            <optgroup key={tone} label={label}>
              {OPTIONS.filter((o) => o.tone === tone).map((o) => <option key={o.id} value={o.id}>{o.name}</option>)}
            </optgroup>
          ))}
        </select>
        <p className="theme-description">{chosen.description} Remembered on this device.</p>
      </div>
    </div>
  );
}
