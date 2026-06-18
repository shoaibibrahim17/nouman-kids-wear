# Nouman Kids Wear — Project Architecture Map

Quick reference for navigating the codebase and understanding which files control what.

---

## Folder Structure Overview

```
nouman-kids-wear/
├── public/                    # Static assets (images, videos, fonts)
│   ├── brand/                 # Brand assets (logo, splash video)
│   └── hero/                  # Hero section background image
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # Root layout, fonts, metadata, viewport config
│   │   ├── page.tsx           # Homepage — imports and renders all sections
│   │   └── globals.css        # Tailwind v4, theme tokens, utilities
│   ├── components/
│   │   ├── common/            # Reusable components (cross-section)
│   │   ├── layout/            # Header, Footer
│   │   ├── sections/          # Homepage sections (Hero, NewArrivals, etc.)
│   │   └── ui/                # shadcn/ui primitives (Button, Card, Sheet, etc.)
│   ├── data/                  # Business data and configuration
│   │   ├── site.ts            # SITE config, NAV_LINKS, category/age options
│   │   ├── products.ts        # PRODUCTS array, NEW_ARRIVALS, FEATURED_PRODUCTS
│   │   └── categories.ts      # CATEGORIES, COLLECTIONS, labels
│   ├── lib/                   # Utilities and helpers
│   │   ├── animations.ts      # Motion variants (fadeInUp, staggerContainer)
│   │   ├── accents.ts         # Accent color mappings (ACCENT_SOFT, ACCENT_DOT)
│   │   ├── utils.ts           # cn() utility (clsx + tailwind-merge)
│   │   └── whatsapp.ts        # WhatsApp URL builders
│   └── types/
│       └── product.ts         # TypeScript types (Product, Category, Collection, etc.)
├── scripts/                   # Build/utility scripts
│   ├── faststart.mjs          # Quick dev server script
│   └── logo-transparent.mjs   # Logo processing
├── package.json               # Dependencies, scripts
├── tsconfig.json              # TypeScript config
├── next.config.ts             # Next.js config
├── tailwind.config.js         # Tailwind v4 config
├── components.json            # shadcn/ui config
└── AGENTS.md                  # AI agent rules & memory (this doc's companion)
```

---

## Key Components by Function

### 🎨 Brand & Identity

| File | Purpose | Notes |
|------|---------|-------|
| `src/data/site.ts` | Business info (name, tagline, address, phone, WhatsApp, social links, hours) | **Contains placeholder contact numbers** — update before launch |
| `public/brand/nouman-logo.png` | Logo image | Used in Header, Hero, Footer |
| `public/brand/nouman-logo-splash.mp4` | 4:5 splash video (~5s) | **ISSUE**: Not playing in `SplashScreen.tsx` |
| `src/app/globals.css` | `.brand-wordmark` utility | Pastel gradient for brand name |

### 📄 Page Structure

| File | Purpose | Component Type |
|------|---------|----------------|
| `src/app/layout.tsx` | Root layout, fonts (Geist Sans, Geist Mono, Fraunces), metadata, viewport | Server Component |
| `src/app/page.tsx` | Homepage — imports Header, Footer, all sections | Server Component |

**Page composition** (top to bottom):
1. `<SplashScreen />` — One-time video intro (session-based)
2. `<Header />` — Sticky navigation
3. `<main>` → All sections:
   - `<Hero />` — Brand lockup, tagline, CTA, mini new arrivals slider
   - `<CategoryNav />` — Category quick links
   - `<NewArrivals />` — Grid of new products
   - `<ProductCatalogue />` — Full product grid with filters
   - `<FeaturedCollections />` — Collection highlight cards
   - `<WhyShopWithUs />` — USP/benefits section
   - `<StoreGallery />` — Photo grid of physical store
   - `<LocationContact />` — Map, address, hours, contact form
4. `<Footer />` — Site map, categories, social links

### 🧩 Layout Components

