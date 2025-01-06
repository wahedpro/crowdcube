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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {campaigns.map((campaign, index) => (
                    <div key={index} className="bg-white border border-gray-300 shadow-lg overflow-hidden">
                        <img
                            src={campaign.thumbnail}
                            alt={campaign.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="font-semibold text-xl text-gray-800">{campaign.title}</h2>
                            <div className="flex justify-between items-center pt-3"> 
                                <div>
                                    <p className="text-[#050315] font-semibold text-xl mt-2">${campaign.amount}</p>
                                    <p className="text-[#050315] mt-1">{new Date(campaign.deadline).toLocaleDateString()}</p>
                                </div>
                                <div className="mt-4 text-center">
                                    <NavLink to={`/detailsPage/${campaign._id}`}>
                                        <button className="px-5 py-2 bg-[#2ecc71] text-white hover:bg-[#32b96b] transition">
                                            See More
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllCampaign;