# Suggested Next Prompt

Now that project memory files are in place, you can use this prompt to begin fixing the known issues:

---

## Option 1: Fix All Critical Issues (Recommended)

```
Fix the following critical issues in order:

1. Splash video not playing in SplashScreen.tsx
2. Hero background image not visible in Hero.tsx  
3. New arrivals auto-transition not working in HeroNewArrivals.tsx
4. Brand title too small — increase size to 3rem/4.5rem/5rem responsive
5. Add more neomorphic shadows and smooth transitions throughout UI

After each fix, verify it works. At the end, run build to confirm no errors.

Refer to TODO.md Phase 1 for detailed action items.
```

---

## Option 2: Fix One Issue at a Time

### Fix Splash Video
```
Fix the splash video in src/components/common/SplashScreen.tsx. 
The video at /brand/nouman-logo-splash.mp4 is not playing.

Likely causes:
- Browser autoplay policy blocking
- Missing autoPlay/muted/playsInline props
- Video path incorrect

After fixing, test and verify the video plays on mount.
```

### Fix Hero Background
```
Fix the hero background image in src/components/sections/Hero.tsx.
The image at /hero/nouman-hero-bg.png is not visible.

Likely causes:
- Parent container missing relative positioning
- Next Image fill prop needs parent sizing
- Gradient overlay too opaque
- Missing priority prop

After fixing, verify background image is visible behind content.
```

### Fix Auto-Transition
```
Fix the new arrivals auto-transition in src/components/sections/HeroNewArrivals.tsx.
The carousel should auto-advance every 1.5 seconds but it's not.

The setInterval is set up, but something is blocking the transitions.

After fixing, verify carousel auto-advances every 1–2 seconds.
```

---

## Option 3: UI Polish Pass

```
Improve the overall UI polish:

1. Increase brand title size in Hero.tsx to make it more prominent
2. Add neomorphic shadows (neo class) to category tiles, product cards, and collection cards
3. Add smooth hover transitions to all interactive elements
4. Add 2–3 tasteful doodle accents to CategoryNav.tsx (low opacity, small size)
5. Verify mobile layout looks good at 375px, 390px, 414px widths

Follow the design guidelines in DESIGN_SYSTEM.md.
After changes, run build to verify no errors.
```

---

## Option 4: Prepare for Client Content

```
Prepare the project for receiving real content from the client:

1. Document the image specifications needed:
   - Product photos: 800x1000px minimum, 4:5 aspect ratio
   - Store gallery: 1200px width, landscape or square
   - File format: JPG or PNG (Next.js will optimize)

2. Create a client checklist:
   - Product inventory list (names, categories, sizes, descriptions)
   - Real contact info (phone, WhatsApp, address, hours)
   - Store photos (interior/exterior)
   - Social media links

3. Create placeholder folders:
   - public/products/ (for product images)
   - public/gallery/ (for store photos)

Save the client checklist as CLIENT_REQUIREMENTS.md
```

---

## Tips for Next Session

- All memory files are in place — future AI sessions should read AGENTS.md first
- PROJECT_MAP.md has file locations for all features
- DESIGN_SYSTEM.md has visual guidelines for UI work
- TODO.md has prioritized task list
- Build currently passes — verify after any changes

**Current status**: Project structure documented, known issues identified, ready for fixes.

---

Choose the option that fits your immediate priority, or create a custom prompt combining multiple tasks.
