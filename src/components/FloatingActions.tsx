import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Bot, ArrowUp, Phone } from 'lucide-react';

interface FloatingActionsProps {
  onOpenAiAssistant: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenAiAssistant }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    "¡Hola! Deseo información sobre citas de servicios y cursos en Elizabeth Imba Nails Academy."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-black/80 border border-white/20 text-white hover:bg-[#00A896] hover:border-[#00A896] transition-all shadow-xl pointer-events-auto hover:scale-110 active:scale-95"
          title="Volver arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* AI Assistant Chat Trigger */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpenAiAssistant}
        className="px-4 py-3 rounded-full bg-gradient-to-r from-[#00A896] to-[#028090] text-white font-poppins text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 shadow-2xl turquoise-glow pointer-events-auto border border-[#00A896]/50"
      >
        <Bot className="w-5 h-5 text-[#F3E5AB] animate-pulse" />
        <span className="hidden sm:inline">Asesora IA Elizabeth</span>
      </motion.button>

      {/* Floating TikTok Button */}
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href="https://tiktok.com/@elizabethimba_academy"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3.5 rounded-full bg-black text-white border border-[#20B2AA]/50 shadow-2xl flex items-center justify-center pointer-events-auto hover:border-[#C5A059] transition-colors relative group"
        title="Síguenos en TikTok @elizabethimba_academy"
      >
        <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 22a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04 0z"/>
        </svg>
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-black/90 text-white text-xs font-poppins font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 shadow-lg">
          @elizabethimba_academy
        </span>
      </motion.a>

    </div>
  );
};
