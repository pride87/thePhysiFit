import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Home, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
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

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-teal-400 font-medium">
              <Home className="w-3.5 h-3.5 mr-1" />
              100% Home Visit Service — We Come to You!
            </span>
            <span className="text-slate-400">|</span>
            <span className="flex items-center text-slate-300">
              <MapPin className="w-3.5 h-3.5 mr-1 text-teal-400" />
              Serving Noida • Greater Noida • Ghaziabad • Delhi NCR
            </span>
          </div>
          <div className="flex items-center space-x-4 text-xs">
            <span className="text-teal-300 font-semibold bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800">
              ₹700 / Home Session
            </span>
            <a 
              href="tel:7065411520" 
              className="flex items-center text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1 fill-emerald-400" />
              Call Now: 7065411520
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-sm' : 'bg-white/95 backdrop-blur-md border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <a href="#hero" onClick={(e) => handleScrollTo(e, '#hero')} className="flex items-center space-x-3 group py-1">
              <img 
                src="/assets/logo.png" 
                alt="ThePhysiFit - Move Better Live Healthier" 
                className="h-12 sm:h-14 w-auto object-contain max-w-[200px] sm:max-w-[240px] group-hover:scale-105 transition-transform duration-200" 
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-slate-600 hover:text-teal-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-600 hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="tel:7065411520"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2"
              >
                <Phone className="w-4 h-4 fill-current shrink-0" />
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-100 font-semibold mb-0.5">Call Now</span>
                  <span className="text-xs font-black tracking-wide">7065411520</span>
                </div>
              </a>

              <a
                href="#appointment"
                onClick={(e) => handleScrollTo(e, '#appointment')}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2.5 rounded-xl font-semibold text-sm shadow-md shadow-teal-600/20 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center"
              >
                <Home className="w-4 h-4 mr-1.5" />
                <span>Book Home Visit</span>
              </a>
            </div>

            {/* Mobile Actions & Hamburger Toggle */}
            <div className="flex lg:hidden items-center space-x-2">
              <a
                href="tel:7065411520"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-xl text-xs font-bold shadow-md flex items-center space-x-1.5"
                aria-label="Call 7065411520"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call Now</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="pt-2 space-y-2">
              <a
                href="tel:7065411520"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold text-center text-sm shadow-md flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Now: 7065411520</span>
              </a>

              <a
                href="#appointment"
                onClick={(e) => handleScrollTo(e, '#appointment')}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-bold text-center text-sm shadow-md flex items-center justify-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span>Book Home Visit (₹700)</span>
              </a>

              <div className="text-center text-xs text-slate-500 pt-1">
                Noida • Delhi NCR • Ghaziabad
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
