import { useLoaderData } from 'react-router-dom';
import About from '../../Components/About/About';
import Banner from '../../Components/Banner/Banner';
import NewsSection from '../../Components/newsSection/NewsSection';
import Service from '../../Components/service/Service';

const Home = () => {
    const countries = useLoaderData()
    return (
        <div className='bg-[#1d231f30] px-3'>
            <Banner></Banner>
            <About countries={countries} ></About>
            <NewsSection></NewsSection>
            <Service></Service>
        </div>
    );
};

export default Home;