'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
            <div className="flex justify-center">
              <img 
              src="/assets/logo/metafiction-full-logo.png" 
               alt="Metafiction Media" 
                className="w-full max-w-xl lg:max-w-2xl h-auto dark:invert dark:brightness-75 dark:contrast-125"
                />
                </div>
              <p className="text-xl lg:text-2xl text-foreground/80 font-light">
                Stories That Know They Are Stories
              </p>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Premium creative technology company crafting emotionally honest, 
              creatively daring stories across books, video, merchandise, and apps.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/jeffree" 
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2 hover:gap-4 transition-all"
              >
                Explore Jeffree World
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/store" 
                className="px-8 py-4 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                Shop Merch
              </Link>
              <Link 
                href="/newsletter" 
                className="px-8 py-4 border border-border rounded-lg font-medium hover:bg-secondary transition-colors flex items-center gap-2"
              >
                <Sparkles size={16} />
                Join Our List
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-purple-600/20 p-1">
              <img 
                src="/assets/jeffree/hero-artwork.jpg" 
                alt="Jeffree the Monster" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary to-purple-600 rounded-full blur-3xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
