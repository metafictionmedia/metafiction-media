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
      src: '/assets/products/jeffree-is-fine-mockup-1.jpg',
      alt: 'The Jeffree Is Fine T-Shirt mockup with three shirts in red, blue, and black.'
    },
    secondaryImages: [
      { src: '/assets/products/jeffree-is-fine-female-1.jpg', alt: 'A female model wearing the Jeffree Is Fine T-Shirt.' },
      { src: '/assets/products/jeffree-is-fine-female-2.jpg', alt: 'A second female model wearing the Jeffree Is Fine T-Shirt.' }
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
      src: '/assets/products/jeffree-swear-it-made-sense-mockup-1.jpg',
      alt: 'The I Swear It Made Sense in My Head T-Shirt mockup.'
    },
    secondaryImages: [
      { src: '/assets/products/jeffree-swear-it-made-sense-mockup-2.jpg', alt: 'A second mockup of the I Swear It Made Sense T-Shirt.' },
      { src: '/assets/products/jeffree-swear-it-made-sense-mockup-3.jpg', alt: 'A third mockup of the I Swear It Made Sense T-Shirt.' }
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
      src: '/assets/products/jeffree-iphone-case-mockup.png',
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
      src: '/assets/products/uga-shadow-pose-mockup-1.jpg',
      alt: 'The U-GA Unicorn Shadow Pose T-Shirt mockup.'
    },
    secondaryImages: [
      { src: '/assets/products/uga-shadow-pose-mockup-2.jpg', alt: 'A second mockup of the U-GA Unicorn Shadow Pose T-Shirt.' },
      { src: '/assets/products/uga-shadow-pose-mockup-3.jpg', alt: 'A third mockup of the U-GA Unicorn Shadow Pose T-Shirt.' }
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
      src: '/assets/products/unicorn-on-the-cobb-mockup-1.jpg',
      alt: 'The Unicorn on the Cobb T-Shirt mockup.'
    },
    secondaryImages: [
      { src: '/assets/products/unicorn-on-the-cobb-mockup-2.jpg', alt: 'A second mockup of the Unicorn on the Cobb T-Shirt.' },
      { src: '/assets/products/unicorn-on-the-cobb-mockup-3.jpg', alt: 'A third mockup of the Unicorn on the Cobb T-Shirt.' }
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
      src: '/assets/products/uga-pattern-throw-blanket-mockup.jpg',
      alt: 'The U-GA pattern throw blanket mockup.'
    },
    secondaryImages: [],
    shopifyProductId: '7811028680783',
    buttonText: 'Take my money!'
  }
];
