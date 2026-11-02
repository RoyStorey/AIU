"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useNarration, type Sleep } from "@/components/narration/NarrationProvider";
import { OfflineSave, useNarrationWorker } from "@/components/narration/OfflineSave";
import { clock } from "@/components/narration/device";

const RATES = [0.8, 1, 1.1, 1.2, 1.35, 1.5, 1.75, 2];
const SAMPLE = "In April 1775, British regulars marched out of Boston toward Concord. By nightfall the colonies were at war.";
const roman = (n: number) => ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"][n] ?? String(n);

function Icon({ name }: { name: "play" | "pause" | "back" | "fwd" | "prev" | "next" | "up" | "close" }) {
  const paths: Record<string, React.ReactNode> = {
    play: <path d="M8 5.5v13l11-6.5z" fill="currentColor" />,
    pause: <><rect x="6.5" y="5" width="4" height="14" rx="1" fill="currentColor" /><rect x="13.5" y="5" width="4" height="14" rx="1" fill="currentColor" /></>,
    back: <><path d="M12 5a7 7 0 1 1-6.6 4.7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M4.5 4.5v5h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></>,
    fwd: <><path d="M12 5a7 7 0 1 0 6.6 4.7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M19.5 4.5v5h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></>,
    prev: <><path d="M17 6v12L8.5 12z" fill="currentColor" /><rect x="6" y="6" width="2" height="12" fill="currentColor" /></>,
    next: <><path d="M7 6v12l8.5-6z" fill="currentColor" /><rect x="16" y="6" width="2" height="12" fill="currentColor" /></>,
    up: <path d="M6 15l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
    close: <path d="M7 7l10 10M17 7L7 17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
  };
  return <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">{paths[name]}</svg>;
}

function Skip({ seconds }: { seconds: number }) {
  const n = useNarration()!;
  const label = seconds < 0 ? `Back ${-seconds} seconds` : `Forward ${seconds} seconds`;
  return (
    <button type="button" className="np-icon np-skip" onClick={() => n.skip(seconds)} aria-label={label} title={label}>
      <Icon name={seconds < 0 ? "back" : "fwd"} />
      <span className="np-skip-n">{Math.abs(seconds)}</span>
    </button>
  );
}

