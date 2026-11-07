# BAGATATA TECHNOLOGIES LIMITED
## Company Source of Truth and Production Website Handoff

**Prepared:** 5 November 2026  
**Purpose:** Source-of-truth brief for implementing the real Bagatata Technologies Limited website with Codex in VS Code.  
**Key decision:** Preserve the product-explorer approach from **Concept 01** (the original visual product grid). Do not continue using Concept 02/03's scroll-controlled product universe as the main product experience.

> **Trust convention:** `[CONFIRMED]` denotes facts supplied by the founder, established company documentation, or an approved brand decision. `[WORKING]` denotes a reasonable proposed positioning or website copy, not a legal/company fact. `[VERIFY]` denotes an unresolved public-facing fact. `[INTERNAL]` denotes information for the implementation team, not automatic permission to publish.

---

# 1. Identity and legal details

| Attribute | Value | Source status | Website treatment |
|---|---|---|---|
| Legal name | **Bagatata Technologies Limited** | CONFIRMED | Show in footer, About, metadata |
| Short brand | **Bagatata** | CONFIRMED | Use throughout UI |
| Legal form | Nigerian **Private Company Limited by Shares** | CONFIRMED | Optional in About |
| Incorporation date | **14 October 2026** | CONFIRMED | Optional company timeline |
| Company registration | **RC 9936491** | CONFIRMED | Show in footer or legal/about page |
| Tax Identification Number | **2623708391930** | CONFIRMED | **INTERNAL**: do not publish automatically |
| Jurisdiction | Federal Republic of Nigeria | CONFIRMED | Footer or About |
| Base | Abuja, Federal Capital Territory, Nigeria (Zuba area) | CONFIRMED | Show city/region, not precise street address until approved |
| Founder | **Mohammed Abdulrahman Umar** | From prior founder/company records | Public bio optional; founder approves displayed name/spelling and bio |
| Ownership | Sole founder / shareholder status was reported previously | Founder report | **INTERNAL**: avoid public shareholding details unless approved |
| Website domain | **Not confirmed** | VERIFY | Do not invent `bagatata.com`, `.org` or a brand email |
| Public company email | **Not confirmed** | VERIFY | Use environment-configured address; do not use Loomis project email |
| Public company phone | **Not confirmed** | VERIFY | Do not invent or repurpose a project's phone |
| Logo | Existing **gold ribbon / geometric B** mark | CONFIRMED | Reuse supplied original brand assets unchanged |

**Legal structure note:** Bagatata Technologies Limited is an operating technology company **now**, not a holding company. The proposed future *Bagatata Holdings* parent organization is not yet incorporated; do not portray it as existing. Cybersecurity and medical-technology company divisions were deliberately excluded from the company's immediate registration/positioning. Do not show them as current corporate divisions.

**Separate-entity note:** **Loomis Limited** has been referenced separately as an incorporated company. Its relationship with Bagatata's ownership, licensing, and IP is **not verified for public legal claims**. You may show Loomis as a product built or worked on by the founder/studio, subject to founder approval, but do not assert “Loomis is a subsidiary wholly owned by Bagatata” or similar without verification.

**ChatCart compliance note:** Bagatata is described in recent merchant onboarding as the trading entity / merchant of record for **ChatCart**. Paystack handles payment processing under its own authorization. ChatCart **does not operate escrow accounts, custodial balances, wallets, deposits, top-ups, or stored user balances**. Never advertise an escrow service, regulated financial custody, or “Bagatata holds your funds” as a current capability.

---

# 2. What the company is

**[WORKING positioning]** Bagatata Technologies Limited is an independent technology product and software engineering company based in Abuja, Nigeria. It creates and operates digital products and builds tailored software for businesses and organizations. Its work spans business web applications, mobile products, subscription platforms, AI-enabled functionality, business automations, and integrations.

**One-line positioning:**

> We build useful technology, from ambitious product ideas to software businesses can actually run.

**Concise company description:**

> Bagatata Technologies Limited is a Nigerian software and digital-product company building web, mobile, and intelligent systems. We develop our own products and help organizations design, engineer, launch, and improve software built around real operational problems.

**Longer company description:**

> Founded and incorporated in 2026, Bagatata Technologies Limited is an Abuja-based technology company focused on practical digital innovation. We work across the full software-product journey: understanding the problem, shaping the experience, implementing reliable systems, deploying products, and improving them after launch. Alongside custom engineering work, our product portfolio explores education technology, event operations, social commerce, and competitive gaming communities. We prioritize usable systems, deliberate architecture, and solutions that fit their users' actual workflows.

