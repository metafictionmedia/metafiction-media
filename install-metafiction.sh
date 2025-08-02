#!/bin/bash

# Install dependencies
echo "Installing dependencies..."
npm install framer-motion lucide-react @radix-ui/react-switch clsx tailwind-merge
npm install -D tailwindcss postcss autoprefixer @types/node

# Initialize Tailwind CSS
npx tailwindcss init -p

# Create directory structure
mkdir -p app/{story,jeffree,development,store,newsletter,contact}
mkdir -p components
mkdir -p lib
mkdir -p public/images

# Create tailwind.config.ts
cat > tailwind.config.ts << 'EOF'
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
          foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          foreground: 'rgb(var(--accent-foreground) / <alpha-value>)',
        },
        border: 'rgb(var(--border) / <alpha-value>)',
        ring: 'rgb(var(--ring) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
EOF

# Create postcss.config.js
cat > postcss.config.js << 'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# Create app/globals.css
cat > app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 255 255 255;
    --foreground: 10 10 10;
    --card: 255 255 255;
    --card-foreground: 10 10 10;
    --primary: 99 102 241;
    --primary-foreground: 255 255 255;
    --secondary: 244 244 245;
    --secondary-foreground: 10 10 10;
    --accent: 99 102 241;
    --accent-foreground: 255 255 255;
    --border: 229 231 235;
    --ring: 99 102 241;
  }

  .dark {
    --background: 10 10 10;
    --foreground: 250 250 250;
    --card: 20 20 20;
    --card-foreground: 250 250 250;
    --primary: 129 140 248;
    --primary-foreground: 10 10 10;
    --secondary: 30 30 30;
    --secondary-foreground: 250 250 250;
    --accent: 129 140 248;
    --accent-foreground: 10 10 10;
    --border: 40 40 40;
    --ring: 129 140 248;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}

@layer utilities {
  .glassmorphism {
    @apply backdrop-blur-xl bg-white/70 dark:bg-black/70 border border-white/20 dark:border-white/10;
  }
  
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600;
  }
}
EOF

# Create lib/utils.ts
cat > lib/utils.ts << 'EOF'
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
EOF

# Create lib/products.ts
cat > lib/products.ts << 'EOF'
export type Product = {
  id: string;
  category: 'jeffrey' | 'yudy';
  title: string;
  description: string;
  primaryImage: {
    src: string;
    alt: string;
  };
  secondaryImages?: {
    src: string;
    alt: string;
  }[];
  shopifyProductId: string;
  buttonText: string;
};

