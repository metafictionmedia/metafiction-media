import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  color?: 'yellow' | 'pink' | 'green' | 'blue'
  tilt?: number
  className?: string
  as?: 'div' | 'article' | 'li'
}

export function PostIt({ children, color = 'yellow', tilt = -1.5, className = '', as: Tag = 'div' }: Props) {
  return (
    <Tag className={`postit postit-${color} ${className}`} style={{ ['--tilt' as string]: `${tilt}deg` }}>
      {children}
    </Tag>
  )
}
