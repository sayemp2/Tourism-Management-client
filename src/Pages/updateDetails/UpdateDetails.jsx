import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateDetails = () => {
    const spotData = useLoaderData();
    const { _id, image, spot_Name, country_Name, location, description, cost, season, time, visitors } = spotData;
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const spot_Name = form.touristSpot.value;
        const country_Name = form.countryName.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const season = form.season.value;
        const time = form.time.value;
        const visitors = form.visitors.value;
        const updateSpotDetails = { image, spot_Name, country_Name, location, description, cost, season, time, visitors }
        fetch(`https://tourism-management-server-brown.vercel.app/spotlist/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateSpotDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: 'Success',
                    text: 'Account Sign up Successfully',
                    icon: 'Success',
                })
            })


    }


    return (
        <div>
            <div className="bg-[#e9f2ff] flex lg:flex-row flex-col lg:items-center">
                <div className="lg:w-1/2 p-4 lg:pl-7 animate-slideInLeft">
                    <form onSubmit={handleUpdate} className="space-y-3 bg-teal-500 p-11 rounded-2xl">
                        <div>
                            <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="image">Image Url</label><br />
                            <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Enter the photo url" defaultValue={image} type="text" name="image" id="image" required />
                        </div>
                        <div className="flex md:flex-row flex-col md:space-x-3">
                            <div className="md:w-1/2">
                                <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="touristSpot">Tourist Spot Name</label><br />
                                <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Type Place Name" type="text" defaultValue={spot_Name} name="touristSpot" id="touristSpot" required />
                            </div>
                            <div className="md:w-1/2">
                                <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="countryName">Country Name</label><br />
                                <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Type Country Name" defaultValue={country_Name} type="text" name="countryName" id="countryName" required />
                            </div>
                        </div>
                        <div>
                            <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="location">Location</label>
                            <input className="input font-Montserrat text-xl w-full mb-5 text-black bg-white" placeholder="Type place Location" defaultValue={location} type="text" name="location" id="location" required />
                        </div>
                        <div>
                            <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="description">Short Description</label><br />
                            <textarea className="input font-Montserrat text-xl w-full h-24 text-black bg-white" placeholder="Type Description" defaultValue={description} name="description" id="description" required></textarea>
                        </div>
                        <div className="flex md:flex-row flex-col md:space-x-3">
                            <div className="md:w-1/2">
                                <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="cost">Average Cost</label><br />
                                <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Type Average Cost" defaultValue={cost} type="text" name="cost" id="cost" required />
                            </div>
                            <div className="md:w-1/2">
                                <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="season">Seasonality</label><br />
                                <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Type Seasonality" defaultValue={season} type="text" name="season" id="season" required />
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col md:space-x-3">
                            <div className="md:w-1/2">
                                <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="time">Travel Time</label><br />
                                <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Type Travel Time" defaultValue={time} type="text" name="time" id="time" required />
                            </div>
                            <div className="md:w-1/2">
                                <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="visitors">Total Visitors</label><br />
                                <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Type Total Visitors" defaultValue={visitors} type="text" name="visitors" id="visitors" required />
                            </div>
                        </div>
                        <input className="btn font-Montserrat text-xl font-bold w-full " type="submit" value="Update" />
                    </form>
                </div>
                <div className="lg:w-1/2 animate-slideInRight">
                    <img src="../../../public/bg.jpg" alt="Background" />
                </div>
            </div>
        </div>
    );
};

export default UpdateDetails;