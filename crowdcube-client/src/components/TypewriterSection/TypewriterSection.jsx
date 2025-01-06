import { Typewriter } from "react-simple-typewriter";

const TypewriterSection = () => {
    return (
        <div className="bg-gray-100 text-center mt-5 py-10">
            <h1 className="text-4xl text-gray-900 font-bold mb-4">
                Welcome to <span className="text-[#2ecc71]">Crowdcube</span>
            </h1>
            <h2 className="text-2xl font-medium text-gray-900">
                <Typewriter
                    words={["Start Your Campaign Today!", "Join Our Community.", "Make an Impact."]}
                    loop={5} 
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h2>
            <p className="mt-5 text-gray-600">
                Crowdcube is here to help you achieve your dreams. Launch your campaign now!
            </p>
        </div>
    );
};

export default TypewriterSection;
