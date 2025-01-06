import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../../provider/AuthProvider";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { CiLight, CiDark } from "react-icons/ci";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"; 

const Navbar = () => {
    const { user, handleLogout , isDarkMode, toggleTheme } = useContext(authContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    return (
        <div className={`border-b ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
            <div className="container mx-auto px-4 flex justify-between items-center py-5">
                <NavLink to="/" className="font-semibold text-2xl">Crowd<span className={isDarkMode ? "text-[#2ecc71]" : "text-green-600"}>cube</span></NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-4 items-center">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-[#2ecc71] font-semibold" : ""}>Home</NavLink>
                    <NavLink to="/AllCampaign" className={({ isActive }) => isActive ? "text-[#2ecc71] font-semibold" : ""}>All Campaign</NavLink>
                    <NavLink to="/AddNewCampaign" className={({ isActive }) => isActive ? "text-[#2ecc71] font-semibold" : ""}>Add New Campaign</NavLink>
                    <NavLink to="/MyCampaign" className={({ isActive }) => isActive ? "text-[#2ecc71] font-semibold" : ""}>My Campaign</NavLink>
                    <NavLink to="/MyDonation" className={({ isActive }) => isActive ? "text-[#2ecc71] font-semibold" : ""}>My Donations</NavLink>
                </div>

                {/* Theme Toggle Button */}
                <button id="theme-toggle-button" onClick={toggleTheme} className="px-2 py-2 bg-[#2ecc71] text-white rounded-full hover:bg-[#32b96b] transition">{isDarkMode ? <CiLight size={20}/> : <CiDark size={20} /> }</button>
                
                <Tooltip
                    anchorId="theme-toggle-button"
                    content={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    place="right"
                    style={{ backgroundColor: isDarkMode ? "#2ecc71" : "#555", color: "white" }}
                />

                {/* Auth Section */}
                <div className="hidden md:flex items-center gap-4">
                    {user ? (
                        <div className="relative group flex items-center">
                            <img className="w-10 h-10 rounded-full cursor-pointer" src={user.photoURL} alt="User Profile"/>
                            <div className={`absolute top-12 -right-12 shadow-md rounded p-4 flex flex-col gap-2 items-start w-40 hidden group-hover:flex z-50 ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-700"}`}>
                                <span className="whitespace-normal break-words">{user.displayName}</span>
                                <button onClick={handleLogout} className="text-white bg-[#2ecc71] px-4 py-2 rounded hover:bg-[#1ebb9e] transition">Logout</button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex gap-3 items-center">
                            <NavLink to="/Register" className={({ isActive }) => isActive ? "px-5 py-2 border bg-[#2ecc71] text-white rounded" : "px-5 py-2 border bg-white text-gray-700 rounded"}>Register</NavLink>
                            <NavLink to="/login" className={({ isActive }) => isActive ? "px-5 py-2 border bg-[#2ecc71] text-white rounded" : "px-5 py-2 border bg-white text-gray-700 rounded"}>Log in</NavLink>
                        </div>
                    )}
                </div>

                {/* Hamburger Menu for Mobile */}
                <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <RxCross2 size={25} /> : <HiOutlineMenuAlt3 size={25} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className={`md:hidden px-4 py-3 space-y-2 shadow-md ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-[#2ecc71] font-semibold block" : "block"}>Home</NavLink>
                    <NavLink to="/AllCampaign" className={({ isActive }) => isActive ? "text-[#2ecc71] font-semibold block" : "block"}>All Campaign</NavLink>
                    <NavLink to="/AddNewCampaign" className={({ isActive }) => isActive ? "text-[#2ecc71] font-semibold block" : "block"}>Add New Campaign</NavLink>
                    <NavLink to="/MyCampaign" className={({ isActive }) => isActive ? "text-[#2ecc71] font-semibold block" : "block"}>My Campaign</NavLink>
                    <NavLink to="/MyDonation" className={({ isActive }) => isActive ? "text-[#2ecc71] font-semibold block" : "block"}>My Donations</NavLink>
                    {user ? (
                        <div className="mt-3">
                            <img className="w-10 h-10 rounded-full cursor-pointer" src={user.photoURL} alt="User Profile"/>
                            <p>{user.displayName}</p>
                            <button onClick={handleLogout} className="w-full text-white bg-[#2ecc71] px-4 py-2 rounded hover:bg-[#1ebb9e] transition">Logout</button>
                        </div>
                    ) : (
                        <div className="mt-3">
                            <NavLink to="/Register" className={({ isActive }) => isActive ? "w-full px-4 py-2 border bg-[#2ecc71] text-white mb-2 rounded" : "w-full px-4 py-2 border bg-white text-gray-700 mb-2 rounded"}>Register</NavLink>
                            <NavLink to="/login" className={({ isActive }) => isActive ? "w-full px-4 py-2 border bg-[#2ecc71] text-white rounded" : "w-full px-4 py-2 border bg-white text-gray-700 rounded"}>Log in</NavLink>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;
