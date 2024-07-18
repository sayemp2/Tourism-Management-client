const AddTouristSpot = () => {

    const addSpot = event => {
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
        const email = form.email.value;
        const spotData = { image, spot_Name, country_Name, location, description, cost, season, time, visitors, name, email };
        fetch('https://tourism-management-server-brown.vercel.app/spotlist', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(spotData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className="bg-[#e9f2ff] flex lg:flex-row flex-col lg:items-center">
            <div className="lg:w-1/2 p-4 lg:pl-7 animate-slideInLeft">

                <form onSubmit={addSpot} className="space-y-3 bg-teal-500 p-11 rounded-2xl">
                    <div>
                        <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="">Image Url</label><br />
                        <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Enter the photo url" type="text" name="image" />
                    </div>
                    <div className="flex md:flex-row flex-col md:space-x-3">
                        <div className="md:w-1/2">
                            <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="">Tourist Spot Name</label><br />
                            <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Type Place Name" type="text" name="touristSpot" id="" />
                        </div>
                        <div className="md:w-1/2">
                            <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="">Country Name</label><br />
                            <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Type Country Name" type="text" name="countryName" />
                        </div>
                    </div>
                    <div>
                        <label className="font-Montserrat text-white text-xl  font-semibold" htmlFor="">Location</label>
                        <input className="input font-Montserrat text-xl w-full mb-5 text-black bg-white" placeholder="Type place Location" type="text" name="location" id="" />
                    </div>
                    <div>
                        <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="">Short Description:</label><br />
                        <textarea className="input font-Montserrat text-xl w-full h-24 text-black bg-white" placeholder="Type Description" name="description" id=""></textarea>
                    </div>
                    <div className="flex md:flex-row flex-col md:space-x-3">
                        <div className="md:w-1/2">
                            <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="">Average Cost</label><br />
                            <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Type Average Cost " type="text" name="cost" id="" />
                        </div>
                        <div className="md:w-1/2">
                            <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="">Seasonality</label><br />
                            <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Type Seasonality" type="text" name="season" id="" />
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col md:space-x-3">
                        <div className="md:w-1/2">
                            <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="">Travel Time</label><br />
                            <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Type Travel Time" type="text" name="time" />
                        </div>
                        <div className="md:w-1/2">
                            <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="">Total Visitors</label><br />
                            <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Type Total Visitors" type="text" name="visitors" />
                        </div>
                    </div>
                    <div>
                        <label className="font-Montserrat text-white text-xl font-semibold" htmlFor="">User Email</label><br />
                        <input className="input font-Montserrat text-xl w-full text-black bg-white" placeholder="Type Your Email" type="text" name="email" id="" />
                    </div>
                    <div>
                        <label className="font-Montserrat text-white text-xl  font-semibold" htmlFor="">User Name</label>
                        <input className="input font-Montserrat text-xl w-full mb-5 text-black bg-white" placeholder="Type your name" type="text" name="name" id="" />
                    </div>
                    <input className="btn font-Montserrat text-xl font-bold w-full " type="submit" value="Submit" />
                </form>
            </div>
            <div className="lg:w-1/2 animate-slideInRight">
                <img src="../../../public/bg.jpg" alt="" />
            </div>
        </div>
    );
};

export default AddTouristSpot;