**Mission [PROPOSED, not an officially adopted company resolution]:**

> To turn important, underserved problems into accessible, reliable digital systems that help people and organizations work better.

**Vision [PROPOSED]:**

> To build enduring technology products from Nigeria that serve users far beyond our immediate market.

**Core operating principles [PROPOSED]:**

1. **Solve real problems.** Features have to justify their existence.
2. **Engineer for use, not applause.** Reliable workflows outrank decorative complexity.
3. **Own the full product journey.** Design, development, launch, learning, and improvement are connected.
4. **Make complicated things understandable.** Good software should reduce operational friction.
5. **Be commercially realistic.** Build products with a believable route to adoption and sustainable operation.
6. **Be accurate in public.** Never fabricate users, revenue, partnerships, clients, investors, or certifications.

**What Bagatata is not:** Not an established multinational conglomerate. Not presently a registered holdings group. Not a university or government agency. Not a licensed bank, payment custodian, or escrow provider. Not currently positioning itself as a cybersecurity consulting company, regulated health-tech provider, or medical device manufacturer. It should not claim a large engineering team without evidence. Do not pretend the company has been operating for decades when it was incorporated in October 2026.

---

# 3. Business model and how Bagatata creates value

Two complementary areas:

### A. First-party / studio product development

Designing, building, and evolving products such as Loomis, EventTicketsNG, ChatCart, and ArewaVanta. They demonstrate depth across distinct operational domains. **Legal ownership and public presentation of each product must be confirmed individually**; a founder-associated portfolio is not automatically a list of wholly owned subsidiaries.

### B. Custom software and engineering for clients

- Business web applications, portals, internal tools and dashboards.
- Cross-platform mobile applications.
- SaaS platforms, tenant-aware systems, accounts, roles and workflows.
- AI-assisted features, applied automation, and data-driven functionality.
- Business integrations, payment integrations, APIs and system modernization.
- Product discovery, architecture, MVP implementation, launch and ongoing iteration.

**Do not advertise yet:** a guaranteed deployment SLA, SOC 2/ISO certifications, penetration-testing compliance, cloud partner status, '24/7 support', a 100-person team, or fixed project prices. None are established facts.

**Commercial approach [WORKING]:** Scope the problem, recommend an appropriately sized solution, agree deliverables and timelines, build incrementally, and define maintenance terms separately. Pricing is quotation-based; do not make up public price tiers.

---

# 4. Product and portfolio registry

These are founder-associated projects. The website's portfolio language should be **“Products & work”**, **“What we're building”**, or **“Selected products”** until legal brand ownership and product statuses are approved for public claims.

## 4.1 Loomis

- **Name:** Loomis
- **Category:** Education technology / school management SaaS.
- **Known URL:** https://loomis.digital (domain exists in project history; VERIFY current live content before linking as a production site).
- **Status:** Actively developed; do not label broadly “live in thousands of schools” or imply adoption that has not been verified.
- **Problem:** Schools juggle records, grades, attendance, fees and communication across fragmented paper processes or disconnected tools.
- **Solution:** Multi-tenant school management software combining everyday administrative and academic operations.
- **Primary users:** School administrators, teachers, finance officers/cashiers, parents, students. Broader platform administration and regional managers exist in the product plan.
- **Core functions:** Student enrollment/admissions, attendance, gradebook/results, timetables, term/session management, school fee records/payment workflows, receipts, role-based portals, and communication.
- **Technical character:** Multi-tenant business app with structured roles, data isolation, integrations and transactional operations.
- **Potential public description:** “One connected workspace for the daily work of running a school, from classrooms and records to payments and parent communication.”
- **DO NOT CLAIM:** Government endorsement, a number of schools/users, ministry accreditation, verified payment guarantees, or automatic legal ownership by Bagatata.
- **INTERNAL:** A per-student-per-term commercial model of about ₦1,000 had been explored. Do **not** put this on the corporate site until confirmed for release.

## 4.2 EventTicketsNG

- **Name:** EventTicketsNG
- **Category:** Event ticketing and access operations.
- **Known URL:** https://eventticketsng.com
- **Status:** Founder has described the domain/platform as launched; verify current production operation before claiming a specific feature is live.
- **Problem:** Organizers need to sell tickets, manage inventory and agents, see transactions, and check guests through gates without duplicated/invalid entries.
- **Solution:** A ticketing and event access management platform.
- **Primary users:** Event organizers, ticket buyers, agents/sub-agents, and check-in staff.
- **Core functions:** Event publishing, ticket configuration and inventory, sales tracking, payment integration, QR validation/check-in, staff/agent dashboards and operational reporting. Photo-supported check-in has been in the design.
- **Public description:** “Sell tickets, track sales, and manage event entry from one operational dashboard.”
- **Important nuance:** Event staff may allow legitimate re-entry; public wording should not promise a specific anti-fraud or security mechanism beyond verified functionality.
- **Out of scope:** Full event planning, seating design and vendor-management suite. Do not market these.

