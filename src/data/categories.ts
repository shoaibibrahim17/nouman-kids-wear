import type { Category, CategorySlug, Collection } from "@/types/product";

export const CATEGORIES: Category[] = [
  {
    slug: "boys-wear",
    label: "Boys Wear",
    description: "Shirts, t-shirts & sets",
    accent: "sky",
  },
  {
    slug: "girls-wear",
    label: "Girls Wear",
    description: "Frocks, tops & dresses",
    accent: "blush",
  },
  {
    slug: "newborn",
    label: "Newborn",
    description: "Soft essentials 0–12m",
    accent: "mint",
  },
  {
    slug: "party-wear",
    label: "Party Wear",
    description: "Dressy occasion looks",
    accent: "lilac",
  },
  {
    slug: "ethnic-wear",
    label: "Ethnic Wear",
    description: "Kurta sets & lehengas",
    accent: "peach",
  },
  {
    slug: "casual-wear",
    label: "Casual Wear",
    description: "Everyday comfort fits",
    accent: "mint",
  },
  {
    slug: "shoes-accessories",
    label: "Shoes & Accessories",
    description: "Footwear & finishing touches",
    accent: "sky",
  },
];

export const CATEGORY_LABELS: Record<CategorySlug, string> = CATEGORIES.reduce(
  (acc, c) => {
    acc[c.slug] = c.label;
    return acc;
  },
  {} as Record<CategorySlug, string>,
);

export const COLLECTIONS: Collection[] = [
  {
    slug: "festival-wear",
    title: "Festival Wear",
    description: "Eid, Diwali & wedding-ready ethnic looks for little ones.",
    accent: "peach",
    // Placeholder image — replace with real shop photography.
    image:
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "party-wear",
    title: "Party Wear",
    description: "Twirl-worthy frocks and sharp sets for birthdays & events.",
    accent: "lilac",
    image:
      "https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "casual-wear",
    title: "Casual Wear",
    description: "Soft, playful everyday outfits made for movement.",
    accent: "sky",
    image:
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "newborn-essentials",
    title: "Newborn Essentials",
    description: "Gentle fabrics and starter sets for the newest arrivals.",
    accent: "mint",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80",
  },
];
