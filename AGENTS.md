<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Nouman Kids Wear — Agent Memory File

## Project Purpose

**Nouman Kids Wear** is a digital catalogue website for a physical kidswear shop in Adilabad, Telangana. It is NOT an e-commerce site — it's a browse-and-enquire platform. Visitors view products, then enquire via WhatsApp. No cart, checkout, payment, login, or user accounts.

**Business model**: Client owns domain only; hosting must remain free (Vercel/Netlify/Cloudflare).

## Business Rules (CRITICAL)

1. **No e-commerce features**: Never add cart, checkout, payment gateways, or login systems
2. **WhatsApp enquiry only**: All product enquiries go through WhatsApp with pre-filled messages
3. **Price display**: Always show "Price on request" — never display specific prices
4. **Contact info**: Phone/WhatsApp numbers in `src/data/site.ts` are placeholders — confirm real numbers before going live
5. **Product images**: Current images are Unsplash stock photos — must be replaced with real Nouman inventory photos from client
6. **Local SEO focus**: Business serves Adilabad, Telangana — optimize for local search

## Design Rules (ANTI-AI-TEMPLATE)

### DO:
- **Refined pastel boutique aesthetic** (blush, mint, sky, peach, lilac accents)
- **Product-first layout** — compact, scannable cards
- **Subtle neomorphism** (soft pillow shadows via `neo`, `neo-sm`, `neo-inset` utilities)
- **Tasteful kidswear doodles** (star, heart, cloud, hanger — low opacity, decorative only)
- **Smooth, gentle motion** (fadeInUp, scaleIn, staggerContainer — respects reduced motion)
- **Editorial typography** (Fraunces serif headings, Geist Sans body)
- **Mobile-first responsive design**

### DON'T:
- **Huge generic gradients** everywhere
- **Oversized headings** that dominate the page
- **Repeated big cards** with massive padding
- **Childish cartoon overload** (doodles should be subtle accents, not primary visuals)
- **Excessive glassmorphism** (use backdrop blur sparingly)
- **Heavy/jarring animations** (keep motion gentle and purposeful)

### Color System:
- Base: `--background` (warm off-white), `--foreground` (dark ink)
- Brand pastels (accent use only): blush, mint, sky, peach, lilac
- Each accent has `-foreground` variant for readable text
- Use `ACCENT_SOFT` mapping from `src/lib/accents.ts`

### Neomorphism Rules:
- Apply to: category tiles, slider frames, product cards, CTA panels
- Don't apply to: every box, buttons, header, footer
- Classes: `neo` (standard), `neo-sm` (pills/small elements), `neo-inset` (pressed look)

### Animation Rules:
- Use variants from `src/lib/animations.ts`: `fadeInUp`, `fadeIn`, `scaleIn`, `staggerContainer`
- Always include `viewportOnce` for scroll-triggered animations
- CSS animations (like `doodle-float`) are automatically disabled by `prefers-reduced-motion`
- Keep durations short (0.5s typical), ease curves gentle

## Coding Rules

### Tech Stack:
- **Next.js 16.2.9** (App Router) — check `node_modules/next/dist/docs/` for breaking changes
- **React 19.2.4** — use modern hooks, avoid legacy patterns
- **TypeScript** — strict types, leverage `src/types/product.ts`
- **Tailwind CSS v4** — use `@theme inline` syntax in `globals.css`
- **Motion (framer-motion 12.40.0)** — not `framer-motion`, import from `motion/react`
- **shadcn/ui** — pre-configured components in `src/components/ui/`
- **lucide-react** — for icons
- **embla-carousel-react** — for image carousels
- **next/image** — always use for images (automatic optimization)

### File Structure:
```
src/
├── app/
│   ├── layout.tsx         # Root layout, fonts, metadata
│   ├── page.tsx           # Homepage (all sections)
│   └── globals.css        # Tailwind, theme tokens, utilities
├── components/
│   ├── common/            # Reusable UI (ProductCard, Doodles, SplashScreen, WhatsAppButton)
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections (Hero, NewArrivals, ProductCatalogue, etc.)
│   └── ui/                # shadcn components
├── data/
│   ├── site.ts            # Business config (SITE, NAV_LINKS, categories)
│   ├── products.ts        # Product inventory (PRODUCTS, NEW_ARRIVALS, FEATURED_PRODUCTS)
│   └── categories.ts      # Category & collection definitions
├── lib/
│   ├── animations.ts      # Motion variants
│   ├── accents.ts         # Color accent mappings
│   ├── utils.ts           # cn() utility
│   └── whatsapp.ts        # WhatsApp URL builders
└── types/
    └── product.ts         # TypeScript types
```

### Key Conventions:
1. **Server Components by default** — only add `"use client"` when using hooks/interactivity
2. **Import Motion correctly**: `import { motion } from "motion/react"`
3. **Image paths**: `/brand/`, `/hero/`, `/products/` (public folder)
4. **WhatsApp links**: Use `generalEnquiryUrl()` and `productEnquiryUrl(product)` from `src/lib/whatsapp.ts`
5. **Accent colors**: Apply via `ACCENT_SOFT[accent]` helper, not hardcoded classes
6. **Type safety**: Import types from `src/types/product.ts` (Product, Category, Collection, etc.)

