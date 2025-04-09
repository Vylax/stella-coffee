'use client'; // Needed for useState

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // For submission status

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    // Basic client-side validation placeholder
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    // --- Placeholder for actual form submission logic --- 
    // Example: using fetch to send data to an API route
    console.log('Form Data Submitted:', formData);
    // Replace with your API endpoint call
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
    // --- End Placeholder ---

    // Assume success for now
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' }); // Clear form

    // Hide status message after a few seconds
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm text-gray-900"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm text-gray-900"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm text-gray-900"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-red hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red transition-colors disabled:opacity-50"
          disabled={status === 'Sending...'}
        >
          {status === 'Sending...' ? 'Sending...' : 'Send Message'}
        </button>
      </div>
      {status && (
        <p className={`text-sm text-center ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm; 