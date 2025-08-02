'use client'

import { motion } from 'framer-motion'
import { ProductCard } from '@/components/ProductCard'
import { storeProducts } from '@/lib/products'
import { useState } from 'react'

export default function StorePage() {
  const [filter, setFilter] = useState<'all' | 'jeffrey' | 'yudy'>('all')

  const filteredProducts = filter === 'all' 
    ? storeProducts 
    : storeProducts.filter(p => p.category === filter)

  return (
    <div className="min-h-screen py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold">
              The <span className="text-gradient">Metafiction</span> Store
            </h1>
            <p className="text-xl text-foreground/70">
              Wear your story. Live your meta.
            </p>
          </div>

          <div className="flex justify-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === 'all' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setFilter('jeffrey')}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === 'jeffrey' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              Jeffree
            </button>
            <button
              onClick={() => setFilter('yudy')}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === 'yudy' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              Yudi
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
