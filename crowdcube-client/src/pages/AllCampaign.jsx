import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const AllCampaign = () => {
    const data = useLoaderData(); // Initial campaign data
    const [campaigns, setCampaign] = useState(data); // State to manage campaigns

    const sortTheCampaign = () => {
        const sortedCampaigns = [...campaigns].sort((a, b) => a.amount - b.amount); // Ascending order
        setCampaign(sortedCampaigns); // Update state with sorted campaigns
    };
    return (
        <div className="py-10">
            <div className="flex items-center justify-between mb-10">
                <h1 className="text-2xl font-semibold">All Campaign</h1>
                <button onClick={() => sortTheCampaign()} className="px-5 py-2 bg-[#2ecc71] hover:bg-[#32b96b]">Sort</button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-collapse border border-gray-300 rounded-lg shadow-lg">
                    <thead>
                        <tr className="bg-[#2ecc71] text-white">
                            <th className="px-6 py-3 text-left font-medium uppercase tracking-wider border-b border-gray-200">
                                Image
                            </th>
                            <th className="px-6 py-3 text-left font-medium uppercase tracking-wider border-b border-gray-200">
                                Campaign Title
                            </th>
                            <th className="px-6 py-3 text-left font-medium uppercase tracking-wider border-b border-gray-200">
                                Donation Amount
                            </th>
                            <th className="px-6 py-3 text-left font-medium uppercase tracking-wider border-b border-gray-200">
                                Deadline
                            </th>
                            <th className="px-6 py-3 text-center font-medium uppercase tracking-wider border-b border-gray-200">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign, index) => (
                            <tr
                                key={index}
                                className="odd:bg-gray-100 even:bg-gray-50 hover:bg-gray-200 transition"
                            >
                                {/* Image */}
                                <td className="px-6 py-4 border-b border-gray-200">
                                    <img
                                        src={campaign.thumbnail}
                                        alt={campaign.title}
                                        className="w-16 h-16 rounded-lg object-cover"
                                    />
                                </td>
                                {/* Campaign Title */}
                                <td className="px-6 py-4 border-b border-gray-200 font-medium text-gray-800">
                                    {campaign.title}
                                </td>
                                {/* Donation Amount */}
                                <td className="px-6 py-4 border-b border-gray-200 text-gray-600">
                                    ${campaign.amount}
                                </td>
                                {/* Deadline */}
                                <td className="px-6 py-4 border-b border-gray-200 text-gray-600">
                                    {new Date(campaign.deadline).toLocaleDateString()}
                                </td>
                                {/* Action Button */}
                                <td className="px-6 py-4 border-b border-gray-200 text-center">
                                    <NavLink to={`/detailsPage/${campaign._id}`}>
                                        <button className="px-5 py-2 bg-[#2ecc71] text-white rounded-md hover:bg-[#32b96b] transition">
                                            See More
                                        </button>
                                    </NavLink>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllCampaign;