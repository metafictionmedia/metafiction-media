import type { Metadata } from 'next'
import { CutWindow } from '@/components/CutWindow'
import { PostIt } from '@/components/PostIt'

export const metadata: Metadata = { title: 'In Development | Metafiction Media' }

// In Development contains ONLY Jeffrey. Copy is verbatim from the live /jeffree page.
export default function DevelopmentPage() {
  return (
    <main className="page">
      <header className="page-head">
        <h1>In Development</h1>
      </header>

      <article className="dev-project" aria-labelledby="jeffrey">
        <CutWindow src="/assets/jeffrey/jeffreymain.jpg" alt="Jeffrey the Monster" cut={2} sizes="(max-width: 860px) 90vw, 55vw" priority />

        <div className="dev-notes">
          <PostIt tilt={-1.4}>
            <h2 id="jeffrey">Jeffrey the Monster</h2>
            <p className="eyebrow">Comic Strips &amp; Graphic Novel Series</p>
            <p>A misunderstood teenage puppet-monster struggles to find his place at a new school where the most popular kid is the only other puppet, who is out to make Jeffrey&apos;s life miserable.</p>
            <p><a href="https://jeffreythemonster.com" target="_blank" rel="noopener noreferrer">Visit jeffreythemonster.com for the full story ↗</a></p>
          </PostIt>

          <PostIt tilt={1.3} color="pink">
            <h3>Comic Strips</h3>
            <p>Follow Jeffrey&apos;s hilarious misadventures in bite-sized comic strip stories. New strips posted regularly!</p>
            <p><a href="https://jeffreythemonster.com/comics" target="_blank" rel="noopener noreferrer">Read comic strips ↗</a></p>
          </PostIt>

          <PostIt tilt={-0.8} color="blue">
            <h3>Graphic Novel</h3>
            <p><strong>Talent Show Magic</strong> - The full story across four parts. Part One releasing Early 2026.</p>
            <p><a href="https://jeffreythemonster.com/story" target="_blank" rel="noopener noreferrer">Learn more about the graphic novel ↗</a></p>
          </PostIt>

          <PostIt tilt={1.8} color="green">
            <h3>Interactive Experience Coming Soon</h3>
            <p>Experience Jeffrey&apos;s world like never before with our upcoming interactive app featuring full voiceover narration and stunning animations.</p>
          </PostIt>
        </div>
      </article>
    </main>
  )
}
