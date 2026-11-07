# AGENTS.md — Instructions for Codex in this repository

You are implementing the official production website for **Bagatata Technologies Limited**, a legally incorporated Nigerian technology company.

## Read in this order
1. `COMPANY_SOURCE_OF_TRUTH.md` — legal/company/business facts and the truth boundaries.
2. `WEBSITE_COPY.md` — homepage and inner-page draft copy.
3. `CODEX_BUILD_PROMPT.md` — engineering specification and acceptance criteria.
4. `reference-concept-01/index.html` — visual/interaction reference, **especially the product explorer**.
5. `brand/` and `reference-concept-01/assets/` — approved existing logo images.

## Critical constraints
- **Use Concept 01's product explorer**: visual cards that let a visitor discover 4 distinct products; NOT Concept 02 or Concept 03's scroll-pinned product world approach.
- **Preserve the existing Bagatata gold ribbon B.** Do not invent/alter the identity, create badges, add an outline, or regenerate the logo.
- Product order: Loomis, EventTicketsNG, ChatCart, ArewaVanta.
- Never claim adoption metrics, testimonials, users, partnerships, companies/subsidiaries, awards, certifications or live product statuses without verified data.
- Do not portray Bagatata Holdings as incorporated or operating.
- Do not present cybersecurity and medical technology as existing Bagatata corporate divisions/services.
- Do not claim ChatCart holds funds, provides escrow, wallets or payment custody.
- Treat Loomis as a separate-company relationship pending public approval; do not claim wholly owned subsidiary status.
- Public Bagatata email, domain, exact address, and social profiles are **not confirmed**; use environment-backed content configuration and do not invent details.
- Developer may work with product screenshots only if assets are present and approved; other interface illustrations must be labeled illustrative.
- If critical data or credentials are missing, create safe placeholders/config switches, document the gap, continue implementing the rest. Do not fake successful functionality.

## Engineering habits
- Keep data, UI components, and site configuration separate; TypeScript strict mode.
- Semantic HTML, keyboard interactions, WCAG-minded contrast, reduced-motion support, no horizontal overflow at 320px.
- Prioritize readable content, mobile usability, actual form submission, and SEO over decorative animation.
- Avoid additional unnecessary backend, database, account system or CMS for a corporate brochure website.
- Include automated lint/type/build checks and targeted interaction tests; never claim a test passed unless actually executed.
- Do not silently rewrite copy to exaggerate capabilities or change product scope.
