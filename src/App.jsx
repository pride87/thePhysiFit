import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-500 selection:text-white pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <PromotionalBanners type={1} />
      <WeComeToYou />
      <LocalSeoSection />
      <Services />
      <PromotionalBanners type={3} />
      <Conditions />
      <WhoCanBenefit />
      <HowItWorks />
      <PromotionalBanners type={2} />
      <Pricing />
      <AppointmentForm />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <PromotionalBanners type={4} />
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyCallBar />
    </div>
  );
}

function LocationRouteWrapper({ locationKey }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-500 selection:text-white pb-16">
      <Navbar />
      <LocationPages locationKey={locationKey} onNavigateBack={() => navigate('/')} />
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyCallBar />
    </div>
  );
}

function ServiceRouteWrapper({ serviceKey }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-500 selection:text-white pb-16">
      <Navbar />
      <ServicePages serviceKey={serviceKey} onNavigateBack={() => navigate('/')} />
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyCallBar />
    </div>
  );
}

function NotFoundPage() {
  const navigate = useNavigate();
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
        <button
          onClick={() => navigate('/')}
          className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-xl shadow transition-all text-sm cursor-pointer"
        >
          Return to Homepage
        </button>
      </div>
      <Footer />
      <MobileStickyCallBar />
    </div>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.title = 'ThePhysiFit | Home Physiotherapy in Noida, Greater Noida & Ghaziabad';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'ThePhysiFit provides professional home physiotherapy in Noida, Greater Noida and Ghaziabad. Book a home visit for back pain, neck pain, knee pain, sports injuries and rehabilitation. Call 7065411520.');
      }
      const canonicalTag = document.querySelector('link[rel="canonical"]');
      if (canonicalTag) {
        canonicalTag.setAttribute('href', 'https://thephysifit.com/');
      }
    }
  }, [location.pathname]);

  return (
    <Routes>
      {/* Homepage */}
      <Route path="/" element={<HomePage />} />

      {/* Location Pages */}
      <Route path="/noida" element={<LocationRouteWrapper locationKey="noida" />} />
      <Route path="/greater-noida" element={<LocationRouteWrapper locationKey="greater-noida" />} />
      <Route path="/ghaziabad" element={<LocationRouteWrapper locationKey="ghaziabad" />} />

      {/* Service Pages */}
      <Route path="/physiotherapy-at-home" element={<ServiceRouteWrapper serviceKey="physiotherapy-at-home" />} />
      <Route path="/back-pain-physiotherapy" element={<ServiceRouteWrapper serviceKey="back-pain-physiotherapy" />} />
      <Route path="/neck-pain-physiotherapy" element={<ServiceRouteWrapper serviceKey="neck-pain-physiotherapy" />} />
      <Route path="/knee-pain-physiotherapy" element={<ServiceRouteWrapper serviceKey="knee-pain-physiotherapy" />} />
      <Route path="/sports-injury-physiotherapy" element={<ServiceRouteWrapper serviceKey="sports-injury-physiotherapy" />} />
      <Route path="/post-surgery-rehabilitation" element={<ServiceRouteWrapper serviceKey="post-surgery-rehabilitation" />} />
      <Route path="/elderly-mobility-physiotherapy" element={<ServiceRouteWrapper serviceKey="elderly-mobility-physiotherapy" />} />
      <Route path="/home-visit-physiotherapy" element={<ServiceRouteWrapper serviceKey="home-visit-physiotherapy" />} />

      {/* 404 Fallback */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
