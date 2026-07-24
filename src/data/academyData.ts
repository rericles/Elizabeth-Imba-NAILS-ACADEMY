import { 
  ServiceItem, 
  CourseItem, 
  PillarCard, 
  FeatureCard, 
  TestimonialItem, 
  GalleryItem, 
  PromotionItem, 
  FaqItem, 
  BlogPost 
} from '../types';

// Custom generated image paths
export const BRAND_IMAGES = {
  logo: '/src/assets/images/logo_elizabeth_imba_1784907914113.jpg',
  heroBg: '/src/assets/images/hero_graduation_elizabeth_imba_1784909041948.jpg',
  courseMaster: '/src/assets/images/course_master_nail_1784907942152.jpg',
  beautyServices: '/src/assets/images/beauty_services_lux_1784907960934.jpg'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'srv-1',
    name: 'Corte de Cabello Damas y Caballeros',
    category: 'cabello',
    price: '$15 - $35',
    duration: '45 min',
    description: 'Diseño de imagen y cortes de tendencia internacional adaptados a tu estructura facial. Incluye lavado relajante con productos de alta gama y estilizado final.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    iconName: 'Scissors',
    popular: true,
    features: ['Visagismo personalizado', 'Lavado VIP con masaje', 'Estilizado térmico', 'Tratamiento sellador']
  },
  {
    id: 'srv-2',
    name: 'Tintes y Colorimetría Avanzada',
    category: 'cabello',
    price: '$45 - $120',
    duration: '2 - 3 horas',
    description: 'Técnicas de Balayage, Babylights, Babylights y cobertura total con tintes nutricionales sin amoníaco. Protección de la fibra capilar.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    iconName: 'Palette',
    features: ['Colorimetría de autor', 'Protección Olaplex/Plex', 'Matización personalizada', 'Brillo espejo']
  },
  {
    id: 'srv-3',
    name: 'Uñas Acrílicas Signature',
    category: 'unas',
    price: '$35 - $65',
    duration: '1.5 - 2 horas',
    description: 'Esculpido de alta precisión con acrílicos de pigmentación superior. Diseños en encapsulado, Baby Boomer, 3D y cristalización Swarovski.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    iconName: 'Sparkles',
    popular: true,
    features: ['Esculpido de estructura', 'Polvos hipoalergénicos', 'Diseño de autor', 'Duración 21+ días']
  },
  {
    id: 'srv-4',
    name: 'Polygel Hybrid Luxe',
    category: 'unas',
    price: '$40 - $70',
    duration: '1.5 horas',
    description: 'La combinación perfecta entre la resistencia del acrílico y la flexibilidad del gel. Ligero, duradero e inodoro.',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    iconName: 'Gem',
    popular: true,
    features: ['Estructura ultrafina', 'Sensación pluma natural', 'Resistencia superior', 'Curado UV/LED rápido']
  },
  {
    id: 'srv-5',
    name: 'Softgel Express VIP',
    category: 'unas',
    price: '$30 - $50',
    duration: '1 hora',
    description: 'Extensión mediante tips de gel 100% curables con base de máxima adherencia. Ideal para lucir uñas perfectas de forma ágil y natural.',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
    iconName: 'Zap',
    features: ['Aplicación rápida', 'Cero daño a uña natural', 'Acabado flexible', 'Esmaltado de alta duración']
  },
  {
    id: 'srv-6',
    name: 'Esmaltado Semipermanente con Manicura Rusa',
    category: 'unas',
    price: '$20 - $35',
    duration: '1 hora',
    description: 'Limpieza profunda de cutícula con torno micromotor (Manicura Combinada / Rusa) y aplicación de base niveladora con color Gel de alta densidad.',
    image: 'https://images.unsplash.com/photo-1522337094846-8a8302e30777?auto=format&fit=crop&w=800&q=80',
    iconName: 'Heart',
    features: ['Cutícula perfecta limpia', 'Nivelación de superficie', 'Nail Art minimalista', 'Brillo durante 3 semanas']
  },
  {
    id: 'srv-7',
    name: 'Uñas Esculpidas de Competencia',
    category: 'unas',
    price: '$45 - $85',
    duration: '2 horas',
    description: 'Construcción en moldes de papel con curvas C perfectas, ápice balanceado y limado estructural de nivel internacional.',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80',
    iconName: 'Crown',
    features: ['Moldes de precisión', 'Curva C definida', 'Cero burbujas', 'Garantía de retención']
  },
  {
    id: 'srv-8',
    name: 'Lifting de Pestañas con Keratina & Tintura',
    category: 'mirada',
    price: '$25 - $40',
    duration: '1 hora',
    description: 'Elevación y curvatura natural de tus pestañas desde la raíz con baño nutricional de keratina y pigmento negro intenso.',
    image: 'https://images.unsplash.com/photo-1583001809873-a1284d563375?auto=format&fit=crop&w=800&q=80',
    iconName: 'Eye',
    popular: true,
    features: ['Efecto abanico 6 a 8 semanas', 'Infusión de keratina', 'Resistente al agua', 'Cero rizadores manuales']
  },
  {
    id: 'srv-9',
    name: 'Laminado de Cejas & Diseño Visagista',
    category: 'mirada',
    price: '$25 - $45',
    duration: '45 min',
    description: 'Redireccionamiento del hélix capilar de la ceja para un efecto peinado, tupido y ordenado. Incluye perfilado e hibridación de henna.',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80',
    iconName: 'Feather',
    features: ['Efecto cejas orgánicas', 'Diseño de cejas según rostro', 'Tinte enriquecido', 'Efecto rellenador']
  },
  {
    id: 'srv-10',
    name: 'Depilaciones Faciales y Corporales VIP',
    category: 'estetica',
    price: '$10 - $45',
    duration: '30 - 60 min',
    description: 'Técnica delicada con cera elástica enriquecida con caléndula e hilo orgánico para pieles sensibles. Acabado sedoso y duradero.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    iconName: 'Sparkle',
    features: ['Cera elástica hipoalergénica', 'Depilación con hilo', 'Retardo del crecimiento', 'Loción calmar y suavizar']
  },
  {
    id: 'srv-11',
    name: 'Extensión de Pestañas (Efecto Rímel, Ruso, Megavolumen)',
    category: 'mirada',
    price: '$45 - $90',
    duration: '1.5 - 2.5 horas',
    description: 'Aplicación minuciosa de abanicos ultraligeros de fibra de seda pelo a pelo, adaptados al marco de tus ojos.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    iconName: 'EyeOff',
    popular: true,
    features: ['Aislamiento 100% profesional', 'Fibras de seda vegana', 'Adhesivos de grado médico', 'Aislamiento de ojos sensibles']
  }
];

