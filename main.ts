// News Frame 18-11: ships the picture of the world's news of Wednesday 18 November 2026.
// entry.png is rendered from design/front.svg (hand-written SVG) by design/render.mjs on the author's machine;
// the grader has no network and no browser, so this program only copies those fixed bytes to /output/entry.png,
// which makes every run byte-identical.
//
// Locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const MAX_BYTES = 1048576;
const MAX_SIDE = 1024;
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const bytes = readFileSync(new URL('./entry.png', import.meta.url));

// Fail loudly rather than ship an image the gate would refuse.
if (!bytes.subarray(0, 8).equals(PNG_SIGNATURE)) throw new Error('entry.png is not a PNG');
if (bytes.length > MAX_BYTES) throw new Error(`entry.png is ${bytes.length} bytes, over 1 MiB`);
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > MAX_SIDE || height > MAX_SIDE) throw new Error(`entry.png is ${width}x${height}, over ${MAX_SIDE}px`);
if (!bytes.subarray(bytes.length - 8, bytes.length - 4).equals(Buffer.from('IEND'))) throw new Error('entry.png is truncated');

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'), bytes);
