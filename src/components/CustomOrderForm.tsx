'use client';

import React, { useState } from 'react';

const CustomOrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Optional phone
    eventDate: '',
    numberOfPeople: '',
    orderType: '', // e.g., Cake, Pastries, Catering
    requests: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Submitting Request...');
    // Basic validation
    if (!formData.name || !formData.email || !formData.eventDate || !formData.numberOfPeople || !formData.orderType || !formData.requests) {
      setStatus('Please fill in all required fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    // --- Placeholder for submission logic (e.g., send to an API) ---
    console.log('Custom Order Request Submitted:', formData);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
    // --- End Placeholder ---

    setStatus('Quote request submitted successfully! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      numberOfPeople: '',
      orderType: '',
      requests: '',
    }); // Clear form

    setTimeout(() => setStatus(''), 7000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">Name *</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="input-field" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">Email *</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="input-field" />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-1">Phone (Optional)</label>
        <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="input-field" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-gray-800 mb-1">Event Date *</label>
          <input type="date" name="eventDate" id="eventDate" value={formData.eventDate} onChange={handleChange} required className="input-field" />
        </div>
        <div>
          <label htmlFor="numberOfPeople" className="block text-sm font-medium text-gray-800 mb-1">Number of People *</label>
          <input type="number" name="numberOfPeople" id="numberOfPeople" value={formData.numberOfPeople} onChange={handleChange} required min="1" className="input-field" />
        </div>
      </div>
       <div>
        <label htmlFor="orderType" className="block text-sm font-medium text-gray-800 mb-1">Type of Order *</label>
        <select name="orderType" id="orderType" value={formData.orderType} onChange={handleChange} required className="input-field">
          <option value="" disabled>Select order type...</option>
          <option value="Custom Cake">Custom Cake</option>
          <option value="Pastry Platter">Pastry Platter</option>
          <option value="Donut Box">Donut Box</option>
          <option value="Small Catering">Small Event Catering</option>
          <option value="Other">Other (Please specify below)</option>
        </select>
      </div>
      <div>
        <label htmlFor="requests" className="block text-sm font-medium text-gray-800 mb-1">Specific Requests / Details *</label>
        <textarea name="requests" id="requests" rows={5} value={formData.requests} onChange={handleChange} required className="input-field" placeholder="Tell us about the cake design, pastry selection, dietary needs, event theme, etc."></textarea>
      </div>
      <p className="text-xs text-gray-700">* Required field. Prices are not displayed here; this form is for generating a custom quote.</p>
      <div>
        <button type="submit" className="w-full btn-primary disabled:opacity-50" disabled={status === 'Submitting Request...'}>
          {status === 'Submitting Request...' ? 'Submitting...' : 'Request Quote'}
        </button>
      </div>
      {status && (
        <p className={`text-sm text-center mt-4 ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </p>
      )}
      {/* Simple utility classes for inputs - could be refactored */}
      <style jsx>{`
        .input-field {
          display: block;
          width: 100%;
          padding: 0.5rem 0.75rem;
          border: 1px solid #d1d5db; /* border-gray-300 */
          border-radius: 0.375rem; /* rounded-md */
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
          outline: none;
        }
        .input-field:focus {
          border-color: #004F19; /* brand-green */
          box-shadow: 0 0 0 2px rgba(0, 79, 25, 0.3); /* focus ring */
        }
        .btn-primary {
           display: flex;
           justify-content: center;
           padding: 0.75rem 1rem;
           border: 1px solid transparent;
           border-radius: 0.375rem; /* rounded-md */
           box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
           font-size: 0.875rem; /* text-sm */
           font-weight: 500; /* font-medium */
           color: white;
           background-color: #AC160E; /* brand-red */
           transition: background-color 0.15s ease-in-out;
        }
        .btn-primary:hover {
          background-color: rgba(172, 22, 14, 0.9);
        }
        .btn-primary:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(172, 22, 14, 0.4);
        }
      `}</style>
    </form>
  );
};

export default CustomOrderForm; 