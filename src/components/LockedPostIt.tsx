import { PostIt } from './PostIt'
import { POSTIT_COPY } from '@/lib/copy'

/** The locked Meta Prompt Studio Post-it. Copy lives in src/lib/copy.ts and must stay verbatim. */
export function LockedPostIt({ className = '', tilt = -2 }: { className?: string; tilt?: number }) {
  return (
    <PostIt className={`locked-postit ${className}`} tilt={tilt}>
      <p className="postit-hook">{POSTIT_COPY.line1}</p>
      <p>{POSTIT_COPY.line2}</p>
      <p className="postit-when">{POSTIT_COPY.line3}</p>
    </PostIt>
  )
}
