import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FAQ | Bakery Bliss Café",
  description: "Find answers to frequently asked questions about Bakery Bliss Café.",
};

// Sample FAQ data
const faqs = [
  {
    question: "Do you offer gluten-free options?",
    answer: "Yes! We have a selection of gluten-free pastries and can often accommodate dietary needs for custom orders. Please ask our staff for current offerings."
  },
  {
    question: "Is there Wi-Fi available?",
    answer: "Absolutely! We offer free Wi-Fi for all our customers. Feel free to settle in and work or browse while you enjoy your coffee."
  },
  {
    question: "Can I reserve a table?",
    answer: "We operate on a first-come, first-served basis for general seating. For larger groups or special events, please contact us directly to discuss arrangements."
  },
  {
    question: "Where do you source your coffee beans?",
    answer: "We partner with local roasters who ethically source high-quality beans from various regions. We often rotate our single-origin offerings, so be sure to ask about our current selection!"
  },
  {
    question: "Do you host private events?",
    answer: "Yes, we can host small private events or provide catering. Please visit our Custom Orders page or contact us to discuss your event needs."
  },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-brand-green mb-8 text-center">Frequently Asked Questions</h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <h2 className="text-xl font-semibold text-brand-red mb-2">{faq.question}</h2>
            <p className="text-brand-brown">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 