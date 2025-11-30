import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start">
            <Image
              src="/assets/logo/metafiction-full-logo.png"
              alt="Metafiction Media Logo"
              width={120}
              height={40}
              className="dark:invert dark:brightness-75 dark:contrast-125"
            />
            <p className="text-sm text-foreground/60 mt-2">
              © {new Date().getFullYear()} Metafiction Media. All Rights Reserved.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="font-bold text-sm">Jeffrey:</span>
              <a
                href="https://instagram.com/jeffreythemonster"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jeffrey the Monster Instagram"
                className="hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com/jeffreythemonster"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jeffrey the Monster Facebook"
                className="hover:text-primary transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-bold text-sm">Metafiction:</span>
              <a
                href="https://instagram.com/metafictionmedia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Metafiction Media Instagram"
                className="hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com/metafictionmedia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Metafiction Media Facebook"
                className="hover:text-primary transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
