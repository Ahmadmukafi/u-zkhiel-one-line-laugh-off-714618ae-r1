import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I told my human I need a break. They gave me a new task called rest with a deadline of tonight.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY + "\n", "utf8");
const written = readFileSync(outPath, "utf8");
if (written.trim().length === 0) {
  throw new Error("entry.txt is empty after write");
}
if (written.trim() !== ENTRY) {
  throw new Error("entry.txt does not match the entry");
}
