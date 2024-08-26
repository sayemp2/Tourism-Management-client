import { Link } from "react-router-dom";

const SpotCard = ({ touristSpot }) => {
    const { image, spot_Name, cost, visitors, time, season, _id } = touristSpot
    return (
        <div className="card bg-[#2b4b1d30] p-4 md:w-96 shadow-xl mx-auto">
            <div className="p-3 md:h-60">
                <img className="rounded-md" src={image} alt="" />
            </div>
            <div className="text-white font-Montserrat space-y-1">
                <h2 className="text-4xl  font-bold">{spot_Name}</h2>
                <hr className="border-[#63ab45]" />
                <div className="font-semibold ">
                    <p>Average Cost: {cost}</p>
                    <p>Total Visitors: {visitors}</p>
                    <p>Travel Time: {time}</p>
                    <p>Seasonality: {season}</p>
                </div>
                <Link to={`/alltouristspot/${_id}`}>
                    <button className="btn bg-[#4d8535] text-white border-none w-full">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default SpotCard;