import React from 'react';
import { Link, useNavigate } from 'react-router';
import useAuthContext from '../../hooks/useAuthContext';

const Sidebar = () => {
    const {logoutUser} = useAuthContext();
    const urlNavigator = useNavigate();
    return (
            <aside className="w-full lg:w-72 bg-white border-r border-gray-100 flex flex-col sticky top-0 h-auto lg:h-screen z-20">
                <div className="p-8">
                    <Link to="/" className="text-xl font-black tracking-tighter text-gray-800">
                        HOUSEFOR<span className="text-orange-500">RENT</span>
                    </Link>
                </div>
                <nav className="flex-1 px-4 space-y-1">
                    <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-orange-50 text-orange-600 rounded-xl font-bold transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                        Overview
                    </Link>
                    <Link to="/my-listings" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-orange-50 hover:text-orange-600 rounded-xl font-medium transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        My Properties
                    </Link>
                    <Link to="/bookings" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-orange-50 hover:text-orange-600 rounded-xl font-medium transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        Bookings
                    </Link>
                    <Link to="/messages" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-orange-50 hover:text-orange-600 rounded-xl font-medium transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
                        Messages
                    </Link>
                </nav>
                <div className="p-4 border-t border-gray-100">
                    <button onClick={()=> {logoutUser();
        urlNavigator("/login?next=/dashboard");}} className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-bold transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                        Logout
                    </button>
                </div>
            </aside>
    );
};

export default Sidebar;