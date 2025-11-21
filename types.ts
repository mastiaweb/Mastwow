export enum Page {
  HOME = 'HOME',
  SERVICES = 'SERVICES',
  WORK = 'WORK',
  CONTACT = 'CONTACT'
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  color: string;
}