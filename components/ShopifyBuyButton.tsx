'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    ShopifyBuy: any;
  }
}

interface ShopifyBuyButtonProps {
  productId: string;
  buttonText: string;
}

const ShopifyBuyButton = ({ productId, buttonText }: ShopifyBuyButtonProps) => {
  const componentId = `product-component-${productId}`;
  const hasInitialized = useRef(false);

  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    const scriptId = 'shopify-buy-sdk';

    const ShopifyBuyInit = () => {
      if (hasInitialized.current || !window.ShopifyBuy) {
        return;
      }

      const client = window.ShopifyBuy.buildClient({
        domain: 'fkaakn-yd.myshopify.com',
        storefrontAccessToken: 'd9d8cc505f2ddcf4f7e5fa25779122eb',
      });

      window.ShopifyBuy.UI.onReady(client).then((ui: any) => {
        const existingNode = document.getElementById(componentId);

        if (!existingNode || existingNode.childElementCount > 0) {
          return;
        }

        ui.createComponent('product', {
          id: productId,
          node: existingNode,
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": {
                "button": {
                  "font-family": "Lato, sans-serif",
                  "font-size": "18px",
                  "padding-top": "17px",
                  "padding-bottom": "17px",
                  ":hover": { "background-color": "#9850af" },
                  "background-color": "#a959c2",
                  ":focus": { "background-color": "#9850af" },
                  "border-radius": "12px",
                  "padding-left": "50px",
                  "padding-right": "50px"
                },
              },
              "contents": {
                "img": false,
                "title": false,
                "price": false,
                "button": false,
                "buttonWithQuantity": true,
              },
              "text": {
                "button": buttonText,
              },
              "googleFonts": ["Lato"]
            },
            "cart": {
              "styles": {
                "button": {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  ":hover": { "background-color": "#9850af" },
                  "background-color": "#a959c2",
                  ":focus": { "background-color": "#9850af" },
                  "border-radius": "14px"
                },
                "cart": { "background-color": "#243974" },
                "footer": { "background-color": "#243974" }
              },
              "text": { "total": "Subtotal", "button": "Checkout" },
              "googleFonts": ["Montserrat"]
            },
            "modalProduct": {
              "contents": { "img": false, "imgWithCarousel": true, "button": false, "buttonWithQuantity": true },
              "styles": {
                "button": {
                  "font-family": "Lato, sans-serif",
                  ":hover": { "background-color": "#9850af" },
                  "background-color": "#a959c2",
                  ":focus": { "background-color": "#9850af" },
                  "border-radius": "12px"
                },
              },
              "googleFonts": ["Lato"]
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "font-family": "Lato, sans-serif",
                  "background-color": "#a959c2",
                  ":hover": { "background-color": "#9850af" },
                  ":focus": { "background-color": "#9850af" }
                },
              },
              "googleFonts": ["Lato"]
            },
          },
        });
      });
      hasInitialized.current = true;
    };

    const scriptExists = document.getElementById(scriptId);

    if (!scriptExists) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = scriptURL;
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        window.dispatchEvent(new Event('shopify-script-loaded'));
      };
    }

    window.addEventListener('shopify-script-loaded', ShopifyBuyInit);

    return () => {
      window.removeEventListener('shopify-script-loaded', ShopifyBuyInit);
    };
  }, [productId, buttonText, componentId]);

  return <div id={componentId}></div>;
};

export default ShopifyBuyButton;
