import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile, } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import PropTypes from "prop-types";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const googleAuthProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // -------------------------
    // Toggle Theme
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);
    // ------------------------

    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const handleLoginWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider);
    };

    const handleManageProfile = (name, images) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: images,
        });
    };

    const handleLogout = () => {
        return signOut(auth);
    };

    const authInfo = {
        user,
        setUser,
        handleRegister,
        handleLogin,
        handleLoginWithGoogle,
        handleManageProfile,
        handleLogout,
        loading,
        isDarkMode, 
        toggleTheme
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#2ecc71]"></div>
            </div>
        );
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
