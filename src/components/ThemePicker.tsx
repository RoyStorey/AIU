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
  { tone: "dusk", label: "Dusk — mid-dark, easier on the eyes than full night" },
  { tone: "dark", label: "Dark" },
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
    <div role="radiogroup" aria-label="Color theme">
      {GROUPS.map(({ tone, label }) => (
        <div key={tone} className="theme-group">
          <h3 className="theme-group-label">{label}</h3>
          <div className="themes">
            {OPTIONS.filter((o) => o.tone === tone).map(({ id, name, description, swatch }) => (
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
        </div>
      ))}
    </div>
  );
}
