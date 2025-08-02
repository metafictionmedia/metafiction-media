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
                  src="/assets/bio/phil-marquez-headshot.jpg" 
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
              src="/assets/logo/metafiction-full-logo.png" 
              alt="Metafiction Media Full Logo" 
              className="max-w-md mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
