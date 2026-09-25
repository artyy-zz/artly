# Artly

A bilingual creative studio website built with Next.js 16.3.4, App Router, React 19, TypeScript, Tailwind CSS 4, Framer Motion, and Lucide React.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. For production, run `npm run build` then `npm start`.

## Quality checks

```sh
npm run lint
npm run typecheck
npm run build
```

## Architecture

- `app/`: home, services, four statically generated service routes, portfolio, contact, and localized not-found page.
- `components/`: shared shell, theme/language provider, reveal/button primitives, asset-backed artwork previews, project dialogs, and page components.
- `lib/content.ts`: bilingual service/project data and verified contact destinations.
- `lib/catalogue.ts`: curated collection membership; every entry points to a real concept and asset.
- `app/globals.css`: light/dark design tokens, responsive layouts, mockup styles, and reduced-motion rules; Tailwind utilities are also available.
- `components/showcase/`: 12 complete Albanian concept websites and social, print, and branding artboard layouts.
- `lib/showcase-data.json`: 16 fictional brand identities and their available deliverables.
- `app/artwork-display.css`: image proportions and gallery/case-study presentation.
- `app/showcase.css` and `app/artwork-designs.css`: responsive demo websites and printable artboards.
- `app/refinements.css`: studio typography, editorial layouts, service previews, portfolio art direction, contact presentation, and responsive refinements, layered after the base styles.
- `lib/use-reduced-motion.ts`: hydration-safe motion preference subscription; CSS also respects reduced motion before hydration.

Text uses typed `c(albanian, english)` pairs and the shared `t()` function. Albanian and dark mode are the defaults. Language and theme are saved locally, with an in-memory fallback when browser storage is unavailable.

## Editing content

Add portfolio entries in `lib/curated.ts` and extend collections in `lib/catalogue.ts`.

Set the studio's verified Instagram URL, WhatsApp URL (for example a valid `https://wa.me/...` destination), and email in `contactDetails`. These are deliberately unset and shown as coming soon until real details are provided.

All visual projects are fictional Artly concepts. Designs are authored in HTML/CSS and SVG; finished artwork is stored locally as WebP and SVG. Photography comes from the credited sources in `public/artwork/PHOTO-CREDITS.md`. Fonts are downloaded at build time by `next/font` and served locally by Next.js.

## Contact flow

The contact page asks for a name, reply address, business, service of interest, and a short message. When a verified studio email is configured, the form opens a prepared email. Until then, it copies the message so no personal data is sent to an unverified destination.

The form saves no personal data to browser storage. Reloading or leaving the contact page clears the draft. Only language and theme persist.

## Before public launch

- Set verified contact destinations.
- Replace or retain the clearly labeled concept projects as desired.
- Connect form delivery when the verified studio channel is available.
- Deploy the application to a compatible Next.js host.

No authentication, database, payment system, or submission backend is included.

## Curated galleries

The four services are Websites, Logo Design, Social Media Management and Graphic Design (Dizajn grafik). The contact form also offers Tjetër / Other for conversations outside those services.

- 12 full responsive websites, using 36 actual desktop, mobile and full-page screenshots.
- 12 logo-only clients in lib/logo-collection.json: editorial, geometric, organic seal, performance, script, pixel-tech, hospitality emblem, corporate, playful, bakery, photography monogram and minimal hotel directions. SVG lettering is outlined; each has primary, mark, dark, light and presentation variants.
- 18 graphic clients: 6 social posts, 4 posters, 4 menus and 4 business/promotional pieces.
- 3 separate management clients with finished posts and publication plans.
- 45 distinct fictional businesses across the four browsing galleries, with no client overlap. The portfolio curates 7 entries from those galleries; the homepage retains 3 website-led case studies.

Membership is explicit in lib/catalogue.ts. New graphics live in lib/graphic-collection.json and components/showcase/graphic-work.tsx, styled by app/curated-art.css. Four restaurant menus and website case-study applications retain their existing source data in lib/showcase-data.json. Identity boards remain available within case studies at /showcase/[slug]/identity; they are not a service.

Former service slugs branding, social-design, flyers-posters, menus and creative-design now return 404. The six old cross-category management campaign pages and assets were retired. Unused service options and collection exports were removed.

### Recreate assets

With a local server running:

- npm run artwork:logos — current independent logo collection.
- npm run artwork:graphic — current graphic and management boards.
- npm run artwork:case-logos — retained website/case-study identities.
- npm run artwork:capture — website screenshots and retained case-study applications.

ARTLY_CAPTURE_URL selects the local origin. ARTLY_CAPTURE_ONLY optionally selects one client. Fonts for logo generation are read from Windows Fonts, or ARTLY_FONT_DIR; the finished outlined SVGs require no font installation in production. Photography is stored locally with credits in public/artwork/PHOTO-CREDITS.md. Capture scripts update the content hash manifest so galleries receive refreshed images.

All clients, offers, plans and contact examples are fictional Artly concepts. Concept contact forms acknowledge locally; no request is sent. Retired assets are kept outside public in ignored output/retired-artwork.
