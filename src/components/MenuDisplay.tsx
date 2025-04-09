'use client'; // Needed for useState

import React, { useState } from 'react';
import MenuItemCard, { MenuItem } from './MenuItemCard';

// Sample Menu Data Structure (Replace with actual data fetching/props)
const sampleMenuData = [
  {
    category: 'Coffee & Espresso',
    items: [
      { id: 'c1', name: 'Espresso', description: 'Rich and intense single shot.', price: '$3.00', imageUrl: '/images/cofee.jpg' },
      { id: 'c2', name: 'Cappuccino', description: 'Espresso with steamed milk and foam.', price: '$4.50', tags: ['Classic'], imageUrl: '/images/coffe%202.jpg' },
      { id: 'c3', name: 'Basque Latte', description: 'Our signature latte with a hint of caramelized sugar.', price: '$5.00', tags: ['Signature'], imageUrl: '/images/cofee%203.jpg' },
    ]
  },
  {
    category: 'Pastries & Donuts',
    items: [
      { id: 'p1', name: 'Burnt Basque Donut', description: 'Creamy custard filling, caramelized top.', price: '$4.00', tags: ['Signature', 'Popular'], imageUrl: '/images/placeholder-donut.jpg' },
      { id: 'p2', name: 'Croissant', description: 'Flaky, buttery, classic French pastry.', price: '$3.50' },
      { id: 'p3', name: 'Seasonal Fruit Tart', description: 'Sweet pastry crust filled with fresh seasonal fruit.', price: '$5.50', tags: ['Seasonal'] },
    ]
  },
  {
    category: 'Brunch (Weekends Only)',
    items: [
      { id: 'b1', name: 'Avocado Toast', description: 'Sourdough toast with smashed avocado, chili flakes, and a poached egg.', price: '$12.00', tags: ['Vegetarian'] },
      { id: 'b2', name: 'Basque Breakfast Burrito', description: 'Chorizo, eggs, potatoes, and cheese wrapped in a warm tortilla.', price: '$14.00' },
    ]
  }
];

const MenuDisplay: React.FC = () => {
  // Basic state for potential filtering (optional)
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', ...sampleMenuData.map(cat => cat.category)];

  const filteredMenu = filter === 'All'
    ? sampleMenuData
    : sampleMenuData.filter(cat => cat.category === filter);

  return (
    <div>
      {/* Optional: Category Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === category
                ? 'bg-brand-green text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Sections */}
      <div className="space-y-12">
        {filteredMenu.map((categoryData) => (
          <section key={categoryData.category}>
            <h2 className="text-3xl font-bold text-brand-red mb-6 text-center md:text-left">{categoryData.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryData.items.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default MenuDisplay; 