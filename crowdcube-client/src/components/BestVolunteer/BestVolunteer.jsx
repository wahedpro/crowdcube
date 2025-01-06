
const BestVolunteer = () => {
    return (
        <div className="py-10">
            <div className="text-center pb-10">
                <h1 className="text-3xl font-bold">Our Best Volunteer</h1>
                <p className="w-[90%] lg:w-[60%] mx-auto">We envision transformed a new world. We try to restore through donation, revoke the poverty, make a new era.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="flex flex-col py-5 items-center justify-center border">
                    <img className="w-[80%]" src="https://i.ibb.co.com/5BDKYRc/1.jpg" alt="" />
                    <h1 className="text-2xl font-semibold">Wahidul Islam</h1>
                    <p>Form: Bangaldesh</p>
                </div>
                <div className="flex flex-col py-5 items-center justify-center border">
                    <img className="w-[80%]" src="https://i.ibb.co.com/0sdCLy9/2.jpg" alt="" />
                    <h1 className="text-2xl font-semibold">Sarah Khan</h1>
                    <p>Form: United Kingdom</p>
                </div>
                <div className="flex flex-col items-center justify-center border py-5">
                    <img className="w-[80%]" src="https://i.ibb.co.com/pn13Rpb/3.jpg" alt="" />
                    <h1 className="text-2xl font-semibold">Carlos Ruiz</h1>
                    <p>Form: Spain</p>
                </div>
            </div>
        </div>
    );
};

export default BestVolunteer;