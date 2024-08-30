import { useLoaderData } from 'react-router-dom';
import About from '../../Components/About/About';
import Banner from '../../Components/Banner/Banner';
import NewsSection from '../../Components/newsSection/NewsSection';
import Service from '../../Components/service/Service';
import CountrySection from '../../Components/countrySection/CountrySection';
import SpotSection from '../../Components/spotSection/SpotSection';
import BookWIthUs from '../../Components/bookwithUS/BookWIthUs';





const Home = () => {
    const { countries, spotlist } = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <CountrySection countries={countries}></CountrySection>
            <BookWIthUs></BookWIthUs>
            <SpotSection spotlist={spotlist}></SpotSection>
            <About></About>
            <NewsSection></NewsSection>
            <Service></Service>
        </div>
    );
};

export default Home;