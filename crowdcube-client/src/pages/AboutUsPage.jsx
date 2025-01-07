const AboutUsPage = () => {
    return (
        <div className="py-10 px-5 bg-gray-100 text-gray-800">
            <div className="container mx-auto text-center">
                {/* Main Heading */}
                <h1 className="text-5xl font-bold mb-10 text-[#2ecc71]">
                    About Us
                </h1>

                {/* Introduction Section */}
                <div className="max-w-3xl mx-auto mb-10">
                    <p className="text-lg leading-8">
                        At <span className="font-semibold">Crowdcube</span>, we
                        empower individuals and organizations to turn their
                        dreams into reality. Our platform bridges the gap
                        between ideas and execution by providing a space for
                        crowdfunding campaigns that inspire change, foster
                        creativity, and solve real-world challenges.
                    </p>
                </div>

                {/* Vision and Mission Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                    {/* Vision */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold text-[#2ecc71] mb-4">
                            Our Vision
                        </h2>
                        <p className="text-lg leading-7">
                            To create a world where anyone, anywhere, can
                            achieve their goals through the power of community
                            support and innovation.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold text-[#2ecc71] mb-4">
                            Our Mission
                        </h2>
                        <p className="text-lg leading-7">
                            To connect dreamers, changemakers, and creators with
                            the resources and support they need to bring their
                            campaigns to life and make an impact.
                        </p>
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="bg-[#2ecc71] text-white py-12 px-8 rounded-lg mb-16">
                    <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="text-4xl font-bold">5,000+</h3>
                            <p className="text-lg">Campaigns Funded</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold">$10M+</h3>
                            <p className="text-lg">Funds Raised</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold">200K+</h3>
                            <p className="text-lg">Supporters Worldwide</p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-10 text-[#2ecc71]">
                        Meet Our Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Team Member */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-bold">Emma Johnson</h3>
                            <p className="text-gray-600">CEO & Founder</p>
                        </div>
                        {/* Team Member */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-bold">Liam Smith</h3>
                            <p className="text-gray-600">CTO</p>
                        </div>
                        {/* Team Member */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-bold">Sophia Lee</h3>
                            <p className="text-gray-600">Marketing Lead</p>
                        </div>
                    </div>
                </div>

                {/* Call-to-Action */}
                <div className="bg-gray-200 py-8 px-5 rounded-lg">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Join Our Journey
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Become part of the <span className="font-semibold">Crowdcube</span> family and help us empower more creators, changemakers, and dreamers. Start your journey today!
                    </p>
                    <button className="px-6 py-3 bg-[#2ecc71] text-white font-bold rounded-lg hover:bg-[#32b96b] transition">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;