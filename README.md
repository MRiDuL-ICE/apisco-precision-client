# Apisco Precision

Pharmaceutical ingredient sourcing & indenting — Dhaka, Bangladesh.

## Getting started

```bash
npm install
npm run dev
```

## Project structure

```
apisco-precision/
├── app/
│   ├── layout.tsx          # Root layout — metadata, global CSS import
│   └── page.tsx            # Home page (Server Component)
│
├── components/
│   └── site/               # Page-specific components, one file per section
│       ├── gsap-reveal-init.tsx   # Thin client boundary; keeps page.tsx a Server Component
│       ├── header.tsx
│       ├── hero-section.tsx
│       ├── about-section.tsx
│       ├── services-section.tsx
│       ├── product-section.tsx
│       ├── support-section.tsx
│       ├── solutions-section.tsx
│       ├── contact-section.tsx
│       ├── footer.tsx
│       ├── section-header.tsx     # Shared heading primitive
│       └── plain-list.tsx         # Shared list primitive
│
├── hooks/
│   ├── use-active-section.ts  # IntersectionObserver for nav highlight
│   └── use-gsap-reveal.ts     # GSAP scroll-reveal
│
├── lib/
│   └── constants.ts           # All content data (nav items, services, products…)
│
├── styles/
│   └── globals.css            # Single CSS file — design tokens, components, responsive
│
├── types/
│   └── index.ts               # Shared TypeScript types
│
├── public/                    # Static assets (favicon, robots.txt)
├── next.config.ts
├── tsconfig.json
└── package.json
```

## What changed from the original

**Removed:**
- Replit monorepo wrapper (`artifacts/`, `lib/`, `scripts/`) — not needed locally
- Bootstrap dependency — the project already had its own layout primitives that duplicate Bootstrap cols
- 40+ shadcn/Radix/Tailwind packages — none are used in this site
- `src/` directory indirection — App Router doesn't need it
- `src/landing-page.tsx` wrapper — `page.tsx` composes sections directly
- `src/components/site/content-sections.tsx` god file — 5 sections in one file

**Restructured:**
- Each page section is its own file in `components/site/`
- All content data lives in `lib/constants.ts` — one place to edit copy
- Custom hooks extracted: `use-active-section.ts` out of `header.tsx`, `use-gsap-reveal.ts` out of `landing-page.tsx`
- `GsapRevealInit` client component isolates the `"use client"` boundary so `page.tsx` stays a Server Component
- CSS moved from `src/index.css` to `styles/globals.css`
- `package.json` trimmed to actual dependencies (5 runtime deps vs 60+)
# apisco-precision-client
