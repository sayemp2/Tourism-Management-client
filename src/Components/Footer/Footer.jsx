import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#151414] relative font-Montserrat">
            <div className="container mx-auto">
                <div className="border-b border-[#373636] pt-5 pb-5">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/3 mb-6">
                            <div className="flex items-start">
                                <i className="fas fa-map-marker-alt text-[#63ab45] text-3xl"></i>
                                <div className="pl-4">
                                    <h4 className="text-white text-lg font-semibold mb-1">Find us</h4>
                                    <span className="text-[#757575] text-base">Dhaka, Bangladesh</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 mb-6">
                            <div className="flex items-start">
                                <i className="fas fa-phone text-[#63ab45] text-3xl"></i>
                                <div className="pl-4">
                                    <h4 className="text-white text-lg font-semibold mb-1">Call us</h4>
                                    <span className="text-[#757575] text-base">0170000000</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 mb-6">
                            <div className="flex items-start">
                                <i className="far fa-envelope-open text-[#63ab45] text-3xl"></i>
                                <div className="pl-4">
                                    <h4 className="text-white text-lg font-semibold mb-1">Mail us</h4>
                                    <span className="text-[#757575] text-base">semwilds@info.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-5 pb-5">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/3 mb-12 lg:mb-0">
                            <div>
                                <div className="mb-8 md:w-1/4 w-1/4">
                                    <img src="../../../public/tourism (1).png" className="" alt="logo" />
                                </div>
                                <p className="text-[#7e7e7e] text-sm mb-4">
                                    We are the most fun travel and tours company, dedicated to providing exciting adventures, unforgettable.
                                </p>
                                <div>
                                    <span className="text-white text-lg font-bold mb-5 block">Follow us</span>
                                    <a href="#" className="text-white text-xl mr-4 inline-block">
                                        <img className="h-10 w-10 rounded-full" src="../../../public/pngwing.com (11).png" alt="" />
                                    </a>
                                    <a href="#" className="text-white text-xl mr-4 inline-block">
                                        <img className="h-10 w-10 " src="../../../public/pngwing.com (12).png" alt="" />
                                    </a>
                                    <a href="#" className="text-white text-xl inline-block">
                                        <img className="h-10 w-10 rounded-full" src="../../../public/pngwing.com (13).png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 mb-12 lg:mb-0">
                            <div>
                                <h3 className="text-white text-lg font-semibold mb-8 relative pb-2 before:content-[''] before:absolute before:left-0 before:bottom-[-15px] before:h-0.5 before:w-12 before:bg-[#63ab45]">
                                    Useful Links
                                </h3>
                                <ul className="flex flex-wrap">
                                    <li className="w-1/2 mb-3">
                                        <Link to={'/'}><h1 className="text-[#878787] hover:text-[#63ab45]">Home</h1></Link>
                                    </li>
                                    <li className="w-1/2 mb-3">
                                        <a href="#" className="text-[#878787] hover:text-[#63ab45]">About</a>
                                    </li>
                                    <li className="w-1/2 mb-3">
                                        <a href="#" className="text-[#878787] hover:text-[#63ab45]">Services</a>
                                    </li>
                                    <li className="w-1/2 mb-3">
                                        <a href="#" className="text-[#878787] hover:text-[#63ab45]">Portfolio</a>
                                    </li>
                                    <li className="w-1/2 mb-3">
                                        <a href="#" className="text-[#878787] hover:text-[#63ab45]">Contact</a>
                                    </li>
                                    <li className="w-1/2 mb-3">
                                        <a href="#" className="text-[#878787] hover:text-[#63ab45]">About us</a>
                                    </li>
                                    <li className="w-1/2 mb-3">
                                        <a href="#" className="text-[#878787] hover:text-[#63ab45]">Our Services</a>
                                    </li>
                                    <li className="w-1/2 mb-3">
                                        <a href="#" className="text-[#878787] hover:text-[#63ab45]">Expert Team</a>
                                    </li>
                                    <li className="w-1/2 mb-3">
                                        <a href="#" className="text-[#878787] hover:text-[#63ab45]">Contact us</a>
                                    </li>
                                    <li className="w-1/2 mb-3">
                                        <a href="#" className="text-[#878787] hover:text-[#63ab45]">Latest News</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3">
                            <div>
                                <h3 className="text-white text-lg font-semibold mb-8 relative pb-2 before:content-[''] before:absolute before:left-0 before:bottom-[-15px] before:h-0.5 before:w-12 before:bg-[#63ab45]">
                                    Subscribe
                                </h3>
                                <p className="text-[#7e7e7e] text-sm mb-6">
                                    Don’t miss to subscribe to our new feeds, kindly fill the form below.
                                </p>
                                <div className="relative">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address" className="w-full p-4 bg-[#2E2E2E] border border-[#2E2E2E] text-white" />
                                        <button className="absolute right-0 top-0 bg-[#63ab45] p-4 border border-[#63ab45]">
                                            <i className="fab fa-telegram-plane text-white text-xl transform rotate-[-6deg]"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#202020] py-6">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="text-center text-lg-left">
                            <p className="text-[#878787] text-sm m-0">
                                Copyright &copy; 2024, All Right Reserved <a href="https://github.com/sayemp2/" target="_blank" className="text-[#63ab45]">Developer Sayem</a>
                            </p>
                        </div>
                        <div className="hidden lg:flex justify-end">
                            <ul className="flex space-x-6">
                                <li><a href="/" className="text-[#878787] text-sm hover:text-[#63ab45]">Home</a></li>
                                <li><a href="#" className="text-[#878787] text-sm hover:text-[#63ab45]">Terms</a></li>
                                <li><a href="#" className="text-[#878787] text-sm hover:text-[#63ab45]">Privacy</a></li>
                                <li><a href="#" className="text-[#878787] text-sm hover:text-[#63ab45]">Policy</a></li>
                                <li><a href="#" className="text-[#878787] text-sm hover:text-[#63ab45]">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;