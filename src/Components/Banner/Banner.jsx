import './Banner.css'
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {

    const handleType = ({count: number}) => {
        
    }


    const handleDone = () => {
        
    }

    return (
        <div className='bg-[#1d231f30] '>
            <div className="md:h-screen flex  justify-center p-4 items-center custom-bg">
                <div className='lg:w-2/3  w-4/5 lg:pl-10 mt-5  '>
                    <h1 className='lg:text-7xl text-2xl md:text-5xl mb-5 mx-auto  text-center font-Montserrat text-white font-bold'>
                        Discover Your Next { }
                        <span style={{ color: '#63ab45', fontWeight: 'bold' }}>
                            <Typewriter
                                words={['Adventure', 'Destination', 'Exploration', 'Trek']}
                                loop={Infinity}
                                cursor
                                cursorStyle=''
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                onLoopDone={handleDone}
                                onType={handleType}
                            />
                        </span>
                    </h1>
                    <p className='md:text-2xl text-xs text-center font-Montserrat'>
                        Embark on a Journey of Wonder: Explore Enchanting Destinations, Uncover Hidden Gems, and Create Unforgettable Memories Worldwide
                    </p>
                    <button className='flex p-2 pl-10 p mx-auto text-white mt-6 md:text-3xl text-xl font-medium items-center  rounded-full bg-[#63ab45]'>
                        Explore More
                        <img className='md:w-16 w-10 pl-2  ' src="../../../public/play-button (2).png" alt="Play Button" />
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Banner;