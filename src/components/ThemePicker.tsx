"use client";

import { useState } from "react";
import { DEFAULT_THEME, THEME_COOKIE, THEMES } from "@/lib/themes";

type Option = { id: string; name: string; description: string; swatch: { paper: string; ink: string; accent: string; gold: string; band: string } };

const OPTIONS: Option[] = [
  DEFAULT_THEME,
  ...THEMES.map(({ id, name, description, tokens: t }) => ({
    id, name, description, swatch: { paper: t.paper, ink: t.ink, accent: t.accent, gold: t.gold, band: t.band },
  })),
];

/** Applies a palette at once and remembers it in a cookie, so every page renders in it. */
export function ThemePicker({ current }: { current: string }) {
  const [active, setActive] = useState(current);

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

  return (
    <div className="themes" role="radiogroup" aria-label="Color theme">
      {OPTIONS.map(({ id, name, description, swatch }) => (
        <button
          key={id}
          type="button"
          role="radio"
          aria-checked={active === id}
          className={`theme-option${active === id ? " active" : ""}`}
          onClick={() => choose(id)}
        >
          <span className="theme-swatch" style={{ background: swatch.paper }} aria-hidden="true">
            <span className="theme-swatch-title" style={{ color: swatch.ink }}>Aa</span>
            <span className="theme-swatch-accent" style={{ background: swatch.accent }} />
            <span className="theme-swatch-gold" style={{ background: swatch.gold }} />
            <span className="theme-swatch-band" style={{ background: swatch.band, borderTopColor: swatch.gold }} />
          </span>
          <span className="theme-name">{name}</span>
          <span className="theme-description">{description}</span>
        </button>
      ))}
    </div>
  );
}
