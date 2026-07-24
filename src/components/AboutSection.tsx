import React from 'react';
import { motion } from 'motion/react';
import { PILLARS_DATA, BRAND_IMAGES } from '../data/academyData';
import { ShieldCheck, Sparkles, Award, GraduationCap, CheckCircle } from 'lucide-react';

interface AboutSectionProps {
  darkMode: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#00A896]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#00A896]" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-[#D4AF37]" />;
      default: return <Award className="w-6 h-6 text-[#00A896]" />;
    }
  };

  return (
    <section
      id="nosotros"
      className={`py-20 md:py-28 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* Decorative Blur BG */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#20B2AA]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-montserrat text-xs uppercase tracking-[0.25em] text-[#20B2AA] font-bold block mb-2">
            NUESTRA ESENCIA & VALORES
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider">
            NOSOTROS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#20B2AA] via-[#C5A059] to-[#20B2AA] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Institutional Objective Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column: Image Composite */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden p-0.5 bg-gradient-to-tr from-[#C5A059] via-[#20B2AA] to-transparent shadow-2xl">
              <img
                src={BRAND_IMAGES.courseMaster}
                alt="Formación Profesional Elizabeth Imba Academy"
                className="w-full h-[380px] sm:h-[480px] object-cover rounded-md filter contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-black/90 luxury-border p-5 rounded-md backdrop-blur-md shadow-2xl max-w-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-sm bg-gold-gradient flex items-center justify-center shrink-0 text-black font-bold">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <p className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">Sello Internacional</p>
                <p className="text-xs text-[#20B2AA] font-poppins">Excelencia en Educación & Estética</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Institutional Goal Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="font-playfair text-xl sm:text-2xl text-gold-gradient italic mb-4 font-medium">
              Compromiso de Lujo y Formación Integral
            </span>
            
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold uppercase tracking-wider mb-6 leading-tight border-l-2 border-[#C5A059] pl-4">
              Líderes en Cuidado Personal y Capacitación de Alto Nivel
            </h3>

            <p className={`font-poppins text-sm sm:text-base leading-relaxed mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <strong className="text-[#20B2AA] font-semibold">ELIZABETH IMBA NAILS ACADEMY</strong> tiene como objetivo brindar servicios integrales de belleza y formación profesional de alta calidad, ofreciendo atención personalizada en el área de estética, cuidado personal y capacitación especializada.
            </p>

            <p className={`font-poppins text-sm sm:text-base leading-relaxed mb-8 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Buscamos satisfacer las necesidades de nuestros clientes mediante técnicas innovadoras, productos profesionales y personal altamente capacitado, mientras formamos nuevos profesionales mediante cursos teórico-prácticos que les permitan emprender su propio negocio e incorporarse exitosamente al mercado laboral.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#C5A059]" />
                <span className="text-xs sm:text-sm font-semibold font-poppins">Certificación Oficial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#20B2AA]" />
                <span className="text-xs sm:text-sm font-semibold font-poppins">Técnicas Internacionales</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#20B2AA]" />
                <span className="text-xs sm:text-sm font-semibold font-poppins">Productos Hipoalergénicos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#C5A059]" />
                <span className="text-xs sm:text-sm font-semibold font-poppins">Acompañamiento Post-Curso</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 4 Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {PILLARS_DATA.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`p-6 rounded-sm glass luxury-border transition-all duration-300 group hover:-translate-y-2 hover:bg-white/5 ${
                darkMode ? 'hover:border-[#20B2AA]' : 'bg-white hover:border-[#20B2AA]'
              }`}
            >
              <div className="w-12 h-12 rounded-sm bg-gradient-to-tr from-[#20B2AA]/20 to-[#C5A059]/20 border border-[#C5A059]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {getIcon(pillar.icon)}
              </div>
              <h4 className="font-cinzel text-base font-bold uppercase tracking-wider mb-2 text-gold-gradient">
                {pillar.title}
              </h4>
              <p className={`font-poppins text-xs leading-relaxed ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
