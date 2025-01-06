import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2'

const AddNewCampaign = () => {
    const { user } = useContext(authContext);
    const handleAddNewCampaign = even => {
        even.preventDefault();
        const thumbnail = even.target.thumbnail.value;
        const title = even.target.title.value;
        const option = even.target.option.value;
        const description = even.target.description.value;
        const amount = even.target.amount.value;
        const deadline = even.target.deadline.value;
        const userEmail = even.target.userEmail.value;
        const userName = even.target.userName.value;

        const newCampaign = { thumbnail, title, option, description, amount, deadline, userEmail, userName }

        // send data to the server
        fetch('https://crowdcube-server-five.vercel.app/addCampaign', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Corrected header key
            },
            body: JSON.stringify(newCampaign), // Sending the newCampaign object as JSON
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: "Good job!",
                        text: "Campaign added successfully!",
                        icon: "success",
                    });
                    // Clear all fields using form reset
                    even.target.reset();
                }
            })
            .catch((error) => {
                console.error('Error:', error); // Handle any network errors
            });
    }
    return (
        <div className="w-[80%] lg:w-[50%] mx-auto py-10">
            <h1 className="text-2xl font-semibold text-center mb-5">Add New Campaign</h1>

            <form onSubmit={handleAddNewCampaign} className="flex flex-col">
                {/* Image/Thumbnail */}
                <label>Image/Thumbnail URL</label>
                <input className="p-3 border mb-5" name="thumbnail" type="text" placeholder="Enter image URL" required />

                {/* Campaign Title */}
                <label>Campaign Title</label>
                <input className="p-3 border mb-5" name="title" type="text" placeholder="Enter campaign title" required />

                {/* Campaign Type (Dropdown) */}
                <label>Campaign Type</label>
                <select className="p-3 border mb-5" name="option" required >
                    <option value="personal issue">Personal Issue</option>
                    <option value="startup">Startup</option>
                    <option value="business">Business</option>
                    <option value="creative ideas">Creative Ideas</option>
                </select>

                {/* Description */}
                <label>Description</label>
                <textarea className="p-3 border mb-5" name="description" rows="2" placeholder="Enter campaign description" required />

                {/* Minimum Donation Amount */}
                <label>Minimum Donation Amount ($)</label>
                <input className="p-3 border mb-5" name="amount" type="number" placeholder="Enter minimum donation" required />

                {/* Deadline */}
                <label>Deadline</label>
                <input className="p-3 border mb-5" name="deadline" type="date" required />

                {/* User Email (Read Only) */}
                <label>User Email</label>
                <input className="p-3 border mb-5" name="userEmail" value={user.email} type="email" readOnly />

                {/* User Name (Read Only) */}
                <label>User Name</label>
                <input className="p-3 border mb-5" name="userName" value={user.displayName} type="text" readOnly />

                <button className="text-white bg-[#18947d] px-4 py-2 hover:bg-[#1ebb9e]"> add </button>
            </form>
        </div>
    );
};

export default AddNewCampaign;