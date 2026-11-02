/** The ffmpeg to run: AIU_FFMPEG if set (the GPU setup records it), otherwise whatever is on the PATH. */
export const ffmpegPath = () => process.env.AIU_FFMPEG || "ffmpeg";
