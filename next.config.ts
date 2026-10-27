import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Student pages are per-user and read the session on every request, so we
  // use the classic dynamic rendering model rather than Cache Components.
  serverExternalPackages: ["@libsql/client", "libsql"],
  // Curriculum lives in /content as JSON and is read from disk at runtime.
  outputFileTracingIncludes: {
    "/**": ["./content/**/*"],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
