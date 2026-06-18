# Memory Files Created — Summary

This document summarizes the project memory files created for **Nouman Kids Wear** to help future AI sessions understand the codebase without re-reading the entire project.

---

## Files Created/Updated

### 1. **AGENTS.md** (Updated)
**Purpose**: Primary agent instruction file with project context, business rules, design rules, coding conventions, and quick references.

**Contents**:
- Project purpose and business model (browse-and-enquire catalogue, not e-commerce)
- Critical business rules (no cart/checkout/payment, WhatsApp enquiry only, price on request)
- Design rules (boutique pastel aesthetic, anti-AI-template guidelines)
- Coding rules (Next.js 16 App Router, TypeScript, Tailwind v4, Motion, shadcn/ui)
- Asset paths (logo, splash video, hero background, product images)
- What NOT to add (cart, login, checkout, etc.)
- Preferred workflow for AI agents
- Testing/build checklist
- Current known issues
- Quick reference for common tasks (add product, update contact info, add category)

**Use when**: Starting any coding task on this project — read this file first for context.

---

### 2. **PROJECT_MAP.md** (New)
**Purpose**: Comprehensive architecture map showing folder structure, component responsibilities, data files, utilities, and where to find/modify specific features.

**Contents**:
- Complete folder structure with annotations
- Key components by function (Brand & Identity, Page Structure, Layout, Sections, Common/Reusable, shadcn/ui)
- Data files breakdown (products, categories, site config)
- Utilities & helpers (animations, accents, WhatsApp URL builders)
- Styling system (global CSS utilities: neo, brand-wordmark, eyebrow, doodle-float)
- Current known issues with likely file locations and suspected causes
- Where to modify common features (hero, splash, products, categories, contact, animations, accent colors, header/footer)
- Build & test commands
- Future enhancements roadmap

**Use when**: Navigating the codebase, locating specific components, understanding data flow, or identifying which files control which features.

---

### 3. **DESIGN_SYSTEM.md** (New)
**Purpose**: Visual design guidelines for maintaining consistent, premium boutique aesthetic.

**Contents**:
- Visual direction and core principles (product-first, subtle refinement, gentle motion)
- Color palette (base colors, brand pastels with usage rules)
- Typography (font families, type scale, custom utilities: brand-wordmark, eyebrow)
- Layout & spacing (container patterns, grid systems, breakpoints)
- Card styles (product cards, category tiles, collection cards)
- Neomorphism guidelines (when to use neo shadows, shadow classes, combinations)
- Animation system (Motion variants, animation rules, CSS animations)
- Doodles & clipart usage (available doodles, usage guidelines, placement strategy)
- Mobile responsiveness (critical patterns, mobile-first approach)
- Accessibility guidelines (semantic HTML, ARIA, keyboard nav, contrast)
- Component-specific guidelines (Header, Hero, Product Cards, Category Nav, Footer)
- Anti-patterns (what NOT to do)
- Design checklist

**Use when**: Making UI changes, adding new sections, styling components, or ensuring visual consistency.

---

### 4. **TODO.md** (New)
**Purpose**: Prioritized task list organized into phases (pre-launch critical fixes vs. post-launch content updates).

**Contents**:

**Phase 1: Critical Fixes & Polish (Pre-Launch)**
1. Fix splash video (not playing)
2. Fix hero background image (not visible)
3. Fix new arrivals auto-transition (carousel not advancing)
4. Improve brand title/logo lockup (too small)
5. UI polish & refinement (more neo shadows, smooth transitions, tasteful doodles)
6. Verify mobile layout (375–414px widths)
7. Run production build (verify no errors)

**Phase 2: Content & Deployment (Post-Development)**
8. Replace stock product images (Unsplash → real Nouman photos)
9. Update contact information (placeholder → real phone/WhatsApp/address)
10. Add real store gallery photos (interior/exterior of shop)
11. Populate product catalogue with real inventory
12. Deploy to Vercel/Netlify/Cloudflare (free tier, custom domain)
13. Future: Add Sanity CMS (optional, for client content management)

**Quick Wins** (optional enhancements like scroll-to-top, FAQ, testimonials, analytics)

