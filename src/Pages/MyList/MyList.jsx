import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SpotCard from "../../Components/SpotCard/SpotCard";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [spot, setSpot] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://tourism-management-server-brown.vercel.app/myList/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setSpot(data);
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [user]);

    return (
        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2">
            {spot.length > 0 ? (
                spot.map(touristSpot => 
                    <SpotCard key={touristSpot._id} touristSpot={touristSpot} />
                )
            ) : (
                <p>No spots available.</p>
            )}
        </div>
    );
};

export default MyList;
