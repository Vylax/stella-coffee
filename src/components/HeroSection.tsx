import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center bg-gray-400 text-white px-4"
      style={{
        // Set background image
        backgroundImage: `url(/images/many%20cofees.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Experience Basque Charm, American Style
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-brand-cream/90">
          Artisanal coffee, fresh pastries, and a warm welcome await.
        </p>
        <a
          href="/menu"
          className="inline-block bg-brand-red text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors"
        >
          Explore Our Menu
        </a>
        {/* Optional: Add subtle animation placeholder comment */}
        {/* Animation: Text fade-in on load? */} 
      </div>
      {/* Optional: Add comment for parallax/scroll effects */}
      {/* Feature: Add subtle parallax scroll effect to background? Requires library/custom CSS */} 
    </section>
  );
};

export default HeroSection; 