## 4.3 ChatCart

- **Name:** ChatCart
- **Category:** Social commerce and marketplace.
- **Known URL:** https://chatcart.shop (domain used in project history; VERIFY whether current public landing/app is deployed).
- **Status:** Product in active development; do not mislabel as a mature marketplace with proven transactions.
- **Problem:** Social sellers and buyers negotiate in DMs, then struggle with organized orders, payment clarity and fulfillment tracking.
- **Solution:** A mobile-first commerce experience combining marketplace discovery, buyer–seller conversation, offers, checkout and order progress.
- **Primary users:** Social sellers and everyday shoppers.
- **Core functions:** Listings/feed, product discovery, chat, offers/deals, order management, payments, shipping/fulfillment tracking, and dispute handling (development scope may vary).
- **Public description:** “Commerce built around how people actually shop: discover a product, discuss the deal, and complete the order in one place.”
- **Compliance:** Bagatata is the merchant of record. Paystack handles payment processing. **No escrow, held wallets, custodial accounts, or user balances**. Avoid any copy like 'funds secured in our escrow until delivery'.

## 4.4 ArewaVanta

- **Name:** ArewaVanta
- **Category:** Community esports / competitive gaming operations.
- **URL:** No confirmed public domain. Do not invent one.
- **Status:** Product built through substantial implementation and testing; production deployment was being prepared. **Do not claim publicly launched until verified.**
- **Audience:** Northern Nigerian Call of Duty: Mobile Battle Royale players, clans/squads and organizers.
- **Problem:** Community tournaments need clear schedules, participation, consistent scoring, results and rankings without spreadsheet chaos.
- **Solution:** A focused community competition and statistics platform.
- **Core functions:** Competition pages, squads/rosters, matches, maps, placement/kill-based scoring, results management, player and squad statistics, standings and rankings.
- **Public description:** “A dedicated home for competitive gaming communities to run tournaments, track results and celebrate players.”
- **Essential positioning:** This is **for the Arewa gaming community**, not a global multi-organizer esports SaaS. Do not add organizer marketplaces, scorekeeper bureaucracies, multi-step approvals or massive tournament products to its public claims.

## 4.5 Other work and exploratory initiatives

These belong in an **internal inventory or optional ‘Lab’** section, not automatically among four flagship offerings:

- **Device Trust Nigeria:** Device identity, IMEI search/verification, merchant records and ownership-passport concepts. Deprioritized as of October 2026. **Not an NCC-certified government platform or confirmed NCC partnership**. Do not market as launched.
- **Skillta:** Football talent/scouting media and potential AI video analysis; exploratory/reconsidered, not a proven production AI scouting platform.
- **NanoVision / OmniScan:** Medical/microscopy AI concept; exploratory research, **not** a current regulated medical-tech division or marketed clinical product.
- **LandChain / Rydan Chain:** Blockchain/property technology exploration, no verified production availability.
- **Other engineering work:** Cognilearn, ATG Timetable Generator, Highlighto, NCAT Smart Digital Exam, family expense tracker, MJSTEM Journal, satellite crop intelligence, among others. Include only with owner-approved screenshots, scope, IP rights and accurate status.

**Portfolio priority:** Exactly four flagship product cards initially: **Loomis, EventTicketsNG, ChatCart, ArewaVanta**. Optional 'Experiments' later after approval.

---

# 5. Company story and founder context

**Known context:** Bagatata Technologies Limited was incorporated on **14 October 2026** in Nigeria. It is founded by a software engineer with practical experience building web applications, mobile applications, AI-related systems and bespoke operational software. The founder has worked with technologies including JavaScript/TypeScript, Python, Java, PHP, Kotlin, Dart, Swift, React Native, Flutter, Next.js, Laravel and databases/integrations. These are capability indicators, not a guarantee each is part of the current commercial delivery stack.

**Founder introduction [WORKING]:** “Bagatata was created to turn hands-on software engineering into ambitious, useful technology products and dependable solutions for organizations.”

