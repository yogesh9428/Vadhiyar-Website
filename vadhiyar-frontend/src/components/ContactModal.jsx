import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Copy, Check, MapPin, Sun, Star } from 'lucide-react';

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
        <>
          {/* 1. Dark Backdrop (Blur Effect) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] cursor-pointer"
          />

          {/* 2. The Business Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm z-[101]"
          >
            <div className="relative bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-700">
              
              {/* --- Background Effects (Glow) --- */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

              {/* --- Close Button --- */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* --- CARD CONTENT --- */}
              <div className="p-8 relative z-10 text-center">
                
                {/* Logo & Header */}
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-gradient-to-br from-orange-400 to-yellow-400 p-3 rounded-2xl shadow-lg shadow-orange-500/20 mb-3">
                    <Sun className="w-8 h-8 text-white fill-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    Vadhiyar <span className="text-orange-400">Solar</span>
                  </h2>
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mt-1">
                    Solar & Oil Solutions
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-6"></div>

                {/* Phone Number Section */}
                <div className="mb-6">
                  <p className="text-slate-400 text-[10px] font-bold uppercase mb-2">📞 Call for Inquiry</p>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-2 pl-4 flex items-center justify-between">
                    <a href="tel:+918160644596" className="text-2xl font-mono font-bold text-white">
                      81606 44596
                    </a>
                    <button 
                      onClick={handleCopy}
                      className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-all active:scale-95"
                    >
                      {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Location Section */}
                <div className="mb-8">
                   <p className="text-slate-400 text-[10px] font-bold uppercase mb-2">📍 Visit Office</p>
                   <p className="text-slate-300 text-sm leading-relaxed">
                     Swarnim Complex 01-03, <br />
                     Near Adarsh Campus, Radhanpur.
                   </p>
                </div>

                {/* Main Action Button */}
                <a 
                  href="tel:+918160644596"
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-slate-900 py-3.5 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-orange-500/25 active:scale-95 transition-all"
                >
                  <Phone className="w-5 h-5 fill-slate-900" />
                  Call Now
                </a>

                <p className="text-slate-500 text-[10px] mt-4">
                  👋 We are available 24/7 to help you!
                </p>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;