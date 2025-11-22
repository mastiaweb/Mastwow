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
            className={`relative bg-white w-full ${hasImage ? 'max-w-5xl' : 'max-w-2xl'} max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible rounded-3xl md:rounded-[2rem] shadow-2xl border border-slate-200 flex flex-col md:flex-row scrollbar-hide`}
          >
            {/* Top Gradient Line (Only visible on mobile or no-image layout) */}
            {!hasImage && <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${gradient}`} />}
            
            {/* Close Button */}
            <button 
              onClick={onClose} 
              className="absolute top-3 right-3 md:top-4 md:right-4 z-20 bg-white/90 backdrop-blur text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full p-1.5 md:p-2 transition-all shadow-sm"
              aria-label="Cerrar modal"
            >
              <X size={20} className="md:w-6 md:h-6" />
            </button>

            {/* IMAGE SECTION (If present) */}
            {hasImage && (
              <div className="w-full md:w-5/12 h-40 md:h-auto relative shrink-0 overflow-hidden">
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
            <div className={`p-6 md:p-12 flex flex-col ${hasImage ? 'w-full md:w-7/12' : 'w-full'}`}>
              
              <div className="flex flex-col items-start gap-4 md:gap-6 mb-4 md:mb-6">
                 <div className="flex items-center gap-3 md:gap-4">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${data.bg} ${color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                        <Icon size={24} className="md:w-7 md:h-7" strokeWidth={2.5} />
                    </div>
                    {/* On layout with image, show title next to icon compactly */}
                    {hasImage && (
                      <div>
                        <h2 className="text-xl md:text-3xl font-black text-slate-900 leading-none mb-1">{title}</h2>
                        <p className={`text-[10px] md:text-xs font-bold ${color} uppercase tracking-widest`}>{data.subtitle}</p>
                      </div>
                    )}
                 </div>

                 {/* On layout WITHOUT image, show title below icon (centered or standard) */}
                 {!hasImage && (
                    <div>
                      <h2 className="text-2xl md:text-4xl font-black text-slate-900">{title}</h2>
                      <p className={`text-xs md:text-sm font-semibold ${color} uppercase tracking-wider`}>{data.subtitle}</p>
                    </div>
                 )}
              </div>

              <p className="text-slate-600 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                {details.paragraph}
              </p>

              <div className="space-y-3 mb-8 md:mb-10 flex-grow">
                {details.points.map((point: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className={`mt-1 p-0.5 rounded-full bg-white border ${color.replace('text-', 'border-')} flex-shrink-0`}>
                       <CheckCircle size={12} className={`md:w-[14px] md:h-[14px] ${color}`} fill="currentColor" stroke="white" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm md:text-base group-hover:text-slate-900 transition-colors">{point}</span>
                  </div>
                ))}
              </div>

              <motion.button
                onClick={handleContactClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-slate-900 text-white px-6 py-3 md:py-4 rounded-xl text-base md:text-lg font-bold shadow-lg shadow-slate-500/30 flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all group mt-auto"
              >
                Empezar Proyecto
                <ArrowRight size={18} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;