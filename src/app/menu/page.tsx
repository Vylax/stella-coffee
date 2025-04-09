import MenuDisplay from "@/components/MenuDisplay";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Menu | Bakery Bliss Café",
  description: "Explore our menu featuring artisanal coffee, Basque-inspired pastries, donuts, brunch, and more.",
};

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-brand-green mb-8 text-center">Our Menu</h1>

      <div className="text-center mb-8">
        <a
          href="/placeholder-menu.pdf" // Replace with actual PDF link
          download
          className="inline-block bg-brand-red text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
        >
          Download Full Menu (PDF)
        </a>
      </div>

      {/* Placeholder for the interactive menu component */}
      <MenuDisplay />
    </div>
  );
} 