export const COURSES_DATA: CourseItem[] = [
  {
    id: 'crs-1',
    title: 'Técnico en Uñas',
    duration: '2 Meses',
    modality: 'Presencial / Práctico 90%',
    description: 'Curso ideal para iniciar una carrera profesional en el mundo de las uñas desde cero. Aprende fundamentos de anatomía, manicura rusa, acrílico comercial y esmaltado semipermanente.',
    image: BRAND_IMAGES.courseMaster,
    badge: 'MÁS POPULAR',
    syllabus: [
      'Anatomía y bioseguridad en el estudio',
      'Manicura Rusa / Combinada con torno micromotor',
      'Acrílico Básico: Nivelación, perlas y limado',
      'Esmaltado Semipermanente & Nail Art de salón',
      'Retiro seguro e higiene de la uña natural'
    ],
    includes: ['Kit inicial de práctica profesional', 'Manual teórico ilustrado', 'Acceso a grupo VIP de estudiantes', 'Certificado Avalado'],
    price: '$180 / mes'
  },
  {
    id: 'crs-2',
    title: 'Técnico Profesional en Uñas',
    duration: '4 Meses',
    modality: 'Presencial Avanzado',
    description: 'Programa avanzado con técnicas modernas de arquitectura internacional (Polygel, Softgel, Esculpidas en Moldes, Baby Boomer, 3D) y módulo intensivo de emprendimiento y creación de tu marca.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    badge: 'CERTIFICACIÓN MASTER',
    syllabus: [
      'Arquitectura de Uñas de Competencia & Curva C',
      'Técnicas modernas: Polygel, Softgel & Dual Forms',
      'Diseño avanzado: Encapsulados, acuarela, líneas finas y cristales',
      'Mantenimiento, estructuras extremas y corrección',
      'Emprendimiento: Costeo de servicios, marca personal y marketing en Instagram'
    ],
    includes: ['Kit Completo Master con Lámpara y Torno', 'Prácticas con modelos reales en academia', 'Sesión fotográfica de portafolio', 'Certificado Internacional Master'],
    price: '$220 / mes'
  },
  {
    id: 'crs-3',
    title: 'Mirada Perfecta (Lifting + Laminado + Extensiones)',
    duration: '1 Mes',
    modality: 'Presencial Intensivo',
    description: 'Especialización completa en embellecimiento de cejas y pestañas. Domina el Lifting con keratina, Laminado visagista de cejas y Extensiones de Pestañas pelo a pelo.',
    image: BRAND_IMAGES.beautyServices,
    badge: 'ALTA DEMANDA',
    syllabus: [
      'Química del Lifting de pestañas y tiempos de exposición',
      'Visagismo y diseño geométrico de cejas',
      'Laminado y pigmentación con henna e híbrida',
      'Extensiones Pelo a Pelo: Mapeo, abanicos y retención',
      'Aislamiento, parche de hidrogel y bioseguridad ocular'
    ],
    includes: ['Kit de insumos para cejas y pestañas', 'Moldes anatómicos de silicón', 'Manual de mapping', 'Certificado de Especialista'],
    price: '$190 total'
  },
  {
    id: 'crs-4',
    title: 'Especialización Fibroblast Plasma Pen',
    duration: '3 Semanas',
    modality: 'Presencial Máster',
    description: 'Especialización profesional avanzada en tecnología de arco de plasma no invasivo para retracción cutánea, tratamiento de arrugas, blefaroplastia no quirúrgica y secuelas de acné.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    badge: 'CUPOS LIMITADOS',
    syllabus: [
      'Fisiología cutánea y regeneración tisular',
      'Manejo del equipo de Plasma Pen profesional',
      'Blefaroplastia no quirúrgica y lifting de cuello',
      'Tratamiento de estriaciones, manchas y cicatrices',
      'Protocolos de anestesia tópica y post-cuidados'
    ],
    includes: ['Dispositivo Fibroblast Certificado', 'Agujas estériles y antisépticos', 'Consentimientos informados legales', 'Certificado Avanzado Dermocosmiátrico'],
    price: '$290 total'
  }
];

