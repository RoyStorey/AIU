"use client";

import { useEffect, useState } from "react";

let statusPromise: Promise<{ live: boolean; model: string }> | null = null;

/** Whether the server has an Anthropic API key (live mode) or is running on samples only. */
export function useLive() {
  const [live, setLive] = useState<boolean | null>(null);
  useEffect(() => {
    statusPromise ??= fetch("/api/status")
      .then((r) => r.json())
      .catch(() => ({ live: false, model: "" }));
    statusPromise.then((s) => setLive(s.live));
  }, []);
  return live;
}

/** Cycles through strings with a typewriter effect. */
export function useTypewriter(words: string[], enabled = true) {
  const [text, setText] = useState("");
  useEffect(() => {
    if (!enabled) return;
    let w = Math.floor(Math.random() * words.length);
    let i = 0;
    let deleting = false;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[w];
      i += deleting ? -1 : 1;
      setText(word.slice(0, i));
      let delay = deleting ? 35 : 75;
      if (!deleting && i === word.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && i === 0) {
        deleting = false;
        w = (w + 1) % words.length;
        delay = 300;
      }
      t = setTimeout(tick, delay);
    };
    t = setTimeout(tick, 400);
    return () => clearTimeout(t);
  }, [words, enabled]);
  return text;
}
