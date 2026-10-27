"use client";

import { create } from "zustand";
import { createJSONStorage, persist, type StateStorage } from "zustand/middleware";
import { del, get, set } from "idb-keyval";
import { BADGES, levelInfo, today, yesterday, XP, type Stats } from "./game";
import type { Course, GradeData, Topic } from "./schema";

export type ActivityResult = { score: number; answer?: string; grade?: GradeData; at: number };

export type CourseProgress = {
  lessonsDone: string[];
  activities: Record<string, ActivityResult>;
  completedAt?: number;
};

export type Profile = {
  name: string;
  motto: number;
  xp: number;
  streak: number;
  lastActive: string;
  badges: string[];
  sparks: string[];
  sound: boolean;
  libraryClicks: number;
};

/** Transient celebration events consumed by <Celebrations/>. */
export type Fx =
  | { id: number; kind: "xp"; amount: number; reason: string }
  | { id: number; kind: "level"; level: number; rank: string }
  | { id: number; kind: "badge"; badgeId: string }
  | { id: number; kind: "course"; title: string };

type State = {
  hydrated: boolean;
  profile: Profile;
  topics: Record<string, Topic>;
  courses: Record<string, Course>;
  progress: Record<string, CourseProgress>;
  fx: Fx[];

  addTopic: (t: Topic) => void;
  removeTopic: (id: string) => void;
  addOptions: (topicId: string, options: Topic["options"]) => void;
  addCourse: (c: Course) => void;
  completeLesson: (courseId: string, lessonId: string) => void;
  recordActivity: (courseId: string, activityId: string, result: Omit<ActivityResult, "at">, xp: number, kind: string) => void;
  collectSpark: (fact: string) => void;
  clickLibrary: () => void;
  award: (amount: number, reason: string) => void;
  setName: (name: string) => void;
  setMotto: (i: number) => void;
  toggleSound: () => void;
  dismissFx: (id: number) => void;
};

const idbStorage: StateStorage = {
  getItem: async (k) => (await get<string>(k)) ?? null,
  setItem: (k, v) => set(k, v),
  removeItem: (k) => del(k),
};

let fxId = 0;

const emptyProgress = (): CourseProgress => ({ lessonsDone: [], activities: {} });

export function computeStats(s: Pick<State, "profile" | "topics" | "courses" | "progress">): Stats {
  const results: { kind: string; score: number }[] = [];
  let lessonsDone = 0;
  let coursesDone = 0;
  for (const [cid, p] of Object.entries(s.progress)) {
    lessonsDone += p.lessonsDone.length;
    if (p.completedAt) coursesDone++;
    const course = s.courses[cid];
    if (!course) continue;
    const kinds = new Map(course.lessons.flatMap((l) => l.activities.map((a) => [a.id, a.type] as const)));
    for (const [aid, r] of Object.entries(p.activities)) results.push({ kind: kinds.get(aid) ?? "", score: r.score });
  }
  const of = (k: string) => results.filter((r) => r.kind === k);
  return {
    xp: s.profile.xp,
    streak: s.profile.streak,
    topics: Object.keys(s.topics).length,
    courses: Object.keys(s.courses).length,
    coursesDone,
    lessonsDone,
    essays: of("essay").length,
    bestEssay: Math.max(0, ...of("essay").map((r) => r.score)),
    perfectQuizzes: of("quiz").filter((r) => r.score >= 100).length,
    timelines: of("timeline").filter((r) => r.score >= 100).length,
    flashcards: of("flashcards").length,
    chess: of("chess").length,
    sparks: s.profile.sparks.length,
    libraryClicks: s.profile.libraryClicks,
  };
}

