import { useState } from 'react';
import '../../App.css';
import { Link, NavLink } from 'react-router-dom';

function App() {
    // State for managing theme
    const [isNightMode, setIsNightMode] = useState(false);

    // Function to toggle theme
    const toggleMode = () => {
        setIsNightMode(!isNightMode);
    };
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/'>All Tourist Spot</NavLink></li>
        <li><NavLink to='/'>Add Tourists Spot</NavLink></li>
        <li><NavLink to='/'>My List</NavLink></li>
    </>

    return (
        <div className={`navbar ${isNightMode ? 'night-mode' : 'light-mode'} p-4`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost ">
                        <a className="btn btn-ghost text-3xl font-bold  font-Montserrat"> <img className='w-14' src="../../../public/tourism (1).png" alt="" />SemWilds</a>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 lg:hidden rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal text-lg space-x-10 px-1 font-Montserrat font-semibold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                    <input type="checkbox" className="toggle toggle-success" id="toggleMode" checked={isNightMode}
                        onChange={toggleMode} defaultChecked />
                </div>
                <div>
                    <Link to='/signin'> <button>Log in</button></Link>
                </div>
                {/* <div className="avatar">
                    <div className="ring-success ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default App;
