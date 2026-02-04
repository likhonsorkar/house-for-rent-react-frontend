import React from 'react';
import ListingCards from './ads/ListingCards';
import { Link } from 'react-router';

const FeaturedListings = ({properties}) => {
  console.log(properties);
  return (
    <div className='container mx-auto'>
      <div class="flex justify-between items-end mb-12"><div><h2 class="text-3xl font-black text-gray-800 mb-2">Recent Properties</h2><p class="text-gray-500">Based on your recent activity</p></div><Link class="btn btn-ghost text-orange-600 font-bold hidden md:flex" to="/property" data-discover="true">View All →</Link></div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {properties.map(item => (
            <ListingCards key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedListings;