import "server-only";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

const globalForDb = globalThis as unknown as { aiuDb?: ReturnType<typeof makeDb> };

function makeDb() {
  const client = createClient({
    url: process.env.DATABASE_URL ?? "file:./data/aiu.db",
    authToken: process.env.DATABASE_AUTH_TOKEN,
  });
  return drizzle(client, { schema });
}

// Reuse one client across hot reloads in development.
export const db = globalForDb.aiuDb ?? makeDb();
if (process.env.NODE_ENV !== "production") globalForDb.aiuDb = db;

export { schema };
