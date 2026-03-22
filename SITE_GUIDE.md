# Tricode Digital — Site Guide

Quick reference for making changes to tricode.digital.

---

## Content Changes

Almost all site text lives in one file:

**`src/lib/constants.ts`**

| Export | What it controls |
|--------|-----------------|
| `HERO` | Headline, subline, badge text, CTA button labels |
| `SERVICES` | The 4 service cards (title, description, icon) |
| `LEVELMIX` | Case study text, tech stack badges, highlight bullets, URL |
| `SITE` | Company name, email, LinkedIn URL, GitHub URL |
| `NAV_LINKS` | Navigation link labels and scroll targets |

---

## Section Layout Files

Each section of the page has its own file. Edit these when you want to change layout, spacing, or structure beyond just the text.

| Section | File |
|---------|------|
| Hero (headline, particles, scroll effects, glows) | `src/components/sections/HeroSection.tsx` |
| Navigation bar (logo, links, mobile menu) | `src/components/layout/Navbar.tsx` |
| Services (card grid, glass background) | `src/components/sections/ServicesSection.tsx` |
| Case Study (two-column LevelMix layout) | `src/components/sections/CaseStudySection.tsx` |
| About (photo, bio, credentials) | `src/components/sections/AboutSection.tsx` |
| Contact (email, social links) | `src/components/sections/ContactSection.tsx` |
| Footer (copyright) | `src/components/layout/Footer.tsx` |

---

## Styling & Design Tokens

**`src/app/globals.css`**
- All brand colors are in the `@theme` block at the top
- Hero animations (`fadeUp`, `bounce`)
- Grain overlay, skip-to-content, focus styles, reduced motion

**Key color tokens:**
- `text-primary` — cream (#FAF5EF), used for all headings and body text
- `text-secondary` — gray (#9CA3AF), used for descriptions
- `accent-purple` — violet (#7C31B2), primary brand color
- `accent-orange` — warm orange (#E88E40), CTAs and highlights
- `accent-gold` — golden (#F8B447), badges
- `bg-primary` — near-black (#0A0A14), page background

---

## Reusable UI Components

| Component | File | Purpose |
|-----------|------|---------|
| GradientButton | `src/components/ui/GradientButton.tsx` | Primary and outline CTA buttons |
| ServiceCard | `src/components/ui/ServiceCard.tsx` | Glass-morphism service cards |
| SectionHeader | `src/components/ui/SectionHeader.tsx` | Eyebrow + heading + description |
| TechBadge | `src/components/ui/TechBadge.tsx` | Tech stack pills (monospace) |
| GradientDivider | `src/components/ui/GradientDivider.tsx` | Gradient lines between sections |
| ScrollReveal | `src/components/layout/ScrollReveal.tsx` | Scroll-triggered fade-in wrapper |
| ParticleNetwork | `src/components/canvas/ParticleNetwork.tsx` | Hero particle animation system |

---

## Page Assembly

**`src/app/page.tsx`** — Controls the order of all sections. Add, remove, or reorder sections here.

**`src/app/layout.tsx`** — Root layout: fonts, page metadata (title, Open Graph tags), grain overlay.

---

## Assets

| Asset | Location |
|-------|----------|
| Logo | `public/logo.png` (replace to swap logo) |
| Favicon | `src/app/favicon.ico` |

---

## Common Tasks

**Change the hero headline:**
Edit `HERO.headline` and `HERO.headlineAccent` in `src/lib/constants.ts`

**Add a new service card:**
Add an entry to the `SERVICES` array in `src/lib/constants.ts`. Available icons: `cloud`, `code`, `strategy`, `shield`.

**Update contact info:**
Edit `SITE.email`, `SITE.linkedin`, `SITE.github` in `src/lib/constants.ts`

**Change a brand color:**
Edit the `@theme` block in `src/app/globals.css`

**Add a new section:**
1. Create a file in `src/components/sections/`
2. Import and add it to `src/app/page.tsx`

**Swap the About photo:**
Replace the placeholder div in `src/components/sections/AboutSection.tsx` with a Next.js `<Image>` component pointing to your photo in `public/`.

---

## Running the Site

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
```
