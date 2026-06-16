import type { Product } from "@/types/product";

/**
 * ⚠️ PLACEHOLDER PRODUCT DATA — NOT REAL NOUMAN KIDS WEAR INVENTORY.
 *
 * Every product below uses a generic name and a royalty-free demo photo from
 * Unsplash. These exist only to build out the catalogue layout. Before launch:
 *   1. Replace each `image` with a real, photographed Nouman stock item.
 *   2. Replace names/sizes/age groups with actual inventory details.
 *   3. Keep `price` as "Price on request" — this is a catalogue, not a store.
 *
 * When Sanity is wired in later, this array is the shape the CMS query should
 * return, so the UI components can stay unchanged.
 */
export const PRODUCTS: Product[] = [
  {
    id: "girls-floral-party-dress",
    name: "Floral Party Dress",
    category: "party-wear",
    gender: "girls",
    ageGroup: "kids",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    image:
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=80",
    price: "Price on request",
    badge: "New",
    isNew: true,
    featured: true,
    collection: "party-wear",
    description: "Tiered floral frock with a soft lined bodice.",
  },
  {
    id: "boys-casual-shirt-set",
    name: "Boys Casual Shirt Set",
    category: "casual-wear",
    gender: "boys",
    ageGroup: "kids",
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"],
    image:
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?auto=format&fit=crop&w=900&q=80",
    price: "Price on request",
    badge: "Bestseller",
    isNew: true,
    featured: true,
    collection: "casual-wear",
    description: "Checked half-sleeve shirt with coordinated shorts.",
  },
  {
    id: "newborn-essentials-set",
    name: "Newborn Essentials Set",
    category: "newborn",
    gender: "unisex",
    ageGroup: "newborn",
    sizes: ["0-3M", "3-6M", "6-9M", "9-12M"],
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=80",
    price: "Price on request",
    badge: "New",
    isNew: true,
    featured: true,
    collection: "newborn-essentials",
    description: "Soft cotton bodysuit, cap and mittens starter set.",
  },
  {
    id: "girls-ethnic-lehenga",
    name: "Kids Ethnic Lehenga",
    category: "ethnic-wear",
    gender: "girls",
    ageGroup: "kids",
    sizes: ["3-4Y", "5-6Y", "7-8Y"],
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
    price: "Price on request",
    badge: "Festive",
    isNew: true,
    featured: true,
    collection: "festival-wear",
    description: "Embroidered lehenga choli with dupatta.",
  },
  {
    id: "boys-kurta-pyjama",
    name: "Boys Ethnic Kurta Set",
    category: "ethnic-wear",
    gender: "boys",
    ageGroup: "juniors",
    sizes: ["6-7Y", "8-9Y", "10-11Y", "12-13Y"],
    image:
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=80",
    price: "Price on request",
    badge: "Festive",
    collection: "festival-wear",
    description: "Cotton-silk kurta with pyjama for festive days.",
  },
  {
    id: "girls-frock-casual",
    name: "Everyday Cotton Frock",
    category: "girls-wear",
    gender: "girls",
    ageGroup: "toddler",
    sizes: ["1-2Y", "2-3Y", "3-4Y"],
    image:
      "https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?auto=format&fit=crop&w=900&q=80",
    price: "Price on request",
    isNew: true,
    collection: "casual-wear",
    description: "Breathable printed frock for daily wear.",
  },
  {
    id: "boys-tshirt-pack",
    name: "Boys Graphic T-Shirt",
    category: "boys-wear",
    gender: "boys",
    ageGroup: "kids",
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"],
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80",
    price: "Price on request",
    collection: "casual-wear",
    description: "Soft jersey tee with playful front print.",
  },
  {
    id: "newborn-romper",
    name: "Newborn Knit Romper",
    category: "newborn",
    gender: "unisex",
    ageGroup: "newborn",
    sizes: ["0-3M", "3-6M", "6-9M"],
    image:
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=900&q=80",
    price: "Price on request",
    badge: "New",
    isNew: true,
    collection: "newborn-essentials",
    description: "Gentle knit romper with easy snap buttons.",
  },
  {
    id: "girls-party-gown",
    name: "Princess Party Gown",
    category: "party-wear",
    gender: "girls",
    ageGroup: "kids",
    sizes: ["4-5Y", "6-7Y", "8-9Y"],
    image:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=900&q=80",
    price: "Price on request",
    badge: "Limited",
    featured: true,
    collection: "party-wear",
    description: "Layered tulle gown with satin sash.",
  },
  {
    id: "boys-party-blazer",
    name: "Boys Party Blazer Set",
    category: "party-wear",
    gender: "boys",
    ageGroup: "juniors",
    sizes: ["6-7Y", "8-9Y", "10-11Y"],
    image:
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?auto=format&fit=crop&w=900&q=80",
    price: "Price on request",
    badge: "Bestseller",
    collection: "party-wear",
    description: "Three-piece blazer, shirt and trouser set.",
  },
  {
    id: "kids-canvas-shoes",
    name: "Kids Canvas Shoes",
    category: "shoes-accessories",
    gender: "unisex",
    ageGroup: "kids",
    sizes: ["UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    image:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=900&q=80",
    price: "Price on request",
    collection: "casual-wear",
    description: "Lightweight everyday canvas sneakers.",
  },
  {
    id: "girls-winter-cardigan",
    name: "Girls Knit Cardigan",
    category: "girls-wear",
    gender: "girls",
    ageGroup: "kids",
    sizes: ["3-4Y", "5-6Y", "7-8Y"],
    image:
      "https://images.unsplash.com/photo-1577900232427-18219b9166a0?auto=format&fit=crop&w=900&q=80",
    price: "Price on request",
    description: "Cosy buttoned cardigan for cooler evenings.",
  },
];

export const NEW_ARRIVALS = PRODUCTS.filter((p) => p.isNew);
export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.featured);
