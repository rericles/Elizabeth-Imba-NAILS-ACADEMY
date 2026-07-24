import React from 'react';
import { motion } from 'motion/react';
import { COURSES_DATA } from '../data/academyData';
import { CourseItem } from '../types';
import { GraduationCap, Clock, CheckCircle, Award, Sparkles, BookOpen, Layers } from 'lucide-react';

interface CoursesSectionProps {
  darkMode: boolean;
  onOpenEnrollment: (courseTitle?: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ darkMode, onOpenEnrollment }) => {
  return (
    <section
      id="cursos"
      className={`py-20 md:py-28 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#20B2AA]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-montserrat text-xs uppercase tracking-[0.25em] text-[#20B2AA] font-bold block mb-2">
            FORMACIÓN CERTIFICADA INTERNACIONAL
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider">
            NUESTROS CURSOS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#20B2AA] via-[#C5A059] to-[#20B2AA] mx-auto mt-4 rounded-full" />
          <p className={`font-poppins text-sm md:text-base mt-4 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Capacítate con instructores máster en técnicas teórico-prácticas para emprender tu propio negocio o trabajar en salones de prestigio mundial.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {COURSES_DATA.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`rounded-sm overflow-hidden luxury-border transition-all duration-500 flex flex-col justify-between group hover:-translate-y-2 hover:shadow-2xl ${
                darkMode
                  ? 'glass hover:border-[#C5A059] hover:shadow-[0_0_35px_rgba(197,160,89,0.2)]'
                  : 'bg-white border-gray-200 hover:border-[#C5A059] hover:shadow-2xl'
              }`}
            >
              <div>
                {/* Course Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  {/* Badge */}
                  {course.badge && (
                    <div className="absolute top-4 left-4 bg-black/80 luxury-border text-[#E8D2A6] text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-sm backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                      <Sparkles className="w-3.5 h-3.5 text-[#20B2AA]" />
                      {course.badge}
                    </div>
                  )}

                  {/* Duration Tag */}
                  <div className="absolute bottom-4 right-4 bg-[#20B2AA] text-black font-extrabold text-[10px] uppercase tracking-widest px-3.5 py-1.5 rounded-sm shadow-lg flex items-center gap-1.5 font-montserrat">
                    <Clock className="w-3.5 h-3.5" />
                    Duración: {course.duration}
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-20">
                    <h3 className="font-cinzel text-xl font-bold uppercase text-white tracking-wide">
                      {course.title}
                    </h3>
                  </div>
                </div>

                {/* Course Content Body */}
                <div className="p-6 sm:p-8">
                  <p className={`font-poppins text-xs leading-relaxed mb-6 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {course.description}
                  </p>

                  {/* Modality & Price */}
                  <div className="flex items-center justify-between p-3 rounded-sm glass luxury-border mb-6">
                    <div className="flex items-center gap-2 text-xs font-poppins text-[#20B2AA] font-semibold">
                      <Layers className="w-4 h-4" />
                      <span>{course.modality}</span>
                    </div>
                    {course.price && (
                      <span className="font-montserrat text-xs font-bold text-gold-gradient uppercase tracking-widest">
                        {course.price}
                      </span>
                    )}
                  </div>

                  {/* Temario / Syllabus List */}
                  <div className="mb-6">
                    <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-3 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4" /> Temario Destacado:
                    </h4>
                    <ul className="space-y-2">
                      {course.syllabus.map((item, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 text-xs font-poppins text-gray-300">
                          <CheckCircle className="w-3.5 h-3.5 text-[#20B2AA] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Includes List */}
                  <div className="mb-6">
                    <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#20B2AA] mb-2 flex items-center gap-1.5">
                      <Award className="w-4 h-4" /> Incluye:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {course.includes.map((inc, iIdx) => (
                        <span key={iIdx} className="text-[11px] font-poppins px-2.5 py-1 rounded-sm glass luxury-border text-gray-300">
                          ✓ {inc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={() => onOpenEnrollment(course.title)}
                  className="w-full py-3.5 rounded-sm font-montserrat text-[10px] font-bold uppercase tracking-[0.15em] text-black bg-gold-gradient gold-glow hover:scale-102 active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
                >
                  <GraduationCap className="w-4 h-4" />
                  INSCRIBIRME AHORA
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
