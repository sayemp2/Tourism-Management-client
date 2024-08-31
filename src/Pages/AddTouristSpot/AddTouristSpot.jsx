import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import About from "../../Components/About/About";
import Loader from "../loader/Loader";
import Swal from 'sweetalert2'

const AddTouristSpot = () => {
    const { user } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const { loader, setLoader } = useContext(AuthContext);

    const addSpot = async (event) => {

        if (!user || !user.email) {
            setError('User is not authenticated.');
            return;
        }

        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const spot_Name = form.touristSpot.value;
        const country_Name = form.countryName.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const season = form.season.value;
        const time = form.time.value;
        const visitors = form.visitors.value;
        const name = form.name.value;
        const email = user.email;
        const spotData = { image, spot_Name, country_Name, location, description, cost, season, time, visitors, name, email };

        try {
            const response = await fetch('https://tourism-management-server-brown.vercel.app/spotlist', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(spotData)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            Swal.fire({
                title: 'Success',
                text: 'Added New Place Successfully',
                icon: 'success',
            })
           
            form.reset();  
        } catch (error) {
            setLoader(false)
            console.error('Error:', error);
            setError('An error occurred while adding the tourist spot.');
        }
    }

    return (
        <div>
            <div className="bg-[#e9f2ff] relative flex lg:flex-row flex-col lg:items-center">
            <div className="absolute left-1/3 md:w-2/5">{loader&& <Loader />}</div>
                <div className="lg:w-1/2 p-4 lg:pl-7 animate-slideInLeft">
                    <form onSubmit={addSpot} className="space-y-3 bg-teal-500 p-11 rounded-2xl">
                        {error && <p className="text-red-500">{error}</p>}
                        <div>
                            <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="image">Image Url</label><br />
                            <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Enter the photo url" type="text" name="image" id="image" required />
                        </div>
                        <div className="flex md:flex-row flex-col md:space-x-3">
                            <div className="md:w-1/2">
                                <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="touristSpot">Tourist Spot Name</label><br />
                                <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Type Place Name" type="text" name="touristSpot" id="touristSpot" required />
                            </div>
                            <div className="md:w-1/2">
                                <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="countryName">Country Name</label><br />
                                <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Type Country Name" type="text" name="countryName" id="countryName" required />
                            </div>
                        </div>
                        <div>
                            <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="location">Location</label>
                            <input className="input font-Montserrat text-xl w-full mb-5 text-black bg-white" placeholder="Type place Location" type="text" name="location" id="location" required />
                        </div>
                        <div>
                            <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="description">Short Description</label><br />
                            <textarea className="input font-Montserrat text-xl w-full h-24 text-black bg-white" placeholder="Type Description" name="description" id="description" required></textarea>
                        </div>
                        <div className="flex md:flex-row flex-col md:space-x-3">
                            <div className="md:w-1/2">
                                <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="cost">Average Cost</label><br />
                                <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Type Average Cost" type="text" name="cost" id="cost" required />
                            </div>
                            <div className="md:w-1/2">
                                <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="season">Seasonality</label><br />
                                <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Type Seasonality" type="text" name="season" id="season" required />
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col md:space-x-3">
                            <div className="md:w-1/2">
                                <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="time">Travel Time</label><br />
                                <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Type Travel Time" type="text" name="time" id="time" required />
                            </div>
                            <div className="md:w-1/2">
                                <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="visitors">Total Visitors</label><br />
                                <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Type Total Visitors" type="text" name="visitors" id="visitors" required />
                            </div>
                        </div>
                        <div>
                            <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="name">Email</label>
                            <input className="input font-Montserrat text-xl w-full m text-black bg-white" placeholder="Type your Email" type="text" name="Email" id="email" required />
                        </div>
                        <div>
                            <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="name">User Name</label>
                            <input className="input font-Montserrat text-xl w-full mb-5 text-black bg-white" placeholder="Type your name" type="text" name="name" id="name" required />
                        </div>
                        <input className="btn font-Montserrat text-xl font-bold w-full " type="submit" value="Submit" />
                    </form>
                </div>
                <div className="lg:w-1/2 animate-slideInRight">
                    <img src="../../../public/bg.jpg" alt="Background" />
                </div>
            </div>
            <About></About>
        </div>
    );
};

export default AddTouristSpot;
