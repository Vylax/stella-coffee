import React from 'react';
import Image from 'next/image'; // Import Next/Image

const InstagramFeed: React.FC = () => {
  // NOTE: This is a placeholder. Actual Instagram feed integration
  // usually requires using the Instagram Basic Display API (requires setup)
  // or a third-party widget/library (e.g., Elfsight, LightWidget).

  // Using available coffee images as placeholders
  const placeholderImages = [
    { id: 1, alt: 'Coffee cup', src: '/images/cofee.jpg' },
    { id: 2, alt: 'Cappuccino', src: '/images/coffe%202.jpg' },
    { id: 3, alt: 'Latte art', src: '/images/cofee%203.jpg' },
    { id: 4, alt: 'Coffee beans', src: '/images/cofees.jpg' },
    { id: 5, alt: 'Multiple coffee cups', src: '/images/many%20cofees.jpg' },
    { id: 6, alt: 'Another coffee cup', src: '/images/cofee.jpg' }, // Reusing image
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Latest on Instagram</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
        {placeholderImages.map((img) => (
          <div key={img.id} className="aspect-square bg-gray-200 rounded overflow-hidden relative"> {/* Added relative + overflow */}
             <Image
                src={img.src}
                alt={img.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <a
          href="#" // Replace with actual Instagram profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-brand-red font-medium hover:underline"
        >
          Follow us on Instagram
        </a>
      </div>
    </div>
  );
};

export default InstagramFeed; 