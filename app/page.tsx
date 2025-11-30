'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'
import ComicShowcase from '@/components/ComicShowcase'
import { comicStrips } from '@/lib/comics'

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date?: string;
  image?: string;
  videoUrl?: string;
  embedUrl?: string;
  linkUrl?: string;
}

function NewsFeed() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/content/news-feed/main-feed.json')
        if (response.ok) {
          const data = await response.json()
          setNewsItems(data.slice(0, 3)) // Show only 3 items since it's in sidebar
        }
      } catch (error) {
        console.log('News feed not yet available')
      }
    }
    fetchNews()
  }, [])

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Latest News</h3>
      <div className="space-y-2 min-h-[120px] border border-border rounded-lg p-4">
        {newsItems.length > 0 ? (
          newsItems.map((item, index) => (
            <div
              key={index}
              className="p-3 border border-border rounded-lg hover:bg-secondary transition-colors"
            >
              {item.image && (
                <div className="relative w-full h-32 mb-2 rounded overflow-hidden">
                  <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
                </div>
              )}
              {item.videoUrl && (
                <div className="mb-2">
                  <video controls className="w-full rounded" preload="metadata">
                    <source src={item.videoUrl} type="video/mp4" />
                  </video>
                </div>
              )}
              {item.embedUrl && (
                <div className="mb-2">
                  <iframe
                    src={item.embedUrl}
                    className="w-full h-48 rounded"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              )}
              <h4 className="font-medium text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-foreground/70">{item.excerpt}</p>
              {item.linkUrl && (
                <a
                  href={item.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 text-primary hover:underline text-xs font-semibold"
                >
                  View More →
                </a>
              )}
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-full text-foreground/50">
            <p className="text-sm">News updates will appear here</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Company Slogan - Above everything */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-center mb-12"
>
  <p className="text-xl lg:text-2xl text-foreground/80 font-light">
    Stories That Know They Are Stories
  </p>
</motion.div>
        {/* News Feed Section */}

        {/* Original Grid Layout */}
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
              <NewsFeed />
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
            className="relative h-[600px]"
          >
            <ComicShowcase comics={comicStrips} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}