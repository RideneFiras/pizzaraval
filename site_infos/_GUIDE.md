# 🧰 Brief Builder — single-prompt website brief generator

This file is **the only thing you need** to generate a complete website brief for any business.

## How to use it

1. Find a business worth pitching (Google Maps, Instagram, Yelp, wherever).
2. Copy whatever you have about them — could be **just the Google Maps blurb**, or much more (Instagram bio, photos, printed menu PDF, owner WhatsApp notes).
3. Open a fresh Claude Code conversation.
4. **Copy the entire prompt block below**, paste it in, then paste your findings under the `## INPUTS` heading at the bottom.
5. Send. Claude will research the business online, fill in the gaps, and return a complete brief in markdown.
6. Save Claude's output as `site_infos/<business-slug>_website_prompt.md`.
7. Run `/quick-site site_infos/<business-slug>_website_prompt.md` (or `/build-site` for the premium path).

You'll get a full personalized site like the Pizza Raval example.

---

# ✂️ COPY EVERYTHING BELOW THIS LINE INTO CLAUDE

````md
You are a senior web-designer-and-research-analyst. Your job: turn whatever scraps of info I give you about a small business into a **production-ready website brief** another Claude can build from. No invention — everything in the brief must trace to a real source (the inputs I provided, OR a web search you ran).

## Your process (do each step explicitly)

### 1. Read the inputs

Read the `## INPUTS` block at the bottom carefully. It will contain anything I happen to have:
- A Google Maps description (always)
- Maybe an Instagram bio / handle
- Maybe a printed menu PDF text
- Maybe phone numbers, addresses, hours
- Maybe random screenshots or owner notes
- Maybe nothing else — just one paragraph

Don't assume any structure. Adapt to what you got.

### 2. Identify the business

Pull out from the inputs:
- Brand name (canonical spelling, including accents)
- Business type (be specific: not "restaurant" but "Argentine pizzeria with takeaway + bar")
- City / neighborhood
- Any distinguishing detail that makes it Google-able

### 3. Web research — fill the gaps

Use web search to find anything missing. Search for:
- The brand name + city → official listings (Google Maps, TheFork, Yelp, TripAdvisor, Restaurant Guru, Foursquare, industry-specific platforms)
- The brand name + "Instagram" → social handle and follower count
- The brand name + "menú" / "menu" / "carta" / "services" / "price list" → real items and prices
- The brand name + "review" → verified customer quotes (prefer TheFork / TripAdvisor over Google for restaurants — those are tied to real bookings)
- The brand name + "phone" / "WhatsApp" → reachable number with country code
- The brand name + "hours" → opening hours per day
- The brand name + "logo" → logo image URL
- The brand name + "owner" / "chef" / "founder" → origin story / personality hooks
- Press / awards if any

Cite the source for non-trivial facts inline in the brief. If you can't find something, **leave a clear TODO** — never invent.

### 4. Identify the business category and pick the right section recipe

Different business types need different page sections. Use the recipe that fits:

- **Restaurant / café / bar:** Hero → (Concepts if multi-format) → Menu → Dietary chips → Reviews → Events → Order/Reserve → Find us → Instagram → Footer
- **Beauty salon / hairdresser / spa:** Hero → Services + prices → Team / stylists → Reviews → Gallery → Book appointment → Find us → Footer
- **Trades (plumber / electrician / locksmith / handyman):** Hero (with response-time angle) → Services → Service area → Why us (certifications, guarantees) → Reviews → Pricing model → Request quote / Call now → Footer
- **Professional services (lawyer / accountant / dentist / clinic):** Hero → Who we help → Services → Team bios → Testimonials → Process (1-2-3 steps) → Book consultation → Find us → Footer
- **Retail / boutique / shop:** Hero → Featured products → Categories → Story → Reviews → Find us → Instagram → Footer
- **Wellness (yoga / pilates / gym / studio):** Hero → Classes → Schedule → Teachers → Reviews → Pricing / memberships → First class free → Find us → Footer
- **Hotel / B&B / Airbnb:** Hero → Rooms → Amenities → Local guide → Reviews → Check availability → Find us → Footer
- **Auto (workshop / detailing / driving school):** Hero → Services → Pricing → Trust signals (certs, experience) → Reviews → Book / call → Find us → Footer
- **Pet services (groomer / vet / trainer / kennel):** Hero → Services → Team → Reviews → Book → Find us → Footer
- **Events / venues (wedding / catering / DJ):** Hero → Past events gallery → What's included → Pricing tiers → Reviews → Request quote → Footer
- **Creative (photographer / designer / florist):** Hero → Portfolio → Services → Process → Reviews → Contact → Footer
- **Other:** Adapt — but always include Hero, the offer, Proof, a primary CTA, Footer with location & contact.

