import React from 'react';
import { CheckCircle2, MessageSquare, ExternalLink, X, ShieldAlert } from 'lucide-react';

export default function WhatsAppModal({ isOpen, onClose, selectedNumber, whatsappUrl }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl relative border border-slate-100 text-center space-y-5">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
          <MessageSquare className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="bg-emerald-100 text-emerald-800 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            WhatsApp Ready
          </span>
          <h3 className="text-2xl font-black text-slate-900">
            Appointment Request Ready
          </h3>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Your appointment details have been prepared in WhatsApp for <strong className="text-slate-900">+{selectedNumber}</strong>. Please send the message to <strong className="text-teal-700">ThePhysiFit</strong> team to request confirmation.
        </p>

        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-500 flex items-start space-x-2 text-left">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <span>
            <strong>Note:</strong> Your appointment will be formally confirmed once our team verifies therapist availability in your locality via WhatsApp.
          </span>
        </div>

        <div className="space-y-2 pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center space-x-2 transition-all"
          >
            <span>Open WhatsApp & Send Request</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={onClose}
            className="w-full py-2.5 text-xs text-slate-500 font-semibold hover:text-slate-800 transition-colors"
          >
            Back to Website
          </button>
        </div>

      </div>
    </div>
  );
}
