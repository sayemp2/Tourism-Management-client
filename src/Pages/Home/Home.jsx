import { useLoaderData } from 'react-router-dom';
import About from '../../Components/About/About';
import Banner from '../../Components/Banner/Banner';
import NewsSection from '../../Components/newsSection/NewsSection';
import Service from '../../Components/service/Service';
import CountrySection from '../../Components/countrySection/CountrySection';


const Home = () => {
    const countries = useLoaderData()
    return (
        <div className='bg-[#1d231f30] px-3'>
            <Banner></Banner>
            <CountrySection countries={countries}></CountrySection>
            <About  ></About>
            <NewsSection></NewsSection>
            <Service></Service>
        </div>
    );
};

export default Home;