export function NarrationBar() {
  const n = useNarration()!;
  const { manifest: m, playing, waiting, notice, settings, sheet, mode, sleep, finished } = n.state;
  const [scrub, setScrub] = useState<number | null>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  useNarrationWorker();

  useEffect(() => {
    if (!sheet) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") n.openSheet(false); };
    window.addEventListener("keydown", onKey);
    sheetRef.current?.querySelector<HTMLElement>("button, [href]")?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [sheet, n]);

  if (!m) return null;
  const total = n.total;
  const shown = scrub ?? n.position;
  const rateLabel = `${settings.rate}×`;
  const voiceName = mode === "device"
    ? (n.state.devices.find((d) => d.id === settings.voice) ?? n.state.devices[0])?.name ?? "Device voice"
    : m.studio.voices.find((v) => v.id === m.voice)?.name ?? "Studio voice";
  const sleepLeft = sleep?.kind === "minutes" ? Math.max(0, (sleep.until - Date.now()) / 1000) : null;

  return (
    <>
      {sheet && <div className="np-scrim" onClick={() => n.openSheet(false)} aria-hidden="true" />}
      {sheet && (
        <div className="np-sheet" role="dialog" aria-label="Listening options" ref={sheetRef}>
          <div className="np-sheet-head">
            <div>
              <p className="eyebrow">{m.course.code} · Lesson {roman(m.lesson.number)} · Page {roman(m.page.number).toLowerCase()} of {roman(m.lesson.pages).toLowerCase()}</p>
              <p className="np-sheet-title">{m.page.title}</p>
            </div>
            <button type="button" className="np-icon" onClick={() => n.openSheet(false)} aria-label="Close options"><Icon name="close" /></button>
          </div>

          <div className="np-transport">
            <Skip seconds={-15} />
            <button type="button" className="np-icon" onClick={() => n.passage(-1)} aria-label="Previous passage" title="Previous passage"><Icon name="prev" /></button>
            <button type="button" className="np-play np-play-lg" onClick={n.toggle} aria-label={playing ? "Pause" : "Play"}>
              <Icon name={playing ? "pause" : "play"} />
            </button>
            <button type="button" className="np-icon" onClick={() => n.passage(1)} aria-label="Next passage" title="Next passage"><Icon name="next" /></button>
            <Skip seconds={30} />
          </div>
          <div className="np-pages">
            <button type="button" className="btn-link" disabled={!m.prev} onClick={() => n.page(-1)}>← Previous page</button>
            <button type="button" className="btn-link" disabled={!m.next} onClick={() => n.page(1)}>Next page →</button>
          </div>

          <fieldset className="np-group">
            <legend>Speed</legend>
            <div className="np-chips">
              {RATES.map((r) => (
                <button key={r} type="button" className="np-chip" aria-pressed={settings.rate === r} onClick={() => n.setRate(r)}>{r}×</button>
              ))}
            </div>
          </fieldset>

          <VoicePicker />

          <fieldset className="np-group">
            <legend>Sleep timer{sleepLeft !== null ? ` · ${clock(sleepLeft)} left` : sleep ? ` · ${sleep.kind === "page" ? "end of page" : "end of lesson"}` : ""}</legend>
            <div className="np-chips">
              {([["Off", null], ["15 min", 15], ["30 min", 30], ["45 min", 45], ["60 min", 60], ["End of page", "page"], ["End of lesson", "lesson"]] as const).map(([label, v]) => {
                const active = v === null ? !sleep : typeof v === "number" ? false : sleep?.kind === v;
                const value: Sleep = v === null ? null : typeof v === "number" ? { kind: "minutes", until: Date.now() + v * 60_000 } : { kind: v };
                return <button key={label} type="button" className="np-chip" aria-pressed={active} onClick={() => n.setSleep(value)}>{label}</button>;
              })}
            </div>
          </fieldset>

          <fieldset className="np-group np-options">
            <legend>While listening</legend>
            <label><input type="checkbox" checked={settings.follow} onChange={(e) => n.setOption({ follow: e.target.checked })} /> Follow along: highlight each passage and turn the page</label>
            <label><input type="checkbox" checked={settings.continueLessons} onChange={(e) => n.setOption({ continueLessons: e.target.checked })} /> Carry on into the next lesson</label>
          </fieldset>

          {mode === "studio" && <OfflineSave />}

          <p className="np-help">Keyboard: <kbd>L</kbd> plays and pauses. Headphone and lock-screen buttons skip back and ahead.</p>
          <button type="button" className="btn-link np-close-all" onClick={n.close}>Stop and close the player</button>
        </div>
      )}

      <div className="np-bar" role="region" aria-label="Lecture narration">
        <div className="np-progress-line" aria-hidden="true"><span style={{ width: `${total ? (shown / total) * 100 : 0}%` }} /></div>
        <button type="button" className={waiting && playing ? "np-play is-waiting" : "np-play"} onClick={n.toggle} aria-label={playing ? "Pause" : "Play"}>
          <Icon name={playing ? "pause" : "play"} />
        </button>
        <div className="np-info">
          <p className="np-where">
            <Link href={m.page.href}>{m.page.title}</Link>
          </p>
          <div className="np-scrub">
            <span className="np-time">{clock(shown)}</span>
            <input
              type="range" min={0} max={Math.max(1, Math.round(total))} step={1} value={Math.round(shown)}
              aria-label="Position in this page" aria-valuetext={`${clock(shown)} of ${clock(total)}`}
              onChange={(e) => setScrub(Number(e.target.value))}
              onPointerUp={() => { if (scrub !== null) n.seek(scrub); setScrub(null); }}
              onKeyUp={() => { if (scrub !== null) n.seek(scrub); setScrub(null); }}
            />
            <span className="np-time">−{clock(total - shown)}</span>
          </div>
          <p className="np-status" aria-live="polite">
            {notice ?? (waiting && playing ? (mode === "studio" ? "Preparing the narration…" : "Starting…")
              : finished ? "Finished." : `${voiceName} · ${rateLabel}${sleepLeft !== null ? ` · sleep in ${clock(sleepLeft)}` : ""}`)}
          </p>
        </div>
        <Skip seconds={-15} />
        <div className="np-wide">
          <Skip seconds={30} />
          <button type="button" className="np-text-btn" onClick={() => n.openSheet(true)} aria-label={`Speed ${rateLabel}. Open listening options`}>{rateLabel}</button>
        </div>
        <button type="button" className="np-icon np-more" onClick={() => n.openSheet(!sheet)} aria-expanded={sheet} aria-label="Listening options">
          <Icon name="up" />
        </button>
        <button type="button" className="np-icon np-x" onClick={n.close} aria-label="Stop and close the player"><Icon name="close" /></button>
      </div>
    </>
  );
}

function VoicePicker() {
  const n = useNarration()!;
  const { manifest: m, settings, devices, mode } = n.state;
  const sample = useRef<HTMLAudioElement | null>(null);
  const [playingSample, setPlayingSample] = useState<string | null>(null);
  if (!m) return null;

  const preview = (id: string, url?: string) => {
    sample.current?.pause();
    window.speechSynthesis?.cancel();
    if (playingSample === id) { setPlayingSample(null); return; }
    if (n.state.playing) n.pause();
    setPlayingSample(id);
    if (url) {
      const a = new Audio(url);
      sample.current = a;
      a.onended = () => setPlayingSample(null);
      a.onerror = () => setPlayingSample(null);
      a.play().catch(() => setPlayingSample(null));
    } else {
      const d = devices.find((x) => x.id === id);
      const u = new SpeechSynthesisUtterance(SAMPLE);
      if (d) { u.voice = d.voice; u.lang = d.lang; }
      u.rate = settings.rate;
      u.onend = () => setPlayingSample(null);
      window.speechSynthesis.speak(u);
    }
  };

  const current = mode === "device" ? (settings.voice.startsWith("device:") ? settings.voice : devices[0]?.id) : m.voice;

  return (
    <fieldset className="np-group">
      <legend>Voice</legend>
      {m.studio.voices.length > 0 && (
        <>
          <p className="np-sub">Studio voices <span>· natural, and they keep playing with your screen locked</span></p>
          <ul className="np-voices">
            {m.studio.voices.map((v) => (
              <li key={v.id}>
                <label>
                  <input type="radio" name="np-voice" checked={current === v.id} onChange={() => n.setVoice(v.id)} />
                  <span className="np-voice-name">{v.name}</span> <span className="np-voice-desc">{v.description}</span>
                </label>
                <button type="button" className="np-sample" onClick={() => preview(v.id, v.preview)} aria-label={`Hear a sample of ${v.name}`}>
                  {playingSample === v.id ? "Stop" : "Sample"}
                </button>
              </li>
            ))}
          </ul>
          {!m.studio.canRender && <p className="np-note">Pages this server hasn&rsquo;t recorded yet are read by your device&rsquo;s voice{m.studio.reason ? "" : "; signing in lets the server record them"}.</p>}
        </>
      )}
      {devices.length > 0 && (
        <>
          <p className="np-sub">Voices on this device <span>· work everywhere; most phones pause them when the screen locks</span></p>
          <div className="np-device">
            <select
              aria-label="Device voice"
              value={settings.voice.startsWith("device:") ? settings.voice : ""}
              onChange={(e) => e.target.value && n.setVoice(e.target.value)}
            >
              <option value="">Choose a voice on this device…</option>
              {devices.map((d) => <option key={d.id} value={d.id}>{d.name} ({d.lang})</option>)}
            </select>
            {settings.voice.startsWith("device:") && (
              <button type="button" className="np-sample" onClick={() => preview(settings.voice)}>{playingSample === settings.voice ? "Stop" : "Sample"}</button>
            )}
          </div>
        </>
      )}
      {!m.studio.voices.length && !devices.length && <p className="np-note">No voices are available. Try another browser, or ask the site&rsquo;s administrator to set up studio narration.</p>}
    </fieldset>
  );
}
