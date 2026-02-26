import { useEffect, useState } from "react";
import CTASection from "../components/CTASections";
import FeaturedListings from "../components/FeaturedListings";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import apiClient from "../services/api-client";

const Home = () => {
    const [properties, setProperties] = useState({
                    count: 0,
                    next: null,
                    previous: null,
                    results: []
                    });
    const [status, setStatus] = useState("wait");
    const query = async() => {
        try{
            const response = await apiClient.get("/ads/");
             setProperties(response.data);
             setStatus("success");
        }catch(error){
            setStatus("error");
        }
    }
    useEffect(()=>{
      const title = "House For Rent Homepage";
      document.title = title;
      query();
    }, [])
    return (
    <main className="flex-grow">
        <Hero/>
        {status == "wait" && (<div className='text-center m-2'><span className="loading loading-bars loading-xl text-orange-500"></span></div>)}
        {status == "success" && (<FeaturedListings properties={properties.results.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 6)} />)}
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <CTASection />
      </main>
    );
};

export default Home;