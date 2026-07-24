import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { BRAND_IMAGES } from '../data/academyData';
import { Scissors, Sparkles, ChevronDown, Award } from 'lucide-react';

interface HeroProps {
  onOpenBooking?: () => void;
  onOpenEnrollment?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax Scroll Effect
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 250]);

  return (
    <section 
      ref={containerRef}
      id="inicio" 
      className="relative w-full h-screen min-h-[650px] flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Image Container with Parallax & Ken Burns Zoom Effect */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute inset-0 z-0 w-full h-[120%]"
      >
        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          src={BRAND_IMAGES.heroBg}
          alt="Elizabeth Imba Nails Academy - Feliz Graduación"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center filter contrast-[1.08] saturate-[1.12] brightness-[0.92]"
          referrerPolicy="no-referrer"
        />

        {/* Dark Overlay to enhance text readability while maintaining natural colors */}
        <div className="absolute inset-0 bg-black/35 z-1 pointer-events-none" />

        {/* Soft Vignette Gradients top and bottom for seamless blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a] z-2 pointer-events-none" />
        
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#20B2AA]/15 rounded-full blur-3xl pointer-events-none animate-pulse z-2" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000 z-2" />
      </motion.div>

      {/* Floating Sparkle Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#C5A059] opacity-40 animate-float-particle"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${Math.random() * 3 + 3}s`
            }}
          />
        ))}
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 text-center flex flex-col items-center justify-center h-full">
        
        {/* Logotype Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 border border-[#C5A059]/50 backdrop-blur-md mb-6 shadow-2xl"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[#C5A059] shrink-0 p-0.5 bg-gradient-to-tr from-[#C5A059] to-[#20B2AA]">
            <img 
              src={BRAND_IMAGES.logo} 
              alt="Elizabeth Imba Logo" 
              className="w-full h-full object-cover rounded-full" 
              referrerPolicy="no-referrer" 
            />
          </div>
          <span className="text-xs sm:text-xs font-montserrat uppercase tracking-[0.25em] text-[#E8D2A6] font-bold flex items-center gap-2">
            <Award className="w-4 h-4 text-[#20B2AA]" />
            ELIZABETH IMBA NAILS ACADEMY
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 35, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-[0.08em] leading-tight uppercase mb-4 drop-shadow-lg"
        >
          ELIZABETH <span className="gold-text">IMBA</span>
          <span className="block font-playfair text-gold-gradient text-3xl sm:text-5xl md:text-6xl lg:text-7xl normal-case italic font-light tracking-normal mt-1">
            Nails Academy
          </span>
        </motion.h1>

        {/* Subtitle Quote */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-playfair text-lg sm:text-2xl text-gray-100 max-w-3xl italic font-normal leading-relaxed mb-4 text-center text-shadow-sm"
        >
          &ldquo;Transformamos tu belleza en arte y tu pasión en una profesión.&rdquo;
        </motion.p>

        {/* Brief Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-poppins text-xs sm:text-sm md:text-base text-gray-200 max-w-2xl font-light leading-relaxed mb-8 text-center drop-shadow-md"
        >
          Academia profesional especializada en formación técnica y servicios de belleza, donde la pasión, la creatividad y la excelencia se unen para formar profesionales exitosos.
        </motion.p>

        {/* Interactive Action Buttons - Perfectly balanced 2-button layout */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-xl flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          {/* Button: Nuestros Cursos */}
          <motion.a
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#cursos"
            className="w-full sm:w-1/2 py-4 px-6 rounded-sm font-montserrat text-xs font-bold uppercase tracking-[0.18em] text-black bg-gold-gradient gold-glow transition-all duration-300 flex items-center justify-center gap-2.5 shadow-2xl"
          >
            <Sparkles className="w-4 h-4 text-black" />
            Nuestros Cursos
          </motion.a>

          {/* Button: Nuestros Servicios */}
          <motion.a
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#servicios"
            className="w-full sm:w-1/2 py-4 px-6 rounded-sm font-montserrat text-xs font-bold uppercase tracking-[0.18em] text-white bg-turquoise-gradient turquoise-glow transition-all duration-300 flex items-center justify-center gap-2.5 shadow-2xl"
          >
            <Scissors className="w-4 h-4 text-[#E8D2A6]" />
            Nuestros Servicios
          </motion.a>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.a
          href="#nosotros"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="inline-flex flex-col items-center gap-1 text-gray-300 hover:text-[#20B2AA] transition-colors mt-2"
        >
          <span className="text-[10px] uppercase font-montserrat tracking-[0.2em] text-gray-300">Descubre Más</span>
          <ChevronDown className="w-5 h-5 text-[#C5A059]" />
        </motion.a>

      </div>
    </section>
  );
};
