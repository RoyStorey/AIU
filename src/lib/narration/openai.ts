/** OpenAI's speech API, as an alternative to running Kokoro on the server. Returns MP3 bytes. */
const INSTRUCTIONS =
  "You are a university lecturer recording an audio edition of your lecture for students to hear while commuting. " +
  "Read in a warm, clear, unhurried voice with natural pauses between sentences and ideas. " +
  "When reading a quotation from a historical source, shift slightly into a reading voice, as if quoting from a book.";

export async function openaiSynthesize(text: string, voice: string): Promise<Buffer> {
  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new Error("OPENAI_API_KEY is not set.");
  const model = process.env.AIU_OPENAI_TTS_MODEL ?? "gpt-4o-mini-tts";
  const res = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
    body: JSON.stringify({
      model, voice, input: text, response_format: "mp3",
      ...(model.startsWith("tts-1") ? {} : { instructions: INSTRUCTIONS }),
    }),
  });
  if (!res.ok) throw new Error(`OpenAI speech request failed: ${res.status} ${await res.text().catch(() => "")}`);
  return Buffer.from(await res.arrayBuffer());
}
