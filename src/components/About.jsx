import React from 'react';
import { Target, MapPin, HeartPulse, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Side */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/assets/home_care.jpg"
                alt="ThePhysiFit home physiotherapy session"
                className="w-full h-[380px] sm:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-lg flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Doorstep Rehabilitation</h4>
                  <p className="text-xs text-slate-600">Serving Noida • Delhi NCR • Ghaziabad</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center space-x-2 bg-teal-100/80 border border-teal-200 text-teal-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>About Our Home Service</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              About ThePhysiFit
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              <strong className="text-slate-900">ThePhysiFit</strong> is a home physiotherapy and rehabilitation service focused on making physiotherapy more convenient and accessible. Instead of asking patients to travel to a clinic, ThePhysiFit brings physiotherapy services directly to their homes.
            </p>

            {/* Mission Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center space-x-2 text-teal-700 font-bold text-sm uppercase tracking-wider">
                <Target className="w-5 h-5 text-teal-600" />
                <span>Our Mission</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                "To make quality physiotherapy more convenient by bringing personalized rehabilitation support to patients at home."
              </p>
            </div>

            {/* Coverage badge */}
            <div className="pt-2 flex items-center space-x-3 text-slate-700 text-sm font-semibold">
              <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <span>Service Area: <strong className="text-teal-700">Noida • Delhi NCR • Ghaziabad</strong></span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
