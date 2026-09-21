import React from 'react';
import { MapPin, IndianRupee, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-950 rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden border border-slate-800">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                Direct Contact & Support
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                Get Physiotherapy at Home
              </h2>

              <p className="text-slate-300 text-base sm:text-lg">
                <strong className="text-teal-400">ThePhysiFit</strong> — Home Physiotherapy & Rehabilitation Service.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* Service Area */}
                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase">Service Area</div>
                    <div className="text-sm font-bold text-white">Noida • Greater Noida • Ghaziabad</div>
                  </div>
                </div>

                {/* Session Fee */}
                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <IndianRupee className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase">Session Fee</div>
                    <div className="text-sm font-bold text-emerald-400">₹700 / Home Session</div>
                  </div>
                </div>

                {/* Phone Contacts */}
                <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 sm:col-span-2 flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 fill-current" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Primary Contact Phone</div>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <a 
                        href="tel:7065411520" 
                        className="text-xl sm:text-2xl font-black text-emerald-400 hover:text-emerald-300 transition-colors flex items-center"
                      >
                        7065411520
                        <span className="ml-2 text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold uppercase">Primary</span>
                      </a>
                    </div>
                    <div className="text-xs text-slate-400 pt-0.5">
                      Secondary WhatsApp / Contact: <a href="tel:9891050903" className="text-slate-300 font-semibold hover:text-white">9891050903</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-5 bg-slate-800/90 p-6 sm:p-8 rounded-2xl border border-slate-700/80 space-y-4 text-center">
              <h3 className="text-xl font-bold text-white">
                Book Your Doorstep Session
              </h3>
              <p className="text-xs text-slate-300">
                Choose an action below to request a physiotherapist home visit:
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href="tel:7065411520"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-extrabold text-sm shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call Now — 7065411520</span>
                </a>

                <a
                  href="https://wa.me/917065411520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-teal-600 hover:bg-teal-500 text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp 7065411520 (Primary)</span>
                </a>

                <a
                  href="https://wa.me/919891050903"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-700 hover:bg-slate-600 text-slate-200 py-3 rounded-xl font-medium text-xs transition-all flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp 9891050903 (Secondary)</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
