
const TopDonors = () => {
    return (
        <div className="py-10">
            <div className="text-center pb-10">
                <h1 className="text-3xl font-bold">Our Top Donors</h1>
                <p className="w-[90%] lg:w-[60%] mx-auto">Explore the individuals and organizations who have gone above and beyond to support our cause.</p>
            </div>
            <div className="w-[90%] lg:w-full mx-auto grid grid-cols-1 md:md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="relative px-8 py-5 border">
                    <h1 className="text-2xl font-semibold">Alice Johnson</h1>
                    <p>$150000</p>
                    <p className="absolute -top-4 -left-4 bg-[#2ecc71] text-xl px-4 py-2 rounded-full">1</p>
                </div>
                <div className="relative px-8 py-5 border">
                    <h1 className="text-2xl font-semibold">James Marshall</h1>
                    <p>$135000</p>
                    <p className="absolute -top-4 -left-4 bg-[#2ecc71] text-xl px-4 py-2 rounded-full">2</p>
                </div>
                <div className="relative px-8 py-5 border">
                    <h1 className="text-2xl font-semibold">Bob Smith all</h1>
                    <p>$120000</p>
                    <p className="absolute -top-4 -left-4 bg-[#2ecc71] text-xl px-4 py-2 rounded-full">3</p>
                </div>
                <div className="relative px-8 py-5 border">
                    <h1 className="text-2xl font-semibold">Charlie Lee Co</h1>
                    <p>$100000</p>
                    <p className="absolute -top-4 -left-4 bg-[#2ecc71] text-xl px-4 py-2 rounded-full">4</p>
                </div>
            </div>
        </div>
    );
};

export default TopDonors;