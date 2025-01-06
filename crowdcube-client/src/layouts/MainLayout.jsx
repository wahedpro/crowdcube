import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { authContext } from "../provider/AuthProvider";
import { useContext } from "react";

const MainLayout = () => {
    const { isDarkMode } = useContext(authContext);

    return (
        <div className={`border-b ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
            <div className="w-[95%] lg:w-[85%] mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;