"use client";

import { useEffect } from "react";
import { useStore } from "@/lib/store";
import { SAMPLE_COURSES, SAMPLE_TOPICS } from "@/data/samples";

const SEEDED_KEY = "aiu-seeded-v1";

/** Puts the sample subjects on a brand-new learner's shelf, once, without awarding XP. */
export function Seeder() {
  const hydrated = useStore((s) => s.hydrated);
  useEffect(() => {
    if (!hydrated) return;
    try {
      if (localStorage.getItem(SEEDED_KEY)) return;
      localStorage.setItem(SEEDED_KEY, "1");
    } catch {
      /* storage blocked: seed anyway, harmlessly idempotent below */
    }
    useStore.setState((s) => ({
      topics: { ...Object.fromEntries(SAMPLE_TOPICS.map((t) => [t.id, t])), ...s.topics },
      courses: { ...Object.fromEntries(SAMPLE_COURSES.map((c) => [c.id, c])), ...s.courses },
    }));
  }, [hydrated]);
  return null;
}
