import { Link } from "react-router";
const ListingCard = ({ price, title, location, beds, sqft }) => (
  <div className="group card bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300">
    <figure className="relative h-64 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" alt="House" className="group-hover:scale-110 transition-transform duration-500 object-cover w-full h-full" />
      <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-lg font-bold shadow-lg">
        ${price}<span className="text-xs font-normal opacity-80">/mo</span>
      </div>
    </figure>
    <div className="card-body p-6">
      <h2 className="card-title text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-400 flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-orange-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        {location}
      </p>
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-50 text-gray-500 text-sm">
        <span className="flex items-center gap-1 font-medium">{beds} Beds</span>
        <span className="flex items-center gap-1 font-medium">{sqft} sqft</span>
      </div>
    </div>
  </div>
);

const FeaturedListings = () => {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-black text-gray-800 mb-2">Popular Properties</h2>
          <p className="text-gray-500">Based on your recent activity</p>
        </div>
        <Link to="/homeads" className="btn btn-ghost text-orange-600 font-bold hidden md:flex">View All →</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ListingCard price="2,500" title="Modern Glass Villa" location="Beverly Hills, CA" beds="4" sqft="2,800" />
        <ListingCard price="1,800" title="Sun-drenched Studio" location="Brooklyn, NY" beds="1" sqft="950" />
        <ListingCard price="3,200" title="Lakeside Family Home" location="Austin, TX" beds="3" sqft="2,100" />
      </div>
    </section>
  );
};

export default FeaturedListings;