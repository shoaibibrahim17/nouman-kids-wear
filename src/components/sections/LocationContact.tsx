"use client";

import { motion } from "motion/react";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";

import { SITE } from "@/data/site";
import { generalEnquiryUrl } from "@/lib/whatsapp";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { Section, SectionHeading } from "@/components/common/Section";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

export function LocationContact() {
  const { address } = SITE;
  const fullAddress = `${address.line1}, ${address.city}, ${address.state} ${address.pincode}`;
  const mapsQuery = encodeURIComponent(`${SITE.name}, ${fullAddress}`);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Visit us"
        title="Find Nouman Kids Wear in Adilabad"
        description="Drop by the store or reach us on WhatsApp — we're happy to help with sizes and availability."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-7 grid gap-3.5 lg:grid-cols-[1fr_1.1fr]"
      >
        {/* Details */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col gap-4 rounded-xl border border-border/70 bg-card p-5 sm:p-6"
        >
          <ContactItem icon={MapPin} label="Address">
            {fullAddress}
          </ContactItem>

          <ContactItem icon={Phone} label="Phone">
            <a
              href={`tel:${SITE.phoneHref}`}
              className="transition-colors hover:text-foreground"
            >
              {SITE.phoneDisplay}
            </a>
          </ContactItem>

          <ContactItem icon={Clock} label="Store hours">
            <ul className="space-y-0.5">
              {SITE.hours.map((h) => (
                <li key={h.days}>
                  <span className="text-foreground">{h.days}:</span> {h.time}
                </li>
              ))}
            </ul>
          </ContactItem>

          <div className="mt-1 flex flex-wrap gap-2">
            <WhatsAppButton href={generalEnquiryUrl()} size="md">
              Chat on WhatsApp
            </WhatsAppButton>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Navigation className="size-4" />
              Get directions
            </a>
          </div>
        </motion.div>

        {/* Map placeholder */}
        <motion.a
          variants={fadeInUp}
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex min-h-[260px] flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-border/70 bg-[linear-gradient(135deg,var(--cream),var(--background))] text-center"
          aria-label="Open location in Google Maps"
        >
          {/* Subtle map-grid texture */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.5] [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:28px_28px]"
          />
          <span className="relative inline-flex size-12 items-center justify-center rounded-full bg-blush text-blush-foreground shadow-sm">
            <MapPin className="size-6" />
          </span>
          <span className="relative text-sm font-medium text-foreground">
            {SITE.name}
          </span>
          <span className="relative max-w-xs px-6 text-xs text-muted-foreground">
            Interactive map placeholder — tap to open in Google Maps.
          </span>
        </motion.a>
      </motion.div>
    </Section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
        <Icon className="size-[18px]" />
      </span>
      <div className="text-sm text-muted-foreground">
        <p className="text-[0.7rem] font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <div className="mt-0.5 text-foreground/90">{children}</div>
      </div>
    </div>
  );
}
