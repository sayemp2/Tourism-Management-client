import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination } from 'swiper/modules';

const About = ({ countries }) => {


    return (
        <div className="mt-20">
            <div className="mx-auto text-center mb-8">
                <h3 className="lg:text-2xl mb-6 font-bold text-[#63ab45] font-Montserrat">About Company</h3>
                <h1 className="md:text-5xl mb-4 text-2xl font-bold text-white font-Montserrat">We Are Most Funning <br /> Company About Travel & Tours</h1>
                <p className="md:text-xl text-xs w-11/12 md:w-3/4 mx-auto font-Montserrat">We are the most fun travel and tours company, dedicated to providing exciting adventures, unforgettable experiences, and seamless journeys. Discover new destinations and create lasting memories with us. Your adventure starts here!</p>
            </div>


            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={10}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}

                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >


                {
                    countries.map(country => <SwiperSlide key={country._id}>
                        <button className='relative  '>
                            <img className='w-full rounded-3xl ' src={country.image} alt="Bangladesh" />
                            <div className='absolute rounded-3xl bottom-0 left-0 md:text-3xl text-xl lg:text-6xl h-full font-Montserrat font-bold w-full flex items-center justify-center text-center bg-black bg-opacity-50 text-white p-2'>
                                {country.country_Name}
                            </div>
                        </button>
                    </SwiperSlide>)
                }
                

            </Swiper>
        </div>
    );
};

export default About;