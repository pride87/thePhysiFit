import React from 'react';
import { Home, Clock, UserCheck, MapPin, IndianRupee, MessageSquare } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Home,
      title: "Home-Based Care",
      desc: "Get comprehensive physiotherapy and movement rehabilitation without traveling to a clinic."
    },
    {
      icon: Clock,
      title: "Convenient",
      desc: "Request appointments according to your preferred morning, afternoon, or evening schedule."
    },
    {
      icon: UserCheck,
      title: "Personalized",
      desc: "Treatment plans and manual therapy techniques tailored to your specific physical condition."
    },
    {
      icon: MapPin,
      title: "Accessible",
      desc: "Serving patients across Noida, Delhi NCR, and Ghaziabad with dedicated home visits."
    },
    {
      icon: IndianRupee,
      title: "Transparent Pricing",
      desc: "Flat ₹700 per home physiotherapy session with zero hidden costs or clinic registration fees."
    },
    {
      icon: MessageSquare,
      title: "Easy Booking",
      desc: "Book your home visit in seconds with direct WhatsApp appointment confirmation."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-teal-700 bg-teal-50 border border-teal-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Our Core Value
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Choose ThePhysiFit?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Dedicated to delivering patient-centric physical rehabilitation directly where you feel most comfortable.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {reasons.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 hover:border-teal-500/40 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-600/10 text-teal-600 flex items-center justify-center mb-5 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