**Do not publish without approval:** precise birth/age, home address, education transcripts or grades, personal phone, full financial details, ownership percentages, former employer claims, project ownership facts, family contacts, or personal biography beyond what is approved.

**Suggested timeline:**
- **2026:** Bagatata Technologies Limited incorporated in Nigeria.
- **2026 onward:** Continue building and operating founder-associated products across education, ticketing, social commerce and gaming.

Avoid fake earlier milestones. If the website has a year label, **Established 2026** is accurate. An 'Since 2015' header is not.

---

# 6. Audiences and brand voice

**Primary website audiences:**
1. Business owners and organizations seeking software delivery.
2. Founders and operators evaluating a technical product partner.
3. Potential users and partners discovering Bagatata's applications.
4. Future collaborators, investors or prospective hires seeking an accurate overview.

**Tone:** Bold, smart, ambitious and clear. Confidence without exaggeration. Serious about engineering and practical about business. Short sentences where possible; avoid an entire site of slogans. Explain what each product actually does.

**Avoid:** “Africa's #1 tech company,” “trusted by 10,000+ customers,” fake case studies, generic 'we revolutionize everything' copy, unearned awards, stock-photo team pages, unexplained AI buzzwords or fake strategic partnerships.

**Proposed tagline options** (select one; the original Concept 01 uses #1):
- **Build what should exist.** *(recommended)*
- Engineering what comes next.
- Software designed for the real world.

---

# 7. Brand source of truth

**Identity:** The existing metallic-gold ribbon B / geometric B mark and Bagatata wordmark. Original source references are bundled under `brand/`; extracted transparent mark and lockup from Concept 01 are bundled under `reference-concept-01/assets/`. Do not redraw, twist, add a crest/badge, invent an outline or silently replace this mark. The user previously objected to this repeatedly.

**Verified historical brand palette from the brand board:**
- Dark brown / near black: `#2D1B0F`
- Gold: `#D4A574`
- Warm brown: `#8B5E34`
- Cream: `#F4E9D7`
- White: `#FFFFFF`

**Concept 01 website palette (designer adaptation):**
- Interface black: `#0C0C0B`
- Secondary dark: `#151411`
- Accent gold: `#DDB47A`
- Pale paper: `#F1EEE6`
- Secondary gold: `#A7773D`
- Muted text: `#9C9A92`

The identity board includes customized Montserrat-style typography; Concept 01 uses Space Grotesk, DM Sans and Space Mono. For the production site, follow Concept 01's visual rhythm unless founder provides finalized web fonts. The actual logo has priority over typography experiments.

**Founder typography direction (7 November 2026):** Use the font pairing from the founder-built [Capital City FC website](https://capitalcity.ng/) as the web typography reference: Archivo for headings, Inter for body text and navigation, and JetBrains Mono for small labels. Adapt weights and spacing to Bagatata's existing composition. Preserve the supplied ribbon B and the established wordmark treatment.

**Founder-approved website mark (7 November 2026):** The founder supplied transparent gold B images, then explicitly requested the latest image in all other sections that use the logo. The approved image is retained unchanged at `public/brand/ribbon-b-trial-03.png` and selected in `src/content/brand.ts` for navigation, the mobile menu, hero, company section, footer, browser icons and organization metadata. Earlier trials and original assets remain archived unchanged. This explicit founder direction supersedes the earlier restriction limiting this asset to the hero; preserve the existing wordmark treatment and do not regenerate or alter the supplied B. Static placements may frame its transparent padding through CSS. The complete orbital animation must remain on mobile, integrated beside the headline rather than stacked beneath it.

**Design rules**
- Restrained visual ambition; cinematic hero is fine, but do not force new 3D experiments.
- Hero: substantial typography; the existing B as a visual anchor.
- Product explorer: **original Concept 01's grid of visually differentiated, selectable/clickable product cards**. Distinct descriptions, features and links. Avoid Concept 02/03's pinned, scroll-driven four-world rail.
- Mobile: first-class layout, not clipped desktop UI.
- Smooth microinteractions; honor `prefers-reduced-motion`.
- Strong contrast, accessible keyboard behavior and discoverable controls.
- Avoid an excessively grainy/over-glossy logo or cheap generic tech graphics.
- Actual product screenshots replace placeholder CSS mockups when approved.

---

# 8. Website information architecture

**Launch pages:**
- `/` Home, brand introduction, proof-of-work product explorer, selected services, company principles, contact CTA.
- `/about` Story, company mission/working values, official incorporation and founder-facing narrative (approved facts only).
- `/products` Four flagship products with clear descriptions, statuses and safe links.
- `/products/[slug]` Optional individual product detail pages if enough verified copy/screenshots; otherwise launch with one products page.
- `/services` Custom engineering offerings and engagement process.
- `/contact` Working validated contact form, contact method once confirmed, location at city level.
- `/privacy` Legitimate privacy notice covering website analytics/forms, **written and reviewed** rather than fake legal text.

**Optional later:** `/insights`, `/careers` only when they have real content; `/terms` when needed for website usage/business activity and approved. Do not publish empty routes for appearances.

**Home section order:**
1. Persistent navigation: Bagatata logo; Products, Services, About, Contact.
2. Hero: “BUILD WHAT SHOULD EXIST.” + clear business explanation + CTAs “Explore our products” and “Start a project”.
3. Scope/capabilities strip (Web Platforms / Mobile Apps / SaaS / AI & Automation / Integrations).
4. **Concept 01 product explorer** (Loomis, EventTicketsNG, ChatCart, ArewaVanta).
5. Services and problem-solving approach.
6. Short company story, real incorporation context, reason to work with Bagatata.
7. Contact CTA and fully functional inquiry flow.
8. Footer: legal name, RC number, Abuja Nigeria, real approved contact links, policy links.

**Contact form minimum fields:** Name, email, company (optional), project type (optional), project description, budget (optional), and privacy acknowledgement when required. Protect against spam, validate and rate-limit server-side, ensure a real deliverability mechanism, and display honest success/error states. Do not store sensitive attachments or advertise submitted forms when nothing is configured.

---

# 9. Accuracy / verification gate

**Safe to publish:** legal name, RC 9936491, incorporated October 2026, Nigeria, Abuja at city level, existing logo and colors, broad software business scope, carefully worded product descriptions.

**Verify before publishing:**
- Company domain and business email; actual public phone and office location.
- Product domain status, product availability and approved screenshots.
- Loomis business/legal relationship and any product ownership or registered trademark claims.
- Founder public name spelling, biography/photo, title and social links.
- Contracting terms, support expectations, portfolio customer testimonials and numerical metrics.
- Data collection and privacy disclosures, necessary legal terms, cookie/analytics practices.
- Actual pricing for services or products.

**Explicitly forbidden unverified claims:** financing rounds, users, 'trusted by' client logos, contract wins, successful enterprise deployments, company headcount, staff portraits, government affiliation, NCC approval, regulated fintech holding/escrow, cyber-security certification, clinical approval, partnerships with product payment providers beyond true integration, awards or press mentions.

---

# 10. Definition of success for the production website

A visitor should understand in less than a minute that:
- Bagatata is a real, registered technology company based in Nigeria.
- It both builds products and accepts relevant custom software work.
- Loomis, EventTicketsNG, ChatCart and ArewaVanta solve distinct problems.
- The site is polished enough to establish credibility without fictional evidence.
- There's a working way to inquire about a project.

Technical success: fast mobile load, semantic and accessible structure, working site navigation, genuine form submission when configured, clear SEO/social metadata, maintainable typed content, images properly optimized, and no hidden fake functionality.

---

# 11. Internal business/admin reminders (not site content)

- A Kuda Business account application/business banking process was reported; banking account details and activation status are **not website marketing content**.
- Paystack/Monnify have been explored for product and merchant payments. This does not imply Bagatata is a regulated payment processor.
- IP/trademarks/legal relationships across products should be confirmed before attaching corporate ownership language.
- Future holding-company plans, investment vehicles, regulated services or research divisions are **not** current public company structure.

# 12. Founder positioning clarification — 6 November 2026

- **[CONFIRMED founder direction]** Bagatata is building toward an enduring technology company that creates products and platforms across fields. Its public positioning should express that breadth and ambition.
- **[CONFIRMED founder report]** The work described in this brief is a selection from a wider portfolio. The founder supplied **MatchFootage**, https://matchfootage.com/, as another example of work completed.
- **[INTERNAL reference]** MatchFootage’s public website describes football player discovery through searchable profiles, clips and match appearances. This reference informs the breadth of Bagatata’s positioning; it does not establish product ownership, verified adoption metrics or permission to publish every feature as delivered.
- **[CONFIRMED founder direction]** Freelance and custom software projects remain part of Bagatata’s business, alongside its product initiatives.
- The four selected homepage product cards remain the current launch selection. A future portfolio expansion can incorporate additional approved work.

**Final authority:** Real incorporation documents, live product state, legally approved content, and the founder's explicit approval supersede this handoff whenever a conflict arises.
