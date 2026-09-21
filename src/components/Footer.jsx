import React from 'react';
import { Phone, MapPin, IndianRupee, Home, ShieldAlert, ArrowRight } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Locations', href: '#local-seo-services' },
    { name: 'Conditions', href: '#conditions' },
    { name: 'Home Therapy', href: '#we-come-to-you' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { name: 'Physiotherapy at Home', href: '/physiotherapy-at-home' },
    { name: 'Back Pain Physiotherapy', href: '/back-pain-physiotherapy' },
    { name: 'Neck Pain Physiotherapy', href: '/neck-pain-physiotherapy' },
    { name: 'Knee Pain Physiotherapy', href: '/knee-pain-physiotherapy' },
    { name: 'Sports Injury Physiotherapy', href: '/sports-injury-physiotherapy' },
    { name: 'Post-Surgery Rehabilitation', href: '/post-surgery-rehabilitation' },
    { name: 'Elderly / Mobility Therapy', href: '/elderly-mobility-physiotherapy' },
    { name: 'Home Visit Physiotherapy', href: '/home-visit-physiotherapy' },
  ];

  const locationLinks = [
    { name: 'Noida Home Therapy', href: '/noida' },
    { name: 'Greater Noida Home Therapy', href: '/greater-noida' },
    { name: 'Ghaziabad Home Therapy', href: '/ghaziabad' },
  ];

  const handleScrollTo = (e, targetId) => {
    if (targetId.startsWith('/')) {
      return;
    }
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Primary Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 bg-white p-2.5 rounded-2xl border border-slate-800 inline-block">
              <img 
                src="/assets/logo.png" 
                alt="ThePhysiFit Logo" 
                className="h-12 w-auto object-contain" 
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">ThePhysiFit</h3>
              <p className="text-sm font-semibold text-teal-400">Home Physiotherapy Service</p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              ThePhysiFit provides professional home physiotherapy sessions in Noida, Greater Noida, and Ghaziabad. We bring certified physical therapists directly to your doorstep for ₹700 per session.
            </p>

            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="flex items-center text-teal-300 font-semibold">
                <MapPin className="w-4 h-4 mr-2 shrink-0 text-teal-400" />
                <span>Serving: Noida | Greater Noida | Ghaziabad</span>
              </div>

              <div className="flex items-center text-emerald-400 font-bold">
                <Phone className="w-4 h-4 mr-2 shrink-0 fill-emerald-400/20" />
                <span>Primary Contact: 7065411520</span>
              </div>

              <div className="flex items-center text-slate-400">
                <IndianRupee className="w-4 h-4 mr-2 shrink-0 text-emerald-400" />
                <span>₹700 / Session (No hidden fees)</span>
              </div>
            </div>

            <div className="pt-1">
              <a
                href="tel:7065411520"
                className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-xl text-xs font-bold shadow-md transition-all"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Now: 7065411520</span>
              </a>
            </div>
          </div>

          {/* Quick Links & Locations */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2">
              Serving Locations
            </h4>
            <ul className="space-y-2 text-xs">
              {locationLinks.map((loc) => (
                <li key={loc.name}>
                  <a
                    href={loc.href}
                    className="hover:text-teal-400 transition-colors py-1 flex items-center space-x-1.5"
                  >
                    <MapPin className="w-3 h-3 text-teal-400 shrink-0" />
                    <span>{loc.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2 pt-2">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="hover:text-teal-400 transition-colors py-0.5 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Pages & Booking CTA */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2">
              Home Physiotherapy Services
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {serviceLinks.map((srv) => (
                <li key={srv.name}>
                  <a
                    href={srv.href}
                    className="hover:text-teal-400 transition-colors py-0.5 flex items-center space-x-1"
                  >
                    <ArrowRight className="w-3 h-3 text-teal-500 shrink-0" />
                    <span className="truncate">{srv.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a
                href="#appointment"
                onClick={(e) => handleScrollTo(e, '#appointment')}
                className="w-full bg-teal-600 hover:bg-teal-500 text-white py-3 rounded-xl font-bold text-xs shadow-lg text-center flex items-center justify-center space-x-2 transition-all"
              >
                <Home className="w-4 h-4" />
                <span>Book Home Visit Appointment</span>
              </a>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer */}
        <div className="py-6 border-b border-slate-900 text-[11px] text-slate-400 leading-relaxed flex items-start space-x-3">
          <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <p>
            <strong>Medical Disclaimer:</strong> Information provided by ThePhysiFit on this website is for general educational purposes and is not a substitute for professional medical advice, diagnosis or treatment. Individual treatment plans should be determined by a qualified healthcare professional.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 text-center text-xs text-slate-400 font-medium space-y-1">
          <div>© 2026 ThePhysiFit. All Rights Reserved. Doorstep Home Physiotherapy Service.</div>
          <div className="text-[11px] text-slate-400">Serving Noida | Greater Noida | Ghaziabad | Delhi NCR • Primary Contact: 7065411520</div>
        </div>

      </div>
    </footer>
  );
}
