import { useContext, useState } from 'react';
import '../../App.css';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

function App() {
    const [isNightMode, setIsNightMode] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { user, logOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                console.log("Logged Out");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const toggleMode = () => {
        setIsNightMode(!isNightMode);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const links = (
        <>
            <li><NavLink to='/home' onClick={closeDropdown}>Home</NavLink></li>
            <li><NavLink to='/alltouristspot' onClick={closeDropdown}>All Tourist Spots</NavLink></li>
            <li><NavLink to='/addtouristspot' onClick={closeDropdown}>Add Tourist Spot</NavLink></li>
            <li><NavLink to='/' onClick={closeDropdown}>My List</NavLink></li>
        </>
    );

    return (
        <div className={`navbar ${isNightMode ? 'night-mode' : 'light-mode'} p-4`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} role="button" className=" flex items-center text-4xl  font-bold font-Montserrat" onClick={toggleDropdown}>
                    <img className='w-14' src="../../../public/tourism (1).png" alt="" /><span className='pl-4'>SemWilds</span>
                    </label>
                    {isDropdownOpen && (
                        <ul className="menu menu-sm dropdown-content bg-base-100 lg:hidden rounded-box z-10 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    )}
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal text-lg space-x-10 px-1 font-Montserrat font-semibold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                    <input type="checkbox" className="toggle toggle-success" id="toggleMode" checked={isNightMode} onChange={toggleMode} />
                </div>
                {
                    user ? (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} role="button" className="btn btn-ghost hover:bg-[#f58721] hover:{user.displayName} btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="User avatar" src={user?.photoURL || "https://i.ibb.co/MDg47sk/account-icon-vector-48295268.jpg"} />
                                </div>
                            </label>
                            <ul className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-[#f5872133] rounded-box w-52">
                                <li>
                                    <Link to='/profile' className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li>{user?.displayName || "Not found"}</li>
                                <li><button onClick={handleLogOut}>Logout</button></li>
                            </ul>
                        </div>
                    ) : (
                        <button><Link to='/signin'>Log in</Link></button>
                    )
                }
            </div>
        </div>
    );
}

export default App;
