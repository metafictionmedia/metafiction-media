import type { Metadata } from 'next'
import { CutWindow } from '@/components/CutWindow'
import { PostIt } from '@/components/PostIt'

export const metadata: Metadata = { title: 'Our Story | Metafiction Media' }

// Bio text copied verbatim from the live https://www.metafictionmedia.com/story page.
const BIO = [
  'I have been writing since I was in high school and have been passionate about graphic novels since I was a kid, and more so after graduating art school from the Art Institute of Orange County, Costa Mesa. This story was actually inspired by a comedy sitcom spec screenplay I had written back in 2012 or so that was intended to be a live action adult comedy that blended a world like the Muppets with real life, imagining puppets as another type of people in the world with their own cultural uniqueness and quirks.',
  'In that original screenplay, the character of Smonty here was the protagonist there, named Monty. Jeffrey at the time was the antagonist, an over the hill famous puppet monster that children loved for his popular show that he starred in for over 10 years. Monty was a dreamer with plans of breaking into Hollywood with his naive ideals and optimism while Jeffrey was the guy who hated who he was and the kids who loved him, and wanted to go back to being the monster he always was: making horror movies where he was the Monster.',
  'Except his studio contract would not allow it, and he would make things difficult for his agent, whose name was Sam (she may or may not be the same Sam he meets here, it has yet to be determined). To keep him in line, she tasks her assistant Barry (who also may or may not be the same Barry here) to keep him in line, but Barry is not quite the strong minded person needed for that and Jeffrey tries to make everything as hard as possible for the both of them.',
  'Monty new roommate in the script was Sam best friend, and he tries to get him to introduce the two so he can make his great impression and get his foot in the door. It was a story that always stuck with me and when I had the idea to do a graphic novel now, one of the first ones to come up was: what if I focused on Jeffrey as a teenager before he gets to where he is in that script?',
  'One of his throwaway lines that seemed to stick with me was that he wrote a 1500 page autobiography that no one wanted to publish but that he quotes constantly to make his points and is always complaining that the studio stole it from him so they could water it down and turn it in to a children book that make him into this sweet funny character that is not him.',
  'And so I thought, what if I did that book, the story that IS the watered down version of his autobiography. So while this has taken a few detours on the way to becoming complete, the soul of that idea is still there beneath it all: this is the story of Jeffrey teenage years and actually happened.',
  'Is it the watered down kids version he hates though? Probably not. Is it his overwritten and pretentious 1500 page manuscript brought to life with artwork and panels? No way, that is ridiculous. It is more like an amalgamation of the two. It sticks closer to the truth of who he was and his story while avoiding the constant patting on the back and complaining about everyone else that take up most of the pages he whines about.',
]

const VISION = [
  { title: 'Expanded Universe', body: 'Building interconnected stories across multiple mediums, where characters from different properties can meet, clash, and collaborate.' },
  { title: 'Interactive Experiences', body: 'Developing apps and games that let audiences shape the stories, with characters who react to being part of your device.' },
  { title: 'Cross-Media Innovation', body: 'From animated shorts to live puppetry performances, we are exploring every medium to tell stories that could not exist anywhere else.' },
  { title: 'Community Building', body: 'Creating spaces where fans can contribute to the meta-narrative, because the best stories know their audience is watching.' },
]

const COLORS = ['yellow', 'pink', 'green', 'blue'] as const
const TILTS = [-1.6, 1.2, -0.8, 1.7, -1.3, 0.9, -1.9]

export default function StoryPage() {
  return (
    <main className="page">
      <header className="page-head">
        <h1>The Metafiction Story</h1>
        <p>Where stories become self-aware</p>
      </header>

      <div className="story-grid">
        <div className="story-photo">
          <CutWindow src="/assets/bio/phil-marquez-headshot.jpg" alt="Phil Marquez" cut={1} sizes="(max-width: 860px) 90vw, 40vw" priority />
          <PostIt tilt={2.2} color="pink">
            <h2>Phil Marquez</h2>
            <p>Owner &amp; Creative Director</p>
          </PostIt>
        </div>

        <div className="story-gallery">
          <CutWindow src="/assets/bio/phil-whiteboard.jpg" alt="Phil Marquez at a whiteboard covered in sketches" cut={3} sizes="(max-width: 860px) 80vw, 30vw" objectPosition="center 30%" />
          <CutWindow src="/assets/bio/phil-blazer.jpg" alt="Phil Marquez in a pinstripe blazer" cut={0} sizes="(max-width: 860px) 80vw, 30vw" objectPosition="center 25%" />
        </div>

        <div className="story-notes">
          <PostIt tilt={TILTS[0]}>
            <p>{BIO[0]}</p>
          </PostIt>

          {/* Collapsed by default so the page doesn't open on a long stack of notes. */}
          <details className="note-drawer">
            <summary>
              <span className="when-closed">Keep reading · {BIO.length} more notes</span>
              <span className="when-open">Show less</span>
            </summary>
            <ol className="postit-stack" aria-label="About, continued">
              {BIO.slice(1).map((para, i) => (
                <PostIt as="li" key={i} tilt={TILTS[(i + 1) % TILTS.length]} color={(i + 1) % 3 === 2 ? 'blue' : 'yellow'}>
                  <p>{para}</p>
                </PostIt>
              ))}
              <PostIt as="li" tilt={-1} color="green">
                <h2>Our Mission</h2>
                <p>To tell emotionally honest, creatively daring, and narratively layered stories across books, video, merchandise, and apps. We are building a universe where characters know they are characters, and stories embrace their own artifice.</p>
              </PostIt>
            </ol>
          </details>
        </div>
      </div>

      <section style={{ marginTop: 80 }} aria-labelledby="vision">
        <header className="page-head"><h1 id="vision" style={{ fontSize: 'clamp(36px,4.5vw,56px)' }}>Long-Term Vision</h1></header>
        <ul className="vision-grid">
          {VISION.map((v, i) => (
            <PostIt as="li" key={v.title} tilt={TILTS[(i + 2) % TILTS.length]} color={COLORS[i]}>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </PostIt>
          ))}
        </ul>
      </section>
    </main>
  )
}
