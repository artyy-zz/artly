# Artly Website

Static, responsive website for the Artly web design/development business.

## Run locally

```powershell
npm install
npm start
```

Then open:

```text
http://localhost:4173
```

## Edit content

- Main layout: `index.html`
- Design system and responsive styling: `src/styles.css`
- Translations, project/service cards, contact links: `src/main.js`
- Logo assets: `assets/artly-white.png` and `assets/artly.png`

## Contact email

The contact form posts to `/api/contact` and sends requests to `artiibela0@gmail.com`.

Set these environment variables before publishing:

```powershell
$env:SMTP_HOST="smtp.gmail.com"
$env:SMTP_PORT="587"
$env:SMTP_USER="your-sender-email@gmail.com"
$env:SMTP_PASS="your-app-password"
$env:SMTP_FROM="Artly <your-sender-email@gmail.com>"
npm start
```

Update the `CONTACT` object at the top of `src/main.js` with the real phone/Viber number before publishing.
