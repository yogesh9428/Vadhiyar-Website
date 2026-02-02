import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, Heart, Droplets, Leaf, ShieldCheck, 
  ChevronLeft, ChevronRight, Info, Award, Sprout, 
  ChefHat, Truck, Star, MessageCircle, ArrowRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const OilHero = () => {
  const [showDetails, setShowDetails] = useState(true);

  // --- 1. GENERAL INQUIRY (Main Button) ---
  const handleWhatsAppInquiry = () => {
    const phoneNumber = "916355288823";
    // Message: "Namaste, I want information about Vadhiyar Pure Oil."
    const message = encodeURIComponent("નમસ્તે, મારે વઢિયાર પ્યોર સીંગતેલ વિશે માહિતી જોઈએ છે.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // --- 2. SPECIFIC 15L TIN BUY (Floating Card Button) ---
  const handleBuy15L = () => {
    const phoneNumber = "916355288823";
    // Message: "I want to buy 15L Tin (2750). Details?"
    const message = encodeURIComponent("નમસ્તે, મારે 15 લિટર સીંગતેલનો ડબ્બો (₹2750) ખરીદવો છે. અવેલેબિલિટી અને ડિલિવરી ટાઈમ જણાવશો?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const productSlides = [
    { id: 1, type: 'image', src: '/image/oil/1.png', tag: '100% PURE' },
    { id: 2, type: 'image', src: '/image/oil/2.png', tag: 'PREMIUM QUALITY' },
    { id: 3, type: 'image', src: '/image/oil/3.png', tag: 'HEALTHY HEART' },
    { id: 4, type: 'image', src: '/image/oil/4.png', tag: 'NATURAL TASTE' },
    { id: 5, type: 'image', src: '/image/oil/5.png', tag: 'FARM FRESH' },
    { id: 6, type: 'image', src: '/image/oil/6.png', tag: 'CHEMICAL FREE' },
    { id: 7, type: 'image', src: '/image/oil/7.png', tag: 'BEST CHOICE' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === productSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => setCurrentIndex((prev) => (prev === productSlides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? productSlides.length - 1 : prev - 1));

  const currentSlide = productSlides[currentIndex];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-green-50">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[0%] left-[-10%] w-[40%] h-[40%] bg-green-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* --- LEFT SIDE: Content --- */}
          <div className="space-y-6 pt-2">
            
            {/* 1. Brand Name */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3"
            >
              <div className="bg-green-100 p-2.5 rounded-full shadow-sm">
                 <Leaf className="w-9 h-9 lg:w-12 lg:h-12 text-green-600 fill-green-600" />
              </div>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                વઢિયાર <span className="text-yellow-600">પ્યોર</span> સીંગતેલ
              </h2>
            </motion.div>

            {/* 2. Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight"
            >
              સ્વાદ અને સ્વાસ્થ્યનો
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-700">
                શ્રેષ્ઠ સંગમ
              </span>
            </motion.h1>

            {/* 3. Sub-Headline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-slate-700 font-semibold leading-relaxed max-w-lg"
            >
              ૧૦૦% શુદ્ધ, કેમિકલ રહિત અને પરંપરાગત પદ્ધતિથી બનાવેલું 
              <span className="inline-block bg-green-100 text-green-900 px-2 py-0.5 mx-1.5 rounded border-b-2 border-green-300">
                હેલ્ધી ગ્રાઉન્ડનટ ઓઈલ
              </span>
              તમારા પરિવારના હૃદય માટે શ્રેષ્ઠ.
            </motion.p>

            {/* 4. Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button 
                onClick={handleWhatsAppInquiry}
                className="flex items-center justify-center gap-2 bg-yellow-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-700 hover:shadow-xl hover:-translate-y-1 transition-all shadow-lg shadow-yellow-600/20"
              >
                <MessageCircle className="w-5 h-5" />
                વોટ્સએપ પર માહિતી લો
              </button>

              <button 
                onClick={() => setShowDetails(!showDetails)}
                className={`flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all ${showDetails ? 'bg-yellow-50 border-yellow-200 text-yellow-700' : 'bg-white border-slate-200 text-slate-600 hover:bg-yellow-50'}`}
              >
                {showDetails ? 'ફાયદા છુપાવો' : 'ફાયદા જુઓ'}
                <Info className={`w-5 h-5 transition-transform duration-300 ${showDetails ? 'rotate-180' : ''}`} />
              </button>
            </motion.div>

            {/* --- EXPANDABLE DASHBOARD --- */}
            <AnimatePresence>
              {showDetails && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="pt-8"
                  >
                    <div className="bg-white/70 backdrop-blur-md border border-amber-100 p-6 rounded-[2rem] shadow-xl space-y-6">
                      <div className="flex justify-between items-center border-b border-amber-100 pb-4">
                         <span className="text-xl font-bold text-amber-900 tracking-wide">સ્વાસ્થ્યના ફાયદા</span>
                         <span className="text-sm font-bold bg-green-100 text-green-800 px-4 py-1.5 rounded-full border border-green-200">Lab Tested</span>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <motion.div variants={itemVariants} className="bg-white p-5 rounded-2xl shadow-sm border border-amber-50 flex gap-5 items-start">
                           <div className="bg-red-50 p-3 rounded-full shrink-0"><Heart className="w-8 h-8 text-red-500 fill-red-100" /></div>
                           <div><h4 className="text-xl font-bold text-slate-900">હૃદય માટે ઉત્તમ</h4><p className="text-base text-slate-600 mt-2 font-medium leading-snug">કોલેસ્ટ્રોલ ફ્રી, જે હૃદય રોગનું જોખમ ઘટાડે છે.</p></div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-white p-5 rounded-2xl shadow-sm border border-amber-50 flex gap-5 items-start">
                           <div className="bg-yellow-100 p-3 rounded-full shrink-0"><Droplets className="w-8 h-8 text-yellow-600 fill-yellow-200" /></div>
                           <div><h4 className="text-xl font-bold text-slate-900">૧૦૦% શુદ્ધ</h4><p className="text-base text-slate-600 mt-2 font-medium leading-snug">કોઈ પણ પ્રકારની ભેળસેળ વગરનું એકદમ ચોખ્ખું તેલ.</p></div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-white p-5 rounded-2xl shadow-sm border border-amber-50 flex gap-5 items-start">
                           <div className="bg-green-100 p-3 rounded-full shrink-0"><Sprout className="w-8 h-8 text-green-600" /></div>
                           <div><h4 className="text-xl font-bold text-slate-900">કુદરતી પોષણ</h4><p className="text-base text-slate-600 mt-2 font-medium leading-snug">વિટામિન E અને એન્ટી-ઓક્સિડન્ટ્સથી ભરપૂર.</p></div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-white p-5 rounded-2xl shadow-sm border border-amber-50 flex gap-5 items-start">
                           <div className="bg-orange-100 p-3 rounded-full shrink-0"><ChefHat className="w-8 h-8 text-orange-600" /></div>
                           <div><h4 className="text-xl font-bold text-slate-900">શ્રેષ્ઠ સ્વાદ</h4><p className="text-base text-slate-600 mt-2 font-medium leading-snug">તમારા ભોજનનો સ્વાદ વધારે છે.</p></div>
                        </motion.div>
                      </div>
                      <div className="bg-amber-900 text-white p-5 rounded-2xl flex gap-4 items-center shadow-lg">
                         <Truck className="w-8 h-8 text-yellow-400 shrink-0" />
                         <div><p className="text-lg font-bold">હોમ ડિલિવરી ઉપલબ્ધ</p><p className="text-amber-200 text-base">રાધનપુર અને આસપાસના વિસ્તારોમાં</p></div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* --- RIGHT SIDE: Slideshow Phone --- */}
          <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-[360px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white ring-1 ring-slate-900/5 bg-amber-950">
              
              <AnimatePresence mode='wait'>
                <motion.div 
                  key={currentSlide.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full relative flex items-center justify-center"
                >
                  <motion.img 
                    src={currentSlide.src} 
                    alt="Oil Product" 
                    initial={{ scale: 1 }}
                    animate={{ scale: 1 }}
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Brand Badge */}
                  <div className="absolute top-6 left-0 right-0 flex justify-center z-10 pointer-events-none">
                    <div className="bg-yellow-500/90 backdrop-blur-md text-amber-950 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg border border-yellow-400/50">
                      <Star className="w-3 h-3 fill-amber-900" />
                      <span className="text-[10px] font-bold tracking-widest uppercase">TRUSTED BRAND</span>
                    </div>
                  </div>

                  {/* Visual Tags (Bottom) */}
                  <div className="absolute bottom-16 left-6 right-6 pointer-events-none">
                    <div className="flex justify-center gap-2 opacity-80">
                       <span className="bg-black/50 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white border border-white/20">15KG</span>
                       <span className="bg-black/50 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white border border-white/20">5L</span>
                       <span className="bg-black/50 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white border border-white/20">1L</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur text-white transition-all border border-white/10 z-20">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur text-white transition-all border border-white/10 z-20">
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                {productSlides.map((_, idx) => (
                  <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-yellow-400 w-6' : 'bg-white/30 w-1.5'}`} />
                ))}
              </div>

              {/* --- FLOATING "BEST SELLER" CARD --- */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-16 left-4 right-4 bg-white/95 backdrop-blur-lg p-3 rounded-2xl shadow-2xl border border-white/50 flex items-center gap-4 z-30"
              >
                <div className="w-14 h-16 bg-yellow-50 rounded-xl border border-yellow-100 p-1 flex items-center justify-center shrink-0">
                  <img src="/image/oil/1.png" alt="15L Tin" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                   <div className="flex items-center gap-2 mb-0.5">
                     <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase">Hot Deal</span>
                     <p className="text-xs text-slate-500 font-bold uppercase truncate">15 Liter Tin</p>
                   </div>
                   <div className="flex items-baseline gap-1">
                      <span className="text-lg font-extrabold text-slate-900">₹2750</span>
                   </div>
                </div>
                <button 
                  onClick={handleBuy15L}
                  className="bg-slate-900 text-white p-3 rounded-xl hover:bg-slate-800 active:scale-95 transition-all shadow-lg shadow-slate-900/20"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>

            </div>

            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-amber-400/20 blur-3xl rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OilHero;