import React, { useState } from 'react';
import { CONDITIONS, SERVICES } from '../data/physioData';
import WhatsAppModal from './WhatsAppModal';
import { User, Phone, MapPin, Calendar, Clock, Activity, MessageSquare, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    gender: 'Male',
    address: '',
    area: '',
    city: 'Noida',
    pincode: '',
    condition: 'Back Pain',
    therapy: 'Orthopedic Physiotherapy',
    patientType: 'New Patient',
    preferredDate: '',
    preferredTime: 'Morning (9 AM - 12 PM)',
    symptoms: '',
    agreeConsent: false
  });

  const [errors, setErrors] = useState({});
  const [modalState, setModalState] = useState({
    isOpen: false,
    selectedNumber: '',
    whatsappUrl: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.address.trim()) newErrors.address = 'Complete home address is required';
    if (!formData.area.trim()) newErrors.area = 'Area / Locality is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
    if (!formData.preferredDate) newErrors.preferredDate = 'Preferred date is required';
    if (!formData.agreeConsent) newErrors.agreeConsent = 'You must agree to be contacted';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppMessage = () => {
    return `Hello ThePhysiFit Team,

I would like to request a home physiotherapy appointment.

PATIENT DETAILS
Name: ${formData.name}
Phone: ${formData.phone}
Age: ${formData.age}
Gender: ${formData.gender}

HOME VISIT DETAILS
Address: ${formData.address}
Area: ${formData.area}
City: ${formData.city}
Pincode: ${formData.pincode}

APPOINTMENT
Condition: ${formData.condition}
Therapy: ${formData.therapy}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}
Patient Status: ${formData.patientType}

SESSION FEE
₹700 per session

ADDITIONAL INFORMATION
${formData.symptoms.trim() ? formData.symptoms : 'None provided'}

Please confirm home visit availability and appointment details.

Thank you,
ThePhysiFit`;
  };

  const handleSubmitWhatsApp = (number) => {
    if (!validateForm()) {
      const firstErrorKey = Object.keys(errors)[0];
      const el = document.getElementById(`field-${firstErrorKey}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const rawMessage = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(rawMessage);
    const targetUrl = `https://wa.me/91${number}?text=${encodedMessage}`;

    setModalState({
      isOpen: true,
      selectedNumber: number,
      whatsappUrl: targetUrl
    });

    window.open(targetUrl, '_blank');
  };

  return (
    <section id="appointment" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-teal-50/40 to-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-teal-700 bg-teal-100 border border-teal-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Book Doorstep Physiotherapy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Schedule Your Home Visit
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Fill out your details below to prepare your home visit request via WhatsApp. Session fee is strictly <strong className="text-teal-700">₹700</strong> with no online payment needed.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xl relative">
          
          <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
            
            {/* Section 1: Patient Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 border-b border-slate-200 pb-2 text-teal-700 font-bold text-lg">
                <User className="w-5 h-5 text-teal-600" />
                <h3>1. Patient Details</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div id="field-name">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Kumar"
                    className={`w-full px-4 py-3 bg-slate-50 border ${errors.name ? 'border-rose-500' : 'border-slate-200'} rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all`}
                  />
                  {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                </div>

                {/* Phone Number */}
                <div id="field-phone">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 98100XXXXX"
                    className={`w-full px-4 py-3 bg-slate-50 border ${errors.phone ? 'border-rose-500' : 'border-slate-200'} rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all`}
                  />
                  {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                </div>

                {/* Age */}
                <div id="field-age">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Age <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="e.g. 45"
                    className={`w-full px-4 py-3 bg-slate-50 border ${errors.age ? 'border-rose-500' : 'border-slate-200'} rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all`}
                  />
                  {errors.age && <p className="text-xs text-rose-500 mt-1">{errors.age}</p>}
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Gender <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Section 2: Home Visit Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 border-b border-slate-200 pb-2 text-teal-700 font-bold text-lg">
                <MapPin className="w-5 h-5 text-teal-600" />
                <h3>2. Home Visit Details</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Complete Address */}
                <div className="sm:col-span-2" id="field-address">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Complete Home Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="House No, Floor, Building / Tower Name"
                    className={`w-full px-4 py-3 bg-slate-50 border ${errors.address ? 'border-rose-500' : 'border-slate-200'} rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all`}
                  />
                  {errors.address && <p className="text-xs text-rose-500 mt-1">{errors.address}</p>}
                </div>

                {/* Area / Locality */}
                <div id="field-area">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Area / Locality <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="e.g. Sector 62 / Indirapuram"
                    className={`w-full px-4 py-3 bg-slate-50 border ${errors.area ? 'border-rose-500' : 'border-slate-200'} rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all`}
                  />
                  {errors.area && <p className="text-xs text-rose-500 mt-1">{errors.area}</p>}
                </div>

                {/* City */}
                <div id="field-city">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    City <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
                  >
                    <option value="Noida">Noida</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Ghaziabad">Ghaziabad</option>
                    <option value="Greater Noida">Greater Noida</option>
                  </select>
                </div>

                {/* Pincode */}
                <div id="field-pincode">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Pincode <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="e.g. 201301"
                    className={`w-full px-4 py-3 bg-slate-50 border ${errors.pincode ? 'border-rose-500' : 'border-slate-200'} rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all`}
                  />
                  {errors.pincode && <p className="text-xs text-rose-500 mt-1">{errors.pincode}</p>}
                </div>

                {/* Preferred Date */}
                <div id="field-preferredDate">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 bg-slate-50 border ${errors.preferredDate ? 'border-rose-500' : 'border-slate-200'} rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all`}
                  />
                  {errors.preferredDate && <p className="text-xs text-rose-500 mt-1">{errors.preferredDate}</p>}
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Preferred Time Slot <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
                  >
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Section 3: Treatment Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 border-b border-slate-200 pb-2 text-teal-700 font-bold text-lg">
                <Activity className="w-5 h-5 text-teal-600" />
                <h3>3. Treatment & Health Info</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Select Condition */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Select Main Condition
                  </label>
                  <select
                    id="condition-select"
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
                  >
                    {CONDITIONS.map((cond) => (
                      <option key={cond.id} value={cond.name}>{cond.name}</option>
                    ))}
                    <option value="Other Condition">Other Condition</option>
                  </select>
                </div>

                {/* Select Therapy */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Select Preferred Therapy
                  </label>
                  <select
                    id="therapy-select"
                    name="therapy"
                    value={formData.therapy}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
                  >
                    {SERVICES.map((serv) => (
                      <option key={serv.id} value={serv.title}>{serv.title}</option>
                    ))}
                    <option value="General Home Assessment">General Home Assessment</option>
                  </select>
                </div>

                {/* Patient Status */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Patient Status
                  </label>
                  <select
                    name="patientType"
                    value={formData.patientType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
                  >
                    <option value="New Patient">New Patient (First Home Visit)</option>
                    <option value="Existing Patient">Existing Patient (Follow-up Session)</option>
                  </select>
                </div>

                {/* Symptoms / Notes */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Symptoms / Additional Information
                  </label>
                  <textarea
                    name="symptoms"
                    rows="3"
                    value={formData.symptoms}
                    onChange={handleChange}
                    placeholder="Describe pain areas, duration, past surgeries, or mobility difficulties..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
                  />
                </div>

              </div>
            </div>

            {/* Checkbox Consent */}
            <div id="field-agreeConsent" className="pt-2">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeConsent"
                  checked={formData.agreeConsent}
                  onChange={handleChange}
                  className="w-5 h-5 rounded text-teal-600 focus:ring-teal-500 border-slate-300 mt-0.5"
                />
                <span className="text-xs text-slate-600 leading-normal">
                  I agree to be contacted regarding my home appointment request by ThePhysiFit team via WhatsApp or Call. <span className="text-rose-500">*</span>
                </span>
              </label>
              {errors.agreeConsent && (
                <p className="text-xs text-rose-500 mt-1">{errors.agreeConsent}</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <div className="text-center text-xs text-slate-500 font-semibold mb-2">
                Click a WhatsApp number below to generate and send your pre-filled request:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleSubmitWhatsApp('9891050903')}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-emerald-600/20 flex items-center justify-center space-x-2 transition-all hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Continue on WhatsApp 9891050903</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSubmitWhatsApp('7065411520')}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-emerald-600/20 flex items-center justify-center space-x-2 transition-all hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Continue on WhatsApp 7065411520</span>
                </button>
              </div>

              <div className="text-center pt-2 text-[11px] text-slate-400">
                🔒 Privacy Guarantee: No data is saved to external servers or databases. Your info is only formatted directly into your personal WhatsApp message.
              </div>
            </div>

          </form>

        </div>

      </div>

      {/* Modal Prompt */}
      <WhatsAppModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))}
        selectedNumber={modalState.selectedNumber}
        whatsappUrl={modalState.whatsappUrl}
      />
    </section>
  );
}
