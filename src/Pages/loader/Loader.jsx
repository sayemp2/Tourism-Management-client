import Lottie from "lottie-react";
import spinner from "../../Components/animation/Loader.json"

const Loader = () => {
    return (
        <div>
            <Lottie animationData={spinner}/>
        </div>
    );
};

export default Loader;