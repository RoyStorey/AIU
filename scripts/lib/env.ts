// Load .env for local script runs (Next.js loads it for the web app).
try {
  process.loadEnvFile(".env");
} catch {
  // no .env file; rely on the shell environment
}
