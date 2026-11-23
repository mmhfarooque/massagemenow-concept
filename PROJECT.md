# Massage Me Now — design rehaul (spec / concept project)

Concept redesign pitch for **massagemenow.com** (owner Chris Pannan). A competing agency has a beta in Chris's pipeline
(https://weblancer.studio/message-me-now/landing/). Goal: beat it. Do not copy its style.

## Client facts
- Live site: https://massagemenow.com (WordPress + Bricks, SiteGround, Rank Math)
- Business: Airlie Beach / Whitsundays mobile massage (hotels, Airbnb, homes, yachts, islands)
- Owner: Chris Pannan, remedial sports practitioner, close to 17 yrs in Airlie Beach
- Phone 0407 448 644 · email cjpannan@gmail.com (from his Contact page)
- Owner Facebook: https://www.facebook.com/chris.pannan · business FB MassageMeNowApp · IG massagemenowapp
- Booking: https://book.heygoldie.com/In-House-Massage/checkout
- From competitor page only (CONFIRM WITH CHRIS): studio 281 Shute Harbour Rd, Hamilton & Hayman Island packages,
  add-ons Lumenate light meditation + sound healing, "90+ Google reviews" (his site shows 33)

## Three live versions (all noindex, static Next.js 15 export)
| Version | Look | Folder | Branch | Live |
|---|---|---|---|---|
| Main | Light, vibrant, interactive (WebGL water hero, finder w/ circle reveal, gallery, zoom-through, 3D stack, pinned stays) | `site/` | `main` | https://massagemenow-concept.vercel.app |
| v2 | Corporate dark (graphite + champagne, Plus Jakarta Sans, Lenis slow smooth scroll, calm reveals) | `site-v2/` (`app/corporate.css`, `components/Smooth.js`) | `v2` | https://massagemenow-concept-v2.vercel.app |
| v3 | "Slow Hands" gloomy (bottom nav, sideways journey, touch-lit photos, press-and-hold, Instrument Serif) | `site-v3/` (`app/v3.css`) | `v3` | https://massagemenow-concept-v3.vercel.app |

Public repo: https://github.com/mmhfarooque/massagemenow-concept (commits use GitHub noreply identity;
first commit 9900929 has the owner's email in it — offered to rewrite, not done).

## Content
- `current-site/crawl/` = all 64 live pages (from sitemap) · `current-site/content.json` = extracted blocks
- Generator (scratchpad gen.py, re-creatable) -> `site/lib/content.json`: home long-form, 7 massages (+FAQs),
  10 articles, 35 FAQs, about, contact, join, privacy, terms. `site/lib/reviews.json` = 33 Google reviews.
- Images: `assets/` originals, `site/public/img` + `img/c` WebP.
- Original URLs kept (/massage/…, /article/…, /frequently-asked-questions/, /contact-us/ …) for a painless switch.

## Run / build / deploy (per folder)
```
cd site      # or site-v2 / site-v3
npm run dev  # main :3500, v3 :3600
npm run build
npx vercel deploy --prod --yes      # each folder has its own .vercel link
```
Repo branches: commit in `site/` (`git checkout v2|v3`, rsync from site-v2/site-v3, commit, push, back to main).
No Vercel git integration — deploys are manual. After deploy, confirm the live page changed (v2 once served stale).

## Email pitch
`email/EMAIL.md` (to cjpannan@gmail.com) + screenshots — screenshots are from an OLDER main build; retake before sending.
Not sent. Add signature.

Storage: PC + GitHub + Vercel only (no NAS, per owner).