export const useStore = create<State>()(
  persist(
    (setState, getState) => {
      /** Every mutation that might earn something funnels through here: streak, XP, levels, badges. */
      const reward = (amount: number, reason: string) => {
        const s = getState();
        const p = { ...s.profile };
        const fx: Fx[] = [];
        const day = today();
        if (p.lastActive !== day) {
          p.streak = p.lastActive === yesterday() ? p.streak + 1 : 1;
          p.lastActive = day;
        }
        if (amount > 0) {
          const before = levelInfo(p.xp).level;
          p.xp += amount;
          fx.push({ id: ++fxId, kind: "xp", amount, reason });
          const after = levelInfo(p.xp);
          if (after.level > before) fx.push({ id: ++fxId, kind: "level", level: after.level, rank: after.rank });
        }
        const stats = computeStats({ ...s, profile: p });
        for (const b of BADGES) {
          if (!p.badges.includes(b.id) && b.test(stats)) {
            p.badges = [...p.badges, b.id];
            fx.push({ id: ++fxId, kind: "badge", badgeId: b.id });
          }
        }
        setState({ profile: p, fx: [...getState().fx, ...fx] });
      };

      return {
        hydrated: false,
        profile: {
          name: "",
          motto: 0,
          xp: 0,
          streak: 0,
          lastActive: "",
          badges: [],
          sparks: [],
          sound: true,
          libraryClicks: 0,
        },
        topics: {},
        courses: {},
        progress: {},
        fx: [],

        addTopic: (t) => {
          const first = Object.keys(getState().topics).length === 0;
          setState((s) => ({ topics: { ...s.topics, [t.id]: t } }));
          reward(first ? XP.firstTopic : 0, "New subject unlocked");
        },
        removeTopic: (id) =>
          setState((s) => {
            const topics = { ...s.topics };
            delete topics[id];
            return { topics };
          }),
        addOptions: (topicId, options) =>
          setState((s) => {
            const t = s.topics[topicId];
            return t ? { topics: { ...s.topics, [topicId]: { ...t, options: [...t.options, ...options] } } } : {};
          }),
        addCourse: (c) => {
          setState((s) => {
            const topic = s.topics[c.topicId];
            const topics = topic
              ? {
                  ...s.topics,
                  [topic.id]: {
                    ...topic,
                    options: topic.options.map((o) => (o.id === c.optionId ? { ...o, courseId: c.id } : o)),
                  },
                }
              : s.topics;
            return { courses: { ...s.courses, [c.id]: c }, topics };
          });
          reward(0, "");
        },
        completeLesson: (courseId, lessonId) => {
          const s = getState();
          const p = s.progress[courseId] ?? emptyProgress();
          if (p.lessonsDone.includes(lessonId)) return;
          const course = s.courses[courseId];
          const lessonsDone = [...p.lessonsDone, lessonId];
          const finished = !!course && course.lessons.every((l) => lessonsDone.includes(l.id));
          setState({
            progress: {
              ...s.progress,
              [courseId]: { ...p, lessonsDone, completedAt: finished ? Date.now() : p.completedAt },
            },
          });
          reward(XP.lesson, "Lesson complete");
          if (finished && course) {
            setState((st) => ({ fx: [...st.fx, { id: ++fxId, kind: "course", title: course.title }] }));
            reward(XP.course, "Course complete!");
          }
        },
        recordActivity: (courseId, activityId, result, xp, kind) => {
          const s = getState();
          const p = s.progress[courseId] ?? emptyProgress();
          const prev = p.activities[activityId];
          // Retries can improve your record; XP pays out on the first attempt and again on a first perfect score.
          const best = prev && prev.score > result.score ? prev : { ...result, at: Date.now() };
          const pays = !prev || (result.score === 100 && prev.score < 100);
          setState({ progress: { ...s.progress, [courseId]: { ...p, activities: { ...p.activities, [activityId]: best } } } });
          reward(pays ? xp : 0, kind);
        },
        collectSpark: (fact) => {
          if (getState().profile.sparks.includes(fact)) return;
          setState((s) => ({ profile: { ...s.profile, sparks: [...s.profile.sparks, fact] } }));
          reward(XP.spark, "Curiosity spark!");
        },
        clickLibrary: () => {
          setState((s) => ({ profile: { ...s.profile, libraryClicks: s.profile.libraryClicks + 1 } }));
          reward(0, "");
        },
        award: reward,
        setName: (name) => setState((s) => ({ profile: { ...s.profile, name } })),
        setMotto: (motto) => setState((s) => ({ profile: { ...s.profile, motto } })),
        toggleSound: () => setState((s) => ({ profile: { ...s.profile, sound: !s.profile.sound } })),
        dismissFx: (id) => setState((s) => ({ fx: s.fx.filter((f) => f.id !== id) })),
      };
    },
    {
      name: "aiu-v1",
      storage: createJSONStorage(() => idbStorage),
      partialize: (s) => ({ profile: s.profile, topics: s.topics, courses: s.courses, progress: s.progress }),
      onRehydrateStorage: () => () => useStore.setState({ hydrated: true }),
    },
  ),
);

export const useProgress = (courseId: string) => useStore((s) => s.progress[courseId]) ?? emptyProgress();
