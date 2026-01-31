import React, { useState, useEffect } from 'react';
import { Sun, Droplets, Menu, X, Phone, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal'; // <--- IMPORT THE NEW FILE

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false); // Controls the modal

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* --- THE NAVBAR --- */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' 
            : 'bg-transparent py-4 lg:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-6 flex justify-between items-center">
          
          {/* 1. LOGO */}
          <Link 
            to="/" 
            className="flex items-center gap-2 cursor-pointer group z-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className={`p-2 rounded-xl transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-orange-100' : 'bg-white/30 backdrop-blur-md'}`}>
              <Sun className={`w-6 h-6 lg:w-7 lg:h-7 ${isScrolled || isMobileMenuOpen ? 'text-orange-600' : 'text-orange-500'} fill-orange-500`} />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg lg:text-xl font-extrabold tracking-tight leading-none ${isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-slate-900'}`}>
                વઢિયાર <span className="text-orange-600">નેચરલ</span>
              </span>
              <span className="text-[9px] lg:text-[10px] font-bold tracking-widest text-slate-500 uppercase">Solar & Oil Solution</span>
            </div>
          </Link>

          {/* 2. DESKTOP MENU (Colorful Buttons) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Home - Orange */}
            <Link to="/" className="px-5 py-2.5 rounded-full text-sm font-bold bg-orange-50 text-orange-700 hover:bg-orange-100 hover:scale-105 transition-all border border-orange-100">
              હોમ
            </Link>

            {/* About - Blue */}
            <Link to="/about" className="px-5 py-2.5 rounded-full text-sm font-bold bg-blue-50 text-blue-700 hover:bg-blue-100 hover:scale-105 transition-all border border-blue-100">
              અમારા વિશે
            </Link>

            {/* Oil - Green */}
            <Link to="/oil" className="flex items-center gap-2 px-5 py-2.5 bg-green-100 text-green-800 rounded-full text-sm font-bold border border-green-200 hover:bg-green-200 transition-all hover:scale-105 shadow-sm">
              <Droplets className="w-4 h-4 fill-green-600" />
              શુદ્ધ સીંગતેલ
            </Link>

            {/* Contact Button (Triggers Modal) */}
            <button 
              onClick={() => setIsContactOpen(true)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" />
              સંપર્ક કરો
            </button>
          </div>

          {/* 3. MOBILE TOGGLES */}
          <div className="md:hidden z-50 flex items-center gap-3">
            {/* Mobile Contact Icon */}
            <button 
              onClick={() => setIsContactOpen(true)}
              className={`p-2.5 rounded-xl transition-all active:scale-90 ${isScrolled ? 'bg-slate-900 text-white' : 'bg-white/40 backdrop-blur-md text-slate-900 border border-slate-200'}`}
            >
              <Phone className="w-5 h-5" />
            </button>

            {/* Mobile Menu Icon */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2.5 rounded-xl transition-all active:scale-90 ${isMobileMenuOpen ? 'bg-slate-100 text-slate-900' : 'bg-slate-900 text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-28 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-3">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex justify-between items-center text-lg font-bold text-orange-800 bg-orange-50 p-4 rounded-2xl border border-orange-100">
                હોમ <ChevronRight className="w-5 h-5 opacity-50" />
              </Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="flex justify-between items-center text-lg font-bold text-blue-800 bg-blue-50 p-4 rounded-2xl border border-blue-100">
                અમારા વિશે <ChevronRight className="w-5 h-5 opacity-50" />
              </Link>
              <Link to="/oil" onClick={() => setIsMobileMenuOpen(false)} className="flex justify-between items-center text-lg font-bold text-green-800 bg-green-50 p-4 rounded-2xl border border-green-100">
                <div className="flex items-center gap-3"><Droplets className="w-5 h-5 fill-green-600" /> શુદ્ધ સીંગતેલ</div>
                <ChevronRight className="w-5 h-5 opacity-50" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- IMPORTED CONTACT MODAL --- */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Navbar;