### Component Patterns:
- **Section layout**: Full-width container → `max-w-6xl` inner → responsive grid
- **Headings**: Use `font-heading` (Fraunces serif) with `brand-wordmark` gradient for brand name
- **Cards**: Include `neo` shadow, rounded corners (2xl/3xl), hover lift effect
- **Buttons**: Primary = WhatsAppButton (green accent), Secondary = border + card bg
- **Empty states**: Include doodle accent + "Coming soon" text

## Asset Paths (CURRENT)

### Brand:
- Logo: `/brand/nouman-logo.png` (used in Header, Hero, Footer)
- Splash video: `/brand/nouman-logo-splash.mp4` (4:5 aspect ratio, ~5s)

### Hero:
- Background: `/hero/nouman-hero-bg.png` (ISSUE: currently not visible)

### Products:
- All product images in `src/data/products.ts` are Unsplash placeholder URLs
- **Action required**: Replace with real client photos before launch

## What NOT to Add

❌ Shopping cart  
❌ Checkout flow  
❌ Payment integration (Stripe, Razorpay, etc.)  
❌ User authentication/login  
❌ User accounts/profiles  
❌ Order management  
❌ Admin dashboard (use Sanity CMS later instead)  
❌ Email newsletter signup (unless explicitly requested)  
❌ Cookie consent banners (no tracking/analytics yet)  
❌ Heavy third-party scripts that slow load time

## Preferred Workflow (AI Agent)

1. **Before editing code**: Read relevant files first — never guess implementation details
2. **Check design system**: Use existing utilities (`neo`, `brand-wordmark`, `eyebrow`, accent colors) before creating new ones
3. **Match existing patterns**: Follow established component structure, naming, and styling
4. **Type safety**: Import and use types from `src/types/product.ts`
5. **Test responsiveness**: Check mobile (375px), tablet (768px), desktop (1280px) breakpoints
6. **Respect performance**: Use `next/image` with proper `sizes`, lazy-load off-screen content
7. **Verify builds**: Run `npm run build` after significant changes to catch type/build errors

### When adding new sections:
- Export from new file in `src/components/sections/`
- Import and render in `src/app/page.tsx`
- Use `<Section>` wrapper component for consistent spacing
- Add to `NAV_LINKS` if it needs navigation

### When modifying data:
- Products: Edit `src/data/products.ts`
- Site config: Edit `src/data/site.ts`
- Categories: Edit `src/data/categories.ts`

## Testing/Build Checklist

Before marking work complete:

1. ✅ Run `npm run build` — must complete without errors
2. ✅ Check mobile layout (DevTools responsive mode)
3. ✅ Verify WhatsApp links open correctly (use `?text=...` format)
4. ✅ Ensure images load (correct paths, `next/image` usage)
5. ✅ Test animations (smooth, not janky; disabled in reduced-motion)
6. ✅ Validate accessibility (semantic HTML, ARIA labels, keyboard nav)
7. ✅ Check console for warnings/errors
8. ✅ Verify brand colors match design (no rogue gradients/colors)

## Current Known Issues (See PROJECT_MAP.md for file locations)

1. **Splash video not working** — `SplashScreen.tsx` video element not playing
2. **Hero background image not visible** — `Hero.tsx` Image component not rendering
3. **New arrivals auto-transition not working** — `HeroNewArrivals.tsx` carousel interval not advancing
4. **Brand title needs polish** — Increase size, improve lockup with logo
5. **Overall UI needs refinement** — Add more neomorphic styling, smooth transitions, tasteful cliparts

---

## Quick Reference: Common Tasks

**Add a new product:**
```typescript
// src/data/products.ts
{
  id: "unique-slug",
  name: "Product Name",
  category: "boys-wear", // Must match CategorySlug type
  gender: "boys",
  ageGroup: "kids",
  sizes: ["3-4Y", "5-6Y"],
  image: "/products/filename.jpg", // Replace Unsplash URL
  price: "Price on request",
  badge: "New", // Optional
  isNew: true, // Optional
  featured: true, // Optional
  collection: "casual-wear", // Optional
  description: "Brief description"
}
```

**Update site contact info:**
```typescript
// src/data/site.ts
export const SITE = {
  whatsappNumber: "918498986699", // Digits only, with country code
  phoneDisplay: "+91 84989 86699",
  phoneHref: "+918498986699",
  // ...
}
```

**Add a new category:**
```typescript
// src/data/categories.ts
{
  slug: "winter-wear", // Must add to CategorySlug type first
  label: "Winter Wear",
  description: "Warm essentials",
  accent: "mint" // blush | mint | sky | peach | lilac
}
```

---

**Last updated**: Session start  
**Next action**: Fix known issues (splash video, hero bg, auto-slider, brand title, UI polish)
