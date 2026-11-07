# Bagatata Technologies Limited — Website

The application now lives in `src/`. This first implementation focuses on the homepage and navigation, preserving Concept 01’s visual direction and the supplied ribbon B. The original briefing bundle and concept remain below and in their existing locations.

## Develop and review

Requires Node.js 20.9+ and pnpm.

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000. The navigation links to the homepage’s Services, About, and Contact sections. Products has its own overview and four individual views; dedicated Services, About, and Contact pages are still part of the later page build.

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm test
```

Browser tests use Playwright Chromium. Install it with `pnpm exec playwright install chromium`, or use an existing Chrome installation, for example:

```bash
CHROME_EXECUTABLE_PATH=/usr/bin/google-chrome pnpm test
```

Tests cover product ordering and links, desktop disclosure controls, mobile menu focus and closing, reduced motion, unconfigured contact delivery, and overflow at 320, 390, 768, 1024 and 1440 pixels. Tests expect inquiry delivery to be unconfigured; run them without delivery credentials. They do not send real email or verify production deliverability.

## Design and content

- `src/components/layout/Header.tsx`: fixed navigation, product disclosure and native mobile dialog.
- `src/components/sections/`: homepage story, hero, product explorer and inquiry area.
- `src/components/sections/Hero.tsx` and `OrbitalVisual.tsx`: hero copy and the animated ribbon-B scene, with pause/resume, reduced motion, and automatic rest when offscreen or the tab is hidden. The founder-supplied hero trial image is selected in `src/content/brand.ts`; its orbital setting is styled separately in `src/styles/hero.css`.
- `src/components/products/`: card layout and the four Concept 01 interface illustration directions.
- `src/content/`: typed, public-safe company, product, service and navigation records.
- `src/styles/`: shared tokens and separate layout, homepage and product styles.
- `src/styles/product-explorer.css`: the product section and rounded card frames. Shared interface illustrations and individual product pages stay in `products.css`, so card presentation can evolve without changing their previews.
- `src/components/sections/ServicesPreview.tsx` and `src/styles/services.css`: the five service cards, using the capability records in `src/content/services.ts`. Each card leads to the project inquiry section and supports keyboard navigation.
- `src/components/sections/ProcessSection.tsx` and `src/styles/process.css`: an ordered four-step path, horizontal on desktop and a four-part grid on phones. Process copy and stages live in `src/content/process.ts`.
- `src/components/sections/AboutTeaser.tsx` and `src/styles/about.css`: the company story, approved ribbon B display and semantic company-facts list, using the shared records in `src/content/company.ts`.
- `src/styles/contact.css`: the contact layout and form panel, with 16px inputs and a single field column on phones. `src/content/contact.ts` supplies the public copy and the project-type choices shared by the form and server validation. Delivery stays disabled until configured.
- `public/brand/ribbon-b.png`: archived, unchanged copy of the original standalone mark.
- `public/brand/ribbon-b-primary.png`: the current founder-supplied transparent mark, installed on 7 November 2026 and approved for every website logo placement. `src/content/brand.ts` selects this unchanged asset for navigation, the mobile menu, hero, company section, footer, browser icons and organization metadata. `public/brand/ribbon-b-trial-03.png` is retained as the previous approved mark; superseded trial files have been removed.
- `src/components/ui/BrandMark.tsx`: shared static logo presentation. It frames the visible artwork using the transparent image's bounds without editing the source image, keeping the mark aligned beside the wordmark and inside the company panel. The hero retains its separate centered orbital presentation.
- `src/styles/mobile.css`: the separate phone composition at 700px and below, scoped through the body class. It integrates the complete B orbital scene beside the headline, with its globe, rotating rings, trails and lighting in the same composition. Pause/resume, reduced motion and offscreen rest apply to the complete scene. It also turns cards into portfolio covers, introduces native service disclosures, and recomposes the process, company, inquiry and footer sections. Desktop layouts retain their existing rules. Service disclosures use native keyboard controls and do not add a client library.
- `public/fonts/`: self-hosted Archivo headings, Inter body text and navigation, and JetBrains Mono labels, following the founder's Capital City FC typography reference. The Bagatata wordmark retains Space Grotesk. OFL licenses are included; there are no external font requests at runtime.

Cards retain the original order and wide / wide / paired composition. Visuals and descriptive copy have separate areas, and the whole card is a keyboard-accessible link. On mobile, cards form a single column. Every interface illustration is explicitly labeled. All four products now have a confirmed public domain, so each card opens that live site in a new tab; the internal `/products/[slug]` pages remain reachable from the products menu and footer and carry their own “Visit product website” action. `content/products.json` remains the original handoff catalog; the application’s active source is `src/content/products.ts`.

## Configuration and contact delivery

Copy `.env.example` to `.env.local`, then fill only confirmed values. Never commit credentials.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Confirmed canonical origin. Until configured, canonical URLs are omitted, the sitemap is empty and crawling is disallowed. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional approved public email. Hidden when blank. |
| `RESEND_API_KEY` | Server-only email-provider key. |
| `CONTACT_FROM_EMAIL` | Provider-verified sender address. |
| `CONTACT_TO_EMAIL` | Approved recipient for project inquiries. |
| `CONTACT_CLIENT_IP_HEADER` | Optional client-IP header that the chosen reverse proxy overwrites. Do not trust arbitrary forwarding headers. |
| `CONTACT_RATE_LIMIT_SECRET` | Private random salt for hashed rate-limit identifiers. Required to enable the optional IP limit. |

Until the three delivery variables are configured, the homepage explicitly reports that online inquiries are unavailable, disables submission, and the endpoint returns HTTP 503. There is no simulated success. When enabled, the endpoint validates and bounds input, checks the honeypot and request origin, rate-limits submissions, and reports success only after Resend acknowledges the message. Provider acceptance is not proof of inbox delivery; verify deliverability with the approved recipient before launch.

Rate limits are four attempts per ten minutes per hashed email, plus optional trusted-proxy IP. They are held in memory per server process, reset on restart, and are not shared across instances. Configure the host’s shared abuse protection before a public deployment with multiple instances; this implementation does not add a database.

Rebuild and restart after changing environment configuration, because statically rendered availability and metadata are determined at build time.

## Production build

```bash
pnpm build
pnpm start
```

Deploy to a Node-compatible Next.js host, supply environment variables through the host’s secret configuration, and run the build there. Contact delivery requires a server runtime; a static-only export cannot handle inquiries. No hosting resource or public deployment has been created in this design pass.

## Still required before public launch

- Confirm the public domain, business contact details, sender and inquiry recipient; configure and test real delivery.
- Verify product availability, outgoing URLs and public portfolio relationships, particularly Loomis.
- Review product feature copy and supply approved screenshots if replacing the labeled illustrations.
- Complete dedicated inner pages and review final social/SEO assets.
- Complete legal review of the explicitly marked draft privacy notice and confirm hosting, retention and the public privacy contact.
- Validate production performance and cross-browser behavior on the chosen host.

---

# Original handoff notes

A fact-checked (against founder-reported history and available company materials) briefing bundle for building the **real Bagatata website** in VS Code with Codex. This is **not** the finished production site. It contains company context, proposed website copy, engineering instructions, approved brand references, and the original Concept 01 site reference.

## What's included

| Path | Purpose |
|---|---|
| `COMPANY_SOURCE_OF_TRUTH.md` | Company, incorporation, founder, offers, full product descriptions and hard boundaries |
| `WEBSITE_COPY.md` | Actual draft text for Home, About, Products, Services, Contact and Footer |
| `CODEX_BUILD_PROMPT.md` | Ready-to-paste master prompt for Codex |
| `AGENTS.md` | Persistent project rules for Codex to follow while working |
| `content/products.json` | Machine-readable four-product starter catalog; verified/uncertain flags included |
| `brand/` | Existing Bagatata logo and identity board images; do not regenerate |
| `reference-concept-01/` | Original preferred product-explorer concept, static HTML and asset references |

## How to use in VS Code

1. Extract this ZIP into a new project folder, e.g. `bagatata-website/`.
2. Open the folder in **VS Code**.
3. Open Codex in VS Code and direct it to read `CODEX_BUILD_PROMPT.md` (the project includes `AGENTS.md` for ongoing rules).
4. If Codex needs an initial instruction, paste: `Read AGENTS.md, COMPANY_SOURCE_OF_TRUTH.md, WEBSITE_COPY.md and CODEX_BUILD_PROMPT.md. Then implement the real Next.js website in this folder, preserving the product explorer style of reference-concept-01. Do not generate a new concept. Start with the homepage and four-product explorer, then complete the remaining pages and validation.`
5. Supply verified company email/domain, actual product screenshots, and deployment credentials **only when needed**. Use `.env.local` for private credentials; never paste secrets into source.
6. Inspect the result on desktop/mobile and run tests before deploying.

## Scope and public truth

This packet records information from prior founder discussions and provided business documentation. Not every description, tagline, mission or product availability is a verified public fact. Files explicitly label unknown and proposed items. Do not import private accounting/payment information as website copy.

**Core decisions:** Nigeria-based incorporated **Bagatata Technologies Limited**; actual gold ribbon B; SaaS/products + custom software; **Concept 01** visual product explorer; four products: Loomis, EventTicketsNG, ChatCart and ArewaVanta; accurate, credible company positioning; no exaggerated corporate claims.

## Missing information to verify before launch

- Public company domain, public contact email, official phone/social links (if displayed).
- Approved founder bio and product ownership language, especially Loomis.
- Real product screenshots, logos, published URLs and exact deployment state.
- Privacy text and form provider configuration, where legally appropriate.

These are launch checks, not reasons to stop implementing the site.
