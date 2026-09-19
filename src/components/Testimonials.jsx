import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/physioData';
import { Star, ChevronLeft, ChevronRight, Quote, Info } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 bg-slate-100 border border-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Info className="w-3.5 h-3.5 text-teal-600" />
            <span>Sample Patient Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Patient Stories & Feedback
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            See how home physiotherapy support helps patients across Noida, Delhi NCR, and Ghaziabad regain comfort.
          </p>
        </div>

        {/* Carousel / Card */}
        <div className="max-w-3xl mx-auto mt-12 relative">
          
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-lg relative min-h-[260px] flex flex-col justify-between">
            
            <Quote className="w-12 h-12 text-teal-500/20 absolute top-6 right-8 pointer-events-none" />

            <div>
              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-4 text-amber-400">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              <p className="text-base sm:text-lg text-slate-800 italic leading-relaxed mb-6">
                "{TESTIMONIALS[currentIndex].text}"
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200/80">
              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  {TESTIMONIALS[currentIndex].name}
                </h4>
                <div className="text-xs text-slate-500 space-x-2">
                  <span>{TESTIMONIALS[currentIndex].location}</span>
                  <span>•</span>
                  <span className="text-teal-700 font-semibold">{TESTIMONIALS[currentIndex].condition}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-full bg-white border border-slate-200 hover:bg-teal-50 hover:text-teal-700 transition-colors shadow-sm"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-full bg-white border border-slate-200 hover:bg-teal-50 hover:text-teal-700 transition-colors shadow-sm"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          <div className="text-center text-[11px] text-slate-400 mt-4 font-semibold uppercase tracking-wider">
            Sample Testimonials for Illustration Purposes
          </div>

        </div>

      </div>
    </section>
  );
}
