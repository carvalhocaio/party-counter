```markdown
# Design System Document

## 1. Overview & Creative North Star: "The Backyard Samba"
This design system is built to capture the soul of a Brazilian *Pagode*—the warmth of a Sunday afternoon, the condensation on a cold glass of beer, and the rhythmic, unhurried vibe of "Deixa a vida me levar." 

**The Creative North Star: Organic Festivity.**
Unlike rigid, corporate grids, this system embraces a "polished rustic" aesthetic. We break the template look by utilizing **intentional asymmetry** and **illustrative layering**. Elements should feel like they were placed on a wooden table at a party—some overlapping, some slightly tilted—yet held together by a sophisticated tonal palette and expert typographic hierarchy. It is celebratory, tactile, and deeply human.

---

## 2. Colors
The palette is a sun-drenched journey through a Brazilian afternoon. We use deep ambers and greens to anchor the vibrant "Sun Yellow" primaries.

### Tonal Foundation
*   **Background (`#fef6e7`):** A warm, cream-parchment base that avoids the sterile coldness of pure white.
*   **Primary (Sun Yellow/Amber):** `primary` (`#755700`) and `primary_container` (`#fdc003`) represent the golden hour and the beer.
*   **Secondary (Deep Green):** `secondary` (`#266829`) provides the lush, tropical accent essential for the Pagode atmosphere.

### The Style Rules
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. To separate the guest list from the event details, use background shifts. A `surface_container_low` (`#f8f0e0`) card should sit on a `surface` (`#fef6e7`) background. The "line" is created by the eye, not the stroke.
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of stacked coasters or flyers. Use `surface_container` levels to create depth. A `surface_container_highest` (`#e5dcc9`) should be reserved for the most important interactive elements (like the RSVP trigger).
*   **Signature Textures:** For hero sections or primary CTAs, use a subtle radial gradient transitioning from `primary` (`#755700`) to `primary_dim` (`#664b00`). This adds a "lacquered wood" richness that flat hex codes lack.
*   **Glassmorphism:** For floating navigation or "Live Music" status chips, use a semi-transparent `surface_bright` with a `backdrop-blur` of 12px. This mimics the look of a frosted glass, letting the warm background colors bleed through.

---

## 3. Typography
The typography is a conversation between structure and soul. We mix the geometric stability of Epilogue with the friendly, expressive nature of Be Vietnam Pro.

*   **Display & Headline (Epilogue):** Bold, confident, and rhythmic. Used for the big "hook" (e.g., "PAGODE DA GABI"). 
    *   *Display-LG (`3.5rem`):* The star of the show.
*   **Title & Body (Be Vietnam Pro):** Clean and highly legible. This anchors the information (dates, location) so the party-goer doesn't get lost in the noise.
*   **The Handwritten Highlight:** While not a token, any "Deixa a vida me levar" style callouts should use a handwritten-style script font as an overlay, breaking the grid and overlapping images to create that "scrapbook" festive feel.
*   **Label (Plus Jakarta Sans):** Small-scale utility text that remains sharp even against busy, warm backgrounds.

---

## 4. Elevation & Depth
In this system, depth feels "ambient" rather than "digital."

*   **The Layering Principle:** Use the Tonal Scale. Place a `surface_container_lowest` (`#ffffff`) card inside a `surface_container` (`#f0e7d6`) section to create a soft "lift."
*   **Ambient Shadows:** For floating action buttons or RSVP cards, use "Beer-Tinted" shadows. Instead of grey, use 8% opacity of `on_surface` (`#322e25`) with a 24px blur and 8px Y-offset. This feels like a shadow cast on a sunny patio.
*   **The "Ghost Border" Fallback:** If you must define a boundary (e.g., an input field), use `outline_variant` (`#b3ac9f`) at **15% opacity**. It should be a whisper, not a shout.

---

## 5. Components

### Buttons (The "Bottle Cap" Style)
*   **Primary:** `primary_container` background with `on_primary_container` text. Roundedness: `full`. These should feel like physical objects you want to press.
*   **Secondary:** `surface_container_highest` with a `secondary` text label. No border.

### Cards (The "Flyer" Style)
*   Forbid dividers. Use `Spacing 8` (`2.75rem`) to separate content blocks.
*   Apply `roundedness-lg` (`1rem`) to all cards. 
*   **Layout Tip:** Allow images (like a drum or a beer glass) to break the card's boundary, spilling into the margin to reinforce the casual "Pagode" vibe.

### Input Fields
*   **Surface:** `surface_container_low`.
*   **Focus State:** Shift background to `surface_bright` and add a `primary` "Ghost Border" at 20% opacity. 
*   **Typography:** Use `body-md` for user entry to keep the feel friendly.

### Chips (The "Ticket" Style)
*   Used for "Live Music," "Open Bar," or "Pool Party" tags.
*   **Style:** Use `secondary_container` with `on_secondary_container` text. Use `roundedness-sm` for a slightly more "rugged" rustic look compared to the buttons.

---

## 6. Do's and Don'ts

### Do:
*   **Overlap Elements:** Place a "Sun Yellow" circle (`primary_fixed`) partially behind a photo of the guest of honor.
*   **Use Asymmetry:** Let the "Beer Amber" tones dominate one side of the layout while the "Deep Green" accents balance it on the opposite corner.
*   **Embrace White Space:** Use the `24` spacing token (`8.5rem`) between major sections to let the design "breathe" like a sunny afternoon.

### Don't:
*   **Don't use black:** Use `on_surface` (`#322e25`) for text. Pure black is too harsh for this warm, rustic palette.
*   **Don't use hard corners:** Avoid `none` or `sm` roundedness for main containers. It kills the "casual" vibe.
*   **Don't align everything to a center axis:** Shift some text to the left and some elements to the right to mimic the organic flow of a party.
*   **Don't use 1px dividers:** If you need to separate content, use a background color shift to `surface_variant` (`#e5dcc9`).

---

**Director’s Final Note:** This system is about the *feeling* of the music. When in doubt, ask: "Does this feel like a rigid corporate invite, or does it feel like a cold drink on a warm day?" Aim for the latter. Keep it polished, but never stiff.```