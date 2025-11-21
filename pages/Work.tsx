import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants';
import TiltCard from '../components/TiltCard';

const Work: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-slate-900 px-6 md:px-20 pt-24 md:pt-40 pb-20 flex flex-col">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 w-full md:w-4/5">
        <motion.div
           initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
           whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-slate-900">
            Casos de <br/> <span className="text-cyan-600">Éxito</span>
          </h2>
        </motion.div>
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="text-left md:text-right mt-4 md:mt-0"
        >
           <p className="text-slate-500">Proyectos seleccionados 2023-2025</p>
        </motion.div>
      </div>

      <div className="space-y-20 md:space-y-32 w-full md:w-4/5">
        {PORTFOLIO_DATA.map((project, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
            
            {/* Image Part */}
            <div className="w-full md:w-3/5 h-[300px] md:h-[500px]">
              <TiltCard rotationFactor={10} className="h-full w-full">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, filter: 'blur(5px)' }}
                  whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                  className={`relative w-full h-full rounded-3xl overflow-hidden shadow-2xl`}
                >
                   <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 hover:opacity-10 z-10 transition-opacity duration-500`}></div>
                   <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-105"
                   />
                </motion.div>
              </TiltCard>
            </div>

            {/* Text Part */}
            <div className="w-full md:w-2/5 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
              >
                <span className="inline-block py-1 px-3 rounded border border-gray-300 text-sm font-mono mb-4 text-cyan-700 bg-cyan-50">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">{project.title}</h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                  Una solución digital creada a medida para potenciar la presencia online y optimizar procesos internos a través de una arquitectura moderna.
                </p>
                <button className="mt-8 text-base md:text-lg font-bold underline decoration-2 decoration-cyan-500 underline-offset-8 hover:text-cyan-700 hover:decoration-cyan-700 transition-colors">
                  VER CASO DE ESTUDIO
                </button>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;