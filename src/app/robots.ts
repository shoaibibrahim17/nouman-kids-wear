import { MetadataRoute } from 'next'

/**
 * Robots.txt configuration for Nouman Kids Wear
 * 
 * - Allow all public pages to be indexed
 * - Disallow /studio (CMS admin area)
 * - Point to sitemap
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://nouman-kids-wear.vercel.app'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio', '/studio/*'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
