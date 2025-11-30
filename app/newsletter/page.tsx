'use client'

import { motion } from 'framer-motion'
import { NewsletterForm } from '@/components/NewsletterForm'
import { Sparkles, Gift, Zap } from 'lucide-react'

export default function NewsletterPage() {
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
              Join the <span className="text-gradient">Metafiction</span> Universe
            </h1>
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

          <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-center">Limited Edition Drawing!</h2>
            <p className="text-center max-w-2xl mx-auto text-foreground/80">
              Sign up for our email list to be automatically entered into a drawing! <span className="font-bold text-primary">Three (3) random winners</span> will receive an exclusive, limited-edition script/concept art draft version of the book when they purchase the official graphic novel. This collector&apos;s edition includes the original script and rough panel artwork, revealing the creative journey from concept to final page. Winners who preorder will receive both items early, while all winners are guaranteed the limited edition draft regardless of when they purchase!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
