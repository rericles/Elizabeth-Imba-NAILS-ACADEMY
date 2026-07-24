import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck } from 'lucide-react';

interface LocationSectionProps {
  darkMode: boolean;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ darkMode }) => {
  return (
    <section
      id="ubicacion"
      className={`py-20 md:py-28 relative transition-colors duration-300 ${
        darkMode ? 'bg-[#0b0c10] text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-montserrat text-xs md:text-sm uppercase tracking-[0.25em] text-[#00A896] font-bold block mb-2">
            VISÍTANOS EN NUESTRAS INSTALACIONES VIP
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            UBICACIÓN Y MAPA
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00A896] via-[#D4AF37] to-[#00A896] mx-auto mt-4 rounded-full" />
        </div>

        {/* Map & Directions Container */}
        <div className="rounded-3xl overflow-hidden border border-gray-800 shadow-2xl relative bg-black/60">
          
          {/* Embedded Google Map */}
          <div className="w-full h-[450px] relative">
            <iframe
              title="Ubicación Elizabeth Imba Nails Academy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.918930219468!2d-79.897210!3d-2.181210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMTAnNTIuMyJTIDc5wrA1Myc1MC4wIlc!5e0!3m2!1ses!2sec!4v1650000000000!5m2!1ses!2sec"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.3) contrast(1.2)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlapping Floating Banner */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md bg-black/90 backdrop-blur-md p-6 rounded-2xl border border-[#D4AF37] shadow-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-gold-gradient text-black font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-cinzel text-sm font-bold uppercase text-white">ELIZABETH IMBA ACADEMY</h3>
                  <p className="text-xs text-[#20B2AA] font-poppins font-medium">Calderón, Carapungo, San Francisco II</p>
                </div>
              </div>

              <p className="text-xs text-gray-300 font-poppins mb-4 leading-relaxed">
                Calles Los Geranios y Calle 85. Estacionamiento disponible para estudiantes y clientes.
              </p>

              <a
                href="https://maps.app.goo.gl/VBbUYjNYTgaaq3HD9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl font-poppins text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient gold-glow hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                Cómo llegar
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
