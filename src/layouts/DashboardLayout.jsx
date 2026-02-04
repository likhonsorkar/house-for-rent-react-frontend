import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import { Outlet } from 'react-router';
import useAuthContext from '../hooks/useAuthContext';

const DashboardLayout = () => {
    const {user} = useAuthContext();
    const [heading, setHeading] = useState("Dashboard")
    return (
        <div className="min-h-screen bg-gray-50/50 flex flex-col lg:flex-row">
            <Sidebar/>
            <main className="flex-1 p-4 md:p-8 lg:p-12 bg-gray-50/30 min-h-screen">
                {/* --- TOP BAR / HEADER --- */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-black text-gray-900 tracking-tight">
                            Dashboard <span className="text-orange-500">{heading}</span>
                        </h1>
                        <p className="text-gray-500 font-medium mt-2">Welcome back, {user?.first_name} {user?.last_name} ! Here's your property pulse.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Notification */}
                        <button className="btn btn-ghost btn-circle bg-white border border-gray-100 shadow-sm relative">
                            <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full"></span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        </button>
                        <button className="btn bg-orange-500 hover:bg-orange-600 border-none text-white rounded-2xl px-8 shadow-xl shadow-orange-100 font-bold transition-all transform hover:scale-105">
                            + Add Property
                        </button>
                    </div>
                </div>
                <Outlet context={{ setHeading }}/>
            </main>  
        </div>
    );
};

export default DashboardLayout;