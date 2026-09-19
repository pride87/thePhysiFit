import React, { useState } from 'react';
import { MessageSquare, X, PhoneCall, ExternalLink } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      
      {/* Popover Menu */}
      {isOpen && (
        <div className="mb-3 bg-white border border-slate-200 rounded-3xl p-5 shadow-2xl w-72 sm:w-80 animate-in slide-in-from-bottom-4 duration-200 text-slate-900 space-y-4">
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <h4 className="font-extrabold text-sm text-slate-900">Talk to ThePhysiFit</h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Select a WhatsApp number below to start a quick chat or request a home visit:
          </p>

          <div className="space-y-2">
            <a
              href="https://wa.me/919891050903?text=Hello%20ThePhysiFit%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20home%20physiotherapy%20session."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-xl text-xs font-bold flex items-center justify-between shadow-md transition-colors"
            >
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp 9891050903</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://wa.me/917065411520?text=Hello%20ThePhysiFit%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20home%20physiotherapy%20session."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-xl text-xs font-bold flex items-center justify-between shadow-md transition-colors"
            >
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp 7065411520</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="text-[10px] text-center text-slate-400 font-semibold uppercase">
            Noida • Delhi NCR • Ghaziabad (₹700/Session)
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-600/40 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group focus:outline-none"
        aria-label="Contact via WhatsApp"
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <div className="relative">
            <MessageSquare className="w-7 h-7 fill-white/20 stroke-[2]" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-300 border-2 border-emerald-600 animate-ping" />
          </div>
        )}
      </button>

    </div>
  );
}
