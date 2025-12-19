'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { shopifyProducts } from '@/lib/shopify-products'

export default function StorePage() {
  useEffect(() => {
    let isInitialized = false

    // Load Shopify Buy Button SDK
    const script = document.createElement('script')
    script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
    script.async = true
    script.onload = () => initShopifyPreviews()
    document.body.appendChild(script)

    function initShopifyPreviews() {
      if (isInitialized) return
      if (!window.ShopifyBuy || !window.ShopifyBuy.UI) {
        setTimeout(initShopifyPreviews, 100)
        return
      }

      isInitialized = true

      const client = window.ShopifyBuy.buildClient({
        domain: 'fkaakn-yd.myshopify.com',
        storefrontAccessToken: 'd9d8cc505f2ddcf4f7e5fa25779122eb',
      })

      window.ShopifyBuy.UI.onReady(client).then(function (ui: any) {
        shopifyProducts.forEach((product) => {
          const node = document.getElementById(`preview-${product.componentId}`)
          if (!node) return

          // Skip if already loaded
          if (node.hasAttribute('data-shopify-loaded')) return
          node.setAttribute('data-shopify-loaded', 'true')

          ui.createComponent('product', {
            id: product.shopifyId,
            node: node,
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
              product: {
                iframe: false,
                contents: {
                  img: true,
                  imgWithCarousel: false,
                  title: true,
                  price: true,
                  description: false,
                  button: false,
                  buttonWithQuantity: false,
                  quantity: false
                },
                styles: {
                  product: {
                    '@media (min-width: 601px)': {
                      'max-width': '100%',
                      'margin-left': '0',
                      'margin-bottom': '0'
                    },
                    'text-align': 'center'
                  },
                  img: {
                    'width': '100%',
                    'height': 'auto'
                  },
                  imgWrapper: {
                    'width': '100%'
                  },
                  button: {
                    'display': 'none'
                  },
                  title: {
                    'font-size': '20px',
                    'font-weight': 'bold',
                    'margin-top': '16px',
                    'margin-bottom': '8px',
                    'color': '#ffffff'
                  },
                  price: {
                    'font-size': '18px',
                    'color': '#ffffff',
                    'margin-bottom': '16px'
                  }
                },
                text: {
                  button: 'View Product'
                }
              }
            }
          })
        })
      })
    }

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
              The <span className="text-gradient">Metafiction</span> Store
            </h1>
            <p className="text-xl text-foreground">
              Wear your story. Live your meta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shopifyProducts.map((product) => (
              <Link
                key={product.id}
                href={`/store/${product.slug}`}
                className="group"
              >
                <div className="bg-card dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
                  {/* Product preview - Shopify will load image, title, and price here */}
                  <div
                    id={`preview-${product.componentId}`}
                    className="shopify-product-preview"
                  ></div>

                  <div className="p-6">
                    <div className="text-center">
                      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                        View Product
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .shopify-product-preview button,
        .shopify-product-preview .shopify-buy__btn-wrapper,
        .shopify-product-preview .shopify-buy__quantity-container,
        .shopify-product-preview .shopify-buy__carousel-button,
        .shopify-product-preview .shopify-buy__carousel-next,
        .shopify-product-preview .shopify-buy__carousel-previous,
        .shopify-product-preview svg,
        .shopify-product-preview [class*="carousel"],
        .shopify-product-preview [class*="arrow"],
        .shopify-product-preview [class*="button"] {
          display: none !important;
        }
        .shopify-product-preview .shopify-buy__product__variant-selectors,
        .shopify-product-preview .shopify-buy__option-select-wrapper {
          display: none !important;
        }
      `}</style>
    </div>
  )
}

declare global {
  interface Window {
    ShopifyBuy: any
  }
}
