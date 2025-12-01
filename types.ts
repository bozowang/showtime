export interface MenuItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface Slide {
  id: number;
  image: string;
  title?: string;
  subtitle?: string;
}

export type SectionDirection = 'left' | 'right';