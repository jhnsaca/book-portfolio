
import { CategoryType, Photo, Language } from './types';

export const MODEL_DATA = {
  name: 'Grégoire THIBAUT',
  age: 23,
  height: '184 cm',
  hair: 'Dark / Mid-Long',
  eyes: 'Light Brown',
  origins: 'French & Quarter Asian',
  location: 'Lyon, France',
  upcoming: 'Departure for Bangkok - February 2026',
  email: 'gregoirethibautpro@gmail.com',
  instagram: 'https://instagram.com/greg_thibaut',
};

export const LANGUAGES: Language[] = [
  { name: 'French', level: 'Strong (Native)', proficiency: 100 },
  { name: 'English', level: 'Strong (Fluent)', proficiency: 95 },
  { name: 'German', level: 'Great', proficiency: 85 },
  { name: 'Portuguese', level: 'Great', proficiency: 80 },
  { name: 'Italian', level: 'Learning', proficiency: 30 },
  { name: 'Thai', level: 'Learning', proficiency: 15 },
];

/**
 * Replace the filenames below (e.g., 'elegant_1.jpg') with the 
 * actual names of the photos you put in your /assets folder.
 */
export const PORTFOLIO_PHOTOS: Photo[] = [
  {
    id: '1',
    url: './assets/elegant_1.jpg',
    category: CategoryType.ELEGANT,
    description: 'Elegant studio portrait.'
  },
  {
    id: '2',
    url: './assets/casual_1.jpg',
    category: CategoryType.CASUAL,
    description: 'Casual lifestyle shot.'
  },
  {
    id: '3',
    url: './assets/smiling_1.jpg',
    category: CategoryType.SMILING,
    description: 'Commercial smiling shot.'
  },
  {
    id: '4',
    url: './assets/parfum_1.jpg',
    category: CategoryType.FRAGRANCE,
    description: 'Fragrance campaign aesthetic.'
  },
  {
    id: '5',
    url: './assets/sport_1.jpg',
    category: CategoryType.SPORT,
    description: 'Athletic/Sport physique.'
  },
  {
    id: '6',
    url: './assets/leather_1.jpg',
    category: CategoryType.LEATHER,
    description: 'Classic leather jacket look.'
  },
  {
    id: '7',
    url: './assets/fashion_1.jpg',
    category: CategoryType.FAST_FASHION,
    description: 'Fast fashion/Commercial look.'
  },
  {
    id: '8',
    url: './assets/pola_1.jpg',
    category: CategoryType.BODY_360,
    description: 'Classic agency polaroids.'
  }
];

