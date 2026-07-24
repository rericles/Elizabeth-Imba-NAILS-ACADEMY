import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory store for demo bookings & enrollments
const bookings: any[] = [];
const enrollments: any[] = [];

// Gemini Assistant endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Mensaje requerido" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.json({
        reply: "¡Hola! Bienvenido a ELIZABETH IMBA NAILS ACADEMY. Soy tu asesora virtual de belleza. Actualmente estoy en modo de demostración. Puedes agendar tu cita o solicitar información de cursos usando nuestros formularios o vía WhatsApp directo al +593 99 123 4567."
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const systemInstruction = `
Eres la Asesora Virtual Oficial de Inteligencia Artificial para "ELIZABETH IMBA NAILS ACADEMY".
Tu trato debe ser extremadamente elegante, cordial, profesional, amable y orientada a la venta de servicios de belleza y cursos de capacitación.

Información Clave de la Academia:
- Nombre: ELIZABETH IMBA NAILS ACADEMY
- Eslogan: "Transformamos tu belleza en arte y tu pasión en una profesión."
- Servicios que ofrecemos:
  1. Corte de cabello damas y caballeros
  2. Tintes y colorimetría profesional
  3. Uñas Acrílicas (Diseño de autor, 3D, Encapsulados)
  4. Polygel
  5. Softgel
  6. Esmaltado Semipermanente (Rusa, Combinada)
  7. Uñas Esculpidas
  8. Lifting de Pestañas
  9. Laminado de Cejas
  10. Depilaciones con cera e hilo
  11. Extensión de Pestañas (Efecto Rímel, Volumen Ruso, Megavolumen)

- Cursos Profesionales Certificados:
  1. Técnico en Uñas (Duración: 2 meses. Ideal para iniciar desde cero. Incluye kit básico y certificado).
  2. Técnico Profesional en Uñas (Duración: 4 meses. Programa avanzado con técnicas de tendencia internacional y módulo especial de emprendimiento y marketing para estudios).
  3. Mirada Perfecta (Especialización en Lifting de pestañas, Laminado de cejas y Extensiones pelo a pelo).
  4. Fibroblast (Especialización técnica avanzada para rejuvenecimiento no invasivo).

- Ubicación y Horarios:
  - Dirección: Av. Principal de la Ciudad, Edificio Plaza Elite, Piso 2, Guayaquil / Quito (Ecuador).
  - Horarios de atención: Lunes a Sábado de 09:00 a 19:00.
  - Certificación: Entregamos certificado oficial avalado para ejercer profesionalmente o abrir negocio propio.

- Instrucciones de Respuesta:
  - Responde de forma concisa pero glamurosa (utiliza un tono sofisticado).
  - Anima a la persona a agendar una cita o inscribirse a un curso.
  - Ofrece recomendaciones de servicios según sus preferencias.
  - Responde siempre en español impecable.
`;

    const contents = [
      { role: "user", parts: [{ text: systemInstruction }] },
      { role: "model", parts: [{ text: "Entendido. Soy la Asesora Virtual VIP de Elizabeth Imba Nails Academy y atenderé con el máximo lujo, elegancia y profesionalismo." }] }
    ];

    if (history && Array.isArray(history)) {
      history.forEach((h: any) => {
        contents.push({
          role: h.sender === "user" ? "user" : "model",
          parts: [{ text: h.text }]
        });
      });
    }

    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
    });

    const replyText = response.text || "Con gusto puedo ayudarte con agendamientos o inscripciones en Elizabeth Imba Nails Academy.";
    return res.json({ reply: replyText });
  } catch (error: any) {
    console.error("Error in /api/chat:", error);
    return res.json({
      reply: "¡Hola! Con gusto te atendemos en Elizabeth Imba Nails Academy. Puedes explorar nuestros cursos y servicios directamente en esta pantalla o presionar el botón de WhatsApp para atención inmediata por parte de un asesor humano."
    });
  }
});

// Booking API
app.post("/api/booking", (req, res) => {
  const { name, email, phone, service, date, time, notes } = req.body;
  if (!name || !phone || !service) {
    return res.status(400).json({ success: false, message: "Nombre, teléfono y servicio son obligatorios." });
  }
  const newBooking = {
    id: "RSV-" + Math.floor(100000 + Math.random() * 900000),
    name,
    email,
    phone,
    service,
    date: date || new Date().toISOString().split("T")[0],
    time: time || "10:00",
    notes: notes || "",
    status: "Confirmada",
    createdAt: new Date()
  };
  bookings.push(newBooking);
  return res.json({
    success: true,
    message: "¡Cita reservada con éxito en Elizabeth Imba Nails Academy!",
    booking: newBooking
  });
});

// Enrollment API
app.post("/api/enrollment", (req, res) => {
  const { name, email, phone, course, shift, experience, comments } = req.body;
  if (!name || !phone || !course) {
    return res.status(400).json({ success: false, message: "Nombre, teléfono y curso son obligatorios." });
  }
  const newEnrollment = {
    id: "CURSO-" + Math.floor(100000 + Math.random() * 900000),
    name,
    email,
    phone,
    course,
    shift: shift || "Mañana",
    experience: experience || "Sin experiencia previa",
    status: "Inscrito - Cupo Reservado",
    createdAt: new Date()
  };
  enrollments.push(newEnrollment);
  return res.json({
    success: true,
    message: "¡Inscripción registrada exitosamente! Tu cupo ha sido apartado.",
    enrollment: newEnrollment
  });
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", brand: "ELIZABETH IMBA NAILS ACADEMY", timestamp: new Date() });
});

async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`✨ ELIZABETH IMBA NAILS ACADEMY Server listening on http://0.0.0.0:${PORT}`);
  });
}

start();
