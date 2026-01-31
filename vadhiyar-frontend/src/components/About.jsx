import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Users, Target, MapPin, Award, Phone, User, ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  // --- STATE: Video Slideshow ---
  const [currentIndex, setCurrentIndex] = useState(0);

  const aboutSlides = [
    { 
      id: 1, 
      src: '/videos/about/1.mp4', 
      label: 'Our Founder', 
      icon: <User className="w-3 h-3 text-orange-400" /> 
    },
    { 
      id: 2, 
      src: '/videos/about/2.mp4', 
      label: 'Vadhiyar Brand', 
      icon: <Award className="w-3 h-3 text-green-400" /> 
    }
  ];

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === aboutSlides.length - 1 ? 0 : prev + 1));
    }, 8000); // 8 seconds per video
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => setCurrentIndex((prev) => (prev === aboutSlides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? aboutSlides.length - 1 : prev - 1));

  const currentSlide = aboutSlides[currentIndex];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <section className="pt-28 pb-20 bg-gray-50 overflow-hidden">
      
      {/* --- HEADER SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 mb-12 lg:mb-16 text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-700 text-sm font-bold mb-4 border border-orange-200">
            અમારી ઓળખ
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            વઢિયાર <span className="text-orange-600">સોલાર</span> & <span className="text-green-600">નેચરલ</span> સોલ્યુશન
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            રાધનપુર અને ઉત્તર ગુજરાતમાં વિશ્વાસ અને ગુણવત્તાનું બીજું નામ. 
            અમારો ધ્યેય: દરેક ઘરને વીજળી બિલથી મુક્ત કરવું અને શુદ્ધ તેલ પૂરું પાડવું.
          </p>
        </motion.div>
      </div>

      {/* --- MAIN CONTENT (Grid) --- */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: SINGLE PHONE SLIDESHOW (One by One) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Phone Container */}
            <div className="relative w-full max-w-[360px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white ring-1 ring-slate-900/5 bg-black">
              
              <AnimatePresence mode='wait'>
                <motion.div 
                  key={currentSlide.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full relative"
                >
                  <video 
                    autoPlay loop muted playsInline 
                    // Use 'object-cover' to fill screen, or 'object-contain' to show full video without cropping
                    className="w-full h-full object-cover"
                  >
                    <source src={currentSlide.src} type="video/mp4" />
                  </video>
                  
                  {/* Label Badge */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
                    <div className="bg-black/60 backdrop-blur-md text-white px-4 py-1.5 rounded-full flex items-center gap-2 border border-white/20">
                      {currentSlide.icon}
                      <span className="text-xs font-bold uppercase tracking-widest">{currentSlide.label}</span>
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
              <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 z-20">
                {aboutSlides.map((_, idx) => (
                  <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-orange-500 w-6' : 'bg-white/30 w-1.5'}`} />
                ))}
              </div>

            </div>

            {/* Decorative Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-orange-400/20 blur-3xl rounded-full -z-10"></div>
          </motion.div>

          {/* RIGHT: TEXT CONTENT */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6 mt-6 lg:mt-0"
          >
            
            {/* Feature 1: Solar */}
            <motion.div variants={fadeInUp} className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-orange-200 transition-colors">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">સોલાર એક્સપર્ટ</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  અમે રેસિડેન્શિયલ અને કોમર્શિયલ સોલાર પ્લાન્ટ્સમાં નિષ્ણાત છીએ. 
                  સરકારી સબસિડીની પ્રક્રિયા અમે જાતે સંભાળી લઈએ છીએ.
                </p>
              </div>
            </motion.div>

            {/* Feature 2: Oil */}
            <motion.div variants={fadeInUp} className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-green-200 transition-colors">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">શુદ્ધ નેચરલ પ્રોડક્ટ્સ</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  સ્વાસ્થ્ય એ જ સાચી સંપત્તિ છે. વઢિયાર પ્યોર સીંગતેલ એટલે 100% ભેળસેળ મુક્ત અને પોષણથી ભરપૂર તેલ.
                </p>
              </div>
            </motion.div>

            {/* Feature 3: Service */}
            <motion.div variants={fadeInUp} className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">ગ્રાહક સંતોષ</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  વેચાણ પછીની સર્વિસ (After Sales Service) એ અમારી પ્રાથમિકતા છે. 
                  અમારી ટીમ હંમેશા તમારી મદદ માટે તૈયાર છે.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* --- LOCATION CARD --- */}
      <div className="max-w-4xl mx-auto px-6 mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-slate-800/50 z-0"></div>
          <div className="relative z-10 space-y-6">
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto backdrop-blur-md border border-white/10">
              <MapPin className="w-8 h-8 text-yellow-400" />
            </div>
            <h2 className="text-3xl font-bold">અમારી ઓફિસની મુલાકાત લો</h2>
            <p className="text-slate-300 text-lg max-w-lg mx-auto">
              વઢિયાર સોલાર સોલ્યુશન <br />
              સ્વર્ણિમ કોમ્પ્લેક્સ ૦૧, ૦૨, ૦૩, આદર્શ કેમ્પસ પાસે, <br />
              હાઈવે રોડ, રાધનપુર.
            </p>
            <a href="tel:+918160644596" className="inline-flex bg-yellow-500 text-slate-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all items-center gap-2 mx-auto shadow-lg shadow-yellow-500/20 active:scale-95">
              <Phone className="w-5 h-5" />
              કોલ કરો: 81606 44596
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default About;