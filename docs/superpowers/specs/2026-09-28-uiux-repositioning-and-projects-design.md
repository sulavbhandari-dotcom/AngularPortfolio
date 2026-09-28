# UI/UX Repositioning + Selected Work Section

## Goal
Present Sulav as a **UI/UX designer who codes** (design first, engineering as the edge) and showcase design projects in a new "Selected Work" section that is easy to extend.

## 1. Repositioning (copy only, `src/app/data/profile.ts` + hero)
- `headline`: "UI/UX Designer who codes".
- Hero `<h1>` (main-content.component.html): "Design that / **ships.**" (replaces "From idea / to production.").
- `roles` ticker: UI/UX Designer, Product Designer, Design Engineer, Frontend Developer.
- `pitch`: "I design interfaces people love to use — and because I also engineer, every design is built to ship."
- `about`: rewritten to lead with design; engineering background framed as the reason designs are realistic to build.
- `services` (4): UX Research & Wireframes · UI Design & Design Systems · Interactive Prototyping · Design-to-Dev Handoff.
- `stack` marquee: Figma, Photoshop, Illustrator, UI / UX, Prototyping, Design Systems first; existing tech after.
- Hero primary CTA text unchanged; "See my work" button → `#work`.
- Stats, experience, education: unchanged.

## 2. Selected Work section
- New standalone component `src/app/projects/` (`projects.component.{ts,html,scss}`), following the existing section pattern (e.g. `services`).
- Placed in `app.component.html` after `<app-introduction />`. Section `id="work"`.
- Header nav gets a "Work" link to `#work`.
- Data in `profile.ts`:
  ```ts
  export interface Project {
    name: string; url: string; summary: string;
    role: string; tags: string[]; image?: string;
  }
  ```
  Initial entries:
  - **MM Silver** — https://www.mmsilver.in — "A storefront for a silver jewellery brand, designed so product browsing feels calm and premium and the craftsmanship stays the focus." — role "UI/UX Design" — tags: E-commerce, Web, Figma.
  - **KMC SEEP Mela 2082** — https://kmc.seepmela.com/ — "The event platform for Kathmandu Metropolitan City's SEEP Mela 2082: a clear, accessible interface that helps visitors and participants find what they need fast." — role "UI/UX Design" — tags: Event Platform, Public Sector, Web.
- Card: large media area (image if `image` set, else gold-gradient placeholder with project initials), name, summary, role chip, tags, "Visit site ↗" link (`target="_blank" rel="noopener"`). Whole card hover lift consistent with site; uses existing `.reveal` scroll animation.
- Layout: 2 columns ≥ 768px, 1 column below. No horizontal scroll at 375px.
- Adding a project = append one object to `PROFILE.projects`.

## Out of scope
Case-study pages, real screenshots (placeholders until provided), new design stats.

## Verification
`ng build` passes; run dev server and check in browser: hero copy, nav "Work" link scrolls to section, both cards render with placeholders and working external links, mobile width (375px) layout.
