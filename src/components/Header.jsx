import { Link, useNavigate } from "react-router";
import useAuthContext from "../hooks/useAuthContext";

const Header = () => {
    const {user, logoutUser, successMSG, errorMSG} = useAuthContext();
    const urlNavigator = useNavigate()
    const navLinks = (
        <>
        <li><Link to="/login" className="hover:text-orange-500 font-medium">Find a Home</Link></li>
        <li><Link to="/login" className="hover:text-orange-500 font-medium">List Property</Link></li>
        <li><Link to="/login" className="hover:text-orange-500 font-medium">How it works</Link></li>
        </>
    );
    const authnavLinks = (
        <>
        <li><a className="hover:text-orange-500 font-medium">Find a Home Auth</a></li>
        <li><a className="hover:text-orange-500 font-medium">List Property</a></li>
        <li><a className="hover:text-orange-500 font-medium">How it works</a></li>
        </>
    );
    const handleLogout = () => {
        logoutUser();
        urlNavigator("/login");
    };

    return (
        <>
        <header className="navbar bg-white/90 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50 px-2 md:px-8">
            {/* MOBILE LEFT: Hamburger Menu */}
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden p-2 text-orange-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-box w-52 border border-orange-50">
                    {!user ? navLinks : authnavLinks}
                </ul>
                </div>
                
                {/* LOGO (Responsive size) */}
                <div className="flex items-center gap-2 cursor-pointer ml-2 lg:ml-0">
                <div className="bg-orange-500 p-1.5 md:p-2 rounded-lg shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-5 h-5 md:w-6 md:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </div>
                <Link to="/" className="text-lg md:text-xl font-black tracking-tight text-gray-800">
                    HOUSEFOR<span className="text-orange-500">RENT</span>
                </Link>
                </div>
            </div>

            {/* DESKTOP MIDDLE: Navigation */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2 text-gray-600">
                    {!user ? navLinks : authnavLinks}
                </ul>
            </div>

            {/* RIGHT: Auth Buttons (Sizes down on mobile) */}
            <div className="navbar-end gap-1 md:gap-3">
                {!user ? (
                <div>
                    <Link to="/login" className="btn btn-ghost btn-sm md:btn-md text-gray-600 font-semibold px-2 md:px-4">Log In</Link>
                    <button className="btn btn-sm md:btn-md bg-orange-500 hover:bg-orange-600 border-none text-white px-3 md:px-6 shadow-lg shadow-orange-200 rounded-full md:rounded-xl">
                    Sign Up
                    </button>
                </div>
                    ) : (
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </ul>
                </div> )
                }
            </div>
        </header>
        {successMSG && (<span className="label-text-alt text-success">{successMSG}</span>)}
        {errorMSG && (<span className="label-text-alt text-error"> {errorMSG} </span>)}
        </>
    );
};

export default Header;