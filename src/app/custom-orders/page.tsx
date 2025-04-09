import CustomOrderForm from "@/components/CustomOrderForm";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Custom Orders | Bakery Bliss Café",
  description: "Request a quote for custom cakes, pastries, or catering for your special event.",
};

export default function CustomOrdersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-brand-green mb-8 text-center">Custom Orders</h1>

      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="text-lg text-brand-brown mb-4">
          Planning a special event? Let us create something unique for you! From custom cakes and pastry platters
          to small-scale catering, we're here to help make your occasion memorable.
        </p>
        <p className="text-brand-brown">
          Fill out the form below to tell us about your needs, and we'll get back to you with a personalized quote.
          Please note this form is for inquiries and quotes only; pricing will be provided upon review.
        </p>
      </div>

      {/* Placeholder for the custom order form */}
      <CustomOrderForm />
    </div>
  );
} 