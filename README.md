# Sulav Bhandari — Portfolio

Personal portfolio built with Angular 19, prerendered to static HTML and hosted on GitHub Pages.

**Live:** https://sulavbhandari-dotcom.github.io/AngularPortfolio/

## Editing content

All text — headline, about, services, experience, stack, links — lives in
[`src/app/data/profile.ts`](src/app/data/profile.ts). Change it there and every section updates.

The preloader in `src/index.html` is an inline SVG traced from `public/logo.png`; if the logo changes, the SVG paths need regenerating.

## Development

```bash
npm install
npm start          # http://localhost:4200
npm run build      # production build → dist/hotelinventoryapp/browser
```

## Deployment

Every push to `main` builds and deploys via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

`build:gh-pages` uses a relative base href (`./`), so the same build works at https://sulavbhandari-dotcom.github.io/AngularPortfolio/ and at the custom domain https://bhandarisulav.com.np/ (set under **Settings → Pages → Custom domain**).
