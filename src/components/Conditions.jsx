import React, { useState } from 'react';
import { CONDITIONS } from '../data/physioData';
import { Search, Info, ArrowUpRight, Activity } from 'lucide-react';

export default function Conditions() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Spine', 'Joints', 'Rehab', 'Neuro', 'Muscles'];

  const filteredConditions = CONDITIONS.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const handleSelectCondition = (conditionName) => {
    const element = document.querySelector('#appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      const conditionSelect = document.getElementById('condition-select');
      if (conditionSelect) {
        conditionSelect.value = conditionName;
      }
    }
  };

  return (
    <section id="conditions" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-teal-700 bg-teal-50 border border-teal-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Rehabilitation Focus Areas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Conditions We Help With
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Our experienced home physiotherapists assess and manage a broad range of joint, spine, neuromuscular, and mobility conditions.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-10 max-w-4xl mx-auto space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search condition (e.g., Back Pain, Sciatica, Frozen Shoulder, Knee...)"
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all shadow-sm"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {filteredConditions.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-teal-500/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-extrabold text-teal-700 tracking-wider bg-teal-100/70 px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <Activity className="w-4 h-4 text-slate-400 group-hover:text-teal-600 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <button
                onClick={() => handleSelectCondition(item.name)}
                className="w-full pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-teal-700 hover:text-teal-900 transition-colors group/btn"
              >
                <span>Book Home Visit for {item.name}</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {filteredConditions.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            No conditions found matching your search. You can still select "Other Condition" in the appointment form!
          </div>
        )}

        {/* Disclaimer Callout */}
        <div className="mt-12 bg-amber-50/80 border border-amber-200/80 p-4 rounded-2xl flex items-start space-x-3 text-amber-900 text-xs sm:text-sm">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>Note on Medical Disclaimer:</strong> Educational information provided above is for general awareness. Treatment outcomes depend on individual medical history, condition severity, and clinical evaluation by a qualified physiotherapist.
          </p>
        </div>

      </div>
    </section>
  );
}
