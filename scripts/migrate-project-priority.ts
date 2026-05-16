/**
 * One-shot migration: set `priority = "normal"` on every project document
 * that does not already have a priority set.
 *
 * Run once with:
 *   npx tsx scripts/migrate-project-priority.ts
 *
 * Requires NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and
 * SANITY_API_WRITE_TOKEN. Reads .env.local if present.
 */
import { config as loadEnv } from "dotenv";
import { createClient } from "@sanity/client";
import path from "node:path";

loadEnv({ path: path.resolve(process.cwd(), ".env.local") });
loadEnv();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  console.error(
    "Missing env vars. Need NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and SANITY_API_WRITE_TOKEN."
  );
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

type ProjectRow = { _id: string; title?: string };

async function run() {
  const projects = await client.fetch<ProjectRow[]>(
    `*[_type == "project" && !defined(priority)]{ _id, title }`
  );

  if (projects.length === 0) {
    console.log('Nothing to migrate — every project already has a priority set.');
    return;
  }

  console.log(`Setting priority = "normal" on ${projects.length} project(s)…`);
  const tx = client.transaction();
  for (const p of projects) {
    console.log(`  • ${p.title ?? p._id}`);
    tx.patch(p._id, (patch) => patch.set({ priority: "normal" }));
  }
  const result = await tx.commit();
  console.log(`Done. Committed transaction ${result.transactionId}.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
