import React, { useEffect, useState } from 'react';
import { Users, FileText, Clock, CheckCircle, BookmarkCheck, TrendingUp } from 'lucide-react';
import { useOutletContext } from 'react-router';
import apiClient from '../../services/api-client';
import useAuthContext from '../../hooks/useAuthContext';

const Dashboard = () => {
    const { setHeading } = useOutletContext();
    const { authTokens, user } = useAuthContext();
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setHeading("Platform Overview");
        if (user?.is_staff) {
            fetchStatistics();
        }
    }, []);

    const fetchStatistics = async () => {
        setLoading(true);
        try {
            const response = await apiClient.get("/dashboard/statistics", {
                headers: { 'Authorization': `JWT ${authTokens?.access}` },
            });
            setStats(response.data);
        } catch (error) {
            console.error("Stats fetch error:", error);
        } finally {
            setLoading(false);
        }
    };
    if (!user?.is_staff) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <p className="text-red-500 font-bold bg-red-50 px-6 py-3 rounded-2xl border border-red-100">
                    Access Denied. Admins Only.
                </p>
            </div>
        );
    }
    return (
        <div className="max-w-7xl mx-auto p-4 md:p-0">
            {loading ? (
                <div className="p-20 text-center">
                    <span className="loading loading-bars loading-xl text-orange-500"></span>
                    <p className="mt-4 text-gray-500">Getting Statistics...</p>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-gray-500 font-medium text-sm mb-1">Total Users</p>
                                    <h3 className="text-3xl font-black text-gray-800">{stats?.total_user || 0}</h3>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                                    <Users className="text-blue-600" size={24} />
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-50 uppercase text-[10px] text-gray-400 font-bold tracking-widest">Registered on platform</div>
                        </div>
                        <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-gray-500 font-medium text-sm mb-1">Total Ads</p>
                                    <h3 className="text-3xl font-black text-gray-800">{stats?.total_advertisements || 0}</h3>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                                    <FileText className="text-orange-600" size={24} />
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-50 uppercase text-[10px] text-gray-400 font-bold tracking-widest">All time submissions</div>
                        </div>
                        <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-gray-500 font-medium text-sm mb-1">Pending Approval</p>
                                    <h3 className="text-3xl font-black text-gray-800">{stats?.pending_approval_advertisements || 0}</h3>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                                    <Clock className="text-yellow-600" size={24} />
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-50 uppercase text-[10px] text-gray-400 font-bold tracking-widest">Waiting for review</div>
                        </div>
                        <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-gray-500 font-medium text-sm mb-1">This Month</p>
                                    <h3 className="text-3xl font-black text-gray-800">{stats?.advertisements_in_current_month || 0}</h3>
                                </div>
                                <div className="bg-green-50 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                                    <TrendingUp className="text-green-600" size={24} />
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-50 uppercase text-[10px] text-gray-400 font-bold tracking-widest">New ads in current month</div>
                        </div>
                        <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-gray-500 font-medium text-sm mb-1">Last 30 Days</p>
                                    <h3 className="text-3xl font-black text-gray-800">{stats?.advertisements_in_last_30_days || 0}</h3>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                                    <CheckCircle className="text-purple-600" size={24} />
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-50 uppercase text-[10px] text-gray-400 font-bold tracking-widest">Recent activity</div>
                        </div>
                        <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-gray-500 font-medium text-sm mb-1">Booked Ads</p>
                                    <h3 className="text-3xl font-black text-gray-800">{stats?.booked_advertisements || 0}</h3>
                                </div>
                                <div className="bg-teal-50 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                                    <BookmarkCheck className="text-teal-600" size={24} />
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-50 uppercase text-[10px] text-gray-400 font-bold tracking-widest">Successfully rented</div>
                        </div>

                    </div>
                    
                </>
            )}
        </div>
    );
};

export default Dashboard;