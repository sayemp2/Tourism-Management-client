import PopupalSpotCard from "../popularSpotCard/PopupalSpotCard";


const SpotSection = ({ spotlist }) => {
    return (
        <div>
             <div className="mx-auto text-center mb-5">
                <h3 className="lg:text-2xl mb-2 font-bold text-[#63ab45] font-Montserrat">Popular Tours</h3>
                <h1 className="md:text-5xl mb-6 text-2xl font-bold text-white font-Montserrat">Most Popular Places</h1>
            </div>
            <div className="grid lg:grid-cols-3 md:mx-6 md:grid-cols-2">
                {spotlist.slice(0, 3).map((touristSpot) => (
                    <PopupalSpotCard key={touristSpot._id} touristSpot={touristSpot}></PopupalSpotCard>
                ))}
            </div>
        </div>
    );
};

export default SpotSection;
