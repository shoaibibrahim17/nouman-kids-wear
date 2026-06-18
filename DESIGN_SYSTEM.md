# Nouman Kids Wear — Design System

Visual design guidelines for maintaining a consistent, premium kidswear boutique aesthetic.

---

## Visual Direction

**Goal**: Create a refined, product-first digital catalogue that feels like a curated boutique — not a generic AI template.

**Inspiration**: Modern kidswear boutiques, editorial magazine layouts, soft pastel nurseries, thoughtful baby product branding.

**NOT**: Generic landing pages, heavy e-commerce templates, overwhelming cartoon graphics, excessive glassmorphism, or giant hero sections with massive gradients.

---

## Core Principles

1. **Product-first**: Products should be the hero, not decorative elements
2. **Subtle refinement**: Polish through restraint, not embellishment
3. **Gentle motion**: Animations enhance flow, never distract
4. **Accessibility**: Readable text, sufficient contrast, keyboard navigation
5. **Mobile-optimized**: Most customers browse on phones — mobile is the priority

---

## Color Palette

### Base Colors

```css
--background: oklch(0.991 0.004 95)   /* Warm off-white */
--foreground: oklch(0.22 0.012 60)    /* Dark ink */
--card: oklch(1 0 0)                  /* Pure white */
--muted: oklch(0.965 0.008 80)        /* Light neutral */
--border: oklch(0.9 0.008 75)         /* Soft border */
--cream: oklch(0.97 0.012 90)         /* Cream accent */
--ink: oklch(0.22 0.012 60)           /* Dark text */
```

### Brand Pastels (Accent Use Only)

These are NOT primary colors — use sparingly for category chips, badges, and decorative accents.

```css
--blush: oklch(0.93 0.035 350)        /* Soft pink */
--blush-foreground: oklch(0.4 0.08 350)

--mint: oklch(0.93 0.04 160)          /* Soft green */
--mint-foreground: oklch(0.4 0.07 165)

--sky: oklch(0.93 0.04 230)           /* Soft blue */
--sky-foreground: oklch(0.42 0.08 235)

--peach: oklch(0.94 0.04 55)          /* Soft orange */
--peach-foreground: oklch(0.45 0.09 50)

--lilac: oklch(0.92 0.04 300)         /* Soft purple */
--lilac-foreground: oklch(0.42 0.08 300)
```

**Usage**: Apply via `ACCENT_SOFT` mapping:
```tsx
import { ACCENT_SOFT } from "@/lib/accents";
className={ACCENT_SOFT[category.accent]} // "bg-blush text-blush-foreground"
```

**Color assignment** (categories):
- **Boys Wear** → sky
- **Girls Wear** → blush
- **Newborn** → mint
- **Party Wear** → lilac
- **Ethnic Wear** → peach

---

## Typography

### Font Families

```css
--font-heading: Fraunces (serif, editorial, slightly condensed)
--font-sans: Geist Sans (clean, modern, readable)
--font-mono: Geist Mono (technical elements, rare use)
```

### Type Scale & Usage

| Element | Class | Font | Size | Weight |
|---------|-------|------|------|--------|
| Hero brand name | `.brand-wordmark` | Fraunces | 2.4rem (sm: 3.4rem) | 600 semibold |
| Section headings (h2) | `font-heading` | Fraunces | 1.75rem (sm: 2rem) | 600 semibold |
| Subsection headings (h3) | `font-heading` | Fraunces | 1.25rem | 500 medium |
| Body text | `text-base` | Geist Sans | 1rem | 400 regular |
| Small labels | `.eyebrow` | Geist Sans | 0.7rem | 500 medium, uppercase |
| Product card titles | `text-sm` | Geist Sans | 0.875rem | 500 medium |
| Descriptions | `text-sm` | Geist Sans | 0.875rem | 400 regular |

### Custom Utilities

