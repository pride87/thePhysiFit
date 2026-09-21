import React, { useEffect } from 'react';
import { MapPin, Phone, CheckCircle2, ShieldCheck, Home, ArrowLeft, Calendar, HelpCircle } from 'lucide-react';

const LOCATION_DATA = {
  noida: {
    name: "Noida",
    title: "Home Physiotherapy in Noida | Doorstep Physiotherapist | ThePhysiFit",
    metaDesc: "Book certified home physiotherapy in Noida with ThePhysiFit. We provide doorstep physio sessions for back pain, neck pain, knee rehab & post-surgery. Call 7065411520.",
    h1: "Home Physiotherapy Services in Noida",
    subheading: "Professional doorstep physiotherapy and rehabilitation across all major sectors of Noida.",
    intro: "ThePhysiFit offers personalized home visit physiotherapy services across Noida. Whether you live in Sector 15, 18, 50, 62, 75, 76, 128, 137, or along the Noida Expressway, our qualified physical therapists visit your residence with treatment tools and equipment.",
    coverage: [
      "Noida Sector 15, 18, 27, 30 & Central Noida",
      "Noida Sector 50, 62, 75, 76, 78 & 79",
      "Noida Sector 128, 137, 143, 150 & Expressway",
      "Sector 119, 120, 121, 122 & surrounding residential societies"
    ],
    services: [
      "Back Pain & Sciatica Therapy at Home",
      "Cervical & Neck Strain Physiotherapy",
      "Knee Pain & Osteoarthritis Management",
      "Post-Surgery Joint Rehabilitation",
      "Elderly Mobility & Balance Support",
      "Sports Injury Care & Athletic Rehab"
    ],
    faqs: [
      {
        q: "Do you provide home physiotherapy in Noida Expressway sectors?",
        a: "Yes, ThePhysiFit provides home visits in Sector 128, 137, 143, 150, and all residential societies along Noida Expressway. Call 7065411520 to book."
      },
      {
        q: "How much does a home physiotherapy session cost in Noida?",
        a: "Each comprehensive home visit session in Noida is ₹700, including assessment and treatment."
      },
      {
        q: "How quickly can a physiotherapist visit my home in Noida?",
        a: "Same-day or next-day appointments are available depending on slot availability. Call 7065411520 or book via WhatsApp."
      }
    ]
  },
  'greater-noida': {
    name: "Greater Noida",
    title: "Home Physiotherapy in Greater Noida & Extension | ThePhysiFit",
    metaDesc: "Get doorstep physiotherapy in Greater Noida & Noida Extension for back pain, knee pain, post-op recovery and elderly care. Call 7065411520.",
    h1: "Home Physiotherapy Services in Greater Noida",
    subheading: "Reliable home visit physical therapy across Greater Noida West (Noida Extension) & main sectors.",
    intro: "ThePhysiFit provides professional home physiotherapy sessions in Greater Noida and Noida Extension. Our service is designed for residents who prefer top-quality rehabilitation care in their own living room without traveling long distances.",
    coverage: [
      "Greater Noida West (Noida Extension)",
      "Alpha 1, Alpha 2, Beta 1, Beta 2 & Gamma Sectors",
      "Omega, Chi, Phi, Delta & Knowledge Park",
      "Gaur City 1 & 2, Techzone, and surrounding townships"
    ],
    services: [
      "Home Visit Physiotherapy for Back & Neck Pain",
      "Post-Total Knee Replacement (TKR) Rehabilitation",
      "Senior Citizen Balance & Fall Prevention",
      "Shoulder Stiffness & Rotator Cuff Care",
      "Neurological & Stroke Rehabilitation",
      "Post-Fracture Recovery & Muscle Strengthening"
    ],
    faqs: [
      {
        q: "Are home physiotherapy sessions available in Noida Extension / Greater Noida West?",
        a: "Yes, we regularly serve all sectors and high-rise societies in Noida Extension (Greater Noida West). Call 7065411520 to schedule."
      },
      {
        q: "Do I need to arrange any equipment for the home session in Greater Noida?",
        a: "No, our physiotherapists bring the necessary portable therapy tools, exercise bands, and assessment equipment directly to your home."
      },
      {
        q: "What is the fee for a home session in Greater Noida?",
        a: "The session fee is ₹700 per home visit session with transparent pricing and no hidden costs."
      }
    ]
  },
  ghaziabad: {
    name: "Ghaziabad",
    title: "Home Physiotherapy in Ghaziabad | Indirapuram & Vaishali | ThePhysiFit",
    metaDesc: "Certified home physiotherapy in Ghaziabad, Indirapuram, Vaishali & Vasundhara. Specialized care for back pain, neck pain & senior mobility. Call 7065411520.",
    h1: "Home Physiotherapy Services in Ghaziabad",
    subheading: "Convenient home visit physiotherapy in Indirapuram, Vaishali, Vasundhara & Raj Nagar Extension.",
    intro: "ThePhysiFit offers expert home physiotherapy care across Ghaziabad. We bring certified physical therapists directly to your doorstep, providing relief for chronic pain, movement restrictions, and post-surgical recovery.",
    coverage: [
      "Indirapuram (Ahinsa Khand, Vaibhav Khand, Niti Khand, Nyay Khand)",
      "Vaishali & Vasundhara Sectors",
      "Raj Nagar Extension & Govindpuram",
      "Crossings Republik, Kaushambi & nearby Ghaziabad localities"
    ],
    services: [
      "Cervical Spondylosis & Neck Strain Treatment",
      "Lower Back Pain & Slip Disc Home Care",
      "Knee Joint Mobilization & Strengthening",
      "Elderly Care & Gait Retraining",
      "Post-Op Joint Replacement Rehabilitation",
      "Postural Realignment & Ergonomic Guidance"
    ],
    faqs: [
      {
        q: "Do you offer home visit physiotherapy in Indirapuram & Vaishali?",
        a: "Yes, ThePhysiFit provides dedicated home visit physiotherapy across Indirapuram, Vaishali, Vasundhara, and surrounding areas. Call 7065411520."
      },
      {
        q: "Can I book home therapy for my elderly parents in Ghaziabad?",
        a: "Yes, our physiotherapists specialize in gentle geriatric care, fall prevention, and mobility enhancement for seniors."
      },
      {
        q: "How can I book a session in Ghaziabad?",
        a: "Call 7065411520 or complete our quick online appointment form to send a WhatsApp message to our scheduling team."
      }
    ]
  }
};

