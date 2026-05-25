/**
 * One-shot migration: convert the numeric `orderRank` field to the string
 * lexorank format used by `@sanity/orderable-document-list`, preserving the
 * existing curated order. Run once per dataset.
 *
 *   # dev (uses current .env.local — exk3777z while on the dev branch)
 *   npx tsx scripts/migrate-order-rank.ts
 *
 *   # prod: point the env at the prod project first
 *   npm run env:prod && npx tsx scripts/migrate-order-rank.ts && npm run env:dev
 *
 * Safe to re-run: it re-ranks documents in their current displayed order.
 * Requires NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and
 * SANITY_API_WRITE_TOKEN. Reads .env.local then .env.
 */
import { config as loadEnv } from "dotenv";
import { createClient } from "@sanity/client";
import { LexoRank } from "lexorank";
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

// Types now ordered via @sanity/orderable-document-list (drag-and-drop).
const TYPES = ["faqItem", "client", "testimonial", "office", "howWeWorkStep"];

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

type Row = { _id: string };

async function migrateType(type: string) {
  // Order by the existing rank (numeric pre-migration, lexical after) then
  // creation date, so the curated order is the basis for the new ranks.
  const docs = await client.fetch<Row[]>(
    `*[_type == $type] | order(orderRank asc, _createdAt asc){ _id }`,
    { type }
  );
  if (docs.length === 0) {
    console.log(`  ${type}: nothing to migrate`);
    return;
  }

  const tx = client.transaction();
  const rankByBase = new Map<string, string>();
  let rank = LexoRank.middle();

  for (const d of docs) {
    const base = d._id.replace(/^drafts\./, "");
    let value = rankByBase.get(base);
    if (!value) {
      value = rank.toString();
      rankByBase.set(base, value);
      rank = rank.genNext();
    }
    // Patch every existing version (draft + published) with the same rank.
    tx.patch(d._id, (p) => p.set({ orderRank: value }));
  }

  await tx.commit();
  console.log(`  ${type}: ranked ${rankByBase.size} document(s)`);
}

async function run() {
  console.log(`Migrating orderRank → lexorank on ${projectId}/${dataset}`);
  for (const type of TYPES) {
    await migrateType(type);
  }
  console.log("Done.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
