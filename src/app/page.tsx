import Link from 'next/link'
import { CutWindow } from '@/components/CutWindow'
import { LockedPostIt } from '@/components/LockedPostIt'
import { AppStoreBadge } from '@/components/AppStoreBadge'
import { MPS_HEADLINE, MPS_LABEL, TAGLINE } from '@/lib/copy'

export default function Home() {
  return (
    <main className="home">
      <div className="home-brand">
        <p className="home-company">Metafiction Media</p>
        <p className="home-tagline">{TAGLINE}</p>
      </div>

      <Link href="/meta-prompt-studio" className="home-window home-link" aria-label="Meta Prompt Studio">
      <CutWindow
        src="/assets/cut-window/desk-two-phones.jpg"
        alt="Two writers at a desk covered in sticky notes, with two phones showing Meta Prompt Studio"
        priority
        sizes="(max-width: 760px) 90vw, 72vw"
      />
      </Link>

      <section className="home-panel paper-card" aria-labelledby="mps-headline">
        <h1 id="mps-headline">{MPS_HEADLINE}</h1>
        <p className="label eyebrow">{MPS_LABEL}</p>
        <Link href="/meta-prompt-studio" className="home-link postit-link" aria-label="Meta Prompt Studio"><LockedPostIt /></Link>
      </section>

      <footer className="home-bottom">
        <Link href="/newsletter" className="ink-link">Newsletter</Link>
        <AppStoreBadge />
        <span className="spacer" />
        <Link href="/meta-prompt-studio" className="ink-link">Meta Prompt Studio →</Link>
      </footer>
    </main>
  )
}
