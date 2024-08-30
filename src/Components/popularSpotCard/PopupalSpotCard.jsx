import { MdLocationPin } from "react-icons/md";

const PopupalSpotCard = ({ touristSpot }) => {
    const { image, spot_Name, cost, country_Name, location, visitors, time} = touristSpot
    return (
        <div className="bg-[#1c311330] rounded-xl md:w-96 shadow-xl mx-auto">
            <div className="overflow-hidden rounded-t-xl ">
                <img className="duration-300 hover:scale-110" src={image} alt="" />
            </div>
            <div className="p-5 px-8 pb-11 mt-5">
                <p className="flex items-center font-Montserrat text-[14px] font-semibold"><MdLocationPin className="text-[#63ab45] text-xl"/>{location}</p>
                <h1 className="text-4xl text-white font-semibold font-Montserrat mt-1">{spot_Name}</h1>
                <p className="font-Montserrat font-medium mt-3"><span className="text-xl font-bold text-[#63ab45]">${cost}</span>/Per person</p>
                <div className="flex space-x-2 mt-5">
                    <p className="bg-[#ffffff41] px-3 font-Montserrat font-semibold duration-300 py-1 text-xs hover:text-[#63ab45] rounded-2xl">{time} DAYS</p>
                    <p className="bg-[#ffffff41] px-3 font-Montserrat font-semibold duration-300 py-1 text-xs hover:text-[#63ab45] rounded-2xl">{visitors}+</p>
                    <p className="bg-[#ffffff41] px-3 font-Montserrat font-semibold duration-300 py-1 text-xs hover:text-[#63ab45] rounded-2xl">{country_Name}</p>
                </div>
            </div>

        </div>
    );
};

export default PopupalSpotCard;