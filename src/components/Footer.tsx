import React from 'react';
import Link from 'next/link';

// Placeholder for social icons (e.g., react-icons)
const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    {/* Simple Instagram icon path */} 
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.27.058 2.148.277 2.917.588.78.318 1.458.71 2.12 1.373s1.054 1.34 1.373 2.12c.31.77.53 1.647.588 2.917.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.27-.277 2.148-.588 2.917-.318.78-.71 1.458-1.373 2.12s-1.34 1.054-2.12 1.373c-.77.31-1.647.53-2.917.588-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.27-.058-2.148-.277-2.917-.588-.78-.318-1.458-.71-2.12-1.373s-1.054-1.34-1.373-2.12c-.31-.77-.53-1.647-.588-2.917-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.27.277-2.148.588-2.917.318-.78.71-1.458 1.373-2.12s1.34-1.054 2.12-1.373c.77-.31 1.647-.53 2.917-.588 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.356.06-2.325.296-3.15.62-1.003.4-1.87.94-2.7 1.77s-1.37 1.697-1.77 2.7c-.324.825-.56 1.794-.62 3.15C2.177 8.333 2.163 8.741 2.163 12s.014 3.667.072 4.947c.06 1.356.296 2.325.62 3.15.4 1.003.94 1.87 1.77 2.7s1.697 1.37 2.7 1.77c.825.324 1.794.56 3.15.62 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.356-.06 2.325-.296 3.15-.62 1.003-.4 1.87-.94 2.7-1.77s1.37-1.697 1.77-2.7c.324-.825.56-1.794.62-3.15.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.06-1.356-.296-2.325-.62-3.15-.4-1.003-.94-1.87-1.77-2.7s-1.697-1.37-2.7-1.77c-.825-.324-1.794-.56-3.15-.62-1.28-.058-1.688-.072-4.947-.072zm0 5.838a6 6 0 100 12 6 6 0 000-12zm0 9.838a3.838 3.838 0 110-7.676 3.838 3.838 0 010 7.676zm4.905-9.843a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green text-brand-cream p-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Brand & Copyright */}
        <div>
          <h3 className="text-xl font-bold mb-2">Bakery Bliss Café</h3>
          <p className="text-sm text-brand-cream/90 mb-4">
            Basque culture meets American aesthetic.
            <br />
            Your urban chic coffee escape.
          </p>
          <p className="text-xs text-gray-200">
            &copy; {new Date().getFullYear()} Bakery Bliss Café. All rights reserved.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/about" className="hover:text-red-300 transition-colors">About Us</Link></li>
            <li><Link href="/menu" className="hover:text-red-300 transition-colors">Menu</Link></li>
            <li><Link href="/custom-orders" className="hover:text-red-300 transition-colors">Custom Orders</Link></li>
            <li><Link href="/workshops-events" className="hover:text-red-300 transition-colors">Workshops</Link></li>
            <li><Link href="/contact" className="hover:text-red-300 transition-colors">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-red-300 transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact & Social */}
        <div>
          <h4 className="font-semibold mb-2">Get In Touch</h4>
          <p className="text-sm mb-1">123 Bakery Lane, Urbanville</p>
          <p className="text-sm mb-4">contact@bakerybliss.com</p>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-3">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-cream hover:text-brand-red transition-colors">
              <InstagramIcon />
            </a>
            {/* Add other social icons here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 