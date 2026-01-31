import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Copy, Check, Sun } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('8160644596');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        // 1. MAIN WRAPPER: Fixed to screen, Z-Index very high, Flexbox to center everything
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          
          {/* 2. DARK BACKDROP (Click to close) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* 3. THE BUSINESS CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-sm bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-700"
          >
            
            {/* --- Background Glow Effects --- */}
            <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-orange-500/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-[-50%] left-[-50%] w-full h-full bg-blue-600/20 rounded-full blur-[80px] pointer-events-none"></div>

            {/* --- Close Button (Top Right) --- */}
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all active:scale-90 z-20"
            >
              <X className="w-6 h-6" />
            </button>

            {/* --- CARD CONTENT --- */}
            <div className="p-8 flex flex-col items-center text-center relative z-10">
              
              {/* Logo Box */}
              <div className="bg-gradient-to-br from-orange-400 to-yellow-500 p-4 rounded-2xl shadow-lg shadow-orange-500/20 mb-4">
                <Sun className="w-10 h-10 text-white fill-white" />
              </div>

              {/* Company Name */}
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Vadhiyar <span className="text-orange-400">Solar</span>
              </h2>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mt-2 mb-6">
                Official Business Card
              </p>

              {/* Phone Number Container */}
              <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
                <p className="text-slate-500 text-[10px] font-bold uppercase mb-1 tracking-wider text-left pl-1">Mobile Number</p>
                <div className="flex items-center justify-between">
                  <a href="tel:+918160644596" className="text-2xl font-mono font-bold text-white hover:text-orange-400 transition-colors">
                    81606 44596
                  </a>
                  <button 
                    onClick={handleCopy}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all active:scale-90"
                    title="Copy Number"
                  >
                    {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Address Section */}
              <div className="w-full mb-8 text-left pl-2 border-l-2 border-orange-500/50">
                 <p className="text-slate-400 text-[10px] font-bold uppercase mb-1">📍 Office Address</p>
                 <p className="text-slate-200 text-sm leading-relaxed">
                   Swarnim Complex 01-03,<br />
                   Near Adarsh Campus, Radhanpur.
                 </p>
              </div>

              {/* BIG Call Button */}
              <a 
                href="tel:+918160644596"
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-slate-900 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-orange-500/20 active:scale-95 transition-all"
              >
                <Phone className="w-6 h-6 fill-slate-900" />
                Call Now
              </a>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;