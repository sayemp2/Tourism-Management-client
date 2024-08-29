import { useLoaderData } from "react-router-dom";
import SpotCard from "../../Components/SpotCard/SpotCard";
import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";

const AllTouristSpot = () => {

    const touristSpots = useLoaderData()
  
    

    return (
        <div className="">
            <Banner></Banner>
            <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2">
                {
                    touristSpots.map(touristSpot => 
                    <SpotCard key={touristSpot._id} touristSpot={touristSpot}></SpotCard>)
                }
            </div>
            <About></About>
        </div>
    );
};

export default AllTouristSpot;