export default function LocationPages({ locationKey, onNavigateBack }) {
  const data = LOCATION_DATA[locationKey] || LOCATION_DATA['noida'];

  useEffect(() => {
    // Dynamic SEO Metadata update
    document.title = data.title;
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', data.metaDesc);
    }
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', `https://thephysifit.com/${locationKey}`);
    }
    window.scrollTo(0, 0);
  }, [locationKey, data]);

  const scrollToAppointment = () => {
    if (onNavigateBack) onNavigateBack();
    setTimeout(() => {
      const element = document.querySelector('#appointment');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Navigation Top Bar */}
        <div className="flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateBack) onNavigateBack();
            }}
            className="inline-flex items-center space-x-2 text-sm font-semibold text-teal-700 hover:text-teal-900 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Main Page</span>
          </a>

          <a
            href="tel:7065411520"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl shadow-md transition-all"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call Now: 7065411520</span>
          </a>
        </div>

        {/* Hero Header Box */}
        <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-4 max-w-3xl relative z-10">
            <div className="inline-flex items-center space-x-2 bg-teal-900/80 text-teal-300 border border-teal-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>Location Coverage • {data.name}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              {data.h1}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {data.subheading}
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="tel:7065411520"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg flex items-center space-x-2 text-sm"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Now: 7065411520</span>
              </a>

              <button
                onClick={scrollToAppointment}
                className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg flex items-center space-x-2 text-sm"
              >
                <Home className="w-4 h-4" />
                <span>Book Home Visit (₹700)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Intro & Overview */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
            Doorstep Physiotherapy Care in {data.name}
          </h2>
          <p className="text-slate-600 leading-relaxed text-base">
            {data.intro}
          </p>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-xs sm:text-sm text-teal-900 flex items-center space-x-3">
            <ShieldCheck className="w-6 h-6 text-teal-600 shrink-0" />
            <span>
              <strong>Note:</strong> ThePhysiFit provides 100% home visit therapy. We do not operate a physical clinic in {data.name}, ensuring you get full 1-on-1 dedicated attention in your own home.
            </span>
          </div>
        </div>

        {/* Areas Served & Services Offered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Areas Covered */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center space-x-3 text-slate-900">
              <MapPin className="w-6 h-6 text-teal-600 shrink-0" />
              <h3 className="text-xl font-bold">Areas Covered in {data.name}</h3>
            </div>
            <ul className="space-y-3">
              {data.coverage.map((area, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-600 space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions & Treatments */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center space-x-3 text-slate-900">
              <Home className="w-6 h-6 text-teal-600 shrink-0" />
              <h3 className="text-xl font-bold">Services Provided in {data.name}</h3>
            </div>
            <ul className="space-y-3">
              {data.services.map((srv, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-600 space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{srv}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* How Home Visit Works */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">
            How Home Visits Work in {data.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700">
              <div className="text-teal-400 font-bold text-lg mb-1">Step 1</div>
              <h4 className="font-bold text-white mb-2">Book Your Visit</h4>
              <p className="text-xs text-slate-300">Call 7065411520 or fill our simple online request form.</p>
            </div>
            <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700">
              <div className="text-teal-400 font-bold text-lg mb-1">Step 2</div>
              <h4 className="font-bold text-white mb-2">Slot Confirmation</h4>
              <p className="text-xs text-slate-300">We confirm therapist availability and schedule a convenient time.</p>
            </div>
            <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700">
              <div className="text-teal-400 font-bold text-lg mb-1">Step 3</div>
              <h4 className="font-bold text-white mb-2">Therapy at Home</h4>
              <p className="text-xs text-slate-300">Certified therapist arrives at your home with equipment for your session.</p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 text-slate-900 border-b border-slate-100 pb-3">
            <HelpCircle className="w-6 h-6 text-teal-600 shrink-0" />
            <h2 className="text-2xl font-bold">Frequently Asked Questions — {data.name}</h2>
          </div>
          <div className="space-y-4">
            {data.faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200/70 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">Q: {faq.q}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Box */}
        <div className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white rounded-2xl p-8 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-bold">Need Home Physiotherapy in {data.name}?</h3>
          <p className="text-sm text-emerald-100 max-w-xl mx-auto">
            Book a doorstep session today for ₹700. Our certified physiotherapist will visit your residence at your preferred time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
            <a
              href="tel:7065411520"
              className="bg-white text-emerald-950 font-extrabold px-6 py-3 rounded-xl shadow hover:bg-emerald-50 transition-all text-sm flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 fill-emerald-950" />
              <span>Call Now: 7065411520</span>
            </a>
            
            <button
              onClick={scrollToAppointment}
              className="bg-slate-900 text-white font-bold px-6 py-3 rounded-xl shadow hover:bg-slate-800 transition-all text-sm flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Visit Online</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