export const PILLARS_DATA: PillarCard[] = [
  {
    id: 'pil-1',
    title: 'Profesionalismo',
    description: 'Instalaciones equipadas con tecnología de vanguardia y protocolos bioseguros de nivel hospitalario.',
    icon: 'ShieldCheck'
  },
  {
    id: 'pil-2',
    title: 'Innovación',
    description: 'Actualización continua con tendencias globales de Europa, Estados Unidos y Asia en uñas y estética.',
    icon: 'Sparkles'
  },
  {
    id: 'pil-3',
    title: 'Calidad',
    description: 'Productos 100% profesionales hipoalergénicos, veganos y de alta resistencia de marcas reconocidas.',
    icon: 'Award'
  },
  {
    id: 'pil-4',
    title: 'Formación Certificada',
    description: 'Programas educativos avalados que abren puertas al mercado laboral internacional o para emprender.',
    icon: 'GraduationCap'
  }
];

export const FEATURES_DATA: FeatureCard[] = [
  {
    id: 'feat-1',
    title: 'Atención Personalizada',
    description: 'Cada cliente recibe un diagnóstico exclusivo y una atención enfocada en potenciar su belleza única.',
    icon: 'UserCheck'
  },
  {
    id: 'feat-2',
    title: 'Docentes Certificados',
    description: 'Instructoras máster con trayectoria internacional capacitadas en pedagogía técnica de vanguardia.',
    icon: 'BadgeCheck'
  },
  {
    id: 'feat-3',
    title: 'Productos Premium',
    description: 'Utilizamos fórmulas libres de químicos agresivos, respetando la salud de tus uñas y piel.',
    icon: 'Gem'
  },
  {
    id: 'feat-4',
    title: 'Técnicas Actualizadas',
    description: 'Métodos modernos sin dolor, limados estructurales anatómicos y tendencias virales de salón.',
    icon: 'Zap'
  },
  {
    id: 'feat-5',
    title: 'Certificación Profesional',
    description: 'Obtén un título avalado con valor curricular que respalda tu competencia y conocimientos.',
    icon: 'FileCheck'
  },
  {
    id: 'feat-6',
    title: 'Ambiente Moderno',
    description: 'Un santuario de lujo, aromaterapia, música relajante e iluminación diseñada para reconectar contigo.',
    icon: 'Home'
  }
];

