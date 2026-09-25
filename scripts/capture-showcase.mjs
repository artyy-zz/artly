import {writeArtworkManifest} from "./artwork-manifest.mjs";
import fs from "node:fs/promises";
import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";
import sharp from "sharp";
const require = createRequire(import.meta.url);
const cli = require.resolve("@playwright/cli/playwright-cli.js");
const base = process.env.ARTLY_CAPTURE_URL ?? "http://localhost:3000";
const data = JSON.parse(await fs.readFile("lib/showcase-data.json", "utf8"));
const destination = "output/playwright/finished-captures";
await fs.mkdir(destination, { recursive: true });
await fs.mkdir("public/artwork/finished", { recursive: true });
function run(...args) {
  const result = spawnSync(
    process.execPath,
    [cli, "-s=artly-capture", ...args],
    { encoding: "utf8", timeout: 180000, maxBuffer: 8 * 1024 * 1024 },
  );
  if (
    result.error ||
    result.status !== 0 ||
    result.stdout.includes("### Error")
  )
    throw new Error(result.error?.message ?? result.stderr + result.stdout);
  return result.stdout;
}
async function capture(jobs) {
  if(process.env.ARTLY_CAPTURE_KINDS) jobs=jobs.filter(j=>process.env.ARTLY_CAPTURE_KINDS.split(',').includes(j[1]));
  if(process.env.ARTLY_CAPTURE_ONLY) jobs=jobs.filter(j=>j[0]===process.env.ARTLY_CAPTURE_ONLY);
  for (let i = 0; i < jobs.length; i += 8) {
    const group = jobs.slice(i, i + 8);
    run(
      "run-code",
      `async page => {await page.emulateMedia({reducedMotion:'reduce'});const errors=[];page.on('pageerror',e=>errors.push(e.message));for(const [id,kind,width,height] of ${JSON.stringify(group)}){await page.setViewportSize({width,height});await page.goto(${JSON.stringify(base)}+'/showcase/'+id+(kind.startsWith('website')?'':'/'+(kind==='branding'?'identity':kind)));await page.locator(kind.startsWith('website')?'.showcase-design':'.artboard').first().waitFor();await page.evaluate(()=>document.fonts.ready);await page.waitForFunction(()=>Array.from(document.images).every(i=>i.complete&&i.naturalWidth>0));await page.locator('img').evaluateAll(xs=>Promise.all(xs.map(x=>x.decode())));if(kind==='website-full'){for(let y=0;y<await page.evaluate(()=>document.documentElement.scrollHeight);y+=900){await page.evaluate(y=>window.scrollTo({top:y,behavior:'instant'}),y);await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));}await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));}await page.screenshot({fullPage:kind==='website-full',path:${JSON.stringify(destination)}+'/'+id+'-'+kind+'.png'});}if(errors.length)throw new Error(errors.join('\\n'));return 'Captured '+${group.length}+' designs';}`,
    );
    for (const [id, kind] of group)
      await sharp(`${destination}/${id}-${kind}.png`)
        .webp({ quality: 88, effort: 5 })
        .toFile(`public/artwork/finished/${id}-${kind}.webp`);
    console.log(
      `Captured and optimized ${Math.min(i + 8, jobs.length)}/${jobs.length}.`,
    );
  }
}
try {
  run("open", base);
  // Branding compositions include these actual website screenshots, so render websites first.
  await capture(
    data.filter((b) => b.web).flatMap((b) => [[b.id, "website", 1440, 1100],[b.id,"website-mobile",390,844],[b.id,"website-full",1440,1100]]),
  );
  await writeArtworkManifest();
  await capture(
    data.flatMap((b) => [
      ...(b.social ? [[b.id, "social", 1080, 1350]] : []),
      ...(b.creative ? [[b.id,"creative",1450,1000]] : []),
      ...(b.menu ? [[b.id, "menu", 1000, 1400]] : []),
      ...(b.poster ? [[b.id, "poster", 1000, 1400]] : []),
      ...(b.brand ? [[b.id, "branding", 1600, 1100]] : []),
    ]),
  );
  await writeArtworkManifest();
  console.log("Finished artwork previews saved to public/artwork/finished.");
} finally {
  run("close");
}
