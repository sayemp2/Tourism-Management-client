import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";

const Root = () => {
    const [isNightMode, setIsNightMode] = useState(false);
    return (
        <div className={`${isNightMode?"bg-[#1d231f]":"bg-[#343b3630]"}`}>
           <Navbar isNightMode={isNightMode} setIsNightMode={setIsNightMode}></Navbar>
           <Outlet isNightMode={isNightMode} ></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;