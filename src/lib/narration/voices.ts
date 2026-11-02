/**
 * The studio voices: neural voices rendered on the server and served as audio,
 * so they keep playing with the screen locked. Safe to import on the client.
 *
 * Kokoro voices run on the server itself (free; see README). OpenAI voices use
 * OpenAI's speech API (paid, needs OPENAI_API_KEY). Which family is offered is
 * chosen by AIU_NARRATION_PROVIDER.
 */
export type StudioVoice = {
  id: string;
  provider: "kokoro" | "openai";
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

export const OPENAI_VOICES: StudioVoice[] = [
  ["coral", "woman"], ["sage", "woman"], ["nova", "woman"], ["shimmer", "woman"],
  ["ash", "man"], ["onyx", "man"], ["echo", "man"], ["fable", "man"],
].map(([v, who]) => ({
  id: `openai:${v}`, provider: "openai" as const, engineVoice: v,
  name: v[0].toUpperCase() + v.slice(1), description: `OpenAI, ${who}`,
}));

export const STUDIO_VOICES = [...KOKORO_VOICES, ...OPENAI_VOICES];
export const findStudioVoice = (id: string | null | undefined) => STUDIO_VOICES.find((v) => v.id === id);
/** A filesystem- and URL-safe form of a voice id: "kokoro:af_heart" → "kokoro-af_heart". */
export const voiceSlug = (id: string) => id.replace(":", "-");
export const voiceFromSlug = (slug: string) => findStudioVoice(slug.replace("-", ":"));

/** Where each voice's short sample lives, for the voice picker. */
export const previewUrl = (id: string) => `/narration/previews/${voiceSlug(id)}.mp3`;