export const STATS_DATA = [
  { value: 500, label: 'Estudiantes capacitadas', suffix: '+', icon: 'GraduationCap' },
  { value: 3000, label: 'Servicios realizados', suffix: '+', icon: 'Sparkles' },
  { value: 98, label: 'Clientes satisfechos', suffix: '%', icon: 'Smile' },
  { value: 100, label: 'Formación práctica', suffix: '%', icon: 'CheckCircle2' }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'tst-1',
    name: 'Carolina M. Mendoza',
    role: 'Graduada del Técnico Profesional',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Ingresé a la academia sin saber agarrar el pincel y hoy, 6 meses después, abrí mi propio estudio de uñas con agenda llena. La profesora Elizabeth enseña con una paciencia y técnica increíble. ¡La mejor inversión de mi vida!',
    courseOrService: 'Curso Técnico Profesional en Uñas'
  },
  {
    id: 'tst-2',
    name: 'Valeria R. Sotomayor',
    role: 'Cliente VIP de Spa',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Llevo 2 años haciéndome Polygel y Lifting de pestañas con ellas. La precisión, la higiene del instrumental esterilizado en autoclave y el lujo del ambiente no tienen comparación. Mis uñas duran intactas casi un mes.',
    courseOrService: 'Servicio Polygel & Lifting'
  },
  {
    id: 'tst-3',
    name: 'Stephanie B. Andrade',
    role: 'Alumna Mirada Perfecta',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'El curso de Mirada Perfecta superó todas mis expectativas. Te dan todo el material para trabajar, practicas en modelos reales con supervisión directa y la certificación me permitió empezar a atender clientes de inmediato.',
    courseOrService: 'Especialización Mirada Perfecta'
  },
  {
    id: 'tst-4',
    name: 'Gabriela F. Torres',
    role: 'Empresaria de Estética',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Llevé a mi equipo de manicuristas a capacitarse en Manicura Rusa y Softgel en Elizabeth Imba Academy. El nivel pedagógico es de talla mundial. La calidad del trabajo de mis colaboradoras aumentó exponencialmente.',
    courseOrService: 'Capacitación Corporativa'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Softgel Nude Glam con Hoja de Oro',
    category: 'Servicios',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    subtitle: 'Estructura perfecta con acabado satinado'
  },
  {
    id: 'gal-2',
    title: 'Taller Práctico de Acrílico Esculpido',
    category: 'Cursos',
    image: BRAND_IMAGES.courseMaster,
    subtitle: 'Estudiantes perfeccionando control de perlas'
  },
  {
    id: 'gal-3',
    title: 'Ceremonia de Graduación Promoción 2026',
    category: 'Graduaciones',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    subtitle: 'Entrega de certificaciones internacionales'
  },
  {
    id: 'gal-4',
    title: 'Lifting de Pestañas & Laminado de Cejas',
    category: 'Trabajos realizados',
    image: BRAND_IMAGES.beautyServices,
    subtitle: 'Efecto abanico y cejas orgánicas'
  },
  {
    id: 'gal-5',
    title: 'Polygel Cristal con encapsulado floral',
    category: 'Trabajos realizados',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    subtitle: 'Diseño en alta definición 3D'
  },
  {
    id: 'gal-6',
    title: 'Nuestras Clientes VIP en Lounge',
    category: 'Clientes',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    subtitle: 'Experiencia confort con champán y cafe'
  },
  {
    id: 'gal-7',
    title: 'Práctica de Fibroblast Blefaroplastia',
    category: 'Cursos',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    subtitle: 'Demostración en vivo con instructora master'
  },
  {
    id: 'gal-8',
    title: 'Baby Boomer Acrílico Francés Ombré',
    category: 'Servicios',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
    subtitle: 'Degradado delicado de alta durabilidad'
  }
];

