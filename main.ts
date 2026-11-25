// The Moon Finally Answers Back — make.fun entry
// Writes a single line, spoken as the Moon, to /output/entry.txt.
// Deterministic: the same line on every run. No clock, no network,
// no randomness, no input read from anywhere.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Stop howling. Four billion years of wishes, and not one of you has ever wished me a good night.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file is exactly the line, 1-240 characters.
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
