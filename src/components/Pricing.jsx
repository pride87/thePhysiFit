import React from 'react';
import { CheckCircle2, ShieldCheck, CreditCard, ArrowRight, Home, Clock } from 'lucide-react';

export default function Pricing() {
  const features = [
    "Certified Physiotherapist Home Visit",
    "Comprehensive Physical Assessment",
    "Personalized Treatment & Therapy",
    "Custom Exercise & Rehabilitation Guidance",
    "Ergonomic & Postural Advice",
    "Serving Noida, Delhi NCR & Ghaziabad"
  ];

  const handleScrollToAppt = (e) => {
    e.preventDefault();
    const element = document.querySelector('#appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-teal-400 bg-teal-950 border border-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            100% Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Simple & Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            High quality home-based rehabilitation with zero hidden charges or clinic overheads.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto mt-12 bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 bg-gradient-to-l from-teal-500 to-emerald-500 text-slate-950 font-black text-xs px-6 py-2 rounded-bl-2xl uppercase tracking-widest">
            Best Value Home Care
          </div>

          <div className="text-center space-y-3 pb-8 border-b border-slate-700">
            <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
              Home Physiotherapy Session
            </span>
            <div className="flex items-baseline justify-center space-x-2">
              <span className="text-5xl sm:text-7xl font-black text-teal-400 tracking-tight">₹700</span>
              <span className="text-slate-300 text-lg font-bold">/ Session</span>
            </div>
            <p className="text-xs text-slate-400">
              Includes complete therapist home visit & individual rehabilitation session
            </p>
          </div>

          {/* Features Checklist */}
          <div className="py-8 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              What's Included in Every ₹700 Session:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 text-center space-y-4">
            <a
              href="#appointment"
              onClick={handleScrollToAppt}
              className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 py-4 rounded-xl font-extrabold text-lg shadow-xl shadow-teal-500/20 transition-all flex items-center justify-center space-x-2"
            >
              <span>Book ₹700 Home Session</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* Payment Clarification */}
            <div className="bg-slate-900/90 border border-slate-700/70 p-4 rounded-xl text-xs text-slate-300 flex items-start space-x-3 text-left">
              <CreditCard className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">No Online Payment Required:</strong>
                No online payment is required through this website. Payment details can be confirmed directly with the ThePhysiFit team.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
