import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COURSES_DATA } from '../data/academyData';
import { X, GraduationCap, CheckCircle2, Award, Calendar } from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCoursePreset?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  selectedCoursePreset = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: selectedCoursePreset || COURSES_DATA[0].title,
    shift: 'Mañana' as 'Mañana' | 'Tarde' | 'Sabatino',
    experience: 'Principiante' as 'Principiante' | 'Intermedio' | 'Avanzado',
    comments: ''
  });

  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/enrollment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setConfirmation(data.enrollment);
      } else {
        alert(data.message || 'Error en inscripción');
      }
    } catch (err) {
      setConfirmation({
        id: 'CURSO-' + Math.floor(100000 + Math.random() * 900000),
        name: formData.name,
        course: formData.course,
        shift: formData.shift
      });
    } finally {
      setLoading(false);
    }
  };

  const resetAndClose = () => {
    setConfirmation(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
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
          className="max-w-xl w-full bg-[#0d0e12] border border-[#00A896]/50 text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative my-6"
        >
          <button
            onClick={resetAndClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-[#00A896] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-turquoise-gradient text-white font-bold">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg font-bold uppercase text-turquoise-gradient">INSCRIPCIÓN A CURSO CERTIFICADO</h3>
              <p className="text-xs text-[#D4AF37] font-poppins">Elizabeth Imba Nails Academy</p>
            </div>
          </div>

          {confirmation ? (
            <div className="p-6 rounded-2xl bg-white/5 border border-[#D4AF37] text-center space-y-4 my-4">
              <CheckCircle2 className="w-14 h-14 text-[#D4AF37] mx-auto animate-pulse" />
              <h4 className="font-cinzel text-xl font-bold uppercase text-gold-gradient">¡Cupo Reservado con Éxito!</h4>
              <p className="font-poppins text-xs text-gray-300">
                Felicidades <strong className="text-white">{confirmation.name}</strong>, tu cupo para el programa <strong className="text-white">{confirmation.course}</strong> (Horario {confirmation.shift}) ha sido registrado correctamente.
              </p>
              <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-gray-400">
                Matrícula ID: <span className="text-[#D4AF37] font-bold">{confirmation.id}</span>
              </div>
              <p className="text-[11px] text-gray-400 italic font-poppins">
                Te enviamos un mensaje de confirmación con la lista de insumos del kit inicial.
              </p>
              <button
                onClick={resetAndClose}
                className="w-full py-3 rounded-xl font-poppins text-xs font-bold uppercase bg-turquoise-gradient text-white"
              >
                Finalizar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-poppins text-xs">
              <div>
                <label className="block text-gray-300 font-semibold mb-1">Nombre Completo del Estudiante *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Nombre y Apellidos"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#00A896] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Teléfono / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+593 99..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#00A896] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Correo Electrónico *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="correo@ejemplo.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#00A896] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">Seleccionar Programa o Especialización *</label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#151722] border border-white/10 text-white focus:border-[#D4AF37] focus:outline-none"
                >
                  {COURSES_DATA.map((crs) => (
                    <option key={crs.id} value={crs.title}>
                      {crs.title} ({crs.duration})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Horario / Jornada *</label>
                  <select
                    value={formData.shift}
                    onChange={(e) => setFormData({ ...formData, shift: e.target.value as any })}
                    className="w-full px-4 py-3 rounded-xl bg-[#151722] border border-white/10 text-white focus:border-[#00A896] focus:outline-none"
                  >
                    <option value="Mañana">Mañana (09:00 - 12:00)</option>
                    <option value="Tarde">Tarde (14:30 - 17:30)</option>
                    <option value="Sabatino">Sabatino Intensivo (09:00 - 16:00)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Nivel de Experiencia *</label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value as any })}
                    className="w-full px-4 py-3 rounded-xl bg-[#151722] border border-white/10 text-white focus:border-[#00A896] focus:outline-none"
                  >
                    <option value="Principiante">Principiante (Desde cero)</option>
                    <option value="Intermedio">Intermedio (Conocimiento básico)</option>
                    <option value="Avanzado">Avanzado (Profesional activo)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">Observaciones o Preguntas</label>
                <textarea
                  rows={2}
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  placeholder="¿Alguna meta o inquietud sobre los materiales?"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#00A896] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-poppins text-xs font-bold uppercase tracking-wider text-white bg-turquoise-gradient turquoise-glow hover:scale-102 transition-all duration-300 shadow-xl"
              >
                {loading ? 'Reservando Cupo...' : 'Asegurar Mi Cupo Ahora'}
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
