import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data/academyData';
import { ServiceItem } from '../types';
import { 
  Scissors, 
  Palette, 
  Sparkles, 
  Gem, 
  Zap, 
  Heart, 
  Crown, 
  Eye, 
  Feather, 
  EyeOff, 
  Calendar,
  Clock,
  CheckCircle2,
  Filter
} from 'lucide-react';

interface ServicesSectionProps {
  darkMode: boolean;
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ darkMode, onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todas');

  const categories = [
    { id: 'todas', label: 'Todos los Servicios' },
    { id: 'unas', label: 'Uñas & Escultura' },
    { id: 'mirada', label: 'Mirada & Pestañas' },
    { id: 'cabello', label: 'Cabello & Color' },
    { id: 'estetica', label: 'Depilaciones & Estética' }
  ];

  const filteredServices = activeCategory === 'todas'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors': return <Scissors className="w-5 h-5 text-[#00A896]" />;
      case 'Palette': return <Palette className="w-5 h-5 text-[#D4AF37]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'Gem': return <Gem className="w-5 h-5 text-[#00A896]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#D4AF37]" />;
      case 'Heart': return <Heart className="w-5 h-5 text-[#00A896]" />;
      case 'Crown': return <Crown className="w-5 h-5 text-[#D4AF37]" />;
      case 'Eye': return <Eye className="w-5 h-5 text-[#00A896]" />;
      case 'Feather': return <Feather className="w-5 h-5 text-[#D4AF37]" />;
      case 'EyeOff': return <EyeOff className="w-5 h-5 text-[#00A896]" />;
      default: return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section
      id="servicios"
      className={`py-20 md:py-28 relative transition-colors duration-300 ${
        darkMode ? 'bg-[#0a0a0a] text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-montserrat text-xs uppercase tracking-[0.25em] text-[#C5A059] font-bold block mb-2">
            EXPERIENCIAS VIP DE BELLEZA
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider">
            SERVICIOS EXCLUSIVOS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C5A059] via-[#20B2AA] to-[#C5A059] mx-auto mt-4 rounded-full" />
          <p className={`font-poppins text-sm md:text-base mt-4 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Utilizamos técnicas internacionales, pigmentos veganos e insumos de alta gama para asegurar acabados impecables.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-sm text-[10px] font-montserrat font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gold-gradient text-black shadow-lg gold-glow scale-105'
                  : darkMode
                    ? 'glass luxury-border text-gray-300 hover:border-[#20B2AA]'
                    : 'bg-gray-100 border border-gray-200 text-gray-700 hover:border-[#20B2AA]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative rounded-sm overflow-hidden luxury-border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  darkMode
                    ? 'glass hover:border-[#20B2AA] hover:shadow-[0_0_30px_rgba(32,178,170,0.2)]'
                    : 'bg-white border-gray-200 hover:border-[#20B2AA] hover:shadow-2xl'
                }`}
              >
                {/* Popular Tag */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-20 bg-gold-gradient text-black text-[9px] font-extrabold uppercase px-3 py-1 rounded-sm shadow-md font-montserrat tracking-[0.15em] flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> VIP POPULAR
                  </div>
                )}

                {/* Service Image with Zoom Hover */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category & Icon Badge */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className="p-2 rounded-sm bg-black/80 luxury-border backdrop-blur-md">
                      {renderIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-poppins font-medium text-gray-200 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#20B2AA]" /> {service.duration}
                    </span>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 flex flex-col justify-between min-h-[260px]">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-cinzel text-base font-bold uppercase tracking-wider text-white group-hover:text-gold-gradient transition-colors">
                        {service.name}
                      </h3>
                      <span className="text-xs font-bold font-montserrat text-[#20B2AA] whitespace-nowrap bg-[#20B2AA]/10 px-2.5 py-1 rounded-sm border border-[#20B2AA]/30">
                        {service.price}
                      </span>
                    </div>

                    <p className={`font-poppins text-xs leading-relaxed mb-4 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-1.5 mb-6">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs font-poppins text-gray-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#20B2AA] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Reserve Button */}
                  <button
                    onClick={() => onOpenBooking(service.name)}
                    className="w-full py-3 rounded-sm font-montserrat text-[10px] font-bold uppercase tracking-[0.15em] text-black bg-gold-gradient gold-glow hover:scale-102 active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Reservar {service.name.split(' ')[0]}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
