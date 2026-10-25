'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

type Props = {
  src: string
  alt: string
  className?: string
  /** 0 = static. Positive values move the image inside the window as the page scrolls. */
  parallax?: number
  priority?: boolean
  sizes?: string
  /** Variation of the hand-cut edge (0-3). */
  cut?: number
  objectPosition?: string
  /** 'contain' keeps a full page (e.g. a marketing PDF page) readable; the paper hole reveals dark backing as it drifts. */
  fit?: 'cover' | 'contain'
}

/** A hole cut through the paper; the image sits behind the page. */
export function CutWindow({ src, alt, className = '', parallax = 0, priority, sizes = '75vw', cut = 0, objectPosition, fit = 'cover' }: Props) {
  const frame = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!parallax || !frame.current || !inner.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const update = () => {
      raf = 0
      const f = frame.current, i = inner.current
      if (!f || !i) return
      const r = f.getBoundingClientRect()
      const vh = window.innerHeight
      // -1 when the window enters from the bottom, +1 when it leaves at the top
      const progress = Math.max(-1, Math.min(1, (vh / 2 - (r.top + r.height / 2)) / (vh / 2 + r.height / 2)))
      i.style.transform = `translate3d(0, ${(progress * parallax * r.height).toFixed(1)}px, 0)`
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [parallax])

  return (
    <div ref={frame} className={`cut-window cut-${cut % 4} ${className}`}>
      <div ref={inner} className={`cut-window-inner${parallax ? ' has-parallax' : ''}`}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} style={{ objectFit: fit, objectPosition }} />
      </div>
    </div>
  )
}
