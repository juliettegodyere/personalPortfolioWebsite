# Personal Portfolio Website

A **girly + professional** portfolio (warm blush/lavender accents + crisp layout) that highlights:
- Your **progression** from Software Engineering → **Embedded Systems / Electronics / IoT**
- Your **adaptability** across domains
- Your **mentoring** work (Scratch + Python)

Built with **Next.js (App Router)** + **Tailwind CSS**.

## Quick start

From this folder:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Where to edit content (most important)

Update your name, email, links, skills, timeline, and projects here:

- `components/content/site.ts`

That file is intentionally the “single source of truth” so you can keep improving your portfolio without redesigning anything.

## Site structure

- `app/page.tsx`: page composition (sections)
- `components/SidebarNav.tsx`: Brittany-inspired layout (sidebar on desktop, compact header on mobile)
- `components/sections/*`: About, Skills, Timeline, Projects, Mentoring, Contact
- `app/globals.css`: color tokens + background glow (Tania-inspired warmth)

## Customization ideas (optional)

- Add a real photo: create `public/avatar.jpg` and place an `<img />` in `components/SidebarNav.tsx`
- Replace “WIP” project placeholders with real repos + demos
- Add a dedicated `/projects` page later if you want longer case studies

## Deployment

This is a standard Next.js app. Easiest options:
- **Vercel** (recommended for Next.js)
- Netlify (works, depending on features used)

## Notes

This design is **inspired by the feel** of the references you shared (warm + feminine + polished, and clean + professional + structured) without copying their code or layout directly.

