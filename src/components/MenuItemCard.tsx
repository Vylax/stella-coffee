import React from 'react';
import Image from 'next/image';

export interface MenuItem {
  id: number | string;
  name: string;
  description: string;
  price: string; // Keep as string for flexible formatting
  imageUrl?: string; // Optional image URL
  tags?: string[]; // e.g., ['Vegan', 'Gluten-Free', 'New']
}

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col h-full">
      {/* Image Placeholder */}
      {item.imageUrl ? (
        <div className="w-full h-48 relative">
          {/* Use Next/Image component */}
           <Image src={item.imageUrl} alt={item.name} layout="fill" objectFit="cover" className="transition-transform duration-300 hover:scale-105" />
          {/* Fallback placeholder removed */}
        </div>
      ) : (
         <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-800">[Image Placeholder]</div>
      )}

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.name}</h3>
        <p className="text-gray-700 text-sm mb-3 flex-grow">{item.description}</p>

        {item.tags && item.tags.length > 0 && (
           <div className="flex flex-wrap gap-1 mb-3">
             {item.tags.map(tag => (
               <span key={tag} className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
                 {tag}
               </span>
             ))}
           </div>
        )}

        <p className="text-lg font-bold text-gray-900 mt-auto">{item.price}</p>
      </div>
    </div>
  );
};

export default MenuItemCard; 