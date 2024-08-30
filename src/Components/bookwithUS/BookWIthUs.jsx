import { FaCheckCircle } from "react-icons/fa";
const BookWIthUs = () => {
    return (
        <div className="flex items-center">
            <div className="w-1/2">
                <img className="" src="../../../public/trip.png" alt="" />
            </div>
            <div className="w-1/2">
                <h1 className="font-Montserrat font-semibold md:text-5xl mb-12 text-white">Plan Your Trip with <br /> Trevily</h1>
                <p className="font-Montserrat text-xl mb-7 w-11/12">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.</p>
                <p className="flex items-center text-xl text-white mb-4"><FaCheckCircle className="text-[#63ab45] mr-4 text-[25px]" />Invest in your simply neighborhood</p>
                <p className="flex items-center text-xl text-white mb-4"><FaCheckCircle className="text-[#63ab45] mr-4 text-[25px]" />Support people in free text extreme need</p>
                <p className="flex items-center text-xl text-white mb-8"><FaCheckCircle className="text-[#63ab45] mr-4 text-[25px]" />Largest global industrial business community</p>

                <button className="bg-[#63ab45] px-10 rounded-lg transition-all duration-1000 font-semibold py-2 text-xl text-white hover:bg-black">BOOK  WITH  US</button>
            </div>
        </div>
    );
};

export default BookWIthUs;