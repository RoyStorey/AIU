import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The development badge sits over the player's play button; the terminal reports build errors anyway.
  devIndicators: false,
  // The narration engine's native runtime and its WebAssembly phonemizer load at run time, outside the bundle.
  serverExternalPackages: ["onnxruntime-node", "phonemizer"],
};

export default nextConfig;
