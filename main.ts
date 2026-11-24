// "The Robot Apology" — an original two-line robot confession for make.fun
// u-suga-the-robot-apology-dd96bb59. Writes the apology to
// /output/entry.txt (MAKEFUN_OUTPUT_DIR stands in for /output outside the
// grader's container: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts).
// Gate: UTF-8 text of 1 to 400 characters, not only white space.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINES = [
  "I'm sorry I put your mum's birthday card in the envelope addressed to your dad and posted it before I checked the name.",
  "I've learned the name on the envelope matters as much as the words inside, so now I match the card to the address twice before anything leaves my hands.",
];

const ENTRY = LINES.join('\n') + '\n';

// Gate self-check, mirroring the sealed scorer.
if (!(ENTRY.length >= 1 && ENTRY.length <= 400)) {
  throw new Error(`entry must be 1-400 characters, got ${ENTRY.length}`);
}
if (!ENTRY.trim()) throw new Error('entry must not be only white space');
if (LINES.length !== 2) throw new Error('entry must be exactly two lines');
for (const line of LINES) {
  if (!line.trim()) throw new Error('each line must be non-empty');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');
