
const CategoryCard = () => {

    return (

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">

            <div className="relative card bg-white items-center border rounded-md pb-6 shadow-lg overflow-hidden group">

                {/* Background image - hidden initially and appears on hover */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-500"

                    style={{ backgroundImage: 'url("https://i.ibb.co.com/smZL6Qx/Programming-Coding.png")' }}>
                </div>

                {/* Overlay for background image, visible on hover */}
                <div className="absolute inset-0 bg-black opacity-0  group-hover:opacity-50 transition-all duration-1000 "></div>

                {/* Content */}
                <div className="relative z-10 bg-slate-200 border w-28 rounded-lg mt-8 p-2 shadow-xl">
                    <img
                        src="https://i.ibb.co.com/smZL6Qx/Programming-Coding.png"
                        alt="Programming & Coding"
                        className="rounded-xl" />
                </div>

                <div className="relative z-10 text-center mt-6 space-y-2">

                    <h2 className="card-title text-black group-hover:text-white transition-colors duration-300">
                        Programming & Coding
                    </h2>

                    <p className="text-black group-hover:text-white transition-colors duration-300">55 Jobs</p>

                    <button className="px-3 py-1 rounded-lg text-black font-medium group-hover:text-white group-hover:bg-[#ff7e5f] transition-colors duration-300">
                        Apply Jobs!
                    </button>

                </div>

            </div>

            <div className="relative card bg-white items-center border rounded-md pb-6 shadow-lg overflow-hidden group">

                {/* Background image - hidden initially and appears on hover */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-500"

                    style={{ backgroundImage: 'url("https://i.ibb.co.com/smZL6Qx/Programming-Coding.png")' }}>
                </div>

                {/* Overlay for background image, visible on hover */}
                <div className="absolute inset-0 bg-black opacity-0  group-hover:opacity-50 transition-all duration-1000 "></div>

                {/* Content */}
                <div className="relative z-10 bg-slate-200 border w-28 rounded-lg mt-8 p-2 shadow-xl">
                    <img
                        src="https://i.ibb.co.com/smZL6Qx/Programming-Coding.png"
                        alt="Programming & Coding"
                        className="rounded-xl" />
                </div>

                <div className="relative z-10 text-center mt-6 space-y-2">

                    <h2 className="card-title text-black group-hover:text-white transition-colors duration-300">
                        Programming & Coding
                    </h2>

                    <p className="text-black group-hover:text-white transition-colors duration-300">55 Jobs</p>

                    <button className="px-3 py-1 rounded-lg text-black font-medium group-hover:text-white group-hover:bg-[#ff7e5f] transition-colors duration-300">
                        Apply Jobs!
                    </button>

                </div>

            </div>

            <div className="relative card bg-white items-center border rounded-md pb-6 shadow-lg overflow-hidden group">

                {/* Background image - hidden initially and appears on hover */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-500"

                    style={{ backgroundImage: 'url("https://i.ibb.co.com/smZL6Qx/Programming-Coding.png")' }}>
                </div>

                {/* Overlay for background image, visible on hover */}
                <div className="absolute inset-0 bg-black opacity-0  group-hover:opacity-50 transition-all duration-1000 "></div>

                {/* Content */}
                <div className="relative z-10 bg-slate-200 border w-28 rounded-lg mt-8 p-2 shadow-xl">
                    <img
                        src="https://i.ibb.co.com/smZL6Qx/Programming-Coding.png"
                        alt="Programming & Coding"
                        className="rounded-xl" />
                </div>

                <div className="relative z-10 text-center mt-6 space-y-2">

                    <h2 className="card-title text-black group-hover:text-white transition-colors duration-300">
                        Programming & Coding
                    </h2>

                    <p className="text-black group-hover:text-white transition-colors duration-300">55 Jobs</p>

                    <button className="px-3 py-1 rounded-lg text-black font-medium group-hover:text-white group-hover:bg-[#ff7e5f] transition-colors duration-300">
                        Apply Jobs!
                    </button>

                </div>

            </div>

            <div className="relative card bg-white items-center border rounded-md pb-6 shadow-lg overflow-hidden group">

                {/* Background image - hidden initially and appears on hover */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-500"

                    style={{ backgroundImage: 'url("https://i.ibb.co.com/smZL6Qx/Programming-Coding.png")' }}>
                </div>

                {/* Overlay for background image, visible on hover */}
                <div className="absolute inset-0 bg-black opacity-0  group-hover:opacity-50 transition-all duration-1000 "></div>

                {/* Content */}
                <div className="relative z-10 bg-slate-200 border w-28 rounded-lg mt-8 p-2 shadow-xl">
                    <img
                        src="https://i.ibb.co.com/smZL6Qx/Programming-Coding.png"
                        alt="Programming & Coding"
                        className="rounded-xl" />
                </div>

                <div className="relative z-10 text-center mt-6 space-y-2">

                    <h2 className="card-title text-black group-hover:text-white transition-colors duration-300">
                        Programming & Coding
                    </h2>

                    <p className="text-black group-hover:text-white transition-colors duration-300">55 Jobs</p>

                    <button className="px-3 py-1 rounded-lg text-black font-medium group-hover:text-white group-hover:bg-[#ff7e5f] transition-colors duration-300">
                        Apply Jobs!
                    </button>

                </div>

            </div>
        </div>
    );
};

export default CategoryCard;