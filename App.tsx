import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavSidebar from './components/NavSidebar';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import Contact from './pages/Contact';
import { Page } from './types';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Optional: Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home setPage={setCurrentPage} />;
      case Page.SERVICES:
        return <Services />;
      case Page.WORK:
        return <Work />;
      case Page.CONTACT:
        return <Contact />;
      default:
        return <Home setPage={setCurrentPage} />;
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
            transition={{ duration: 1 }}
            className="text-[15vw] font-black leading-none text-transparent opacity-[0.03]"
            style={{ 
              WebkitTextStroke: '2px #000',
              fontFamily: "'Plus Jakarta Sans', sans-serif" 
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
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="min-h-screen w-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Sidebar / Bottom Bar */}
      <NavSidebar currentPage={currentPage} setPage={setCurrentPage} />
      
      {/* Floating WhatsApp Button (Global) */}
      <motion.a
        href="https://wa.me/51964375968"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-24 md:bottom-8 right-6 md:right-10 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-2xl shadow-green-400/40 flex items-center justify-center cursor-pointer hover:brightness-110 transition-all"
      >
         <MessageCircle size={32} fill="white" className="text-white" />
      </motion.a>

      {/* Global Grain Texture Overlay - HIDDEN ON MOBILE FOR PERFORMANCE */}
      {/* The mix-blend-multiply is extremely heavy for mobile GPUs on scroll */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.3] z-40 mix-blend-multiply hidden md:block" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
      </div>
    </div>
  );
};

export default App;