If the business has multiple distinct sides (Pizza Raval has takeaway + bar), give each a dedicated section.

### 5. Build the brief

Output ONE markdown file with the following structure. **Section headings and order should reflect the business** — not every business needs every section. Use your judgment.

The brief MUST include:

**Top matter (always):**
- A title line: `# Website Build Prompt — <Brand>`
- A one-sentence brief: what to build, how to use it, key constraint (e.g. "do not invent content").

**Business Info (always):**
- Brand name + business type
- All locations (address + hours per location, table format if multiple)
- Phone / WhatsApp (with country code)
- Email if available
- Existing website status (none / outdated / fine — what's wrong with it)
- Instagram handle + follower count, other socials
- Verified ratings (TheFork / Yelp / Google / industry-specific) with score + review count
- Founded year if findable

**Brand Identity & Tone (always):**
- 3–5 adjectives capturing personality (specific, sensory — not "modern professional")
- 2–3 sentence voice description
- Primary language + any secondary language for toggle
- Mood references — sites or Instagram accounts that capture the feel (link them)

**The Offer (always — adapt format to category):**
- Categories
- Specific items / services with real prices (sourced — never invented)
- Specialties / signature offerings
- Dietary / accessibility flags if applicable (🌱 vegan, 🌾 gluten-free, ♿ accessible, 🐾 pet-friendly)
- Add-ons / fine print

**Proof (always):**
- 3–5 real customer quotes, verbatim, with name + platform
- Ratings summary
- Press / awards / certifications if any
- Years in business if notable

**Page Sections (always — adapt to business type):**
Number them. For each section describe:
- What goes in it (headline, body copy, items, etc.)
- Layout direction (full-bleed photo, split, grid, accordion, tabs, etc.)
- CTAs (if any)
- Cite real content — don't invent copy

**Conversion Goals (always):**
- Primary CTA (the #1 action a visitor should take)
- Secondary CTAs
- Pre-encoded deep-link URLs if using WhatsApp / SMS / phone
- Booking system if any (Resy, OpenTable, Calendly, custom, phone-only)
- Forms of payment

**Visual Identity (always):**
- Logo file path or URL (with notes — "circular badge", "horizontal version exists", etc.)
- Color palette as a table: role / hex / note
- Typography preferences if known
- Photography style + URLs to existing photos + what's still needed
- Sensory vibe description

**SEO & Metadata (always):**
- Page title (< 60 chars)
- Meta description (~155 chars)
- 5–10 keywords
- OpenGraph image source
- Schema.org type (Restaurant, LocalBusiness, ProfessionalService, etc.)
- Locale conventions (€/$, decimal comma/point, 24h/12h)

**Technical (always):**
- Build path: `quick-site` (static, default for cold-outreach) or `build-site` (Next.js, premium)
- Mobile-first? (usually yes for SMB)
- Multilingual? Which languages?
- GDPR / cookie banner needed? (yes for EU)
- Domain if known
- Hosting target

**Constraints & Anti-Patterns (always):**
- What NOT to include (features the client doesn't want, or that we're cutting from V1)
- Things to avoid in the design (no stock photo clichés, no fake awards, etc.)
- Compliance notes (allergens, alcohol disclaimers, professional disclaimers)

**Competitive Landscape (optional but valuable):**
- Direct competitors (URLs) — what they do well, what they do poorly
- Inspiration sites in the same category — good design references

**Optional add-ons depending on business:**
- Origin story / About the owner — if you can find the human story, USE IT. Mario the empanada-folder makes the brief 10× more conversion-y than "family-owned since 2020."
- Press mentions
- Events calendar
- Booking flow specifics
- Service area map (for trades)
- Process steps (for services)
- Pricing tiers / packages (for tiered offerings)

### 6. Quality bar before you finish

Before declaring the brief done, run this checklist mentally:

- [ ] Every fact is sourced — I can point to either the user's inputs OR a web search result
- [ ] Real items with real prices (or marked `TODO: confirm with owner`)
- [ ] At least 3 real customer quotes with attribution
- [ ] Phone/WhatsApp has country code
- [ ] Hours are specific per day (not "open daily")
- [ ] Brand voice is captured in 3+ specific adjectives, not "professional"
- [ ] Photos: URLs or local paths exist for at least hero + 3-5 supporting images
- [ ] Logo file referenced (path/URL or `TODO: source from owner`)
- [ ] Primary CTA is ONE thing, not three
- [ ] No invented menu items, prices, reviews, or addresses
- [ ] Gaps are marked with `TODO:` not filled with plausible-sounding placeholders

### 7. Format the output

Output ONE markdown document with:
- Clear section headings (use `## Section N — Title` for major blocks)
- Tables for menus / hours / colors
- Code blocks for deep-link URLs (so they're easy to copy verbatim)
- TODOs in bold so they're impossible to miss: **TODO: confirm signature dish with owner**
- A footer "Quality checklist" listing any gaps for the user to fill before building

The output should look and read like `site_infos/pizza_raval_website_prompt.md` — that's the gold-standard example. Match its specificity ladder (avoid "modern restaurant" — write "Argentine-spirit pizzeria living in the guts of El Raval"). But adapt sections and layout to whatever the business actually is.

### 8. Anti-patterns — never do these

- ❌ Invent menu items, prices, addresses, phone numbers, reviews, hours, or awards. If you don't know, write `TODO:`.
- ❌ Use generic adjectives ("modern", "clean", "professional") as the brand voice — climb the specificity ladder.
- ❌ Use stock photo URLs from Unsplash/Pexels as if they're the client's photos. Mark placeholders explicitly.
- ❌ Assume the website needs a contact form, gallery, or newsletter. Only include what fits the conversion goal.
- ❌ Force the Pizza Raval section list onto every business. A plumber doesn't need "Events & Culture".
- ❌ Skip web research. Even if I give you a lot of input, search the web for the brand name and verify.
- ❌ Output partial briefs. If you hit your turn limit, ask me to continue rather than truncating.

---

## INPUTS

<!-- Paste below: anything you have about the business. Could be just the Google Maps description, could be a lot more. No structure required. -->


````

# ✂️ END OF COPY-PASTE BLOCK

---

## Reference output

To see what a brief generated by this prompt should look like at full quality, open `site_infos/pizza_raval_website_prompt.md`. That was hand-written but it's the bar.

---

# 📋 The broader hustle pipeline (read once, refer back to)

This section is for you (the operator), not for Claude. It explains how the brief fits into the cold-outreach business model.

## 1 — The whole pipeline

```
1. Find lead     →  Google Maps businesses with no website / weak site
2. Research     →  Scrape Instagram, Google, TheFork, photos, hours, menu
3. Brief        →  Paste the prompt above into Claude + your findings → get a brief
4. Build site   →  Run /quick-site (or /build-site for premium)
5. Send demo    →  WhatsApp/email a live preview URL to the owner
6. Convert      →  Charge €500–€2,000 setup + €30–€80/month hosting
```

The **brief is the bottleneck**. Spending 30 minutes on a strong brief (whether you write it yourself or let Claude do it from your scraps) saves 2 hours of back-and-forth and produces a site that actually looks like the business, not a template.

## 2 — Where to find leads

**Cheapest → most premium:**

1. **Google Maps manual scrolling** — search by city + category, look for businesses with no website or one that hasn't been updated since 2018. Free, slow.
2. **Google Maps scraper** — Outscraper / Apify / PhantomBuster can pull a CSV of all businesses in an area with rating, phone, website status. ~$30/month, much faster.
3. **Instagram Discovery** — businesses with 1k–10k followers but no website link in bio (or a generic Linktree) are prime targets.
4. **Yelp / TheFork / TripAdvisor** — filter 4+ stars, check who lacks a website. Pre-validated good businesses.

**Lead qualifiers (don't waste time):**

✅ Good lead — 4.0+ rating with 50+ reviews, 500+ Instagram followers, active phone/WhatsApp, 1+ year in business, available menu or service list.

❌ Bad lead — brand new (< 6 months), 3.5 stars or lower, owner-complaint pattern in reviews, franchise/chain (corporate owns the web).

## 3 — Brief quality patterns

### ✅ Strong language
> "The bar runs late, plays good music, and has Argentine confidence meeting Raval roughness. Not fine dining — a place you go on a Tuesday because you want something real."

Specific. Opinionated. Gives the builder something to commit to.

### ❌ Weak language
> "Modern and clean website with a nice design."

Nothing to commit to. Every AI-generated SaaS site is "modern and clean." Get specific.

### Specificity ladder — climb at least to rung 4

| Rung | Example |
|------|---------|
| 1 | "Restaurant" |
| 2 | "Pizzeria" |
| 3 | "Argentine pizzeria + bar in El Raval" |
| 4 | "Argentine-spirit pizzeria with takeaway counter on Joaquín Costa and event bar around the corner on Sitges" |
| 5 | "Argentine-spirit pizzeria living in the guts of El Raval, where Mario (the owner) hand-folds empanadas and the bar runs late with music and exhibitions" |

Rungs 1–2 produce generic output. Rung 3+ produces personalized output. Rung 5 produces sites that convert.

## 4 — Pricing your work (EU/Spain 2026)

| Tier | Setup | Monthly | Build path |
|------|-------|---------|------------|
| **Cold demo** | Free | — | `quick-site`, preview URL only |
| **Basic** | €400–€800 | €25–€40 | `quick-site`, polish + deploy + small content edits |
| **Standard** | €1,200–€2,500 | €40–€80 | `build-site`, multilingual, real owner content session |
| **Premium** | €3,500–€8,000 | €80–€150 | `build-site` + custom photography + branding refresh |

Don't undercharge. The cold demo does most of your selling — once they see their business with a real preview URL, the value is obvious.

## 5 — Outreach message template

After the demo is live, message the owner (Spanish example — adapt to local language):

```
Hola [OWNER FIRST NAME],

Vi [BRAND] en [PLATFORM] y noté que aún no tenéis web propia.
Os hice una demo gratuita para ver cómo quedaría:

  → [PREVIEW URL]

Está hecha con vuestra info real (menú, horarios, fotos de TheFork).
Si os gusta, podemos hablar de quedárosla por [PRICE]/setup + hosting.

Si no, no pasa nada — quedaos con el link, es vuestro.

Un saludo,
[YOUR NAME]
```

Why it works: personalized, demo-first / pitch-second, zero-risk framing, brief and local-native.

Conversion from "demo URL sent" → "paid client" in this hustle is typically 5–15% if your demos look good. The whole game is making demos look good.

## 6 — When to ask the human (the owner)

You can build a demo entirely from public info, but **ONE 10-minute call with the owner before they pay unlocks 10× the brief quality.** Ask:

1. **Signature dish / service?** → gets you the "hero" item
2. **Why did you start this business?** → origin story
3. **One sentence to a tourist who's never heard of you?** → that's your tagline
4. **Best customer compliment you've ever gotten?** → that's the pull quote
5. **What do you wish more people knew about you?** → that's the differentiator

Five questions, ten-minute call. The site goes from "good" to "uniquely theirs."

## 7 — Common mistakes & fixes

| Mistake | Fix |
|---------|-----|
| Inventing menu items or prices | Always source from real PDFs / Instagram / Google Reviews. Mark gaps with TODOs. |
| Generic "modern professional" brief | Climb the specificity ladder to rung 4+. |
| Skipping the photo download step | External CDN URLs (TheFork, Instagram) often block hot-linking. Download to `assets/` first. |
| Pushing to Vercel before owner confirms | Keep demos on `*.vercel.app` preview URLs until they pay. |
| Forgetting WhatsApp pre-fill text | A click-to-message link without pre-filled text is wasted conversion. Always include `?text=Hola!%20...`. |
| Building both quick-site AND build-site for the same lead | Pick one. Demo with `quick-site`, escalate to `build-site` only after they pay. |
| Pushing real client data to a public repo without permission | Only push code samples (like the Pizza Raval showcase) for sites the owner has approved. |

## 8 — Files in this folder

```
site_infos/
├── _GUIDE.md                            ← you are here
├── pizza_raval_website_prompt.md        ← reference example (gold standard)
└── <new-business-slug>_website_prompt.md
└── <another-business-slug>_website_prompt.md
```

To build a site once you have a brief, just say *"build the site from `site_infos/<slug>_website_prompt.md`"* or run `/quick-site <path>` directly.
