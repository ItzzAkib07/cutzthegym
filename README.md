# CUTZ THE GYM — Premium Cinematic Fitness Website
### By IFBB Pro Krishna Chauhan
**Tagline:** Train Under a Champion. Transform Like a Champion.

---

## 🏆 Project Overview

An award-winning, cinematic, multi-page digital brand experience built for **CUTZ THE GYM**, an elite 10,000 SQFT fitness destination located in Lohegaon, Pune (near D.Y. Patil College).

Designed as a fusion of luxury automotive design, professional bodybuilding pedigree, cinematic storytelling, and interactive 3D web technology.

---

## 💎 Key Features & Architecture

1. **Brand Identity & Vector Assets:**
   - Official metallic silver and gold vector logo (`/logo.svg`).
   - Deep obsidian color palette (`#080808`, `#111111`, `#171717`) with metallic chrome highlights (`#D6D6D6`) and luxury gold accents (`#C9A04A`, `#E6C36A`).
   - Premium typography pairing (`Bebas Neue`, `Oswald`, `Inter`, `Playfair Display`).

2. **3D Interactive Experience:**
   - Procedural metallic Dumbbell & Barbell scene with knurled stainless steel grips, chamfered plates, gold locking collars, and floating particles built using **Three.js** and **React Three Fiber**.
   - Pointer-responsive parallax tilt with smooth fallback for low-power devices.

3. **Motion Design & Smooth Scrolling:**
   - **Lenis Smooth Scroll** synchronized with **GSAP ScrollTrigger**.
   - Custom desktop cursor follower with context modes (`pointer`, `cta`, `video`, `drag`).
   - Interactive Before/After drag comparison slider for physical transformations.
   - Branded preloader with metallic logo reveal and progress tracking.

4. **Multi-Page Routing:**
   - `/` — Cinematic Homepage
   - `/about` — Brand Storytelling & Editorial Philosophy
   - `/facilities` — 10,000 SQFT Arena, Biomechanics, Climate Control & Sanitization
   - `/programs` — 10 Disciplines Landing Page
   - `/programs/:slug` — 10 Dedicated Discipline Detail Pages:
     - `muscle-building`
     - `fat-loss`
     - `strength-training`
     - `body-composition`
     - `personal-training`
     - `diet-plans`
     - `kids-activities`
     - `dance`
     - `zumba`
     - `yoga`
   - `/trainers` — Founder Spotlight (IFBB Pro Krishna Chauhan) & Coaching Directory
   - `/memberships` — Configurable Pricing Tiers & Full Comparison Matrix
   - `/gallery` — Filterable Masonry Grid with Fullscreen Lightbox
   - `/media` — Cutz Media Arena with Swiper Carousel & Lightbox
   - `/videos` — Cinematic Video Vault with Accessible Playback Modal
   - `/transformations` — Transformation Stories & Interactive Slider
   - `/contact` — Interactive Google Map, Form, Quick Dialers & WhatsApp
   - `/faq` — Searchable Categorized Accordion
   - `/privacy-policy` & `/terms-and-conditions` — Official Legal Pages

5. **Lead Generation & Conversion Optimization:**
   - Floating WhatsApp button with pre-filled message (`tel:+917028776663`, `917028776663`).
   - Direct click-to-call links.
   - Fixed mobile conversion bar with **Call Now** and **Join Now**.
   - Validated consultation form (Indian mobile validation, email validation, spam honeypot trap).

6. **SEO & Accessibility:**
   - `react-helmet-async` with unique titles, meta descriptions, canonical URLs, and OpenGraph images on every route.
   - LocalBusiness / `ExerciseGym` JSON-LD structured data.
   - Semantic HTML5, `robots.txt`, and `sitemap.xml`.

---

## 🛠️ Tech Stack

- **React 18** (JavaScript — No TypeScript)
- **Vite 5**
- **Tailwind CSS 3**
- **Three.js** / **@react-three/fiber** / **@react-three/drei**
- **GSAP** & **ScrollTrigger**
- **Framer Motion**
- **Lenis**
- **React Router DOM 6**
- **React Helmet Async**
- **Lucide React**

---

## 🚀 Getting Started

### 1. Development Server
```bash
npm run dev
```
Runs the local dev server at `http://localhost:3000`.

### 2. Production Build
```bash
npm run build
```
Creates an optimized production bundle in `dist/` with automated vendor chunk splitting.

### 3. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Centralized Data Configuration

All brand details, contact information, pricing packages, and facilities are easily editable from the `src/data/` folder without touching UI code:

| File | Purpose |
| :--- | :--- |
| `src/data/siteConfig.js` | Official gym phone numbers, address, coordinates, founder info, and social links. |
| `src/data/memberships.js` | Configurable pricing tiers, features, durations, and terms. |
| `src/data/programs.js` | Comprehensive data for all 10 fitness disciplines. |
| `src/data/facilities.js` | 10,000 SQFT zones, equipment, and amenity specifications. |
| `src/data/trainers.js` | Profiles for IFBB Pro Krishna Chauhan and coaching staff. |
| `src/data/gallery.js` | Image categories, photos, and captions. |
| `src/data/videos.js` | Video titles, durations, thumbnails, and YouTube embed IDs. |
| `src/data/faq.js` | Categorized questions and answers. |

---

## 📸 Swapping Placeholders with Real Photos

Place any official gym photographs inside `src/assets/images/` or drop high-resolution JPG/WebP files in the `public/images/` directory and update the corresponding image paths in `src/data/`.

---

## 📍 Gym Location & Contact

- **Location:** In front of Golden Winds Society, Near D.Y. Patil College, Lohegaon, Pune, Maharashtra – 411047, India.
- **Phone:** `+91 70287 76663` / `+91 72765 85998`
- **Instagram:** [@cutzthegym](https://www.instagram.com/cutzthegym/)

