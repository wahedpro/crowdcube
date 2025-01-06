import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { TbCategory } from "react-icons/tb";
import { authContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const DetailsPage = () => {
    const campaign = useLoaderData();
    const { user } = useContext(authContext);
    const { displayName: loginUserName, email: loginUserEmail } = user;
    const { thumbnail, title, option, description, amount, deadline, userName, userEmail } = campaign;

    const submitDonateInfo = (event) => {
        event.preventDefault();

        // Check if the deadline has passed
        const currentDate = new Date();
        const campaignDeadline = new Date(deadline);

        if (campaignDeadline < currentDate) {
            // Show a message/toast/modal if the deadline is over
            Swal.fire({
                title: "Deadline Passed",
                text: "You cannot donate to this campaign because the deadline has passed.",
                icon: "error",
            });
            return; // Exit the function
        }

        // Create the donation info object
        const donateeInfo = {
            thumbnail,
            title,
            option,
            description,
            amount,
            deadline,
            userName,
            userEmail,
            loginUserName,
            loginUserEmail,
        };

        console.log(donateeInfo);

        // Send data to the server
        fetch("https://crowdcube-server-five.vercel.app/campaignInfo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(donateeInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Donate successfully!",
                        icon: "success",
                    });
                }
            })
            .catch((error) => {
                console.error("Error:", error); // Handle any network errors
            });
    };

    return (
        <div className="lg:flex gap-5 py-10">
            {/* Campaign Image */}
            <img src={thumbnail} alt={campaign.title} className="w-full max-w-lg rounded-lg mb-6" />

            {/* Campaign Details */}
            <div className="flex flex-col justify-evenly">
                <div className="flex items-center gap-1 border py-2">
                    <TbCategory size={25} />
                    <p className="text-xl">{option}</p>
                </div>
                <h1 className="text-3xl font-bold">{title}</h1>
                <h3 className="text-xl font-semibold">
                    <strong>Description:</strong> {description}
                </h3>
                <h3 className="text-xl font-semibold">
                    <strong>Amount:</strong> ${amount}
                </h3>
                <h3 className="text-xl font-semibold">
                    <strong>Deadline:</strong> {new Date(deadline).toLocaleDateString()}
                </h3>
                <div className="border p-3">
                    <p className="text-lg font-semibold">Created By:</p>
                    <p>{userName}</p>
                    <p>{userEmail}</p>
                </div>
                <button onClick={submitDonateInfo} className="px-5 py-2 rounded bg-[#2ecc71] hover:bg-[#32b96b]">Donate</button>
            </div>
        </div>
    );
};

export default DetailsPage;