**Testing Checklist** (comprehensive pre-launch testing steps)

**Post-Launch Monitoring** (deployment logs, search console, page speed, user feedback)

**Use when**: Planning work, prioritizing tasks, tracking progress, or preparing for launch.

---

## How These Files Work Together

```
AGENTS.md
  ↓ (Primary context — read first)
  Provides: Business rules, design principles, coding conventions
  
PROJECT_MAP.md
  ↓ (Navigation guide)
  Provides: File locations, component responsibilities, data structure
  
DESIGN_SYSTEM.md
  ↓ (Visual consistency)
  Provides: Color palette, typography, layout patterns, component styling
  
TODO.md
  ↓ (Action plan)
  Provides: Prioritized tasks, testing checklist, launch preparation
```

**Recommended workflow for AI agents**:
1. Read `AGENTS.md` for high-level context and constraints
2. Consult `PROJECT_MAP.md` to locate relevant files
3. Follow `DESIGN_SYSTEM.md` when making UI changes
4. Check `TODO.md` for prioritized tasks and known issues

---

## Current Project Status

### ✅ Working
- Next.js 16 App Router with TypeScript
- Tailwind CSS v4 with custom theme
- Motion (framer-motion) animations
- shadcn/ui components
- Product data structure (placeholder content)
- Category & collection system
- WhatsApp enquiry integration
- Responsive layout (mobile/tablet/desktop)
- Sticky header with mobile menu
- Footer with social links
- Production build passes

### ⚠️ Known Issues (To Fix)
1. **Splash video not playing** (`SplashScreen.tsx`)
2. **Hero background image not visible** (`Hero.tsx`)
3. **New arrivals auto-transition not working** (`HeroNewArrivals.tsx`)
4. **Brand title too small** (needs size increase in `Hero.tsx`)
5. **UI needs polish** (more neo shadows, smooth transitions, tasteful doodles)

### 📸 Content Placeholders (To Replace)
- All product images (currently Unsplash URLs)
- Contact phone/WhatsApp numbers (placeholders in `src/data/site.ts`)
- Store gallery photos (empty section in `StoreGallery.tsx`)

---

## Next Steps

**Immediate (for current session or next session)**:
Run the tasks from TODO.md Phase 1:
```bash
# Fix splash video, hero background, auto-slider
# See TODO.md for detailed action items

# After fixes:
npm run build    # Verify build passes
npm run dev      # Test locally
```

**Before launch**:
- Complete all Phase 1 tasks (critical fixes)
- Replace product images with real Nouman photos
- Update contact info with real phone/WhatsApp/address
- Add store gallery photos
- Test on multiple devices/browsers

**Post-launch**:
- Complete Phase 2 tasks (content updates, deployment)
- Monitor performance and user feedback
- Plan content updates (new arrivals, seasonal collections)

---

## Key Files Reference

| Task | Primary File(s) |
|------|----------------|
| Fix splash video | `src/components/common/SplashScreen.tsx` |
| Fix hero background | `src/components/sections/Hero.tsx` |
| Fix auto-slider | `src/components/sections/HeroNewArrivals.tsx` |
| Update products | `src/data/products.ts` |
| Update contact info | `src/data/site.ts` |
| Modify animations | `src/lib/animations.ts` |
| Change colors | `src/app/globals.css` (`:root` section) |
| Adjust layout | `src/components/sections/*.tsx` |
| Update header/footer | `src/components/layout/Header.tsx`, `Footer.tsx` |

---

## Build Verification

**Last build status**: ✅ Passed (no errors)
```bash
npm run build
# ✓ Compiled successfully in 9.4s
# ✓ Finished TypeScript in 10.6s
# ✓ Collecting page data in 1368ms
# ✓ Generating static pages (4/4) in 1850ms
# ✓ Finalizing page optimization in 25ms
```

**Production ready**: After fixing Phase 1 issues + replacing placeholder content

---

**Created**: Session start  
**Purpose**: Reduce context load for future AI sessions by providing structured memory  
**Maintenance**: Update these files when making significant architectural or design changes
