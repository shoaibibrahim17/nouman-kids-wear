"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import { NEW_ARRIVALS } from "@/data/products";
import { CATEGORY_LABELS } from "@/data/categories";
import { cn } from "@/lib/utils";

// Auto-transitioning mini slider of new arrivals for the hero's right side.
// Spec: new arrivals should change every 1–2s.
const AUTOPLAY_MS = 1500;

export function HeroNewArrivals() {
  const slides = NEW_ARRIVALS.slice(0, 5);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);
  // Pause auto-advance on hover/focus (desktop) so users can read a slide.
  const pausedRef = useRef(false);

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

  // Reliable auto-transition via setInterval. Respects reduced motion, pauses
  // when the tab is hidden or the user is hovering/focusing, and is always
  // cleared on unmount.
  useEffect(() => {
    if (!emblaApi) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    const id = setInterval(() => {
      if (document.hidden || pausedRef.current) return;
      emblaApi.scrollNext();
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [emblaApi]);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <div
      className="relative"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
    >
      {/* Soft neomorphic pastel frame */}
      <div className="neo rounded-3xl border border-border/60 bg-card/85 p-2.5 backdrop-blur-sm">
        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
          <div className="flex">
            {slides.map((product, i) => (
              <div key={product.id} className="relative min-w-0 flex-[0_0_100%]">
                {/* Fixed aspect-ratio wrapper prevents layout shift. */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={product.image}
                    alt={`${product.name} — new arrival at Nouman Kids Wear`}
                    fill
                    sizes="(max-width: 1024px) 80vw, 420px"
                    className="object-cover"
                    priority={i === 0}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3.5 pt-10">
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
      <div className="neo-sm absolute -left-2 -top-2 rounded-full bg-blush px-3 py-1 text-[0.65rem] font-medium text-blush-foreground sm:-left-3 sm:-top-3">
        New Arrivals
      </div>

      {/* Progress dots / indicators */}
      <div className="mt-3.5 flex items-center justify-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={selected === i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              selected === i
                ? "w-6 bg-primary"
                : "w-1.5 bg-foreground/20 hover:bg-foreground/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}
