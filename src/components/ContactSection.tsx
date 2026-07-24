import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation } from 'lucide-react';

interface ContactSectionProps {
  darkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  return (
    <section
      id="contacto"
      className={`py-20 md:py-28 relative transition-colors duration-300 ${
        darkMode ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#20B2AA]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-montserrat text-xs md:text-sm uppercase tracking-[0.25em] text-[#C5A059] font-bold block mb-2">
            UBICACIÓN Y ATENCIÓN AL CLIENTE
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            CONTÁCTANOS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C5A059] via-[#20B2AA] to-[#C5A059] mx-auto mt-4 rounded-full" />
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT COLUMN: Location & Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-white text-gray-900 border border-gray-100 shadow-xl space-y-8 h-full flex flex-col justify-between">
              <div>
                <span className="font-montserrat text-[10px] font-bold uppercase tracking-[0.2em] text-[#20B2AA] block mb-2">
                  SEDE PRINCIPAL DE CAPACITACIÓN Y ESTÉTICA
                </span>
                <h3 className="font-cinzel text-2xl font-bold uppercase text-gray-900 mb-6">
                  ELIZABETH IMBA <span className="text-[#C5A059]">NAILS ACADEMY</span>
                </h3>

                {/* Location Box */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-emerald-50/30 border border-gray-200/80 mb-6 space-y-3 shadow-inner">
                  <div className="flex items-center gap-3 text-[#20B2AA]">
                    <div className="p-2.5 rounded-xl bg-[#20B2AA]/15 border border-[#20B2AA]/30">
                      <MapPin className="w-6 h-6 text-[#20B2AA]" />
                    </div>
                    <span className="font-montserrat text-xs font-bold uppercase tracking-wider text-gray-900">
                      Dirección Oficial
                    </span>
                  </div>

                  <p className="font-poppins text-sm font-semibold text-gray-800 leading-relaxed pl-1">
                    CALDERÓN, CARAPUNGO, SAN FRANCISCO II, CALLES LOS GERANIOS Y CALLE 85.
                  </p>

                  <a
                    href="https://maps.app.goo.gl/VBbUYjNYTgaaq3HD9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl font-montserrat text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#20B2AA] to-[#178a84] hover:from-[#178a84] hover:to-[#20B2AA] shadow-md hover:shadow-lg transition-all duration-300 mt-2"
                  >
                    <Navigation className="w-4 h-4 text-[#E8D2A6]" />
                    📍 Cómo llegar
                  </a>
                </div>

                {/* Additional Contact Info */}
                <div className="space-y-4 font-poppins text-xs text-gray-700">
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="p-2.5 rounded-lg bg-[#C5A059]/15 text-[#C5A059] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-gray-900 uppercase text-[11px]">Teléfonos Directos</h4>
                      <p className="text-gray-600">+593 99 123 4567 / +593 4 288 9900</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="p-2.5 rounded-lg bg-[#20B2AA]/15 text-[#20B2AA] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-gray-900 uppercase text-[11px]">Correo Electrónico</h4>
                      <p className="text-gray-600">info@elizabethimbanails.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="p-2.5 rounded-lg bg-[#C5A059]/15 text-[#C5A059] shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-gray-900 uppercase text-[11px]">Horario de Atención</h4>
                      <p className="text-gray-600">Lunes a Sábado: 09:00 - 19:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Prominent TikTok Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="relative overflow-hidden p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white via-emerald-50/20 to-amber-50/30 text-gray-900 border border-gray-200/90 shadow-2xl hover:shadow-[0_25px_60px_rgba(32,178,170,0.2)] hover:-translate-y-1.5 transition-all duration-500 h-full flex flex-col justify-between group">
              
              {/* Subtle Decorative Glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#20B2AA]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#20B2AA]/20 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#C5A059]/20 transition-all duration-500" />

              <div className="relative z-10">
                {/* Header Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-[10px] font-montserrat uppercase font-bold tracking-[0.2em] shadow-md mb-8">
                  <span className="w-2 h-2 rounded-full bg-[#20B2AA] animate-ping" />
                  RED SOCIAL OFICIAL
                </div>

                {/* TikTok Large Icon & User Handle */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
                  <div className="w-20 h-20 rounded-3xl bg-black text-white flex items-center justify-center shrink-0 shadow-xl border-2 border-[#20B2AA] group-hover:border-[#C5A059] group-hover:scale-105 transition-all duration-300">
                    <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 22a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04 0z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="font-montserrat text-xs uppercase font-bold tracking-widest text-[#20B2AA] block">
                      CANAL DE TIKTOK
                    </span>
                    <h3 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-gray-900 leading-none mt-1 mb-2">
                      SÍGUENOS EN TIKTOK
                    </h3>
                    <p className="font-montserrat text-sm sm:text-base font-bold text-[#20B2AA] tracking-wider">
                      @elizabethimba_academy
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-poppins text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl mb-10">
                  Descubre nuestros trabajos, transformaciones, cursos, promociones y contenido exclusivo de belleza.
                </p>
              </div>

              {/* Action Button */}
              <div className="relative z-10 pt-4">
                <a
                  href="https://tiktok.com/@elizabethimba_academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 px-8 rounded-2xl font-montserrat text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-black bg-gold-gradient gold-glow hover:scale-102 active:scale-98 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl group/btn"
                >
                  <svg className="w-6 h-6 fill-current text-black group-hover/btn:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 22a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04 0z"/>
                  </svg>
                  <span>🎵 VISITAR TIKTOK</span>
                  <ExternalLink className="w-5 h-5 text-black opacity-80 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

