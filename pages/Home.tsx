import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Play, Globe, Server, ShieldCheck, CheckCircle2, Palette, Layout, MousePointer2, Layers, Zap, Activity, Code2, CreditCard, Music, Wifi, Battery, MessageSquare, Users, TrendingUp, Timer, Cpu, HeartHandshake } from 'lucide-react';
import { Page } from '../types';
import TiltCard from '../components/TiltCard';

interface HomeProps {
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  
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
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/4 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] rounded-full bg-gradient-to-tr from-indigo-200/60 to-purple-200/60 blur-3xl mix-blend-multiply"
        />
        <motion.div 
          animate={{ rotate: -360 }}
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
                   style={{ transform: "translateZ(40px)" }}
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
                   style={{ transform: "translateZ(90px)" }}
                >
                   <div className="flex gap-1.5 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                   </div>
                   <div className="font-mono text-[10px] space-y-1">
                      <div className="text-slate-400">// Initiating core</div>
                      <div className="flex gap-1">
                         <span className="text-purple-400">import</span>
                         <span className="text-white">{`{ Future }`}</span>
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
                   style={{ transform: "translateZ(60px)" }}
                >
                   <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-fuchsia-600 to-purple-500 flex items-center justify-center text-white shadow-md">
                      <Play size={20} fill="currentColor" />
                   </div>
                   <div className="overflow-hidden">
                      <div className="text-xs font-bold text-slate-900">Creative Flow</div>
                      <div className="text-[10px] text-slate-500 truncate">Now Playing • 2:45</div>
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
                   style={{ transform: "translateZ(80px)" }}
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
                      <span>John Doe</span>
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
                   style={{ transform: "translateZ(100px)" }}
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
                   className="absolute -z-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-indigo-200/40 rounded-full"
                   style={{ transform: "translateZ(-50px)" }}
                />
                <motion.div 
                   animate={{ rotate: -360 }}
                   transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                   className="absolute -z-10 w-[400px] h-[400px] md:w-[700px] md:h-[700px] border border-purple-200/30 rounded-full border-dashed"
                   style={{ transform: "translateZ(-80px)" }}
                />

            </motion.div>
          </TiltCard>
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
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-bl from-fuchsia-600/30 to-indigo-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 15, repeat: Infinity }} className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

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

      {/* WHY CHOOSE US (BENTO GRID 3D SECTION) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto mb-32">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
             ¿Por qué elegir <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">MAST?</span>
           </h2>
           <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto px-4">
             No somos otra agencia más. Somos tu socio estratégico de ingeniería y diseño.
           </p>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-0">
            
            {/* Card 1: Large - Results/ROI */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-1 md:col-span-2 md:row-span-2 h-full min-h-[320px]"
            >
               <TiltCard className="h-full" rotationFactor={10}>
                  <div className="h-full bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden flex flex-col justify-between group antialiased">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                     
                     <div className="relative z-10">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-4">
                           <TrendingUp size={24} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Resultados Reales</h3>
                        <p className="text-slate-500 font-medium">Diseñamos para convertir, no solo para impresionar. Aumentamos tu ROI digital.</p>
                     </div>

                     {/* Animated 3D Chart Graphic */}
                     <div className="relative h-40 w-full mt-8 flex items-end justify-around px-4 perspective-container">
                        <div className="absolute inset-x-0 bottom-0 h-px bg-slate-200"></div>
                        {[40, 65, 45, 85, 60, 95].map((h, i) => (
                           <motion.div
                             key={i}
                             initial={{ height: 0 }}
                             whileInView={{ height: `${h}%` }}
                             transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
                             className="w-6 md:w-8 bg-gradient-to-t from-green-500 to-emerald-400 rounded-t-md shadow-lg relative group-hover:from-green-400 group-hover:to-emerald-300 transition-all"
                             style={{ transformStyle: "preserve-3d" }}
                           >
                              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                 {h}%
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  </div>
               </TiltCard>
            </motion.div>

            {/* Card 2: Small - Speed */}
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="col-span-1 md:col-span-1 h-[320px]"
            >
               <TiltCard className="h-full">
                  <div className="h-full bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden flex flex-col group antialiased">
                     <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     
                     <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4 relative z-10">
                        <Timer size={20} strokeWidth={2.5} />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">Velocidad</h3>
                     <p className="text-slate-500 text-sm relative z-10">Optimización extrema para Core Web Vitals.</p>

                     {/* Animated Radial Pulse */}
                     <div className="flex-1 flex items-center justify-center relative mt-4">
                        <motion.div 
                           animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                           transition={{ duration: 2, repeat: Infinity }}
                           className="absolute w-24 h-24 bg-amber-400/20 rounded-full blur-md"
                        />
                        <motion.div 
                           animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                           transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                           className="absolute w-24 h-24 border border-amber-500/50 rounded-full"
                        />
                        <Zap size={48} className="text-amber-500 relative z-10 drop-shadow-sm" fill="currentColor" />
                     </div>
                  </div>
               </TiltCard>
            </motion.div>

            {/* Card 3: Small - Tech */}
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="col-span-1 md:col-span-1 h-[320px]"
            >
               <TiltCard className="h-full">
                  <div className="h-full bg-slate-900 rounded-3xl p-6 shadow-xl shadow-slate-900/20 border border-slate-800 relative overflow-hidden flex flex-col text-white group antialiased">
                     
                     <div className="w-10 h-10 bg-slate-800 text-indigo-400 rounded-xl flex items-center justify-center mb-4 relative z-10">
                        <Cpu size={20} strokeWidth={2.5} />
                     </div>
                     <h3 className="text-xl font-bold mb-2 relative z-10">Tech Stack</h3>
                     <p className="text-slate-400 text-sm relative z-10">Next.js, React 19, TypeScript, AI.</p>

                     {/* Animated Code Elements */}
                     <div className="flex-1 relative mt-6 perspective-container">
                        <motion.div 
                           animate={{ rotateY: 360 }}
                           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                           className="absolute inset-0 flex items-center justify-center"
                           style={{ transformStyle: "preserve-3d" }}
                        >
                           {[0, 90, 180, 270].map((deg, i) => (
                              <div 
                                 key={i} 
                                 className="absolute w-16 h-20 bg-slate-800/80 border border-indigo-500/30 backdrop-blur-sm rounded-lg flex items-center justify-center"
                                 style={{ transform: `rotateY(${deg}deg) translateZ(60px)` }}
                              >
                                 <Code2 size={24} className="text-indigo-400" />
                              </div>
                           ))}
                        </motion.div>
                     </div>
                  </div>
               </TiltCard>
            </motion.div>

            {/* Card 4: Wide - Support */}
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="col-span-1 md:col-span-2 h-[240px]"
            >
               <TiltCard className="h-full" rotationFactor={5}>
                  <div className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 shadow-xl shadow-indigo-500/30 border border-indigo-500 relative overflow-hidden flex items-center justify-between text-white antialiased">
                     
                     {/* Background Pattern */}
                     <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                     <motion.div 
                        animate={{ x: [0, 100, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -left-20 top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                     />

                     <div className="relative z-10 max-w-md">
                        <div className="flex items-center gap-3 mb-3">
                           <HeartHandshake size={28} className="text-pink-300" />
                           <h3 className="text-2xl font-bold">Soporte 1 a 1</h3>
                        </div>
                        <p className="text-indigo-100 font-medium leading-relaxed text-sm md:text-base">
                           Olvídate de los tickets automatizados. Hablas directamente con nuestros ingenieros. Tu éxito es nuestra prioridad absoluta.
                        </p>
                     </div>

                     <div className="hidden md:flex gap-3 relative z-10">
                        {[1,2,3].map((i) => (
                           <motion.div 
                              key={i}
                              initial={{ y: 20, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.5 + (i * 0.1) }}
                              className="w-12 h-12 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center -ml-4 shadow-lg"
                           >
                              <Users size={20} className="text-white" />
                           </motion.div>
                        ))}
                        <div className="w-12 h-12 rounded-full bg-white text-indigo-600 flex items-center justify-center font-bold -ml-4 shadow-lg relative z-20">
                           +5
                        </div>
                     </div>
                  </div>
               </TiltCard>
            </motion.div>

         </div>
      </div>

    </div>
  );
};

export default Home;