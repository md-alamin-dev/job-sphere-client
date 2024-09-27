import { useState } from "react";

const Banner = () => {
    // Sample tags for demonstration, these will be dynamically updated from the backend or user input
    const [searchTags, setSearchTags] = useState([
        "React Developer",
        "UI/UX Designer",
        "Project Manager",
        "Data Scientist",
        "Backend Engineer",
        "Remote",
        "Java Developer",
        "Full-Stack Developer",
        "Graphic Designer",
        "DevOps Engineer"
    ]);

    return (
        <div
            className="relative hero min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: "url(https://i.ibb.co/pjP8K0y/banner2.png)",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

            {/* Content */}
            <div className="max-w-lg md:max-w-5xl relative z-20 flex flex-col items-center justify-center text-center text-white p-4 md:p-0">
                
                <div className="">

                    {/* Title */}
                    <h1 className="text-3xl md:text-6xl font-bold mb-5">
                        Your Next Career Move <br /> Starts Here
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg mb-8">
                        Search for job opportunities, explore categories, and apply for remote or on-site positions.
                    </p>

                    {/* Search Functionality */}
                    <div className="w-full mx-auto">
                        
                        <form className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">

                            {/* Job Title or Keywords */}
                            <input
                                type="text"
                                placeholder="Job title or keywords"
                                className="input input-bordered w-full md:w-1/4 px-4 py-2 rounded-lg shadow-sm text-gray-900"
                                aria-label="Job Title or Keywords"
                            />

                            {/* Categories */}
                            <div className="relative w-full md:w-1/4">
                                <input
                                    list="categories"
                                    type="text"
                                    placeholder="Categories"
                                    className="input input-bordered w-full px-4 py-2 rounded-lg shadow-sm text-gray-900"
                                    aria-label="Categories"
                                />
                                <datalist id="categories">
                                    <option value="Tech"></option>
                                    <option value="Design"></option>
                                    <option value="Marketing"></option>
                                    <option value="Web Design"></option>
                                    <option value="Web Developer"></option>
                                    <option value="React Developer"></option>
                                    <option value="Other"></option>
                                </datalist>
                            </div>

                            {/* Location or Remote Combobox */}
                            <div className="relative w-full md:w-1/4">
                                <input
                                    list="locations"
                                    type="text"
                                    placeholder="Location or Remote"
                                    className="input input-bordered w-full px-4 py-2 rounded-lg shadow-sm text-gray-900"
                                    aria-label="Location or Remote"
                                />
                                <datalist id="locations">
                                    <option value="Remote"></option>
                                    <option value="New York, USA"></option>
                                    <option value="London, UK"></option>
                                    <option value="Berlin, Germany"></option>
                                    <option value="Sydney, Australia"></option>
                                    <option value="Tokyo, Japan"></option>
                                </datalist>
                            </div>

                            {/* Search Button */}
                            <button
                                type="submit"
                                className="w-full md:w-1/5 text-lg font-medium px-6 py-3 rounded-lg shadow-lg
                                bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] hover:from-[#feb47b] hover:to-[#ff7e5f] ... transition-all duration-300"
                            >
                                Search
                            </button>
                        </form>

                        {/* Recently Searched Tags */}
                        <div className="mx-10 mt-6">

                            <p className="text-lg font-medium mb-2">Recent Searches:</p>

                            <div className="flex flex-wrap gap-2 justify-center">

                                {searchTags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="hover:bg-[#feb47b] px-2 py-1 border border-[#ff7e5f] text-white hover:text-black text-xs rounded-lg"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Banner;
