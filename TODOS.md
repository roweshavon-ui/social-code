# joinsocialcode.com — Audit To-Dos

## Critical
- [ ] Replace Tailwind CDN with compiled build (medium effort — build Tailwind with only used classes)
- [x] Fix H1 typing animation — keyword text "Social Skills Coaching for Introverts" now static, typing runs below it
- [x] Hero stats: "3 Core frameworks" → "14 Frameworks"
- [x] Frameworks section heading: "Three systems." → "14 frameworks."
- [x] Canonical/og:url mismatch — both now point to https://joinsocialcode.com (no www)

## High
- [x] Add FAQPage JSON-LD schema (rich result opportunity)
- [x] Add Google Fonts preconnect links (render-blocking fix)
- [ ] Blog section is pure JS — no static fallback for crawlers (medium effort)
- [x] Fix subscribe endpoint — was pointing to old social-code-app.vercel.app URL
- [x] Fix scroll reveal — was setting all sections to opacity:0 including above-fold content

## Medium
- [x] Person schema name: "Shavi" → "Shavi Anthony"
- [x] Twitter handle in schema sameAs — now consistent (@shavirowe for Person, @GetSocialCode for Organization)
- [ ] Add dedicated 1:1 coaching section to page — currently only in schema, not visible to visitors
- [x] Add width/height attributes to img tags (CLS fix)

## Low
- [x] Add twitter:site and twitter:creator meta tags
- [x] Align title tag with H1 keyword — now "Social Code | Social Skills Coaching for Introverts"
- [ ] Product schema URL points to Gumroad — ideally should point to your own domain page
- [ ] Add Review schema for the 3 testimonials (Matthew A., Jeremy M., Mark W.)
- [ ] Add breadcrumb schema
