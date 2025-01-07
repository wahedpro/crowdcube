const SupportPage = () => {
    return (
        <div className="py-10 px-5 bg-gray-100 text-gray-800">
            {/* Hero Section */}
            <div className="bg-[#2ecc71] text-white py-12 px-5 rounded-lg mb-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-5">Support</h1>
                    <p className="text-lg leading-relaxed">
                        We are here to help! Whether you are running a campaign, making a donation, 
                        or just exploring our platform, our support team has your back.
                    </p>
                </div>
            </div>

            {/* Support Options */}
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                    How Can We Assist You?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: FAQs */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                        <h3 className="text-2xl font-semibold text-[#2ecc71] mb-4">FAQs</h3>
                        <p className="text-lg text-gray-600 mb-4">
                            Browse through our frequently asked questions to find quick answers.
                        </p>
                        <button className="px-5 py-2 bg-[#2ecc71] text-white rounded-lg hover:bg-[#32b96b] transition">
                            Visit FAQs
                        </button>
                    </div>

                    {/* Card 2: Email Support */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                        <h3 className="text-2xl font-semibold text-[#2ecc71] mb-4">Email Support</h3>
                        <p className="text-lg text-gray-600 mb-4">
                            Got questions? Reach out to us via email, and we’ll get back to you promptly.
                        </p>
                        <p className="font-semibold text-gray-800">
                            support@crowdcube.com
                        </p>
                        <button className="mt-4 px-5 py-2 bg-[#2ecc71] text-white rounded-lg hover:bg-[#32b96b] transition">
                            Email Us
                        </button>
                    </div>

                    {/* Card 3: Live Chat */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                        <h3 className="text-2xl font-semibold text-[#2ecc71] mb-4">Live Chat</h3>
                        <p className="text-lg text-gray-600 mb-4">
                            Need immediate help? Start a live chat with our support team now.
                        </p>
                        <button className="px-5 py-2 bg-[#2ecc71] text-white rounded-lg hover:bg-[#32b96b] transition">
                            Start Chat
                        </button>
                    </div>
                </div>
            </div>

            {/* Call-to-Action */}
            <div className="bg-gray-200 py-10 px-5 rounded-lg mt-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-5">
                        Still Need Help?
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        If you can not find the answers you are looking for, do not hesitate to contact us.
                    </p>
                    <button className="px-6 py-3 bg-[#2ecc71] text-white font-bold rounded-lg hover:bg-[#32b96b] transition">
                        Contact Support
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;