import './Service.css'
const Service = () => {
    return (
        <div className='mb-4  '>
            <h1 className='font-Montserrat text-center md:text-5xl font-bold text-white'>Service What We Offer </h1>
            <div className='flex justify-evenly'>
                <div className='bg-[#292b29] rounded-2xl w-96  flex flex-col justify-start pt-20  px-10 pb-7'>
                    <div className="car-mask  h-28 mb-4 "></div>
                    <h1 className='font-bold  font-Noto text-3xl text-white pb-5 '>EXCLUSIVE TRIP</h1>
                    <p className='font-Noto font-medium pb-16'>Arrange various type of tour for our <br /> customers with Adventure</p>
                    <p className='learn font-Montserrat font-medium'>LEARN MORE</p>
                </div>
                <div className='bg-[#292b29] rounded-2xl w-96 flex flex-col justify-start pt-20  px-10 pb-7'>
                    <div className="document-mask  h-28 mb-4 "></div>
                    <h1 className='font-bold  font-Noto text-3xl text-white pb-5 '>LOTS OF CHOICES</h1>
                    <p className='font-Noto font-medium pb-16'>We arrange various types of tour and trip <br /> around the world</p>
                    <p className='learn font-Montserrat font-medium'>LEARN MORE</p>
                </div>
                <div className='bg-[#292b29] rounded-2xl w-96  flex flex-col justify-start pt-20  px-5 pb-7'>
                    <div className="travel-mask  h-28 mb-4 "></div>
                    <h1 className='font-bold  font-Noto text-3xl text-white pb-5 '>PROFESSIONAL GUIDE</h1>
                    <p className='font-Noto font-medium pb-16'>Our Professional guides are always ready to <br /> guide you professionally</p>
                    <p className='learn font-Montserrat font-medium'>LEARN MORE</p>
                </div>
            </div>
        </div>
    );
};

export default Service;