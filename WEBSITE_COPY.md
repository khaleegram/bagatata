# Bagatata website copy: first publishing draft

**Editorial note:** This is approved-style *proposed text*, not an assertion that the founder has formally adopted every tagline, mission statement, or service. Code should store this content in typed data files so edits never require rewriting page components. Any section marked `[VERIFY]` should be hidden or replaced with an accurate non-claim until verified.

## GLOBAL NAV

- Brand: **Bagatata**
- Primary links: **Products | Services | About | Contact**
- Primary nav CTA: **Start a project**
- Mobile menu: Same links with usable tap targets and accessible close behavior.

---

# Home `/`

**SEO title:** Bagatata Technologies Limited | Digital Products & Software Engineering

**Meta description:** Bagatata Technologies Limited is an Abuja-based technology company building digital products, web and mobile software, SaaS platforms, and intelligent business solutions.

**Hero eyebrow:** Built in Nigeria. Thinking beyond.

**Hero H1:** BUILD WHAT SHOULD EXIST.

**Hero body:** Bagatata is a technology company bringing ambitious ideas to life. We create products and platforms across industries, driven by curiosity and the belief that technology can open up new possibilities in everyday life.

**Primary CTA:** Explore our work → `/#products`

**Secondary CTA:** Start a project → `/contact`

**Client project note:** We also build custom software for founders, businesses and organizations.

**Positioning update — 6 November 2026:** The founder clarified that Bagatata’s work and ambition extend across industries and beyond the four selected homepage products. The hero leads with the company’s product creation and broader technological ambition, with freelance/custom software work presented alongside it. Active hero copy is stored in `src/content/home.ts`.

**Small hero note:** Product engineering. Real-world software. Built from Nigeria.

**Capabilities strip:** Web applications · Mobile experiences · SaaS platforms · AI & automation · System integrations

## Products section

**Eyebrow:** Selected products / The portfolio

**H2:** Different problems. **One drive to build.**

**Intro:** A selection of products built around how people learn, organize, shop and compete.

**Explorer behavior:** Use the **Concept 01 two-column visual card grid**. At desktop, larger distinct cards can mix with a wide feature card. At mobile, each becomes an easy-to-read single-column card. The product explorer is the focal proof-of-work experience, not a fixed-scrolling product universe.

**LOOMIS**
- Tag: Education technology
- H3: Loomis
- Summary: A connected school management platform bringing academic records, attendance, fees and communication into one clearer workflow.
- Feature chips: Student management · Gradebook · School finance
- CTA: Explore Loomis
- Link: Product detail within site; link out to `https://loomis.digital` only when approved.
- Availability flag in data: `in_development` / not auto-exposed as 'Live'.

**EVENTTICKETSNG**
- Tag: Events & operations
- H3: EventTicketsNG
- Summary: A ticketing platform that helps organizers create events, sell tickets, track activity and manage event entry.
- Feature chips: Ticket sales · QR check-in · Organizer tools
- CTA: Explore EventTicketsNG
- Link: `https://eventticketsng.com` (verify public current version).
- Availability flag in data: `launched_reported`, not unsupported “serving thousands”.

**CHATCART**
- Tag: Social commerce
- H3: ChatCart
- Summary: A mobile-first shopping experience built around discovery, conversation, offers and organized orders.
- Feature chips: Discover · Chat & offers · Checkout & orders
- CTA: Explore ChatCart
- Link: Product detail; `https://chatcart.shop` only when its public site is confirmed.
- Availability: `in_development`.
- Never mention 'escrow' or promise users Bagatata holds funds.

**AREWAVANTA**
- Tag: Esports communities
- H3: ArewaVanta
- Summary: Competition, results and player statistics for Northern Nigeria's Call of Duty: Mobile Battle Royale community.
- Feature chips: Competitions · Scoring · Rankings
- CTA: Explore ArewaVanta
- Link: Product detail only until public domain confirmed.
- Availability: `preparing_launch`.

**Explore-all CTA:** View all products → `/products`

## Services section

**Eyebrow:** What we do

**H2:** From idea to software people can use.

**Intro:** We build digital systems around business needs, not around buzzwords. Whether you're testing a concept or replacing a process that no longer works, the goal is usable, maintainable software.

**Service cards:**

1. **Web platforms & internal systems** — Customer portals, business dashboards, operations tools and web applications built around real processes.
2. **Mobile product engineering** — Cross-platform mobile experiences for customers, communities and teams.
3. **SaaS & product development** — Multi-user and subscription-based platforms with clear roles, workflows and room to evolve.
4. **AI & workflow automation** — Practical intelligent features, automation and integrations that reduce repetitive work and enable better decisions.
5. **API & system integration** — Connect the services and data your product depends on; reduce manual duplication between tools.

**Services CTA:** Discuss your project → `/contact`

## Process section

**Eyebrow:** How we work

**H2:** Clear thinking. Deliberate engineering.

**Intro:** Good products take clear decisions, careful execution and the willingness to keep improving.

- **01 / Understand:** Define the users, the operational problem and what success looks like.
- **02 / Design:** Turn requirements into flows, architecture and a practical delivery scope.
- **03 / Build:** Develop and test the essential product, focusing on reliability and usability.
- **04 / Improve:** Launch, measure feedback and evolve without unnecessary complexity.

**Feedback note:** Feedback informs what comes next.

## About teaser

**H2:** A technology company. **Built to make ideas real.**

**Paragraphs:** Bagatata Technologies Limited is an independent technology company based in Abuja, Nigeria. We bring curiosity, product thinking and hands-on engineering to problems worth solving.

