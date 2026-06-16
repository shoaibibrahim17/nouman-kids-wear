"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

import { SITE } from "@/data/site";
import { generalEnquiryUrl } from "@/lib/whatsapp";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { HeroNewArrivals } from "@/components/sections/HeroNewArrivals";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background image — subtle, framed, not a giant gradient block. */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero/nouman-hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* Copy */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/70 px-3 py-1 text-[0.7rem] font-medium text-muted-foreground backdrop-blur-sm"
          >
            <Sparkles className="size-3.5 text-peach-foreground" />
            Boutique kidswear in {SITE.address.city}
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="mt-4 font-heading text-[2.1rem] font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl"
          >
            Dressed for every{" "}
            <span className="italic text-primary">little</span> occasion
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-muted-foreground"
          >
            Boys, girls & newborn readymade garments — casual, party and ethnic
            wear, handpicked for {SITE.address.city}. Browse our latest stock and
            enquire instantly on WhatsApp.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <WhatsAppButton href={generalEnquiryUrl()} size="lg">
              Enquire on WhatsApp
            </WhatsAppButton>
            <a
              href="#catalogue"
              className="inline-flex h-12 items-center gap-1.5 rounded-full border border-border bg-card/60 px-5 text-[0.95rem] font-medium text-foreground transition-colors hover:bg-muted"
            >
              Browse catalogue
              <ArrowRight className="size-4" />
            </a>
          </motion.div>

          <motion.dl
            variants={fadeInUp}
            className="mt-8 flex gap-6 border-t border-border/60 pt-5"
          >
            <div>
              <dt className="font-heading text-xl font-semibold text-foreground">
                7+
              </dt>
              <dd className="text-xs text-muted-foreground">Categories</dd>
            </div>
            <div>
              <dt className="font-heading text-xl font-semibold text-foreground">
                0–14y
              </dt>
              <dd className="text-xs text-muted-foreground">Newborn to junior</dd>
            </div>
            <div>
              <dt className="font-heading text-xl font-semibold text-foreground">
                WhatsApp
              </dt>
              <dd className="text-xs text-muted-foreground">Quick enquiry</dd>
            </div>
          </motion.dl>
        </motion.div>

        {/* Mini new-arrivals slider */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mx-auto w-full max-w-sm lg:max-w-none"
        >
          <HeroNewArrivals />
        </motion.div>
      </div>
    </section>
  );
}
