import type { Metadata } from 'next'
import Link from 'next/link'
import { CutWindow } from '@/components/CutWindow'
import { LockedPostIt } from '@/components/LockedPostIt'
import { AppStoreBadge } from '@/components/AppStoreBadge'
import { MPS_HEADLINE, MPS_LABEL, MPS_SITE_URL } from '@/lib/copy'

export const metadata: Metadata = { title: 'Meta Prompt Studio | Metafiction Media' }

// Each window shows a different image. Marketing PDF pages were picked to avoid any
// storage / privacy / pricing / "available now" claims (PDF pages 1, 11, 12, 15 excluded).
const WINDOWS = [
  { src: '/assets/cut-window/phones-sticky-wall.jpg', alt: 'Two phones showing Meta Prompt Studio character cards in front of a wall of sticky notes' },
  { src: '/assets/mps/pdf-page-02.jpg', alt: 'Meta Prompt Studio marketing page: The hardest part of writing isn’t the plot' },
  { src: '/assets/mps/pdf-page-04.jpg', alt: 'Meta Prompt Studio marketing page: The three pillars of a complete psychological profile' },
  { src: '/assets/mps/pdf-page-06.jpg', alt: 'Meta Prompt Studio marketing page: Your character, instantly assembled' },
  { src: '/assets/mps/pdf-page-07.jpg', alt: 'Meta Prompt Studio marketing page: True narrative depth lives in contradictions' },
  { src: '/assets/mps/pdf-page-09.jpg', alt: 'Meta Prompt Studio marketing page: Don’t just build a character. Simulate their arc' },
  { src: '/assets/mps/pdf-page-14.jpg', alt: 'Meta Prompt Studio marketing page: Stop guessing. Start writing' },
]

export default function MetaPromptStudioPage() {
  return (
    <main className="page">
      <section className="mps-intro">
        <div className="page-head">
          <h1>{MPS_HEADLINE}</h1>
          <p className="label eyebrow">{MPS_LABEL}</p>
        </div>
        <LockedPostIt tilt={2} />
      </section>

      <div className="mps-reel">
        {WINDOWS.map((w, i) => (
          <CutWindow key={w.src} src={w.src} alt={w.alt} parallax={0.06} cut={i} fit={w.src.includes('/mps/') ? 'contain' : 'cover'} sizes="(max-width: 760px) 90vw, 82vw" />
        ))}
      </div>

      <footer className="page-foot">
        <a href={MPS_SITE_URL} className="ink-link" target="_blank" rel="noopener noreferrer">metapromptstudio.app</a>
        <AppStoreBadge />
        <Link href="/newsletter" className="ink-link">Newsletter</Link>
      </footer>
    </main>
  )
}
