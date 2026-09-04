# Wildflower Kitchen & Coffee - Design System

## 1. Creative Direction
**Vibe:** Earthy, boutique, organic, premium.
**Colors:** Terracotta, Cream, Deep Green.

## 2. Colors
Use these customized tailwind variables throughout the project. No rough hex values scattered in the project!

*   **Primary (Brand):** Deep Green (`bg-brand-900`, etc.)
    *   `brand-100`: `#F0F4F1` (Very light sage/green)
    *   `brand-500`: `#4A6B53` (Mid green)
    *   `brand-900`: `#1A2F22` (Deep green)
*   **Secondary (Accent):** Terracotta (`text-accent-500`)
    *   `accent-500`: `#C35B48` (Terracotta)
    *   `accent-600`: `#A1402F`
*   **Neutral (Backgrounds & Text):** Cream / Off-White / Charcoal
    *   `surface-50`: `#F9F6F0` (Cream background)
    *   `surface-100`: `#F0EBE1` (Slightly darker cream/border)
    *   `surface-800`: `#2C2C2C` (Soft black/charcoal text)
    *   `surface-900`: `#1A1A1A` (Strict black)

## 3. Typography
*   **Headings:** `font-serif` -> "Playfair Display"
    *   Usage: H1, H2, H3.
*   **Body:** `font-sans` -> "Inter"
    *   Usage: Paragraphs, buttons, UI elements.

## 4. UI Components

### Buttons
*   **Primary:** `bg-brand-900 text-surface-50 hover:bg-brand-500 transition-colors px-6 py-3 rounded-md font-sans tracking-wide`
*   **Secondary:** `bg-transparent border border-brand-900 text-brand-900 hover:bg-brand-100 transition-colors px-6 py-3 rounded-md font-sans tracking-wide`
*   **Accent:** `bg-accent-500 text-surface-50 hover:bg-accent-600 transition-colors px-6 py-3 rounded-md font-sans tracking-wide`

### Cards
*   `bg-surface-50 border border-surface-100 shadow-sm rounded-lg overflow-hidden`
*   Shadow convention: soft, organic. `shadow-sm` or `shadow-md` provided by standard tailwind is fine. Do not use heavy inset box shadows.

### Border Radius
*   Buttons: `rounded-md`
*   Images/Cards: `rounded-lg`

## 5. Animations
*   Tasteful scroll entry animations using Framer Motion. 
*   Convention: "fade-up on scroll"
    *   `initial={{ opacity: 0, y: 20 }}`
    *   `whileInView={{ opacity: 1, y: 0 }}`
    *   `transition={{ duration: 0.6, ease: "easeOut" }}`
    *   `viewport={{ once: true, margin: "-50px" }}`

## 6. Layout Spacing
*   Use standard Tailwind scales. Sections should have generous padding: `py-16 md:py-24`.
*   Container width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
