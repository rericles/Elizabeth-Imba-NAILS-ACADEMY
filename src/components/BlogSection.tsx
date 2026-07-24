import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_DATA } from '../data/academyData';
import { BlogPost } from '../types';
import { BookOpen, Clock, ArrowRight, X, Calendar } from 'lucide-react';

interface BlogSectionProps {
  darkMode: boolean;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ darkMode }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section className={`py-20 md:py-28 relative transition-colors duration-300 ${
      darkMode ? 'bg-[#08090c] text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-montserrat text-xs md:text-sm uppercase tracking-[0.25em] text-[#00A896] font-bold block mb-2">
            CONSEJOS & TENDENCIAS DE SALÓN
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            BLOG DE BELLEZA
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00A896] via-[#D4AF37] to-[#00A896] mx-auto mt-4 rounded-full" />
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_DATA.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              onClick={() => setSelectedPost(post)}
              className={`rounded-3xl overflow-hidden border cursor-pointer transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between ${
                darkMode
                  ? 'bg-black/50 border-gray-800 hover:border-[#00A896]'
                  : 'bg-white border-gray-200 hover:border-[#00A896]'
              }`}
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 border border-[#D4AF37] text-[#D4AF37] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#00A896]" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-base font-bold uppercase tracking-wider mb-3 text-white group-hover:text-gold-gradient transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className={`font-poppins text-xs sm:text-sm leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  } line-clamp-3`}>
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center text-xs font-bold font-poppins text-[#00A896] group-hover:text-[#D4AF37] transition-colors gap-2 uppercase">
                <span>Leer artículo completo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`max-w-2xl w-full rounded-3xl p-6 sm:p-8 border shadow-2xl relative my-8 ${
                darkMode ? 'bg-[#0f1117] border-[#00A896] text-white' : 'bg-white border-gray-300 text-gray-900'
              }`}
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-[#00A896] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded-2xl mb-6 border border-white/10"
                referrerPolicy="no-referrer"
              />

              <span className="text-xs font-montserrat uppercase font-bold text-[#D4AF37] block mb-2">
                {selectedPost.category} • {selectedPost.date}
              </span>

              <h2 className="font-cinzel text-xl sm:text-2xl font-bold uppercase mb-4 text-gold-gradient">
                {selectedPost.title}
              </h2>

              <p className="font-poppins text-sm leading-relaxed text-gray-300 mb-6">
                {selectedPost.summary}
              </p>

              <div className="font-poppins text-sm leading-relaxed text-gray-300 space-y-4 pt-4 border-t border-gray-800">
                <p>{selectedPost.content}</p>
                <p>En Elizabeth Imba Nails Academy nos mantenemos a la vanguardia enseñando estas metodologías en todos nuestros programas regulares y talleres intensivos.</p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800 flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 rounded-full bg-gold-gradient text-black font-bold text-xs uppercase"
                >
                  Cerrar Lectura
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
