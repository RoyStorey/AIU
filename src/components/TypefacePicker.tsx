"use client";

import { useState } from "react";
import { DEFAULT_TYPEFACE, FONT_COOKIE, TYPEFACES } from "@/lib/typefaces";

/** Chooses the reading typeface; it applies at once and is remembered on this device. */
export function TypefacePicker({ current }: { current: string }) {
  const [active, setActive] = useState(current);
  const chosen = TYPEFACES.find((t) => t.id === active) ?? TYPEFACES[0];

  function choose(id: string) {
    setActive(id);
    const root = document.documentElement;
    if (id === DEFAULT_TYPEFACE) {
      delete root.dataset.font;
      document.cookie = `${FONT_COOKIE}=; path=/; max-age=0; samesite=lax`;
    } else {
      root.dataset.font = id;
      document.cookie = `${FONT_COOKIE}=${id}; path=/; max-age=31536000; samesite=lax`;
    }
  }

  return (
    <div className="typeface-select">
      <div className="field">
        <label htmlFor="typeface">Typeface</label>
        <select id="typeface" value={active} onChange={(e) => choose(e.target.value)}>
          {TYPEFACES.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
        </select>
      </div>
      <p className="typeface-sample" aria-hidden="true">
        “Learning is not attained by chance; it must be sought for with ardor.”
      </p>
      <p className="theme-description">{chosen.description}</p>
    </div>
  );
}
