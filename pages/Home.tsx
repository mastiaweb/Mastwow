import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Globe, Server, ShieldCheck, CheckCircle2, Palette, Layout, MousePointer2, Layers, Zap, Activity, Code2, CreditCard, Music, Wifi, Battery, MessageSquare, Users, TrendingUp, Star, Plus, Check, X, Database, Cloud, Smartphone, Box } from 'lucide-react';
import { Page } from '../types';
import TiltCard from '../components/TiltCard';

interface HomeProps {
  setPage: (page: Page) => void;
}

// --- TECH LOGOS (SVG REALES) ---
const TechLogos = {
  js: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M0 0H24V24H0V0Z" fill="#F7DF1E"/>
      <path d="M6.75 20.25C6.75 20.25 8.625 21.375 10.875 21.375C13.5 21.375 14.625 19.5 14.625 17.25V11.25H12.375V17.25C12.375 18.375 11.625 19.125 10.875 19.125C9.75 19.125 9 18.375 9 18.375V20.25ZM18.375 11.25H16.125V17.25C16.125 18.75 15.375 21.375 19.5 21.375C21 21.375 22.125 20.625 22.125 20.625V18.375C22.125 18.375 21.375 19.125 20.25 19.125C19.125 19.125 18.375 18.375 18.375 17.25V11.25Z" fill="black"/>
    </svg>
  ),
  react: (
    <svg viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  vite: (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" className="w-full h-full">
      <path fill="#FFC24A" d="M183.538 12.51L150.133 12.51C149.393 12.51 148.835 13.129 148.835 13.803L110.274 186.683L183.538 12.51Z"/>
      <path fill="#A651FE" d="M72.462 12.51L105.867 12.51C106.607 12.51 107.165 13.129 107.165 13.803L145.726 186.683L72.462 12.51Z"/>
      <path fill="#41D1FF" d="M114.79 12.51L141.21 12.51C142.041 12.51 142.737 13.131 142.737 13.936L147.543 45.11L108.457 45.11L113.145 13.936C113.263 13.131 113.959 12.51 114.79 12.51Z"/>
      <path fill="#BD34FE" d="M81.219 15.975L22.102 21.313C21.453 21.365 21.044 22.024 21.296 22.592L125.684 243.188C126.887 245.753 130.515 245.67 131.609 243.046L235.097 22.592C235.349 22.024 234.94 21.365 234.291 21.313L175.655 15.975C174.92 15.915 174.328 16.54 174.468 17.228L194.595 113.063C194.721 113.645 194.291 114.188 193.713 114.188L143.662 114.188L127.694 186.683L112.338 114.188L62.287 114.188C61.709 114.188 61.279 113.645 61.405 113.063L82.406 17.228C82.546 16.54 81.954 15.915 81.219 15.975Z"/>
    </svg>
  ),
  node: (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M16,0.002l-14.72,8.534v17.066l14.72,8.532l14.72-8.532v-17.066l-14.72-8.534z M26.56,10.348l-1.92,1.066 l-8.64-4.8v-1.066L26.56,10.348z M16.64,6.948v1.066l-8.64,4.8l-1.92-1.066L16.64,6.948z M15.36,29.332l-9.6-5.598v-12.8l1.92-1.066 v11.734l7.68,4.532V29.332z M16,24.532l-7.68-4.266v-2.134l7.68,4.266l7.68-4.266v2.134L16,24.532z M26.24,23.734l-9.6,5.598v-3.2 l7.68-4.532v-11.734l1.92,1.066V23.734z" fill="#68A063"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#181717"/>
    </svg>
  ),
  sql: (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M16 2C10.5 2 6 3.8 6 6s4.5 4 10 4 10-1.8 10-4-4.5-4-10-4zm0 6c-4.8 0-8.8-1.5-9.8-3.5C7.2 10.5 11.2 12 16 12s8.8-1.5 9.8-3.5c-1 2-5 3.5-9.8 3.5z" fill="#E48E00"/>
      <path d="M6 8v4c0 2.2 4.5 4 10 4s10-1.8 10-4V8c-1 2-5 3.5-9.8 3.5S7 10 6 8z" fill="#FF9F00"/>
      <path d="M6 14v4c0 2.2 4.5 4 10 4s10-1.8 10-4v-4c-1 2-5 3.5-9.8 3.5S7 16 6 14z" fill="#FF9F00"/>
      <path d="M6 20v4c0 2.2 4.5 4 10 4s10-1.8 10-4v-4c-1 2-5 3.5-9.8 3.5S7 22 6 20z" fill="#FF9F00"/>
    </svg>
  )
};

