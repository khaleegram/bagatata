# MASTER CODEX PROMPT — Build Bagatata's real corporate website

Paste the following instruction into **Codex inside VS Code**, in a fresh folder containing this handoff bundle. Let Codex read the documents and reference files.

---

You are the lead web engineer responsible for the **production-ready corporate website of Bagatata Technologies Limited**.

## Project context

Bagatata is a Nigerian incorporated software company founded in 2026. Our website must make us credible to clients while showcasing the digital products associated with our studio: Loomis, EventTicketsNG, ChatCart and ArewaVanta. The business is not a generic website agency or a fake multinational. It creates its own products **and** delivers custom software.

**Do not create a new aesthetic concept.** The founder tried Concepts 01, 02 and 03 and explicitly prefers the **Concept 01 product explorer**. The definitive reference is `reference-concept-01/index.html`. Preserve its core editorial/cinematic style, gold B brand, card-based visually distinct product explorer and overall hierarchy, then adapt it to a clean maintainable professional codebase.

## Required source reading

Before coding, read:

1. `AGENTS.md`
2. `COMPANY_SOURCE_OF_TRUTH.md`
3. `WEBSITE_COPY.md`
4. `reference-concept-01/README.md`
5. `reference-concept-01/index.html` and its `assets/` files
6. The brand images in `brand/` (do not regenerate them)

**Do not simply paste the old 50KB single-file HTML into React.** Study its structure and interaction, then recreate appropriately with maintainable components, typed content, modern routing and proper SEO.

## Tech stack

- Next.js, App Router, latest compatible stable release.
- TypeScript with strict types.
- Tailwind CSS for styles, CSS variables for the brand tokens. Normal CSS is allowed when it better fits the cinematic hero or complex custom product art.
- Motion/Framer Motion only for interactions that genuinely improve the site. Keep animations light; use CSS for simple effects.
- Use Next.js Image or appropriate optimized static assets; local PNG brand assets supplied.
- Server-side validated contact form via a safe route handler / server action and a configurable provider, such as Resend or a configured SMTP relay. No API keys committed to source. Deliver inquiries to a founder-confirmed email from environment variables.
- No new auth, database, CMS, user accounts or excessive services just for a corporate website. Keep content in typed data modules so CMS can be added later if actually needed.
- Prefer pnpm if creating a new project. Include scripts for dev, lint, typecheck, build and tests.

## Required website pages

### `/` Home
Implement the full story from `WEBSITE_COPY.md`: cinematic hero, capability strip, **Concept 01 product explorer**, services preview, engineering approach, About teaser, working contact CTA, complete footer.

### `/products`
Explore the 4 products via distinctive card treatments. Include accurate summaries, feature chips and links. Clearly differentiate confirmed public URLs from unverified ones. Preserve consistent brand voice and product presentation. No fabricated analytics.

### `/products/[slug]` (only if useful and complete)
A reusable product detail template for each of the 4 products, using data-driven content with problem, solution, real/illustrative interfaces, features, and CTA. If content would be too weak, prioritize a strong `/products` page and do not create empty shells.

### `/services`
Business-facing service categories: web systems, mobile apps, SaaS, practical AI/automation, APIs/integrations and modernization. Explain scope in plain English. A scoped project inquiry CTA.

### `/about`
Accurate company identity, work approach, established 2026, Abuja, operating values. No fabricated team photos or history. Founder details are optional until approved.

### `/contact`
Accessible working form with validated required fields, anti-spam and rate limiting. A form is only “working” if it truly submits via a configured server and provides honest success/failure states. If email delivery isn't configured locally, keep this explicit with an on-page unconfigured state during development. Never fake a success banner.

### `/privacy`
Create a placeholder page only if explicitly marked **draft / pending legal review**, or omit link until a meaningful policy is written. Do not invent legally binding terms or compliance claims.

## Product explorer implementation

- This is the site's centerpiece and the founder's clear preference.
- Follow the **original Concept 01 card-grid explorer**, not the Concept 02 tabs or Concept 03 pinned-scroll staged world.
- Desktop: premium visual card grid, distinct visuals and color accents, easy scanning, hover/focus state, descriptive content and a natural open-product CTA.
- Mobile: one-column cards, full readable copy, CTA not hidden behind hover interactions, no overflow, maintain decent touch targets.
- Each product card corresponds to one of four product records in `content/products.ts`; metadata must be editable without touching layout.
- Use real screenshots if verified and supplied. If none are supplied, existing Concept 01 CSS interface illustrations may be retained, clearly marked illustrative; do not claim they are real app screenshots.
- Only link externally when the URL is confirmed and live. Otherwise link to internal product content.
- Do not make ArewaVanta a generic global esports SaaS; do not describe ChatCart as an escrow provider.

## Brand rules

- Original ribbon-B asset, **never redesign**. The brand mark appears at navigation, hero and favicon.
- Primary dark UI, champagne gold, warm ivory; extract tokens from the brand and Concept 01 references.
- Oversized typography where readable, restrained gold glow, subtle interaction. Avoid a blur-heavy/glossy generic template.
- Use motion responsibly. Honor reduced-motion. Avoid huge WebGL bundles unless explicitly requested later.
- Make it excellent on both desktop and mobile.

