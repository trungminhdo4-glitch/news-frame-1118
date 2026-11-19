// Rasterises design/front.svg to entry.png at 1024x1024 with a local headless Edge/Chrome.
// Run once on the author's machine: node design/render.mjs
// The grader never runs this; main.ts only ships the committed entry.png.
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const svg = join(here, 'front.svg');
const out = join(here, '..', 'entry.png');

const candidates = [
  process.env.BROWSER,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/chromium',
  '/usr/bin/google-chrome',
].filter(Boolean);
const browser = candidates.find((p) => existsSync(p));
if (!browser) throw new Error('no headless browser found; set BROWSER');

const profile = join(process.env.TEMP ?? process.env.TMPDIR ?? '/tmp', 'news-frame-render-profile');
execFileSync(browser, [
  '--headless=new',
  `--user-data-dir=${profile}`,
  '--no-first-run',
  '--disable-gpu',
  '--hide-scrollbars',
  '--force-device-scale-factor=1',
  '--window-size=1024,1024',
  `--screenshot=${out}`,
  pathToFileURL(svg).href,
], { stdio: 'inherit' });

const png = readFileSync(out);
const w = png.readUInt32BE(16), h = png.readUInt32BE(20);
console.log(`entry.png ${w}x${h}, ${statSync(out).size} bytes`);
