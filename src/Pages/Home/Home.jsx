import { useLoaderData } from 'react-router-dom';
import About from '../../Components/About/About';
import Banner from '../../Components/Banner/Banner';
import NewsSection from '../../Components/newsSection/NewsSection';
import Service from '../../Components/service/Service';
import CountrySection from '../../Components/countrySection/CountrySection';
import SpotSection from '../../Components/spotSection/SpotSection';





const Home = () => {
    const { countries, spotlist } = useLoaderData();
    return (
        <div className={` px-3`}>
            <Banner></Banner>
            <CountrySection countries={countries}></CountrySection>
            <About></About>
            <SpotSection spotlist={spotlist}></SpotSection>
            <NewsSection></NewsSection>
            <Service></Service>
        </div>
    );
};

export default Home;