## Content and trust requirements

- The legal company name is **Bagatata Technologies Limited** and RC **9936491**. Incorporated **14 October 2026**. Abuja, Nigeria.
- The company is an **operating technology company**, NOT registered Bagatata Holdings.
- Business services focus on software products, apps, SaaS, applied AI and integrations. **Do not add cybersecurity/medical-tech divisions**.
- Company public domain/email/phone are **unconfirmed**. Config-driven fields with no invented placeholder addresses in production.
- Show no fake clients, metrics, testimonials, staff, partners, awards, financial results or acquisitions.
- Keep product ownership relationships legally neutral until confirmed. Do not call Loomis a wholly owned subsidiary.
- Use content wording from `WEBSITE_COPY.md` unless there's a clear readability reason to adjust it without changing facts.

## Architecture and file organization (suggested, adjust reasonably)

```
src/
  app/
    layout.tsx
    page.tsx
    about/page.tsx
    products/page.tsx
    products/[slug]/page.tsx
    services/page.tsx
    contact/page.tsx
    api/contact/route.ts
    sitemap.ts
    robots.ts
  components/
    layout/{Header,Footer,MobileNav}.tsx
    sections/{Hero,ProductExplorer,ServicesPreview,AboutTeaser,ContactCTA}.tsx
    products/{ProductCard,ProductDetail}.tsx
    ui/{Button,Container,SectionLabel}.tsx
  content/{company,products,services,navigation}.ts
  lib/{contact,validation,site-config}.ts
  styles/globals.css
public/
  brand/...
  products/... (only approved assets)
```

## SEO and performance

- Proper metadata (title, description, canonical once site domain confirmed, Open Graph images, favicons, robots, sitemap).
- Structured data `Organization` with only confirmed identity details; omit unconfirmed URL/contact/logo URLs until configured.
- Ship minimal client-side JavaScript; most pages server-render static sections.
- Lazy-load below-fold visuals; don't load every animated scene on mobile.
- Target LCP under 2.5s on typical 4G where feasible, CLS under .1, no horizontal scrolling at 320px, and clean keyboard navigation.
- Motion is decorative, not required to read the products.
- Links are safe, accessible and honest about opening third-party sites.
- No artificially duplicated SEO text or doorway pages.

## Security, validation and contact handling

- Validate and normalize inputs server-side; constrain sizes and allowed values.
- Rate-limit by an appropriate non-sensitive key; include a honeypot, and avoid leaking server stack traces.
- Do not log contact-message bodies, API keys or private customer information in production.
- Store provider keys in `.env.local`; provide `.env.example` with blank placeholders.
- Ensure form only claims sent when delivery succeeds, and gracefully handles provider failure.
- Add privacy-sensitive form disclosures if required by actual collection method.
- No private staff data, tax ID or company bank information exposed as unnecessary public metadata.

## Accessibility and motion

- Labels, headings, skip-to-content, focus-visible, keyboard operability, dialog focus management.
- Sufficient color contrast, readable type on mobile, `aria` semantics where meaningful.
- Respect `prefers-reduced-motion`; remove decorative loops when requested.
- Mobile drawer closes via Escape, route change and explicit button.

## Execution phases (do these sequentially; do not overengineer)

**Phase 1: Audit source**
Read all briefing files and existing concept, identify what is reusable, then report a short plan and known missing information. Do not stall waiting on unknown domain/email; mark as config.

**Phase 2: Scaffold and foundation**
Set up Next.js/TypeScript/Tailwind, brand assets, data model, shell, layout, navigation and SEO defaults.

**Phase 3: Build site pages and product explorer**
Focus first on home and product explorer, then Products, Services, About and Contact. Use correct content. Desktop and mobile.

**Phase 4: Real interactions**
Working navigation, safe external links, inquiry form with secure backend, loading/success/error states, accessible menus, subtle animation and reduced-motion behavior.

**Phase 5: QA and handoff**
Run lint, typecheck, production build and tests. Check widths 320, 390, 768, 1024, 1440 pixels. Test product links, mobile navigation, tab/keyboard use, form validation and actual email-delivery behavior (with test configuration). Fix issues. Provide deployment steps and exact remaining TODOs.

## Acceptance checklist

- [ ] Official company details accurate.
- [ ] Original gold ribbon B reused with no unapproved modifications.
- [ ] Concept 01-style visual product explorer, four correct products.
- [ ] No unsupported metrics/clients/awards/subsidiaries or invented contact info.
- [ ] Responsive layout works at 320px+.
- [ ] All main routes render and nav works.
- [ ] Product copy matches what is confirmed and avoids legal/service misstatements.
- [ ] Contact form is truly wired when environment/provider configured and never fakes success.
- [ ] Good metadata, favicon, sitemap, accessible navigation and reduced-motion handling.
- [ ] Lint/type/build/test results actually run and reported.
- [ ] `README.md` documents development, environment, deployment and unresolved external facts.

## Final output

Implement the site in this workspace, show me the key files created and commands run, provide a concise explanation of how the product explorer works, and list **only genuinely unresolved** production launch items. Do not present another moodboard or generate more design concepts. Build the working website.
