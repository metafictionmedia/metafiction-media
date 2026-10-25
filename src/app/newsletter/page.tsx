import type { Metadata } from 'next'
import { NewsletterForm } from '@/components/NewsletterForm'
import { PostIt } from '@/components/PostIt'

export const metadata: Metadata = { title: 'Newsletter | Metafiction Media' }

// Copy verbatim from the live /newsletter page.
export default function NewsletterPage() {
  return (
    <main className="page">
      <header className="page-head">
        <h1>Join the Metafiction Universe</h1>
        <p>Get exclusive updates, preorder bonuses, and early access</p>
      </header>

      <ul className="nl-perks">
        <PostIt as="li" tilt={-1.5}><h3>Exclusive Content</h3><p>Behind-the-scenes looks at our creative process</p></PostIt>
        <PostIt as="li" tilt={1.2} color="pink"><h3>Preorder Bonuses</h3><p>Special rewards for our early supporters</p></PostIt>
        <PostIt as="li" tilt={-0.7} color="green"><h3>Launch Updates</h3><p>Be first to know about new releases</p></PostIt>
      </ul>

      <NewsletterForm />

      <PostIt className="nl-drawing" tilt={0.8} color="blue">
        <h2>Limited Edition Drawing!</h2>
        <p>Sign up for our email list to be automatically entered into a drawing! <strong>Three (3) random winners</strong> will receive an exclusive, limited-edition script/concept art draft version of the book when they purchase the official graphic novel. This collector&apos;s edition includes the original script and rough panel artwork, revealing the creative journey from concept to final page. Winners who preorder will receive both items early, while all winners are guaranteed the limited edition draft regardless of when they purchase!</p>
      </PostIt>
    </main>
  )
}