| File | Purpose | Notes |
|------|---------|-------|
| `src/components/layout/Header.tsx` | Sticky header (logo, nav, WhatsApp CTA, mobile menu) | Client Component (scroll state) |
| `src/components/layout/Footer.tsx` | Footer (brand, links, categories, contact, social) | Server Component |

**Header behavior**:
- Transparent when at top, solid bg on scroll
- Desktop: horizontal nav
- Mobile: hamburger menu → Sheet (right slide-in)

### 🏠 Section Components

| File | Purpose | Known Issues |
|------|---------|--------------|
| `src/components/sections/Hero.tsx` | Hero banner — brand lockup, tagline, CTA, stats, HeroNewArrivals | **ISSUE**: Background image not visible |
| `src/components/sections/HeroNewArrivals.tsx` | Mini carousel of new arrivals (right side of Hero) | **ISSUE**: Auto-transition not working (should advance every 1–2s) |
| `src/components/sections/CategoryNav.tsx` | Category chips with accent colors | — |
| `src/components/sections/NewArrivals.tsx` | Grid of new products | — |
| `src/components/sections/ProductCatalogue.tsx` | Filterable product grid (gender, age, category) | — |
| `src/components/sections/FeaturedCollections.tsx` | Large collection feature cards | — |
| `src/components/sections/WhyShopWithUs.tsx` | Benefits/USP grid | — |
| `src/components/sections/StoreGallery.tsx` | Photo gallery (store interior/exterior) | Currently shows placeholder tiles |
| `src/components/sections/LocationContact.tsx` | Map embed, address, hours, contact form | — |

### 🧱 Common/Reusable Components

| File | Purpose | Usage |
|------|---------|-------|
| `src/components/common/ProductCard.tsx` | Product display card (image, name, category, badge, WhatsApp CTA) | Used in NewArrivals, ProductCatalogue |
| `src/components/common/SplashScreen.tsx` | One-time video intro | **ISSUE**: Video not playing |
| `src/components/common/WhatsAppButton.tsx` | Green WhatsApp CTA button | Used across all sections |
| `src/components/common/Doodles.tsx` | SVG doodles (Star, Heart, Cloud, Hanger, Sock, Onesie, Teddy, Button) | Decorative accents (low opacity) |
| `src/components/common/Section.tsx` | Section wrapper with consistent spacing | Standard section container |

**Doodles** (from `Doodles.tsx`):
- `StarDoodle`, `HeartDoodle`, `CloudDoodle`, `HangerDoodle` — used in Hero
- `SockDoodle`, `OnesieDoodle`, `TeddyDoodle`, `ButtonDoodle` — available but not yet used
- All inherit `currentColor` — control color/opacity via className
- Decorative only (`aria-hidden`)

### 🎨 shadcn/ui Components

Pre-configured in `src/components/ui/`:
- `button.tsx`, `card.tsx`, `input.tsx`, `textarea.tsx`
- `sheet.tsx` (mobile menu)
- `dialog.tsx` (modals)
- `accordion.tsx`, `tabs.tsx`
- `badge.tsx`, `separator.tsx`

All styled with project's pastel theme and neomorphism.

---

## Data Files

### Products (`src/data/products.ts`)

**Exports**:
- `PRODUCTS: Product[]` — Full product inventory (currently 12 placeholder items)
- `NEW_ARRIVALS: Product[]` — Filtered list where `isNew === true`
- `FEATURED_PRODUCTS: Product[]` — Filtered list where `featured === true`

**Product shape**:
```typescript
{
  id: string;              // Unique slug
  name: string;            // Display name
  category: CategorySlug;  // Category (e.g., "boys-wear", "party-wear")
  gender: Gender;          // "boys" | "girls" | "unisex"
  ageGroup: AgeGroup;      // "newborn" | "toddler" | "kids" | "juniors"
  sizes: string[];         // e.g., ["2-3Y", "4-5Y"]
  image: string;           // Image URL (currently Unsplash placeholders)
  price: string;           // Always "Price on request"
  badge?: string;          // Optional (e.g., "New", "Bestseller")
  isNew?: boolean;         // Show in New Arrivals
  featured?: boolean;      // Show in Featured Products
  collection?: string;     // Collection slug (e.g., "party-wear")
  description?: string;    // Brief description
}
```

