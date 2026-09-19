import React from 'react';
import { Home, MapPin, IndianRupee, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

export default function Hero() {
  const scrollToAppointment = (e) => {
    e.preventDefault();
    const element = document.querySelector('#appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-slate-50">
      
      {/* Decorative background glow circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-teal-200/30 to-emerald-200/20 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2 bg-teal-100/80 border border-teal-200 text-teal-800 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
              <span>Doorstep Physiotherapy Services</span>
              <span className="text-teal-400">•</span>
              <span className="text-teal-900 font-bold">Noida • Delhi NCR • Ghaziabad</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Professional Physiotherapy.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-600">
                Right at Your Doorstep.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Personalized physiotherapy and rehabilitation care delivered to your home across Noida, Delhi NCR and Ghaziabad. Enjoy expert care without the hassle of clinic travel.
            </p>

            {/* Info Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 pb-2">
              <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Service Mode</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">Home Visit</div>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Coverage Area</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 truncate max-w-[90px] sm:max-w-none">NCR Region</div>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 font-bold">
                  <IndianRupee className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Session Fee</div>
                  <div className="text-xs sm:text-sm font-bold text-teal-700">₹700 / Session</div>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Instant Booking</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">WhatsApp</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-3">
              <a
                href="#appointment"
                onClick={scrollToAppointment}
                className="bg-teal-600 hover:bg-teal-700 text-white px-7 py-4 rounded-xl font-bold text-base shadow-lg shadow-teal-600/30 hover:shadow-xl hover:shadow-teal-600/40 transition-all text-center flex items-center justify-center group"
              >
                <span>Book Home Appointment</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/919891050903?text=Hello%20ThePhysiFit%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20home%20physiotherapy%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-xl font-bold text-base shadow-md shadow-emerald-600/20 transition-all text-center flex items-center justify-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Statement */}
            <div className="pt-2 flex items-center text-xs sm:text-sm text-slate-600 font-medium space-x-2">
              <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
              <span>"Convenient care without the need to travel to a clinic."</span>
            </div>

          </div>

          {/* Right Column: High Quality Image & Floating Feature Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/assets/hero_physio.jpg"
                alt="Physiotherapist assisting patient with home therapy"
                className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-lg">
                      ₹700
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">All-Inclusive Home Visit</h4>
                      <p className="text-xs text-slate-600">Assessment & Guided Rehabilitation</p>
                    </div>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase">
                    No Travel Fee
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Top Card */}
            <div className="absolute -top-4 -right-4 sm:top-4 sm:-right-6 bg-slate-900 text-white p-3.5 rounded-xl shadow-xl border border-slate-800 hidden sm:flex items-center space-x-3 animate-float">
              <div className="w-9 h-9 rounded-lg bg-teal-500 text-white flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-300">Flexible Timing</div>
                <div className="text-xs font-bold text-teal-400">At Your Convenience</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
