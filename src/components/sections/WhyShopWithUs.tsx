"use client";

import { motion } from "motion/react";
import { BadgeCheck, HeartHandshake, Sparkles, Tag } from "lucide-react";

import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { Section, SectionHeading } from "@/components/common/Section";

const POINTS = [
  {
    icon: Sparkles,
    title: "Fresh stock often",
    text: "New arrivals across seasons and festivals, picked for little ones.",
  },
  {
    icon: BadgeCheck,
    title: "Quality you can feel",
    text: "Soft, skin-friendly fabrics and finishes parents can trust.",
  },
  {
    icon: Tag,
    title: "Fair, honest pricing",
    text: "Straightforward prices on request — no inflated tags, no pressure.",
  },
  {
    icon: HeartHandshake,
    title: "Friendly local service",
    text: "Sizing help and quick answers on WhatsApp, like a neighbour shop.",
  },
];

export function WhyShopWithUs() {
  return (
    <Section className="py-12 sm:py-14">
      <SectionHeading
        eyebrow="Why Nouman"
        title="A boutique that gets little wardrobes"
        align="center"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {POINTS.map((point) => (
          <motion.div
            key={point.title}
            variants={fadeInUp}
            className="rounded-xl border border-border/70 bg-card p-5"
          >
            <span className="inline-flex size-10 items-center justify-center rounded-lg bg-secondary text-foreground">
              <point.icon className="size-5" />
            </span>
            <h3 className="mt-3.5 text-[0.95rem] font-medium text-foreground">
              {point.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {point.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
