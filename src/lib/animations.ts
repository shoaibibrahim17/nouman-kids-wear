import type { Variants } from "motion/react";

// Subtle, editorial motion. Easings are gentle; distances are small so the
// layout never visibly shifts. Reduced-motion users are handled globally via
// the CSS media query in globals.css and Motion's own reduced-motion support.

const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

/** Parent container that staggers its children into view. */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Shared viewport config — animate once, when ~20% is visible. */
export const viewportOnce = { once: true, amount: 0.2 } as const;
