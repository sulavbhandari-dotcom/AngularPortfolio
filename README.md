# Sulav Bhandari — Portfolio

Personal portfolio built with Angular 19, prerendered to static HTML and hosted on GitHub Pages.

**Live:** https://sulavbhandari-dotcom.github.io/AngularPortfolio/

## Editing content

All text — headline, about, services, experience, stack, links — lives in
[`src/app/data/profile.ts`](src/app/data/profile.ts). Change it there and every section updates.

## Development

```bash
npm install
npm start          # http://localhost:4200
npm run build      # production build → dist/hotelinventoryapp/browser
```

## Deployment

Every push to `main` builds and deploys via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

The site is served from the `/AngularPortfolio/` sub-path, so `build:gh-pages` sets that base href. No custom domain should be set under **Settings → Pages**.
