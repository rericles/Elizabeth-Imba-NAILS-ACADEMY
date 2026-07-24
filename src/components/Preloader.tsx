import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_IMAGES } from '../data/academyData';
import { Sparkles } from 'lucide-react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07080a] text-white"
        >
          {/* Ambient Glows */}
          <div className="absolute w-96 h-96 bg-[#00A896]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-3xl animate-pulse delay-700" />

          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-28 h-28 md:w-36 md:h-36 mb-6 rounded-full p-1 bg-gradient-to-tr from-[#D4AF37] via-[#00A896] to-[#F3E5AB] shadow-[0_0_35px_rgba(212,175,55,0.3)]"
            >
              <img
                src={BRAND_IMAGES.logo}
                alt="Elizabeth Imba Logo"
                className="w-full h-full object-cover rounded-full border-2 border-[#07080a]"
                referrerPolicy="no-referrer"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-[#D4AF37]/60 pointer-events-none"
              />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-cinzel text-xl md:text-3xl tracking-[0.25em] text-gold-gradient font-bold uppercase mb-2"
            >
              ELIZABETH IMBA
            </motion.h1>

            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-playfair text-xs md:text-sm tracking-widest text-[#00A896] uppercase mb-8 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Nails Academy & Beauty Spa
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            </motion.p>

            {/* Loading Bar */}
            <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-full bg-gradient-to-r from-[#00A896] via-[#D4AF37] to-[#00A896]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
