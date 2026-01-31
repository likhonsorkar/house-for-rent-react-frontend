const Hero = () => {
  return (
    <section className="relative py-16 lg:py-28 overflow-hidden bg-orange-50/50">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl -mr-20 -mt-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest mb-4">
            Easy way to find your dream home
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            Find the Perfect <span className="text-orange-500">Place</span> <br /> 
            to Call Home.
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-xl">
            Browse from over 5,000+ curated listings ranging from cozy city apartments to luxury suburban houses.
          </p>

          {/* Super Look Search Bar */}
          <div className="p-2 bg-white rounded-2xl md:rounded-full shadow-2xl border border-orange-100 flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 w-full px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
              <label className="text-[10px] uppercase font-bold text-gray-400 block ml-1">Location</label>
              <input type="text" placeholder="Where are you going?" className="bg-transparent w-full focus:outline-none text-gray-700 font-medium" />
            </div>
            <div className="flex-1 w-full px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
              <label className="text-[10px] uppercase font-bold text-gray-400 block ml-1">Property Type</label>
              <select className="bg-transparent w-full focus:outline-none text-gray-700 font-medium appearance-none cursor-pointer">
                <option>All Types</option>
                <option>House</option>
                <option>Apartment</option>
              </select>
            </div>
            <button className="btn bg-orange-500 hover:bg-orange-600 border-none text-white rounded-xl md:rounded-full w-full md:w-auto px-10 h-14 md:h-12 shadow-lg shadow-orange-200">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;