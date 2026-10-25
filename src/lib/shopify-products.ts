// Product IDs from the live metafictionmedia.com store (metafiction-media repo, lib/shopify-products.ts).
export type ShopifyProduct = {
  id: string
  shopifyId: string
  componentId: string
  slug: string
}

export const SHOPIFY_DOMAIN = 'fkaakn-yd.myshopify.com'
// Public Storefront token (same one used by the live Buy Button embed).
export const SHOPIFY_STOREFRONT_TOKEN = 'd9d8cc505f2ddcf4f7e5fa25779122eb'

export const shopifyProducts: ShopifyProduct[] = [
  { id: '1', shopifyId: '7946056106063', componentId: 'product-component-1766127030674', slug: 'product-1' },
  { id: '2', shopifyId: '7946155688015', componentId: 'product-component-1766127233033', slug: 'product-2' },
  { id: '3', shopifyId: '7946171482191', componentId: 'product-component-1766127267731', slug: 'product-3' },
  { id: '4', shopifyId: '7947997773903', componentId: 'product-component-1766127296397', slug: 'product-4' },
  { id: '5', shopifyId: '7947999674447', componentId: 'product-component-1766127324581', slug: 'product-5' },
  { id: '6', shopifyId: '7949145047119', componentId: 'product-component-1766127355386', slug: 'product-6' },
  { id: '7', shopifyId: '7949466959951', componentId: 'product-component-1766167564136', slug: 'product-7' },
]

export type StorefrontProduct = {
  id: string
  title: string
  description: string
  featuredImage: { url: string; altText: string | null } | null
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } }
}

export async function fetchStorefrontProducts(): Promise<Record<string, StorefrontProduct>> {
  const ids = shopifyProducts.map((p) => `"gid://shopify/Product/${p.shopifyId}"`).join(',')
  const query = `{ nodes(ids:[${ids}]) { ... on Product { id title description featuredImage { url altText } priceRange { minVariantPrice { amount currencyCode } } } } }`
  const res = await fetch(`https://${SHOPIFY_DOMAIN}/api/2024-07/graphql.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN },
    body: JSON.stringify({ query }),
  })
  const json = await res.json()
  const out: Record<string, StorefrontProduct> = {}
  for (const node of json?.data?.nodes ?? []) {
    if (node?.id) out[node.id.split('/').pop()] = node
  }
  return out
}

/** Spelling lock: the character is always "Jeffrey" in visible site text (Shopify data may still say Jeffree). */
export function fixSpelling(text: string) {
  return text.replace(/Jeffree/g, 'Jeffrey').replace(/JEFFREE/g, 'JEFFREY')
}

export function formatPrice(amount: string, currency: string) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(Number(amount))
}

/** Shopify descriptions append a size table; keep the prose for the Post-it. */
export function shortDescription(desc: string, maxChars = 170) {
  const prose = fixSpelling(desc.split(/Size guide/i)[0].trim())
  if (prose.length <= maxChars) return prose
  const cut = prose.slice(0, maxChars)
  return cut.slice(0, cut.lastIndexOf(' ')) + '…'
}
