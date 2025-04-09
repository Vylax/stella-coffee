'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/menu', label: 'Menu' },
    { href: '/custom-orders', label: 'Custom Orders' },
    { href: '/workshops-events', label: 'Workshops & Events' },
    { href: '/ingredients', label: 'Ingredients' }, // Added Ingredients link
    { href: '/faq', label: 'FAQ' }, // Added FAQ link
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${isSticky ? 'fixed top-0 shadow-md bg-brand-cream/95 backdrop-blur-sm' : 'relative bg-brand-cream'
        }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Placeholder */}
        <Link href="/" className="text-2xl font-bold text-brand-green">
          Bakery Bliss Café
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-brand-brown hover:text-brand-red transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-brand-brown focus:outline-none"
          >
            {/* Simple Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-cream shadow-lg absolute top-full left-0 right-0">
          <div className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="py-2 text-brand-brown hover:text-brand-red transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 