import React from 'react';
import PropertyCard from '../components/PropertyCard';
import FilterBar from '../components/FilterBar';

const Ads = () => {
    const properties = [
        { id: 1, type: 'Family', price: '2,500', beds: 3, baths: 2, title: 'Modern Family Retreat', img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800' },
        { id: 2, type: 'Bachelor', price: '1,200', beds: 1, baths: 1, title: 'Urban Bachelor Pad', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800' },
        { id: 3, type: 'Office', price: '4,000', beds: 0, baths: 2, title: 'High-Tech Office Space', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
        // ... add more as needed
    ];
    return (
            <>
            {/* Search & Filter Section */}
            <FilterBar />

            <main className="container mx-auto px-4 py-8 flex-grow">
                {/* Results Header */}
                <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-black text-gray-800">
                    Available <span className="text-orange-500">Listings</span>
                    <span className="ml-2 text-sm font-medium text-gray-400">(128 results)</span>
                </h1>
                <div className="hidden md:flex gap-2">
                    <button className="btn btn-sm btn-ghost border-gray-200">Newest First</button>
                    <button className="btn btn-sm btn-ghost border-gray-200">Price: Low to High</button>
                </div>
                </div>

                {/* Property Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {properties.map(item => (
                    <PropertyCard key={item.id} data={item} />
                ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-16 mb-10">
                <div className="join shadow-sm border border-orange-100">
                    <button className="join-item btn bg-white hover:bg-orange-50 border-none">«</button>
                    <button className="join-item btn bg-orange-500 text-white border-none">1</button>
                    <button className="join-item btn bg-white hover:bg-orange-50 border-none">2</button>
                    <button className="join-item btn bg-white hover:bg-orange-50 border-none">3</button>
                    <button className="join-item btn bg-white hover:bg-orange-50 border-none">»</button>
                </div>
                </div>
            </main>
        </>
    );
};

export default Ads;