Our work crosses education, events, commerce and community technology. Alongside developing products and platforms, we build custom software for founders, businesses and organizations.

**Company facts:** Abuja, Nigeria · Incorporated 14 October 2026 · RC 9936491.

**CTA:** Get to know Bagatata → `/about`

## Closing CTA

**Eyebrow:** Build with us

**H2:** Have a problem worth solving?

**Paragraph:** Tell us what you're building, what's slowing your team down, or what you want your next product to do. We'll start with the problem.

**CTA:** Start a conversation → `/contact`

---

# About `/about`

**SEO title:** About Bagatata | Bagatata Technologies Limited

**H1:** Built from curiosity. Driven by the work.

**Lead:** Bagatata Technologies Limited is a Nigerian software and product company based in Abuja. We bring product strategy, design sensibility and hands-on engineering together to create technology with practical purpose.

**Company story:** We started with a simple conviction: good technology should make meaningful work easier and new opportunities possible. Incorporated on 14 October 2026, Bagatata combines independent product development with custom engineering for organizations building or modernizing digital services. Our work crosses several industries, but the approach stays consistent: understand the problem before building the solution.

**Mission label:** Our mission *(working statement)*

**Mission body:** To turn important, underserved problems into accessible, reliable digital systems.

**Values:** Solve real problems; Keep systems understandable; Build responsibly; Improve continuously; Think beyond launch.

**Official company facts:**
- Registered business: Bagatata Technologies Limited
- RC number: 9936491
- Founded/incorporated: 2026
- Location: Abuja, Nigeria

**Founder block:** `[VERIFY public profile and preferred founder name spelling before showing]`. No generic silhouette or invented portrait.

**CTA:** Explore what we're building → `/products`

---

# Products `/products`

**SEO title:** Products | Bagatata Technologies Limited

**H1:** Products built for real workflows.

**Lead:** From school operations and live events to commerce and competitive communities, our portfolio reflects one approach: find a clear problem, then build a system that makes it easier to solve.

Use the four product cards from the home explorer, each with:
- Product title and real brand treatment
- Category
- Problem statement
- One-paragraph solution
- 3–6 confirmed capability highlights
- Real screenshot where approved; otherwise clearly marked concept art
- Status label only if accurate and meaningful
- Internal detail link and a separate external product link only where known to be functioning

**Suggested product detail structure, if enabled:**
1. Product title and category.
2. Problem it addresses.
3. How the experience works, without features that are only planned.
4. Main features.
5. Screenshots and captions.
6. Verified product CTA.
7. Other products navigation.

---

# Services `/services`

**SEO title:** Software Development Services | Bagatata Technologies Limited

**H1:** Software built around the problem.

**Lead:** We help organizations turn operational needs into digital products, with engineering choices shaped by the people using the software and the constraints of running it.

**Services:**

**Web application development:** Business applications, portals, dashboards, customer tools and reliable workflows.

**Mobile application development:** Mobile-first products and cross-platform applications designed for actual daily use.

**SaaS engineering:** Tenant-aware platforms, role-based access, billing/workflow integrations and product foundations designed for growth.

**AI-enabled software & automation:** Applied AI functionality and automation for practical workflows, with clear boundaries around reliability and data handling.

**Integrations & APIs:** Connect products, payment providers and existing services through maintainable APIs and carefully designed data flows.

**Modernization & product iteration:** Improve existing software, remove workflow friction, and make systems more reliable and maintainable.

**Project process:** Understand → Scope → Design → Build → Verify → Launch/iterate.

**Commercial callout:** Every project begins with understanding requirements, not selecting an arbitrary package. Estimates and deliverables are agreed based on scope.

**CTA:** Tell us about your project → `/contact`

---

# Contact `/contact`

**SEO title:** Contact Bagatata | Start a Software Project

**H1:** Tell us what you're building.

**Lead:** Whether you have a new product idea, an operational process to improve, or an existing system to rebuild, start with a short explanation of the problem.

**Form labels:**
- Your name (required)
- Work email (required)
- Company or organization (optional)
- What do you need? (select, optional: Web software / Mobile app / SaaS product / AI or automation / Integration / Not sure yet)
- Tell us about the project (required)
- Approximate budget (optional, preferably free-text)

**Submit button:** Send inquiry

**Success text only after confirmed server success:** Thanks, your inquiry has been sent. We'll reply through the contact details you provided.

**Failure:** We couldn't send your inquiry. Please try again or use our listed business contact method.

**Location:** Abuja, Nigeria

**Direct email and phone:** Hide until founder supplies a confirmed public business contact. Do not display `hello@loomis.digital` as the Bagatata email.

---

# Footer

**Brand line:** Bagatata Technologies Limited

**Descriptor:** Digital products and software engineering.

**Legal line:** RC 9936491 · Abuja, Nigeria · © current year Bagatata Technologies Limited.

**Links:** Products | Services | About | Contact | Privacy

**Optional:** Social links after approval. No made-up LinkedIn, X/Twitter, Instagram handles, external 'Press' features, newsletter, app store badges, phone or office details.

---

# Content review before release

- Verify the current public availability/feature status of each product.
- Check company email, website URL, selected social accounts and form delivery.
- Confirm whether the founder's public biography and Loomis relationship are accurate and approved.
- Review privacy/terms with someone qualified if personal data is collected.
- Make sure all demo product charts have captions such as “Illustrative interface” until replaced with real screenshots.
- Confirm links, titles, descriptions and Open Graph images before deployment.
