import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
  setPage: (page: Page) => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, data, setPage }) => {
  if (!data) return null;

  const { icon: Icon, title, color, details, gradient } = data;

  // Fix: Explicitly type variants with `Variants` from framer-motion to resolve a TypeScript type error with the `transition.type` property.
  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.5 } },
    exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.2 } },
  };
  
  const handleContactClick = () => {
    onClose();
    setPage(Page.CONTACT);
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
          >
            <div className={`h-2 w-full bg-gradient-to-r ${gradient}`} />
            
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full p-2 transition-all"
              aria-label="Cerrar modal"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                 <div className={`w-16 h-16 rounded-2xl ${data.bg} ${color} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={32} strokeWidth={2.5} />
                  </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900">{title}</h2>
                  <p className={`text-sm font-semibold ${color} uppercase tracking-wider`}>{data.subtitle}</p>
                </div>
              </div>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                {details.paragraph}
              </p>

              <div className="space-y-4 mb-10">
                {details.points.map((point: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <motion.button
                onClick={handleContactClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-slate-900 text-white px-6 py-4 rounded-xl text-lg font-bold shadow-lg shadow-slate-500/30 flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all"
              >
                Empezar Proyecto
                <ArrowRight size={20} />
              </motion.button>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;