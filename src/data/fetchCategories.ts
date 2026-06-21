import { fetchSanity, transformSanityCategory } from '@/sanity/lib/fetch'
import { CATEGORIES_QUERY } from '@/sanity/lib/queries'
import { CATEGORIES } from './categories'
import type { Category, CategorySlug } from '@/types/product'

/**
 * The set of category slugs that are valid for this project.
 * Any CMS category whose slug does NOT appear in this set
 * (e.g. a stale "girls-lehenga-choli" document) is filtered out,
 * preventing duplicate or overlapping entries in the Shop by Category section.
 */
const VALID_CATEGORY_SLUGS: ReadonlySet<CategorySlug> = new Set([
  "boys-ethnic-wear",
  "girls-ethnic-wear",
  "girls-party-wear",
  "boys-party-wear",
  "jackets-winter-wear",
]);

/**
 * Fetches all active categories from Sanity CMS.
 * 
 * BEHAVIOR:
 * - CMS not configured → use local fallback
 * - CMS configured with categories → use CMS data (source of truth)
 * - CMS configured but empty → return empty array
 * - CMS error → return empty array
 * 
 * SAFETY: Only categories with slugs in VALID_CATEGORY_SLUGS are returned.
 * This prevents stale/duplicate category documents in CMS from appearing.
 */
export async function getCategories(): Promise<Category[]> {
  const result = await fetchSanity<any[]>(CATEGORIES_QUERY, {})
  
  if (result.type === 'not-configured') {
    console.log('[Categories] Using local fallback data (CMS not configured)')
    return CATEGORIES
  }

  if (result.type === 'success') {
    console.log(`[Categories] Using CMS data (${result.data.length} categories)`)
    const transformed = result.data.map(transformSanityCategory)
    const filtered = transformed.filter((c: Category) => VALID_CATEGORY_SLUGS.has(c.slug as CategorySlug))
    if (filtered.length !== transformed.length) {
      console.warn(`[Categories] Filtered out ${transformed.length - filtered.length} invalid/duplicate category(ies) from CMS`)
    }
    return filtered
  }

  if (result.type === 'empty') {
    console.log('[Categories] CMS configured but empty')
    return []
  }

  console.error('[Categories] CMS fetch error')
  return []
}
