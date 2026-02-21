import React, { useEffect, useState } from 'react';
import { useOutletContext, Link } from 'react-router';
import useAuthContext from '../../hooks/useAuthContext';
import { Mail, CheckCircle, XCircle, Home, User, CalendarDays, ExternalLink } from 'lucide-react';

const ManageRequests = () => {
    const { setHeading } = useOutletContext();
    const { fetchMyAds, getAdRequests, acceptRequest, cancelRequest, user, authTokens } = useAuthContext();
    const [myAds, setMyAds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedAdId, setExpandedAdId] = useState(null); // State to manage expanded requests for an ad

    useEffect(() => {
        setHeading("Manage Rental Requests");
        fetchAdsAndRequests();
    }, [setHeading, user, authTokens]);

    const fetchAdsAndRequests = async () => {
        setLoading(true);
        try {
            const adsResponse = await fetchMyAds();
            if (adsResponse && adsResponse.data && adsResponse.data.results) {
                const adsWithRequests = await Promise.all(
                    adsResponse.data.results.map(async (ad) => {
                        const requestsResponse = await getAdRequests(ad.id);
                        return {
                            ...ad,
                            requests: requestsResponse?.data || []
                        };
                    })
                );
                setMyAds(adsWithRequests);
            }
        } catch (error) {
            console.error("Error fetching ads or requests:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAcceptRequest = async (adId, requestId) => {
        setLoading(true);
        const response = await acceptRequest(adId, requestId);
        if (response) {
            fetchAdsAndRequests(); // Refresh data after action
        }
        setLoading(false);
    };

    const handleRejectRequest = async (adId, requestId) => {
        setLoading(true);
        const success = await cancelRequest(adId, requestId); // cancelRequest can also be used for rejection by owner
        if (success) {
            fetchAdsAndRequests(); // Refresh data after action
        }
        setLoading(false);
    };

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <p className="text-red-500 font-bold bg-red-50 px-6 py-3 rounded-2xl border border-red-100">
                    You must be logged in to manage requests.
                </p>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="text-center p-20">
                <span className="loading loading-bars loading-xl text-orange-500"></span>
                <p className="mt-4 text-gray-500">Loading your rental requests...</p>
            </div>
        );
    }

    const hasRequests = myAds.some(ad => ad.requests.length > 0);

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-0">
            {myAds.length === 0 ? (
                <div className="p-20 text-center bg-white rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-100">
                    <Home size={48} className="mx-auto text-gray-200 mb-4" />
                    <p className="text-gray-400 font-bold text-lg">You don't have any properties listed yet.</p>
                    <Link to="/dashboard/addproperty" className="btn btn-sm mt-4 bg-orange-500 hover:bg-orange-600 border-none text-white rounded-xl shadow-lg shadow-orange-100">
                        + List Your First Property
                    </Link>
                </div>
            ) : !hasRequests ? (
                <div className="p-20 text-center bg-white rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-100">
                    <Mail size={48} className="mx-auto text-gray-200 mb-4" />
                    <p className="text-gray-400 font-bold text-lg">No rental requests for your properties yet.</p>
                    <p className="text-gray-500">Share your listings to get more interest!</p>
                </div>
            ) : (
                <div className="space-y-8">
                    {myAds.map(ad => (
                        <div key={ad.id} className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-gray-100 border border-gray-100">
                            <div className="flex justify-between items-center mb-6 border-b pb-4">
                                <h3 className="text-2xl font-black text-gray-800 flex items-center gap-3">
                                    <Home className="text-orange-500" size={24}/>
                                    <Link to={`/property/${ad.id}`} className="hover:text-orange-600 transition-colors">{ad.title}</Link>
                                </h3>
                                <Link to={`/property/${ad.id}`} className="btn btn-sm btn-ghost text-orange-600 flex items-center gap-1">
                                    View Property <ExternalLink size={16}/>
                                </Link>
                            </div>

                            {ad.requests.length === 0 ? (
                                <p className="text-gray-500 text-center py-4">No requests for this property.</p>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="table table-zebra w-full">
                                        <thead>
                                            <tr>
                                                <th className="px-6 text-sm font-bold text-gray-600 uppercase">Requester</th>
                                                <th className="px-6 text-sm font-bold text-gray-600 uppercase">Status</th>
                                                <th className="px-6 text-sm font-bold text-gray-600 uppercase">Requested On</th>
                                                <th className="px-6 text-sm font-bold text-gray-600 uppercase text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ad.requests.map(request => (
                                                <tr key={request.id}>
                                                    <td>
                                                        <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-12 h-12">
                                                                    <img src={request.requester_profile_image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt="Requester Avatar" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                {/* NOTE: Using <a> tag as client-side navigation with Link from 'react-router' is broken by user's request. */}
                                                                <a href={`/profile/${request.requester_id}`} className="font-bold hover:underline">{request.requester_name || request.requester_email}</a>
                                                                <div className="text-sm opacity-50">{request.requester_email}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {request.status === 'pending' && (
                                                            <span className="badge badge-warning text-warning-content font-bold">Pending</span>
                                                        )}
                                                        {request.status === 'accepted' && (
                                                            <span className="badge badge-success text-success-content font-bold">Accepted</span>
                                                        )}
                                                        {request.status === 'cancelled' && (
                                                            <span className="badge badge-error text-error-content font-bold">Cancelled</span>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <div className="flex items-center gap-1">
                                                            <CalendarDays size={16}/>
                                                            {new Date(request.created_at).toLocaleDateString()}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center gap-2">
                                                            {request.status === 'pending' && (
                                                                <>
                                                                    <button
                                                                        onClick={() => handleAcceptRequest(ad.id, request.id)}
                                                                        className="btn btn-sm btn-success text-white"
                                                                        title="Accept Request"
                                                                    >
                                                                        <CheckCircle size={16} /> Accept
                                                                    </button>
                                                                    <button
                                                                        onClick={() => handleRejectRequest(ad.id, request.id)}
                                                                        className="btn btn-sm btn-error text-white"
                                                                        title="Reject Request"
                                                                    >
                                                                        <XCircle size={16} /> Reject
                                                                    </button>
                                                                </>
                                                            )}
                                                            {request.status === 'accepted' && (
                                                                <span className="text-green-600 font-bold">Accepted</span>
                                                            )}
                                                            {request.status === 'cancelled' && (
                                                                <span className="text-red-600 font-bold">Rejected</span>
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ManageRequests;