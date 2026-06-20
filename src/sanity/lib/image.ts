import imageUrlBuilder from '@sanity/image-url'
import { client, isSanityConfigured } from './client'

// Only create builder if Sanity is configured
const builder = isSanityConfigured && client ? imageUrlBuilder(client) : null

export function urlFor(source: any) {
  if (!builder) {
    console.warn('[Sanity] Image URL builder not available - Sanity not configured')
    return null
  }
  return builder.image(source)
}

// Helper to get optimized image URL
export function getImageUrl(source: any, width = 800) {
  if (!source) return ''
  
  if (!builder) {
    // If Sanity is not configured, return the raw source URL if available
    if (typeof source === 'string') return source
    if (source?.asset?.url) return source.asset.url
    return ''
  }
  
  return urlFor(source)
    ?.width(width)
    ?.quality(85)
    ?.auto('format')
    ?.url() || ''
}
