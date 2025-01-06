import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const CampaignCard = ({campaign}) => {
    const { thumbnail, title, option, description, amount, deadline } = campaign;
    return (
        <div className="border w-full">
            {/* Thumbnail */}
            <img
                src={thumbnail}
                alt={title}
                className="w-full p-3 h-48 object-cover"
            />
            <div className="p-4">
                {/* Title */}
                <h2 className="text-xl font-semibold mb-2">{title}</h2>

                {/* Campaign Type */}
                <p className="text-sm text-gray-600 mb-2">
                    <strong>Type:</strong> {option}
                </p>

                {/* Description */}
                <p className="text-gray-700 text-sm truncate mb-2">
                    {description}
                </p>

                {/* Amount */}
                <p className="text-green-600 font-bold text-sm mb-2">
                    <strong>Minimum Donation:</strong> ${amount}
                </p>

                {/* Deadline */}
                <p className="text-gray-600 text-sm mb-2">
                    <strong>Deadline:</strong> {new Date(deadline).toLocaleDateString()}
                </p>

                <NavLink to={`/detailsPage/${campaign._id}`}> <button className="px-5 py-2 bg-[#2ecc71] hover:bg-[#32b96b]">See More</button></NavLink>
            </div>
        </div>
    );
};

CampaignCard.propTypes = {
    campaign: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        option: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        deadline: PropTypes.string.isRequired,
    }).isRequired,
};

export default CampaignCard;