'use client'

import ShopifyBuyButton from './ShopifyBuyButton'
console.log('ShopifyBuyButton:', ShopifyBuyButton);
import { Product } from '@/lib/products'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function ProductCard({ product }: { product: Product }) {
  const [imageIndex, setImageIndex] = useState(0)
  const allImages = [product.primaryImage, ...(product.secondaryImages || [])]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div className="border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
        <div className="aspect-square relative overflow-hidden bg-secondary">
          <img 
            src={allImages[imageIndex].src} 
            alt={allImages[imageIndex].alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {allImages.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === imageIndex ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        <div className="p-6 space-y-4">
          <div>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
              product.category === 'jeffrey' 
                ? 'bg-primary/20 text-primary' 
                : 'bg-purple-600/20 text-purple-600'
            }`}>
              {product.category === 'jeffrey' ? 'Jeffree' : 'Yudi'}
            </span>
            <h3 className="text-xl font-semibold mt-3">{product.title}</h3>
          </div>
          <p className="text-sm text-foreground/70 line-clamp-3">
            {product.description}
          </p>
          <ShopifyBuyButton 
          productId={product.shopifyProductId} 
          buttonText={product.buttonText} 
          />
        </div>
      </div>
    </motion.div>
  )
}
