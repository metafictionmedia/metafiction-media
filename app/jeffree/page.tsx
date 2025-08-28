'use client'

import { NewsletterForm } from '@/components/NewsletterForm'
import { Sparkles, Gift, Zap } from 'lucide-react'
import { ImageModal } from '../../components/ui/ImageModal'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight } from 'lucide-react'

const images = [
  '/assets/jeffree/artwork-1.jpg',
  '/assets/jeffree/artwork-2.jpg',
  '/assets/jeffree/artwork-3.jpg',
  '/assets/jeffree/artwork-4.jpg',
]

export default function JeffreePage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [modalImage, setModalImage] = useState<string | null>(null)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold">
              Jeffree the Monster
            </h1>
            <p className="text-2xl text-gradient font-semibold">
              Talent Show Magic
            </p>
            <p className="text-sm text-foreground/60">
              Part 1: Nov-Dec 2025 | Parts 2-4: 2026
            </p>
          </div>

          <div className="bg-secondary/50 p-8 rounded-xl">
            <p className="text-lg italic text-center">
              A misunderstood teenage puppet-monster struggles to find his place at a new school 
              where the most popular kid is the only other puppet, who is out to make Jeffrey 
              life miserable. His only friend, Barry, lives next door and together they have to 
              put together a Talent Show set or risk having their reputation forever stained.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-secondary">
           <img 
  src={images[currentImage]} 
  alt={`Jeffree the Monster artwork ${currentImage + 1}`}
  className="w-full h-full object-contain bg-secondary cursor-pointer"
  onClick={() => setModalImage(images[currentImage])}
/>
            </div>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full glassmorphism hover:bg-white/20 transition-colors"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full glassmorphism hover:bg-white/20 transition-colors"
            >
              <ChevronRight />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImage ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Coming Soon</h2>
              <p className="text-foreground/70">
                Experience Jeffree world like never before with our upcoming interactive 
                app featuring full voiceover narration and stunning animations. Every page 
                comes alive as Jeffree navigates the chaos of teenage monster life.
              </p>
              <Link 
                href="https://jeffreythemonster.com" 
                className="inline-flex items-center gap-2 text-primary hover:underline"
                target="_blank"
              >
                Visit the full Jeffree website
                <ExternalLink size={16} />
              </Link>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Preorder Bonus</h2>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Exclusive PDF coloring book featuring never-before-seen character art</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Ultra Limited Edition script/sketch version of the book</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Early access to the interactive app beta</span>
                </li>
              </ul>
            </div>
          </div>

{/* Newsletter Signup Section */}
<div className="space-y-12">
  <div className="text-center space-y-4">
    <h2 className="text-4xl font-bold">
      Join the <span className="text-gradient">Metafiction</span> Universe
    </h2>
    <p className="text-xl text-foreground/70">
      Get exclusive updates, preorder bonuses, and early access
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8 mb-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-center space-y-3"
    >
      <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
        <Sparkles className="text-primary" />
      </div>
      <h3 className="font-semibold">Exclusive Content</h3>
      <p className="text-sm text-foreground/60">Behind-the-scenes looks at our creative process</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-center space-y-3"
    >
      <div className="w-16 h-16 mx-auto bg-purple-600/20 rounded-full flex items-center justify-center">
        <Gift className="text-purple-600" />
      </div>
      <h3 className="font-semibold">Preorder Bonuses</h3>
      <p className="text-sm text-foreground/60">Special rewards for our early supporters</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="text-center space-y-3"
    >
      <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
        <Zap className="text-primary" />
      </div>
      <h3 className="font-semibold">Launch Updates</h3>
      <p className="text-sm text-foreground/60">Be first to know about new releases</p>
    </motion.div>
  </div>

  <NewsletterForm />

  <div className="p-8 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-2xl">
    <h3 className="text-2xl font-bold mb-4 text-center">Preorder Bonus Preview</h3>
    <ul className="space-y-3 max-w-2xl mx-auto">
      <li className="flex items-start gap-3">
        <span className="text-primary mt-1">✓</span>
        <span>Exclusive PDF coloring book featuring all main characters</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-primary mt-1">✓</span>
        <span>Limited edition script/sketch versions of upcoming books</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-primary mt-1">✓</span>
        <span>Early beta access to interactive apps and games</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-primary mt-1">✓</span>
        <span>Monthly creative insights from Phil Marquez</span>
      </li>
    </ul>
  </div>
</div>
          <div className="text-center">
            <Link 
              href="/store" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Shop Jeffree Merch
              <ArrowRight />
            </Link>
          </div>
            <ImageModal
            isOpen={!!modalImage}
            onClose={() => setModalImage(null)}
            src={modalImage || ''}
            alt="Jeffree artwork"
          />
        </motion.div>
      </div>
    </div>
  )
}