**.brand-wordmark** — Pastel gradient for brand name
```css
background-image: linear-gradient(105deg, 
  oklch(0.55 0.13 350) 0%,    /* Blush */
  oklch(0.52 0.11 300) 42%,   /* Lilac */
  oklch(0.52 0.1 235) 100%    /* Sky */
);
-webkit-background-clip: text;
color: transparent;
```

**.eyebrow** — Small uppercase label
```css
@apply text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground;
```

**Usage**:
- Use `.brand-wordmark` only for "Nouman Kids Wear" brand name
- Use `.eyebrow` for section labels like "NEW ARRIVALS", "FEATURED", "SHOP BY CATEGORY"


---

## Layout & Spacing

### Container Pattern

Standard section structure:
```tsx
<section className="w-full">
  <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
    {/* Section content */}
  </div>
</section>
```

**Breakpoints**:
- Mobile: < 640px
- Tablet: 640px – 1024px
- Desktop: > 1024px

**Max width**: `6xl` (72rem / 1152px) for all content sections

**Horizontal padding**:
- Mobile: `px-4` (1rem)
- Tablet+: `px-6` (1.5rem)

**Vertical spacing**:
- Section padding: `py-16` mobile, `py-20` desktop
- Element gap (flex/grid): `gap-6` mobile, `gap-8` desktop

### Grid Systems

**Product grid** (3-column responsive):
```tsx
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
```

**Category nav** (horizontal scroll mobile → grid desktop):
```tsx
<div className="flex gap-3 overflow-x-auto no-scrollbar sm:grid sm:grid-cols-3 lg:grid-cols-4">
```

**Featured collections** (stacked mobile → 2-column desktop):
```tsx
<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
```

---

## Card Styles

### Product Card

**Structure**:
- Image container: `aspect-[4/5]` (portrait)
- Neomorphic shadow: `neo`
- Border radius: `rounded-2xl` (1rem)
- Hover effect: `-translate-y-1` + enhanced shadow

**Example**:
```tsx
<div className="neo group overflow-hidden rounded-2xl border border-border/60 
                bg-card transition-all hover:-translate-y-1 hover:shadow-xl">
  <div className="relative aspect-[4/5]">
    <Image src={product.image} alt={product.name} fill />
  </div>
  <div className="p-4">
    {/* Card content */}
  </div>
</div>
```

### Category Tile

**Structure**:
- Neomorphic shadow: `neo`
- Accent background: `ACCENT_SOFT[accent]`
- Border radius: `rounded-xl`
- Compact padding: `p-4`

### Collection Card

**Structure**:
- Large hero image: `aspect-[16/10]`
- Gradient overlay for text readability
- Border radius: `rounded-3xl`
- Neomorphic shadow: `neo`

---

## Neomorphism Guidelines

### When to Use

✅ **DO apply `neo` shadow to**:
- Category tiles/chips (large ones, not pills)
- Product cards
- Slider frames (like HeroNewArrivals container)
- CTA panels/sections
- Large feature cards

❌ **DON'T apply to**:
- Buttons (use border + subtle shadow instead)
- Header/Footer
- Every single container
- Small pills/badges
- Text elements

### Shadow Classes

**.neo** — Standard pillow shadow
```css
box-shadow: 
  8px 8px 24px rgba(214, 170, 190, 0.22),
  -8px -8px 24px rgba(255, 255, 255, 0.9);
```
Use for: Product cards, category tiles, slider frames

**.neo-sm** — Light shadow for small elements
```css
box-shadow: 
  4px 4px 12px rgba(214, 170, 190, 0.2),
  -4px -4px 12px rgba(255, 255, 255, 0.85);
```
Use for: Pills, small chips, floating labels

**.neo-inset** — Inset/pressed effect
```css
box-shadow: 
  inset 4px 4px 10px rgba(214, 170, 190, 0.22),
  inset -inset -4px -4px 10px rgba(255, 255, 255, 0.85);
```
Use for: Active filter pills, recessed containers

### Combining with Other Styles

Good:
```tsx
<div className="neo rounded-2xl border border-border/60 bg-card/85 backdrop-blur-sm">
```

