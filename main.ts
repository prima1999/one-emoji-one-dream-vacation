// One Emoji, One Dream Vacation — a single emoji stands in for the trip.
// This program writes exactly one emoji, nothing else, to the output file.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

// The one emoji for the entry: a sunrise breaking over the sea.
const DREAM_EMOJI = "🌅"; // sunrise over the sea, the first morning of the trip.

// Where the entry goes: the grader's output directory, or /output by default.
const OUTPUT_DIR = process.env["MAKEFUN_OUTPUT_DIR"] ?? "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");

// One emoji only: no words, no spaces, no trailing newline.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, DREAM_EMOJI, { encoding: "utf8" });

// Check the file before finishing: it must hold exactly that one emoji.
const WRITTEN_BACK = readFileSync(OUTPUT_PATH, "utf8");
if (WRITTEN_BACK !== DREAM_EMOJI) {
  throw new Error("entry.txt does not hold exactly one emoji");
}
