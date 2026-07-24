import React from 'react';
import { motion } from 'motion/react';
import { FEATURES_DATA } from '../data/academyData';
import { UserCheck, BadgeCheck, Gem, Zap, FileCheck, Home } from 'lucide-react';

interface WhyUsSectionProps {
  darkMode: boolean;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ darkMode }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#00A896]" />;
      case 'BadgeCheck': return <BadgeCheck className="w-6 h-6 text-[#D4AF37]" />;
      case 'Gem': return <Gem className="w-6 h-6 text-[#00A896]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#D4AF37]" />;
      case 'FileCheck': return <FileCheck className="w-6 h-6 text-[#00A896]" />;
      case 'Home': return <Home className="w-6 h-6 text-[#D4AF37]" />;
      default: return <BadgeCheck className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section className={`py-20 md:py-28 relative transition-colors duration-300 ${
      darkMode ? 'bg-[#08090c] text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-montserrat text-xs md:text-sm uppercase tracking-[0.25em] text-[#00A896] font-bold block mb-2">
            NUESTRA GARANTÍA DE EXCELENCIA
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            ¿POR QUÉ ELEGIRNOS?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00A896] via-[#D4AF37] to-[#00A896] mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_DATA.map((feat, idx) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-3xl border transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl ${
                darkMode
                  ? 'bg-black/40 border-gray-800 hover:border-[#00A896] hover:shadow-[0_0_25px_rgba(0,168,150,0.2)]'
                  : 'bg-white border-gray-200 hover:border-[#00A896] hover:shadow-xl'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#00A896]/20 to-[#D4AF37]/20 border border-[#00A896]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {getIcon(feat.icon)}
              </div>
              <h3 className="font-cinzel text-lg font-bold uppercase tracking-wider mb-3 text-gold-gradient">
                {feat.title}
              </h3>
              <p className={`font-poppins text-xs sm:text-sm leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
