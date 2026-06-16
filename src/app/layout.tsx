import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { SITE } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Editorial serif for headings — gives the boutique catalogue feel.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const keywords = [
  "kids wear Adilabad",
  "kids clothing store Adilabad",
  "boys wear Adilabad",
  "girls wear Adilabad",
  "newborn clothes Adilabad",
  "party wear for kids Adilabad",
  "readymade garments Adilabad",
  "Nouman Kids Wear",
];

export const metadata: Metadata = {
  metadataBase: new URL("https://noumankidswear.example.com"),
  title: {
    default: `${SITE.name} — Kids Wear in Adilabad, Telangana`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: `${SITE.name} — Kids Wear in Adilabad`,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Kids Wear in Adilabad`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  category: "shopping",
};

export const viewport: Viewport = {
  themeColor: "#fbf8f3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
