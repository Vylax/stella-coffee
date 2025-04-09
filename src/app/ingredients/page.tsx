import { Metadata } from 'next';
import Image from 'next/image'; // For potential ingredient images

export const metadata: Metadata = {
  title: "Our Ingredients | Bakery Bliss Café",
  description: "Learn about the high-quality, seasonal, and locally sourced ingredients we use in our coffee and pastries.",
};

// Simple data structure for ingredients (can be expanded)
const ingredientInfo = [
  {
    name: "Local Farm Eggs",
    description: "We source our eggs from nearby farms known for their ethical practices and high-quality produce.",
    image: "/images/placeholder-eggs.jpg", // Placeholder image path
    tags: ["Local", "Seasonal", "Core"],
  },
  {
    name: "Artisan Basque Flour",
    description: "A specific blend of flour imported for its unique properties, perfect for our signature pastries.",
    image: "/images/placeholder-flour.jpg",
    tags: ["Imported", "Specialty"],
  },
  {
    name: "Single-Origin Coffee Beans",
    description: "Rotating selection of ethically sourced single-origin beans, roasted locally to perfection.",
    image: "/images/cofees.jpg",
    tags: ["Coffee", "Local Roaster", "Ethical"],
  },
   {
    name: "Seasonal Fruits",
    description: "We incorporate fresh, seasonal fruits from local markets into our pastries and brunch items whenever possible.",
    image: "/images/placeholder-fruit.jpg",
    tags: ["Local", "Seasonal", "Fresh"],
  },
];

export default function IngredientsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-brand-green mb-8 text-center">Quality Ingredients</h1>

      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="text-lg text-brand-brown">
          We believe that exceptional taste starts with exceptional ingredients. We are committed to sourcing
          high-quality, fresh, and often local components for everything we create.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {ingredientInfo.map((ingredient) => (
          <div key={ingredient.name} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col">
            <div className="w-full h-48 bg-gray-200 rounded mb-4 relative overflow-hidden">
              {ingredient.image.includes('placeholder') ? (
                 <div className="w-full h-full flex items-center justify-center text-gray-800">
                   [Image: {ingredient.name}]
                 </div>
              ) : (
                 <Image
                   src={ingredient.image}
                   alt={ingredient.name}
                   layout="fill"
                   objectFit="cover"
                   className="transition-transform duration-300 hover:scale-105"
                 />
              )}
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{ingredient.name}</h2>
            <p className="text-brand-brown mb-3 flex-grow">{ingredient.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {ingredient.tags.map(tag => (
                <span key={tag} className={`text-xs px-2 py-1 rounded ${tag === 'Coffee' || tag === 'Ethical' || tag === 'Local Roaster' || tag === 'Seasonal' || tag === 'Fresh' || tag === 'Local' || tag === 'Core'
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800' // Default/other tags
                  }`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
} 