const Home: React.FC<HomeProps> = ({ setPage }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  const features = [
    {
      title: "Dominio Gratis",
      subtitle: "Tu Identidad Global",
      icon: Globe,
      description: "Registramos y configuramos tu nombre perfecto (.com, .net, .org) sin costo el primer año.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      gradient: "from-blue-500 to-cyan-400",
      specs: ["Registro por 1 año", "Configuración DNS", "Protección de privacidad"]
    },
    {
      title: "Hosting Premium",
      subtitle: "Velocidad Supersónica",
      icon: Server,
      description: "Alojamiento en servidores NVMe de última generación con CDN global incluida.",
      color: "text-violet-600",
      bg: "bg-violet-50",
      gradient: "from-violet-500 to-fuchsia-400",
      specs: ["99.9% Uptime", "Discos SSD NVMe", "Ancho de banda ilimitado"]
    },
    {
      title: "Certificado SSL",
      subtitle: "Seguridad Blindada",
      icon: ShieldCheck,
      description: "Cifrado de grado bancario para proteger a tus usuarios y mejorar tu ranking SEO.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      gradient: "from-emerald-500 to-teal-400",
      specs: ["Encriptación 256-bit", "Candado Verde", "Mejora Ranking Google"]
    }
  ];

  const comparisonData = [
    {
      feature: "Tecnología Base",
      others: "Wordpress / Wix / Plantillas",
      mast: "React + Next.js (Código Puro)",
      icon: Code2
    },
    {
      feature: "Velocidad de Carga",
      others: "Lenta (3s - 8s promedio)",
      mast: "Instantánea (< 0.8s)",
      icon: Zap
    },
    {
      feature: "Diseño Visual",
      others: "Genérico y Repetitivo",
      mast: "Identidad Única 3D Inmersiva",
      icon: Palette
    },
    {
      feature: "Modelo de Cobro",
      others: "Mensualidades Ocultas",
      mast: "Pago Único / Todo Incluido",
      icon: CreditCard
    },
    {
      feature: "Soporte Técnico",
      others: "Tickets Automatizados",
      mast: "WhatsApp Directo con Ingenieros",
      icon: MessageSquare
    }
  ];

  // New Tech Stack for the tree/grid view
  const integrations = [
    { name: "React", icon: TechLogos.react, color: "bg-sky-50 text-sky-500" },
    { name: "Vite", icon: TechLogos.vite, color: "bg-purple-50 text-purple-500" },
    { name: "Node.js", icon: TechLogos.node, color: "bg-green-50 text-green-500" },
    { name: "Next.js", icon: <Globe size={24}/>, color: "bg-slate-100 text-black" },
    { name: "TypeScript", icon: <Code2 size={24}/>, color: "bg-blue-50 text-blue-600" },
    { name: "Tailwind", icon: <Layout size={24}/>, color: "bg-cyan-50 text-cyan-500" },
    { name: "AWS", icon: <Cloud size={24}/>, color: "bg-orange-50 text-orange-500" },
    { name: "Postgres", icon: <Database size={24}/>, color: "bg-indigo-50 text-indigo-500" },
    { name: "Docker", icon: <Box size={24}/>, color: "bg-blue-50 text-blue-500" },
    { name: "Mobile", icon: <Smartphone size={24}/>, color: "bg-rose-50 text-rose-500" },
  ];

  const faqs = [
    {
      question: "¿Realmente es un pago único?",
      answer: "Absolutamente. Creemos en la transparencia total. Pagas por el desarrollo y diseño una sola vez. No te amarramos a mensualidades de 'mantenimiento' fantasma. Solo renuevas tu dominio y hosting anualmente (que nosotros gestionamos sin costo extra de servicio)."
    },
    {
      question: "¿Cuánto tiempo tarda el desarrollo?",
      answer: "Depende de la complejidad, pero somos ágiles. Una Landing Page de alto impacto suele estar lista en 1-2 semanas. Un sitio corporativo completo o e-commerce toma entre 3 a 5 semanas. Te entregamos un cronograma detallado desde el día uno."
    },
    {
      question: "¿Por qué no usan WordPress?",
      answer: "WordPress fue genial en 2010. Hoy, la web exige velocidad instantánea y seguridad blindada. Usamos Next.js y React (la misma tecnología que usa Facebook, Netflix y TikTok) para garantizar que tu sitio sea imposible de hackear y cargue antes de que parpadees."
    },
    {
      question: "¿Podré editar el contenido yo mismo?",
      answer: "¡Sí! Integramos paneles de administración modernos (CMS Headless) que te permiten cambiar textos, imágenes y blogs tan fácil como editar un documento de Word, sin riesgo de romper el diseño o el código del sitio."
    },
    {
      question: "¿Incluyen correos corporativos?",
      answer: "Así es. Configuramos tus cuentas de correo profesional (nombre@tuempresa.com) para que proyectes seriedad desde el primer contacto con tus clientes."
    }
  ];

  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  // Floating animation for 3D elements
  const floatingAnim = (delay: number) => ({
    y: [0, -15, 0],
    rotate: [0, 1, -1, 0],
    transition: {
      duration: 5,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  });

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center pt-28 md:pt-40 pb-24 px-4 md:px-6 overflow-hidden bg-[#f8fafc]">
      
      {/* Background Elements - Optimized with will-change */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          style={{ willChange: "transform" }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/4 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] rounded-full bg-gradient-to-tr from-indigo-200/60 to-purple-200/60 blur-3xl mix-blend-multiply"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          style={{ willChange: "transform" }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/4 w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full bg-gradient-to-bl from-cyan-100/60 to-blue-200/60 blur-3xl mix-blend-multiply"
        />
      </div>

      {/* Main Centered Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto mb-32 w-full">
        
        {/* "New" Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 bg-white border border-slate-200 pl-1 pr-4 py-1 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer mb-8 group"
        >
           <span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-full group-hover:bg-indigo-600 transition-colors">
             Nuevo
           </span>
           <span className="text-xs md:text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
             Revoluciona tu flujo de trabajo
           </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6 px-2"
        >
          Experiencias Digitales <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 animate-gradient-x">Multidimensionales.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base md:text-xl text-slate-500 max-w-2xl font-medium leading-relaxed mb-10 px-4"
        >
          Transformamos código en ecosistemas visuales. Diseño UI/UX de vanguardia, desarrollo 3D y estrategias escalables para el futuro de la web.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onClick={() => setPage(Page.CONTACT)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-slate-500/30 flex items-center gap-2 hover:bg-indigo-600 hover:shadow-indigo-500/40 transition-all mb-20"
        >
          Iniciar Proyecto <ArrowRight size={20} />
        </motion.button>

        {/* --- EXPLODED APP 3D COMPOSITION --- */}
        <div className="w-full relative h-[550px] md:h-[750px] flex items-center justify-center perspective-container overflow-visible">
          <TiltCard rotationFactor={12} className="w-full max-w-4xl h-full">
            <motion.div
               initial={{ opacity: 0, rotateX: 20, y: 100, scale: 0.8 }}
               whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
               className="relative w-full h-full flex items-center justify-center"
               style={{ transformStyle: "preserve-3d" }}
            >
                
                {/* CENTERPIECE: The "Super App" Container */}
                <motion.div 
                   className="relative w-[260px] md:w-[380px] h-[520px] md:h-[650px] bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-slate-800 shadow-2xl flex flex-col overflow-hidden z-20"
                   style={{ transform: "translateZ(40px)", willChange: "transform" }}
                   animate={floatingAnim(0)}
                >
                   {/* Phone Top Bar */}
                   <div className="h-12 md:h-14 w-full bg-slate-900 flex items-center justify-between px-5 md:px-6 pt-2 z-30">
                      <span className="text-[10px] md:text-xs font-medium text-white/80">9:41</span>
                      <div className="w-20 md:w-24 h-5 md:h-6 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-3"></div>
                      <div className="flex gap-1">
                         <Wifi size={12} className="text-white" />
                         <Battery size={12} className="text-white" />
                      </div>
                   </div>

                   {/* Phone Screen Content (Scrollable-looking) */}
                   <div className="flex-1 bg-white relative overflow-hidden">
                      {/* Header */}
                      <div className="h-32 md:h-40 bg-gradient-to-br from-indigo-600 to-purple-700 p-5 md:p-6 flex flex-col justify-end relative overflow-hidden">
                         <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                         <h3 className="text-white text-xl md:text-2xl font-black leading-tight z-10">Hola, <br/>Creador Digital</h3>
                      </div>

                      {/* Stats Row */}
                      <div className="px-4 -mt-6 md:-mt-8 flex gap-2 md:gap-3 overflow-hidden">
                         <div className="h-20 md:h-24 w-1/2 bg-white rounded-2xl shadow-lg p-3 flex flex-col justify-between">
                            <div className="w-6 h-6 md:w-8 md:h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-500"><Activity size={14}/></div>
                            <div>
                               <div className="text-[8px] md:text-[10px] text-slate-400 font-bold uppercase">Visitas</div>
                               <div className="text-lg md:text-xl font-black text-slate-800">24.5K</div>
                            </div>
                         </div>
                         <div className="h-20 md:h-24 w-1/2 bg-white rounded-2xl shadow-lg p-3 flex flex-col justify-between">
                            <div className="w-6 h-6 md:w-8 md:h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500"><Zap size={14}/></div>
                            <div>
                               <div className="text-[8px] md:text-[10px] text-slate-400 font-bold uppercase">Ventas</div>
                               <div className="text-lg md:text-xl font-black text-slate-800">128%</div>
                            </div>
                         </div>
                      </div>

                      {/* List Items */}
                      <div className="p-4 space-y-3 mt-1 md:mt-2">
                         <div className="flex items-center justify-between mb-1 md:mb-2">
                            <h4 className="font-bold text-sm md:text-base text-slate-800">Recientes</h4>
                            <span className="text-indigo-600 text-[10px] md:text-xs font-bold">Ver todo</span>
                         </div>
                         {[1,2,3,4].map((i) => (
                            <motion.div 
                              key={i}
                              initial={{ x: -20, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              transition={{ delay: 1 + (i * 0.1) }}
                              className="h-14 md:h-16 w-full bg-slate-50 rounded-xl flex items-center px-3 gap-3 hover:bg-slate-100 transition-colors"
                            >
                               <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${i===1 ? 'from-pink-500 to-rose-500' : i===2 ? 'from-blue-500 to-cyan-500' : 'from-amber-500 to-orange-500'} flex items-center justify-center text-white shadow-md`}>
                                  {i===1 ? <Music size={16}/> : i===2 ? <CreditCard size={16}/> : <MessageSquare size={16}/>}
                               </div>
                               <div className="flex-1">
                                  <div className="h-2 w-20 md:w-24 bg-slate-300 rounded-full mb-1.5"></div>
                                  <div className="h-1.5 w-12 md:w-16 bg-slate-200 rounded-full"></div>
                               </div>
                               <div className="text-slate-300 text-[10px] md:text-xs font-bold">2m</div>
                            </motion.div>
                         ))}
                      </div>
                   </div>
                   
                   {/* Floating Navigation Pill inside Phone */}
                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-12 md:h-14 bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg rounded-full flex items-center justify-around px-2 z-30">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-indigo-300 shadow-md"><Layout size={14}/></div>
                      <div className="w-8 h-8 hover:bg-slate-100 rounded-full flex items-center justify-center text-slate-400"><Globe size={16}/></div>
                      <div className="w-8 h-8 hover:bg-slate-100 rounded-full flex items-center justify-center text-slate-400"><Users size={16}/></div>
                   </div>
                </motion.div>

                {/* --- SATELLITE 1: Floating Code Terminal (Top Left) --- */}
                <motion.div
                   initial={{ x: -100, opacity: 0 }}
                   whileInView={{ x: 0, opacity: 1 }}
                   transition={{ delay: 0.5, type: "spring" }}
                   animate={floatingAnim(0.5)}
                   className="absolute top-[-10px] -left-2 scale-[0.8] origin-top-left md:scale-100 md:top-10 md:-left-32 w-[200px] md:w-[240px] bg-slate-900/95 backdrop-blur rounded-xl border border-slate-700 p-4 shadow-2xl shadow-black/30 z-30"
                   style={{ transform: "translateZ(90px)", willChange: "transform" }}
                >
                   <div className="flex gap-1.5 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                   </div>
                   <div className="font-mono text-[10px] space-y-1">
                      <div className="text-slate-400">// Iniciando nucleo</div>
                      <div className="flex gap-1">
                         <span className="text-purple-400">import</span>
                         <span className="text-white">{`{ Futuro }`}</span>
                         <span className="text-purple-400">from</span>
                         <span className="text-green-400">'@mast'</span>
                      </div>
                      <div className="flex gap-1">
                         <span className="text-blue-400">const</span>
                         <span className="text-amber-400">app</span>
                         <span className="text-white">=</span>
                         <span className="text-blue-400">new</span>
                         <span className="text-amber-400">Exp()</span>
                      </div>
                      <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: [0,1,0] }} 
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-2 h-4 bg-indigo-500 inline-block align-middle ml-1"
                      />
                   </div>
                </motion.div>

                {/* --- SATELLITE 2: Music/Media Card (Bottom Left) --- */}
                <motion.div
                   initial={{ y: 100, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   transition={{ delay: 0.7, type: "spring" }}
                   animate={floatingAnim(1)}
                   className="absolute bottom-10 -left-2 scale-[0.8] origin-bottom-left md:scale-100 md:bottom-32 md:-left-48 w-[180px] md:w-[200px] bg-white/80 backdrop-blur-md rounded-2xl p-3 border border-white shadow-xl shadow-indigo-200/40 z-20 flex items-center gap-3"
                   style={{ transform: "translateZ(60px)", willChange: "transform" }}
                >
                   <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-fuchsia-600 to-purple-500 flex items-center justify-center text-white shadow-md">
                      <Play size={20} fill="currentColor" />
                   </div>
                   <div className="overflow-hidden">
                      <div className="text-xs font-bold text-slate-900">Flujo Creativo</div>
                      <div className="text-[10px] text-slate-500 truncate">Reproduciendo • 2:45</div>
                      {/* Audio waveform animation */}
                      <div className="flex gap-0.5 mt-1 h-3 items-end">
                         {[1,2,3,4,5].map(bar => (
                            <motion.div 
                              key={bar}
                              animate={{ height: [4, 10, 4] }}
                              transition={{ repeat: Infinity, duration: 0.5 + (bar * 0.1) }}
                              className="w-1 bg-indigo-500 rounded-full"
                            />
                         ))}
                      </div>
                   </div>
                </motion.div>

                {/* --- SATELLITE 3: Payment/Ecommerce (Top Right) --- */}
                <motion.div
                   initial={{ x: 100, opacity: 0 }}
                   whileInView={{ x: 0, opacity: 1 }}
                   transition={{ delay: 0.6, type: "spring" }}
                   animate={floatingAnim(1.5)}
                   className="absolute top-10 -right-2 scale-[0.8] origin-top-right md:scale-100 md:top-20 md:-right-40 w-[200px] md:w-[220px] bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-4 shadow-2xl shadow-slate-900/20 z-20 border border-slate-700"
                   style={{ transform: "translateZ(80px)", willChange: "transform" }}
                >
                   <div className="flex justify-between items-center mb-4">
                      <div className="text-white font-bold text-sm italic">MAST<span className="text-cyan-400">PAY</span></div>
                      <Wifi size={14} className="text-slate-400" />
                   </div>
                   <div className="flex gap-2 mb-2">
                      <div className="w-8 h-5 bg-amber-400 rounded-sm opacity-80"></div>
                   </div>
                   <div className="text-slate-400 text-[10px] font-mono mb-1">**** **** **** 4298</div>
                   <div className="flex justify-between text-white text-[10px]">
                      <span>Juan Pérez</span>
                      <span>12/28</span>
                   </div>
                </motion.div>

                {/* --- SATELLITE 4: User Message (Bottom Right) --- */}
                <motion.div
                   initial={{ scale: 0, opacity: 0 }}
                   whileInView={{ scale: 1, opacity: 1 }}
                   transition={{ delay: 0.8, type: "spring" }}
                   animate={floatingAnim(0.2)}
                   className="absolute bottom-20 -right-2 scale-[0.8] origin-bottom-right md:scale-100 md:bottom-40 md:-right-24 bg-white rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-none p-4 shadow-xl shadow-emerald-100 border border-emerald-50 z-30 max-w-[180px] md:max-w-[200px]"
                   style={{ transform: "translateZ(100px)", willChange: "transform" }}
                >
                   <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">A</div>
                      <span className="text-xs font-bold text-slate-900">Alice Designer</span>
                   </div>
                   <p className="text-xs text-slate-600 leading-relaxed">
                      "¡El nuevo prototipo 3D es increíble! 🚀 Aprobado."
                   </p>
                </motion.div>

                {/* --- DECORATIVE BACKGROUND SHAPES (Behind Phone) --- */}
                <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   style={{ transform: "translateZ(-50px)", willChange: "transform" }}
                   className="absolute -z-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-indigo-200/40 rounded-full"
                />
                <motion.div 
                   animate={{ rotate: -360 }}
                   transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                   style={{ transform: "translateZ(-80px)", willChange: "transform" }}
                   className="absolute -z-10 w-[400px] h-[400px] md:w-[700px] md:h-[700px] border border-purple-200/30 rounded-full border-dashed"
                />

            </motion.div>
          </TiltCard>
        </div>

      </div>

      {/* LOGOS SECTION (SOCIAL PROOF) - NEW */}
      <div className="w-full max-w-7xl mx-auto mb-32 px-6">
         <div className="text-center mb-8">
            <p className="text-slate-500 text-lg font-medium">Impulsa tu empresa con nosotros, al igual que +100 marcas</p>
         </div>
         <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simulating Logoipsum Logos with text/icons */}
            {[
               { color: "text-red-500", name: "Logoipsum", icon: Zap },
               { color: "text-emerald-600", name: "Logoipsum", icon: Layout },
               { color: "text-blue-600", name: "Logoipsum", icon: Globe },
               { color: "text-slate-800", name: "Logoipsum", icon: Circle },
               { color: "text-orange-500", name: "Logoipsum", icon: Sun },
               { color: "text-violet-600", name: "Logoipsum", icon: Command }
            ].map((logo, i) => (
               <motion.div 
                 key={i}
                 whileHover={{ scale: 1.1 }}
                 className="flex items-center gap-2 font-bold text-xl md:text-2xl text-slate-800 cursor-pointer"
               >
                  <logo.icon size={32} className={`${logo.color}`} fill="currentColor" strokeWidth={0} />
                  <span className="hidden md:block">{logo.name}</span>
               </motion.div>
            ))}
         </div>
      </div>

      {/* INFRASTRUCTURE / INCLUDED SECTION */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mb-32 md:mb-40 px-4">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-lime-100 text-lime-700 text-xs font-bold uppercase tracking-widest mb-4">
            Todo Incluido
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Infraestructura <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500">Gratuita</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            No te preocupes por pagos mensuales extra. Nosotros cubrimos la base tecnológica para que tú solo te enfoques en crecer.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
             <motion.div
               key={idx}
               variants={cardVariant}
               whileHover={{ y: -10, transition: { duration: 0.3 } }}
               className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group"
             >
                {/* Top Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${feature.gradient}`} />
                
                {/* Background subtle glow */}
                <div className={`absolute -right-6 -top-6 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-all duration-500`} />

                <div className="flex items-start justify-between mb-8">
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center`}
                  >
                     <feature.icon size={28} strokeWidth={2.5} />
                  </motion.div>
                  <div className="px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase rounded-md">
                    Gratis
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-1">{feature.title}</h3>
                <p className={`text-sm font-semibold ${feature.color} mb-4 uppercase tracking-wider opacity-80`}>{feature.subtitle}</p>
                
                <p className="text-slate-500 leading-relaxed mb-8 text-sm md:text-base">
                  {feature.description}
                </p>

                <div className="space-y-3">
                  {feature.specs.map((spec, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="flex items-center gap-3 text-sm font-medium text-slate-700"
                    >
                      <CheckCircle2 size={16} className={`${feature.color}`} />
                      {spec}
                    </motion.div>
                  ))}
                </div>

                {/* Decorative shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ transform: 'skewX(-20deg) translateX(-150%)', animation: 'shine 1s' }} />
             </motion.div>
          ))}
        </motion.div>
      </div>

      {/* UI/UX DESIGN SECTION */}
      <div className="relative z-10 w-full max-w-7xl mx-auto mb-40 px-2 md:px-6">
         <motion.div 
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden text-white shadow-2xl shadow-slate-900/20"
         >
            
            {/* Abstract Background Blobs */}
            <motion.div style={{ willChange: "transform" }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-bl from-fuchsia-600/30 to-indigo-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            <motion.div style={{ willChange: "transform" }} animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 15, repeat: Infinity }} className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
               
               {/* Left Text Content */}
               <div className="space-y-8 text-center md:text-left">
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10"
                  >
                    <Palette size={16} className="text-fuchsia-400" />
                    <span className="text-sm font-bold tracking-wide">Diseño que Enamora</span>
                  </motion.div>

                  <motion.h2 
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-3xl md:text-6xl font-black leading-tight tracking-tight"
                  >
                     UI/UX de clase mundial que <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">conecta</span>.
                  </motion.h2>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base md:text-lg text-slate-400 leading-relaxed max-w-lg mx-auto md:mx-0"
                  >
                     No solo hacemos que las cosas se vean bonitas. Creamos sistemas de diseño intuitivos, accesibles y centrados en el usuario que convierten visitantes en clientes leales.
                  </motion.p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-start gap-4"
                      >
                        <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-300">
                           <Layout size={24} />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg mb-1">Wireframing</h4>
                           <p className="text-sm text-slate-500">Estructura sólida antes del código.</p>
                        </div>
                     </motion.div>
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-start gap-4"
                      >
                        <div className="p-3 bg-fuchsia-500/20 rounded-xl text-fuchsia-300">
                           <Layers size={24} />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg mb-1">Prototipado</h4>
                           <p className="text-sm text-slate-500">Interacciones reales y fluidas.</p>
                        </div>
                     </motion.div>
                  </div>
               </div>

               {/* Right Visual Composition */}
               <div className="relative h-[350px] md:h-[500px] w-full flex items-center justify-center">
                  
                  {/* Main Glass Card */}
                  <motion.div 
                     initial={{ opacity: 0, y: 100, rotate: -10 }}
                     whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                     className="absolute z-10 w-60 md:w-72 h-[400px] md:h-[450px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-4 shadow-2xl flex flex-col gap-4"
                  >
                     {/* Mock Header */}
                     <div className="flex items-center justify-between px-2">
                        <div className="w-8 h-8 rounded-full bg-slate-200/20" />
                        <div className="w-20 h-2 rounded-full bg-slate-200/20" />
                     </div>
                     
                     {/* Mock Content */}
                     <div className="w-full h-28 md:h-32 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                        <span className="text-2xl font-black text-white/90">MAST</span>
                     </div>
                     
                     <div className="flex gap-2 overflow-hidden">
                        <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 shrink-0" />
                        <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.7 }} className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 shrink-0" />
                        <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 shrink-0" />
                     </div>

                     <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="mt-auto w-full h-12 rounded-xl bg-white text-slate-900 font-bold flex items-center justify-center text-sm shadow-lg cursor-pointer"
                     >
                        Comenzar Ahora
                     </motion.div>
                  </motion.div>

                  {/* Floating Palette Card */}
                  <motion.div
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.8, type: "spring" }}
                     className="absolute right-0 md:right-10 top-10 md:top-20 z-20 p-3 md:p-4 bg-white rounded-2xl shadow-xl border border-slate-100 max-w-[140px] md:max-w-[180px]"
                  >
                     <div className="text-xs font-bold text-slate-400 uppercase mb-2 tracking-wider">Colores</div>
                     <div className="grid grid-cols-3 gap-2">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-indigo-600" />
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-fuchsia-500" />
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-cyan-400" />
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-900" />
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-lime-400" />
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-rose-400" />
                     </div>
                  </motion.div>

                  {/* Floating Cursor */}
                  <motion.div
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: 1, type: "spring" }}
                     className="absolute left-0 md:left-20 bottom-20 md:bottom-32 z-30"
                  >
                     <motion.div
                       animate={{ 
                          x: [0, 30, 0], 
                          y: [0, -30, 0],
                       }}
                       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                       className="relative"
                     >
                        <MousePointer2 className="text-white fill-black w-8 h-8 drop-shadow-lg" />
                        <div className="absolute top-6 left-4 bg-rose-500 text-white text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap shadow-sm">
                           User Interaction
                        </div>
                     </motion.div>
                  </motion.div>

               </div>
            </div>
         </motion.div>
      </div>

      {/* COMPARISON SECTION (Light & Modern) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mb-32 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
        >
           {/* Background Glows (Light Mode) */}
           <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-slate-50 to-white pointer-events-none"></div>
           <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-50 rounded-full blur-3xl pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none"></div>

           <div className="relative z-10 mb-12 text-center">
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">La Diferencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">MAST</span></h3>
              <p className="text-slate-500 max-w-xl mx-auto text-lg">Compara lo ordinario con lo extraordinario. Tu marca merece tecnología de punta.</p>
           </div>

           <div className="relative z-10 space-y-3">
              {/* Header Row (Desktop) */}
              <div className="hidden md:grid grid-cols-12 text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 px-5">
                 <div className="col-span-4">Característica</div>
                 <div className="col-span-4 pl-2">Otras Agencias</div>
                 <div className="col-span-4 pl-6 text-indigo-600">Ecosistema MAST</div>
              </div>

              {/* Rows */}
              {comparisonData.map((item, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0 items-center p-5 rounded-2xl bg-slate-50/50 hover:bg-white border border-transparent hover:border-indigo-100 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300"
                 >
                    {/* Mobile Label */}
                    <div className="md:hidden text-xs font-bold uppercase text-slate-400 mb-1">
                       {item.feature}
                    </div>

                    {/* Feature Icon & Name */}
                    <div className="col-span-4 flex items-center gap-4">
                       <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-400 flex items-center justify-center group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors shadow-sm">
                          <item.icon size={20} />
                       </div>
                       <span className="text-slate-900 font-bold text-lg md:text-base">{item.feature}</span>
                    </div>

                    {/* Others Side */}
                    <div className="col-span-4 flex items-center gap-3 text-slate-400 font-medium border-l-2 border-slate-200 pl-4 md:border-none md:pl-2">
                       <X size={16} className="text-red-400 shrink-0" />
                       <span className="line-through decoration-slate-300 decoration-2 text-sm md:text-base">{item.others}</span>
                    </div>

                    {/* MAST Side */}
                    <div className="col-span-4 flex items-center gap-3 text-slate-900 font-bold pl-4 border-l-2 border-indigo-200 md:border-none md:pl-6">
                       <div className="md:bg-indigo-50/80 md:px-4 md:py-2 md:rounded-lg md:border md:border-indigo-100/50 md:group-hover:bg-indigo-50 transition-colors flex items-center gap-3 w-full">
                           <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                              <Check size={12} strokeWidth={4} />
                           </div>
                           <span className="text-sm md:text-base text-slate-900">{item.mast}</span>
                       </div>
                    </div>
                 </motion.div>
              ))}
           </div>
        </motion.div>
      </div>

      {/* REBUILT TECH STACK SECTION - INTEGRATION TREE */}
      <div className="relative z-10 w-full max-w-7xl mx-auto mb-40 px-4">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT: THE INTEGRATION VISUAL (TREE) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 relative overflow-visible min-h-[500px] flex flex-col justify-between border border-slate-100 shadow-inner"
            >
               {/* SVG CONNECTIONS LAYER (Behind icons) */}
               <div className="absolute inset-0 z-0 pointer-events-none">
                   <svg className="w-full h-full" preserveAspectRatio="none">
                       {/* Gradient Def */}
                       <defs>
                           <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                               <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.2"/>
                               <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8"/>
                           </linearGradient>
                       </defs>
                       
                       {/* Lines connecting top rows to bottom center */}
                       {/* We can't know exact pixels easily, but we can approximate with percentages since container is relative */}
                       {/* Row 1 (Top) */}
                       {[10, 30, 50, 70, 90].map((x, i) => (
                           <motion.path 
                             key={`l1-${i}`}
                             initial={{ pathLength: 0, opacity: 0 }}
                             whileInView={{ pathLength: 1, opacity: 1 }}
                             transition={{ duration: 1.5, delay: i * 0.1 }}
                             d={`M ${x}% 12% C ${x}% 40%, 50% 50%, 50% 85%`}
                             fill="none"
                             stroke="url(#lineGradient)"
                             strokeWidth="1.5"
                             vectorEffect="non-scaling-stroke"
                           />
                       ))}
                        {/* Row 2 (Middle) */}
                       {[10, 30, 50, 70, 90].map((x, i) => (
                           <motion.path 
                             key={`l2-${i}`}
                             initial={{ pathLength: 0, opacity: 0 }}
                             whileInView={{ pathLength: 1, opacity: 1 }}
                             transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
                             d={`M ${x}% 30% C ${x}% 50%, 50% 60%, 50% 85%`}
                             fill="none"
                             stroke="url(#lineGradient)"
                             strokeWidth="1.5"
                             vectorEffect="non-scaling-stroke"
                           />
                       ))}
                   </svg>
               </div>

               {/* TOP ICONS GRID */}
               <div className="grid grid-cols-5 gap-4 relative z-10 mb-8">
                  {integrations.map((tech, i) => (
                     <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: -20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: i * 0.05 }}
                       whileHover={{ scale: 1.1, y: -5 }}
                       className="aspect-square bg-white rounded-2xl shadow-md border border-slate-100 flex flex-col items-center justify-center gap-1 cursor-pointer group"
                     >
                        <div className="w-6 h-6 md:w-8 md:h-8">{tech.icon}</div>
                     </motion.div>
                  ))}
               </div>
               
               {/* BOTTOM HUB */}
               <div className="relative z-10 flex justify-center mt-auto">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.4, delay: 0.8 }}
                    className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-b from-indigo-600 to-purple-700 rounded-3xl shadow-2xl shadow-indigo-300 flex items-center justify-center relative"
                  >
                     <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl animate-pulse"></div>
                     <div className="text-white font-black text-2xl z-10">MAST</div>
                     
                     {/* Rising Particles */}
                     {[1,2,3].map(p => (
                         <motion.div 
                           key={p}
                           className="absolute bottom-0 w-1 h-1 bg-white rounded-full"
                           animate={{ y: -100, opacity: 0 }}
                           transition={{ duration: 2, repeat: Infinity, delay: p * 0.5 }}
                         />
                     ))}
                  </motion.div>
               </div>

            </motion.div>

            {/* RIGHT: TEXT CONTENT */}
            <div className="space-y-8 text-center lg:text-left">
               <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                  Una plataforma, <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">integraciones ilimitadas.</span>
               </h2>
               
               <div className="flex flex-col gap-4">
                 <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-left relative group hover:-translate-y-1 transition-transform duration-300">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-l-xl"></div>
                    <p className="text-lg md:text-xl text-slate-600 font-medium italic mb-4 leading-relaxed">
                       "Nuestra plataforma permite a tu equipo colaborar, innovar y dar vida a las ideas, de manera fluida y sin esfuerzo técnico."
                    </p>
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700">DV</div>
                       <div>
                          <div className="font-bold text-slate-900 text-sm">Daniel Vaughn</div>
                          <div className="text-xs text-slate-500 uppercase tracking-wider">Founder & CEO</div>
                       </div>
                    </div>
                 </div>
               </div>

               <div>
                  <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-indigo-600 hover:scale-105 transition-all duration-300">
                     Ver todas las tecnologías
                  </button>
               </div>
            </div>

         </div>
      </div>

      {/* WEB DEVELOPMENT SERVICE SECTION (REPLACING SUPPORT/TICKETS) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto mb-40 px-4">
         <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative w-full h-auto md:h-[500px] bg-gradient-to-r from-[#6ee7b7] via-[#3b82f6] to-[#9333ea] rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-500/20 grid grid-cols-1 md:grid-cols-12 items-center p-8 md:p-16 gap-12"
         >
            {/* Left: The Dashboard Card */}
            <div className="col-span-1 md:col-span-5 relative h-full flex items-center">
               <motion.div 
                 whileHover={{ y: -10 }}
                 className="w-full bg-white rounded-3xl p-6 shadow-2xl"
               >
                  <div className="flex items-center justify-between mb-6">
                     <div className="flex gap-2 text-xs font-bold text-slate-500">
                        <span className="text-slate-900">Tráfico</span>
                        <span className="text-slate-300">Año</span>
                        <span className="text-slate-300">Mes</span>
                        <span className="text-slate-900">Hoy</span>
                     </div>
                     <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded text-[10px] font-bold text-slate-600 cursor-pointer hover:bg-slate-200">
                        <TrendingUp size={12} /> Analítica
                     </div>
                  </div>
                  
                  {/* Chart Area */}
                  <div className="relative h-48 w-full">
                     {/* Y Axis */}
                     <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-slate-400">
                        <span>10k</span>
                        <span>5k</span>
                        <span>2k</span>
                        <span>1k</span>
                        <span>0</span>
                     </div>
                     {/* Grid Lines */}
                     <div className="absolute left-6 right-0 top-0 bottom-0 flex flex-col justify-between">
                        {[1,2,3,4,5].map(i => <div key={i} className="w-full h-px border-t border-dashed border-slate-100" />)}
                     </div>
                     
                     {/* The Chart Wave */}
                     <div className="absolute left-6 right-0 bottom-0 top-4">
                        <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                           <motion.path
                             initial={{ pathLength: 0 }}
                             whileInView={{ pathLength: 1 }}
                             transition={{ duration: 2, ease: "easeInOut" }}
                             d="M0,40 Q10,35 20,38 T40,30 T60,15 T80,25 T100,20"
                             fill="none"
                             stroke="url(#gradient)"
                             strokeWidth="0.5"
                           />
                           <motion.path
                             initial={{ opacity: 0 }}
                             whileInView={{ opacity: 0.2 }}
                             transition={{ delay: 1, duration: 1 }}
                             d="M0,40 Q10,35 20,38 T40,30 T60,15 T80,25 T100,20 V50 H0 Z"
                             fill="url(#gradientFill)"
                           />
                           <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                 <stop offset="0%" stopColor="#10b981" />
                                 <stop offset="100%" stopColor="#6366f1" />
                              </linearGradient>
                              <linearGradient id="gradientFill" x1="0%" y1="0%" x2="0%" y2="100%">
                                 <stop offset="0%" stopColor="#6366f1" />
                                 <stop offset="100%" stopColor="white" stopOpacity="0" />
                              </linearGradient>
                           </defs>
                        </svg>
                        {/* Points */}
                        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.5 }} className="absolute top-[30%] left-[60%] w-3 h-3 bg-indigo-600 rounded-full border-2 border-white shadow-md" />
                        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.7 }} className="absolute top-[50%] left-[40%] w-2 h-2 bg-emerald-500 rounded-full border border-white" />
                     </div>
                  </div>

                  {/* X Axis */}
                  <div className="flex justify-between pl-6 text-[10px] text-slate-400 font-medium mt-2">
                     <span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span><span>Vie</span><span>Sáb</span><span>Dom</span>
                  </div>
               </motion.div>
            </div>

            {/* Right: Text Content */}
            <div className="col-span-1 md:col-span-7 text-white text-center md:text-left">
               <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Desarrollo Web <br/> de Alto Impacto
               </h2>
               <p className="text-indigo-50 text-lg mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
                  No solo diseñamos sitios web, construimos activos digitales que trabajan por ti. Velocidad extrema, SEO técnico y una experiencia de usuario que convierte.
               </p>
               
               <div className="inline-block">
                  <button className="bg-white text-slate-900 font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg">
                     Solicitar Demo
                  </button>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                  <div>
                     <div className="text-4xl md:text-5xl font-bold mb-1">100%</div>
                     <div className="text-indigo-100 mb-2">Rendimiento Lighthouse</div>
                     <div className="flex gap-1 justify-center md:justify-start">
                        {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="white" className="text-white"/>)}
                     </div>
                  </div>
                  <div className="flex flex-col justify-center">
                     <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                        <div className="w-10 h-10 rounded-full bg-indigo-900/30 flex items-center justify-center border border-white/20">
                           <Zap size={20} />
                        </div>
                        <div className="text-4xl md:text-5xl font-bold">&lt; 1s</div>
                     </div>
                     <div className="text-indigo-100 mb-2">Tiempo de carga</div>
                  </div>
               </div>
            </div>
         </motion.div>
      </div>

      {/* FAQ SECTION (MODERN ACCORDION) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto mb-32 px-4">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
         >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
               Preguntas <span className="text-indigo-600">Frecuentes</span>
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">
               Resolvemos tus dudas antes de empezar. Transparencia total.
            </p>
         </motion.div>

         <div className="space-y-4">
            {faqs.map((faq, idx) => {
               const isOpen = openFaq === idx;
               return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className={`group cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'bg-white border-indigo-200 shadow-xl shadow-indigo-100' : 'bg-white border-slate-200 hover:border-slate-300'}`}
                  >
                     <div className="flex items-center justify-between p-6 md:p-8">
                        <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 pr-8 ${isOpen ? 'text-indigo-600' : 'text-slate-900 group-hover:text-slate-700'}`}>
                           {faq.question}
                        </h3>
                        <motion.div 
                           animate={{ rotate: isOpen ? 45 : 0, backgroundColor: isOpen ? "#4f46e5" : "#f1f5f9" }}
                           className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300`}
                        >
                           <Plus size={20} className={`transition-colors ${isOpen ? 'text-white' : 'text-slate-500'}`} />
                        </motion.div>
                     </div>
                     
                     <AnimatePresence>
                        {isOpen && (
                           <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                           >
                              <div className="px-6 md:px-8 pb-8 pt-0">
                                 <p className="text-slate-500 leading-relaxed text-base md:text-lg">
                                    {faq.answer}
                                 </p>
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </motion.div>
               );
            })}
         </div>
      </div>

    </div>
  );
};

// Helper Icon Components for Logos
function Circle({ size, className, ...props }: any) {
   return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
         <circle cx="12" cy="12" r="10"></circle>
         <circle cx="12" cy="12" r="4"></circle>
      </svg>
   )
}

function Sun({ size, className, ...props }: any) {
   return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
         <circle cx="12" cy="12" r="5"></circle>
         <line x1="12" y1="1" x2="12" y2="3"></line>
         <line x1="12" y1="21" x2="12" y2="23"></line>
         <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
         <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
         <line x1="1" y1="12" x2="3" y2="12"></line>
         <line x1="21" y1="12" x2="23" y2="12"></line>
         <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
         <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
   )
}

function Command({ size, className, ...props }: any) {
   return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
         <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3 3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
      </svg>
   )
}

export default Home;