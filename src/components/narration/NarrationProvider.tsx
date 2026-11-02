"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { NarrationBar } from "@/components/narration/NarrationBar";
import { PlayFromHere } from "@/components/narration/PlayFromHere";
import { SILENCE, deviceVoices, resumeKey, sentences, store, stored, type DeviceVoice, type ResumePoint } from "@/components/narration/device";

export type Block = { id: string; kind: string; text: string; words: number; url: string | null; ready: boolean; duration: number };
export type StudioVoiceInfo = { id: string; name: string; description: string; preview: string };
export type Manifest = {
  course: { id: string; code: string; title: string };
  lesson: { number: number; title: string; pages: number };
  page: { number: number; title: string; href: string };
  voice: string | null;
  studio: { voices: StudioVoiceInfo[]; canRender: boolean; reason?: string };
  blocks: Block[];
  next: { lesson: number; page: number; newLesson?: boolean } | null;
  prev: { lesson: number; page: number } | null;
};
export type Place = { courseId: string; lesson: number; page: number };
export type Sleep = { kind: "minutes"; until: number } | { kind: "page" } | { kind: "lesson" } | null;
export type Settings = { voice: string; rate: number; follow: boolean; continueLessons: boolean };

type State = {
  manifest: Manifest | null;
  index: number;
  mode: "studio" | "device";
  playing: boolean;
  waiting: boolean;
  finished: boolean;
  notice: string | null;
  /** Seconds into the current passage. */
  offset: number;
  sentence: number;
  sleep: Sleep;
  settings: Settings;
  devices: DeviceVoice[];
  sheet: boolean;
};

const SETTINGS_KEY = "cornerstone-listen-settings";
const DEFAULTS: Settings = { voice: "", rate: 1, follow: true, continueLessons: false };
/** Device voices read faster than the studio estimates assume. */
const deviceSeconds = (words: number, rate: number) => words / 2.6 / rate + 0.3;

type Api = {
  state: State;
  getHere: () => Place | null;
  setHere: (p: Place | null) => void;
  start: (p: Place & { block?: string; offset?: number }) => void;
  toggle: () => void;
  pause: () => void;
  seek: (seconds: number) => void;
  skip: (seconds: number) => void;
  passage: (delta: number) => void;
  page: (delta: number) => void;
  setRate: (r: number) => void;
  setVoice: (id: string) => void;
  setSleep: (s: Sleep) => void;
  setOption: (patch: Partial<Settings>) => void;
  openSheet: (open: boolean) => void;
  close: () => void;
  durations: number[];
  position: number;
  total: number;
};

const Ctx = createContext<Api | null>(null);
export const useNarration = () => useContext(Ctx);

