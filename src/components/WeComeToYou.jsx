import React from 'react';
import { NavigationOff, Home, CalendarClock, UserCheck, ArrowRight } from 'lucide-react';

export default function WeComeToYou() {
  const benefits = [
    {
      icon: NavigationOff,
      title: "No Travel",
      desc: "Avoid unnecessary travel, heavy traffic, and long wait times when pain or limited mobility makes moving difficult."
    },
    {
      icon: Home,
      title: "Comfortable Environment",
      desc: "Receive professional care and rehabilitation exercises in the familiar, relaxed surroundings of your own home."
    },
    {
      icon: CalendarClock,
      title: "Convenient Scheduling",
      desc: "Request an appointment according to your preferred date and time, fitting seamlessly around your family routine."
    },
    {
      icon: UserCheck,
      title: "Personalized Attention",
      desc: "Receive dedicated, one-on-one individualized physiotherapy guidance based on your specific physical needs."
    }
  ];

  const handleScrollToAppt = (e) => {
    e.preventDefault();
    const element = document.querySelector('#appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="we-come-to-you" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-200 text-teal-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>Doorstep Healthcare Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            We Come to You
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Why travel when physiotherapy can come to you? <span className="font-semibold text-slate-900">ThePhysiFit</span> provides convenient home-based physiotherapy and rehabilitation support so you can receive expert care in the comfort of your own home across Noida, Delhi NCR, and Ghaziabad.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 hover:border-teal-500/40 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-teal-600/10 text-teal-600 flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-bold text-teal-600 group-hover:text-teal-700">
                  <span>Home Service Included</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner callout with image */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Home Visit Only • No Physical Clinic Needed
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                No waiting rooms. No traffic. Just pure focus on your recovery.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                Our physiotherapists arrive equipped with therapeutic supplies to administer gentle, effective treatments right at your residence in Noida, Delhi NCR & Ghaziabad for only ₹700 per session.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="#appointment"
                onClick={handleScrollToAppt}
                className="bg-teal-500 hover:bg-teal-400 text-slate-950 px-7 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 group"
              >
                <span>Book a Home Visit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
