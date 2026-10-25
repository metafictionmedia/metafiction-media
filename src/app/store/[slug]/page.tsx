'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { shopifyProducts, SHOPIFY_DOMAIN, SHOPIFY_STOREFRONT_TOKEN } from '@/lib/shopify-products'

const BTN = {
  'font-family': 'Helvetica Neue, Helvetica, Arial, sans-serif',
  'font-size': '16px',
  'padding-top': '15px',
  'padding-bottom': '15px',
  'background-color': '#1d1c1a',
  ':hover': { 'background-color': '#3a3833' },
  ':focus': { 'background-color': '#3a3833' },
  'border-radius': '6px',
}

// Same Shopify Buy Button (cart + checkout) as the live site, restyled for the sketchbook.
export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = shopifyProducts.find((p) => p.slug === slug)

  useEffect(() => {
    if (!product) return
    const script = document.createElement('script')
    script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
    script.async = true
    let cancelled = false
    const init = () => {
      if (cancelled) return
      if (!window.ShopifyBuy || !window.ShopifyBuy.UI) { setTimeout(init, 100); return }
      const node = document.getElementById(product.componentId)
      if (!node) return
      node.innerHTML = ''
      const client = window.ShopifyBuy.buildClient({ domain: SHOPIFY_DOMAIN, storefrontAccessToken: SHOPIFY_STOREFRONT_TOKEN })
      window.ShopifyBuy.UI.onReady(client).then((ui: any) => {
        ui.createComponent('product', {
          id: product.shopifyId,
          node,
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            product: {
              layout: 'vertical',
              width: '100%',
              contents: { img: false, imgWithCarousel: true, button: false, buttonWithQuantity: true, description: true },
              styles: {
                product: { '@media (min-width: 601px)': { 'max-width': '100%', 'margin-left': '0', 'margin-bottom': '20px' }, 'text-align': 'left' },
                title: { 'font-family': 'Helvetica Neue, Helvetica, Arial, sans-serif', 'font-size': '26px', color: '#1d1c1a' },
                price: { 'font-size': '18px', color: '#1d1c1a' },
                description: { color: '#1d1c1a' },
                button: BTN,
              },
              text: { button: 'Add to cart' },
            },
            cart: {
              styles: { button: BTN },
              text: { total: 'Subtotal', button: 'Checkout' },
            },
            toggle: { styles: { toggle: { 'background-color': '#1d1c1a', ':hover': { 'background-color': '#3a3833' } } } },
          },
        })
      })
    }
    script.onload = init
    document.body.appendChild(script)
    return () => {
      cancelled = true
      if (document.body.contains(script)) document.body.removeChild(script)
    }
  }, [product])

  if (!product) {
    return (
      <main className="page">
        <header className="page-head"><h1>Product Not Found</h1></header>
        <Link href="/store" className="ink-link">Back to Store</Link>
      </main>
    )
  }

  return (
    <main className="page">
      <p style={{ marginBottom: 24 }}><Link href="/store" className="ink-link">← Back to Store</Link></p>
      <div className="paper-card product-sheet">
        <div id={product.componentId} />
      </div>
    </main>
  )
}
