import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { MdMyLocation, MdDelete } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";
import Swal from 'sweetalert2';

const ViewDetails = () => {
    const { id } = useParams();
    const [spot, setSpot] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://tourism-management-server-brown.vercel.app/spotlist/${id}`)
            .then(res => res.json())
            .then(data => {
                setSpot(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [id]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tourism-management-server-brown.vercel.app/spotlist/${id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    }).then(() => {
                        navigate('/alltouristspot'); 
                    });
                })
                .catch(error => {
                    console.error('Error deleting data:', error);
                });
            }
        });
    };

    if (loading) {
        return <div className="text-center text-white">Loading...</div>;
    }

    const { image, spot_Name, cost, time, description, country_Name, location, _id } = spot;

    return (
        <div className="bg-[#25814b7b] rounded-xl flex w-4/5 p-4 mt-7 shadow-xl mx-auto">
            <div className="p-3 pb-5 w-1/2">
                <img className="rounded-md" src={image} alt={spot_Name} />

                <hr className="border-white mt-2" />
                <p className="text-base font-semibold">{description}</p>
            </div>
            <div className="text-white bg-[#84968c6e] w-1/2 font-Montserrat space-y-1 p-16 mt-3 rounded-md">
                <h2 className="text-4xl font-bold">{spot_Name}</h2>
                <hr className="border-white mt-2 border-opacity-20" />
                <div className="font-semibold space-y-2 flex flex-col w-4/5">
                    <p className="flex items-center">
                        <MdMyLocation className="text-xl mr-2" /> {country_Name}
                    </p>
                    <p className="flex items-center">
                        {location}
                    </p>
                    <p className="flex items-center">
                        Average Cost: {cost}
                    </p>
                    <p className="flex items-center">
                        <IoTimeSharp className="text-xl mr-2" /> Travel Time: {time}
                    </p>
                </div>
                <div className="space-y-2 flex flex-col">
                    <Link to={`/update/${_id}`}>
                        <button className="btn w-full text-white border-none bg-[#63ab45] hover:bg-[#6dbb4c]">
                            <GiNotebook className="text-xl" /> Update Details
                        </button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn w-full text-white border-none hover:bg-[#f72d2d]"
                    >
                        <MdDelete className="text-xl" /> Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
