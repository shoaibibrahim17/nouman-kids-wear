import type { Category, CategorySlug, Collection } from "@/types/product";

export const CATEGORIES: Category[] = [
  {
    slug: "boys-wear",
    label: "Boys Wear",
    description: "Shirts, t-shirts & sets",
    accent: "sky",
  },
  {
    slug: "boys-ethnic-wear",
    label: "Boys Ethnic Wear",
    description: "Sherwanis, kurtas & festive sets",
    accent: "peach",
  },
  {
    slug: "girls-wear",
    label: "Girls Wear",
    description: "Frocks, tops & dresses",
    accent: "blush",
  },
  {
    slug: "girls-party-wear",
    label: "Girls Party Wear",
    description: "Gowns & party dresses",
    accent: "lilac",
  },
  {
    slug: "girls-ethnic-wear",
    label: "Girls Ethnic Wear",
    description: "Ethnic gowns & traditional sets",
    accent: "peach",
  },
  {
    slug: "girls-lehenga-choli",
    label: "Girls Lehenga Choli",
    description: "Lehengas with choli & dupatta",
    accent: "peach",
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
