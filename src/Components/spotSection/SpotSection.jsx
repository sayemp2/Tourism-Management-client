import SpotCard from "../SpotCard/SpotCard";

const SpotSection = ({ spotlist }) => {
    return (
        <div>
             <div className="mx-auto text-center mb-5">
                <h3 className="lg:text-2xl mb-6 font-bold text-[#63ab45] font-Montserrat">Featured Places</h3>
                <h1 className="md:text-5xl mb-4 text-2xl font-bold text-white font-Montserrat">Most Popular Places</h1>
            </div>
            <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2">
                {spotlist.slice(0, 3).map((touristSpot) => (
                    <SpotCard key={touristSpot._id} touristSpot={touristSpot}></SpotCard>
                ))}
            </div>
        </div>
    );
};

export default SpotSection;
