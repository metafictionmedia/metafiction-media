'use client'

import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { shopifyProducts } from '@/lib/shopify-products'
import Link from 'next/link'

export default function ProductPage() {
  const params = useParams()
  const slug = params.slug as string

  const product = shopifyProducts.find(p => p.slug === slug)

  useEffect(() => {
    if (!product) return

    // Load Shopify Buy Button SDK
    const script = document.createElement('script')
    script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
    script.async = true
    script.onload = () => initShopifyProduct()
    document.body.appendChild(script)

    function initShopifyProduct() {
      if (!window.ShopifyBuy || !window.ShopifyBuy.UI) {
        setTimeout(initShopifyProduct, 100)
        return
      }

      const client = window.ShopifyBuy.buildClient({
        domain: 'fkaakn-yd.myshopify.com',
        storefrontAccessToken: 'd9d8cc505f2ddcf4f7e5fa25779122eb',
      })

      window.ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: product!.shopifyId,
          node: document.getElementById(product!.componentId),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            product: {
              styles: {
                product: {
                  '@media (min-width: 601px)': {
                    'max-width': '100%',
                    'margin-left': '0',
                    'margin-bottom': '50px'
                  },
                  'text-align': 'left',
                  'background': 'transparent'
                },
                title: {
                  'font-size': '26px',
                  'color': '#1a1a1a'
                },
                button: {
                  'font-family': 'Lato, sans-serif',
                  'font-size': '18px',
                  'padding-top': '17px',
                  'padding-bottom': '17px',
                  ':hover': {
                    'background-color': '#9850af'
                  },
                  'background-color': '#a959c2',
                  ':focus': {
                    'background-color': '#9850af'
                  },
                  'border-radius': '12px',
                  'padding-left': '50px',
                  'padding-right': '50px'
                },
                quantityInput: {
                  'font-size': '18px',
                  'padding-top': '17px',
                  'padding-bottom': '17px'
                },
                price: {
                  'font-size': '18px',
                  'color': '#1a1a1a'
                },
                compareAt: {
                  'font-size': '15.299999999999999px',
                  'color': '#1a1a1a'
                },
                unitPrice: {
                  'font-size': '15.299999999999999px',
                  'color': '#1a1a1a'
                },
                description: {
                  'color': '#1a1a1a'
                }
              },
              layout: 'vertical',
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
                description: true
              },
              width: '100%',
              text: {
                button: 'Add to cart'
              },
              googleFonts: ['Lato']
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true
              },
              styles: {
                product: {
                  '@media (min-width: 601px)': {
                    'max-width': '100%',
                    'margin-left': '0px',
                    'margin-bottom': '0px'
                  }
                },
                button: {
                  'font-family': 'Lato, sans-serif',
                  'font-size': '18px',
                  'padding-top': '17px',
                  'padding-bottom': '17px',
                  ':hover': {
                    'background-color': '#9850af'
                  },
                  'background-color': '#a959c2',
                  ':focus': {
                    'background-color': '#9850af'
                  },
                  'border-radius': '12px',
                  'padding-left': '50px',
                  'padding-right': '50px'
                },
                title: {},
                price: {},
                description: {}
              },
              googleFonts: ['Lato'],
              text: {
                button: 'Add to cart'
              }
            },
            option: {
              styles: {
                label: {},
                select: {}
              }
            },
            cart: {
              styles: {
                button: {
                  'font-family': 'Lato, sans-serif',
                  'font-size': '18px',
                  'padding-top': '17px',
                  'padding-bottom': '17px',
                  ':hover': {
                    'background-color': '#9850af'
                  },
                  'background-color': '#a959c2',
                  ':focus': {
                    'background-color': '#9850af'
                  },
                  'border-radius': '12px'
                },
                cart: {
                  'background-color': '#243974'
                },
                footer: {
                  'background-color': '#243974'
                }
              },
              text: {
                total: 'Subtotal',
                button: 'Checkout'
              },
              googleFonts: ['Lato']
            },
            toggle: {
              styles: {
                toggle: {
                  'font-family': 'Lato, sans-serif',
                  'background-color': '#a959c2',
                  ':hover': {
                    'background-color': '#9850af'
                  },
                  ':focus': {
                    'background-color': '#9850af'
                  }
                }
              },
              googleFonts: ['Lato']
            }
          }
        })
      })
    }

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Product Not Found</h1>
          <Link href="/store" className="text-purple-600 hover:text-purple-700">
            Back to Store
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/store"
          className="inline-flex items-center text-foreground hover:text-purple-600 mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Store
        </Link>

        <div className="bg-card dark:bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <div id={product.componentId}></div>
        </div>
      </div>

      <style jsx global>{`
        .dark [id^="product-component"] .shopify-buy__product__title,
        .dark [id^="product-component"] .shopify-buy__product__price,
        .dark [id^="product-component"] .shopify-buy__product__variant-title,
        .dark [id^="product-component"] .shopify-buy__product__description,
        .dark [id^="product-component"] .shopify-buy__option-select__label,
        .dark [id^="product-component"] .shopify-buy__product__compare-at,
        .dark [id^="product-component"] .shopify-buy__product__unit-price {
          color: #ffffff !important;
        }
      `}</style>
    </div>
  )
}
