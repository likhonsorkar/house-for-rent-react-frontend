import React from 'react';
import { NavLink, useNavigate } from 'react-router';
import useAuthContext from '../../hooks/useAuthContext';
import { LayoutGrid, Home, ThumbsUp, LogOut, Mail, Wallet } from 'lucide-react';

const Sidebar = () => {
    const {logoutUser, user} = useAuthContext();
    const urlNavigator = useNavigate();
    const navLinkClasses = ({ isActive }) => 
        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
            isActive 
                ? "bg-orange-50 text-orange-600 font-bold" 
                : "text-gray-500 hover:bg-orange-50 hover:text-orange-600 font-medium"
        }`;

    return (
            <aside className="w-full lg:w-72 bg-white border-r border-gray-100 flex flex-col sticky top-0 h-auto lg:h-screen z-20">
                <div className="p-8">
                    <NavLink to="/" className="text-xl font-black tracking-tighter text-gray-800">
                        HOUSEFOR<span className="text-orange-500">RENT</span>
                    </NavLink>
                </div>
                <nav className="flex-1 px-4 space-y-1">
                    <NavLink to="/dashboard" end className={navLinkClasses}>
                        <LayoutGrid size={20} />
                        Overview
                    </NavLink>
                    <NavLink to="/dashboard/myproperty" className={navLinkClasses}>
                        <Home size={20} />
                        My Properties
                    </NavLink>
                    <NavLink to="/dashboard/requests" className={navLinkClasses}>
                        <Mail size={20} />
                        Rental Requests
                    </NavLink>
                    <NavLink to="/dashboard/invoice" className={navLinkClasses}>
                        <Home size={20} />
                        My Invoice
                    </NavLink>
                    <NavLink to="/dashboard/wallet" className={navLinkClasses}>
                        <Wallet size={20} />
                        My Wallet
                    </NavLink>
                    {user?.is_staff && (
                       <NavLink to="/dashboard/approveads" className={navLinkClasses}>
                            <ThumbsUp size={20} />
                            Approve Ads
                        </NavLink> 
                    )}
                </nav>
                <div className="p-4 mt-auto border-t border-gray-100">
                    <button onClick={()=> {logoutUser(); urlNavigator("/login");}} className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-bold transition-all">
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>
            </aside>
    );
};

export default Sidebar;