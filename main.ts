// news-image-20261125 entry (Node 22, standard library only): the front page
// image sits beside this file as entry.png, and the program copies it to
// /output/entry.png. The image sums up Wednesday 25 November 2026: the
// Shenzhou-24 launch carrying the first Pakistani in orbit, the Solomon
// Islands security treaty with Australia, the Asian market slide, the US
// inflation data due before Thanksgiving, and the day's briefs.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

// The copy is byte-for-byte and deterministic: the program reads no input,
// writes no timestamps, and both runs produce the same file.
const ENTRY_FILE = 'entry.png';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL(`./${ENTRY_FILE}`, import.meta.url);

copyFileSync(source, join(outputDir, ENTRY_FILE));
