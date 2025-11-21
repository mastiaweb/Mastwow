import { Page, ServiceItem, PortfolioItem } from './types';
import { Monitor, Cpu, Globe, Smartphone } from 'lucide-react';

export const NAVIGATION_ITEMS = [
  { id: Page.HOME, label: 'INICIO', color: 'bg-indigo-600', hover: 'hover:bg-indigo-500' },
  { id: Page.SERVICES, label: 'SERVICIOS', color: 'bg-fuchsia-600', hover: 'hover:bg-fuchsia-500' },
  { id: Page.WORK, label: 'PORTAFOLIO', color: 'bg-cyan-600', hover: 'hover:bg-cyan-500' },
  { id: Page.CONTACT, label: 'CONTACTO', color: 'bg-lime-500', hover: 'hover:bg-lime-400' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    title: 'Desarrollo Web',
    description: 'Sitios web inmersivos y de alto rendimiento utilizando las últimas tecnologías (React, Next.js, Three.js).',
    icon: 'monitor',
    color: 'text-cyan-600'
  },
  {
    title: 'Aplicaciones SaaS',
    description: 'Plataformas escalables y seguras para gestionar tu negocio en la nube con arquitectura robusta.',
    icon: 'cpu',
    color: 'text-fuchsia-600'
  },
  {
    title: 'Experiencias 3D',
    description: 'Lleva tu marca al siguiente nivel con experiencias web interactivas en 3D y realidad aumentada.',
    icon: 'globe',
    color: 'text-lime-600'
  },
  {
    title: 'Apps Móviles',
    description: 'Desarrollo híbrido y nativo para iOS y Android, conectado perfectamente con tu ecosistema web.',
    icon: 'smartphone',
    color: 'text-indigo-600'
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    title: 'Neon Bank',
    category: 'Fintech App',
    image: 'https://picsum.photos/600/400?random=1',
    color: 'from-blue-500 to-cyan-300'
  },
  {
    title: 'Cyber Art Gallery',
    category: '3D Experience',
    image: 'https://picsum.photos/600/400?random=2',
    color: 'from-purple-500 to-pink-300'
  },
  {
    title: 'EcoTrack',
    category: 'SaaS Platform',
    image: 'https://picsum.photos/600/400?random=3',
    color: 'from-green-500 to-lime-300'
  }
];