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

  const { icon: Icon, title, color, details, gradient, image } = data;
  const hasImage = !!image;

  // Fix: Explicitly type variants with `Variants` from framer-motion to resolve a TypeScript type error with the `transition.type` property.
  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.5 } },
    exit: { opacity: 0, scale: 0.95, y: 50, transition: { duration: 0.2 } },
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
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-6"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
            className={`relative bg-white w-full ${hasImage ? 'max-w-5xl' : 'max-w-2xl'} rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200 flex flex-col md:flex-row`}
          >
            {/* Top Gradient Line (Only visible on mobile or no-image layout) */}
            {!hasImage && <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${gradient}`} />}
            
            {/* Close Button */}
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full p-2 transition-all shadow-sm"
              aria-label="Cerrar modal"
            >
              <X size={24} />
            </button>

            {/* IMAGE SECTION (If present) */}
            {hasImage && (
              <div className="w-full md:w-5/12 h-48 md:h-auto relative overflow-hidden">
                 <img 
                   src={image} 
                   alt={title} 
                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                 />
                 {/* Overlay Gradient to blend image with text */}
                 <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r ${color.replace('text-', 'from-')}/40 to-transparent mix-blend-multiply`} />
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
              </div>
            )}

            {/* CONTENT SECTION */}
            <div className={`p-8 md:p-12 flex flex-col ${hasImage ? 'w-full md:w-7/12' : 'w-full'}`}>
              
              <div className="flex flex-col items-start gap-6 mb-6">
                 <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${data.bg} ${color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                        <Icon size={28} strokeWidth={2.5} />
                    </div>
                    {/* On layout with image, show title next to icon compactly */}
                    {hasImage && (
                      <div>
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-none mb-1">{title}</h2>
                        <p className={`text-xs font-bold ${color} uppercase tracking-widest`}>{data.subtitle}</p>
                      </div>
                    )}
                 </div>

                 {/* On layout WITHOUT image, show title below icon (centered or standard) */}
                 {!hasImage && (
                    <div>
                      <h2 className="text-3xl md:text-4xl font-black text-slate-900">{title}</h2>
                      <p className={`text-sm font-semibold ${color} uppercase tracking-wider`}>{data.subtitle}</p>
                    </div>
                 )}
              </div>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                {details.paragraph}
              </p>

              <div className="space-y-3 mb-10 flex-grow">
                {details.points.map((point: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className={`mt-1 p-0.5 rounded-full bg-white border ${color.replace('text-', 'border-')} flex-shrink-0`}>
                       <CheckCircle size={14} className={`${color}`} fill="currentColor" stroke="white" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm md:text-base group-hover:text-slate-900 transition-colors">{point}</span>
                  </div>
                ))}
              </div>

              <motion.button
                onClick={handleContactClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-slate-900 text-white px-6 py-4 rounded-xl text-lg font-bold shadow-lg shadow-slate-500/30 flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all group mt-auto"
              >
                Empezar Proyecto
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;