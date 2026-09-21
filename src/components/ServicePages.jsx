import React, { useEffect } from 'react';
import { Phone, CheckCircle2, ShieldCheck, Home, ArrowLeft, Calendar, HelpCircle, Activity, HeartPulse } from 'lucide-react';

const SERVICE_DATA = {
  'physiotherapy-at-home': {
    slug: 'physiotherapy-at-home',
    title: 'Physiotherapy at Home in Noida, Greater Noida & Ghaziabad | ThePhysiFit',
    metaDesc: 'Professional physiotherapy at home in Noida, Greater Noida & Ghaziabad. Certified home physiotherapists for pain relief and rehabilitation. Call 7065411520.',
    h1: 'Physiotherapy at Home Services',
    subtitle: 'Expert physical therapy and rehabilitation delivered directly to your doorstep in Noida, Greater Noida & Ghaziabad.',
    content: 'Physiotherapy at home offers the convenience of receiving dedicated, one-on-one clinical rehabilitation care in your own residence. Whether you suffer from joint stiffness, back pain, or movement difficulties, our licensed physiotherapists bring exercise equipment and therapeutic modalities to your home.',
    benefits: [
      'Zero travel hassle & no waiting room delay',
      'One-on-one dedicated physical therapy attention',
      'Comfortable, familiar home surroundings',
      'Transparent flat fee of ₹700 per visit'
    ],
    faqs: [
      { q: 'How does physiotherapy at home work?', a: 'Our certified therapist arrives at your scheduled time, evaluates your posture, mobility, and pain points, and administers guided therapeutic exercises and manual techniques.' },
      { q: 'Which areas do you cover for home physiotherapy?', a: 'We serve Noida, Greater Noida, Ghaziabad, and neighboring Delhi NCR localities.' },
      { q: 'What is the phone number to book home physiotherapy?', a: 'Call or WhatsApp us directly at 7065411520 to reserve your preferred session time.' }
    ]
  },
  'back-pain-physiotherapy': {
    slug: 'back-pain-physiotherapy',
    title: 'Back Pain Physiotherapy at Home in Noida & Ghaziabad | ThePhysiFit',
    metaDesc: 'Targeted back pain physiotherapy at home in Noida, Greater Noida & Ghaziabad. Relief for lower back pain, disc strain & sciatica. Call 7065411520.',
    h1: 'Back Pain Physiotherapy at Home',
    subtitle: 'Specialized home rehabilitation for lower back strain, lumbar disc pressure, and sciatica relief.',
    content: 'Back pain can severely limit daily walking, sitting, and working. Our home-based back pain physiotherapy programs focus on gentle spinal mobilization, core muscle activation, posture correction, and decompression techniques to relieve nerve irritation and muscle spasms.',
    benefits: [
      'Targeted spinal mobilization and pain relief',
      'Core stability and abdominal strengthening',
      'Sciatica decompression exercises',
      'Ergonomic guidance for desk workers'
    ],
    faqs: [
      { q: 'Can I get back pain physiotherapy at home if I cannot walk properly?', a: 'Yes. Home visits are specifically designed for individuals experiencing severe back pain or sciatica who find travel difficult.' },
      { q: 'How many sessions are required for back pain relief?', a: 'Most patients notice improvement within 3 to 5 sessions, depending on whether the pain is acute or chronic.' },
      { q: 'How do I book back pain therapy in Noida or Greater Noida?', a: 'Call 7065411520 or complete our WhatsApp appointment request form.' }
    ]
  },
  'neck-pain-physiotherapy': {
    slug: 'neck-pain-physiotherapy',
    title: 'Neck Pain & Cervical Physiotherapy at Home | ThePhysiFit',
    metaDesc: 'Home visit physiotherapy for neck pain, cervical spondylosis & desk posture strain in Noida, Greater Noida & Ghaziabad. Call 7065411520.',
    h1: 'Neck Pain & Cervical Physiotherapy at Home',
    subtitle: 'Effective physical therapy for cervical tension, desk-job neck stiffness, and upper back discomfort.',
    content: 'Long computer hours and slouching frequently cause cervical strain, neck stiffness, and radiating arm pain. Our home visit physiotherapists evaluate upper body posture, perform soft tissue releases, and prescribe targeted cervical strengthening exercises to reduce nerve compression.',
    benefits: [
      'Release of trapezius and neck muscle tightness',
      'Cervical range-of-motion restoration',
      'Posture realignment and chin-tuck exercises',
      'Workstation ergonomic recommendations'
    ],
    faqs: [
      { q: 'Do you treat cervical spondylosis at home?', a: 'Yes, our physiotherapists provide targeted gentle mobilization, traction exercises, and postural retraining for cervical spondylosis.' },
      { q: 'Can neck pain cause headaches and arm numbness?', a: 'Yes, cervical nerve compression can radiate to shoulders and arms. Guided physiotherapy helps relieve this nerve strain.' },
      { q: 'What is the booking number for neck pain treatment?', a: 'Call 7065411520 to book your home visit in Noida, Greater Noida, or Ghaziabad.' }
    ]
  },
  'knee-pain-physiotherapy': {
    slug: 'knee-pain-physiotherapy',
    title: 'Knee Pain & Osteoarthritis Physiotherapy at Home | ThePhysiFit',
    metaDesc: 'Home physiotherapy for knee pain, arthritis stiffness & post-Knee Replacement recovery in Noida, Greater Noida & Ghaziabad. Call 7065411520.',
    h1: 'Knee Pain Physiotherapy at Home',
    subtitle: 'Customized knee rehabilitation for osteoarthritis, ligament strains, patellar pain, and stiffness.',
    content: 'Knee joint pain affects stair climbing, walking, and standing ease. ThePhysiFit brings specialized knee rehab to your home, focusing on quadriceps strengthening, patellar tracking, joint lubrication movement, and gait correction.',
    benefits: [
      'Quadriceps and hamstring strengthening',
      'Joint stiffness reduction and range expansion',
      'Gait retraining and stair climbing support',
      'Post-Total Knee Replacement (TKR) protocol'
    ],
    faqs: [
      { q: 'Is home physiotherapy effective for knee arthritis?', a: 'Yes. Strengthening surrounding leg muscles reduces load on the knee joint, significantly improving walking comfort.' },
      { q: 'Do you assist with post-total knee replacement (TKR) at home?', a: 'Yes, we provide step-by-step home rehabilitation following TKR surgery to restore full knee flexion and extension.' },
      { q: 'How can I schedule a home knee therapy session?', a: 'Call 7065411520 to book your session.' }
    ]
  },
  'sports-injury-physiotherapy': {
    slug: 'sports-injury-physiotherapy',
    title: 'Sports Injury Physiotherapy at Home | ThePhysiFit',
    metaDesc: 'Home sports injury rehab in Noida, Greater Noida & Ghaziabad. Ligament sprains, muscle tears & athletic recovery. Call 7065411520.',
    h1: 'Sports Injury Physiotherapy at Home',
    subtitle: 'Active rehabilitation for athletic injuries, sprains, strains, and return-to-sport mobility.',
    content: 'Athletic injuries require structured physical rehabilitation to rebuild ligament strength and prevent re-injury. We visit your home to administer targeted functional training, flexibility drills, and progressive resistance exercises.',
    benefits: [
      'ACL/MCL ligament rehab exercises',
      'Hamstring, calf & groin strain healing',
      'Agility & balance proprioception drills',
      'Progressive resistance loading'
    ],
    faqs: [
      { q: 'What types of sports injuries do you rehabilitate at home?', a: 'We treat ankle sprains, muscle tears, rotator cuff strains, tennis elbow, and post-ACL reconstruction.' },
      { q: 'How do I contact for athletic rehab in Ghaziabad or Noida?', a: 'Call 7065411520 or request a home visit via WhatsApp.' }
    ]
  },
  'post-surgery-rehabilitation': {
    slug: 'post-surgery-rehabilitation',
    title: 'Post-Surgery Rehabilitation at Home | ThePhysiFit',
    metaDesc: 'Supervised home post-surgery physio in Noida, Greater Noida & Ghaziabad for joint replacement & fracture recovery. Call 7065411520.',
    h1: 'Post-Surgery Rehabilitation at Home',
    subtitle: 'Safe, step-by-step physical rehabilitation at home following orthopedic or spinal surgery.',
    content: 'Immediate post-operative travel can be painful and risky. Our certified home visit physiotherapists guide you safely through surgeon-prescribed protocols for knee replacements, hip surgeries, fracture fixations, and disc procedures.',
    benefits: [
      'Early mobilization within surgeon guidelines',
      'Scar tissue mobilization & swelling reduction',
      'Walker-to-independent gait progression',
      'Confidence building and fall safety'
    ],
    faqs: [
      { q: 'When should post-surgery home physiotherapy start?', a: 'It usually starts within days after discharge, following surgeon approval.' },
      { q: 'How do I book post-op physio for my family member?', a: 'Call 7065411520 to set up a home appointment slot.' }
    ]
  },
  'elderly-mobility-physiotherapy': {
    slug: 'elderly-mobility-physiotherapy',
    title: 'Elderly & Geriatric Home Physiotherapy | ThePhysiFit',
    metaDesc: 'Gentle home physiotherapy for senior citizens in Noida, Greater Noida & Ghaziabad. Fall prevention & mobility enhancement. Call 7065411520.',
    h1: 'Elderly & Mobility Physiotherapy at Home',
    subtitle: 'Compassionate physical therapy designed to improve balance, prevent falls, and maintain senior independence.',
    content: 'Aging often brings joint stiffness, loss of balance, and muscle weakness. Our respectful, patient-centered elderly home physiotherapy helps senior citizens maintain their mobility, practice safe sit-to-stand transfers, and navigate their home safely.',
    benefits: [
      'Fall risk reduction & balance retraining',
      'Gentle joint stiffness relief',
      'Sit-to-stand and walking confidence',
      'Personalized home safety advice'
    ],
    faqs: [
      { q: 'Is home physio safe for elderly patients with osteoporosis or Parkinson’s?', a: 'Yes, our therapists adapt exercises to be gentle, low-impact, and tailored to senior safety.' },
      { q: 'What is the fee for senior citizen home visits?', a: 'The flat fee is ₹700 per session with no extra travel charges.' }
    ]
  },
  'home-visit-physiotherapy': {
    slug: 'home-visit-physiotherapy',
    title: 'Home Visit Physiotherapy in Noida, Greater Noida & Ghaziabad | ThePhysiFit',
    metaDesc: 'Book professional home visit physiotherapy sessions across Noida, Greater Noida and Ghaziabad. Call 7065411520 for doorstep therapy.',
    h1: 'Home Visit Physiotherapy Services',
    subtitle: 'Dedicated doorstep healthcare for acute pain, chronic conditions, and physical rehabilitation.',
    content: 'ThePhysiFit operates exclusively as a home visit physiotherapy provider across Noida, Greater Noida, and Ghaziabad. We bring complete physical therapy care directly to your residence so you get personalized treatment without leaving home.',
    benefits: [
      '100% Home Visit Model — No clinic travel required',
      'Serving Noida, Greater Noida & Ghaziabad',
      'Affordable flat rate of ₹700 per session',
      'Easy scheduling via phone 7065411520 or WhatsApp'
    ],
    faqs: [
      { q: 'Do you have a physical clinic location?', a: 'No. We operate 100% as a doorstep home visit service across Noida, Greater Noida, and Ghaziabad.' },
      { q: 'How do I book a home visit?', a: 'Call 7065411520 or fill out the booking form on our website.' }
    ]
  }
};