export const PROMOTIONS_DATA: PromotionItem[] = [
  {
    id: 'prm-1',
    title: 'Combo Beauty VIP (Softgel + Lifting de Pestañas)',
    discount: '25% OFF',
    description: 'Renueva tus manos y mirada en una sola sesión de lujo. Incluye hidratación de cutícula con aceites esenciales.',
    code: 'BEAUTY25',
    validUntil: '31 de Agosto 2026',
    badge: 'OFERTA DESTACADA',
    image: BRAND_IMAGES.beautyServices
  },
  {
    id: 'prm-2',
    title: 'Beca de Inscripción - Técnico en Uñas',
    discount: '50% EN MATRÍCULA',
    description: 'Aprovecha el descuento especial de inicio de trimestre al inscribirte este mes. Incluye kit inicial.',
    code: 'BECA2026',
    validUntil: 'Cupos Limitados',
    badge: 'PROMOCIÓN CURSOS',
    image: BRAND_IMAGES.courseMaster
  },
  {
    id: 'prm-3',
    title: 'Especial Parejas / Amigas en Esmaltado',
    discount: '2x1 EN SEGUNDO SERVICIO',
    description: 'Ven acompañada y obtén un 50% de descuento en el segundo esmaltado semipermanente con manicura rusa.',
    code: 'AMIGAS2X1',
    validUntil: 'Todos los Miércoles',
    badge: 'ESPECIAL SALÓN',
    image: 'https://images.unsplash.com/photo-1522337094846-8a8302e30777?auto=format&fit=crop&w=800&q=80'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: '¿Necesito tener experiencia previa para realizar los cursos?',
    answer: 'No es necesario tener experiencia. Nuestro "Curso Técnico en Uñas" y el módulo de "Mirada Perfecta" están diseñados desde cero con metodología paso a paso para personas sin conocimientos previos.',
    category: 'Cursos'
  },
  {
    question: '¿Los cursos incluyen kits de materiales para prácticas?',
    answer: '¡Sí! Todos nuestros cursos presenciales incluyen un kit de inicio profesional con insumos de alta calidad para que realices tus prácticas en la academia y comiences tus primeros trabajos.',
    category: 'Cursos'
  },
  {
    question: '¿El certificado me sirve para trabajar o abrir mi propio negocio?',
    answer: 'Absolutamente. Entregamos un Certificado avalado por Elizabeth Imba Nails Academy con valor curricular reconocido que certifica tus horas teórico-prácticas para insertarte laboralmente o emprender tu estudio.',
    category: 'Certificación'
  },
  {
    question: '¿Cuánto tiempo dura el servicio de Uñas Acrílicas o Polygel?',
    answer: 'Tanto las Uñas Acrílicas como el Polygel tienen una duración promedio de 3 a 4 semanas antes de requerir su primer retoque de mantenimiento.',
    category: 'Servicios'
  },
  {
    question: '¿Cómo puedo agendar una cita o reservar mi cupo para un curso?',
    answer: 'Puedes agendar directamente a través de los botones interactivos de "AGENDA TU CITA" o "INSCRIBIRME", o escribirnos por el botón flotante de WhatsApp para una confirmación inmediata.',
    category: 'Reservas'
  }
];

export const BLOG_DATA: BlogPost[] = [
  {
    id: 'blg-1',
    title: 'Tendencias de Nail Art 2026: Softgel, Micro-French y Tonos Metálicos',
    category: 'Tendencias',
    readTime: '4 min lectura',
    date: '18 Julio 2026',
    summary: 'Descubre las técnicas que están dominando las pasarelas internacionales y las solicitudes más rentables en salones de belleza.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    content: 'Las tendencias para este año se inclinan hacia acabados limpios, saludables y sofisticados. La manicura rusa combinada con Softgel permite esculpir formas ultraligeras pero resistentes...'
  },
  {
    id: 'blg-2',
    title: 'Guía de Cuidados para Mantener tus Uñas de Polygel Impecables por 1 Mes',
    category: 'Cuidados',
    readTime: '3 min lectura',
    date: '10 Julio 2026',
    summary: 'Consejos esenciales de nuestras manicuristas master para prevenir desprendimientos y mantener el brillo espejo.',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    content: 'El secreto de una máxima retención reside en la hidratación constante del surco ungueal con aceite de cutícula diario y evitar utilizar las uñas como herramientas de apertura...'
  },
  {
    id: 'blg-3',
    title: 'Cómo Iniciar tu Propio Negocio de Uñas y Pestañas desde Cero',
    category: 'Emprendimiento',
    readTime: '6 min lectura',
    date: '02 Julio 2026',
    summary: 'Paso a paso para estructurar tu propuesta de valor, calcular tus costos de insumos y atraer tus primeros 50 clientes VIP.',
    image: BRAND_IMAGES.courseMaster,
    content: 'El mercado de la estética de uñas y pestañas es uno de los rubros con mayor margen de ganancia y recurrencia del sector belleza. Aprende cómo posicionar tu marca en redes sociales...'
  }
];
