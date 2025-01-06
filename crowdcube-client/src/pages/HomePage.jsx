import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import Banner from "../components/Banner/Banner";
import BestVolunteer from "../components/BestVolunteer/BestVolunteer";
import TopDonors from "../components/TopDonors/TopDonors";
import CampaignCard from "../components/CampaignCard/CampaignCard";
import { authContext } from "../provider/AuthProvider";
import TypewriterSection from "../components/TypewriterSection/TypewriterSection";

const HomePage = () => {
    const campaigns = useLoaderData();
    const { isDarkMode } = useContext(authContext);
    return (
        <div className={isDarkMode ? " text-white":" text-gray-900"}>
            <Banner></Banner>
            <TypewriterSection></TypewriterSection>
            <div className="text-center py-10">
                <h1 className="text-3xl font-bold">Running Campaign</h1>
                <p className="w-[90%] lg:w-[60%] mx-auto text-center">Get the Latest Campaigns Update and News here and be connected with us Always</p>
            </div>
            <div className='grid grid-cols-1 md:md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {campaigns.map((campaign, index) => (
                        <CampaignCard
                            key={index}
                            campaign={campaign}
                        />
                    ))}
            </div>
            <BestVolunteer></BestVolunteer>
            <TopDonors></TopDonors>
        </div>
    );
};

export default HomePage;