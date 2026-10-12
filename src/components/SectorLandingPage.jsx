import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, CheckCircle2, ShieldCheck, Home, 
  Calendar, HelpCircle, ChevronRight, Activity, HeartPulse, 
  Building, ArrowRight, Sparkles 
} from 'lucide-react';
import { SECTOR_PAGES_DATA } from '../data/sectorData';
import AppointmentForm from './AppointmentForm';

export default function SectorLandingPage({ sectorKey }) {
  const data = SECTOR_PAGES_DATA[sectorKey] || SECTOR_PAGES_DATA['sector-50'];
  const canonicalUrl = `https://thephysifit.com/${data.slug}/`;

  useEffect(() => {
    // Dynamic Meta Tags
    document.title = data.title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', data.metaDesc);
    }

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', canonicalUrl);
    }

    // Dynamic JSON-LD Structured Data
    const existingScript = document.getElementById('sector-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "MedicalBusiness"],
        "name": `ThePhysiFit - Home Physiotherapy ${data.sectorName}, Noida`,
        "image": "https://thephysifit.com/assets/hero_physio.jpg",
        "url": canonicalUrl,
        "telephone": "+917065411520",
        "priceRange": "₹700",
        "description": data.metaDesc,
        "medicalSpecialty": "Physiotherapy",
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": `${data.sectorName}, Noida`
          },
          {
            "@type": "City",
            "name": "Noida"
          }
        ],
        "offers": {
          "@type": "Offer",
          "name": `Home Visit Physiotherapy in ${data.sectorName}`,
          "price": "700",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://thephysifit.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations",
            "item": "https://thephysifit.com/locations/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `Physiotherapy in ${data.sectorName}, Noida`,
            "item": canonicalUrl
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ];

    const script = document.createElement('script');
    script.id = 'sector-structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    window.scrollTo(0, 0);

    return () => {
      const scriptToRemove = document.getElementById('sector-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [sectorKey, data, canonicalUrl]);

  const otherSectors = Object.entries(SECTOR_PAGES_DATA)
    .filter(([key]) => key !== sectorKey)
    .map(([, sec]) => sec);

  const treatmentLinks = [
    { name: 'Back Pain Physiotherapy', path: '/back-pain-physiotherapy/', desc: 'Sciatica, disc decompression & spine mobility' },
    { name: 'Neck Pain & Cervical Care', path: '/neck-pain-physiotherapy/', desc: 'Cervical spondylosis & desk posture relief' },
    { name: 'Knee Pain & Osteoarthritis', path: '/knee-pain-physiotherapy/', desc: 'Cartilage wear, joint stiffness & mobility' },
    { name: 'Post-Surgery Rehabilitation', path: '/post-surgery-rehabilitation/', desc: 'TKR, THR & orthopedic surgery recovery' },
    { name: 'Sports Injury Therapy', path: '/sports-injury-physiotherapy/', desc: 'Sprains, tears & return-to-sport drills' },
    { name: 'Elderly Mobility & Balance', path: '/elderly-mobility-physiotherapy/', desc: 'Fall prevention & gentle senior gait training' },
    { name: 'General Physiotherapy at Home', path: '/physiotherapy-at-home/', desc: 'Comprehensive doorstep physical therapy' }
  ];

  const scrollToAppointment = () => {
    const element = document.querySelector('#appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Breadcrumb Navigation & Top Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-sm">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-1.5 text-xs sm:text-sm text-slate-500 overflow-x-auto whitespace-nowrap py-1">
            <Link to="/" className="hover:text-teal-700 transition-colors flex items-center">
              <Home className="w-3.5 h-3.5 mr-1" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link to="/locations/" className="hover:text-teal-700 transition-colors">
              Locations
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-semibold text-slate-900 truncate">
              {data.sectorName}, Noida
            </span>
          </nav>

          <div className="flex items-center space-x-3 shrink-0">
            <a
              href="tel:7065411520"
              className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl shadow-sm transition-all"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call 7065411520</span>
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <header className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-5 max-w-3xl relative z-10">
            <div className="inline-flex items-center space-x-2 bg-teal-900/80 text-teal-300 border border-teal-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>Doorstep Physiotherapy • {data.sectorName}, Noida</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {data.h1}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {data.subheading}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="tel:7065411520"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg flex items-center space-x-2 text-sm transition-all hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Now: 7065411520</span>
              </a>

              <button
                onClick={scrollToAppointment}
                className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg flex items-center space-x-2 text-sm transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Home Visit (₹700)</span>
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>₹700 Flat Fee</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Travel Charges</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Certified Therapists</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Equipment Brought</span>
              </div>
            </div>
          </div>
        </header>

        {/* Sector Overview & Community Context */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Doorstep Healthcare in Your Neighborhood</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Home Physiotherapy Tailored for {data.sectorName}, Noida
            </h2>
          </div>

          <p className="text-slate-600 leading-relaxed text-base">
            {data.intro}
          </p>

          <p className="text-slate-600 leading-relaxed text-base">
            {data.communityContext}
          </p>

          <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-teal-900 flex items-start space-x-3.5">
            <ShieldCheck className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-teal-950 font-bold mb-1">
                Verified 100% Home Visit Model (No Clinic Commute):
              </strong>
              <span>
                ThePhysiFit operates exclusively as a home-visit physiotherapy service across {data.sectorName}. We do not ask patients to visit physical clinics, deal with parking, or wait in crowded waiting rooms. Our certified physiotherapist arrives directly at your flat or house with assessment tools, resistance bands, and therapy supplies.
              </span>
            </div>
          </div>
        </section>

        {/* Coverage: Societies & Local Residential Areas */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 text-slate-900 border-b border-slate-100 pb-3">
            <Building className="w-6 h-6 text-teal-600 shrink-0" />
            <div>
              <h2 className="text-2xl font-bold">Societies & Corridors Covered in {data.sectorName}</h2>
              <p className="text-xs sm:text-sm text-slate-500">Prompt doorstep visits to your apartment tower or gated community</p>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            Our physiotherapists regularly visit the following apartment societies, residential blocks, and surrounding corridors in and around {data.sectorName}, Noida:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
            {data.coverageSocieties.map((society, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 hover:bg-teal-50/60 p-3.5 rounded-xl border border-slate-200/80 transition-colors flex items-start space-x-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-800">{society}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Common Needs & Treatments */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 text-slate-900 border-b border-slate-100 pb-3">
            <HeartPulse className="w-6 h-6 text-teal-600 shrink-0" />
            <div>
              <h2 className="text-2xl font-bold">Conditions Treated at Home in {data.sectorName}</h2>
              <p className="text-xs sm:text-sm text-slate-500">Evidence-based rehabilitation customized to each patient</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {data.commonNeeds.map((need, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 p-5 rounded-2xl border border-slate-200/70 hover:border-teal-400 transition-all space-y-2"
              >
                <div className="flex items-center space-x-2 text-teal-800 font-bold text-base">
                  <Activity className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{need.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {need.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Explore Specific Treatment Modalities (Internal Links) */}
        <section className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Specialized Rehabilitation Programs</span>
            <h2 className="text-2xl font-bold text-white mt-1">Explore Treatment Services Available in {data.sectorName}</h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">Learn more about our dedicated clinical home therapy programs:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {treatmentLinks.map((tl, idx) => (
              <Link
                key={idx}
                to={tl.path}
                className="bg-slate-800/90 hover:bg-teal-950 p-4 rounded-xl border border-slate-700/80 hover:border-teal-500 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-teal-300 flex items-center justify-between mb-1">
                    <span>{tl.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-teal-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{tl.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How Home Visits Work */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="space-y-1 border-b border-slate-100 pb-3">
            <h2 className="text-2xl font-bold text-slate-900">
              How Home Visits Work in {data.sectorName}, Noida
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Convenient 3-step process designed for stress-free home rehabilitation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-sm">
                1
              </div>
              <h3 className="font-bold text-slate-900">Request Appointment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Call <a href="tel:7065411520" className="text-teal-700 font-bold underline">7065411520</a> or submit our online form with your apartment details and condition.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-sm">
                2
              </div>
              <h3 className="font-bold text-slate-900">Slot Confirmation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We coordinate a suitable morning or evening time slot based on your preferred schedule.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-sm">
                3
              </div>
              <h3 className="font-bold text-slate-900">Care at Your Home</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our certified physiotherapist arrives with required tools and conducts your 1-on-1 session in comfort.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 text-slate-900 border-b border-slate-100 pb-3">
            <HelpCircle className="w-6 h-6 text-teal-600 shrink-0" />
            <div>
              <h2 className="text-2xl font-bold">Frequently Asked Questions — {data.sectorName}, Noida</h2>
              <p className="text-xs sm:text-sm text-slate-500">Genuine answers about our home visit physiotherapy services</p>
            </div>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  Q: {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A: {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Other Sector Pages & Internal Links */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Other Noida Sectors We Serve</h2>
              <p className="text-xs text-slate-500">Explore home physiotherapy availability across Noida</p>
            </div>
            <Link
              to="/locations/"
              className="text-xs font-bold text-teal-700 hover:text-teal-900 underline flex items-center space-x-1"
            >
              <span>View All Locations</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {otherSectors.map((sec) => (
              <Link
                key={sec.slug}
                to={`/${sec.slug}/`}
                className="bg-slate-50 hover:bg-teal-50/80 p-3.5 rounded-xl border border-slate-200/70 text-xs font-semibold text-slate-800 hover:text-teal-900 transition-colors flex items-center space-x-2"
              >
                <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>{sec.sectorName}, Noida</span>
              </Link>
            ))}
            <Link
              to="/noida/"
              className="bg-slate-50 hover:bg-teal-50/80 p-3.5 rounded-xl border border-slate-200/70 text-xs font-semibold text-slate-800 hover:text-teal-900 transition-colors flex items-center space-x-2"
            >
              <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>All Noida Sectors</span>
            </Link>
          </div>
        </section>

        {/* Embedded Appointment Form */}
        <section id="appointment" className="scroll-mt-24">
          <div className="mb-4 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
              Direct Home Visit Booking
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Book Your Home Physiotherapy in {data.sectorName}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-1">
              Complete the form below to auto-format a WhatsApp appointment request directly to our team. ₹700 flat fee.
            </p>
          </div>
          <AppointmentForm defaultArea={`${data.sectorName}, Noida`} defaultCity="Noida" />
        </section>

        {/* Final Bottom Banner */}
        <aside className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white rounded-2xl p-8 text-center space-y-4 shadow-xl">
          <h2 className="text-2xl font-bold">Need Immediate Home Care in {data.sectorName}?</h2>
          <p className="text-sm text-emerald-100 max-w-xl mx-auto">
            Speak directly with our scheduling coordinator at ThePhysiFit. We verify therapist availability and schedule your home visit promptly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
            <a
              href="tel:7065411520"
              className="bg-white text-emerald-950 font-extrabold px-6 py-3 rounded-xl shadow hover:bg-emerald-50 transition-all text-sm flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 fill-emerald-950" />
              <span>Call 7065411520</span>
            </a>
            
            <button
              onClick={scrollToAppointment}
              className="bg-slate-900 text-white font-bold px-6 py-3 rounded-xl shadow hover:bg-slate-800 transition-all text-sm flex items-center space-x-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </button>
          </div>
        </aside>

      </div>
    </div>
  );
}