export function NarrationProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const audio = useRef<HTMLAudioElement | null>(null);
  const st = useRef<State>({
    manifest: null, index: 0, mode: "studio", playing: false, waiting: false, finished: false, notice: null,
    offset: 0, sentence: 0, sleep: null, settings: DEFAULTS, devices: [], sheet: false,
  });
  const here = useRef<Place | null>(null);
  const [, render] = useReducer((n: number) => n + 1, 0);
  const set = useCallback((patch: Partial<State>) => { st.current = { ...st.current, ...patch }; render(); }, []);
  const token = useRef(0); // invalidates callbacks from speech that has been cancelled
  const retried = useRef<string | null>(null);
  const switching = useRef(false); // a new passage is loading; its 'pause' from the old one is not the listener pausing
  const upcoming = useRef<Promise<Manifest> | null>(null);
  const prefetched = useRef(new Set<string>());
  const pathRef = useRef(pathname);
  const lastScroll = useRef(0);
  const pendingFollow = useRef<{ from: string; to: string } | null>(null);
  pathRef.current = pathname;

  /* ---------- Settings and device voices ---------- */

  useEffect(() => {
    const saved = stored<Settings>(SETTINGS_KEY);
    if (saved) set({ settings: { ...DEFAULTS, ...saved } });
    if (!("speechSynthesis" in window)) return;
    const update = () => set({ devices: deviceVoices() });
    update();
    window.speechSynthesis.addEventListener?.("voiceschanged", update);
    return () => window.speechSynthesis.removeEventListener?.("voiceschanged", update);
  }, [set]);

  const saveSettings = useCallback((patch: Partial<Settings>) => {
    const settings = { ...st.current.settings, ...patch };
    store(SETTINGS_KEY, settings);
    set({ settings });
  }, [set]);

  /* ---------- Loading pages ---------- */

  const studioVoice = () => (st.current.settings.voice.startsWith("device:") ? "" : st.current.settings.voice);

  const fetchManifest = useCallback(async (p: Place, voice = studioVoice()): Promise<Manifest> => {
    const res = await fetch(`/api/narration/${p.courseId}/${p.lesson}/${p.page}?voice=${encodeURIComponent(voice)}`);
    if (!res.ok) throw new Error((await res.json().catch(() => null))?.error ?? "This page could not be loaded for listening.");
    return res.json();
  }, []);

  /** Decides how a page will be read: in the chosen studio voice if its audio can be had, otherwise in a device voice. */
  const resolve = useCallback(async (p: Place): Promise<{ manifest: Manifest; mode: State["mode"]; notice: string | null }> => {
    const wanted = st.current.settings.voice;
    let manifest = await fetchManifest(p);
    if (wanted.startsWith("device:")) return { manifest, mode: "device", notice: null };
    const studio = manifest.studio.voices;
    if (!studio.length) {
      return { manifest, mode: "device", notice: st.current.devices.length ? null : "No voices are available on this device or server." };
    }
    if (!manifest.voice) {
      // No studio voice chosen yet (or the chosen one is gone): use the first the server offers.
      manifest = await fetchManifest(p, studio[0].id);
      if (!wanted) saveSettings({ voice: studio[0].id });
    }
    const missing = manifest.blocks.some((b) => !b.ready);
    if (missing && !manifest.studio.canRender) {
      return {
        manifest, mode: "device",
        notice: `${studio.find((v) => v.id === manifest.voice)?.name ?? "The studio voice"} hasn't recorded this page yet` +
          (manifest.studio.reason ? "" : " (sign in to have it recorded)") + ", so your device's voice is reading it.",
      };
    }
    return { manifest, mode: "studio", notice: null };
  }, [fetchManifest, saveSettings]);

  /* ---------- Media Session (lock screen, headphones, car) ---------- */

  const durations = useMemo(() => {
    const s = st.current;
    if (!s.manifest) return [];
    return s.manifest.blocks.map((b) => (s.mode === "device" ? deviceSeconds(b.words, s.settings.rate) : b.duration));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [st.current.manifest, st.current.mode, st.current.settings.rate]);
  const before = (i: number) => durations.slice(0, i).reduce((a, b) => a + b, 0);
  const total = durations.reduce((a, b) => a + b, 0);
  const position = st.current.manifest ? before(st.current.index) + st.current.offset : 0;

  const updateMetadata = useCallback(() => {
    const m = st.current.manifest;
    if (!m || !("mediaSession" in navigator)) return;
    navigator.mediaSession.metadata = new MediaMetadata({
      title: m.page.title,
      artist: `${m.course.code} · Lesson ${m.lesson.number}: ${m.lesson.title}`,
      album: `${m.course.title} · Cornerstone`,
      artwork: [{ src: "/narration/artwork-512.png", sizes: "512x512", type: "image/png" }],
    });
  }, []);

  /* ---------- Saving the place ---------- */

  const lastSave = useRef(0);
  const savePlace = useCallback((force = false) => {
    const s = st.current;
    const m = s.manifest;
    if (!m || (!force && Date.now() - lastSave.current < 4000)) return;
    lastSave.current = Date.now();
    const point: ResumePoint = { page: m.page.number, block: m.blocks[s.index]?.id ?? "title", offset: s.mode === "studio" ? s.offset : 0, at: Date.now(), title: m.page.title };
    store(resumeKey(m.course.id, m.lesson.number), point);
  }, []);

  /* ---------- Playing ---------- */

  const stopSpeech = () => {
    token.current++;
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  };

  const prefetchAhead = useCallback((from: number) => {
    const m = st.current.manifest;
    if (!m || st.current.mode !== "studio") return;
    for (const b of m.blocks.slice(from + 1, from + 3)) {
      if (b.url && !prefetched.current.has(b.url)) {
        prefetched.current.add(b.url);
        fetch(b.url).then((r) => r.blob()).catch(() => prefetched.current.delete(b.url!));
      }
    }
    // Near the end of a page, ask for the next one, which also starts its first passages rendering.
    if (from >= m.blocks.length - 2 && m.next && !upcoming.current) {
      upcoming.current = fetchManifest({ courseId: m.course.id, lesson: m.next.lesson, page: m.next.page });
      upcoming.current.catch(() => { upcoming.current = null; });
    }
  }, [fetchManifest]);

  // Declared with refs so the media callbacks always reach the current versions.
  const advanceRef = useRef<() => void>(() => {});

  const speak = useCallback((index: number, sentence: number) => {
    const s = st.current;
    const block = s.manifest?.blocks[index];
    if (!block) return;
    stopSpeech();
    const my = token.current;
    const parts = sentences(block.text);
    if (sentence >= parts.length) { advanceRef.current(); return; }
    const u = new SpeechSynthesisUtterance(parts[sentence]);
    const chosen = s.devices.find((d) => d.id === s.settings.voice) ?? s.devices[0];
    if (chosen) { u.voice = chosen.voice; u.lang = chosen.lang; } else u.lang = "en-US";
    u.rate = s.settings.rate;
    u.onstart = () => { if (my === token.current) set({ waiting: false }); };
    u.onend = () => {
      if (my !== token.current) return;
      const next = sentence + 1;
      const per = deviceSeconds(block.words, st.current.settings.rate) / parts.length;
      set({ sentence: next, offset: per * next });
      if (next < parts.length) speak(index, next);
      else advanceRef.current();
    };
    u.onerror = (e) => {
      if (my !== token.current || e.error === "interrupted" || e.error === "canceled") return;
      set({ playing: false, notice: `${st.current.notice ? `${st.current.notice} ` : ""}Your device's voice stopped unexpectedly. Press play to continue.` });
    };
    set({ index, sentence, offset: (deviceSeconds(block.words, s.settings.rate) / parts.length) * sentence, playing: true, waiting: true, finished: false });
    window.speechSynthesis.speak(u);
    // Chrome sometimes leaves the engine paused after a cancel.
    window.speechSynthesis.resume();
  }, [set]);

  const playBlock = useCallback((index: number, offset = 0) => {
    const s = st.current;
    const m = s.manifest;
    const a = audio.current;
    if (!m || !a) return;
    const block = m.blocks[index];
    if (!block) return;
    if (s.mode === "device") {
      a.pause();
      if (!("speechSynthesis" in window) || !s.devices.length) {
        set({ index, playing: false, waiting: false, notice: (s.notice ? `${s.notice} ` : "") + "This browser has no voices of its own to read it with." });
        return;
      }
      speak(index, 0);
      savePlace(true);
      return;
    }
    stopSpeech();
    set({ index, offset, playing: true, waiting: true, finished: false });
    switching.current = true;
    a.src = block.url!;
    a.defaultPlaybackRate = s.settings.rate;
    a.playbackRate = s.settings.rate;
    if (offset > 0) {
      const at = offset;
      a.addEventListener("loadedmetadata", () => { a.currentTime = Math.min(at, Math.max(0, a.duration - 0.25)); }, { once: true });
    }
    a.play().catch((e) => { if (e?.name === "NotAllowedError") set({ playing: false, waiting: false }); });
    prefetchAhead(index);
    savePlace(true);
  }, [prefetchAhead, savePlace, set, speak]);

  const finish = useCallback((message: string | null) => {
    const m = st.current.manifest;
    audio.current?.pause();
    stopSpeech();
    if (m && message) store(resumeKey(m.course.id, m.lesson.number), null);
    set({ playing: false, waiting: false, finished: true, notice: message, sleep: st.current.sleep?.kind === "minutes" ? st.current.sleep : null });
  }, [set]);

  const goToPage = useCallback(async (p: Place, index = 0, offset = 0, follow = false) => {
    const s = st.current;
    const from = s.manifest?.page.href;
    set({ waiting: true });
    try {
      const pending = upcoming.current;
      upcoming.current = null;
      let next: { manifest: Manifest; mode: State["mode"]; notice: string | null };
      const ready = pending ? await pending.catch(() => null) : null;
      if (ready && ready.page.number === p.page && ready.lesson.number === p.lesson && s.mode === "studio" && ready.voice === studioVoice()
        && (ready.studio.canRender || ready.blocks.every((b) => b.ready))) {
        next = { manifest: ready, mode: "studio", notice: null };
      } else {
        next = await resolve(p);
      }
      prefetched.current.clear();
      set({ manifest: next.manifest, mode: next.mode, notice: next.notice, index, offset: 0, sentence: 0 });
      updateMetadata();
      // Follow along: if the reader was looking at the page that just ended, turn the page for them. Not while
      // offline or with the screen off, where a failed page load would stop the audio: then the page turns on return.
      if (follow && st.current.settings.follow && from && pathRef.current === from) {
        if (navigator.onLine && document.visibilityState === "visible") router.push(next.manifest.page.href);
        else pendingFollow.current = { from, to: next.manifest.page.href };
      }
      playBlock(index, offset);
    } catch (e) {
      set({ playing: false, waiting: false, notice: e instanceof Error ? e.message : "Something went wrong." });
    }
  }, [playBlock, resolve, router, set, updateMetadata]);

  const advance = useCallback(() => {
    const s = st.current;
    const m = s.manifest;
    if (!m) return;
    if (s.index + 1 < m.blocks.length) { playBlock(s.index + 1); return; }
    // The end of a page.
    if (s.sleep?.kind === "page") { finish("Stopped at the end of the page, as you asked. Sleep well."); return; }
    if (!m.next || (m.next.newLesson && (!s.settings.continueLessons || s.sleep?.kind === "lesson"))) {
      finish(m.next ? `That's the end of Lesson ${m.lesson.number}.` : `That's the end of ${m.course.code}. Well done.`);
      return;
    }
    if (m.next.newLesson) store(resumeKey(m.course.id, m.lesson.number), null);
    goToPage({ courseId: m.course.id, lesson: m.next.lesson, page: m.next.page }, 0, 0, true);
  }, [finish, goToPage, playBlock]);
  advanceRef.current = advance;

  /* ---------- Controls ---------- */

  const start = useCallback((p: Place & { block?: string; offset?: number }) => {
    const a = audio.current;
    // Inside the tap: unlock audio (and speech, on iOS) so that playback may continue after the page loads.
    if (a && a.paused) { a.src = SILENCE; a.play().catch(() => {}); }
    // A page may turn out to need the device's voice (not yet recorded), so unlock speech as well.
    if ("speechSynthesis" in window) window.speechSynthesis.speak(new SpeechSynthesisUtterance(""));
    const s = st.current;
    const same = s.manifest && s.manifest.course.id === p.courseId && s.manifest.lesson.number === p.lesson && s.manifest.page.number === p.page;
    if (same && s.manifest) {
      const i = p.block ? Math.max(0, s.manifest.blocks.findIndex((b) => b.id === p.block)) : 0;
      set({ notice: null });
      playBlock(i, p.offset ?? 0);
      return;
    }
    set({ notice: null, finished: false });
    (async () => {
      try {
        const next = await resolve(p);
        const i = p.block ? Math.max(0, next.manifest.blocks.findIndex((b) => b.id === p.block)) : 0;
        prefetched.current.clear();
        upcoming.current = null;
        set({ manifest: next.manifest, mode: next.mode, notice: next.notice, index: i, offset: 0, sentence: 0 });
        updateMetadata();
        playBlock(i, p.offset ?? 0);
      } catch (e) {
        set({ notice: e instanceof Error ? e.message : "Something went wrong.", waiting: false });
      }
    })();
  }, [playBlock, resolve, set, updateMetadata]);

  const pause = useCallback(() => {
    const s = st.current;
    switching.current = false;
    if (s.mode === "studio") audio.current?.pause();
    else stopSpeech();
    set({ playing: false, waiting: false });
    savePlace(true);
  }, [savePlace, set]);

  const resume = useCallback(() => {
    const s = st.current;
    if (!s.manifest) return;
    if (s.finished) { playBlock(0); return; }
    if (s.mode === "device") { speak(s.index, s.sentence); return; }
    const a = audio.current!;
    if (!a.src || a.src.startsWith("data:")) { playBlock(s.index, s.offset); return; }
    a.play().then(() => set({ playing: true })).catch(() => playBlock(s.index, s.offset));
  }, [playBlock, set, speak]);

  const toggle = useCallback(() => (st.current.playing ? pause() : resume()), [pause, resume]);

  const seek = useCallback((seconds: number) => {
    const s = st.current;
    if (!s.manifest) return;
    const target = Math.max(0, Math.min(seconds, total - 0.5));
    let acc = 0;
    for (let i = 0; i < durations.length; i++) {
      if (target < acc + durations[i] || i === durations.length - 1) {
        const within = target - acc;
        if (s.mode === "device") {
          const parts = sentences(s.manifest.blocks[i].text).length;
          speak(i, Math.min(parts - 1, Math.floor((within / durations[i]) * parts)));
        } else if (i === s.index && audio.current && !audio.current.src.startsWith("data:")) {
          audio.current.currentTime = within;
          set({ offset: within });
        } else {
          playBlock(i, within);
        }
        return;
      }
      acc += durations[i];
    }
  }, [durations, playBlock, set, speak, total]);

  const skip = useCallback((delta: number) => seek(position + delta), [position, seek]);

  const passage = useCallback((delta: number) => {
    const s = st.current;
    if (!s.manifest) return;
    // "Back" restarts the passage unless it has only just begun.
    if (delta < 0 && s.offset > 3) { playBlock(s.index); return; }
    const i = s.index + delta;
    if (i < 0) { if (s.manifest.prev) goToPage({ courseId: s.manifest.course.id, ...s.manifest.prev }); else playBlock(0); return; }
    if (i >= s.manifest.blocks.length) { advance(); return; }
    playBlock(i);
  }, [advance, goToPage, playBlock]);

  const page = useCallback((delta: number) => {
    const m = st.current.manifest;
    const to = delta > 0 ? m?.next : m?.prev;
    if (m && to) goToPage({ courseId: m.course.id, lesson: to.lesson, page: to.page }, 0, 0, true);
  }, [goToPage]);

  const setRate = useCallback((rate: number) => {
    saveSettings({ rate });
    const s = st.current;
    if (audio.current) { audio.current.defaultPlaybackRate = rate; audio.current.playbackRate = rate; }
    if (s.mode === "device" && s.playing) speak(s.index, s.sentence);
  }, [saveSettings, speak]);

  const setVoice = useCallback((id: string) => {
    saveSettings({ voice: id });
    const s = st.current;
    if (!s.manifest) return;
    const p = { courseId: s.manifest.course.id, lesson: s.manifest.lesson.number, page: s.manifest.page.number };
    const block = s.manifest.blocks[s.index]?.id;
    const wasPlaying = s.playing;
    pause();
    if (wasPlaying) start({ ...p, block });
    else resolve(p).then((next) => { set({ manifest: next.manifest, mode: next.mode, notice: next.notice }); }).catch(() => {});
  }, [pause, resolve, saveSettings, set, start]);

  const setSleep = useCallback((sleep: Sleep) => set({ sleep }), [set]);
  const setOption = useCallback((patch: Partial<Settings>) => saveSettings(patch), [saveSettings]);
  const openSheet = useCallback((sheet: boolean) => set({ sheet }), [set]);

  const close = useCallback(() => {
    savePlace(true);
    audio.current?.pause();
    if (audio.current) audio.current.removeAttribute("src");
    stopSpeech();
    set({ manifest: null, playing: false, waiting: false, notice: null, sheet: false, sleep: null, finished: false });
    if ("mediaSession" in navigator) navigator.mediaSession.metadata = null;
  }, [savePlace, set]);

  /* ---------- Audio element events ---------- */

  useEffect(() => {
    const a = audio.current!;
    const onTime = () => {
      if (a.src.startsWith("data:") || st.current.mode !== "studio") return;
      st.current.offset = a.currentTime;
      render();
      savePlace();
    };
    const onEnded = () => { if (!a.src.startsWith("data:") && st.current.mode === "studio") advanceRef.current(); };
    const onPlaying = () => { if (!a.src.startsWith("data:")) { switching.current = false; set({ waiting: false, playing: true }); } };
    const onWaiting = () => set({ waiting: true });
    const onPause = () => {
      if (switching.current || a.ended || a.src.startsWith("data:")) return;
      // Paused from outside the player (headphones unplugged, another app took the audio).
      if (st.current.mode === "studio" && st.current.playing) set({ playing: false, waiting: false });
    };
    const onMeta = () => {
      // The real length replaces the estimate.
      const m = st.current.manifest;
      const b = m?.blocks[st.current.index];
      if (m && b && isFinite(a.duration) && Math.abs(b.duration - a.duration) > 0.05 && !a.src.startsWith("data:")) {
        const blocks = m.blocks.map((x, i) => (i === st.current.index ? { ...x, duration: a.duration, ready: true } : x));
        set({ manifest: { ...m, blocks } });
      }
    };
    const onError = async () => {
      if (!a.src || a.src.startsWith("data:") || st.current.mode !== "studio") return;
      const m = st.current.manifest;
      const b = m?.blocks[st.current.index];
      if (!m || !b) return;
      // Try once more with a fresh plan (the lesson may have been edited), then fall back to the device's voice.
      if (retried.current !== b.url) {
        retried.current = b.url;
        try {
          const fresh = await fetchManifest({ courseId: m.course.id, lesson: m.lesson.number, page: m.page.number });
          const i = Math.max(0, fresh.blocks.findIndex((x) => x.id === b.id));
          set({ manifest: fresh });
          playBlock(i, st.current.offset);
          return;
        } catch { /* fall through */ }
      }
      set({ mode: "device", notice: "The studio recording couldn't be played, so your device's voice has taken over for this page." });
      speak(st.current.index, 0);
    };
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("ended", onEnded);
    a.addEventListener("playing", onPlaying);
    a.addEventListener("waiting", onWaiting);
    a.addEventListener("pause", onPause);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("error", onError);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("ended", onEnded);
      a.removeEventListener("playing", onPlaying);
      a.removeEventListener("waiting", onWaiting);
      a.removeEventListener("pause", onPause);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("error", onError);
    };
  }, [fetchManifest, playBlock, savePlace, set, speak]);

  /* ---------- Lock-screen controls ---------- */

  const controls = useRef({ resume, pause, skip, passage, seek });
  controls.current = { resume, pause, skip, passage, seek };
  useEffect(() => {
    if (!("mediaSession" in navigator)) return;
    const ms = navigator.mediaSession;
    const handlers: [MediaSessionAction, MediaSessionActionHandler][] = [
      ["play", () => controls.current.resume()],
      ["pause", () => controls.current.pause()],
      ["seekbackward", (d) => controls.current.skip(-(d.seekOffset ?? 15))],
      ["seekforward", (d) => controls.current.skip(d.seekOffset ?? 30)],
      ["previoustrack", () => controls.current.passage(-1)],
      ["nexttrack", () => controls.current.passage(1)],
      ["seekto", (d) => { if (d.seekTime !== undefined) controls.current.seek(d.seekTime); }],
    ];
    for (const [action, handler] of handlers) { try { ms.setActionHandler(action, handler); } catch { /* unsupported */ } }
  }, []);

  useEffect(() => {
    if (!("mediaSession" in navigator) || !st.current.manifest) return;
    navigator.mediaSession.playbackState = st.current.playing ? "playing" : "paused";
    try {
      if (total > 0) navigator.mediaSession.setPositionState({ duration: total, position: Math.min(position, total), playbackRate: st.current.settings.rate });
    } catch { /* some browsers reject until metadata loads */ }
  });

  /* ---------- Sleep timer ---------- */

  useEffect(() => {
    const id = window.setInterval(() => {
      const s = st.current;
      if (s.sleep?.kind !== "minutes" || !s.playing) return;
      const left = (s.sleep.until - Date.now()) / 1000;
      const a = audio.current;
      if (a) a.volume = left < 10 ? Math.max(0, left / 10) : 1;
      if (left <= 0) {
        pause();
        if (a) a.volume = 1;
        set({ sleep: null, notice: "The sleep timer stopped the narration." });
      } else render();
    }, 1000);
    return () => window.clearInterval(id);
  }, [pause, set]);

  /* ---------- Follow along: highlight the passage being read ---------- */

  useEffect(() => {
    document.querySelectorAll(".is-narrating").forEach((el) => el.classList.remove("is-narrating"));
    const s = st.current;
    const m = s.manifest;
    if (!m || pathname !== m.page.href) return;
    const b = m.blocks[s.index];
    const el = b && (b.id === "title" ? document.querySelector(".page-title") : b.id === "outro" ? null : document.querySelector(`[data-block="${b.id}"]`));
    if (!el) return;
    el.classList.add("is-narrating");
    if (s.playing && s.settings.follow && Date.now() - lastScroll.current > 5000) {
      const r = el.getBoundingClientRect();
      if (r.top < 70 || r.bottom > window.innerHeight - 110) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [pathname, st.current.index, st.current.manifest, st.current.playing]);

  useEffect(() => {
    const mark = () => { lastScroll.current = Date.now(); };
    window.addEventListener("wheel", mark, { passive: true });
    window.addEventListener("touchmove", mark, { passive: true });
    return () => { window.removeEventListener("wheel", mark); window.removeEventListener("touchmove", mark); };
  }, []);

  /* ---------- Page chrome and keyboard ---------- */

  const open = Boolean(st.current.manifest);
  useEffect(() => {
    document.documentElement.dataset.listening = open ? "on" : "off";
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "l" || e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement | null;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      if (st.current.manifest) { e.preventDefault(); toggle(); }
      else if (here.current) { e.preventDefault(); start(here.current); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [start, toggle]);

  useEffect(() => {
    const onShow = () => {
      const f = pendingFollow.current;
      if (document.visibilityState !== "visible" || !f || !navigator.onLine) return;
      pendingFollow.current = null;
      const now = st.current.manifest?.page.href;
      if (pathRef.current === f.from && now && now !== f.from) router.push(now);
    };
    document.addEventListener("visibilitychange", onShow);
    window.addEventListener("online", onShow);
    return () => { document.removeEventListener("visibilitychange", onShow); window.removeEventListener("online", onShow); };
  }, [router]);

  useEffect(() => () => stopSpeech(), []);

  const setHere = useCallback((p: Place | null) => { here.current = p; }, []);

  const api: Api = {
    state: st.current, getHere: () => here.current, setHere, start, toggle, pause, seek, skip, passage, page, setRate, setVoice,
    setSleep, setOption, openSheet, close, durations, position, total,
  };

  return (
    <Ctx.Provider value={api}>
      {children}
      {/* One audio element for the whole visit, so narration carries on from page to page. */}
      <audio ref={audio} preload="auto" playsInline />
      <PlayFromHere />
      {open && <NarrationBar />}
    </Ctx.Provider>
  );
}
