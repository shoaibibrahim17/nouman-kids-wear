import type { BrandAccent } from "@/types/product";

// Maps a brand accent to soft pastel background + readable foreground classes.
// Used for chips, category tiles and collection labels.
export const ACCENT_SOFT: Record<BrandAccent, string> = {
  blush: "bg-blush text-blush-foreground",
  mint: "bg-mint text-mint-foreground",
  sky: "bg-sky text-sky-foreground",
  peach: "bg-peach text-peach-foreground",
  lilac: "bg-lilac text-lilac-foreground",
};

export const ACCENT_DOT: Record<BrandAccent, string> = {
  blush: "bg-blush-foreground",
  mint: "bg-mint-foreground",
  sky: "bg-sky-foreground",
  peach: "bg-peach-foreground",
  lilac: "bg-lilac-foreground",
};
