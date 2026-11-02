/**
 * The studio voices: neural voices rendered on the server and served as audio,
 * so they keep playing with the screen locked. Safe to import on the client.
 *
 * Kokoro voices run on the server itself (free; see README). Chatterbox voices
 * are more natural and need an NVIDIA GPU (free; rendered ahead of time, e.g.
 * nightly). OpenAI voices use OpenAI's speech API (paid, needs OPENAI_API_KEY).
 * Which family is offered is chosen by AIU_NARRATION_PROVIDER.
 */
export type StudioVoice = {
  id: string;
  provider: "kokoro" | "chatterbox" | "openai";
  name: string;
  description: string;
  /** The engine's own name for the voice. */
  engineVoice: string;
};

export const KOKORO_VOICES: StudioVoice[] = [
  { id: "kokoro:af_heart", provider: "kokoro", engineVoice: "af_heart", name: "Heart", description: "American, woman" },
  { id: "kokoro:am_michael", provider: "kokoro", engineVoice: "am_michael", name: "Michael", description: "American, man" },
  { id: "kokoro:bf_emma", provider: "kokoro", engineVoice: "bf_emma", name: "Emma", description: "British, woman" },
  { id: "kokoro:bm_george", provider: "kokoro", engineVoice: "bm_george", name: "George", description: "British, man" },
  { id: "kokoro:af_bella", provider: "kokoro", engineVoice: "af_bella", name: "Bella", description: "American, woman" },
  { id: "kokoro:am_fenrir", provider: "kokoro", engineVoice: "am_fenrir", name: "Fenrir", description: "American, man" },
];

/**
 * Chatterbox speaks in its own voice, or in the voice of a short reference clip.
 * The clips used here are the Kokoro samples (synthetic voices, Apache-2.0), so no
 * real person's voice is copied. Clips of your own (with the speaker's consent)
 * can be added to data/voices/ and appear as further voices.
 */
export const CHATTERBOX_VOICES: StudioVoice[] = [
  { id: "chatterbox:builtin", provider: "chatterbox", engineVoice: "builtin", name: "Chatterbox", description: "Chatterbox's own voice" },
  ...KOKORO_VOICES.map((k) => ({
    id: `chatterbox:${k.name.toLowerCase()}`, provider: "chatterbox" as const, engineVoice: k.engineVoice,
    name: `${k.name} HD`, description: `${k.description} · Chatterbox`,
  })),
];

/** A voice from a clip in data/voices/ ("chatterbox:custom-ada" for data/voices/ada.wav). */
export function customVoice(name: string): StudioVoice {
  const clean = name.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
  return {
    id: `chatterbox:custom-${clean}`, provider: "chatterbox", engineVoice: `custom:${clean}`,
    name: clean.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()), description: "Your clip · Chatterbox",
  };
}

export const OPENAI_VOICES: StudioVoice[] = [
  ["coral", "woman"], ["sage", "woman"], ["nova", "woman"], ["shimmer", "woman"],
  ["ash", "man"], ["onyx", "man"], ["echo", "man"], ["fable", "man"],
].map(([v, who]) => ({
  id: `openai:${v}`, provider: "openai" as const, engineVoice: v,
  name: v[0].toUpperCase() + v.slice(1), description: `OpenAI, ${who}`,
}));

export const STUDIO_VOICES = [...KOKORO_VOICES, ...CHATTERBOX_VOICES, ...OPENAI_VOICES];
export const findStudioVoice = (id: string | null | undefined) =>
  STUDIO_VOICES.find((v) => v.id === id) ?? (id?.startsWith("chatterbox:custom-") ? customVoice(id.slice("chatterbox:custom-".length)) : undefined);
/** A filesystem- and URL-safe form of a voice id: "kokoro:af_heart" → "kokoro-af_heart". */
export const voiceSlug = (id: string) => id.replace(":", "-");
export const voiceFromSlug = (slug: string) => findStudioVoice(slug.replace("-", ":"));

/** Where each voice's short sample lives, for the voice picker. */
export const previewUrl = (id: string) => `/narration/previews/${voiceSlug(id)}.mp3`;
