import { useContext, useState } from "react";
import { authContext } from "../provider/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const RegisterPage = () => {
    const { handleRegister, handleManageProfile } = useContext(authContext);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.photoURL.value;
        const password = e.target.password.value;

        // Password Validation
        const validationErrors = [];
        if (password.length < 6) {
            validationErrors.push("Password must be at least 6 characters long.");
        }
        if (!/[A-Z]/.test(password)) {
            validationErrors.push("Password must include at least one uppercase letter.");
        }
        if (!/[a-z]/.test(password)) {
            validationErrors.push("Password must include at least one lowercase letter.");
        }
        if (validationErrors.length > 0) {
            setError(validationErrors.join(" "));
            return;
        }

        // Register User and Update Profile
        handleRegister(email, password)
            .then((res) => {
                console.log(res.user);
                return handleManageProfile(name, image);
            })
            .then(() => {
                toast.success("Successfully registered!");
                navigate("/");
            })
            .catch((err) => {
                setError(err.message || "Failed to register. Please try again.");
            });
    };

    return (
        <div className="w-[95%] lg:w-[50%] mx-auto my-10 py-10 border px-5">
            <h1 className="text-2xl font-semibold text-center mb-5">Registration</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label>Name</label>
                <input
                    className="p-2 border mb-5"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                />
                <label>Email</label>
                <input
                    className="p-2 border mb-5"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                />
                <label>Photo URL</label>
                <input
                    className="p-2 border mb-5"
                    type="text"
                    name="photoURL"
                    placeholder="Enter your photo url"
                    required
                />
                <label>Password</label>
                <div className="relative">
                    <input
                        className="p-3 border mb-5 w-full"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        required
                    />
                    <button
                        type="button"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-4 bottom-5 flex items-center text-gray-500"
                    >
                        {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
                    </button>
                </div>
                <button className="text-white bg-[#2ecc71] px-4 py-2 hover:bg-[#32b96b] transition mb-3">
                    Register
                </button>
            </form>
            {/* Show Error */}
            {error && <p className="text-red-500 mb-5">{error}</p>}

            <p>
                Already have an account?{" "}
                <NavLink to="/login" className="text-blue-400">
                    Login Now
                </NavLink>
            </p>
        </div>
    );
};

export default RegisterPage;
