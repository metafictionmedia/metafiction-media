import { APP_STORE_URL } from '@/lib/copy'

/**
 * STUB: placeholder badge. Swap in Apple's official "Download on the App Store"
 * artwork and the real listing URL (APP_STORE_URL in src/lib/copy.ts) once the app is live.
 */
export function AppStoreBadge() {
  return (
    <a className="appstore-badge" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Meta Prompt Studio — App Store">
      <svg viewBox="0 0 17 20" width="16" height="19" aria-hidden="true" fill="currentColor">
        <path d="M14.1 10.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9C3.6 4.8 2 5.8 1.1 7.3c-1.9 3.2-.5 8 1.3 10.7.9 1.3 2 2.7 3.4 2.7 1.4-.1 1.9-.9 3.5-.9s2.1.9 3.5.9c1.5 0 2.4-1.3 3.3-2.6 1-1.5 1.4-2.9 1.5-3-.1 0-2.8-1.1-2.8-4.2l.3-.3zM11.5 3c.7-.9 1.2-2.1 1.1-3.3-1 0-2.3.7-3 1.6-.7.8-1.3 2-1.1 3.2 1.1.1 2.3-.6 3-1.5z"/>
      </svg>
      <span>App Store</span>
    </a>
  )
}