Avoid:
```tsx
<div className="neo shadow-xl"> {/* Conflicting shadows */}
```

---

## Animation System

### Motion Variants

Import from `src/lib/animations.ts`:

**fadeInUp** — Most common (content reveal)
```tsx
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="show"
  viewport={viewportOnce}
>
```

**staggerContainer** — Parent that staggers children
```tsx
<motion.div
  variants={staggerContainer}
  initial="hidden"
  animate="show"
>
  <motion.div variants={fadeInUp}>Child 1</motion.div>
  <motion.div variants={fadeInUp}>Child 2</motion.div>
</motion.div>
```

**scaleIn** — For cards/modals
```tsx
<motion.div variants={scaleIn} initial="hidden" animate="show">
```

### Animation Rules

1. **Keep durations short**: 0.5s typical, 0.3–0.7s range
2. **Use gentle easing**: `[0.22, 1, 0.36, 1]` (smooth deceleration)
3. **Respect reduced motion**: All animations disabled via CSS `@media (prefers-reduced-motion: reduce)`
4. **Animate once on scroll**: Use `viewport={viewportOnce}` to prevent re-triggering
5. **Don't animate everything**: Reserve motion for important reveals and interactions

### CSS Animations

**.doodle-float** — Gentle floating motion for decorative SVGs
```css
@keyframes nkw-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
animation: nkw-float 6s ease-in-out infinite;
```

**Usage**: Add `doodle-float` class to doodle SVGs
- Automatically disabled in `prefers-reduced-motion`
- Stagger with `style={{ animationDelay: "1.2s" }}`

---

## Doodles & Clipart Usage

### Available Doodles

From `src/components/common/Doodles.tsx`:
- `StarDoodle`, `HeartDoodle`, `CloudDoodle`, `HangerDoodle`
- `SockDoodle`, `OnesieDoodle`, `TeddyDoodle`, `ButtonDoodle`

### Usage Guidelines

✅ **DO**:
- Use at **low opacity** (20–30%): `text-sky-foreground/25`
- Position **absolutely** out of flow: `absolute top-[14%] right-[8%]`
- Apply `doodle-float` animation
- Keep **small**: `size-9` to `size-16`
- Use sparingly: 2–4 per section maximum
- Inherit color via `currentColor`

❌ **DON'T**:
- Use at full opacity
- Make them large/dominant
- Place in flow (inline with text)
- Overload sections with many doodles
- Use cartoon/illustration style images

**Example**:
```tsx
<StarDoodle 
  className="doodle-float absolute right-[8%] top-[14%] size-10 text-peach-foreground/30"
  style={{ animationDelay: "1.2s" }}
/>
```

### Placement Strategy

- **Hero**: 3–4 doodles (corners, not center)
- **Category section**: 1–2 doodles (wide screens only)
- **Product sections**: None (doodles distract from products)
- **Footer**: Optional 1–2 doodles (very subtle)

---

## Mobile Responsiveness

### Critical Mobile Patterns

1. **Touch targets**: Minimum 44px height for buttons/links
2. **Horizontal scroll**: Use `overflow-x-auto no-scrollbar` for category chips
3. **Sticky header**: Height `h-16` mobile, `h-[4.5rem]` desktop
4. **Typography**: Scale down headings (e.g., `text-2xl sm:text-3xl`)
5. **Grid collapse**: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
6. **Safe areas**: Use `px-4` to avoid edge cutoff

### Mobile-First Approach

Always write mobile styles first, then add `sm:` and `lg:` breakpoints:

```tsx
// Good (mobile-first)
<div className="flex flex-col gap-4 sm:flex-row sm:gap-6">

// Bad (desktop-first, requires overrides)
<div className="flex flex-row gap-6 max-sm:flex-col max-sm:gap-4">
```

---

## Accessibility Guidelines

### Semantic HTML

