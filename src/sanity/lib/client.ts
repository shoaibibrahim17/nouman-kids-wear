import { createClient } from 'next-sanity'

/**
 * Public Sanity client configuration values.
 * These are safe to expose and not considered secrets.
 */
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01'

/**
 * Check if Sanity is properly configured.
 * Only valid when projectId is present.
 */
export const isSanityConfigured = Boolean(projectId)

/**
 * Public Sanity client for reading published content.
 * Only created if Sanity is properly configured.
 * 
 * SECURITY: Uses only NEXT_PUBLIC_ environment variables, which are safe
 * to expose to the browser. No authentication token is required for reading
 * published content from Sanity.
 * 
 * Project ID and dataset are public information and not sensitive.
 */
export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true, // Use CDN for faster reads of published content
      perspective: 'published', // Only fetch published documents (not drafts)
    })
  : null

/**
 * Sanity client with revalidation support for Next.js cache.
 * Only created if Sanity is properly configured.
 * Use this in Server Components and API routes that need ISR.
 * 
 * Revalidation: 60 seconds default for catalogue data.
 */
export const clientWithRevalidate = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false, // Disable CDN for ISR to get fresh data on revalidation
      perspective: 'published',
    })
  : null
