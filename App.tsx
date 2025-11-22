import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavSidebar from './components/NavSidebar';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import Contact from './pages/Contact';
import { Page } from './types';
import InfoModal from './components/InfoModal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [modalData, setModalData] = useState<any | null>(null);

  // Optional: Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home setPage={setCurrentPage} setModalData={setModalData} />;
      case Page.SERVICES:
        return <Services setModalData={setModalData} />;
      case Page.WORK:
        return <Work />;
      case Page.CONTACT:
        return <Contact />;
      default:
        return <Home setPage={setCurrentPage} setModalData={setModalData} />;
    }
  };

  // Get Watermark text based on page
  const getWatermark = () => {
    switch(currentPage) {
       case Page.HOME: return 'FUTURE';
       case Page.SERVICES: return 'SYSTEMS';
       case Page.WORK: return 'PROJECTS';
       case Page.CONTACT: return 'CONNECT';
       default: return '';
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] overflow-x-hidden selection:bg-lime-400 selection:text-black">
      
      {/* Tech Grid Background (Desktop) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.6] hidden md:block"
           style={{ 
             backgroundImage: `
               linear-gradient(to right, #e2e8f0 1px, transparent 1px),
               linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
             `,
             backgroundSize: '4rem 4rem'
           }}>
      </div>

      {/* Giant Dynamic Watermark (Desktop) */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none hidden md:block select-none overflow-hidden w-full text-center">
         <motion.h1 
            key={currentPage}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.8 }} // Sigeramente más rápido
            className="text-[15vw] font-black leading-none text-transparent opacity-[0.03]"
            style={{ 
              WebkitTextStroke: '2px #000',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              willChange: "transform, opacity"
            }}
         >
            {getWatermark()}
         </motion.h1>
      </div>

      {/* Main Content Area */}
      {/* Mobile: pb-24 for bottom nav. Desktop: pt-32 for top nav. No right padding needed anymore. */}
      <main className="flex-1 pb-24 md:pb-0 md:pt-0 relative z-10 w-full transform-gpu">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            /* PERFORMANCE FIX: Eliminado 'filter: blur' que es muy pesado */
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }} // Transición más rápida
            className="min-h-screen w-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Sidebar / Bottom Bar */}
      <NavSidebar currentPage={currentPage} setPage={setCurrentPage} />
      
      {/* Floating WhatsApp Button (Bottom Right - Official Icon) */}
      {/* Mobile: bottom-24 to be above the nav bar. Desktop: bottom-10. */}
      <motion.a
        href="https://wa.me/51964375968"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-24 right-5 md:bottom-10 md:right-10 z-[60] w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-2xl shadow-green-400/30 flex items-center justify-center cursor-pointer hover:brightness-105 transition-all"
      >
         <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-9 md:h-9">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
         </svg>
      </motion.a>

      {/* Global Grain Texture Overlay - HIDDEN ON MOBILE FOR PERFORMANCE */}
      {/* The mix-blend-multiply is extremely heavy for mobile GPUs on scroll */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.3] z-40 mix-blend-multiply hidden md:block" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
      </div>

      {/* Global Info Modal */}
      <InfoModal 
        isOpen={!!modalData} 
        onClose={() => setModalData(null)} 
        data={modalData}
        setPage={setCurrentPage}
      />
    </div>
  );
};

export default App;