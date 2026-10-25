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
  { src: '/assets/cut-window/phones-sticky-wall.jpg', alt: 'Two phones showing Meta Prompt Studio character cards in front of a wall of sticky notes', note: 'where the notes end up' },
  { src: '/assets/mps/pdf-page-02.jpg', alt: 'Meta Prompt Studio marketing page: The hardest part of writing isn’t the plot', note: 'the hard part' },
  { src: '/assets/mps/pdf-page-04.jpg', alt: 'Meta Prompt Studio marketing page: The three pillars of a complete psychological profile', note: 'three pillars, one profile' },
  { src: '/assets/mps/pdf-page-06.jpg', alt: 'Meta Prompt Studio marketing page: Your character, instantly assembled', note: 'the whole character at a glance' },
  { src: '/assets/mps/pdf-page-07.jpg', alt: 'Meta Prompt Studio marketing page: True narrative depth lives in contradictions', note: 'contradictions = depth' },
  { src: '/assets/mps/pdf-page-09.jpg', alt: 'Meta Prompt Studio marketing page: Don’t just build a character. Simulate their arc', note: 'follow the arc' },
  { src: '/assets/mps/pdf-page-14.jpg', alt: 'Meta Prompt Studio marketing page: Stop guessing. Start writing', note: 'then write' },
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
        {WINDOWS.map((w, i) => {
          const side = i % 2 === 0 ? 'left' : 'right'
          return (
            <figure key={w.src} className={`mps-frame mps-${side}`}>
              <CutWindow src={w.src} alt={w.alt} parallax={0.06} cut={i} fit={w.src.includes('/mps/') ? 'contain' : 'cover'} sizes="(max-width: 760px) 90vw, 82vw" />
              <MarginNote side={side} text={w.note} variant={i} />
              {i < WINDOWS.length - 1 && <Connector side={side} variant={i} />}
            </figure>
          )
        })}
      </div>

      <footer className="page-foot">
        <a href={MPS_SITE_URL} className="ink-link" target="_blank" rel="noopener noreferrer">metapromptstudio.app</a>
        <AppStoreBadge />
        <Link href="/newsletter" className="ink-link">Newsletter</Link>
      </footer>
    </main>
  )
}

/* ---- Sketchbook mark-up: pencil brackets, margin notes and connecting lines (decorative only) ---- */

const BRACKETS = [
  'M8 4 C2 4 4 18 4 30 C4 42 1 46 -3 50 C1 54 4 58 4 70 C4 82 2 96 8 96',
  'M7 3 C3 6 3 20 4 31 C5 43 2 47 -2 50 C2 53 5 59 4 69 C3 81 3 94 8 97',
]
const SCRIBBLES = [
  'M0 4 C10 1 20 7 30 3 S50 6 60 3',
  'M0 3 C12 6 22 0 34 4 S52 2 64 5',
  'M0 5 Q15 0 30 4 T62 3',
]

function MarginNote({ side, text, variant }: { side: 'left' | 'right'; text: string; variant: number }) {
  const arrow = side === 'left' ? '←' : '→'
  return (
    <figcaption className={`mps-note mps-note-${side}`} aria-hidden="true">
      <svg className="mps-bracket" viewBox="-6 0 16 100" preserveAspectRatio="none">
        <path d={BRACKETS[variant % BRACKETS.length]} vectorEffect="non-scaling-stroke" />
      </svg>
      <span className="mps-note-text">
        {side === 'left' ? <>{arrow} {text}</> : <>{text} {arrow}</>}
        <svg className="mps-scribble" viewBox="0 0 64 8" preserveAspectRatio="none">
          <path d={SCRIBBLES[variant % SCRIBBLES.length]} vectorEffect="non-scaling-stroke" />
        </svg>
      </span>
    </figcaption>
  )
}

function Connector({ side, variant }: { side: 'left' | 'right'; variant: number }) {
  // Drawn in a 0-100 box spanning the whole reel width; left windows hand off to the right and vice versa.
  const d = side === 'left'
    ? (variant % 4 === 0 ? 'M58 0 C60 30 52 45 66 58 S80 82 78 100' : 'M54 0 C50 28 64 40 62 60 S74 86 80 100')
    : (variant % 4 === 1 ? 'M44 0 C42 28 50 44 36 58 S22 84 22 100' : 'M48 0 C52 26 38 42 40 60 S28 86 20 100')
  return (
    <svg className={`mps-connector mps-connector-${side}`} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <path d={d} vectorEffect="non-scaling-stroke" />
    </svg>
  )
}
