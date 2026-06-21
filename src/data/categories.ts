import type { Category, CategorySlug, Collection } from "@/types/product";

export const CATEGORIES: Category[] = [
  {
    slug: "boys-ethnic-wear",
    label: "Boys Ethnic Wear",
    description: "Sherwanis, kurtas & festive sets",
    accent: "sky",
  },
  {
    slug: "girls-ethnic-wear",
    label: "Girls Ethnic Wear",
    description: "Ethnic gowns, lehengas & traditional sets",
    accent: "peach",
  },
  {
    slug: "girls-party-wear",
    label: "Girls Party Wear",
    description: "Gowns & party dresses",
    accent: "blush",
  },
  {
    slug: "boys-party-wear",
    label: "Boys Party Wear",
    description: "Party shirts, blazers & dress sets",
    accent: "lilac",
  },
  {
    slug: "jackets-winter-wear",
    label: "Jackets & Winter Wear",
    description: "Warm jackets & winter essentials",
    accent: "mint",
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
    image: "/images/products/boys/girls/girls-olive-green-lehenga-choli-4-14yr.jpeg",
  },
  {
    slug: "party-wear",
    title: "Party Wear",
    description: "Twirl-worthy frocks and sharp sets for birthdays & events.",
    accent: "lilac",
    image: "/images/products/boys/girls/girls-white-party-gown-1-14yr.jpeg",
  },
  {
    slug: "casual-wear",
    title: "Casual Wear",
    description: "Soft, playful everyday outfits made for movement.",
    accent: "sky",
    image: "/images/products/boys/girls/girls-dusty-pink-princess-gown-4-10yr.jpeg",
  },
  {
    slug: "newborn-essentials",
    title: "Newborn Essentials",
    description: "Gentle fabrics and starter sets for the newest arrivals.",
    accent: "mint",
    image: "/images/products/boys/girls/girls-mint-green-embroidered-gown-4-10yr.jpeg",
  },
];
