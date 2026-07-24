import React from 'react';
import { BRAND_IMAGES } from '../data/academyData';
import { Heart, Phone, Mail, MapPin, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050608] text-white pt-16 pb-8 border-t border-[#00A896]/20 relative overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <a href="#inicio" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#D4AF37] via-[#00A896] to-[#F3E5AB]">
                <img
                  src={BRAND_IMAGES.logo}
                  alt="Elizabeth Imba Logo Footer"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-cinzel text-base font-bold text-white tracking-wider block uppercase">
                  ELIZABETH IMBA
                </span>
                <span className="font-playfair text-xs text-[#00A896] tracking-widest uppercase">
                  Nails Academy
                </span>
              </div>
            </a>

            <p className="text-xs text-gray-400 leading-relaxed">
              Transformamos tu belleza en arte y tu pasión en una profesión. Centro líder de estética especializada y capacitación profesional internacional.
            </p>

            <div className="pt-2">
              <a 
                href="https://tiktok.com/@elizabethimba_academy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-[#20B2AA]/30 hover:border-[#C5A059] hover:bg-white/10 transition-all group shadow-md"
              >
                <div className="p-2 rounded-lg bg-black text-white group-hover:scale-105 transition-transform">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 22a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04 0z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <span className="block text-xs font-montserrat font-bold text-white group-hover:text-[#C5A059] transition-colors">Síguenos en TikTok</span>
                  <span className="block text-[11px] font-poppins text-[#20B2AA]">@elizabethimba_academy</span>
                </div>
              </a>
            </div>
          </div>

          {/* Col 2: Servicios */}
          <div>
            <h3 className="font-cinzel text-sm font-bold uppercase tracking-wider text-gold-gradient mb-4">
              Nuestros Servicios
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#servicios" className="hover:text-[#00A896] transition-colors">Uñas Acrílicas Signature</a></li>
              <li><a href="#servicios" className="hover:text-[#00A896] transition-colors">Polygel Hybrid Luxe</a></li>
              <li><a href="#servicios" className="hover:text-[#00A896] transition-colors">Softgel Express VIP</a></li>
              <li><a href="#servicios" className="hover:text-[#00A896] transition-colors">Manicura Rusa & Semipermanente</a></li>
              <li><a href="#servicios" className="hover:text-[#00A896] transition-colors">Lifting de Pestañas con Keratina</a></li>
              <li><a href="#servicios" className="hover:text-[#00A896] transition-colors">Laminado de Cejas & Henna</a></li>
              <li><a href="#servicios" className="hover:text-[#00A896] transition-colors">Corte de Cabello & Tintes</a></li>
            </ul>
          </div>

          {/* Col 3: Cursos */}
          <div>
            <h3 className="font-cinzel text-sm font-bold uppercase tracking-wider text-[#00A896] mb-4">
              Cursos Certificados
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#cursos" className="hover:text-[#D4AF37] transition-colors">Técnico en Uñas (2 Meses)</a></li>
              <li><a href="#cursos" className="hover:text-[#D4AF37] transition-colors">Técnico Profesional (4 Meses)</a></li>
              <li><a href="#cursos" className="hover:text-[#D4AF37] transition-colors">Especialización Mirada Perfecta</a></li>
              <li><a href="#cursos" className="hover:text-[#D4AF37] transition-colors">Fibroblast Plasma Pen</a></li>
              <li><a href="#cursos" className="hover:text-[#D4AF37] transition-colors">Taller de Emprendimiento</a></li>
            </ul>
          </div>

          {/* Col 4: Mapa del Sitio */}
          <div>
            <h3 className="font-cinzel text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navegación Rápida
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#inicio" className="hover:text-[#20B2AA] transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-[#20B2AA] transition-colors">Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-[#20B2AA] transition-colors">Servicios</a></li>
              <li><a href="#cursos" className="hover:text-[#20B2AA] transition-colors">Cursos</a></li>
              <li><a href="#galeria" className="hover:text-[#20B2AA] transition-colors">Galería</a></li>
              <li><a href="#ubicacion" className="hover:text-[#20B2AA] transition-colors">Ubicación</a></li>
              <li><a href="#contacto" className="hover:text-[#20B2AA] transition-colors">Contacto</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4 text-center sm:text-left">
          <p>© 2026 ELIZABETH IMBA NAILS ACADEMY. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Diseño & Desarrollo de Alto Rendimiento
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </p>
        </div>

      </div>
    </footer>
  );
};
