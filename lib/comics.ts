export interface ComicStrip {
  id: string;
  title: string;
  images: string[];
  publishDate: string;
  description?: string;
  altText?: string;
}

export const comicStrips: ComicStrip[] = [
  {
    id: 'family-dinner',
    title: 'Family Dinner',
    images: [
      'https://jeffreythemonster.com/images/funnies/Funnies_001.png',
      'https://jeffreythemonster.com/images/funnies/Funnies_002.png',
      'https://jeffreythemonster.com/images/funnies/Funnies_003.png',
      'https://jeffreythemonster.com/images/funnies/Funnies_004.png',
      'https://jeffreythemonster.com/images/funnies/Funnies_005.png',
      'https://jeffreythemonster.com/images/funnies/Funnies_006.png',
      'https://jeffreythemonster.com/images/funnies/Funnies_007.png',
      'https://jeffreythemonster.com/images/funnies/Funnies_008.jpg',
      'https://jeffreythemonster.com/images/funnies/Funnies_009.jpg',
    ],
    publishDate: '2025-11-28',
    description: 'Jeffrey enjoys a nice meal with his parents.',
    altText: 'Family Dinner comic strip'
  }
];
