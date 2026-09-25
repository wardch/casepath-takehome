import { pool } from "@/lib/db";

// Quick check that the app can reach Postgres. Visit /api/health.
export async function GET() {
  try {
    const { rows } = await pool.query("select version()");
    return Response.json({ ok: true, database: rows[0].version });
  } catch (error) {
    return Response.json(
      { ok: false, error: (error as Error).message },
      { status: 500 },
    );
  }
}
