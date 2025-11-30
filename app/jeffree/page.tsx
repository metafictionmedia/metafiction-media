'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, BookOpen, Laugh } from 'lucide-react'

export default function JeffreePage() {
  return (
    <div className="min-h-screen py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold">
              Jeffrey the Monster
            </h1>
            <p className="text-xl text-foreground/70">
              Comic Strips & Graphic Novel Series
            </p>
          </div>

          <div className="bg-secondary/50 p-8 rounded-xl">
            <p className="text-lg text-center mb-4">
              A misunderstood teenage puppet-monster struggles to find his place at a new school
              where the most popular kid is the only other puppet, who is out to make Jeffrey&apos;s
              life miserable.
            </p>
            <div className="text-center">
              <Link
                href="https://jeffreythemonster.com"
                className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit jeffreythemonster.com for the full story
                <ExternalLink size={18} />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 border border-border rounded-xl space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Laugh className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Comic Strips</h2>
              </div>
              <p className="text-foreground/70">
                Follow Jeffrey&apos;s hilarious misadventures in bite-sized comic strip stories.
                New strips posted regularly!
              </p>
              <Link
                href="https://jeffreythemonster.com/comics"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read comic strips
                <ExternalLink size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 border border-border rounded-xl space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <BookOpen className="text-purple-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Graphic Novel</h2>
              </div>
              <p className="text-foreground/70">
                <span className="font-semibold">Talent Show Magic</span> - The full story across four parts.
                Part One releasing Early 2026.
              </p>
              <Link
                href="https://jeffreythemonster.com/story"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about the graphic novel
                <ExternalLink size={16} />
              </Link>
            </motion.div>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Interactive Experience Coming Soon</h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Experience Jeffrey&apos;s world like never before with our upcoming interactive
              app featuring full voiceover narration and stunning animations.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
