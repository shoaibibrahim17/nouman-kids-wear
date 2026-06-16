"use client";

import Image from "next/image";
import { motion } from "motion/react";

import type { Product } from "@/types/product";
import { CATEGORY_LABELS } from "@/data/categories";
import { productEnquiryUrl } from "@/lib/whatsapp";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

interface ProductCardProps {
  product: Product;
  /** Smaller variant for tight grids / sliders. */
  compact?: boolean;
  className?: string;
  priority?: boolean;
}

const badgeStyles: Record<string, string> = {
  New: "bg-mint text-mint-foreground",
  Bestseller: "bg-sky text-sky-foreground",
  Festive: "bg-peach text-peach-foreground",
  Limited: "bg-lilac text-lilac-foreground",
};

export function ProductCard({
  product,
  compact = false,
  className,
  priority = false,
}: ProductCardProps) {
  return (
    <motion.article
      variants={fadeInUp}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-border/70 bg-card transition-shadow hover:shadow-[0_10px_30px_-12px_rgba(60,40,40,0.18)]",
        className,
      )}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={`${product.name} — ${CATEGORY_LABELS[product.category]} at Nouman Kids Wear, Adilabad`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          preload={priority}
        />
        {product.badge && (
          <span
            className={cn(
              "absolute left-2.5 top-2.5 rounded-full px-2.5 py-0.5 text-[0.65rem] font-medium",
              badgeStyles[product.badge] ?? "bg-secondary text-secondary-foreground",
            )}
          >
            {product.badge}
          </span>
        )}
      </div>

      <div className={cn("flex flex-1 flex-col p-3.5", compact && "p-3")}>
        <p className="eyebrow">{CATEGORY_LABELS[product.category]}</p>
        <h3
          className={cn(
            "mt-1 font-medium leading-snug text-foreground",
            compact ? "text-sm" : "text-[0.95rem]",
          )}
        >
          {product.name}
        </h3>

        <div className="mt-2 flex flex-wrap gap-1">
          {product.sizes.slice(0, compact ? 3 : 4).map((size) => (
            <span
              key={size}
              className="rounded-md border border-border/70 px-1.5 py-0.5 text-[0.65rem] text-muted-foreground"
            >
              {size}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <span className="text-[0.7rem] font-medium uppercase tracking-wide text-muted-foreground">
            {product.price}
          </span>
          <WhatsAppButton
            href={productEnquiryUrl(product)}
            variant="soft"
            size="sm"
            ariaLabel={`Enquire about ${product.name} on WhatsApp`}
          >
            Enquire
          </WhatsAppButton>
        </div>
      </div>
    </motion.article>
  );
}