export const storeProducts: Product[] = [
  {
    id: 'jeffrey_tshirt_fine',
    category: 'jeffrey',
    title: 'Jeffree Is Fine T-Shirt',
    description: 'He is fine. Totally fine. Everything is F I N E. This shirt captures the exact moment when Jeffree—the monster, the myth, the emotional wildfire—decided to stop explaining himself and just vibe through the spiral. Simple. Sad. Unbothered. Possibly dissociating. Perfect for: Kids who bottle it up like pros Adults who used to be those kids Anyone whose default setting is internally screaming Pairs well with: 🔥 Unsolicited advice 🔥 Overdue therapy 🔥 That one group project where someone catches on fire Wear it to let the world know: You are Jeffree. You are fine. But mostly, you are done.',
    primaryImage: {
      src: '/users/Phil/devprojects/github/assets/products/jeffree-is-fine-mockup-1.jpg',
      alt: 'The Jeffree Is Fine T-Shirt mockup with three shirts in red, blue, and black.'
    },
    secondaryImages: [
      { src: '/users/Phil/devprojects/github/assets/products/jeffree-is-fine-female-1.jpg', alt: 'A female model wearing the Jeffree Is Fine T-Shirt.' },
      { src: '/users/Phil/devprojects/github/assets/products/jeffree-is-fine-female-2.jpg', alt: 'A second female model wearing the Jeffree Is Fine T-Shirt.' }
    ],
    shopifyProductId: '7810969665615',
    buttonText: 'I need this.'
  },
  {
    id: 'jeffrey_tshirt_made_sense',
    category: 'jeffrey',
    title: 'Jeffrey the Monster: I Swear It Made Sense in My Head T-Shirt',
    description: 'The official uniform of people who overthink out loud. Straight from the fur-covered mind of Jeffree the Monster comes this painfully relatable masterpiece. Whether you are defending your latest impulse decision or explaining why your group project robot has pyrotechnics, this shirt says what you meant to say—just... better. Soft. Honest. Slightly unhinged. Just like Jeffree. Perfect for: Monster kids with main character energy Creatives, overthinkers, and last-word-havers Anyone who has ever said wait, hear me out before chaos ensued You could explain it... or you could just point to the shirt.',
    primaryImage: {
      src: '/users/Phil/devprojects/github/assets/products/jeffree-swear-it-made-sense-mockup-1.jpg',
      alt: 'The I Swear It Made Sense in My Head T-Shirt mockup.'
    },
    secondaryImages: [
      { src: '/users/Phil/devprojects/github/assets/products/jeffree-swear-it-made-sense-mockup-2.jpg', alt: 'A second mockup of the I Swear It Made Sense T-Shirt.' },
      { src: '/users/Phil/devprojects/github/assets/products/jeffree-swear-it-made-sense-mockup-3.jpg', alt: 'A third mockup of the I Swear It Made Sense T-Shirt.' }
    ],
    shopifyProductId: '7810952003663',
    buttonText: 'Make it MINE'
  },
  {
    id: 'jeffrey_case_iphone_11',
    category: 'jeffrey',
    title: 'Jeffree the Monster Snap Phone Case (iPhone 11)',
    description: 'Protect your phone with a sarcastic puppet monster. This slim, durable snap case features Jeffree the Monster, your favorite puppet misfit, ready to guard your iPhone from drops, scratches, and life daily nonsense. Lightweight yet tough, it is perfect for: Surviving accidental coffee table swan dives Making your phone instantly 100% more huggable Subtly warning strangers you might also be fine Because nothing says chaotic charm like carrying a puppet monster in your pocket.',
    primaryImage: {
      src: '/users/Phil/devprojects/github/assets/products/jeffree-iphone-case-mockup.png',
      alt: 'The Jeffree the Monster iPhone snap case.'
    },
    secondaryImages: [],
    shopifyProductId: '7810986868815',
    buttonText: 'I call dibs'
  },
  {
    id: 'yudy_tshirt_shadow_pose',
    category: 'yudy',
    title: 'U-GA Unicorn Shadow Pose T-Shirt',
    description: 'Straight from the hoof of Yudi the Yogi Uni(corn). This is not just a shirt—it is a full-body exhale. Featuring all five signature U-GA shadow poses from Yudi the Yogi Uni(corn), this design is equal parts spiritual journey and accidental comedy. Whether you are finding your center or just trying to touch your toes without blacking out, this tee gets you. Ultra-soft. Unicorn-approved. Lightly ridiculous. Just how Yudi intended. Wear it to: Channel your inner mythical mess Confuse strangers at the farmer market Remind people that balance is subjective Find your U-GA. Even if you fall over doing it.',
    primaryImage: {
      src: '/users/Phil/devprojects/github/assets/products/uga-shadow-pose-mockup-1.jpg',
      alt: 'The U-GA Unicorn Shadow Pose T-Shirt mockup.'
    },
    secondaryImages: [
      { src: '/users/Phil/devprojects/github/assets/products/uga-shadow-pose-mockup-2.jpg', alt: 'A second mockup of the U-GA Unicorn Shadow Pose T-Shirt.' },
      { src: '/users/Phil/devprojects/github/assets/products/uga-shadow-pose-mockup-3.jpg', alt: 'A third mockup of the U-GA Unicorn Shadow Pose T-Shirt.' }
    ],
    shopifyProductId: '7810884730959',
    buttonText: 'I Shall Have It'
  },
  {
    id: 'yudy_tshirt_cobb',
    category: 'yudy',
    title: 'Unicorn on the Cobb T-Shirt',
    description: 'Half myth, half vegetable. 100% snack. What happens when majesty meets maize? You get Unicorn on the Cobb—the shirt you did not know you needed until you saw it and whispered, ...yes. This surreal culinary crossover brings together the elegance of a unicorn with the buttery joy of corn in a way that will have strangers double-taking in grocery aisles and farmers markets alike. Soft as silk. Weird as heck. Proudly unshucked. Perfect for: Corn lovers with commitment issues Magical beings who snack emotionally People who want to confuse and delight at the same time Warning: May attract raccoons and compliments.',
    primaryImage: {
      src: '/users/Phil/devprojects/github/assets/products/unicorn-on-the-cobb-mockup-1.jpg',
      alt: 'The Unicorn on the Cobb T-Shirt mockup.'
    },
    secondaryImages: [
      { src: '/users/Phil/devprojects/github/assets/products/unicorn-on-the-cobb-mockup-2.jpg', alt: 'A second mockup of the Unicorn on the Cobb T-Shirt.' },
      { src: '/users/Phil/devprojects/github/assets/products/unicorn-on-the-cobb-mockup-3.jpg', alt: 'A third mockup of the Unicorn on the Cobb T-Shirt.' }
    ],
    shopifyProductId: '7810929786959',
    buttonText: 'gimme gimme gimme!'
  },
  {
    id: 'yudy_blanket_pattern',
    category: 'yudy',
    title: 'U‑GA Pattern Throw Blanket',
    description: 'Yoga. But make it unicorn. Wrap yourself in the magical, stretchy chaos of U‑GA—the yoga practice of Yudi the Yogi Unicorn (coming soon to a kids book near you). This soft, cozy throw blanket features the full U‑GA unicorn pattern, perfect for: Movie nights that demand whimsical emotional support Mid‑pose naps (aka Shavasnooze) Showing guests you live with intention… and unicorns It is like a warm hug from a mythical creature who is very proud of your downward dog. Care tip: May inspire spontaneous stretching and/or glittery enlightenment.',
    primaryImage: {
      src: '/users/Phil/devprojects/github/assets/products/uga-pattern-throw-blanket-mockup.jpg',
      alt: 'The U-GA pattern throw blanket mockup.'
    },
    secondaryImages: [],
    shopifyProductId: '7811028680783',
    buttonText: 'Take my money!'
  }
];
EOF

