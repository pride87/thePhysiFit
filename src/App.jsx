import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WeComeToYou from './components/WeComeToYou';
import Services from './components/Services';
import LocalSeoSection from './components/LocalSeoSection';
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
import LocationPages from './components/LocationPages';
import ServicePages from './components/ServicePages';
import MobileStickyCallBar from './components/MobileStickyCallBar';

const LOCATION_ROUTES = ['noida', 'greater-noida', 'ghaziabad'];
const SERVICE_ROUTES = [
  'physiotherapy-at-home',
  'back-pain-physiotherapy',
  'neck-pain-physiotherapy',
  'knee-pain-physiotherapy',
  'sports-injury-physiotherapy',
  'post-surgery-rehabilitation',
  'elderly-mobility-physiotherapy',
  'home-visit-physiotherapy'
];

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const routeKey = currentHash.replace(/^#\/?/, '');

  // Reset metadata when returning to home
  useEffect(() => {
    if (!routeKey || (!LOCATION_ROUTES.includes(routeKey) && !SERVICE_ROUTES.includes(routeKey))) {
      document.title = 'ThePhysiFit | Home Physiotherapy in Noida, Greater Noida & Ghaziabad';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'ThePhysiFit provides professional home physiotherapy in Noida, Greater Noida and Ghaziabad. Book a home visit for back pain, neck pain, knee pain, sports injuries and rehabilitation. Call 7065411520.');
      }
      const canonicalTag = document.querySelector('link[rel="canonical"]');
      if (canonicalTag) {
        canonicalTag.setAttribute('href', 'https://thephysifit.com');
      }
    }
  }, [routeKey]);

  // Handle Location subpage routing
  if (LOCATION_ROUTES.includes(routeKey)) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-500 selection:text-white pb-16">
        <Navbar />
        <LocationPages locationKey={routeKey} onNavigateBack={() => window.location.hash = ''} />
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyCallBar />
      </div>
    );
  }

  // Handle Service subpage routing
  if (SERVICE_ROUTES.includes(routeKey)) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-500 selection:text-white pb-16">
        <Navbar />
        <ServicePages serviceKey={routeKey} onNavigateBack={() => window.location.hash = ''} />
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyCallBar />
      </div>
    );
  }

  // Handle 404 fallback for unknown hash routes starting with /
  if (currentHash.startsWith('#/') && routeKey && !LOCATION_ROUTES.includes(routeKey) && !SERVICE_ROUTES.includes(routeKey)) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
        <Navbar />
        <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
          <div className="w-16 h-16 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold">
            404
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900">Page Not Found</h1>
          <p className="text-slate-600 text-sm">
            The page or service you are looking for is unavailable. Explore our home physiotherapy services across Noida, Greater Noida, and Ghaziabad.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '';
            }}
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-xl shadow transition-all text-sm"
          >
            Return to Homepage
          </a>
        </div>
        <Footer />
        <MobileStickyCallBar />
      </div>
    );
  }

  // Main Homepage Layout
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-500 selection:text-white pb-16 md:pb-0">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Hero Section with H1 */}
      <Hero />

      {/* Banner 1: Doorstep Physiotherapy */}
      <PromotionalBanners type={1} />

      {/* We Come To You Section */}
      <WeComeToYou />

      {/* Local SEO Section: Noida, Greater Noida & Ghaziabad */}
      <LocalSeoSection />

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

      {/* Local FAQ Accordion */}
      <FAQ />

      {/* Contact Section */}
      <Contact />

      {/* Banner 4: Don't Let Pain Limit Your Life */}
      <PromotionalBanners type={4} />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Widget */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Call CTA Bar */}
      <MobileStickyCallBar />
    </div>
  );
}
