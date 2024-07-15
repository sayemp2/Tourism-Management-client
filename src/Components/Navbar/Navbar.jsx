import { useContext, useState } from 'react';
import '../../App.css';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

function App() {
    // State for managing theme
    const [isNightMode, setIsNightMode] = useState(false);

    const { user, logOutUser } = useContext(AuthContext)
    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                console.log("Log Out")
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

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
                {
                    user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-[#f58721] hover:{user.displayName} btn-circle avatar">
                            <div className="w-10 rounded-full ">
                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL || "https://i.ibb.co/MDg47sk/account-icon-vector-48295268.jpg"} />
                            </div>
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-max bg-white rounded shadow-md py-2 px-4 opacity-0 transition-opacity duration-300">
                            {user.fullName}
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#f5872133] rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>{user?.displayName || "not found"}</li>
                            <li><a onClick={handleLogOut}>Logout</a></li>
                        </ul>
                    </div> :
                        <button><Link to='/signin'>Log in</Link></button>
                }
            </div>
        </div>
    );
}

export default App;
