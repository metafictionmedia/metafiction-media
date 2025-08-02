import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold">Metafiction Media</h3>
            <p className="text-sm text-foreground/60">
              Stories That Know They Are Stories
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/jeffree" className="text-sm text-foreground/60 hover:text-foreground">Jeffree</Link></li>
              <li><Link href="/development" className="text-sm text-foreground/60 hover:text-foreground">In Development</Link></li>
              <li><Link href="/store" className="text-sm text-foreground/60 hover:text-foreground">Store</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="/newsletter" className="text-sm text-foreground/60 hover:text-foreground">Newsletter</Link></li>
              <li><Link href="/contact" className="text-sm text-foreground/60 hover:text-foreground">Contact</Link></li>
              <li><Link href="/story" className="text-sm text-foreground/60 hover:text-foreground">Our Story</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Follow Us</h4>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com/metafictionmedia" 
                target="_blank"
                className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com/metafictionmedia" 
                target="_blank"
                className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-foreground/60">
            © 2025 Metafiction Media. All stories reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
