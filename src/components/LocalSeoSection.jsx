import React from 'react';
import { MapPin, Phone, ShieldCheck, Home, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function LocalSeoSection() {
  const scrollToAppointment = (e) => {
    e.preventDefault();
    const element = document.querySelector('#appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const locations = [
    {
      name: "Noida",
      route: "#/noida",
      desc: "Prompt home visit physiotherapy across Sectors 15, 18, 50, 62, 75, 76, 128, 137, Expressway & surrounding areas.",
      highlights: ["Back & Neck Care", "Senior Mobility", "Post-Op Rehab"]
    },
    {
      name: "Greater Noida",
      route: "#/greater-noida",
      desc: "Doorstep physiotherapy in Greater Noida West (Noida Extension), Alpha, Beta, Gamma, Omega & Knowledge Park.",
      highlights: ["Joint Stiffness", "Knee Rehab", "Sports Injury Care"]
    },
    {
      name: "Ghaziabad",
      route: "#/ghaziabad",
      desc: "Certified home visit therapy in Indirapuram, Vaishali, Vasundhara, Raj Nagar Extension & Crossings Republik.",
      highlights: ["Elderly Care", "Pain Relief", "Home Visit Physio"]
    }
  ];

  return (
    <section id="local-seo-services" className="py-16 md:py-24 bg-slate-900 text-slate-100 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-teal-950 text-teal-300 border border-teal-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-teal-400" />
            <span>Local Service Coverage</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Home Physiotherapy Services in Noida, Greater Noida & Ghaziabad
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            ThePhysiFit provides convenient home physiotherapy sessions across selected areas of Noida, Greater Noida, and Ghaziabad. Our home-visit physiotherapy service is designed for people who prefer professional physiotherapy care in the comfort of their home without traveling to a physical clinic.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/80 hover:border-teal-500/60 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-teal-900/20"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-teal-400">
                    <MapPin className="w-6 h-6 shrink-0" />
                    <h3 className="text-2xl font-bold text-white">{loc.name}</h3>
                  </div>
                  <span className="text-xs font-bold bg-teal-950 text-teal-300 px-2.5 py-1 rounded-full border border-teal-800">
                    Home Visits Available
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {loc.desc}
                </p>

                <div className="space-y-2 mb-6">
                  {loc.highlights.map((h, i) => (
                    <div key={i} className="flex items-center text-xs text-slate-300 space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <a
                  href={loc.route}
                  className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center space-x-1 group"
                >
                  <span>Explore {loc.name} Services</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:7065411520"
                  className="text-xs font-bold text-emerald-400 hover:underline flex items-center"
                >
                  <Phone className="w-3 h-3 mr-1" />
                  7065411520
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Local Search Intent Highlights Box */}
        <div className="mt-14 bg-slate-800/90 border border-slate-700 rounded-3xl p-8 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Looking for "Physiotherapy near me" or a "Physiotherapist at home"?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                If you are searching for home visit physiotherapy nearby in Noida, Greater Noida, or Ghaziabad, our qualified physiotherapists bring clinical expertise and specialized equipment straight to your doorstep. We regularly treat back pain, neck pain, knee osteoarthritis, sports injuries, and elderly mobility concerns.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center space-x-2 bg-slate-900/60 p-3 rounded-xl border border-slate-700">
                  <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
                  <span>Licensed & Certified Therapists</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-900/60 p-3 rounded-xl border border-slate-700">
                  <Clock className="w-5 h-5 text-teal-400 shrink-0" />
                  <span>Convenient Home Slots</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-900/60 p-3 rounded-xl border border-slate-700">
                  <Home className="w-5 h-5 text-teal-400 shrink-0" />
                  <span>100% Home Visit Service</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-900/60 p-3 rounded-xl border border-slate-700">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Primary Booking: 7065411520</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 text-center">
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Session Fee</div>
              <div className="text-3xl font-black text-emerald-400">₹700 <span className="text-xs text-slate-400 font-normal">/ session</span></div>
              <p className="text-xs text-slate-400">Assessment & guided home treatment included.</p>
              
              <a
                href="tel:7065411520"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-sm shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Now: 7065411520</span>
              </a>

              <a
                href="#appointment"
                onClick={scrollToAppointment}
                className="w-full bg-teal-700 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-xl text-sm shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span>Schedule Home Visit</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
