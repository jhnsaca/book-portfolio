
export enum CategoryType {
  ELEGANT = 'Elegant',
  SMILING = 'Commercial/Smiling',
  CASUAL = 'Casual',
  FRAGRANCE = 'Fragrance (Parfum)',
  BODY_360 = '360° / Body Polas',
  FAST_FASHION = 'Fast Fashion',
  SPORT = 'Sport/Athletic',
  LEATHER = 'Classic Leather'
}

export interface Photo {
  id: string;
  url: string;
  category: CategoryType;
  description: string;
}

export interface Language {
  name: string;
  level: string;
  proficiency: number; // 0-100
}
