const PopupalSpotCard = ({ touristSpot }) => {
    const { image, spot_Name, cost, location, visitors, time} = touristSpot
    return (
        <div className="bg-[#2b4b1d30] p-4 md:w-96 shadow-xl mx-auto">
            <div className="overflow-hidden ">
                <img className="duration-300 hover:scale-110" src={image} alt="" />
            </div>
            <div>
                <h1 className="text-4xl text-white font-semibold font-Montserrat">{spot_Name}</h1>
                <p className="font-Montserrat font-medium"><span className="text-xl font-bold text-[#63ab45]">${cost}</span>/Per person</p>
                <div className="flex">
                    <p>{time}DAYS</p>
                    <p>{visitors}+</p>
                    <p>{location}</p>
                </div>
            </div>

        </div>
    );
};

export default PopupalSpotCard;