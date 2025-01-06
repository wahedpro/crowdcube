import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";

const MyDonation = () => {
    const data = useLoaderData();
    const { user } = useContext(authContext); // Current user's email from context
    const { email } = user;
    // Filter campaigns by user's email
    const donateCampaigns = data.filter((campaign) => campaign.loginUserEmail === email);
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">My Donation</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {donateCampaigns.map((campaign, index) => (
                    <div key={index} className="bg-white  border">
                        {/* Thumbnail */}
                        <img
                            src={campaign.thumbnail}
                            alt={campaign.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            {/* Title */}
                            <h2 className="text-xl font-semibold mb-2">{campaign.title}</h2>

                            {/* Campaign Type */}
                            <p className="text-sm text-gray-600 mb-2">
                                <strong>Type:</strong> {campaign.option}
                            </p>

                            {/* Description */}
                            <p className="text-gray-700 text-sm truncate mb-2">
                                {campaign.description}
                            </p>

                            {/* Amount */}
                            <p className="text-green-600 font-bold text-sm mb-2">
                                <strong>Minimum Donation:</strong> ${campaign.amount}
                            </p>

                            {/* Deadline */}
                            <p className="text-gray-600 text-sm">
                                <strong>Deadline:</strong> {new Date(campaign.deadline).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyDonation;