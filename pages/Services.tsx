import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SERVICES_DATA } from '../constants';
import { Monitor, Cpu, Globe, Smartphone } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const IconMap: Record<string, React.ElementType> = {
  monitor: Monitor,
  cpu: Cpu,
  globe: Globe,
  smartphone: Smartphone
};

const Services: React.FC = () => {
  // Variantes de animación para contenedores y items
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 100, scale: 0.8, filter: 'blur(10px)' },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 20 
      } 
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-slate-900 px-6 md:px-20 pt-24 md:pt-40 pb-20 flex flex-col">
      <motion.div 
        initial={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-slate-900">
          Servicios <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-indigo-600">Digitales</span>
        </h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-2 bg-lime-400 mt-4" 
        />
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-4/5"
      >
        {SERVICES_DATA.map((service, idx) => {
          const Icon = IconMap[service.icon];
          return (
            <motion.div variants={item} key={idx} className="h-full">
              <TiltCard className="h-full" rotationFactor={8}>
                <div className="h-full p-8 bg-white border border-gray-200 hover:border-gray-300 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                  {/* Background Gradient Glow */}
                  <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${service.color.replace('text-', 'from-')} to-transparent opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  <div className="flex items-start justify-between mb-6">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className={`p-4 rounded-2xl bg-gray-50 ${service.color}`}
                    >
                      <Icon size={32} />
                    </motion.div>
                    <span className="text-5xl font-black text-gray-100 group-hover:text-gray-200 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed group-hover:text-slate-700">
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span className={service.color}>Saber más</span>
                    <div className={`h-[2px] w-8 ${service.color.replace('text', 'bg')}`} />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Services;