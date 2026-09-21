import React from 'react';
import { Phone, Calendar } from 'lucide-react';

export default function MobileStickyCallBar() {
  const scrollToAppointment = (e) => {
    e.preventDefault();
    const element = document.querySelector('#appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="tel:7065411520"
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-3 rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-lg active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 fill-current shrink-0" />
          <span className="truncate">Call: 7065411520</span>
        </a>

        <a
          href="#appointment"
          onClick={scrollToAppointment}
          className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-3 rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-lg active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4 shrink-0" />
          <span className="truncate">Book Visit (₹700)</span>
        </a>
      </div>
    </div>
  );
}
