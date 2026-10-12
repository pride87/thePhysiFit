import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Home, ChevronRight, CheckCircle2, 
  ShieldCheck, ArrowRight, Building, Calendar 
} from 'lucide-react';
import AppointmentForm from './AppointmentForm';
import { SECTOR_PAGES_DATA } from '../data/sectorData';

export default function LocationsDirectory() {
  const canonicalUrl = 'https://thephysifit.com/locations/';

  useEffect(() => {
    document.title = 'Locations & Service Areas | Home Physiotherapy in Noida, Greater Noida & Ghaziabad | ThePhysiFit';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore ThePhysiFit home physiotherapy coverage across Noida Sectors (50, 75, 93A, 104, 137), Greater Noida & Ghaziabad. Certified doorstep care for ₹700. Call 7065411520.');
    }

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', canonicalUrl);
    }

    const existingScript = document.getElementById('locations-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "MedicalBusiness"],
        "name": "ThePhysiFit - Home Physiotherapy Locations & Service Areas",
        "image": "https://thephysifit.com/assets/hero_physio.jpg",
        "url": canonicalUrl,
        "telephone": "+917065411520",
        "priceRange": "₹700",
        "description": "Certified home physiotherapy coverage across Noida Sectors 50, 75, 93A, 104, 137, Greater Noida, and Ghaziabad.",
        "medicalSpecialty": "Physiotherapy",
        "areaServed": [
          { "@type": "City", "name": "Noida" },
          { "@type": "City", "name": "Greater Noida" },
          { "@type": "City", "name": "Ghaziabad" }
        ],
        "offers": {
          "@type": "Offer",
          "name": "Doorstep Home Visit Physiotherapy Session",
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
            "item": canonicalUrl
          }
        ]
      }
    ];

    const script = document.createElement('script');
    script.id = 'locations-structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    window.scrollTo(0, 0);

    return () => {
      const scriptToRemove = document.getElementById('locations-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [canonicalUrl]);

  const sectors = Object.values(SECTOR_PAGES_DATA);

  const majorCities = [
    {
      name: 'Noida (All Sectors)',
      path: '/noida/',
      desc: 'Central Noida, Expressway, and surrounding sectors including 15, 18, 50, 62, 75, 76, 128, 137.',
      highlights: ['Sectors 15, 18, 50, 62', 'Expressway Sectors', 'Central Noida Hub']
    },
    {
      name: 'Greater Noida & Extension',
      path: '/greater-noida/',
      desc: 'Greater Noida West (Noida Extension), Alpha 1 & 2, Beta, Gamma, Omega, Delta, and Knowledge Park.',
      highlights: ['Gaur City & Extension', 'Alpha, Beta & Gamma', 'Pari Chowk & Beyond']
    },
    {
      name: 'Ghaziabad',
      path: '/ghaziabad/',
      desc: 'Doorstep therapy in Indirapuram, Vaishali, Vasundhara, Raj Nagar Extension & Crossings Republik.',
      highlights: ['Indirapuram Khand 1-4', 'Vaishali & Vasundhara', 'Raj Nagar Extension']
    },
    {
      name: 'Noida & Ghaziabad Combined',
      path: '/noida/ghaziabad/',
      desc: 'Full coverage guide across all border societies and twin-city residential corridors.',
      highlights: ['Twin-City Care', 'High-Rise Doorstep Visits', 'Flexible Time Slots']
    }
  ];

  const treatments = [
    { name: 'Physiotherapy at Home', path: '/physiotherapy-at-home/' },
    { name: 'Back Pain Physiotherapy', path: '/back-pain-physiotherapy/' },
    { name: 'Neck Pain & Cervical Care', path: '/neck-pain-physiotherapy/' },
    { name: 'Knee Pain & Osteoarthritis', path: '/knee-pain-physiotherapy/' },
    { name: 'Sports Injury Therapy', path: '/sports-injury-physiotherapy/' },
    { name: 'Post-Surgery Rehabilitation', path: '/post-surgery-rehabilitation/' },
    { name: 'Elderly Mobility & Balance', path: '/elderly-mobility-physiotherapy/' },
    { name: 'Home Visit Physiotherapy', path: '/home-visit-physiotherapy/' }
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
        
        {/* Breadcrumb Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-sm">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
            <Link to="/" className="hover:text-teal-700 transition-colors flex items-center">
              <Home className="w-3.5 h-3.5 mr-1" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-900">Service Locations Directory</span>
          </nav>

          <a
            href="tel:7065411520"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl shadow-sm transition-all"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Call 7065411520</span>
          </a>
        </div>

        {/* Directory Hero */}
        <header className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-4 max-w-3xl relative z-10">
            <div className="inline-flex items-center space-x-2 bg-teal-900/80 text-teal-300 border border-teal-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>Doorstep Healthcare Coverage Directory</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Home Physiotherapy Service Areas & Locations
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Find dedicated home physiotherapy visits across Noida, Greater Noida, and Ghaziabad. We bring certified therapists, assessment tools, and personalized rehabilitation programs right to your doorstep at a transparent ₹700 per session.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="tel:7065411520"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg flex items-center space-x-2 text-sm transition-all"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Now: 7065411520</span>
              </a>

              <button
                onClick={scrollToAppointment}
                className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg flex items-center space-x-2 text-sm transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Home Visit (₹700)</span>
              </button>
            </div>
          </div>
        </header>

        {/* 100% Home Visit Model Explanation */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex items-center space-x-3 text-slate-900">
            <ShieldCheck className="w-6 h-6 text-teal-600 shrink-0" />
            <h2 className="text-2xl font-bold">100% Doorstep Service — We Travel To You</h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            ThePhysiFit operates on a pure home-visit model. We do not have physical clinics where patients need to travel, sit in waiting areas, or search for parking. Instead, our qualified physiotherapists bring clinical assessments, therapeutic exercise equipment, and manual techniques directly to your home or apartment. Every session is 100% private and 1-on-1.
          </p>
        </section>

        {/* Featured Noida Sectors Section */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700 flex items-center space-x-1.5">
              <Building className="w-3.5 h-3.5" />
              <span>Noida Sector Pages</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              Dedicated Home Physiotherapy Pages by Noida Sector
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Select your sector to view local society coverage, common patient needs, and scheduling information:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sectors.map((sec) => (
              <div
                key={sec.slug}
                className="bg-slate-50 hover:bg-teal-50/40 p-6 rounded-2xl border border-slate-200/80 hover:border-teal-500/60 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-teal-700 bg-teal-100/80 px-2.5 py-0.5 rounded-md">
                      Noida Hub
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      ₹700 / session
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-900">
                    Physiotherapy in {sec.sectorName}, Noida
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {sec.subheading}
                  </p>
                  <div className="text-xs text-slate-500 pt-1">
                    <strong>Societies served:</strong> {sec.coverageSocieties.slice(0, 4).join(', ')}...
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                  <Link
                    to={`/${sec.slug}/`}
                    className="text-xs font-bold text-teal-700 group-hover:text-teal-900 flex items-center space-x-1"
                  >
                    <span>View {sec.sectorName} Page</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="tel:7065411520"
                    className="text-xs font-bold text-emerald-700 hover:underline flex items-center space-x-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call 7065411520</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Major Cities / Regions Section */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-2xl font-bold text-slate-900">
              City-Wide Coverage Areas
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Comprehensive city-level guides for Noida, Greater Noida, and Ghaziabad:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {majorCities.map((city, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-teal-500/60 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-teal-700">
                    <MapPin className="w-5 h-5 shrink-0" />
                    <h3 className="text-lg font-bold text-slate-900">{city.name}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {city.desc}
                  </p>
                  <div className="space-y-1 pt-1">
                    {city.highlights.map((h, i) => (
                      <div key={i} className="flex items-center text-xs text-slate-600 space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                  <Link
                    to={city.path}
                    className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center space-x-1"
                  >
                    <span>Explore {city.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href="tel:7065411520"
                    className="text-xs font-bold text-emerald-700 hover:underline flex items-center space-x-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>7065411520</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Treatment Links Directory */}
        <section className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Clinical Expertise</span>
            <h2 className="text-2xl font-bold text-white mt-1">Conditions We Treat at Home</h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Select any condition below to read our specialized home rehabilitation approach:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {treatments.map((t, idx) => (
              <Link
                key={idx}
                to={t.path}
                className="bg-slate-800/90 hover:bg-teal-950 p-3.5 rounded-xl border border-slate-700/80 hover:border-teal-500 transition-all text-xs font-semibold text-slate-200 hover:text-teal-300 flex items-center justify-between group"
              >
                <span>{t.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-teal-400 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        {/* Embedded Appointment Booking */}
        <section id="appointment" className="scroll-mt-24">
          <div className="mb-4 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
              Direct Home Visit Booking
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Book a Home Physiotherapy Visit
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-1">
              Submit your area and contact details to receive prompt WhatsApp confirmation. Flat ₹700 per session.
            </p>
          </div>
          <AppointmentForm defaultArea="Noida" defaultCity="Noida" />
        </section>

        {/* Bottom Contact Strip */}
        <aside className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white rounded-2xl p-8 text-center space-y-4 shadow-xl">
          <h2 className="text-2xl font-bold">Have Questions About Coverage in Your Locality?</h2>
          <p className="text-sm text-emerald-100 max-w-xl mx-auto">
            Our team is happy to confirm physiotherapist availability and time slots for your specific building or society.
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
