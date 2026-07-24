import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_DATA } from '../data/academyData';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FaqSectionProps {
  darkMode: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ darkMode }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={`py-20 md:py-28 relative transition-colors duration-300 ${
      darkMode ? 'bg-[#0b0c10] text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-montserrat text-xs md:text-sm uppercase tracking-[0.25em] text-[#00A896] font-bold block mb-2">
            RESOLVEMOS TUS DUDAS
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold uppercase tracking-wide">
            PREGUNTAS FRECUENTES (FAQ)
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00A896] via-[#D4AF37] to-[#00A896] mx-auto mt-4 rounded-full" />
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  darkMode
                    ? isOpen ? 'bg-black/80 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.15)]' : 'bg-black/40 border-gray-800'
                    : isOpen ? 'bg-white border-[#D4AF37] shadow-xl' : 'bg-white border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-cinzel font-bold text-sm sm:text-base uppercase tracking-wider"
                >
                  <span className={isOpen ? 'text-gold-gradient' : 'text-white'}>
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#D4AF37] text-black' : 'bg-white/10 text-white'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-0 font-poppins text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-gray-800/50 mt-2"
                    >
                      <p className="pt-3">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
