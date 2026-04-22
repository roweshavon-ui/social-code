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
- [ ] **Add auth guards to all unprotected API routes** — sessions, clients, leads, assessments GET, and all /api/generate-* routes are publicly accessible (C2)
- [ ] **Add separate JWT_SECRET env var** — ADMIN_TOKEN is currently reused as the HMAC signing key for portal JWTs (C3)
- [ ] **Hash admin password with bcrypt** — currently compared in plaintext (C4)
- [ ] **Fix timing attack** — portal password compare uses `===` not `crypto.timingSafeEqual` (C5)
- [ ] **Replace Math.random() with crypto.randomInt** in `app/lib/portalAuth.ts` temp password generation (C6)

## Security — HIGH
- [x] **Add security headers** — CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy added via next.config.ts (H5)
- [x] **Add rate limiting** — login (5 req/min), send-framework (3 req/min) rate limited by IP (H2)
- [x] **Fix CORS wildcard** — posts API locked to joinsocialcode.com, comments API locked to app.joinsocialcode.com (H1)
- [ ] **Add auth to file upload endpoint** — `/api/library/upload` has no admin check (H3)
- [ ] **Fix forgot-password email lookup** — emails stored encrypted but queried raw so reset never works (H6)
- [ ] **Add signed token to unsubscribe URL** — anyone can unsubscribe any email from Kit (H7)
- [ ] **Sanitize blog content** — dangerouslySetInnerHTML with DB-sourced content, add DOMPurify (H4)

## Security — MEDIUM
- [ ] **Add input length/schema validation** with Zod on all API route request bodies (M2)
- [ ] **Wrap Anthropic errors** — raw error messages currently returned to client (M3)
- [ ] **Shorten admin session cookie** — currently 30-day static token with no revocation (M6)
- [ ] **Run npm audit** in social-code-app — dependency vulnerability status unknown (L4)

## Low
- [x] Add twitter:site and twitter:creator meta tags
- [x] Align title tag with H1 keyword — now "Social Code | Social Skills Coaching for Introverts"
- [ ] Product schema URL points to Gumroad — ideally should point to your own domain page
- [x] Add Review schema for the 3 testimonials (Matthew A., Jeremy M., Mark W.)
- [x] Add breadcrumb schema