- Use `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Heading hierarchy: `<h1>` once, then `<h2>`, `<h3>` in order
- Buttons for actions (`<button>`), links for navigation (`<a>`)

### ARIA & Labels

- All images: descriptive `alt` text (never empty alt unless decorative)
- Icon buttons: `aria-label` (e.g., "Open menu", "Close dialog")
- Decorative SVGs: `aria-hidden="true"` and `focusable="false"`
- Form inputs: associated `<label>` or `aria-label`

### Keyboard Navigation

- All interactive elements focusable via Tab
- Focus styles visible (`outline-ring/50`)
- Skip to content link (optional, for longer pages)
- Modal/Sheet traps focus when open (shadcn handles this)

### Contrast

- Minimum 4.5:1 for body text (AAA standard)
- Minimum 3:1 for large text (18px+)
- Check accent foreground combinations:
  - ✅ `text-blush-foreground` on `bg-blush` (readable)
  - ❌ `text-white` on `bg-peach` (insufficient contrast)

---

## Component-Specific Guidelines

### Header
- **Height**: `h-16` mobile, `h-[4.5rem]` desktop
- **Background**: Transparent at top, solid on scroll
- **Logo**: 40px mobile, 48px desktop
- **Mobile menu**: Right-side Sheet, 78% width

### Hero
- **Min height**: `min-h-[88svh]` (almost full viewport)
- **Background**: Image with gradient overlay for text readability
- **Brand lockup**: Logo + wordmark, prominent but not overwhelming
- **CTAs**: Primary (WhatsApp) + Secondary (anchor link)

### Product Cards
- **Aspect ratio**: `4/5` (portrait, standard for clothing)
- **Hover**: Lift (`-translate-y-1`) + enhanced shadow
- **Badge**: Floating top-left, small, pastel accent
- **Price**: Always "Price on request"

### Category Nav
- **Mobile**: Horizontal scroll with snap points
- **Desktop**: Grid layout (3–4 columns)
- **Tiles**: Neomorphic shadow, accent background, icon or emoji

### Footer
- **Background**: `bg-cream/60` (subtle contrast)
- **Grid**: 3 columns desktop, stacked mobile
- **Social icons**: Round bordered buttons, hover effect

---

## Anti-Patterns (DO NOT DO)

❌ **Giant gradient overlays** everywhere  
✅ Use gradients sparingly (hero overlay, card overlays for text readability)

❌ **Huge headings** (`text-6xl`, `text-7xl`)  
✅ Keep headings proportional (`text-2xl` to `text-4xl` range)

❌ **Glassmorphism on every card**  
✅ Use `backdrop-blur` only where needed (floating elements, sticky header)

❌ **Overloading with doodles**  
✅ 2–4 doodles per section, low opacity, small size

❌ **Heavy page load animations**  
✅ Gentle scroll-triggered reveals, fast page-ready state

❌ **Inconsistent spacing**  
✅ Use design tokens: `gap-4`, `gap-6`, `gap-8` (not arbitrary values)

❌ **Mixing design systems**  
✅ Stick to defined utilities: `neo`, `brand-wordmark`, `eyebrow`, accent colors

---

## Design Checklist

Before marking UI work complete:

- [ ] Mobile layout tested (375px, 390px, 414px widths)
- [ ] Neomorphic shadows applied appropriately (not overused)
- [ ] Brand pastels used as accents only (not primary backgrounds)
- [ ] Typography hierarchy clear (heading → subheading → body)
- [ ] Animations smooth and gentle (0.5s duration, gentle easing)
- [ ] Doodles subtle and sparse (low opacity, small size)
- [ ] Hover states defined for interactive elements
- [ ] Focus states visible for keyboard navigation
- [ ] Contrast ratios meet WCAG AA minimum (4.5:1 for text)
- [ ] Images use `next/image` with proper `sizes` attribute
- [ ] No giant gradients or oversized headings
- [ ] Product images prioritized over decorative elements

---

**Last updated**: Session start  
**Related**: See `AGENTS.md` for coding rules, `PROJECT_MAP.md` for file locations
