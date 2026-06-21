import { MetadataRoute } from 'next'

/**
 * Sitemap for Nouman Kids Wear
 * 
 * Currently a single-page application with anchor navigation.
 * When additional routes are added (e.g., /products/[slug]), expand this sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nouman-kids-wear.vercel.app'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ]
}
