"use client";

import { useStore } from "./store";

/* Tiny synthesized sound effects: no audio files, just oscillators. */

let ctx: AudioContext | null = null;

function tone(freq: number, start: number, dur: number, type: OscillatorType = "triangle", gain = 0.12) {
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
  g.gain.setValueAtTime(0, ctx.currentTime + start);
  g.gain.linearRampToValueAtTime(gain, ctx.currentTime + start + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + dur);
  osc.connect(g).connect(ctx.destination);
  osc.start(ctx.currentTime + start);
  osc.stop(ctx.currentTime + start + dur + 0.05);
}

const SOUNDS = {
  click: () => tone(660, 0, 0.06, "square", 0.04),
  correct: () => [784, 1047].forEach((f, i) => tone(f, i * 0.08, 0.18)),
  wrong: () => [220, 185].forEach((f, i) => tone(f, i * 0.1, 0.2, "sawtooth", 0.05)),
  xp: () => [988, 1319].forEach((f, i) => tone(f, i * 0.05, 0.12, "sine", 0.1)),
  flip: () => tone(440, 0, 0.08, "sine", 0.06),
  spark: () => [1568, 2093, 2637].forEach((f, i) => tone(f, i * 0.04, 0.25, "sine", 0.06)),
  levelUp: () => [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, i * 0.09, 0.35, "triangle", 0.12)),
  fanfare: () =>
    [523, 523, 784, 659, 784, 1047].forEach((f, i) => tone(f, [0, 0.12, 0.24, 0.42, 0.54, 0.7][i], 0.4, "square", 0.05)),
};

export type SoundName = keyof typeof SOUNDS;

export function play(name: SoundName) {
  if (typeof window === "undefined" || !useStore.getState().profile.sound) return;
  try {
    ctx ??= new AudioContext();
    if (ctx.state === "suspended") void ctx.resume();
    SOUNDS[name]();
  } catch {
    /* audio unavailable: stay silent */
  }
}
