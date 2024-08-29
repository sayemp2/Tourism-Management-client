import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination } from 'swiper/modules';
const CountrySection = ({ countries }) => {
    return (
        <div>
            <div className="mt-20 ">
                <div className="mx-auto text-center mb-10">
                    <h3 className="lg:text-2xl mb-6 font-bold text-[#63ab45] font-Montserrat">Destination lists</h3>
                    <h1 className="md:text-5xl mb-4 text-2xl font-bold text-white font-Montserrat">Go Exotic Places</h1>
                    <p className="md:text-xl text-xs w-11/12 md:w-3/4 mx-auto font-Montserrat">Every country offers unique experiences: vibrant cultures, rich histories, stunning landscapes, exotic cuisines, diverse traditions, welcoming locals, modern cities, ancient wonders, and breathtaking natural beauty.</p>
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
                    className="mySwiper mb-14"
                >
                    {
                        countries.map(country =>
                            <SwiperSlide key={country._id}>
                                <button className='relative '>
                                    <img className='w-full rounded-3xl ' src={country.img} alt="Bangladesh" />
                                    <div className='absolute rounded-3xl bottom-0 left-0 md:text-3xl text-xl lg:text-6xl h-full font-Montserrat font-bold w-full flex items-center justify-center text-center bg-black bg-opacity-50 text-white p-2'>
                                        {country.country}
                                    </div>
                                </button>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );

}
export default CountrySection;