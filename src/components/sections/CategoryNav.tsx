"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { CATEGORIES } from "@/data/categories";
import { ACCENT_SOFT } from "@/lib/accents";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { Section, SectionHeading } from "@/components/common/Section";
import { cn } from "@/lib/utils";

export function CategoryNav() {
  return (
    <Section id="categories" className="py-12 sm:py-14">
      <SectionHeading
        eyebrow="Shop by category"
        title="Find the right fit, fast"
        description="From newborn essentials to junior party wear — pick a category to jump into the catalogue."
      />

      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-7"
      >
        {CATEGORIES.map((category) => (
          <motion.li key={category.slug} variants={fadeInUp}>
            <a
              href="#catalogue"
              className="group flex h-full flex-col justify-between gap-3 rounded-xl border border-border/70 bg-card p-3.5 transition-colors hover:border-foreground/20 hover:bg-muted/50"
            >
              <span
                className={cn(
                  "inline-flex size-9 items-center justify-center rounded-lg text-sm font-semibold",
                  ACCENT_SOFT[category.accent],
                )}
                aria-hidden="true"
              >
                {category.label.charAt(0)}
              </span>
              <span>
                <span className="flex items-center gap-1 text-sm font-medium leading-tight text-foreground">
                  {category.label}
                  <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
                <span className="mt-0.5 block text-[0.72rem] leading-snug text-muted-foreground">
                  {category.description}
                </span>
              </span>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
