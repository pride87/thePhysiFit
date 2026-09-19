import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WeComeToYou from './components/WeComeToYou';
import Services from './components/Services';
import Conditions from './components/Conditions';
import WhoCanBenefit from './components/WhoCanBenefit';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import AppointmentForm from './components/AppointmentForm';
import PromotionalBanners from './components/PromotionalBanners';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-500 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Banner 1: Physiotherapy Without Leaving Home */}
      <PromotionalBanners type={1} />

      {/* We Come To You Section */}
      <WeComeToYou />

      {/* Services Grid & Modal */}
      <Services />

      {/* Banner 3: Home Physiotherapy ₹700 */}
      <PromotionalBanners type={3} />

      {/* Conditions We Help With */}
      <Conditions />

      {/* Who Can Benefit */}
      <WhoCanBenefit />

      {/* 4-Step Process: How It Works */}
      <HowItWorks />

      {/* Banner 2: Your Recovery Starts at Home */}
      <PromotionalBanners type={2} />

      {/* Transparent Pricing */}
      <Pricing />

      {/* Main Appointment Booking Form */}
      <AppointmentForm />

      {/* Why Choose ThePhysiFit */}
      <WhyChooseUs />

      {/* About ThePhysiFit */}
      <About />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Accordion */}
      <FAQ />

      {/* Contact Section */}
      <Contact />

      {/* Banner 4: Don't Let Pain Limit Your Life */}
      <PromotionalBanners type={4} />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
