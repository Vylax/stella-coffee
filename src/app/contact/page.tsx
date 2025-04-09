import ContactForm from "@/components/ContactForm";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | Bakery Bliss Café",
  description: "Get in touch with Bakery Bliss Café. Find our address, hours, and contact form.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-brand-green mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Left Column: Contact Info & Map */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Visit Us</h2>
            <p className="text-lg text-brand-brown">123 Bakery Lane,</p>
            <p className="text-lg text-brand-brown">Urbanville, CA 90210</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Hours</h2>
            <p className="text-lg text-brand-brown">Mon - Fri: 7:00 AM - 6:00 PM</p>
            <p className="text-lg text-brand-brown">Sat - Sun: 8:00 AM - 5:00 PM</p>
            {/* Add note about holiday hours if needed */}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Call Us</h2>
            <p className="text-lg text-brand-brown">(555) 123-4567</p>
          </div>

          {/* Google Map Placeholder */}
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md flex items-center justify-center text-gray-700">
            [Google Map Embed Placeholder]
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
} 