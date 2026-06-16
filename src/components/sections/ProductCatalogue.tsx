"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Filter, X } from "lucide-react";

import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { AGE_GROUP_OPTIONS, GENDER_OPTIONS } from "@/data/site";
import { generalEnquiryUrl } from "@/lib/whatsapp";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/common/Section";
import { ProductCard } from "@/components/common/ProductCard";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import type { AgeGroup, CategorySlug, Gender } from "@/types/product";

type CategoryFilter = CategorySlug | "all";
type GenderFilter = Gender | "all";
type AgeFilter = AgeGroup | "all";

// All distinct sizes across the catalogue, kept in a sensible display order.
const ALL_SIZES = Array.from(
  new Set(PRODUCTS.flatMap((p) => p.sizes)),
).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

export function ProductCatalogue() {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [gender, setGender] = useState<GenderFilter>("all");
  const [age, setAge] = useState<AgeFilter>("all");
  const [size, setSize] = useState<string | "all">("all");

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (gender !== "all" && p.gender !== gender) return false;
      if (age !== "all" && p.ageGroup !== age) return false;
      if (size !== "all" && !p.sizes.includes(size)) return false;
      return true;
    });
  }, [category, gender, age, size]);

  const hasFilters =
    category !== "all" || gender !== "all" || age !== "all" || size !== "all";

  const reset = () => {
    setCategory("all");
    setGender("all");
    setAge("all");
    setSize("all");
  };

  return (
    <Section id="catalogue" className="scroll-mt-20">
      <SectionHeading
        eyebrow="Available stock"
        title="Browse the catalogue"
        description="Filter by category, gender, age and size. Prices are shared on request — enquire on WhatsApp to confirm what's in stock."
      />

      {/* Filters */}
      <div className="mt-7 rounded-xl border border-border/70 bg-card/60 p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Filter className="size-3.5" />
            Filters
          </span>
          {hasFilters && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="size-3" />
              Clear all
            </button>
          )}
        </div>

        <div className="space-y-3">
          <FilterRow label="Category">
            <Chip active={category === "all"} onClick={() => setCategory("all")}>
              All
            </Chip>
            {CATEGORIES.map((c) => (
              <Chip
                key={c.slug}
                active={category === c.slug}
                onClick={() => setCategory(c.slug)}
              >
                {c.label}
              </Chip>
            ))}
          </FilterRow>

          <FilterRow label="Gender">
            <Chip active={gender === "all"} onClick={() => setGender("all")}>
              All
            </Chip>
            {GENDER_OPTIONS.map((g) => (
              <Chip
                key={g.value}
                active={gender === g.value}
                onClick={() => setGender(g.value)}
              >
                {g.label}
              </Chip>
            ))}
          </FilterRow>

          <FilterRow label="Age group">
            <Chip active={age === "all"} onClick={() => setAge("all")}>
              All
            </Chip>
            {AGE_GROUP_OPTIONS.map((a) => (
              <Chip
                key={a.value}
                active={age === a.value}
                onClick={() => setAge(a.value)}
              >
                {a.label}
              </Chip>
            ))}
          </FilterRow>

          <FilterRow label="Size">
            <Chip active={size === "all"} onClick={() => setSize("all")}>
              All
            </Chip>
            {ALL_SIZES.map((s) => (
              <Chip key={s} active={size === s} onClick={() => setSize(s)}>
                {s}
              </Chip>
            ))}
          </FilterRow>
        </div>
      </div>

      {/* Results */}
      <p className="mt-5 text-xs text-muted-foreground">
        Showing {filtered.length}{" "}
        {filtered.length === 1 ? "item" : "items"}
        {hasFilters ? " for your filters" : ""}.
      </p>

      {filtered.length > 0 ? (
        <motion.div
          key={`${category}-${gender}-${age}-${size}`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-3 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4"
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      ) : (
        <div className="mt-3 flex flex-col items-center gap-3 rounded-xl border border-dashed border-border bg-card/40 px-6 py-12 text-center">
          <p className="text-sm font-medium text-foreground">
            No items match these filters
          </p>
          <p className="max-w-sm text-xs text-muted-foreground">
            We may still have something for you in store — message us and
            we&apos;ll help you find it.
          </p>
          <div className="mt-1 flex gap-2">
            <button
              type="button"
              onClick={reset}
              className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
            >
              Reset filters
            </button>
            <WhatsAppButton href={generalEnquiryUrl()} size="sm">
              Ask us
            </WhatsAppButton>
          </div>
        </div>
      )}
    </Section>
  );
}

function FilterRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
      <span className="w-24 shrink-0 pt-1.5 text-[0.7rem] font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}
