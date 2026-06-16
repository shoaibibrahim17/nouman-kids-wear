"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import { NEW_ARRIVALS } from "@/data/products";
import { CATEGORY_LABELS } from "@/data/categories";
import { cn } from "@/lib/utils";

// Auto-transitioning mini slider of new arrivals for the hero's right side.
const AUTOPLAY_MS = 3200;

export function HeroNewArrivals() {
  const slides = NEW_ARRIVALS.slice(0, 5);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // Sync initial slide index from the embla instance (an external system).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Respect reduced motion: no autoplay.
  useEffect(() => {
    if (!emblaApi) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    const id = setInterval(() => {
      if (document.hidden) return;
      emblaApi.scrollNext();
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* Soft pastel frame */}
      <div className="rounded-2xl border border-border/70 bg-card/80 p-2.5 shadow-[0_20px_50px_-24px_rgba(60,40,40,0.28)] backdrop-blur-sm">
        <div className="overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="flex">
            {slides.map((product, i) => (
              <div
                key={product.id}
                className="relative min-w-0 flex-[0_0_100%]"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={product.image}
                    alt={`${product.name} — new arrival at Nouman Kids Wear`}
                    fill
                    sizes="(max-width: 1024px) 80vw, 420px"
                    className="object-cover"
                    preload={i === 0}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-3.5 pt-10">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-white/80">
                      {CATEGORY_LABELS[product.category]}
                    </p>
                    <p className="text-sm font-medium text-white">
                      {product.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating "New Arrivals" tag */}
      <div className="absolute -left-2 -top-2 rounded-full bg-blush px-3 py-1 text-[0.65rem] font-medium text-blush-foreground shadow-sm sm:-left-3 sm:-top-3">
        New Arrivals
      </div>

      {/* Dots */}
      <div className="mt-3 flex items-center justify-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              selected === i
                ? "w-5 bg-foreground"
                : "w-1.5 bg-foreground/25 hover:bg-foreground/50",
            )}
          />
        ))}
      </div>
    </div>
  );
}
