import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChatMessage } from '../types';
import { Bot, Send, X, Sparkles, User, RefreshCw } from 'lucide-react';

interface BeautyAiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
  onOpenEnrollment: () => void;
}

export const BeautyAiAssistantModal: React.FC<BeautyAiAssistantModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
  onOpenEnrollment
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'assistant',
      text: '¡Hola y bienvenida a Elizabeth Imba Nails Academy! Soy tu Asesora Virtual VIP de Belleza. ¿En qué puedo ayudarte hoy? Puedo orientarte sobre nuestros servicios de salón (Softgel, Polygel, Pestañas), recomendarte el curso ideal o ayudarte a reservar tu cita.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: 'usr-' + Date.now(),
      sender: 'user',
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    const currentInput = input;
    setInput('');
    setLoading(true);

    try {
      const history = messages.map((m) => ({ sender: m.sender, text: m.text }));
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentInput, history })
      });
      const data = await res.json();

      const aiMsg: ChatMessage = {
        id: 'ai-' + Date.now(),
        sender: 'assistant',
        text: data.reply || 'Con gusto te asesoro sobre Elizabeth Imba Nails Academy.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: 'err-' + Date.now(),
        sender: 'assistant',
        text: '¡Hola! Para información inmediata puedes usar directamente los botones de Reserva de Citas o Inscripción a Cursos aquí abajo, o comunicarte a nuestro WhatsApp.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const quickQuestions = [
    "¿Qué cursos de uñas ofrecen desde cero?",
    "¿Cuánto duran las Uñas Acrílicas y Polygel?",
    "¿Entregan certificado para trabajar?",
    "¿Dónde están ubicados y qué horarios tienen?"
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="max-w-xl w-full h-[650px] max-h-[90vh] bg-[#0b0c10] border border-[#00A896]/60 text-white rounded-3xl flex flex-col justify-between shadow-2xl relative overflow-hidden"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-black via-[#0f1118] to-black border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00A896] to-[#D4AF37] p-0.5 shadow-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="font-cinzel text-sm font-bold uppercase text-gold-gradient flex items-center gap-1.5">
                  Asesora Virtual VIP IA
                  <Sparkles className="w-3.5 h-3.5 text-[#00A896]" />
                </h3>
                <p className="text-[10px] text-[#00A896] font-poppins">Elizabeth Imba Nails Academy</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-[#00A896] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 font-poppins text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-[#00A896] flex items-center justify-center shrink-0 mt-1 shadow-md">
                    <Bot className="w-4 h-4 text-black" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] p-3.5 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-gold-gradient text-black rounded-tr-none font-semibold shadow-md'
                      : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/10 shadow-md'
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>
                  <span className={`text-[9px] block mt-1 ${
                    msg.sender === 'user' ? 'text-black/70' : 'text-gray-400'
                  }`}>
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-[#D4AF37] flex items-center justify-center shrink-0 mt-1 shadow-md">
                    <User className="w-4 h-4 text-black" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 justify-start items-center text-xs text-[#00A896] italic">
                <Bot className="w-5 h-5 animate-spin" />
                <span>La Asesora de Elizabeth Imba está escribiendo...</span>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-4 py-2 border-t border-gray-800/60 bg-black/40 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInput(q);
                }}
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#00A896] text-[10px] text-gray-300 whitespace-nowrap transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Quick Actions Bar inside Chat */}
          <div className="px-4 py-2 bg-black/60 border-t border-gray-800 flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="flex-1 py-2 rounded-xl bg-gold-gradient text-black text-[11px] font-bold uppercase"
            >
              Agenda Cita
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenEnrollment();
              }}
              className="flex-1 py-2 rounded-xl bg-turquoise-gradient text-white text-[11px] font-bold uppercase"
            >
              Inscribirse
            </button>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-black border-t border-gray-800 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pregunta sobre cursos, servicios o promociones..."
              className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white text-xs focus:border-[#00A896] focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-3 rounded-full bg-gold-gradient text-black font-bold disabled:opacity-50 hover:scale-105 transition-transform"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
