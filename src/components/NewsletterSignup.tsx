'use client';

import React, { useState } from 'react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Subscribing...');
    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    // --- Placeholder for newsletter signup logic --- 
    // Example: send email to Mailchimp, SendGrid, or your own API
    console.log('Newsletter Signup:', email);
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API call
    // --- End Placeholder ---

    setStatus('Thanks for subscribing!');
    setEmail('');

    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input
          type="email"
          name="email"
          id="newsletter-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm text-gray-900"
        />
        <button
          type="submit"
          className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-red hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red transition-colors disabled:opacity-50"
          disabled={status === 'Subscribing...'}
        >
          {status === 'Subscribing...' ? '...' : 'Subscribe'}
        </button>
      </form>
      {status && (
        <p className={`text-sm text-center mt-3 ${status.includes('Thanks') ? 'text-brand-cream' : 'text-red-200'}`}>
          {status}
        </p>
      )}
    </div>
  );
};

export default NewsletterSignup; 