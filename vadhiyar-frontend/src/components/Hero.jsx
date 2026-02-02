import React, { useState, useEffect } from 'react';
import { 
  Phone, Sun, ShieldCheck, MapPin, ChevronLeft, ChevronRight, 
  Info, Zap, IndianRupee, Clock, CheckCircle, MessageCircle, Calendar, ArrowRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [showDetails, setShowDetails] = useState(true);

  // --- 1. GENERAL INQUIRY (Main Button) ---
  const handleWhatsAppInquiry = () => {
    const phoneNumber = "916355288823";
    // Message: "Namaste, I want to talk about Vadhiyar Solar."
    const message = encodeURIComponent("નમસ્તે, હું વઢિયાર સોલાર વિશે વાત કરવા માંગુ છું.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // --- 2. BOOK VISIT (Floating Card Button) ---
  const handleBookVisit = () => {
    const phoneNumber = "916355288823";
    // Message: "Namaste, I want to book a Solar Site Visit."
    const message = encodeURIComponent("નમસ્તે, મારે સોલાર માટે સાઈટ વિઝિટ (Appointment) બુક કરવી છે. ");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const successStories = [
    { id: 1, type: 'video', src: '/videos/solar/v-1 (1).mp4' },
    { id: 2, type: 'video', src: '/videos/solar/v-1 (2).mp4' },
    { id: 3, type: 'image', src: '/image/solar/1.jpeg' },
    { id: 4, type: 'image', src: '/image/solar/2.jpeg' },
    { id: 5, type: 'image', src: '/image/solar/3.jpeg' },
    { id: 6, type: 'image', src: '/image/solar/4.jpeg' },
    { id: 7, type: 'image', src: '/image/solar/5.jpeg' },
    { id: 8, type: 'image', src: '/image/solar/6.jpeg' },
    { id: 9, type: 'image', src: '/image/solar/7.png' },
    { id: 10, type: 'image', src: '/image/solar/8.png' },
    { id: 11, type: 'image', src: '/image/solar/9.png' },
    { id: 12, type: 'image', src: '/image/solar/10.png' },
    { id: 13, type: 'image', src: '/image/solar/11.png' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === successStories.length - 1 ? 0 : prev + 1));
    }, 5000); 
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => setCurrentIndex((prev) => (prev === successStories.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? successStories.length - 1 : prev - 1));

  const currentStory = successStories[currentIndex];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[0%] right-[-10%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-3xl"></div>
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
              <div className="bg-orange-100 p-2.5 rounded-full shadow-sm">
                 <Sun className="w-9 h-9 lg:w-12 lg:h-12 text-orange-600 fill-orange-600" />
              </div>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                વઢિયાર <span className="text-orange-600">સોલાર</span> સોલ્યુશન
              </h2>
            </motion.div>

            {/* 2. Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight"
            >
              વીજળીના બિલથી
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-500">
                કાયમી આઝાદી
              </span>
            </motion.h1>

            {/* 3. Sub-Headline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-slate-700 font-semibold leading-relaxed max-w-lg"
            >
              ઘર, દુકાન કે ફેક્ટરી માટે સોલાર લગાવો અને મેળવો 
              <span className="inline-block bg-yellow-100 text-slate-900 px-2 py-0.5 mx-1.5 rounded border-b-2 border-yellow-300">
                ₹78,000/- સબસિડી
              </span>
              સરકારી યોજના મુજબ.
            </motion.p>

            {/* 4. Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              {/* WHATSAPP INQUIRY BUTTON */}
              <button 
                onClick={handleWhatsAppInquiry}
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 transition-all shadow-lg shadow-green-600/20"
              >
                <MessageCircle className="w-5 h-5" />
                વોટ્સએપ પર માહિતી લો
              </button>

              <button 
                onClick={() => setShowDetails(!showDetails)}
                className={`flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all ${showDetails ? 'bg-orange-50 border-orange-200 text-orange-700' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
              >
                {showDetails ? 'માહિતી છુપાવો' : 'વધુ માહિતી જુઓ'}
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
                    <div className="bg-white/70 backdrop-blur-md border border-white/60 p-6 rounded-[2rem] shadow-xl space-y-6">
                      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                         <span className="text-xl font-bold text-slate-800 tracking-wide">અમારા ફાયદા</span>
                         <span className="text-sm font-bold bg-green-100 text-green-800 px-4 py-1.5 rounded-full border border-green-200">Govt. Approved</span>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <motion.div variants={itemVariants} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex gap-5 items-start">
                           <div className="bg-yellow-100 p-3 rounded-full shrink-0"><IndianRupee className="w-8 h-8 text-yellow-700" /></div>
                           <div><h4 className="text-xl font-bold text-slate-900">ઝીરો વીજ બિલ</h4><p className="text-base text-slate-600 mt-2 font-medium leading-snug">દર મહિને વીજળી બિલમાં 100% સુધીની બચત.</p></div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex gap-5 items-start">
                           <div className="bg-green-100 p-3 rounded-full shrink-0"><ShieldCheck className="w-8 h-8 text-green-700" /></div>
                           <div><h4 className="text-xl font-bold text-slate-900">સીધી સબસિડી</h4><p className="text-base text-slate-600 mt-2 font-medium leading-snug">તમારા બેંક ખાતામાં સીધી ₹78,000 સુધીની સબસિડી.</p></div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex gap-5 items-start">
                           <div className="bg-blue-100 p-3 rounded-full shrink-0"><Zap className="w-8 h-8 text-blue-700" /></div>
                           <div><h4 className="text-xl font-bold text-slate-900">લેટેસ્ટ ટેકનોલોજી</h4><p className="text-base text-slate-600 mt-2 font-medium leading-snug">ઓછા તડકામાં પણ વધુ વીજળી બનાવતી પેનલ્સ.</p></div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex gap-5 items-start">
                           <div className="bg-orange-100 p-3 rounded-full shrink-0"><Clock className="w-8 h-8 text-orange-700" /></div>
                           <div><h4 className="text-xl font-bold text-slate-900">25 વર્ષ વોરંટી</h4><p className="text-base text-slate-600 mt-2 font-medium leading-snug">સંપૂર્ણ મેન્ટેનન્સ ફ્રી સિસ્ટમ.</p></div>
                        </motion.div>
                      </div>
                      <div className="bg-slate-900 text-white p-5 rounded-2xl flex gap-4 items-center shadow-lg">
                         <MapPin className="w-8 h-8 text-yellow-400 shrink-0" />
                         <div><p className="text-lg font-bold">વઢિયાર સોલાર સોલ્યુશન</p><p className="text-slate-300 text-base">સ્વર્ણિમ કોમ્પ્લેક્સ ૦૧-૦૩, આદર્શ કેમ્પસ પાસે, રાધનપુર</p></div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* --- RIGHT SIDE: Slideshow Phone --- */}
          <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-[360px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white ring-1 ring-slate-900/5 bg-black">
              
              <AnimatePresence mode='wait'>
                <motion.div 
                  key={currentStory.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full relative flex items-center justify-center bg-black"
                >
                  {currentStory.type === 'video' ? (
                    <video 
                      autoPlay loop muted playsInline 
                      className="w-full h-full object-cover"
                    >
                      <source src={currentStory.src} type="video/mp4" />
                    </video>
                  ) : (
                    <motion.img 
                      src={currentStory.src} 
                      alt="Solar Project" 
                      initial={{ scale: 1 }}
                      animate={{ scale: 1 }}
                      className="w-full h-full object-contain"
                    />
                  )}
                  
                  {/* Success Badge */}
                  <div className="absolute top-6 left-0 right-0 flex justify-center z-10 pointer-events-none">
                    <div className="bg-green-600/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg border border-green-500/50">
                      <CheckCircle className="w-3 h-3" />
                      <span className="text-[10px] font-bold tracking-widest uppercase">SUCCESS STORY</span>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur text-white transition-all border border-white/10 z-20">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur text-white transition-all border border-white/10 z-20">
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                {successStories.map((_, idx) => (
                  <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-yellow-400 w-6' : 'bg-white/30 w-1.5'}`} />
                ))}
              </div>

              {/* --- FLOATING "BOOK VISIT" CARD --- */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-16 left-4 right-4 bg-white/95 backdrop-blur-lg p-3 rounded-2xl shadow-2xl border border-white/50 flex items-center gap-4 z-30"
              >
                <div className="w-14 h-16 bg-blue-50 rounded-xl border border-blue-100 p-1 flex items-center justify-center shrink-0">
                   {/* Using a generic solar image for the 'service' card */}
                   <img src="/image/solar/7.png" alt="Service" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                   <div className="flex items-center gap-2 mb-0.5">
                     <span className="bg-orange-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase">Service</span>
                     <p className="text-xs text-slate-500 font-bold uppercase truncate">Site Survey</p>
                   </div>
                   <div className="flex items-baseline gap-1">
                      <span className="text-lg font-extrabold text-slate-900">Book Visit</span>
                   </div>
                </div>
                <button 
                  onClick={handleBookVisit}
                  className="bg-slate-900 text-white p-3 rounded-xl hover:bg-slate-800 active:scale-95 transition-all shadow-lg shadow-slate-900/20"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>

            </div>
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-orange-400/20 blur-3xl rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;