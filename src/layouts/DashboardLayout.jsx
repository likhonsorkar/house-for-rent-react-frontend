import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import { Link, Outlet } from 'react-router';
import useAuthContext from '../hooks/useAuthContext';
import { Bell, Plus } from 'lucide-react';

const DashboardLayout = () => {
    const {user, errorMSG, successMSG } = useAuthContext();
    const [heading, setHeading] = useState("Dashboard");
    const [loading, setLoading] = useState(false);
    return (
        <div className="min-h-screen bg-gray-50/50 flex flex-col lg:flex-row">
            <Sidebar/>
            <main className="flex-1 p-4 md:p-8 lg:p-12 bg-gray-50/30 min-h-screen">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight flex items-center gap-3">
                            Dashboard 
                            <span className="text-orange-500 bg-orange-50 px-4 py-1 rounded-2xl text-2xl md:text-3xl">
                                {heading}
                            </span>
                        </h1>
                        <p className="text-gray-500 font-medium mt-1">
                            Welcome back, <span className="text-gray-800 font-bold">{user?.first_name || "User"}</span>! 
                        </p>
                    </div>


                    <div className="flex items-center gap-4">
                        <button className="btn btn-ghost btn-circle bg-white border border-gray-100 shadow-sm relative">
                            <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full"></span>
                            <Bell size={24} className="text-gray-500" />
                        </button>
                        <Link to="/dashboard/addproperty" className="btn bg-orange-500 hover:bg-orange-600 border-none text-white rounded-2xl px-8 shadow-xl shadow-orange-100 font-bold transition-all transform hover:scale-105 inline-flex items-center gap-2">
                            <Plus size={20} /> Add Property
                        </Link>
                    </div>
                </div>
                <Outlet context={{ setHeading, loading, setLoading }}/>

                {(successMSG || errorMSG) && (
                <div className={`w-full py-3 px-4 animate-in slide-in-from-top duration-300 border-b ${
                    successMSG ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100"
                }`}>
                    <div className="container mx-auto flex items-center justify-center gap-2">
                        {successMSG ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        )}
                        <span className={`text-sm font-bold ${successMSG ? "text-green-700" : "text-red-700"}`}>
                            {successMSG || errorMSG}
                        </span>
                    </div>
                </div>
            )}
            </main>  
        </div>
    );
};

export default DashboardLayout;