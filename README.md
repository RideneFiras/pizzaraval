# Pizza Raval — Website Build

Two website builds for **Pizza Raval** (Argentine-style pizzeria in El Raval, Barcelona) — same business, two delivery paths.

This repo demonstrates a "factory" workflow: one client brief, two deliverables. The static one is for fast cold-outreach demos; the Next.js one is the premium build a paying client gets.

The business: Pizza Raval (takeaway · Joaquín Costa 18) and Pizza Raval Bar (Sitges 6). Argentine pizzas, empanadas, milanesas. Two locations, one WhatsApp number, ~7,000 Instagram followers, no website until now.

---

## What's in here

| Folder | Stack | When to use |
|---|---|---|
| [`pizza-raval/`](./pizza-raval) | Static HTML + Tailwind CDN + Motion One | Cold-outreach demos. Built in minutes. Drag-and-drop deploy. **Includes a live theme switcher (red / green / hybrid) + ES/EN toggle for pitching.** |
| [`pizza-raval-premium/`](./pizza-raval-premium) | Next.js 15 + TypeScript + Framer Motion | Post-conversion premium build. Editorial cinematic direction with full-bleed photography, italic display serif, parallax hero, structured menu data. |

Both are 100% personalized to the same business — same logo, same menu (real prices from their May 2026 PDFs), same reviews, same WhatsApp deep links. Different visual languages.

---

## Quick-site

![quick-site preview](./screenshots/quick-site.jpeg)

3 themes you can flip through live (red / green / hybrid) plus ES/EN. Designed for prospecting calls where you want to ask *"which direction speaks to you?"* without rebuilding.

**Full screenshots and details:** [`pizza-raval/README.md`](./pizza-raval/README.md)

---

## Premium build

![premium preview](./screenshots/premium.jpeg)

Single committed editorial direction — full-bleed photography, italic display serif, brass-accent palette, Framer Motion choreography, structured TypeScript menu data, React Context i18n.

**Full screenshots and details:** [`pizza-raval-premium/README.md`](./pizza-raval-premium/README.md)

---

## Repo conventions

- `pizza-raval/` ships as **3 files** (`index.html`, `styles.css`, `assets/`). Deployable by drag-and-drop.
- `pizza-raval-premium/` is a real Next.js project — `npm install && npm run dev` to run. Deploy with `vercel`.
- Real client data (menu prices, addresses, phone) is sourced from publicly-distributed printed menus and Google Maps listings.
- Photos are sourced from TheFork's CDN. Replace with owner-supplied photos before going live commercially.

## Pre-flight before any commercial use

- 🔁 Replace TheFork photos with owner-supplied imagery
- ❓ Confirm with owner: shared WhatsApp number, bar opening hours, dietary disclaimers
- 🎨 Source a higher-resolution logo (current is a JPG mark; an SVG would scale cleaner)
