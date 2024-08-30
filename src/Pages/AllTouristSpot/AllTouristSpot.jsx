import { useLoaderData } from "react-router-dom";
import SpotCard from "../../Components/SpotCard/SpotCard";
import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Loader from "../loader/Loader";

const AllTouristSpot = () => {

    const touristSpots = useLoaderData()
    const { loader } = useContext(AuthContext);



    return (
        <div className="">
            <Banner></Banner>

            <div className="grid relative gap-5 lg:grid-cols-3 md:grid-cols-2">
                <div className="absolute left-1/3 md:w-2/5">{loader && <Loader />}</div>
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