import React from 'react';

const FilterBar = () => {
  return (
    <div className="sticky top-[64px] z-40 bg-white/80 backdrop-blur-xl border-b border-orange-50 py-4 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center gap-4 lg:gap-6">
          
          {/* Category Filter */}
          <div className="form-control w-full md:w-auto min-w-[160px]">
            <label className="label py-1"><span className="label-text-alt font-bold text-gray-400 uppercase">Category</span></label>
            <select className="select select-bordered select-sm focus:outline-orange-500 border-orange-100 bg-orange-50/30">
              <option disabled selected>Pick Category</option>
              <option>Family</option>
              <option>Bachelor</option>
              <option>Sublet</option>
              <option>Office</option>
              <option>Hostel</option>
              <option>Shop</option>
            </select>
          </div>

          {/* Bedrooms Filter */}
          <div className="form-control w-[45%] md:w-auto">
            <label className="label py-1"><span className="label-text-alt font-bold text-gray-400 uppercase">Bedrooms</span></label>
            <select className="select select-bordered select-sm focus:outline-orange-500 border-orange-100 bg-orange-50/30">
              <option>Any</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>
          </div>

          {/* Bathrooms Filter */}
          <div className="form-control w-[45%] md:w-auto">
            <label className="label py-1"><span className="label-text-alt font-bold text-gray-400 uppercase">Bathrooms</span></label>
            <select className="select select-bordered select-sm focus:outline-orange-500 border-orange-100 bg-orange-50/30">
              <option>Any</option>
              <option>1</option>
              <option>2</option>
              <option>3+</option>
            </select>
          </div>

          {/* Apply Filter Button */}
          <div className="form-control w-full md:w-auto md:mt-6">
            <button className="btn btn-sm bg-orange-500 hover:bg-orange-600 border-none text-white px-8 shadow-md shadow-orange-100">
              Apply Filter
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FilterBar;