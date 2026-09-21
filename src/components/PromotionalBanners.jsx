import React from 'react';
import { Home, ArrowRight, MessageSquare, IndianRupee, Sparkles } from 'lucide-react';

export default function PromotionalBanners({ type = 1 }) {
  const handleScrollToAppt = (e) => {
    e.preventDefault();
    const element = document.querySelector('#appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (type === 1) {
    return (
      <section className="py-12 bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-800 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="bg-white/20 text-teal-100 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Doorstep Healthcare
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Physiotherapy Without Leaving Home
            </h3>
            <p className="text-slate-100 text-sm sm:text-base max-w-xl">
              Professional physiotherapy support delivered directly to your doorstep across Noida, Delhi NCR and Ghaziabad.
            </p>
          </div>
          <a
            href="#appointment"
            onClick={handleScrollToAppt}
            className="bg-white text-teal-900 hover:bg-slate-100 px-7 py-3.5 rounded-xl font-extrabold text-sm shadow-xl transition-all flex items-center space-x-2 shrink-0"
          >
            <Home className="w-4 h-4" />
            <span>Book Home Visit</span>
          </a>
        </div>
      </section>
    );
  }

  if (type === 2) {
    return (
      <section className="py-12 bg-slate-900 text-white border-y border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-teal-400">
              Your Recovery Starts at Home
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              Convenient physiotherapy care designed around your daily needs, family comfort, and mobility requirements.
            </p>
          </div>
          <a
            href="#appointment"
            onClick={handleScrollToAppt}
            className="bg-teal-500 hover:bg-teal-400 text-slate-950 px-7 py-3.5 rounded-xl font-extrabold text-sm shadow-lg transition-all flex items-center space-x-2 shrink-0"
          >
            <span>Schedule Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    );
  }

  if (type === 3) {
    return (
      <section className="py-10 bg-teal-50 border-y border-teal-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-xl sm:text-2xl font-black text-slate-900">
              Home Physiotherapy — <span className="text-teal-700">₹700 / Session</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Serving Noida, Delhi NCR and Ghaziabad. Zero hidden charges.
            </p>
          </div>
          <a
            href="#appointment"
            onClick={handleScrollToAppt}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all shrink-0"
          >
            Book Now
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="py-14 bg-gradient-to-tr from-slate-900 via-teal-950 to-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-3xl sm:text-4xl font-black text-white">
          Don't Let Pain Limit Your Life
        </h3>
        <p className="text-slate-300 text-base max-w-xl mx-auto">
          Get expert physiotherapy support in the comfort of your home with ThePhysiFit.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-3">
          <a
            href="tel:7065411520"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-lg flex items-center space-x-2"
          >
            <span>Call Now — 7065411520</span>
          </a>
          <a
            href="https://wa.me/917065411520"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 hover:bg-teal-500 text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-lg flex items-center space-x-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
