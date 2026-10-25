import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { TopMenu } from '@/components/TopMenu'

const sans = Geist({ variable: '--font-sans', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Metafiction Media | Stories That Know They Are Stories',
  description: 'Give your characters a psychological spine. Meta Prompt Studio — character building tool. Coming to the App Store Nov 2026.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={sans.variable}>
        <TopMenu />
        {children}
      </body>
    </html>
  )
}
