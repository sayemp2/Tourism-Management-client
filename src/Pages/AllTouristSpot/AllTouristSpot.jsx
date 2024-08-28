import { useLoaderData } from "react-router-dom";
import SpotCard from "../../Components/SpotCard/SpotCard";

const AllTouristSpot = () => {

    const touristSpots = useLoaderData()
  
    

    return (
        <div className="">

            <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2">
                {
                    touristSpots.map(touristSpot => 
                    <SpotCard key={touristSpot._id} touristSpot={touristSpot}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;