# joinsocialcode.com — Audit To-Dos

## Critical
- [x] Replace Tailwind CDN with compiled build — 3MB → 15KB
- [x] Fix H1 typing animation — keyword text "Social Skills Coaching for Introverts" now static, typing runs below it
- [x] Hero stats: "3 Core frameworks" → "14 Frameworks"
- [x] Frameworks section heading: "Three systems." → "14 frameworks."
- [x] Canonical/og:url mismatch — both now point to https://joinsocialcode.com (no www)

## High
- [x] Add FAQPage JSON-LD schema (rich result opportunity)
- [x] Add Google Fonts preconnect links (render-blocking fix)
- [x] Blog section — posts now injected at build time for SEO crawlability
- [x] Fix subscribe endpoint — was pointing to old social-code-app.vercel.app URL
- [x] Fix scroll reveal — was setting all sections to opacity:0 including above-fold content

## Medium
- [x] Person schema name: "Shavi" → "Shavi Rowe" (was incorrectly set to "Shavi Anthony", fixed)
- [x] Twitter handle in schema sameAs — now consistent (@shavirowe for Person, @GetSocialCode for Organization)
- [x] Add dedicated 1:1 coaching waitlist section to page
- [x] Add width/height attributes to img tags (CLS fix)

## Blog
- [x] Blog post: "Why introverts are actually better at deep conversations" — published Apr 22 2026
- [x] Blog post page SEO — added canonical, Twitter cards, og:image, og:publishedTime, og:authors, Article JSON-LD (applies to all posts)

## App (social-code-app)
- [ ] Handle `coaching-waitlist` in `/api/send-framework` — waitlist form submits but no email is sent. Needs a Kit tag + confirmation email wired up in the app.

## Low
- [x] Add twitter:site and twitter:creator meta tags
- [x] Align title tag with H1 keyword — now "Social Code | Social Skills Coaching for Introverts"
- [ ] Product schema URL points to Gumroad — ideally should point to your own domain page
- [ ] Add Review schema for the 3 testimonials (Matthew A., Jeremy M., Mark W.)
- [ ] Add breadcrumb schema
