import React from 'react';
import { Link } from 'react-router';

const ListingCards = ({data}) => {
    return (
        <div className="card bg-white border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <figure className="relative h-56">
                <img src={data.images?.[0]?.image || "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800"} alt={data.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-gray-800 px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-white/50">
                {data.category.toUpperCase()}
                </div>
                <div className="absolute bottom-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-lg font-black text-lg">
                {data.rent}<span className="text-xs font-normal opacity-80">/{data.bill_time.toUpperCase()}</span>
                </div>
            </figure>
            
            <div className="card-body p-5">
                <h2 className="card-title text-lg font-bold text-gray-800 line-clamp-1">
                {data.title}
                </h2>
                <div className="flex gap-4 mt-3">
                <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <span className="bg-orange-50 p-1.5 rounded-md text-orange-600">🛏️</span>
                    {data.bedrooms} Beds
                </div>
                <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <span className="bg-orange-50 p-1.5 rounded-md text-orange-600">🚿</span>
                    {data.bathrooms} Baths
                </div>
                {/* <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <span className="bg-orange-50 p-1.5 rounded-md text-orange-600">🚿</span>
                    {data.balcony} Balcony
                </div> */}
                </div>
                <div className="card-actions justify-end mt-4 border-t border-gray-50 pt-4">
                <Link to={`/homeads/${data.id}`} className="btn btn-ghost btn-sm text-orange-600 font-bold hover:bg-orange-50">Details</Link>
                <button className="btn btn-sm bg-orange-500 hover:bg-orange-600 border-none text-white px-4">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ListingCards;