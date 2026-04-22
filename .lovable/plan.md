
# iLink Rwanda — Corporate Website

A premium, glassmorphism-driven corporate website for **I Link Rwanda Limited**, inspired by the iLink logo (electric blue circuitry on white) and the uploaded reference layout — elevated with frosted glass surfaces, soft gradient meshes, subtle circuit-line motifs, and refined motion.

## Visual Direction
- **Palette**: Deep navy `#0A1F44`, electric iLink blue `#1E9BE9`, sky tint `#7CC7F2`, frosted white, soft sky gradient backgrounds.
- **Glassmorphism**: Frosted cards (backdrop-blur, semi-transparent white, hairline borders, layered shadows) over animated blue gradient blobs and faint circuit-line SVG patterns echoing the chip in the logo.
- **Typography**: Modern geometric sans (Inter/Sora) — large editorial headlines with the accent word in iLink blue.
- **Motion**: Gentle parallax, scroll-reveal fades, hover glow on glass cards, animated counters, marquee for partners/licenses.
- **Logo**: iLink chip mark used in nav, footer, and as a watermark hero motif.

## Site Structure (single-page with anchor nav + dedicated routes)

**1. Sticky Glass Navigation**
Logo · Home · About · Leadership · Services · Solutions · Impact · Ecosystem · Foundation · Contact — translucent blurred bar, blue CTA "Partner With Us".

**2. Hero**
- Eyebrow: "ARCHITECTING RWANDA'S DIGITAL & FINANCIAL FUTURE"
- Headline: "Building Market-Ready Solutions with a **361° Holistic Approach**"
- Sub: tagline from PDF intro.
- Two CTAs: "Explore Solutions" / "Watch Our Story".
- Right side: floating glass panel with the iLink chip illustration, orbiting nodes, and circuit lines (echoes the reference image).

**3. Trust Strip (Glass Stat Bar)**
1.8M+ Households · 451 FIA Ambassadors · RWF 5B Mobilized · 10+ Years Expertise — animated counters in a single frosted bar.

**4. The 361° Advantage (About)**
Editorial split: copy on left, animated 361° circular diagram on right showing the "one degree beyond" concept.

**5. Leadership — Synergistic Partnership**
Two premium glass profile cards:
- Regulatory Authority & Financial Innovation Expert (18+ yrs, UNDP/ILO advisor, 500+ certified, 10+ books, AIO Best Book Award).
- Visionary Technologist & Government Policies Advocate (15+ yrs, AfCFTA Implementation Committee, e-Gov procurement).

**6. Three Service Pillars**
Glass cards with custom blue iconography:
- Strategic R&D and Consultancy
- Executive Training & Capacity Building
- Digital Platform Development & Implementation

**7. R&D Innovations Showcase**
Horizontal scroll/grid of product concepts with glass tiles: Educare Corporate, BNPL Credit Life, Group Credit Life, Fuel Sales Integration, Climate-Linked Index Insurance.

**8. Sales Accelerator: 2026**
Dark gradient section with the brain/network seal motif. Five core modules as glass chips: Identity Boost · Trust Economy · Quantum Physics of Sales · Modern Toolkit (AI) · Learn-Unlearn-Relearn.

**9. FIA Network Program (Flagship Case Study)**
Two-column: narrative + stylized Rwanda map SVG with glowing connection nodes. Role badges: "Lead Implementing Partner" + "Technology & Platform Partner". Embedded impact metrics.

**10. Parent Group — I Link Global Holdings**
"The Vault" section explaining MARTECH + cross-sector licenses, "Africa and Beyond" tagline, blueprint-style diagram.

**11. Ecosystem of Proprietary Licenses**
5 sector cards (glass), each listing brands:
- Fintech & Insuretech — iBank, Bima Kwik (award-winning)
- Real Estate — myEstate
- Extractives & Trade — iMine, iSupply
- E-Commerce & Logistics — Mama Mia's Soko, Dunamis Delivery
- Professional Services — iClean, Atomic Star

**12. Proprietary Digital Platforms**
Featured tiles for Mama Mia's Soko, Bima Kwik, FIA Network Management System with descriptive copy and platform mock visuals.

**13. Mama Mia's Foundation (Social Mission)**
Warm-toned glass section introducing the INGO arm.

**14. Six Strategic Objectives**
Hex/grid of six glass cards: Foster Inclusion · Empower & Connect · Promote Well-being · Drive Sustainability · Resolve Conflicts & Uphold Rights · Build Capacity.

**15. Partner CTA**
Full-width gradient + glass panel: "Partner with I Link Rwanda to Build the Future of Finance and Digital Commerce." → Contact form.

**16. Contact**
Glass form (Name, Company, Email, Interest, Message) + info card:
📍 Vision Arcade Executive Suites, KG 379 & KG 9 Avenue, Kigali · 📞 +250 793 146 087 · ✉ info@ilinkbiz.com · 🌐 www.ilinkbiz.com

**17. Footer**
Logo, tagline "Architecting Rwanda's Digital and Financial Future", quick links, license brands, social, legal.

## Technical Notes
- Logo copied to `src/assets/` and used throughout.
- Custom Tailwind tokens for iLink blue palette + glass utility classes (`.glass`, `.glass-strong`).
- Decorative SVG: circuit-board lines, orbital chip illustration, Rwanda map with glowing nodes.
- Smooth-scroll anchors; responsive across mobile/tablet/desktop.
- Subtle Framer-Motion-style reveal animations using CSS + IntersectionObserver.
