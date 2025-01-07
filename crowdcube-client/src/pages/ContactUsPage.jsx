
// const ContactUsPage = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default ContactUsPage;

const ContactUsPage = () => {
    return (
        <div className="py-10 px-5 bg-gray-100 text-gray-800">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-5 text-[#2ecc71] text-center">Contact Us</h1>
                <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter your name" 
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ecc71]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ecc71]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea 
                            rows="4" 
                            placeholder="Write your message here" 
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ecc71]"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full py-2 bg-[#2ecc71] text-white font-semibold rounded-lg hover:bg-[#32b96b] transition">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUsPage;
