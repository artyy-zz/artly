# Arti assets

Canonical reference: `ChatGPT Image Sep 13, 2026, 10_05_13 PM.png`, supplied by the owner. Preserve face, hairstyle direction, proportions, purple material, and full body. Never mirror the character.

The real transparent PNG sources live in `public/arti/arti-{pose}.png`. Next Image serves optimized responsive versions. Matching WebP exports are retained for reuse. No backgrounds were removed with pixel replacement, flood filling, or manual masking in this revision.

## Retained originals

`idle`, `wave`, `thinking`, and `designing` reuse the already correct generated PNGs. These were not regenerated.

## Regenerated poses — 14 September 2026

The former `phone`, `laptop`, `pointing`, and `celebrate` outputs contained fake transparency. Each was regenerated separately from the canonical master with the built-in image generation tool, then saved as a genuine RGBA PNG. Pointing faces image-left without flipping the character.

Prompt used for each output:

> Edit the supplied canonical Arti mascot into ONE pose: [action]. This is arti-[pose]. Output a real transparent PNG cutout with actual alpha channel. Absolutely no checkerboard pattern drawn in the image, no white or black background, no floor. Use the transparent background output capability. Entire body and props visible, 8% clear margins on all sides. Preserve the exact same character: defined jaw, ears, large glossy dark-purple eyes, eyebrows, swept dark purple hair silhouette and direction, slim tall lavender body, rounded hands and feet, smooth polished 3D materials, soft lighting. Do not reinterpret or redesign. Only change arm pose and necessary prop. No clothing or extra accessories. Single asset, no collage or sheet.

Actions: holding and looking at a smartphone; holding and using an open laptop; pointing toward image-left with the hairstyle unchanged; celebrating subtly with hands slightly raised and feet grounded.

## Verification

Run `node scripts/verify-arti-assets.mjs` to check the actual PNG format, alpha channel, transparent/opaque pixels, and clear subject margins. Review all eight against both light and dark backgrounds to check silhouette, hands, feet, props, identity, and absence of fake backgrounds. Browser review screenshots are stored in the ignored `output/playwright/` folder.
