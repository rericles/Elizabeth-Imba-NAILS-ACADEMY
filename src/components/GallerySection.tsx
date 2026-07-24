import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_DATA } from '../data/academyData';
import { GalleryItem } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface GallerySectionProps {
  darkMode: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = ['Todas', 'Servicios', 'Cursos', 'Graduaciones', 'Clientes', 'Trabajos realizados'];

  const filteredItems = selectedCategory === 'Todas'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === selectedCategory);

  // Auto slide ticker for coverflow feel
  useEffect(() => {
    const interval = setInterval(() => {
      // Auto pulse trigger or subtle focus shifting
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextLightboxImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
    }
  };

  const prevLightboxImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section
      id="galeria"
      className={`py-20 md:py-28 relative transition-colors duration-300 ${
        darkMode ? 'bg-[#08090c] text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-montserrat text-xs md:text-sm uppercase tracking-[0.25em] text-[#D4AF37] font-bold block mb-2">
            PORTAFOLIO DE LUXE & GRADUACIONES
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            GALERÍA DE ARTE Y RESULTADOS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] via-[#00A896] to-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className={`font-poppins text-sm md:text-base mt-4 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Explora las creaciones de nuestro equipo, clases prácticas de la academia, ceremonias de graduación y la sonrisa de nuestras clientas satisfechas.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-poppins font-semibold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-turquoise-gradient text-white shadow-lg turquoise-glow scale-105'
                  : darkMode
                    ? 'bg-white/5 border border-white/10 text-gray-300 hover:border-[#D4AF37]'
                    : 'bg-gray-100 border border-gray-200 text-gray-700 hover:border-[#D4AF37]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => openLightbox(idx)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer h-72 border border-gray-800 shadow-xl group hover:border-[#D4AF37] transition-all duration-500"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Lightbox Trigger Icon */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 border border-[#D4AF37] text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-montserrat uppercase font-bold text-[#00A896] tracking-widest block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-cinzel text-sm font-bold uppercase tracking-wider text-white group-hover:text-gold-gradient transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-poppins line-clamp-1 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-[#D4AF37] hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevLightboxImage}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-[#00A896] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Lightbox Image Container */}
            <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
              <img
                src={filteredItems[activeImageIndex].image}
                alt={filteredItems[activeImageIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-2xl border-2 border-[#D4AF37] shadow-2xl mb-4"
                referrerPolicy="no-referrer"
              />
              <div className="text-center">
                <span className="text-xs font-montserrat text-[#00A896] uppercase tracking-widest font-bold block mb-1">
                  {filteredItems[activeImageIndex].category}
                </span>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold uppercase text-gold-gradient">
                  {filteredItems[activeImageIndex].title}
                </h3>
                <p className="text-xs text-gray-300 font-poppins mt-1">
                  {filteredItems[activeImageIndex].subtitle}
                </p>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextLightboxImage}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-[#00A896] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
