'use client'

import { motion } from 'framer-motion'
import { ContactForm } from '@/components/ContactForm'
import { Facebook, Instagram } from 'lucide-react'

export default function ContactPage() {
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
              Let Us <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl text-foreground/70">
              Have a story to tell? We are listening.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Follow Our Stories</h2>
                <p className="text-foreground/70 mb-6">
                  Join our community across social media for daily updates, 
                  behind-the-scenes content, and character takeovers.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-3">Metafiction Media</h3>
                    <div className="flex gap-4">
                      <a 
                        href="https://facebook.com/metafictionmedia" 
                        target="_blank"
                        className="p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                      >
                        <Facebook size={24} />
                      </a>
                      <a 
                        href="https://instagram.com/metafictionmedia" 
                        target="_blank"
                        className="p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                      >
                        <Instagram size={24} />
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Jeffree the Monster</h3>
                    <div className="flex gap-4">
                      <a 
                        href="https://facebook.com/jeffreethemonster" 
                        target="_blank"
                        className="p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                      >
                        <Facebook size={24} />
                      </a>
                      <a 
                        href="https://instagram.com/jeffreethemonster" 
                        target="_blank"
                        className="p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                      >
                        <Instagram size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-xl">
                <h3 className="font-semibold mb-2">Pro Tip</h3>
                <p className="text-sm text-foreground/70">
                  Follow both accounts for the full meta experience. Sometimes 
                  Jeffree takes over and... well, let us just say he has opinions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
