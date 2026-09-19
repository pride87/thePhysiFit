import React, { useState } from 'react';
import { SERVICES } from '../data/physioData';
import { 
  Activity, Trophy, ShieldAlert, Maximize2, RotateCcw, 
  HeartPulse, Brain, Users, UserCheck, Hand, Dumbbell, Zap, 
  ArrowRight, X, CheckCircle2, Calendar 
} from 'lucide-react';

const iconMap = {
  Activity, Trophy, ShieldAlert, Maximize2, RotateCcw, 
  HeartPulse, Brain, Users, UserCheck, Hand, Dumbbell, Zap
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const handleBookService = (serviceTitle) => {
    setSelectedService(null);
    const element = document.querySelector('#appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Pre-select service in form if element exists
      const therapySelect = document.getElementById('therapy-select');
      if (therapySelect) {
        therapySelect.value = serviceTitle;
      }
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-teal-700 bg-teal-100/80 border border-teal-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Comprehensive Home Care
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Home Physiotherapy Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Professional treatments brought directly to your doorstep across Noida, Delhi NCR & Ghaziabad for ₹700 per home session.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName] || Activity;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    Home Session: <strong className="text-teal-700">₹700</strong>
                  </span>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center space-x-1 group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal Popup for Service Details */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center">
                {React.createElement(iconMap[selectedService.iconName] || Activity, { className: "w-6 h-6" })}
              </div>
              <div>
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
                  {selectedService.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 mb-6 space-y-2">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Key Treatment Highlights
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {selectedService.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-teal-50/80 p-4 rounded-2xl border border-teal-100 flex items-center justify-between mb-6">
              <div>
                <div className="text-xs text-slate-600 font-medium">Transparent Pricing</div>
                <div className="text-lg font-extrabold text-teal-800">₹700 per home session</div>
              </div>
              <div className="text-[11px] text-teal-900 bg-white px-2.5 py-1 rounded-lg border border-teal-200 font-bold">
                No Clinic Travel
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setSelectedService(null)}
                className="w-1/2 py-3 border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => handleBookService(selectedService.title)}
                className="w-1/2 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-teal-600/30 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Therapy</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
