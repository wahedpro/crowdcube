import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { useContext } from "react";
import { authContext } from "../../provider/AuthProvider";

const Footer = () => {
    const { isDarkMode } = useContext(authContext); 
    return (
        <div
            className={`py-8 px-5 ${
                isDarkMode ? "bg-gray-800 text-white border-t" : "bg-[#2ecc71] text-white"
            }`}
        >
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* website logo */}
                <div className="flex flex-col items-center md:items-start ">
                    <h2 className="font-semibold text-2xl">CrowdCube</h2>
                    <p>Empowering dreams through collective support, one campaign at a time</p>
                </div>
                {/* Links Section */}
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-xl mb-4 font-bold">Links</h1>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms Of Service</a>
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Contact</a>
                    <a href="#" className="hover:underline">Support Center</a>
                </div>

                {/* Social Media Section */}
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-xl mb-4 font-bold">Contact With Us</h1>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-gray-200"><FaFacebook size={25} /></a>
                        <a href="#" className="hover:text-gray-200"><FaTwitter size={25} /></a>
                        <a href="#" className="hover:text-gray-200"><FaInstagram size={25} /></a>
                        <a href="#" className="hover:text-gray-200"><FaYoutube size={25} /></a>
                    </div>
                </div>

                {/* Subscribe Section */}
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-xl mb-4 font-bold">Subscribe</h1>
                    <input
                        className={`py-2 px-3 w-full max-w-xs border mb-4 focus:outline-none ${
                            isDarkMode
                                ? "bg-gray-700 text-white focus:ring-gray-400"
                                : "bg-white text-gray-900 focus:ring-white"
                        }`}
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                    />
                    <button className="bg-white text-[#2ecc71] px-5 py-2 hover:bg-gray-200">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;