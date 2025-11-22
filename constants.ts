import { Page, PortfolioItem } from './types';

export const NAVIGATION_ITEMS = [
  { id: Page.HOME, label: 'INICIO', color: 'bg-indigo-600', hover: 'hover:bg-indigo-500' },
  { id: Page.SERVICES, label: 'SERVICIOS', color: 'bg-fuchsia-600', hover: 'hover:bg-fuchsia-500' },
  { id: Page.WORK, label: 'PORTAFOLIO', color: 'bg-cyan-600', hover: 'hover:bg-cyan-500' },
  { id: Page.CONTACT, label: 'CONTACTO', color: 'bg-lime-500', hover: 'hover:bg-lime-400' },
];

export const SERVICES_DATA = [
  {
    title: 'Desarrollo Web',
    subtitle: 'Arquitectura Digital',
    description: 'Sitios web inmersivos y de alto rendimiento utilizando las últimas tecnologías (React, Next.js, Three.js).',
    icon: 'monitor',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop', // Tech/Cyberpunk style
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    gradient: 'from-cyan-500 to-blue-400',
    details: {
      paragraph: "No creamos simples páginas web; construimos ecosistemas digitales completos. Utilizamos arquitecturas modernas como JAMstack y Server Side Rendering para garantizar tiempos de carga instantáneos y un SEO impecable, diferenciándote completamente de la competencia basada en plantillas.",
      points: [
        "Desarrollo a medida con React.js y Next.js (Sin plantillas).",
        "Optimización SEO técnica avanzada (Core Web Vitals).",
        "Integración con CMS Headless para autogestión de contenido."
      ]
    }
  },
  {
    title: 'Aplicaciones SaaS',
    subtitle: 'Escalabilidad Empresarial',
    description: 'Plataformas escalables y seguras para gestionar tu negocio en la nube con arquitectura robusta.',
    icon: 'cpu',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop', // Network/Globe
    color: 'text-fuchsia-600',
    bg: 'bg-fuchsia-50',
    gradient: 'from-fuchsia-500 to-pink-400',
    details: {
      paragraph: "Transformamos procesos complejos en software intuitivo. Ya sea un CRM interno, un ERP o una plataforma B2B para tus clientes, diseñamos arquitecturas de software que crecen con tu negocio, priorizando la seguridad de los datos y la eficiencia operativa.",
      points: [
        "Arquitectura de Microservicios y APIs REST/GraphQL.",
        "Sistemas de autenticación segura y roles de usuario.",
        "Paneles de administración de datos en tiempo real."
      ]
    }
  },
  {
    title: 'Experiencias 3D',
    subtitle: 'Inmersión WebGL',
    description: 'Lleva tu marca al siguiente nivel con experiencias web interactivas en 3D y realidad aumentada.',
    icon: 'globe',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop', // Abstract 3D
    color: 'text-lime-600',
    bg: 'bg-lime-50',
    gradient: 'from-lime-500 to-green-400',
    details: {
      paragraph: "El futuro de la web es espacial. Integramos modelos 3D interactivos directamente en el navegador sin necesidad de descargas. Desde configuradores de productos hasta mundos virtuales inmersivos, creamos experiencias que retienen a los usuarios y aumentan las conversiones.",
      points: [
        "Modelado e implementación WebGL con Three.js / R3F.",
        "Optimización de assets 3D para carga rápida en móviles.",
        "Interacciones físicas, partículas y shaders personalizados."
      ]
    }
  },
  {
    title: 'Apps Móviles',
    subtitle: 'Ecosistema Nativo',
    description: 'Desarrollo híbrido y nativo para iOS y Android, conectado perfectamente con tu ecosistema web.',
    icon: 'smartphone',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop', // Mobile/App
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    gradient: 'from-indigo-500 to-violet-400',
    details: {
      paragraph: "Lleva tu producto al bolsillo de tus usuarios. Desarrollamos aplicaciones móviles fluidas y potentes que se sincronizan perfectamente con tu plataforma web. Utilizamos tecnologías modernas para desplegar en iOS y Android simultáneamente sin sacrificar rendimiento.",
      points: [
        "Desarrollo Multiplataforma (React Native / Flutter).",
        "Notificaciones Push y funciones nativas (Cámara, GPS).",
        "Publicación y gestión en Apple App Store y Google Play."
      ]
    }
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