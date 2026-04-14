# Design System Strategy: The Vitality Editorial

## 1. Overview & Creative North Star
The North Star for this design system is **"The Living Lab."** 

Unlike clinical, cold medical interfaces or overly playful fitness apps, this system treats health data as a premium editorial experience. We are moving away from the "Dashboard of Widgets" look and toward a "Curated Health Journal." 

The system breaks the traditional rigid grid through **Intentional Asymmetry** and **Tonal Depth**. We utilize expansive white space (the "Breathe" principle) and overlapping elements to create a sense of movement and vitality. By mixing high-contrast typography scales with soft, organic container shapes, we achieve a balance that feels both scientifically authoritative and deeply personal.

---

## 2. Colors: Tonal Vitality
Our palette isn't just about color; it’s about light and energy. We use fresh greens (`primary`) to represent growth and soft oranges (`secondary`) to spark action.

### The "No-Line" Rule
**Strict Directive:** 1px solid borders are prohibited for sectioning. 
Visual boundaries must be defined solely through background shifts. For example, a `surface-container-low` section sitting on a `surface` background creates a natural edge. This "No-Line" approach ensures the UI feels like a seamless physical environment rather than a digital wireframe.

### Surface Hierarchy & Nesting
Treat the UI as layered sheets of premium paper.
*   **Base:** `surface` (#f5f7f5)
*   **Primary Content Area:** `surface-container-lowest` (#ffffff) for maximum "pop."
*   **Secondary Context:** `surface-container` (#e6e9e7) for background grouping.

### The Glass & Gradient Rule
To move beyond a "standard" flat look, use **Glassmorphism** for floating elements (e.g., navigation bars or metric overlays). Apply `surface-container-lowest` with 80% opacity and a `24px` backdrop-blur. 
*   **Signature Textures:** For Hero CTAs and high-impact metrics, use a subtle linear gradient: `primary` (#176a21) to `primary-container` (#9df197) at a 135° angle. This adds "soul" and dimension.

---

## 3. Typography: The Editorial Voice
We use a dual-font strategy to balance precision with warmth.

*   **Display & Headlines (Manrope):** This is our "Intelligence" layer. Manrope’s geometric yet modern curves feel professional and data-driven. Use `display-lg` for key metrics (e.g., Step Counts) to make them heroic.
*   **Body & Titles (Plus Jakarta Sans):** This is our "Friendly" layer. Plus Jakarta Sans offers high legibility with a contemporary, approachable personality.

**Hierarchy Strategy:** 
Use `headline-md` for section titles but keep them `on-surface-variant` (#595c5b) to allow the `display-sm` data points in `primary` (#176a21) to command the user’s attention first.

---

## 4. Elevation & Depth
Depth is a functional tool, not a decoration.

*   **The Layering Principle:** Stacking is our primary method of hierarchy. Place a `surface-container-lowest` card on a `surface-container-low` background. The subtle shift from #ffffff to #eff1ef creates "soft lift."
*   **Ambient Shadows:** For elevated elements (Floating Action Buttons or active cards), use a "Living Shadow": 
    *   `X: 0, Y: 12, Blur: 32, Spread: -4`
    *   Color: 6% opacity of `on-surface` (#2c2f2e). This mimics natural light.
*   **The "Ghost Border" Fallback:** If accessibility requires a border (e.g., in high-contrast modes), use `outline-variant` (#abaeac) at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components: Fluid Primitives

### Cards & Metrics
*   **Corner Radius:** Use `md` (1.5rem / 24px) for main containers to feel approachable.
*   **Layout:** Forbid divider lines within cards. Use `2rem` (xl) vertical spacing to separate header and content. Use a `surface-variant` (#d9dedb) background for small "metadata" chips inside cards.

### Buttons
*   **Primary:** Solid `primary` (#176a21) with `on-primary` text. Radius: `full`.
*   **Secondary:** Solid `secondary-container` (#ffc697) with `on-secondary-container` text. This is for high-energy actions like "Start Workout."
*   **Tertiary:** No background. Bold `primary` text with a subtle `primary-fixed-dim` underline on hover.

### Input Fields
*   **Style:** Minimalist. No bottom line or box. Use `surface-container-high` as a solid background fill with `sm` (0.5rem) rounded corners.
*   **States:** On focus, the background shifts to `surface-container-lowest` with a 1px "Ghost Border."

### Specialized Component: The "Vitality Ring"
A custom circular progress component for health metrics. Use a thick `secondary-fixed-dim` track with a `primary` glowing stroke. This combines the energy of orange with the health of green.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. A wider left margin on tablet/desktop creates an editorial, high-end feel.
*   **Do** use organic icon placement. Let icons (heart, leaf) bleed slightly outside the padding of their container for a "custom" look.
*   **Do** prioritize `surface-container-lowest` for cards containing actionable data to make them feel "closer" to the user.

### Don’t:
*   **Don’t** use pure black (#000000). Always use `on-surface` (#2c2f2e) for text to maintain a soft, premium feel.
*   **Don’t** use standard "drop shadows." If the shadow feels "heavy," increase the blur and decrease the opacity.
*   **Don’t** use dividers. If two pieces of content feel cluttered, increase the white space according to the scale; do not add a line.