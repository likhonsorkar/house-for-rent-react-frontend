import CTASection from "../components/CTASections";
import FeaturedListings from "../components/FeaturedListings";
import Hero from "../components/Hero";

const Home = () => {
    return (
    <main className="flex-grow">
        <Hero/>
        <FeaturedListings />
        <CTASection />
      </main>
    );
};

export default Home;