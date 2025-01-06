import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyCampaign = () => {
    const data = useLoaderData(); // All campaigns loaded from the loader
    const { user } = useContext(authContext); // Current user's email from context
    const { email } = user;

    // Filter campaigns by user's email
    const userCampaigns = data.filter((campaign) => campaign.userEmail === email);
    const [campaigns, setCampaign] = useState(userCampaigns);


    const handleCampaignDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // delete from the database
                fetch(`https://crowdcube-server-five.vercel.app/addCampaign/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Campaign has been deleted.",
                                icon: "success"
                            });

                            const remainingCampaigns = campaigns.filter(campaign => campaign._id !== id);
                            setCampaign(remainingCampaigns);
                        }
                    })
            }
        });
    }

    return (
        <div className="py-10">
            <h1 className="text-2xl font-semibold text-center mb-5">
                My Campaigns
            </h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-[#2ecc71] text-left">
                            <th className="px-6 py-3 border-b border-gray-200 font-medium uppercase tracking-wider">Image</th>
                            <th className="px-6 py-3 border-b border-gray-200 font-medium uppercase tracking-wider">Campaign Title</th>
                            <th className="px-6 py-3 border-b border-gray-200 font-medium uppercase tracking-wider">Campaign Type</th>
                            <th className="px-6 py-3 border-b border-gray-200 font-medium uppercase tracking-wider">Deadline</th>
                            <th className="px-6 py-3 border-b border-gray-200 font-medium uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                {/* Image */}
                                <td className="px-6 py-4 border-b border-gray-200">
                                    <img
                                        src={campaign.thumbnail}
                                        alt={campaign.title}
                                        className="w-16 h-16 rounded object-cover"
                                    />
                                </td>
                                {/* Campaign Title */}
                                <td className="px-6 py-4 border-b border-gray-200 font-medium text-gray-800">
                                    {campaign.title}
                                </td>
                                {/* Campaign Type */}
                                <td className="px-6 py-4 border-b border-gray-200 text-gray-600">
                                    {campaign.option}
                                </td>
                                {/* Deadline */}
                                <td className="px-6 py-4 border-b border-gray-200 text-gray-600">
                                    {new Date(campaign.deadline).toLocaleDateString()}
                                </td>
                                {/* Actions */}
                                <td className="px-6 py-4 border-b border-gray-200 space-x-2">
                                    <Link to={`/updateCampaign/${campaign._id}`}>
                                        <button className="px-5 py-2 bg-[#2ecc71] text-white rounded-md hover:bg-[#32b96b] transition">
                                            Update
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleCampaignDelete(campaign._id)}
                                        className="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCampaign;