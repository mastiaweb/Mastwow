import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Page } from '../types';
import { NAVIGATION_ITEMS } from '../constants';
import { Home, Layers, Briefcase, Mail } from 'lucide-react';

interface NavSidebarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const NavSidebar: React.FC<NavSidebarProps> = ({ currentPage, setPage }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getIcon = (id: Page) => {
    switch (id) {
      case Page.HOME: return <Home size={20} />;
      case Page.SERVICES: return <Layers size={20} />;
      case Page.WORK: return <Briefcase size={20} />;
      case Page.CONTACT: return <Mail size={20} />;
    }
  };

  // --- MOBILE VERSION ---
  if (isMobile) {
    return (
      <>
        {/* MOBILE TOP HEADER BRANDING */}
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="fixed top-0 left-0 right-0 z-50 h-16 px-6 flex items-center justify-between bg-white/70 backdrop-blur-xl border-b border-slate-100 shadow-sm"
        >
          <div className="flex items-center gap-2">
            {/* Animated Status Dot */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
            </span>
            
            {/* Animated MAST Logo */}
            <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-600 to-purple-600 bg-[length:200%_auto] animate-gradient-x">
              MAST
            </span>
          </div>

          {/* Mini Year Tag */}
          <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
            2025
          </span>
        </motion.div>

        {/* MOBILE BOTTOM NAV */}
        <nav className="fixed bottom-0 left-0 w-full h-20 z-50 bg-white/90 backdrop-blur-lg border-t border-gray-200 flex items-center justify-around px-2 pb-2 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            const Icon = getIcon(item.id);

            return (
              <div
                key={item.id}
                onClick={() => setPage(item.id)}
                className="flex flex-col items-center justify-center w-full h-full cursor-pointer relative overflow-hidden"
              >
                {isActive && (
                  <motion.div
                    layoutId="mobileNavHighlight"
                    className={`absolute inset-0 ${item.color} opacity-10 rounded-xl my-2`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <div className={`relative z-10 flex flex-col items-center gap-1 transition-colors duration-300 ${isActive ? 'text-black' : 'text-gray-400'}`}>
                  <div className={`${isActive ? item.color.replace('bg-', 'text-') : ''} transition-colors duration-300`}>
                    {Icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
                
                {isActive && (
                  <motion.div 
                    layoutId="mobileNavIndicator"
                    className={`absolute top-0 w-12 h-1 rounded-b-full ${item.color}`} 
                  />
                )}
              </div>
            );
          })}
        </nav>
      </>
    );
  }

  // --- DESKTOP VERSION (FLOATING TOP DOCK) ---
  return (
    <div className="fixed top-6 inset-x-0 flex justify-center z-50 pointer-events-none">
      <nav className="pointer-events-auto bg-white/80 backdrop-blur-md border border-white/40 rounded-full px-2 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-2">
        {/* Desktop Logo inside Nav */}
        <div className="pl-4 pr-2 hidden md:flex items-center gap-2 mr-2 border-r border-slate-200 h-8">
           <span className="font-black text-xl tracking-tighter text-slate-900">MAST</span>
        </div>

        {NAVIGATION_ITEMS.map((item) => {
          const isActive = currentPage === item.id;
          const Icon = getIcon(item.id);

          return (
            <motion.button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`
                relative px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 group
                ${isActive ? 'text-white' : 'text-gray-500 hover:text-black'}
              `}
            >
              {/* Active Background Pill */}
              {isActive && (
                <motion.div
                  layoutId="desktopNavHighlight"
                  className={`absolute inset-0 rounded-full ${item.color} shadow-lg`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              {/* Content */}
              <div className="relative z-10 flex items-center gap-2">
                <span className={`${isActive ? 'text-white' : 'group-hover:scale-110 transition-transform'}`}>
                   {Icon}
                </span>
                <span className={`text-sm font-bold uppercase tracking-wider ${isActive ? 'text-white' : ''}`}>
                  {item.label}
                </span>
              </div>
            </motion.button>
          );
        })}
      </nav>
    </div>
  );
};

export default NavSidebar;