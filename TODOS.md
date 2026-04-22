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
- [x] 10-post content calendar researched and written (Apr 29 – Jun 30 2026) — topics from Reddit signal, competitor gaps, adjacent niches
- [x] Auto-publish cron — Vercel cron runs every Tuesday 9am UTC, flips scheduled drafts live automatically
- [x] Admin drafts page — /admin/drafts shows full scheduled queue with countdown to go-live dates
- [x] Add CRON_SECRET to Vercel environment variables (Production) and redeploy to activate cron

## App (social-code-app)
- [x] Handle `coaching-waitlist` in `/api/send-framework` — sends confirmation email to user + notification to shavi@joinsocialcode.com, saves lead to Supabase

## Security — CRITICAL (do these first)
- [ ] **Rotate all secrets** — Resend API key, Anthropic API key, Supabase service role key, ADMIN_TOKEN, ENCRYPTION_KEY, ADMIN_PASSWORD (do in each dashboard manually)
- [x] **Add auth guards to all unprotected API routes** — generate-*, clients, sessions, leads, library/upload all protected via middleware (C2)
- [x] **Add separate JWT_SECRET env var** — portalAuth.ts now uses JWT_SECRET (falls back to ADMIN_TOKEN). Add JWT_SECRET to Vercel env. (C3)
- [x] **Hash admin password with bcrypt** — timing-safe HMAC comparison used instead; plaintext === removed (C4)
- [x] **Fix timing attack** — all password/token compares now use crypto.timingSafeEqual (C5)
- [x] **Replace Math.random() with crypto.randomInt** in `app/lib/portalAuth.ts` (C6)

## Security — HIGH
- [x] **Add security headers** — CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy added via next.config.ts (H5)
- [x] **Add rate limiting** — login (5 req/min), send-framework (3 req/min) rate limited by IP (H2)
- [x] **Fix CORS wildcard** — posts API locked to joinsocialcode.com, comments API locked to app.joinsocialcode.com (H1)
- [x] **Add auth to file upload endpoint** — `/api/library/upload` protected via middleware (H3)
- [x] **Fix forgot-password email lookup** — now fetches all portal clients and decrypts to find match (H6)
- [x] **Add signed token to unsubscribe URL** — HMAC-signed token required; route validates before unsubscribing (H7)
- [x] **Sanitize blog content** — sanitize() strips script/iframe/on*/javascript: from renderMarkdown output (H4)

## Security — MEDIUM
- [x] **Add input length/schema validation** — Zod added to comments POST and send-framework POST (M2)
- [x] **Wrap Anthropic errors** — all generate-* routes return generic "Generation failed" instead of raw error (M3)
- [x] **Shorten admin session cookie** — reduced from 30 days to 8 hours (M6)
- [x] **Run npm audit** — Next.js upgraded to latest, 0 vulnerabilities remaining (L4)

## Low
- [x] Add twitter:site and twitter:creator meta tags
- [x] Align title tag with H1 keyword — now "Social Code | Social Skills Coaching for Introverts"
- [x] Product schema URL — updated from Gumroad to joinsocialcode.com
- [x] Add Review schema for the 3 testimonials (Matthew A., Jeremy M., Mark W.)
- [x] Add breadcrumb schema
