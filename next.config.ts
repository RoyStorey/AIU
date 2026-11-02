import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The narration engine's native runtime and its WebAssembly phonemizer load at run time, outside the bundle.
  serverExternalPackages: ["onnxruntime-node", "phonemizer"],
};

export default nextConfig;
