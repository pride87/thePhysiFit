import React from 'react';
import { Home, MapPin, IndianRupee, Phone, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Contact() {
  const handleScrollToAppt = (e) => {
    e.preventDefault();
    const element = document.querySelector('#appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                    <div className="text-sm font-bold text-white">Noida • Delhi NCR • Ghaziabad</div>
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

                {/* Direct WhatsApp Numbers */}
                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 sm:col-span-2 flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase">WhatsApp Contacts</div>
                    <div className="text-sm font-bold text-white flex flex-wrap gap-x-4">
                      <span>📱 9891050903</span>
                      <span>📱 7065411520</span>
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
                  href="#appointment"
                  onClick={handleScrollToAppt}
                  className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 py-3.5 rounded-xl font-extrabold text-sm shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Home className="w-4 h-4" />
                  <span>Book Home Appointment</span>
                </a>

                <a
                  href="https://wa.me/919891050903"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp 9891050903</span>
                </a>

                <a
                  href="https://wa.me/917065411520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp 7065411520</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
