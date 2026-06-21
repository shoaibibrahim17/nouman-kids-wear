import type { AgeGroupOption, Gender } from "@/types/product";

// Central business / brand configuration.
// NOTE: phone + WhatsApp numbers below are PLACEHOLDERS. Replace them with the
// real Nouman Kids Wear contact details before going live.
export const SITE = {
  name: "Nouman Kids Wear",
  shortName: "Nouman",
  tagline: "Readymade kidswear for every little occasion",
  description:
    "Nouman Kids Wear is a kids clothing store in Adilabad, Telangana — boys wear, girls wear, newborn essentials, party & ethnic wear. Browse our latest stock and enquire on WhatsApp.",
  // Digits only, with country code (India = 91). Used to build wa.me links.
  whatsappNumber: "918498986699",
  // Human-friendly phone for tel: links and display.
  phoneDisplay: "+91 84989 86699",
  phoneHref: "+918498986699",
  email: "noumankidswear@example.com",
  address: {
    line1: "Main Road, Near Clock Tower",
    city: "Adilabad",
    state: "Telangana",
    pincode: "504001",
    country: "India",
  },
  // Google Maps location
  mapUrl: "https://maps.app.goo.gl/8AsHwTKXUfPaXCgC9",
  // Map embed URL for iframe (constructed from mapUrl or leave undefined to auto-generate)
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.4486831842846!2d78.53183!3d19.66517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2e42d57d0c8c5%3A0x8e4e6de8f7d7bf7a!2sNouman%20Kids%20Wear!5e0!3m2!1sen!2sin!4v1671234567890!5m2!1sen!2sin",
  // Placeholder hours — confirm with the shop.
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 9:30 PM" },
    { days: "Sunday", time: "11:00 AM – 9:30 PM" },
  ],
  social: {
    justdial: "#",
    instagram: "https://www.instagram.com/noumankidswear_nkw/",
    facebook: "https://www.facebook.com/share/1JgKoMxRhM/",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Categories", href: "#categories" },
  { label: "New Arrivals", href: "#new-arrivals" },
  { label: "Catalogue", href: "#catalogue" },
  { label: "Collections", href: "#collections" },
  { label: "Visit Us", href: "#contact" },
] as const;

export const GENDER_OPTIONS: { value: Gender; label: string }[] = [
  { value: "boys", label: "Boys" },
  { value: "girls", label: "Girls" },
  { value: "unisex", label: "Unisex" },
];

export const AGE_GROUP_OPTIONS: AgeGroupOption[] = [
  { value: "newborn", label: "Newborn", hint: "0 – 12 months" },
  { value: "toddler", label: "Toddler", hint: "1 – 3 years" },
  { value: "kids", label: "Kids", hint: "3 – 8 years" },
  { value: "juniors", label: "Juniors", hint: "8 – 14 years" },
];
