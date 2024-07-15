import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SignIn = () => {
    const { signIn, signInGit, signInGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isChecked, setIsChecked] = useState(false);

    const onSubmit = (data) => {
        const { email, password } = data;
        signIn(email, password)
            .then((result) => {
                console.log(result.user);
                toast("Successfully logged in");
                navigate(location.state ? location.state : '/');
            })
            .catch((error) => {
                console.log(error.message);
                toast(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        signInGoogle()
        .then(()=>{
            toast("Login Success")
        })
    };

    const handleGitHubSignIn = () => {
        signInGit()
        .then(()=>{
            toast("Login Success")
        })
    };

    return (
        <div className="flex md:flex-row items-center flex-col-reverse bg-[#d1e2d7] h-full">
            <div className="w-full md:w-2/4 md:p-20 p-5 m-7">
                <h1 className="md:text-5xl text-3xl text-black font-bold font-Montserrat">
                    Explore the Unseen,<br /> Embrace the Adventure
                </h1>
                <p className="text-black font-Montserrat text-xl">
                    Explore unforgettable destinations and experiences, tailored just for you, wherever adventure beckons
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div>
                        <label className="font-Montserrat text-black text-2xl font-bold" htmlFor="email">Email</label><br />
                        <input className="input w-full" type="email" name="email" {...register("email")} id="email" />
                    </div>
                    <div className="mb-3">
                        <label className="font-Montserrat text-2xl text-black font-bold" htmlFor="password">Password</label><br />
                        <input className="input w-full border-[#63ab45]" type="password" {...register("password")} name="password" id="password" /><br />
                    </div>
                    <div className="flex items-center mt-4 mb-1">
                        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                        <label className="ml-2 font-Montserrat" htmlFor="checkbox">Accept Terms and Conditions</label>
                    </div>
                    <input className="w-full font-Montserrat bg-[#63ab45] rounded-lg p-4 font-semibold hover:bg-black border-none text-white text-2xl mt-4" type="submit" value="Log in" />
                    <p className="font-Montserrat text-black font-semibold text-base">
                        Don't have an account? <Link className="text-[#63ab45]" to='/signup'>Register</Link>
                    </p>
                </form>
                <div className="flex flex-col space-y-3 mt-1">
                    <button className="btn w-full font-Montserrat border-none text-xl text-white hover:bg-[#63ab45]" onClick={handleGoogleSignIn}>
                        <FaGoogle className="mr-2" />Login with Google
                    </button>
                    <button className="btn w-full font-Montserrat border-none text-xl text-white hover:bg-[#63ab45]" onClick={handleGitHubSignIn}>
                        <FaGithub className="mr-2 text-2xl" />Login with GitHub
                    </button>
                </div>
            </div>
            <div className="p-4">
                <img src="/travel.png" alt="Travel" />
            </div>
        </div>
    );
};

export default SignIn;
