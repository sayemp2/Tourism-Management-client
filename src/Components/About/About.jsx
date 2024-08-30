const About = () => {

    return (
        <div className="mt-20 mb-7">
            <div className="mx-auto text-center mb-8">
                <h3 className="lg:text-2xl mb-6 font-bold text-[#63ab45] font-Montserrat">About Us</h3>
                <h1 className="md:text-5xl mb-4 text-2xl font-bold text-white font-Montserrat">We Are Most Funning <br /> Company About Travel & Tours</h1>
                <p className="md:text-xl text-xs w-11/12 md:w-3/4 mx-auto font-Montserrat">We are the most fun travel and tours company, dedicated to providing exciting adventures, unforgettable experiences, and seamless journeys. Discover new destinations and create lasting memories with us. Your adventure starts here!</p>
            </div>
            <div className="flex items-center bg-[#1d231f] ">
                <div className="w-1/2"><img src="../../../public/small-house-built-peaceful-green-hill-high-up-mountains.jpg" alt="" /></div>
                <div className="w-1/2 p-5 border-l-2 border-[#63ab45]">
                    <h3 className="text-[#63ab45] mb-2 font-Montserrat text-2xl font-semibold">Our benefit lists</h3>
                    <h1 className="text-5xl font-Montserrat mb-5  text-white font-semibold">Why Choose SemWilds</h1>
                    <p className="font-Montserrat mb-10 w-11/12">Embark on a Journey of Wonder: Explore Enchanting Destinations, Uncover Hidden Gems, and Create Unforgettable Memories Worldwide Explore More</p>
                    <div>
                        <h3 className="font-Montserrat text-xl text-white font-medium">Professional and Certified</h3>
                        <p className="font-Montserrat">We are the most fun travel and tours company</p>
                    </div>
                    <div>
                        <h3 className="font-Montserrat text-xl text-white font-medium">Get Instant Tour Bookings</h3>
                        <p className="font-Montserrat">We are the most fun travel and tours company,</p>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default About;