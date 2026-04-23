

# Add Rich Media Across the Website

Right now the site leans heavily on typography, glass cards, and SVG decoration. Adding curated photography and short looping visuals will make it feel more alive, credible, and human — without breaking the premium glassmorphism aesthetic.

Below is a section-by-section media plan. All imagery will be AI-generated (Nano Banana Pro) in a consistent visual language: warm African daylight, Rwandan settings, electric-blue accent lighting echoing the iLink brand, photojournalistic but polished.

## Sections to Enrich

**1. Hero**
- Add a subtle background portrait collage (blurred) behind the right-hand chip illustration: Kigali skyline at golden hour with faint circuit overlay.
- Optional 6–8s looping silent video poster (Kigali rooftops + soft particle motion) — fallback to static image.

**2. About — The 361° Advantage**
- Add a small "in the field" photo strip below the diagram (3 thumbnails: team meeting, fintech UI on phone, rural connectivity) to ground the abstract concept in reality.

**3. Leadership**
- Replace the current monogram avatars with two professional executive portraits (warm studio light, navy backdrop) framed in glass with subtle blue rim glow.

**4. Services (Three Pillars)**
- Add a contextual photo header to each pillar card:
  - Strategic R&D → analysts at a workshop wall
  - Executive Training → classroom of executives with screens
  - Digital Platform Development → developers around a monitor

**5. Innovations Showcase**
- Add a hero/lifestyle image to each of the 5 product concept tiles (Educare, BNPL, Group Credit Life, Fuel Sales, Climate Index Insurance) so each becomes a visual story rather than text-only.

**6. Sales Accelerator: 2026**
- Add a dark cinematic background image (boardroom with blue light) behind the dark gradient section, dimmed to ~25% opacity for atmosphere.

**7. FIA Network Program**
- Already has the new image carousel — no change.

**8. Proprietary Digital Platforms**
- Add device mockup images (phone + laptop) for Mama Mia's Soko, Bima Kwik, and FIA Network Management System showing realistic UI screens.

**9. Mama Mia's Foundation**
- Add a warm photo banner (community gathering, women entrepreneurs, children in classroom) to convey the social mission emotionally.

**10. Six Strategic Objectives**
- Add a subtle iconographic illustration (not photo) per hex card to reinforce each objective without competing with the photography elsewhere.

**11. Contact**
- Add a soft photo of the Vision Arcade / Kigali office exterior beside the contact form, in a glass frame.

**12. Footer**
- Add a thin horizontal Rwanda landscape strip above the footer as a visual transition.

## Technical Approach

- Generate all images with `google/gemini-3-pro-image-preview` for consistent quality, saved to `src/assets/` with descriptive names (`hero-kigali.jpg`, `leadership-1.jpg`, etc.).
- Import as ES modules so Vite hashes and optimizes them.
- Wrap every image in a glass frame utility (rounded-2xl, hairline border, soft shadow) to stay on-brand.
- Use `loading="lazy"` and `decoding="async"` on all below-the-fold images for performance.
- Add a reusable `<MediaFrame>` component (image + optional caption + glass styling) to keep the look consistent across sections.
- Respect `prefers-reduced-motion` — no autoplay video for users who opt out.

## Suggested Rollout (so it stays manageable)

Phase 1 (highest impact): Hero background, Leadership portraits, Innovations tiles, Foundation banner.
Phase 2: Services pillar headers, Platforms device mockups, Contact office photo.
Phase 3: About field strip, Sales Accelerator backdrop, Footer landscape strip, Objectives icons.

Confirm whether you'd like me to execute **all three phases at once** or **start with Phase 1** only, and I'll proceed.

