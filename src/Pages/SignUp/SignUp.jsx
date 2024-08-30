import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import Loader from "../loader/Loader";


const SignUp = () => {
    const { signUp, UpdateProfile, user, signInGoogle, signInGit, loader, setLoader } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    console.log(user);
    const onSubmit = (data) => {
        const { email, fullName, password, photoUrl } = data;

        if (password.length < 6) {
            toast.error('Password should be at least 6 characters');
            return;
        } else if (!/[A-Z]/.test(password)) {
            toast.error('Password should contain at least one uppercase letter');
            return;
        } else if (!/[a-z]/.test(password)) {
            toast.error('Password should contain at least one lowercase letter');
            return;
        } else if (!/\d/.test(password)) {
            toast.error('Password should contain at least one digit');
            return;
        }

        signUp(email, password)
            .then((result) => {
                UpdateProfile(fullName, photoUrl)
                    .then(() => {
                        console.log(result)
                        setLoader(false);
                        toast.success("Successfully registered");
                        fetch('https://tourism-management-server-brown.vercel.app/users', {
                            method: "POST",
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify(data)
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

                    })
                    .catch(error => {
                        console.error(error.message);
                        toast.error(error.message);
                    });
            })
            .catch(error => {
                console.error(error.message);
                toast.error(error.message);
            });
    };
    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(() => {
                toast("Login Success")
            })
    };

    const handleGitHubSignIn = () => {
        signInGit()
            .then(() => {
                toast("Login Success")
            })
    };


    return (
        <div>
            <div className="flex md:flex-row relative items-center flex-col-reverse bg-[#d1e2d7] h-full">
            <div className="absolute left-1/3 md:w-2/5">{loader&& <Loader />}</div>
                <div className="pl-5">
                    <img src="../../../public/destination.png" alt="Destination" />
                </div>

                <div className="w-full md:w-2/3 md:p-20 m-7">
                    <h1 className="md:text-5xl text-right text-3xl text-black font-bold font-Montserrat">
                        Explore the Unseen,<br /> Embrace the Adventure
                    </h1>
                    <p className="text-black text-right font-Montserrat text-xl">
                        Explore unforgettable destinations and experiences, tailored just for you, wherever adventure beckons
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className="flex space-x-1">
                            <div className="w-1/2">
                                <label className="font-Montserrat text-black text-2xl font-bold" htmlFor="fullName">Name</label><br />
                                <input
                                    className="input w-full"
                                    type="text"
                                    name="fullName"
                                    {...register("fullName", { required: true })}
                                    id="fullName"
                                />
                                {errors.fullName && <span className="text-red-500">Name is required</span>}
                            </div>
                            <div className="w-1/2">
                                <label className="font-Montserrat text-black text-2xl font-bold" htmlFor="email">Email</label><br />
                                <input
                                    className="input w-full"
                                    type="email"
                                    name="email"
                                    {...register("email", { required: true })}
                                    id="email"
                                />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="font-Montserrat text-2xl text-black font-bold" htmlFor="photoUrl">Photo URL</label><br />
                            <input
                                className="input w-full border-[#63ab45]"
                                type="text"
                                name="photoUrl"
                                {...register("photoUrl", { required: true })}
                                id="photoUrl"
                            /><br />
                            {errors.photoUrl && <span className="text-red-500">Photo URL is required</span>}
                        </div>
                        <div className="mb-3">
                            <label className="font-Montserrat text-2xl text-black font-bold" htmlFor="password">Password</label><br />
                            <input
                                className="input w-full border-[#63ab45]"
                                type="password"
                                name="password"
                                {...register("password", { required: true })}
                                id="password"
                            /><br />
                            {errors.password && <span className="text-red-500">Password is required</span>}
                        </div>
                        <input
                            className="w-full font-Montserrat bg-[#63ab45] rounded-lg p-4 font-semibold hover:bg-black border-none text-white text-2xl mt-4"
                            type="submit"
                            value="Register"
                        />
                        <p className="font-Montserrat font-semibold text-black text-base">
                            Already have an account? <Link className="text-[#63ab45]" to='/signin'>Log In</Link>
                        </p>
                    </form>
                    <div className="flex flex-col space-y-3 mt-1">
                        <button onClick={handleGoogleSignIn} className="btn w-full font-Montserrat border-none text-xl text-white hover:bg-[#63ab45]">
                            <FaGoogle className="mr-2" />Login with Google
                        </button>
                        <button onClick={handleGitHubSignIn} className="btn w-full font-Montserrat border-none text-xl text-white hover:bg-[#63ab45]">
                            <FaGithub className="mr-2 text-2xl" />Login with Github
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
