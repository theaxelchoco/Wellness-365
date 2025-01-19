import React from "react";

const JournalPage: React.FC = () => {
    return (
        <div className="bg-[#FFFFF5] min-h-screen flex items-center justify-center p-4">
            <div className="bg-[#FFF5D7] p-6 shadow-md rounded-lg w-full max-w-4xl">
                <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
                    Moments of the Year
                </h1>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">January</h2>
                    <ul className="space-y-4">
                        {/* Example Journal Entries */}
                        <li className="bg-[#FDCD93] p-4 rounded-md shadow-sm">
                            <span className="font-bold">1.</span> I met Sally today. We had a nice meal.
                        </li>
                        <li className="bg-[#FDCD93] p-4 rounded-md shadow-sm">
                            <span className="font-bold">2.</span> Bought a new mobile—feels great to upgrade!
                        </li>
                        <li className="bg-[#FDCD93] p-4 rounded-md shadow-sm">
                            <span className="font-bold">3.</span> Went for a walk in the park—felt so peaceful.
                        </li>
                        <li className="bg-[#FDCD93] p-4 rounded-md shadow-sm">
                            <span className="font-bold">4.</span> Treated myself to a cozy new sweater.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default JournalPage;