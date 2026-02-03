import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { useParams } from 'react-router';

const AdsDetails = () => {
    const {id} = useParams();
    const [properties, setProperties] = useState();
    const [images, setImages] = useState();
    const [reviews, setReviews] = useState();
    const property = {
            id: 1,
            title: "Family Apartment DHAKA MIRPUR",
            description: "Experience modern living in this spacious 3-bedroom family apartment located in the heart of Mirpur, Dhaka. This property offers excellent ventilation with 2 balconies, premium fittings, and a secure environment perfect for families. Close to schools, hospitals, and shopping malls.",
            category: "family",
            rent: 5000,
            bill_time: "monthly",
            advance: 2000,
            bedrooms: 3,
            bathrooms: 2,
            balcony: 2,
            area: "Dhaka",
            address: "Mirpur, Dhaka, Bangladesh",
            available_from: "2026-01-31",
            contact_phone: "880181129",
            contact_email: "contact@likhon.com.bd",
        };
      useEffect(()=>{
        const data = async() =>{
            const response = await apiClient.get(`/ads/${id}/`);
            setProperties(response.data);
            const responseimages = await apiClient.get(`/ads/${id}/images`);
            setImages(responseimages.data);
            console.log(responseimages.data);
        }
        data();
      }, [])
    return (
      <main className="container mx-auto px-4 py-8">
        {/* 1. Image Gallery - Super Look Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[300px] md:h-[500px] mb-8">
          <div className="md:col-span-2 h-full rounded-2xl overflow-hidden shadow-lg border border-orange-50">
            <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Main" />
          </div>
          <div className="hidden md:grid grid-rows-2 gap-4 md:col-span-1 h-full">
            <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=500" className="w-full h-full object-cover rounded-2xl border border-orange-50" alt="Kitchen" />
            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=500" className="w-full h-full object-cover rounded-2xl border border-orange-50" alt="Bedroom" />
          </div>
          <div className="hidden md:block md:col-span-1 h-full rounded-2xl overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=500" className="w-full h-full object-cover border border-orange-50" alt="View" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/50 transition-all">
              <span className="text-white font-bold text-lg">+12 Photos</span>
            </div>
          </div>
        </div>

        {/* 2. Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT: Details (2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="badge badge-lg bg-orange-100 text-orange-600 border-none font-bold px-4 py-3 uppercase tracking-wider text-xs">{property.category}</span>
                <span className="text-sm font-medium text-gray-400">Published on Jan 09, 2026</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-gray-800 leading-tight">{property.title}</h1>
              <p className="flex items-center gap-2 text-gray-500 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {property.address}
              </p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-orange-50/50 rounded-3xl border border-orange-100">
              <div className="text-center">
                <span className="block text-2xl mb-1">🛏️</span>
                <span className="block text-gray-800 font-bold">{property.bedrooms} Bedrooms</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl mb-1">🚿</span>
                <span className="block text-gray-800 font-bold">{property.bathrooms} Bathrooms</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl mb-1">🌅</span>
                <span className="block text-gray-800 font-bold">{property.balcony} Balcony</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl mb-1">🗓️</span>
                <span className="block text-gray-800 font-bold">From {new Date(property.available_from).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">Description</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {property.description}
              </p>
            </div>
          </div>

          {/* RIGHT: Sticky Booking Card (1/3 width) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-8 bg-white rounded-[2.5rem] border border-orange-100 shadow-[0_20px_60px_-15px_rgba(255,165,0,0.1)]">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">Rent Price</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-orange-600">৳{property.rent}</span>
                    <span className="text-gray-500 font-medium">/{property.bill_time}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-3 border-b border-gray-50">
                  <span className="text-gray-500 font-medium">Advance Payment</span>
                  <span className="text-gray-800 font-bold">৳{property.advance}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-50">
                  <span className="text-gray-500 font-medium">Electricity Bill</span>
                  <span className="text-gray-800 font-bold">Not included</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="btn btn-lg bg-orange-500 hover:bg-orange-600 border-none text-white w-full rounded-2xl shadow-xl shadow-orange-100">
                  Book This House
                </button>
                <div className="flex gap-2">
                  <a href={`tel:${property.contact_phone}`} className="btn btn-outline border-orange-200 text-orange-600 flex-1 rounded-xl">
                    Call
                  </a>
                  <a href={`mailto:${property.contact_email}`} className="btn btn-outline border-orange-200 text-orange-600 flex-1 rounded-xl">
                    Email
                  </a>
                </div>
              </div>

              <p className="text-center text-[10px] text-gray-400 mt-6 uppercase tracking-widest font-bold">
                Owner ID: #{property.owner} • Certified Listing
              </p>
            </div>
          </div>

        </div>
      </main>
    );
};

export default AdsDetails;