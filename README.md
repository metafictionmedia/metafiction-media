# Metafiction Media — sketchbook redesign (branch `sketchbook-redesign`)

Next.js app. Paper foreground with cut-out windows; Post-it copy; menu as a pull-tab at the top.

```bash
npm install
npm run dev        # http://localhost:3000
# or production preview
npm run build && npm start
```

Routes: `/` (single-screen home) · `/meta-prompt-studio` (scroll page, parallax inside windows) ·
`/story` · `/development` (Jeffrey only; `/jeffree` redirects here) · `/store`, `/store/[slug]` (Shopify) · `/newsletter` (Mailchimp).

Locked copy lives in `src/lib/copy.ts`. App Store URL is a stub (`APP_STORE_URL`) pointing to https://metapromptstudio.app until the listing is live.
