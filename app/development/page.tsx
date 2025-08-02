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
    image: '/assets/yudi/concept-art.jpg'
  },
  {
    title: 'Musicasa',
    season: 'Summer 2026',
    description: 'Based on the entirely fictional in-world anthropomorphic family of guitars from the Spanish language kids show.',
    tagline: 'A FAMILY OF GUITARS STRUGGLE TO MAKE MUSIC WHEN THE ELECTRIC KIDS WANT TO PLAY LOUD BUT THE ACOUSTIC PARENTS ARE TOO CLASSICAL TO CHANGE.',
    image: '/assets/musicasa/concept-sketch.jpg'
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
                  {projects[0]?.features?.map((feature, i) => (
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
                  {projects[2]?.features?.map((feature, i) => (
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
