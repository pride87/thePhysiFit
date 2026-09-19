import React from 'react';
import { Activity, Phone, MapPin, IndianRupee, Home, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Conditions', href: '#conditions' },
    { name: 'Home Therapy', href: '#we-come-to-you' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold">
                <Activity className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                ThePhysi<span className="text-teal-400">Fit</span>
              </span>
            </div>

            <p className="text-sm font-semibold text-teal-400 italic">
              "Professional Physiotherapy. Right at Your Doorstep."
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Home Physiotherapy & Rehabilitation Service serving Noida, Delhi NCR, and Ghaziabad. We bring certified physical therapists directly to your home for ₹700 per session.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300 pt-1">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-teal-400 mr-2 shrink-0" />
                <span>Noida • Delhi NCR • Ghaziabad</span>
              </div>
              <div className="flex items-center">
                <IndianRupee className="w-4 h-4 text-emerald-400 mr-2 shrink-0" />
                <span>₹700 / Session (No hidden fees)</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-teal-400 mr-2 shrink-0" />
                <span>WhatsApp: 9891050903 | 7065411520</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="hover:text-teal-400 transition-colors py-1 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking CTA */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2">
              Book Home Visit
            </h4>
            <p className="text-xs text-slate-400">
              Request a session at your convenient time. Instant pre-filled WhatsApp message.
            </p>
            <a
              href="#appointment"
              onClick={(e) => handleScrollTo(e, '#appointment')}
              className="w-full bg-teal-600 hover:bg-teal-500 text-white py-3 rounded-xl font-bold text-xs shadow-lg text-center flex items-center justify-center space-x-2 transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Book Your Home Appointment</span>
            </a>
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
        <div className="pt-6 text-center text-xs text-slate-400 font-medium">
          © 2026 ThePhysiFit. All Rights Reserved. Doorstep Physiotherapy Service in Noida, Delhi NCR & Ghaziabad.
        </div>

      </div>
    </footer>
  );
}