export default function ServicePages({ serviceKey, onNavigateBack }) {
  const data = SERVICE_DATA[serviceKey] || SERVICE_DATA['physiotherapy-at-home'];

  useEffect(() => {
    // Dynamic SEO Metadata update
    document.title = data.title;
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', data.metaDesc);
    }
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', `https://thephysifit.com/${serviceKey}`);
    }
    window.scrollTo(0, 0);
  }, [serviceKey, data]);

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
              <Activity className="w-3.5 h-3.5 text-teal-400" />
              <span>Specialized Home Service</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              {data.h1}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {data.subtitle}
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

        {/* Content Section */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
            About {data.h1}
          </h2>
          <p className="text-slate-600 leading-relaxed text-base">
            {data.content}
          </p>

          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200/80 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <HeartPulse className="w-5 h-5 text-teal-600" />
              <span>Key Benefits of This Home Therapy Program</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.benefits.map((b, i) => (
                <div key={i} className="flex items-center text-sm text-slate-700 space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location Availability Notice */}
        <div className="bg-teal-900 text-white rounded-2xl p-8 space-y-4">
          <h3 className="text-xl font-bold flex items-center space-x-2">
            <ShieldCheck className="w-6 h-6 text-teal-300" />
            <span>Available Across Noida, Greater Noida & Ghaziabad</span>
          </h3>
          <p className="text-sm text-teal-100 leading-relaxed">
            Our qualified physiotherapists provide {data.h1.toLowerCase()} across all sectors of Noida, Greater Noida West (Noida Extension), Indirapuram, Vaishali, Vasundhara, and Ghaziabad localities.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-semibold pt-2">
            <a href="/noida" className="bg-teal-950 px-3 py-1.5 rounded-lg border border-teal-700 hover:text-teal-300">Noida Home Therapy</a>
            <a href="/greater-noida" className="bg-teal-950 px-3 py-1.5 rounded-lg border border-teal-700 hover:text-teal-300">Greater Noida Home Therapy</a>
            <a href="/ghaziabad" className="bg-teal-950 px-3 py-1.5 rounded-lg border border-teal-700 hover:text-teal-300">Ghaziabad Home Therapy</a>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 text-slate-900 border-b border-slate-100 pb-3">
            <HelpCircle className="w-6 h-6 text-teal-600 shrink-0" />
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
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

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white rounded-2xl p-8 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-bold">Ready to Start Your Home Recovery?</h3>
          <p className="text-sm text-emerald-100 max-w-xl mx-auto">
            Book a home visit for {data.h1.toLowerCase()} in Noida, Greater Noida or Ghaziabad. Session fee is ₹700 with no hidden costs.
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
