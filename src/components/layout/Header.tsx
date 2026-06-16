"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

import { NAV_LINKS, SITE } from "@/data/site";
import { generalEnquiryUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-border/80 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70"
          : "border-transparent bg-background/40 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2.5" aria-label={SITE.name}>
          <span className="relative block size-9 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
            <Image
              src="/brand/nouman-logo.png"
              alt={`${SITE.name} logo`}
              fill
              sizes="36px"
              className="object-cover"
              preload
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-[0.95rem] font-semibold tracking-tight">
              {SITE.name}
            </span>
            <span className="mt-0.5 text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
              Adilabad
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <WhatsAppButton
            href={generalEnquiryUrl()}
            size="sm"
            className="hidden sm:inline-flex"
          >
            Enquire
          </WhatsAppButton>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted md:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[78%] gap-0 p-0 sm:max-w-xs">
              <SheetHeader className="border-b px-5 py-4 text-left">
                <SheetTitle className="font-heading text-base">
                  {SITE.name}
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col px-3 py-3">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="rounded-lg px-3 py-2.5 text-[0.95rem] text-foreground transition-colors hover:bg-muted"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto border-t px-5 py-4">
                <WhatsAppButton
                  href={generalEnquiryUrl()}
                  size="md"
                  className="w-full"
                >
                  Enquire on WhatsApp
                </WhatsAppButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
