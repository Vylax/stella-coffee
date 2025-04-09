import HeroSection from "@/components/HeroSection";
import InstagramFeed from "@/components/InstagramFeed";
import NewsletterSignup from "@/components/NewsletterSignup";
import TestimonialSlider from "@/components/TestimonialSlider";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bakery Bliss Café | Home",
  description: "Welcome to Bakery Bliss Café - Your cozy corner for artisanal coffee, fresh pastries, and Basque-inspired treats.",
};

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Intro Section */}
      <section className="py-16 px-4 bg-brand-cream">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-brand-green mb-4">Welcome to Bakery Bliss Café</h2>
          <p className="text-lg text-brand-brown mb-8">
            Discover a unique blend of Basque warmth and American chic. We're passionate about quality coffee, artisanal pastries, and creating a welcoming space for our community.
          </p>
          {/* Maybe add a button linking to About page */}
          <a href="/about" className="inline-block bg-brand-red text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors">
            Learn Our Story
          </a>
        </div>
      </section>

      {/* Key Offerings Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-brand-green mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Offering Card 1: Coffee */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200">
              {/* Placeholder for an icon or image */}
              <div className="text-4xl mb-4 text-brand-brown">☕️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Artisanal Coffee</h3>
              <p className="text-gray-700">Expertly brewed coffee using locally roasted, high-quality beans.</p>
            </div>
            {/* Offering Card 2: Pastries/Donuts */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200">
              <div className="text-4xl mb-4 text-brand-brown">🍩</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh Pastries</h3>
              <p className="text-gray-700">Daily baked goods, including our signature Basque-inspired donuts.</p>
            </div>
            {/* Offering Card 3: Brunch */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200">
              <div className="text-4xl mb-4 text-brand-brown">🍳</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Weekend Brunch</h3>
              <p className="text-gray-700">Join us for delicious and unique brunch options every weekend.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section Placeholder */}
      <section className="py-16 px-4 bg-brand-green/10">
         <div className="container mx-auto">
           <h2 className="text-3xl font-bold text-center text-brand-green mb-8">What Our Customers Say</h2>
           <TestimonialSlider />
         </div>
       </section>

      {/* Instagram Feed Placeholder */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-brand-green mb-8">Follow Our Journey @BakeryBlissCafe</h2>
          <InstagramFeed />
        </div>
      </section>

      {/* Newsletter Signup Placeholder */}
       <section className="py-16 px-4 bg-brand-brown">
         <div className="container mx-auto text-center">
           <h2 className="text-3xl font-bold text-white mb-4">Stay Updated!</h2>
           <p className="text-lg text-brand-cream mb-6">Sign up for news, events, and special offers.</p>
           <NewsletterSignup />
         </div>
       </section>
    </div>
  );
}
