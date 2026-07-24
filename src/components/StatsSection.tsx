import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS_DATA } from '../data/academyData';
import { GraduationCap, Sparkles, Smile, CheckCircle2 } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 50;
      const stepTime = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts([
          Math.min(Math.floor(500 * progress), 500),
          Math.min(Math.floor(3000 * progress), 3000),
          Math.min(Math.floor(98 * progress), 98),
          Math.min(Math.floor(100 * progress), 100)
        ]);

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-8 h-8 text-[#D4AF37]" />;
      case 'Sparkles': return <Sparkles className="w-8 h-8 text-[#00A896]" />;
      case 'Smile': return <Smile className="w-8 h-8 text-[#D4AF37]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-8 h-8 text-[#00A896]" />;
      default: return <Sparkles className="w-8 h-8 text-[#D4AF37]" />;
    }
  };

  return (
    <section ref={ref} className="py-16 md:py-24 relative bg-[#0a0a0a] text-white luxury-border border-x-0 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 bg-radial-vignette opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#20B2AA]/10 to-[#C5A059]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-left">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="stat-item flex flex-col justify-center p-6 rounded-sm glass luxury-border hover:border-[#C5A059] transition-all duration-300 shadow-xl"
            >
              <div className="w-12 h-12 rounded-sm bg-gradient-to-tr from-[#20B2AA]/20 to-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center mb-4 shadow-lg">
                {getIcon(stat.icon)}
              </div>
              <div className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient tracking-tight mb-2">
                {counts[idx]}
                <span className="text-[#20B2AA]">{stat.suffix}</span>
              </div>
              <p className="font-montserrat text-[10px] font-bold uppercase tracking-[0.15em] text-gray-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