**⚠️ ACTION REQUIRED**: Replace all Unsplash image URLs with real Nouman product photos.

### Categories & Collections (`src/data/categories.ts`)

**Exports**:
- `CATEGORIES: Category[]` — 7 categories (boys-wear, girls-wear, newborn, party-wear, ethnic-wear, casual-wear, shoes-accessories)
- `CATEGORY_LABELS: Record<CategorySlug, string>` — Slug → label map
- `COLLECTIONS: Collection[]` — 4 featured collections (festival-wear, party-wear, casual-wear, newborn-essentials)

**Category shape**:
```typescript
{
  slug: CategorySlug;        // e.g., "boys-wear"
  label: string;             // Display name
  description: string;       // Short tagline
  accent: BrandAccent;       // "blush" | "mint" | "sky" | "peach" | "lilac"
}
```

**Collection shape**:
```typescript
{
  slug: string;
  title: string;
  description: string;
  accent: BrandAccent;
  image: string;             // Hero image (currently Unsplash placeholder)
}
```

### Site Config (`src/data/site.ts`)

**Exports**:
- `SITE` — Business info (name, tagline, description, phone, WhatsApp, email, address, hours, social links)
- `NAV_LINKS` — Navigation menu items (label, href)
- `GENDER_OPTIONS` — Gender filter options
- `AGE_GROUP_OPTIONS` — Age filter options with hints

**⚠️ CRITICAL**: `whatsappNumber`, `phoneDisplay`, `phoneHref` are currently placeholders — update before launch.

---

## Utilities & Helpers

### Animations (`src/lib/animations.ts`)

Motion variants for consistent animation:
- `fadeInUp` — Fade in + translate up (most common)
- `fadeIn` — Simple opacity fade
- `scaleIn` — Fade + scale from 0.98 to 1
- `staggerContainer` — Parent container that staggers children (0.08s delay)
- `viewportOnce` — Standard viewport config (animate once when 20% visible)

**Usage**:
```tsx
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="show"
  viewport={viewportOnce}
>
```

### Accent Colors (`src/lib/accents.ts`)

Maps brand accents to Tailwind classes:
- `ACCENT_SOFT` — Soft pastel background + foreground (for chips, tiles)
- `ACCENT_DOT` — Solid foreground color (for dots, indicators)

**Usage**:
```tsx
className={ACCENT_SOFT[category.accent]} // "bg-blush text-blush-foreground"
```

### WhatsApp (`src/lib/whatsapp.ts`)

URL builders for WhatsApp deep links:
- `generalEnquiryUrl()` — Generic "Hi, I'm interested in your kidswear" message
- `productEnquiryUrl(product: Product)` — Product-specific enquiry with name

### Utils (`src/lib/utils.ts`)

- `cn(...classes)` — Merges class names with tailwind-merge (handles conflicts)

---

## Styling System

### Global Styles (`src/app/globals.css`)

**Custom utilities** (use these instead of creating new ones):
- `.neo` — Standard neomorphic shadow (8px, pastel tones)
- `.neo-sm` — Lighter neomorphic shadow (4px, for pills/small elements)
- `.neo-inset` — Inset/pressed neomorphic shadow
- `.brand-wordmark` — Pastel gradient for brand name (blush → lilac → sky)
- `.eyebrow` — Small uppercase label (0.7rem, tracking 0.18em, muted)
- `.doodle-float` — Gentle floating animation (6s infinite, disabled in reduced-motion)
- `.no-scrollbar` — Hides scrollbar (for horizontal carousels)

**Theme tokens** (defined in `:root` via `@theme inline`):
- Base colors: `--background`, `--foreground`, `--card`, `--border`, etc.
- Brand pastels: `--blush`, `--mint`, `--sky`, `--peach`, `--lilac` (each with `-foreground` variant)
- Fonts: `--font-heading` (Fraunces), `--font-sans` (Geist Sans), `--font-mono` (Geist Mono)
- Radii: `--radius`, `--radius-sm`, `--radius-lg`, `--radius-xl`, `--radius-2xl`, `--radius-3xl`

