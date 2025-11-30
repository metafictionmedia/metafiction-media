'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface BTSPost {
  id: string;
  title: string;
  content: string;
  media_url: string;
  media_type: 'image' | 'video';
  post_date: string;
}

export default function BehindTheScenesPage() {
  const [btsItems, setBtsItems] = useState<BTSPost[]>([])

  useEffect(() => {
    const fetchBTS = async () => {
      try {
        // This will read all BTS files from the automation-generated folder
        const response = await fetch('/api/bts-posts')
        if (response.ok) {
          const data = await response.json()
          setBtsItems(data)
        }
      } catch {
        console.log('BTS content not yet available')
      }
    }
    fetchBTS()
  }, [])

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Behind the Scenes</h1>
          <p className="text-lg text-foreground/70">
            Get an inside look at the creative process behind MetaFiction Media
          </p>
        </motion.div>

        {/* Newspaper-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {btsItems.length > 0 ? (
            btsItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/behind-the-scenes/${item.id}`}>
                  <div className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
                    <div className="aspect-video relative overflow-hidden bg-secondary">
                      <img
                        src={item.media_url}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-foreground/70 line-clamp-3">
                        {item.content}
                      </p>
                      <p className="text-xs text-foreground/50 mt-2">
                        {new Date(item.post_date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-foreground/50">Behind the scenes content will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}