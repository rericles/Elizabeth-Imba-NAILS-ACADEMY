export interface ServiceItem {
  id: string;
  name: string;
  category: 'unas' | 'mirada' | 'cabello' | 'estetica';
  price: string;
  duration: string;
  description: string;
  image: string;
  iconName: string;
  popular?: boolean;
  features: string[];
}

export interface CourseItem {
  id: string;
  title: string;
  duration: string;
  modality: string;
  description: string;
  image: string;
  badge?: string;
  syllabus: string[];
  includes: string[];
  price?: string;
}

export interface PillarCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  courseOrService: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Servicios' | 'Cursos' | 'Graduaciones' | 'Clientes' | 'Trabajos realizados';
  image: string;
  subtitle: string;
}

export interface PromotionItem {
  id: string;
  title: string;
  discount: string;
  description: string;
  code: string;
  validUntil: string;
  badge: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  image: string;
  content: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
}

export interface EnrollmentFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  shift: 'Mañana' | 'Tarde' | 'Sabatino';
  experience: 'Principiante' | 'Intermedio' | 'Avanzado';
  comments?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
