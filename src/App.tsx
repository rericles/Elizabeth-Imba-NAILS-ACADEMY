import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CoursesSection } from './components/CoursesSection';
import { GallerySection } from './components/GallerySection';
import { WhyUsSection } from './components/WhyUsSection';
import { StatsSection } from './components/StatsSection';
import { CtaBanner } from './components/CtaBanner';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';
import { EnrollmentModal } from './components/EnrollmentModal';
import { BeautyAiAssistantModal } from './components/BeautyAiAssistantModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [enrollmentModalOpen, setEnrollmentModalOpen] = useState<boolean>(false);
  const [aiAssistantOpen, setAiAssistantOpen] = useState<boolean>(false);

  const [bookingPreset, setBookingPreset] = useState<string>('');
  const [enrollmentPreset, setEnrollmentPreset] = useState<string>('');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) setBookingPreset(serviceName);
    setBookingModalOpen(true);
  };

  const handleOpenEnrollment = (courseTitle?: string) => {
    if (courseTitle) setEnrollmentPreset(courseTitle);
    setEnrollmentModalOpen(true);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen font-poppins selection:bg-[#20B2AA]/30 selection:text-[#C5A059] ${
      darkMode ? 'bg-[#0a0a0a] text-gray-100' : 'bg-white text-gray-900'
    }`}>
      {/* Preloader Screen */}
      <Preloader />

      {/* Header */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onOpenEnrollment={() => handleOpenEnrollment()}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenEnrollment={() => handleOpenEnrollment()}
        />

        {/* Nosotros / About Us */}
        <AboutSection darkMode={darkMode} />

        {/* Services */}
        <ServicesSection
          darkMode={darkMode}
          onOpenBooking={handleOpenBooking}
        />

        {/* Courses */}
        <CoursesSection
          darkMode={darkMode}
          onOpenEnrollment={handleOpenEnrollment}
        />

        {/* Gallery */}
        <GallerySection darkMode={darkMode} />

        {/* ¿Por qué elegirnos? */}
        <WhyUsSection darkMode={darkMode} />

        {/* Animated Statistics */}
        <StatsSection />

        {/* Call to Action Banner */}
        <CtaBanner onOpenEnrollment={() => handleOpenEnrollment()} />

        {/* Beauty Blog */}
        <BlogSection darkMode={darkMode} />

        {/* FAQ */}
        <FaqSection darkMode={darkMode} />

        {/* Location & Google Maps */}
        <LocationSection darkMode={darkMode} />

        {/* Contact Section */}
        <ContactSection darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenAiAssistant={() => setAiAssistantOpen(true)} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedServicePreset={bookingPreset}
      />

      {/* Course Enrollment Modal */}
      <EnrollmentModal
        isOpen={enrollmentModalOpen}
        onClose={() => setEnrollmentModalOpen(false)}
        selectedCoursePreset={enrollmentPreset}
      />

      {/* AI Beauty Chat Assistant Modal */}
      <BeautyAiAssistantModal
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
        onOpenEnrollment={() => handleOpenEnrollment()}
      />
    </div>
  );
}
