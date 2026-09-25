import assert from "node:assert/strict";
import sharp from "sharp";

const poses = [
  "idle",
  "wave",
  "thinking",
  "phone",
  "laptop",
  "designing",
  "pointing",
  "celebrate",
];
for (const pose of poses) {
  const file = `public/arti/arti-${pose}.png`;
  const metadata = await sharp(file).metadata();
  assert.equal(metadata.format, "png", `${pose}: must be a real PNG`);
  assert.equal(metadata.hasAlpha, true, `${pose}: missing alpha`);
  const { data, info } = await sharp(file)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  let transparent = 0,
    opaque = 0;
  let left = info.width,
    top = info.height,
    right = 0,
    bottom = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const alpha = data[(y * info.width + x) * 4 + 3];
      if (alpha === 0) transparent++;
      // The generator's solid interiors are typically alpha 252–253.
      if (alpha >= 250) opaque++;
      if (alpha > 16) {
        left = Math.min(left, x);
        top = Math.min(top, y);
        right = Math.max(right, x);
        bottom = Math.max(bottom, y);
      }
    }
  }
  assert(
    transparent > info.width * info.height * 0.2,
    `${pose}: missing transparent background`,
  );
  assert(
    opaque > info.width * info.height * 0.05,
    `${pose}: missing solid subject`,
  );
  assert(
    left > 0 && top > 0 && right < info.width - 1 && bottom < info.height - 1,
    `${pose}: subject touches image edge`,
  );
  console.log(
    `${pose}: PNG RGBA ${info.width}×${info.height}; transparent ${Math.round((transparent / (info.width * info.height)) * 100)}%; margins ${left}/${top}/${info.width - right - 1}/${info.height - bottom - 1}px`,
  );
}
console.log(
  "All 8 PNGs pass. Visual inspection is still required for identity and fake background patterns.",
);