**Responsive neomorphism**:
- Apply `neo` to: category tiles, slider frames, product cards, CTA panels
- Don't overuse — not every box needs neomorphic shadow

**Animation safety**:
- All CSS animations disabled via `@media (prefers-reduced-motion: reduce)`
- Motion (framer-motion) respects reduced-motion automatically

---

## Current Known Issues & Likely Causes

| Issue | Likely File(s) | Suspected Cause |
|-------|----------------|-----------------|
| **Splash video not playing** | `src/components/common/SplashScreen.tsx` | Video element may need `autoPlay` prop, or path incorrect, or browser autoplay policy blocking |
| **Hero background image not visible** | `src/components/sections/Hero.tsx` | Next Image `fill` may need parent positioning, or gradient overlay too opaque, or image path incorrect |
| **New arrivals auto-transition not working** | `src/components/sections/HeroNewArrivals.tsx` | `setInterval` in `useEffect` may have dependency issues, or `pausedRef` logic blocking transitions |
| **Brand title too small** | `src/components/sections/Hero.tsx` | `.brand-wordmark` text size classes too conservative (currently `text-[2.4rem] sm:text-[3.4rem]`) |
| **UI needs polish** | All section components | Need more `neo` shadows, smoother `hover:` transitions, additional doodle accents |

---

## Where to Modify Common Features

### To change hero content:
- **Copy/tagline**: `src/components/sections/Hero.tsx` (lines ~60–80)
- **Background image**: `src/components/sections/Hero.tsx` (line ~25, Image src)
- **New arrivals slider**: `src/components/sections/HeroNewArrivals.tsx`

### To update splash screen:
- **Video/logic**: `src/components/common/SplashScreen.tsx`
- **Timeout duration**: Line 8 (`SAFETY_TIMEOUT_MS`)
- **Session key**: Line 7 (`SESSION_KEY`)

### To add/edit products:
- **Product data**: `src/data/products.ts` (PRODUCTS array)
- **Product card design**: `src/components/common/ProductCard.tsx`
- **Catalogue filters**: `src/components/sections/ProductCatalogue.tsx`

### To modify categories:
- **Category list**: `src/data/categories.ts` (CATEGORIES array)
- **Category nav UI**: `src/components/sections/CategoryNav.tsx`

### To update contact info:
- **Phone/WhatsApp/address**: `src/data/site.ts` (SITE object)
- **WhatsApp message templates**: `src/lib/whatsapp.ts`

### To change animations:
- **Animation variants**: `src/lib/animations.ts`
- **Global animation rules**: `src/app/globals.css` (bottom section)

### To modify accent colors:
- **Color definitions**: `src/app/globals.css` (`:root` section, lines ~50–60)
- **Color mappings**: `src/lib/accents.ts`

### To add doodles/clipart:
- **SVG definitions**: `src/components/common/Doodles.tsx`
- **Usage**: Import into section component, add with low opacity className

### To update header/footer:
- **Header**: `src/components/layout/Header.tsx` (logo, nav, mobile menu)
- **Footer**: `src/components/layout/Footer.tsx` (links, categories, contact)

---

## Build & Test Commands

```bash
# Development server
npm run dev               # Runs on http://localhost:3000

# Production build
npm run build             # MUST pass before deployment

# Production preview
npm run start             # Runs production build locally

# Linting
npm run lint              # ESLint check
```

---

## Future Enhancements (Not Yet Implemented)

- **Sanity CMS integration**: Product/category management (dependencies already installed)
- **Real product images**: Replace Unsplash URLs with client photos
- **Store gallery photos**: Add real shop interior/exterior images
- **Advanced filters**: Price range, brand, occasion (when product data expands)
- **Search**: Full-text product search (when inventory grows)
- **Analytics**: Google Analytics / Plausible (privacy-friendly)

---

**Last updated**: Session start  
**Next action**: Fix splash video, hero background, new arrivals auto-slider, brand title, UI polish
