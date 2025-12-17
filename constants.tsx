
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

export const PORTFOLIO_PHOTOS: Photo[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000',
    category: CategoryType.ELEGANT,
    description: 'Black tie sophistication with architectural context.'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1000',
    category: CategoryType.CASUAL,
    description: 'Relaxed urban lifestyle, highlighting natural movement.'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000',
    category: CategoryType.SMILING,
    description: 'Warm commercial appeal for lifestyle brands.'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1550246140-5119ae4790b8?q=80&w=1000',
    category: CategoryType.FRAGRANCE,
    description: 'High contrast, moody aesthetic for luxury beauty.'
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1512633017083-67231aba710d?q=80&w=1000',
    category: CategoryType.SPORT,
    description: 'Physical peak, dynamic athletic movement (topless).'
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1000',
    category: CategoryType.LEATHER,
    description: 'Classic heritage styling with leather jacket.'
  },
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1000',
    category: CategoryType.FAST_FASHION,
    description: 'Contemporary street style, high-energy vibes.'
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=1000',
    category: CategoryType.BODY_360,
    description: 'Standard agency polaroids, raw and unretouched.'
  },
  {
    id: '9',
    url: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1000',
    category: CategoryType.ELEGANT,
    description: 'Editorial luxury, focus on tailoring.'
  },
  {
    id: '10',
    url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000',
    category: CategoryType.FRAGRANCE,
    description: 'Fragrance campaign aesthetic: Mystery and depth.'
  }
];