# Create app/layout.tsx
cat > app/layout.tsx << 'EOF'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space'
})

export const metadata: Metadata = {
  title: 'Metafiction Media | Stories That Know They Are Stories',
  description: 'Premium creative technology company crafting emotionally honest, creatively daring stories across books, video, merchandise, and apps.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
EOF

# Create components/ThemeProvider.tsx
cat > components/ThemeProvider.tsx << 'EOF'
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const ThemeContext = createContext<{
  theme: Theme
  toggleTheme: () => void
}>({
  theme: 'light',
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const hour = new Date().getHours()
    const isDark = hour >= 19 || hour < 7
    setTheme(isDark ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
EOF

# Create components/Logo.tsx
cat > components/Logo.tsx << 'EOF'
export function Logo() {
  return (
    <div className="w-10 h-10 relative">
      <img 
        src="/users/Phil/devprojects/github/assets/logo/metafiction-logo.png" 
        alt="Metafiction Media" 
        className="w-full h-full object-contain"
      />
    </div>
  )
}
EOF

# Create components/Navigation.tsx
cat > components/Navigation.tsx << 'EOF'
'use client'

import Link from 'next/link'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/story', label: 'Our Story' },
  { href: '/jeffree', label: 'Jeffree' },
  { href: '/development', label: 'In Development' },
  { href: '/store', label: 'Store' },
  { href: '/newsletter', label: 'Newsletter' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glassmorphism"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}
EOF

# Create components/ThemeToggle.tsx
cat > components/ThemeToggle.tsx << 'EOF'
'use client'

import { useTheme } from './ThemeProvider'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-secondary transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
}
EOF

# Create app/page.tsx
cat > app/page.tsx << 'EOF'
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="text-gradient">Metafiction</span> Media
              </h1>
              <p className="text-xl lg:text-2xl text-foreground/80 font-light">
                Stories That Know They Are Stories
              </p>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Premium creative technology company crafting emotionally honest, 
              creatively daring stories across books, video, merchandise, and apps.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/jeffree" 
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2 hover:gap-4 transition-all"
              >
                Explore Jeffree World
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/store" 
                className="px-8 py-4 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                Shop Merch
              </Link>
              <Link 
                href="/newsletter" 
                className="px-8 py-4 border border-border rounded-lg font-medium hover:bg-secondary transition-colors flex items-center gap-2"
              >
                <Sparkles size={16} />
                Join Our List
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-purple-600/20 p-1">
              <img 
                src="/users/Phil/devprojects/github/assets/jeffree/hero-artwork.jpg" 
                alt="Jeffree the Monster" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary to-purple-600 rounded-full blur-3xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
EOF

# Create app/story/page.tsx
cat > app/story/page.tsx << 'EOF'
'use client'

import { motion } from 'framer-motion'

export default function StoryPage() {
  return (
    <div className="min-h-screen py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold">
              The <span className="text-gradient">Metafiction</span> Story
            </h1>
            <p className="text-xl text-foreground/70">
              Where stories become self-aware
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <img 
                  src="/users/Phil/devprojects/github/assets/bio/phil-marquez-headshot.jpg" 
                  alt="Phil Marquez" 
                  className="w-32 h-32 rounded-xl object-cover"
                />
                <div>
                  <h2 className="text-2xl font-bold mb-2">Phil Marquez</h2>
                  <p className="text-sm text-foreground/60 mb-4">Owner & Creative Director</p>
                </div>
              </div>

              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  I have been writing since I was in high school and have been passionate about graphic novels since I was a kid, and more so after graduating art school from the Art Institute of Orange County, Costa Mesa. This story was actually inspired by a comedy sitcom spec screenplay I had written back in 2012 or so that was intended to be a live action adult comedy that blended a world like the Muppets with real life, imagining puppets as another type of people in the world with their own cultural uniqueness and quirks.
                </p>
                
                <p>
                  In that original screenplay, the character of Smonty here was the protagonist there, named Monty. Jeffree at the time was the antagonist, an over the hill famous puppet monster that children loved for his popular show that he starred in for over 10 years. Monty was a dreamer with plans of breaking into Hollywood with his naive ideals and optimism while Jeffree was the guy who hated who he was and the kids who loved him, and wanted to go back to being the monster he always was: making horror movies where he was the Monster.
                </p>
                
                <p>
                  Except his studio contract would not allow it, and he would make things difficult for his agent, whose name was Sam (she may or may not be the same Sam he meets here, it has yet to be determined). To keep him in line, she tasks her assistant Barry (who also may or may not be the same Barry here) to keep him in line, but Barry is not quite the strong minded person needed for that and Jeffree tries to make everything as hard as possible for the both of them.
                </p>
                
                <p>
                  Monty new roommate in the script was Sam best friend, and he tries to get him to introduce the two so he can make his great impression and get his foot in the door. It was a story that always stuck with me and when I had the idea to do a graphic novel now, one of the first ones to come up was: what if I focused on Jeffree as a teenager before he gets to where he is in that script?
                </p>
                
                <p>
                  One of his throwaway lines that seemed to stick with me was that he wrote a 1500 page autobiography that no one wanted to publish but that he quotes constantly to make his points and is always complaining that the studio stole it from him so they could water it down and turn it in to a children book that make him into this sweet funny character that is not him.
                </p>
                
                <p>
                  And so I thought, what if I did that book, the story that IS the watered down version of his autobiography. So while this has taken a few detours on the way to becoming complete, the soul of that idea is still there beneath it all: this is the story of Jeffree teenage years and actually happened. Is it the watered down kids version he hates though? Probably not. Is it his overwritten and pretentious 1500 page manuscript brought to life with artwork and panels? No way, that is ridiculous. It is more like an amalgamation of the two. It sticks closer to the truth of who he was and his story while avoiding the constant patting on the back and complaining about everyone else that take up most of the pages he whines about.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-8">
            <h2 className="text-3xl font-bold text-center">Our Mission</h2>
            <p className="text-lg text-center text-foreground/70 max-w-2xl mx-auto">
              To tell emotionally honest, creatively daring, and narratively layered stories 
              across books, video, merchandise, and apps. We are building a universe where 
              characters know they are characters, and stories embrace their own artifice.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            <h2 className="text-3xl font-bold text-center">Long-Term Vision</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-3">Expanded Universe</h3>
                <p className="text-foreground/70">
                  Building interconnected stories across multiple mediums, where characters 
                  from different properties can meet, clash, and collaborate.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-3">Interactive Experiences</h3>
                <p className="text-foreground/70">
                  Developing apps and games that let audiences shape the stories, 
                  with characters who react to being part of your device.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-3">Cross-Media Innovation</h3>
                <p className="text-foreground/70">
                  From animated shorts to live puppetry performances, we are exploring 
                  every medium to tell stories that could not exist anywhere else.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-3">Community Building</h3>
                <p className="text-foreground/70">
                  Creating spaces where fans can contribute to the meta-narrative, 
                  because the best stories know their audience is watching.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <img 
              src="/users/Phil/devprojects/github/assets/logo/metafiction-full-logo.png" 
              alt="Metafiction Media Full Logo" 
              className="max-w-md mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
EOF

# Create app/jeffree/page.tsx
cat > app/jeffree/page.tsx << 'EOF'
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight } from 'lucide-react'

const images = [
  '/users/Phil/devprojects/github/assets/jeffree/artwork-1.jpg',
  '/users/Phil/devprojects/github/assets/jeffree/artwork-2.jpg',
  '/users/Phil/devprojects/github/assets/jeffree/artwork-3.jpg',
  '/users/Phil/devprojects/github/assets/jeffree/artwork-4.jpg',
]

export default function JeffreePage() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold">
              Jeffree the Monster
            </h1>
            <p className="text-2xl text-gradient font-semibold">
              Talent Show Magic
            </p>
            <p className="text-sm text-foreground/60">
              Part 1: Nov-Dec 2025 | Parts 2-4: 2026
            </p>
          </div>

          <div className="bg-secondary/50 p-8 rounded-xl">
            <p className="text-lg italic text-center">
              A misunderstood teenage puppet-monster struggles to find his place at a new school 
              where the most popular kid is the only other puppet, who is out to make Jeffrey 
              life miserable. His only friend, Barry, lives next door and together they have to 
              put together a Talent Show set or risk having their reputation forever stained.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden bg-secondary">
              <img 
                src={images[currentImage]} 
                alt={`Jeffree the Monster artwork ${currentImage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full glassmorphism hover:bg-white/20 transition-colors"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full glassmorphism hover:bg-white/20 transition-colors"
            >
              <ChevronRight />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImage ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Coming Soon</h2>
              <p className="text-foreground/70">
                Experience Jeffree world like never before with our upcoming interactive 
                app featuring full voiceover narration and stunning animations. Every page 
                comes alive as Jeffree navigates the chaos of teenage monster life.
              </p>
              <Link 
                href="https://jeffreythemonster.com" 
                className="inline-flex items-center gap-2 text-primary hover:underline"
                target="_blank"
              >
                Visit the full Jeffree website
                <ExternalLink size={16} />
              </Link>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Preorder Bonus</h2>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Exclusive PDF coloring book featuring never-before-seen character art</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Ultra Limited Edition script/sketch version of the book</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Early access to the interactive app beta</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/store" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Shop Jeffree Merch
              <ArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
EOF

# Create app/development/page.tsx
cat > app/development/page.tsx << 'EOF'
'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Yudi the Yogi Uni(corn)',
    season: 'Spring 2026',
    description: "Yudi the Yogi personal journal and instruction manual for how to survive the worst week ever with yoga.",
    features: [
      'Illustrated instruction manual style',
      'Fun and light-hearted approach to mindfulness',
      'Perfect for kids learning emotional regulation'
    ],
    image: '/users/Phil/devprojects/github/assets/yudi/concept-art.jpg'
  },
  {
    title: 'Musicasa',
    season: 'Summer 2026',
    description: 'Based on the entirely fictional in-world anthropomorphic family of guitars from the Spanish language kids show.',
    tagline: 'A FAMILY OF GUITARS STRUGGLE TO MAKE MUSIC WHEN THE ELECTRIC KIDS WANT TO PLAY LOUD BUT THE ACOUSTIC PARENTS ARE TOO CLASSICAL TO CHANGE.',
    image: '/users/Phil/devprojects/github/assets/musicasa/concept-sketch.jpg'
  },
  {
    title: 'Classroom Champion',
    subtitle: '(iPhone/Android Game)',
    platform: 'Mobile',
    ageRange: 'Ages 6-18',
    description: 'Mini-games set within an elementary school classroom context.',
    features: [
      'Games include: marbles, paper airplane, paper flick football, hockey sack, kickball',
      'Shared scoreboard and leaderboards across all games',
      'Item trading between players',
      'In-game currency for upgrades and bonuses',
      'For keeps mode - wager items against other players'
    ]
  }
]

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold">
              In <span className="text-gradient">Development</span>
            </h1>
            <p className="text-xl text-foreground/70">
              The next chapters in our metafictional universe
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  {projects[0].season}
                </div>
                <h2 className="text-3xl font-bold">{projects[0].title}</h2>
                <p className="text-lg text-foreground/70">{projects[0].description}</p>
                <ul className="space-y-2">
                  {projects[0].features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground/60">
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="aspect-video rounded-xl overflow-hidden bg-secondary"
              >
                <img 
                  src={projects[0].image} 
                  alt="Yudi the Yogi Unicorn concept art"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="aspect-video rounded-xl overflow-hidden bg-secondary order-2 md:order-1"
              >
                <img 
                  src={projects[1].image} 
                  alt="Musicasa concept sketch"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4 order-1 md:order-2"
              >
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  {projects[1].season}
                </div>
                <h2 className="text-3xl font-bold">{projects[1].title}</h2>
                <p className="text-lg text-foreground/70">{projects[1].description}</p>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <p className="text-sm uppercase font-semibold text-primary">{projects[1].tagline}</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-2xl p-8 md:p-12"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h2 className="text-3xl font-bold">{projects[2].title}</h2>
                    <p className="text-lg text-foreground/60">{projects[2].subtitle}</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      {projects[2].platform}
                    </span>
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-600 rounded-full text-sm">
                      {projects[2].ageRange}
                    </span>
                  </div>
                </div>
                
                <p className="text-lg text-foreground/70">{projects[2].description}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {projects[2].features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-background/50 rounded-lg">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
EOF

# Create components/ProductCard.tsx
cat > components/ProductCard.tsx << 'EOF'
'use client'

import { Product } from '@/lib/products'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function ProductCard({ product }: { product: Product }) {
  const [imageIndex, setImageIndex] = useState(0)
  const allImages = [product.primaryImage, ...(product.secondaryImages || [])]

  const handleShopifyBuy = () => {
    const shopifyUrl = `https://metafictionmedia.myshopify.com/cart/add?id=${product.shopifyProductId}`
    window.open(shopifyUrl, '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div className="border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
        <div className="aspect-square relative overflow-hidden bg-secondary">
          <img 
            src={allImages[imageIndex].src} 
            alt={allImages[imageIndex].alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {allImages.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === imageIndex ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        <div className="p-6 space-y-4">
          <div>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
              product.category === 'jeffrey' 
                ? 'bg-primary/20 text-primary' 
                : 'bg-purple-600/20 text-purple-600'
            }`}>
              {product.category === 'jeffrey' ? 'Jeffree' : 'Yudi'}
            </span>
            <h3 className="text-xl font-semibold mt-3">{product.title}</h3>
          </div>
          <p className="text-sm text-foreground/70 line-clamp-3">
            {product.description}
          </p>
          <button
            onClick={handleShopifyBuy}
            className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            {product.buttonText}
          </button>
        </div>
      </div>
    </motion.div>
  )
}
EOF

# Create app/store/page.tsx
cat > app/store/page.tsx << 'EOF'
'use client'

import { motion } from 'framer-motion'
import { ProductCard } from '@/components/ProductCard'
import { storeProducts } from '@/lib/products'
import { useState } from 'react'

export default function StorePage() {
  const [filter, setFilter] = useState<'all' | 'jeffrey' | 'yudy'>('all')

  const filteredProducts = filter === 'all' 
    ? storeProducts 
    : storeProducts.filter(p => p.category === filter)

  return (
    <div className="min-h-screen py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold">
              The <span className="text-gradient">Metafiction</span> Store
            </h1>
            <p className="text-xl text-foreground/70">
              Wear your story. Live your meta.
            </p>
          </div>

          <div className="flex justify-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === 'all' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setFilter('jeffrey')}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === 'jeffrey' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              Jeffree
            </button>
            <button
              onClick={() => setFilter('yudy')}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === 'yudy' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              Yudi
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
EOF

# Create components/NewsletterForm.tsx
cat > components/NewsletterForm.tsx << 'EOF'
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://metafictionmedia.us6.list-manage.com/subscribe/post?u=ad09522c5956208af4ac8afda&id=80c5d438d9&f_id=00d0c2e1f0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          EMAIL: email,
          b_ad09522c5956208af4ac8afda_80c5d438d9: '',
        }),
        mode: 'no-cors',
      })

      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="max-w-md mx-auto space-y-4"
    >
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full px-6 py-4 bg-secondary rounded-lg outline-none focus:ring-2 focus:ring-primary transition-all"
        />
      </div>
      
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {status === 'loading' ? 'Subscribing...' : 'Join the Metafiction Universe'}
      </button>

      {status === 'success' && (
        <p className="text-center text-green-500">Welcome to the meta! Check your email for confirmation.</p>
      )}
      {status === 'error' && (
        <p className="text-center text-red-500">Something went meta-wrong. Please try again.</p>
      )}
    </motion.form>
  )
}
EOF

# Create app/newsletter/page.tsx
cat > app/newsletter/page.tsx << 'EOF'
'use client'

import { motion } from 'framer-motion'
import { NewsletterForm } from '@/components/NewsletterForm'
import { Sparkles, Gift, Zap } from 'lucide-react'

export default function NewsletterPage() {
  return (
    <div className="min-h-screen py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold">
              Join the <span className="text-gradient">Metafiction</span> Universe
            </h1>
            <p className="text-xl text-foreground/70">
              Get exclusive updates, preorder bonuses, and early access
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center space-y-3"
            >
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                <Sparkles className="text-primary" />
              </div>
              <h3 className="font-semibold">Exclusive Content</h3>
              <p className="text-sm text-foreground/60">Behind-the-scenes looks at our creative process</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center space-y-3"
            >
              <div className="w-16 h-16 mx-auto bg-purple-600/20 rounded-full flex items-center justify-center">
                <Gift className="text-purple-600" />
              </div>
              <h3 className="font-semibold">Preorder Bonuses</h3>
              <p className="text-sm text-foreground/60">Special rewards for our early supporters</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center space-y-3"
            >
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                <Zap className="text-primary" />
              </div>
              <h3 className="font-semibold">Launch Updates</h3>
              <p className="text-sm text-foreground/60">Be first to know about new releases</p>
            </motion.div>
          </div>

          <NewsletterForm />

          <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-center">Preorder Bonus Preview</h2>
            <ul className="space-y-3 max-w-2xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Exclusive PDF coloring book featuring all main characters</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Limited edition script/sketch versions of upcoming books</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Early beta access to interactive apps and games</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Monthly creative insights from Phil Marquez</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
EOF

# Create components/ContactForm.tsx
cat > components/ContactForm.tsx << 'EOF'
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-4 py-3 bg-secondary rounded-lg outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full px-4 py-3 bg-secondary rounded-lg outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={6}
          className="w-full px-4 py-3 bg-secondary rounded-lg outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
        />
      </div>
      
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-center text-green-500">Message sent! We will get back to you soon.</p>
      )}
      {status === 'error' && (
        <p className="text-center text-red-500">Something went wrong. Please try again.</p>
      )}
    </motion.form>
  )
}
EOF

# Create app/contact/page.tsx
cat > app/contact/page.tsx << 'EOF'
'use client'

import { motion } from 'framer-motion'
import { ContactForm } from '@/components/ContactForm'
import { Facebook, Instagram } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold">
              Let Us <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl text-foreground/70">
              Have a story to tell? We are listening.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Follow Our Stories</h2>
                <p className="text-foreground/70 mb-6">
                  Join our community across social media for daily updates, 
                  behind-the-scenes content, and character takeovers.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-3">Metafiction Media</h3>
                    <div className="flex gap-4">
                      <a 
                        href="https://facebook.com/metafictionmedia" 
                        target="_blank"
                        className="p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                      >
                        <Facebook size={24} />
                      </a>
                      <a 
                        href="https://instagram.com/metafictionmedia" 
                        target="_blank"
                        className="p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                      >
                        <Instagram size={24} />
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Jeffree the Monster</h3>
                    <div className="flex gap-4">
                      <a 
                        href="https://facebook.com/jeffreethemonster" 
                        target="_blank"
                        className="p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                      >
                        <Facebook size={24} />
                      </a>
                      <a 
                        href="https://instagram.com/jeffreethemonster" 
                        target="_blank"
                        className="p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                      >
                        <Instagram size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-xl">
                <h3 className="font-semibold mb-2">Pro Tip</h3>
                <p className="text-sm text-foreground/70">
                  Follow both accounts for the full meta experience. Sometimes 
                  Jeffree takes over and... well, let us just say he has opinions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
EOF

# Create components/Footer.tsx
cat > components/Footer.tsx << 'EOF'
import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold">Metafiction Media</h3>
            <p className="text-sm text-foreground/60">
              Stories That Know They Are Stories
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/jeffree" className="text-sm text-foreground/60 hover:text-foreground">Jeffree</Link></li>
              <li><Link href="/development" className="text-sm text-foreground/60 hover:text-foreground">In Development</Link></li>
              <li><Link href="/store" className="text-sm text-foreground/60 hover:text-foreground">Store</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="/newsletter" className="text-sm text-foreground/60 hover:text-foreground">Newsletter</Link></li>
              <li><Link href="/contact" className="text-sm text-foreground/60 hover:text-foreground">Contact</Link></li>
              <li><Link href="/story" className="text-sm text-foreground/60 hover:text-foreground">Our Story</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Follow Us</h4>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com/metafictionmedia" 
                target="_blank"
                className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com/metafictionmedia" 
                target="_blank"
                className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-foreground/60">
            © 2025 Metafiction Media. All stories reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
EOF

echo "✅ All files created successfully!"
echo "Run 'npm run dev' to start your development server"
EOF