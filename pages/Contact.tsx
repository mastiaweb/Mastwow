import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-slate-900 flex items-center justify-center px-6 py-24 md:py-20">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:w-4/5">
        
        {/* Info Side */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="space-y-8 md:space-y-12"
        >
          <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-none text-slate-900">
              Empezar <br/> <span className="text-lime-600">Proyecto</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500">
              ¿Tienes una idea radical? Estamos listos para construirla. Cuéntanos sobre tu visión.
            </p>
          </motion.div>

          <div className="space-y-6 md:space-y-8">
             {[
                { icon: Mail, title: "Email", val: "mastiaweb@gmail.com" },
                { icon: Phone, title: "Teléfono", val: "+51 964 375 968" },
                { icon: MapPin, title: "Oficina", val: "Lima, Perú" }
             ].map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ x: -50, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ delay: idx * 0.2, duration: 0.5 }}
                 className="flex items-center gap-6 group"
               >
                  <div className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-lime-600 group-hover:bg-lime-400 group-hover:text-black transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase font-bold tracking-wider">{item.title}</p>
                    <p className="text-lg md:text-xl font-medium break-all text-slate-900">{item.val}</p>
                  </div>
               </motion.div>
             ))}
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.div 
          initial={{ opacity: 0, rotateY: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.3, duration: 1 }}
          className="relative perspective-container"
        >
           <div className="bg-white p-6 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden transform hover:translate-z-10 transition-transform duration-500">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-lime-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60"></div>

              <form className="space-y-4 md:space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-400 tracking-widest">Nombre</label>
                    <input type="text" className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-lime-500 outline-none py-3 text-slate-900 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-400 tracking-widest">Empresa</label>
                    <input type="text" className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-lime-500 outline-none py-3 text-slate-900 transition-colors" placeholder="Inc. Co" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400 tracking-widest">Email</label>
                  <input type="email" className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-lime-500 outline-none py-3 text-slate-900 transition-colors" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400 tracking-widest">Mensaje</label>
                  <textarea rows={4} className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-lime-500 outline-none py-3 text-slate-900 transition-colors resize-none" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
                </div>

                <button type="button" className="w-full bg-black text-white font-black uppercase tracking-widest py-4 rounded-lg hover:bg-lime-500 hover:text-black hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg mt-4">
                  Enviar Mensaje <Send size={18} />
                </button>
              </form>
           </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;