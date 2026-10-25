'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CutWindow } from '@/components/CutWindow'
import { PostIt } from '@/components/PostIt'
import { fetchStorefrontProducts, fixSpelling, formatPrice, shopifyProducts, shortDescription, type StorefrontProduct } from '@/lib/shopify-products'

const COLORS = ['yellow', 'pink', 'green', 'blue'] as const
const TILTS = [-1.8, 1.4, -0.9, 2, -1.2, 0.8, -1.6]

export default function StorePage() {
  const [data, setData] = useState<Record<string, StorefrontProduct> | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchStorefrontProducts().then(setData).catch(() => setError(true))
  }, [])

  return (
    <main className="page">
      <header className="page-head">
        <h1>The Metafiction Store</h1>
        <p>Wear your story. Live your meta.</p>
      </header>

      {error && <p role="alert">The store couldn&apos;t load right now. Please refresh.</p>}

      <ul className="store-grid">
        {shopifyProducts.map((p, i) => {
          const d = data?.[p.shopifyId]
          return (
            <li key={p.id}>
              <Link href={`/store/${p.slug}`} className="store-item" aria-label={d ? fixSpelling(d.title) : `Product ${p.id}`}>
                {d?.featuredImage ? (
                  <CutWindow src={d.featuredImage.url} alt={fixSpelling(d.featuredImage.altText || d.title)} cut={i} sizes="(max-width: 600px) 90vw, 30vw" />
                ) : (
                  <div className={`cut-window cut-${i % 4} skeleton`} style={{ aspectRatio: '1 / 1' }} />
                )}
                <PostIt tilt={TILTS[i % TILTS.length]} color={COLORS[i % COLORS.length]}>
                  <h2>{d ? fixSpelling(d.title) : '…'}</h2>
                  {d && <p className="price">{formatPrice(d.priceRange.minVariantPrice.amount, d.priceRange.minVariantPrice.currencyCode)}</p>}
                  {d && <p className="desc">{shortDescription(d.description)}</p>}
                  <p className="more">View Product</p>
                </PostIt>
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
