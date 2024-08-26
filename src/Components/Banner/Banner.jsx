import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='bg-[#1d231f30] '>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
              
                
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=' flex lg:flex-row flex-col-reverse mt-20  items-center'>
                        <div className='lg:w-2/3 w-4/5 lg:pl-10 mt-5 '>
                            <h1 className='lg:text-7xl text-5xl mb-5  font-Montserrat text-white font-bold'>
                                Discover Your Next Adventure
                                Unforgettable Destinations Await
                            </h1>
                            <p className='md:text-2xl  font-Montserrat'>
                                Embark on a Journey of Wonder: Explore Enchanting Destinations, Uncover Hidden Gems, and Create Unforgettable Memories Worldwide
                            </p>
                            <button className='flex pl-10 p-2 text-white mt-6 text-3xl font-medium items-center  rounded-full bg-[#63ab45]'>
                                Explore More
                                <img className='w-16 p-1 ' src="../../../public/play-button (2).png" alt="Play Button" />
                            </button>
                        </div>
                        <div className='lg:w-1/2 w-4/5'>
                            <img className='border-none rounded-2xl' src="../../../public/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand.jpg" alt="Backpacker at Sunrise Viewpoint" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' flex lg:flex-row flex-col-reverse mt-20  items-center'>
                        <div className='lg:w-2/3 w-4/5 lg:pl-10 mt-5 '>
                            <h1 className='lg:text-7xl text-5xl mb-5  font-Montserrat text-white font-bold'>
                                Discover Your Next Adventure
                                Unforgettable Destinations Await
                            </h1>
                            <p className='md:text-2xl  font-Montserrat'>
                                Embark on a Journey of Wonder: Explore Enchanting Destinations, Uncover Hidden Gems, and Create Unforgettable Memories Worldwide
                            </p>
                            <button className='flex p-2 pl-10 text-white mt-6 text-3xl font-medium items-center  rounded-full bg-[#63ab45]'>
                                Explore More
                                <img className='w-16 p-1 ' src="../../../public/play-button (2).png" alt="Play Button" />
                            </button>
                        </div>
                        <div className='lg:w-1/2 w-4/5'>
                            <img className='border-none rounded-2xl' src="../../../public/day-city-view.jpg" alt="Backpacker at Sunrise Viewpoint" />
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className=' flex lg:flex-row-reverse flex-col-reverse mt-20  items-center'>
                        <div className='lg:w-2/3 w-4/5 lg:pl-10 mt-5 '>
                            <h1 className='lg:text-7xl text-5xl mb-5  font-Montserrat text-white font-bold'>
                                Discover Your Next Adventure
                                Unforgettable Destinations Await
                            </h1>
                            <p className='md:text-2xl  font-Montserrat'>
                                Embark on a Journey of Wonder: Explore Enchanting Destinations, Uncover Hidden Gems, and Create Unforgettable Memories Worldwide
                            </p>
                            <button className='flex p-2 pl-10 text-white mt-6 text-3xl font-medium items-center  rounded-full bg-[#63ab45]'>
                                Explore More
                                <img className='w-16 p-1 ' src="../../../public/play-button (2).png" alt="Play Button" />
                            </button>
                        </div>
                        <div className='lg:w-1/2 w-4/5'>
                            <img className='border-none rounded-2xl' src="../../../public/woman-walking-big-entrance-gate-bali-indonesia.jpg" alt="Backpacker at Sunrise Viewpoint" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=' flex lg:flex-row flex-col-reverse mt-20  items-center'>
                        <div className='lg:w-2/3 w-4/5 lg:pl-10 mt-5 '>
                            <h1 className='lg:text-7xl text-5xl mb-5  font-Montserrat text-white font-bold'>
                                Discover Your Next Adventure
                                Unforgettable Destinations Await
                            </h1>
                            <p className='md:text-2xl  font-Montserrat'>
                                Embark on a Journey of Wonder: Explore Enchanting Destinations, Uncover Hidden Gems, and Create Unforgettable Memories Worldwide
                            </p>
                            <button className='flex p-2 pl-10 text-white mt-6 text-3xl font-medium items-center  rounded-full bg-[#63ab45]'>
                                Explore More
                                <img className='w-16 p-1 ' src="../../../public/play-button (2).png" alt="Play Button" />
                            </button>
                        </div>
                        <div className='lg:w-1/2 w-4/5'>
                            <img className='border-none rounded-2xl' src="../../../public/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand.jpg" alt="Backpacker at Sunrise Viewpoint" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' flex lg:flex-row-reverse flex-col-reverse mt-20  items-center'>
                        <div className='lg:w-2/3 w-4/5 lg:pl-10 mt-5 '>
                            <h1 className='lg:text-7xl text-5xl mb-5  font-Montserrat text-white font-bold'>
                                Discover Your Next Adventure
                                Unforgettable Destinations Await
                            </h1>
                            <p className='md:text-2xl  font-Montserrat'>
                                Embark on a Journey of Wonder: Explore Enchanting Destinations, Uncover Hidden Gems, and Create Unforgettable Memories Worldwide
                            </p>
                            <button className='flex p-2 pl-10 text-white mt-6 text-3xl font-medium items-center  rounded-full bg-[#63ab45]'>
                                Explore More
                                <img className='w-16 p-1 ' src="../../../public/play-button (2).png" alt="Play Button" />
                            </button>
                        </div>
                        <div className='lg:w-1/2 w-4/5'>
                            <img className='border-none rounded-2xl' src="../../../public/small-house-built-peaceful-green-hill-high-up-mountains.jpg" alt="Backpacker at Sunrise Viewpoint" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div >
    );
};

export default Banner;