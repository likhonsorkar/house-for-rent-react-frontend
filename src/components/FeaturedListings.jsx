import ListingCards from './ads/ListingCards';
import { Link } from 'react-router';
const FeaturedListings = ({properties}) => {
  return (
    <div className='container mx-auto px-4 py-12'>
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-black text-gray-800">Recent Properties</h2>
          <p className="text-gray-500">Discover the latest properties added to our collection.</p>
        </div>
        <Link to="/property" className="btn btn-ghost text-orange-600 font-bold hidden md:flex">
          View All →
        </Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {properties.map(item => (
            <ListingCards key={item.id} data={item}/>
        ))}
      </div>
    </div>
  );
};
export default FeaturedListings;