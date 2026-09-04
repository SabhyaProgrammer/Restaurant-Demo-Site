# Multi-Agent Build Plan: Wildflower Kitchen & Coffee Demo Site

Feed these to Antigravity in order. Every downstream agent (2-6) should also receive the **Shared Design & Quality Context** block below pasted into its prompt — this prevents visual/style drift across parallel agents.

---

## SHARED DESIGN & QUALITY CONTEXT
*(Paste this into every agent's prompt, agents 2 through 6)*

You are contributing to a larger portfolio demo project: a boutique restaurant/cafe website called "Wildflower Kitchen & Coffee" (or the name established by the Foundation Agent — check `DESIGN_SYSTEM.md` first if it exists in the repo). This must look like a premium $3,000+ agency build, not a template.

Non-negotiable standards for anything you build:
- Follow `DESIGN_SYSTEM.md` exactly for colors, fonts, spacing, button/card styles, border-radius, and shadow conventions. Do not introduce new colors or fonts.
- Mobile-first responsive: test/design for 375px, 768px, 1024px, 1440px.
- Semantic HTML, proper heading hierarchy, labeled form inputs, alt text on all images, visible custom focus states, WCAG AA contrast.
- Use Framer Motion `whileInView` for subtle scroll-entry animations consistent with what other pages use — keep it tasteful.
- Comment your code clearly, as if handing off to another developer.
- Only touch the files/folders explicitly assigned to you below. If you need something from another agent's scope (e.g., a shared component or data file) that doesn't exist yet, create a minimal placeholder version, clearly comment it as a placeholder, and note it in your summary — do not build out someone else's scope.
- No console errors. Your piece must build cleanly on its own within the larger project.

---

## AGENT 1 — FOUNDATION (runs first, alone, nothing else starts until this is done)

**Scope:** Project scaffold, theme, routing skeleton, shared layout components.

**Files you own:** `vite.config.js`, `tailwind.config.js`, `src/main.jsx`, `src/App.jsx`, `src/index.css`, `src/components/Navbar.jsx`, `src/components/Footer.jsx`, `src/router.jsx` (or equivalent routing setup), `DESIGN_SYSTEM.md`.

**Task:**
1. Scaffold a Vite + React project with Tailwind CSS configured.
2. Decide and lock in the creative direction: restaurant name/tagline, color palette (earthy/boutique — terracotta, cream, deep green, or charcoal+gold — pick one direction), font pairing (distinctive serif for headings via Google Fonts + clean sans-serif body). Extend `tailwind.config.js` with named custom color tokens and font families — no hardcoded hex codes elsewhere in the project.
3. Build `Navbar.jsx` (sticky, transparent-to-solid on scroll, mobile hamburger menu) and `Footer.jsx` (contact info, social icon placeholders, hours, newsletter input — front-end only) as shared components every page will import.
4. Set up React Router with routes for: Home (`/`), Menu (`/menu`), Reservations (`/reservations`), Gallery (`/gallery`), About/Contact (`/about` — confirm if combined or split, pick combined for simplicity unless you have a strong reason not to).
5. Write `DESIGN_SYSTEM.md` documenting: color tokens and their hex values with usage guidance, font pairing and where each is used, spacing scale, button variants (primary/secondary/ghost) with exact Tailwind classes, card component style, border-radius and shadow conventions, and animation conventions (e.g., "fade-up on scroll, 0.4s ease"). This file is the single source of truth every other agent must follow.
6. Confirm your creative decisions in a 4-6 sentence summary before/alongside your output.

**Output when done:** Confirm the dev server runs cleanly with placeholder empty pages at each route, and that `DESIGN_SYSTEM.md` is complete enough for another agent to build a matching page without further questions.

---

## AGENT 2 — CONTENT & DATA (runs after Agent 1, can run in parallel with nothing else needs to wait for this except pages that consume it)

**Scope:** All static content and data files. No UI/components.

**Files you own:** `src/data/menuData.js`, `src/data/galleryData.js`, `src/data/teamData.js`, `src/data/businessData.js` (hours, address, phone, email, social links).

**Task:**
1. `menuData.js`: array of 18-24 menu items across categories (Breakfast, Coffee & Drinks, Lunch, Dinner, Desserts). Each item: `{ id, category, name, description, price, tags }` where tags include things like `vegetarian`, `glutenFree`, `spicy`. Write real, professionally-written, appetizing descriptions — no lorem ipsum, no placeholder text.
2. `galleryData.js`: array of 12+ image objects `{ id, src, alt, aspectRatio }` — use varied realistic placeholder image URLs (Unsplash source URLs or picsum.photos with food/interior-relevant seeds) with descriptive alt text for each.
3. `teamData.js`: 3-4 team members `{ name, role, bio, photoSrc }` with a short one-line bio each, warm and authentic tone.
4. `businessData.js`: restaurant name/tagline (matching Agent 1's decision — check `DESIGN_SYSTEM.md`), full address (pick a real city/neighborhood, e.g., Portland OR or Austin TX, with a plausible street address), phone, email, hours table (day-by-day), social links (placeholders ok), and the "Our Story" 2-3 sentence blurb for the homepage.

**Output when done:** All four data files complete, internally consistent (same restaurant name/address everywhere), and exported in a way other agents can simply `import menuData from '../data/menuData'`.

---

## AGENT 3 — PAGE BUILDER: HOME + ABOUT/CONTACT (runs after Agents 1 & 2 complete)

**Scope:** Home page and combined About/Contact page.

**Files you own:** `src/pages/Home.jsx`, `src/pages/AboutContact.jsx`, `src/components/Hero.jsx`, `src/components/ContactForm.jsx`, `src/components/TeamCard.jsx`.

**Task:**
1. **Home:** full-viewport hero (name, tagline, two CTAs: "Reserve a Table" → `/reservations`, "View Menu" → `/menu`), "Our Story" section (pull from `businessData.js`), featured dishes grid (4-6 items pulled from `menuData.js`), hours & location snippet with embedded map preview (see Map spec below), Instagram-style photo strip (reuse 4-6 images from `galleryData.js`).
2. **About/Contact:** founder/chef story section, team cards (map over `teamData.js` using `TeamCard.jsx`), contact info block (address, click-to-call phone, click-to-email), embedded map, hours table, and a separate contact form (`ContactForm.jsx`: name, email, message — with validation, loading state, and success confirmation, front-end only, no real submission).
3. **Map embed (used on this page and reused by Agent 5 on Reservations):** build a reusable `src/components/MapEmbed.jsx` that takes an address prop, renders a Google Maps iframe embed (no API key needed) styled inside a card with an address caption and a "Get Directions" button linking to `https://www.google.com/maps/search/?api=1&query=` + URL-encoded address. Support an optional `VITE_GOOGLE_MAPS_API_KEY` env var with graceful fallback to the iframe embed if absent — comment clearly. Since Agent 5 also needs this component, build it now and note it clearly in your output so Agent 5 knows to just import it.

**Output when done:** Both pages fully built, responsive, animated per `DESIGN_SYSTEM.md`, `MapEmbed.jsx` ready for reuse.

---

## AGENT 4 — PAGE BUILDER: MENU + GALLERY (runs after Agents 1 & 2 complete, parallel to Agent 3)

**Scope:** Menu page and Gallery page.

**Files you own:** `src/pages/Menu.jsx`, `src/pages/Gallery.jsx`, `src/components/MenuCard.jsx`, `src/components/CategoryTabs.jsx`, `src/components/LightboxGallery.jsx`.

**Task:**
1. **Menu:** sticky category tab/jump nav across categories in `menuData.js`, responsive grid (1 col mobile, 2-3 col desktop) of `MenuCard.jsx` showing name, description, price, and dietary tag badges.
2. **Gallery:** responsive masonry/grid layout using `galleryData.js` (12+ images, varied aspect ratios), lazy-loaded (`loading="lazy"`). Build `LightboxGallery.jsx` with click-to-expand, next/prev navigation, close button, and keyboard support (arrow keys, Escape).

**Output when done:** Both pages responsive, accessible (keyboard-navigable lightbox), matching `DESIGN_SYSTEM.md` styling.

---

## AGENT 5 — PAGE BUILDER: RESERVATIONS (runs after Agents 1, 2 & 3 complete — depends on Agent 3's `MapEmbed.jsx`)

**Scope:** Reservations page and its form logic.

**Files you own:** `src/pages/Reservations.jsx`, `src/components/ReservationForm.jsx`.

**Task:**
1. Build `ReservationForm.jsx` with fields: Full Name, Email, Phone, Date (date picker, cannot be in the past), Time (dropdown of realistic slots generated from `businessData.js` hours), Party Size (stepper/dropdown, max 12 with a note to call for larger groups), Special Requests (optional textarea).
2. Client-side validation on all required fields, valid email/phone format.
3. On submit: loading spinner state (~1s simulated delay), then a success confirmation message referencing the submitted name/date/time/party size. Include a clearly commented placeholder function `submitReservation()` where a real API call (Formspree/EmailJS/custom backend) would go.
4. Display business hours and cancellation policy note near the form (pull hours from `businessData.js`).
5. Import and reuse Agent 3's `MapEmbed.jsx` on this page (do not rebuild it) so users can see the location while booking.

**Output when done:** Fully functional, validated reservation flow with all three states (idle/loading/success) working, map embedded via the shared component.

---

## AGENT 6 — QA & INTEGRATION (runs last, after all others complete)

**Scope:** Whole repo — read/verify, fix only integration issues, do not redesign.

**Task:**
1. Run `npm run build` and fix any build errors or console warnings.
2. Verify every route renders and navigation links all work correctly.
3. Check responsiveness by inspecting layout logic at 375px, 768px, 1024px, 1440px for every page — fix any breakpoints that were missed.
4. Verify accessibility: semantic tags, alt text present everywhere, form labels present, focus states visible and on-brand, run a quick contrast check against `DESIGN_SYSTEM.md` colors.
5. Verify design consistency across pages built by different agents — spacing, button styles, fonts, animation timing should feel uniform. Fix any visible drift by aligning to `DESIGN_SYSTEM.md`, not by introducing new styles.
6. Write the final `README.md`: how to run locally, how to edit menu data, how to change the map address, how to change theme colors, and where to plug in a real backend for the reservation form.
7. Go through this checklist and confirm each item explicitly in your final summary:
   - [ ] All 5 page areas implemented and linked via working navigation
   - [ ] Reservation form fully validated with success/error/loading states
   - [ ] Menu data externalized with 18+ realistic items
   - [ ] Gallery with working, keyboard-accessible lightbox, 12+ images
   - [ ] Google Maps embedded and styled on Home/Contact and Reservations
   - [ ] Fully responsive at all breakpoints
   - [ ] Accessible: semantic HTML, alt text, labeled forms, focus states, contrast
   - [ ] No console errors, successful production build
   - [ ] README written
   - [ ] Visual design feels premium/boutique and consistent across all pages, not templated or drifting between sections

---

## EXECUTION ORDER SUMMARY (tell the IDE this explicitly)

1. Agent 1 (Foundation) — solo, must finish first.
2. Agent 2 (Content/Data) — can start immediately after Agent 1, runs solo or parallel to nothing yet since 3/4/5 need it.
3. Agents 3 and 4 — run in parallel once Agents 1 & 2 are done.
4. Agent 5 — starts once Agents 1, 2, and 3 are all done (needs `MapEmbed.jsx` from Agent 3).
5. Agent 6 (QA) — last, only after every other agent has finished.
