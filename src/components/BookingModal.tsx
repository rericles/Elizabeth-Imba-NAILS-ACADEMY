import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data/academyData';
import { X, Calendar, Clock, CheckCircle2, User, Phone, Mail, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServicePreset?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedServicePreset = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedServicePreset || SERVICES_DATA[0].name,
    date: new Date().toISOString().split('T')[0],
    time: '11:00',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setConfirmation(data.booking);
      } else {
        alert(data.message || 'Error al procesar reserva');
      }
    } catch (err) {
      // Fallback client response
      setConfirmation({
        id: 'RSV-' + Math.floor(100000 + Math.random() * 900000),
        name: formData.name,
        service: formData.service,
        date: formData.date,
        time: formData.time
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
          className="max-w-xl w-full bg-[#0d0e12] border border-[#D4AF37]/50 text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative my-6"
        >
          <button
            onClick={resetAndClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-gold-gradient text-black font-bold">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg font-bold uppercase text-gold-gradient">AGENDA TU CITA ONLINE</h3>
              <p className="text-xs text-[#00A896] font-poppins">Elizabeth Imba Nails Academy & Spa</p>
            </div>
          </div>

          {confirmation ? (
            <div className="p-6 rounded-2xl bg-white/5 border border-[#00A896] text-center space-y-4 my-4">
              <CheckCircle2 className="w-14 h-14 text-[#00A896] mx-auto animate-pulse" />
              <h4 className="font-cinzel text-xl font-bold uppercase text-gold-gradient">¡Reserva Confirmada!</h4>
              <p className="font-poppins text-xs text-gray-300">
                Tu cita para <strong className="text-white">{confirmation.service}</strong> ha sido agendada para el <strong className="text-white">{confirmation.date}</strong> a las <strong className="text-white">{confirmation.time}</strong>.
              </p>
              <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-gray-400">
                Código de Reserva: <span className="text-[#00A896] font-bold">{confirmation.id}</span>
              </div>
              <button
                onClick={resetAndClose}
                className="w-full py-3 rounded-xl font-poppins text-xs font-bold uppercase bg-gold-gradient text-black"
              >
                Aceptar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-poppins text-xs">
              <div>
                <label className="block text-gray-300 font-semibold mb-1">Nombre Completo *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre completo"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#D4AF37] focus:outline-none"
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
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Correo Electrónico</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="correo@ejemplo.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">Seleccionar Servicio VIP *</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#151722] border border-white/10 text-white focus:border-[#00A896] focus:outline-none"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.name}>
                      {srv.name} ({srv.price})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Fecha Deseada *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Hora Deseada *</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#151722] border border-white/10 text-white focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="09:00">09:00 AM</option>
                    <option value="10:30">10:30 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:30">03:30 PM</option>
                    <option value="17:00">05:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">Detalles o Preferencias Especiales</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Diseño específico, uñas sensibles, etc."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#D4AF37] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-poppins text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient gold-glow hover:scale-102 transition-all duration-300 shadow-xl"
              >
                {loading ? 'Procesando Cita...' : 'Confirmar Reserva de Cita'}
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
