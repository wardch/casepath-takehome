import { Pool } from "pg";

// A shared connection pool. Use it directly, or swap in any ORM or query
// builder you prefer (Drizzle, Prisma, Kysely...). Designing the schema is
// part of the exercise, so there are no tables yet.
const globalForDb = globalThis as unknown as { pool?: Pool };

export const pool =
  globalForDb.pool ??
  new Pool({ connectionString: process.env.DATABASE_URL });

if (process.env.NODE_ENV !== "production") globalForDb.pool = pool;
