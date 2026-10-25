'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/story', label: 'Our Story' },
  { href: '/meta-prompt-studio', label: 'Meta Prompt Studio' },
  { href: '/development', label: 'In Development' },
  { href: '/store', label: 'Store' },
  { href: '/newsletter', label: 'Newsletter' },
]

export function TopMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="topbar">
      <Link href="/" className="topbar-logo" aria-label="Metafiction Media home">
        <Image src="/assets/logo/metafiction-full-logo.png" alt="Metafiction Media" width={120} height={128} priority />
      </Link>
      <div className={`pulltab-wrap${open ? ' is-open' : ''}`}>
        <nav id="site-menu" className="pulltab-sheet" aria-hidden={!open}>
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} tabIndex={open ? 0 : -1} className={pathname === l.href ? 'is-current' : undefined}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button type="button" className="pulltab" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen((o) => !o)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  )
}
