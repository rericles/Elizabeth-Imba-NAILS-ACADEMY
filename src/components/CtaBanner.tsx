import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Sparkles, ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onOpenEnrollment: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenEnrollment }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-[#0a0a0a] text-white">
      {/* Ambient Lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#20B2AA]/20 via-[#0a0a0a] to-[#C5A059]/20" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 sm:p-16 rounded-sm luxury-border glass shadow-[0_0_50px_rgba(197,160,89,0.2)] flex flex-col items-center"
        >
          <div className="p-3 rounded-full bg-gold-gradient text-black mb-6 shadow-lg animate-bounce">
            <Sparkles className="w-8 h-8" />
          </div>

          <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-[#20B2AA] font-bold block mb-3">
            ÚNETE A LA NUEVA GENERACIÓN DE ARTISTAS
          </span>

          <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide text-white mb-6 leading-tight max-w-3xl">
            Convierte tu pasión por la belleza en una <span className="gold-text italic font-playfair normal-case">profesión exitosa</span>.
          </h2>

          <p className="font-poppins text-xs sm:text-sm text-gray-300 max-w-2xl mb-8">
            Separa tu cupo con tarifa preferencial para este trimestre. Obtén certificado con aval internacional y asesoría de emprendimiento incluida.
          </p>

          <button
            onClick={onOpenEnrollment}
            className="py-4 px-10 rounded-sm font-montserrat text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-black bg-gold-gradient gold-glow hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 shadow-2xl"
          >
            <GraduationCap className="w-5 h-5" />
            INSCRÍBETE AHORA
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
