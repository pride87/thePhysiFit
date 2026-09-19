import React from 'react';
import { BENEFICIARIES } from '../data/physioData';
import { Heart, Shield, Accessibility, Briefcase, Activity, Home, ArrowRight } from 'lucide-react';

const iconMap = {
  Heart, Shield, Accessibility, Briefcase, Activity, Home
};

export default function WhoCanBenefit() {
  const handleScrollToAppt = (e) => {
    e.preventDefault();
    const element = document.querySelector('#appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-teal-700 bg-teal-100 border border-teal-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Targeted Care Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Who Can Benefit From Home Physiotherapy?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Bringing professional physical therapy straight to patients who need care without clinic stress.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {BENEFICIARIES.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Home;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700">
                  <span>Home Visit Available</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Bar */}
        <div className="mt-12 text-center">
          <a
            href="#appointment"
            onClick={handleScrollToAppt}
            className="inline-flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-teal-600/30 transition-all hover:scale-105"
          >
            <span>Book Home Visit for Yourself or a Loved One</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
