import { useLoaderData } from 'react-router-dom';
import About from '../../Components/About/About';
import Banner from '../../Components/Banner/Banner';

const Home = () => {
    const countries = useLoaderData()
    return (
        <div className='bg-[#1d231f30] px-3'>
            <Banner></Banner>
            <About countries={countries} ></About>
        </div>
    );
};

export default Home;