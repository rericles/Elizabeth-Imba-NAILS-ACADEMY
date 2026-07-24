import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_IMAGES } from '../data/academyData';
import { Menu, X, Calendar, Sparkles, Phone, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenEnrollment: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onOpenEnrollment,
  darkMode,
  setDarkMode
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Cursos', href: '#cursos' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Ubicación', href: '#ubicacion' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? darkMode
            ? 'bg-[#0b0c10]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-[#00A896]/20 py-3'
            : 'bg-white/95 backdrop-blur-md shadow-md shadow-gray-200/50 border-b border-gray-200 py-3 text-gray-900'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden p-0.5 gold-gradient shadow-md group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <img
                src={BRAND_IMAGES.logo}
                alt="Elizabeth Imba Logo"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-cinzel text-sm md:text-base font-bold tracking-[0.2em] uppercase transition-colors ${
                isScrolled && !darkMode ? 'text-gray-900' : 'text-white'
              }`}>
                ELIZABETH <span className="gold-text">IMBA</span>
              </span>
              <span className="font-playfair text-[10px] md:text-xs text-[#20B2AA] tracking-[0.15em] uppercase font-medium italic">
                Nails Academy
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-montserrat text-[10px] uppercase tracking-[0.15em] font-medium transition-all duration-200 hover:text-[#20B2AA] relative group ${
                  isScrolled && !darkMode ? 'text-gray-700' : 'text-gray-200'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#20B2AA] to-[#C5A059] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Buttons & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              title="Cambiar Modo Claro/Oscuro"
              className={`p-2 rounded-full border transition-all duration-300 text-xs ${
                isScrolled && !darkMode
                  ? 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  : 'luxury-border text-gray-200 hover:bg-white/10'
              }`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Inscribirme a Curso CTA */}
            <button
              onClick={onOpenEnrollment}
              className="px-4 py-2 rounded-sm font-montserrat text-[10px] font-bold uppercase tracking-widest luxury-border text-[#E8D2A6] hover:bg-[#C5A059] hover:text-black transition-all duration-300"
            >
              Cursos 2026
            </button>

            {/* Agenda Tu Cita Highlighted Button */}
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-sm font-montserrat text-[10px] font-bold uppercase tracking-widest text-black bg-gold-gradient gold-glow hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              <Calendar className="w-3.5 h-3.5" />
              AGENDA TU CITA
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full text-sm border ${
                isScrolled && !darkMode ? 'border-gray-300 text-gray-800' : 'border-white/20 text-white'
              }`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled && !darkMode ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`xl:hidden border-t overflow-hidden ${
              darkMode ? 'bg-[#0b0c10]/98 border-[#00A896]/20 text-white' : 'bg-white border-gray-200 text-gray-900'
            }`}
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              <div className="grid grid-cols-2 gap-2 mb-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#00A896]/10 hover:text-[#00A896] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-2 border-t border-gray-700/30 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient gold-glow flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  AGENDA TU CITA ONLINE
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnrollment();
                  }}
                  className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#D4AF37] border border-[#D4AF37] flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  INSCRIBIRME A UN CURSO
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
