# Doon Presidency School — Website

A premium, enterprise-level website for **Doon Presidency School**, Premnagar, Dehradun — built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

> _ज्ञानेन मुक्तिः — Knowledge is Liberation_

## ✨ Highlights

- **15+ pages** covering every aspect of the school
- **Premium design system** — navy + gold + cream, elegant typography (Playfair Display, Inter, Tiro Devanagari)
- **Fully responsive** — mobile, tablet, desktop
- **Accessible** — skip link, semantic HTML, ARIA labels, keyboard nav, focus states
- **SEO ready** — metadata, OpenGraph, sitemap.xml, robots.txt
- **Print-friendly** — Fee Structure & Rules pages print cleanly
- **Fast** — Static site generation, optimized images, no runtime dependencies
- **No AI / API keys required** — deploys anywhere

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Home
│   ├── about/                    # About + sub-pages
│   │   ├── page.tsx
│   │   ├── founder/page.tsx
│   │   ├── vision-mission/page.tsx
│   │   └── principal/page.tsx
│   ├── academics/                # Academics + sub-pages
│   │   ├── page.tsx
│   │   ├── subjects/page.tsx
│   │   ├── exam-promotion/page.tsx
│   │   └── timings/page.tsx
│   ├── admissions/
│   │   ├── page.tsx
│   │   └── prospectus/page.tsx
│   ├── facilities/
│   │   ├── page.tsx
│   │   ├── labs/page.tsx
│   │   ├── library/page.tsx
│   │   └── sports/page.tsx
│   ├── student-life/
│   │   ├── page.tsx
│   │   ├── uniform/page.tsx
│   │   └── council/page.tsx
│   ├── fee-structure/page.tsx
│   ├── scholarship/page.tsx
│   ├── rules/page.tsx
│   ├── prayer/page.tsx
│   ├── events/page.tsx
│   ├── achievements/page.tsx
│   ├── calendar/page.tsx
│   ├── gallery/page.tsx
│   ├── faculty/page.tsx
│   ├── career/page.tsx
│   ├── mandatory-disclosure/page.tsx
│   ├── contact/page.tsx
│   ├── not-found.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── layout.tsx
│   └── globals.css
├── components/                   # Reusable UI
│   ├── Header.tsx                # Sticky nav with mobile menu
│   ├── Footer.tsx
│   ├── PageHeader.tsx            # Hero for inner pages
│   ├── CtaBanner.tsx             # Call-to-action banner
│   └── icons.tsx                 # Inline SVG icon set
├── data/                         # Centralized content
│   ├── school.ts                 # School info, navigation
│   └── content.ts                # Fee, rules, holidays, etc.
└── public/
    └── images/                   # School photos & logo
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# → open http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

## 🌍 Deployment

The site is a standard Next.js static site. Deploy anywhere:

- **Vercel** (recommended) — zero config
- **Netlify** — connect repo, build command `npm run build`, output `.next`
- **GitHub Pages** — needs `output: 'export'` in `next.config.mjs`
- **Any static host** — `npm run build && npm start`

## 🎨 Design Tokens

Defined in `tailwind.config.ts` and `globals.css`:

- **Navy** — primary background / text (`#0f1c33`)
- **Gold** — accent, highlights, CTAs (`#d99a2c`)
- **Cream** — page background (`#faf6ec`)
- **Fonts** — Playfair Display (display), Cormorant Garamond (serif), Inter (body), Tiro Devanagari Hindi (Hindi text)

## ✏️ Editing Content

All school information lives in two files:

- `src/data/school.ts` — name, address, contact, navigation menu
- `src/data/content.ts` — fee, rules, holidays, scholarship, exam schedule, uniforms

To update the principal's name, contact details, or any other school info, edit these files and the changes reflect across all pages.

## 📞 School Information (reference)

- **Name:** Doon Presidency School
- **Address:** 2-B, Premnagar, Dehradun, Uttarakhand 248007
- **Board:** ICSE / ISC
- **Established:** 1981
- **Society:** Rama Shikshan Sansthan
- **Phone:** 0135-2771324 / 0135-2773216
- **Email:** dps_doon07@rediffmail.com

## 📝 License

This website was custom-built for Doon Presidency School. All school content, logo, and photographs are property of the school.
