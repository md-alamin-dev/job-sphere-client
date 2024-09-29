import { BiSupport } from "react-icons/bi";
import { BsPersonBoundingBox, BsPersonVcard, BsPersonWorkspace } from "react-icons/bs";
import { RiCommunityLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const TrustedAgency = () => {

    return (

        <div className="mt-20 mb-48">
            {/* Container div */}
            <div className="relative min-h-screen bg-no-repeat bg-cover"
                style={{ backgroundImage: 'url("https://i.ibb.co/xgC1QM5/bg-trusted-agency.png")' }}>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

                {/* Content Div */}
                <div className="absolute z-50 flex flex-col md:flex-row justify-between items-center md:top-20 md:left-10 md:right-10 md:gap-10">

                    {/* Left side div */}
                    <div className="w-full md:w-5/12 text-white ">

                        <p className="font-medium italic">More than 20,000
                            <span className="text-[#ff7e5f]"> Happy Clients</span>
                        </p>

                        <h3 className="text-2xl md:text-5xl font-medium mt-4 tracking-normal leading-10">The Most Trusted and Professional Recruitment <br />
                            <span className="text-[#ff7e5f] tracking-wider">Agency</span>
                        </h3>

                        <Link to="/hiring">
                            <button className="mt-10 px-3 py-1 rounded-lg border border-[#ff7e5f] bg-black bg-opacity-30 hover:bg-[#ff7e5f] text-white">
                                Hiring Now!
                            </button>
                        </Link>
                    </div>

                    {/* Middle div */}
                    <div className="w-full md:w-1/3 h-80 py-3 pr-4">
                        <div className="bg-black bg-opacity-40 border rounded p-4 mx-4 h-full">

                            <div className="bg-slate-100 h-full bg-opacity-20 text-white flex flex-col items-center rounded ">

                                <span className="text-6xl text-[#ff7e5f] mt-12 mb-8">
                                    <BsPersonBoundingBox />
                                </span>

                                <p className="text-4xl font-semibold mb-4">5685</p>

                                <p>Happy Clients</p>

                            </div>
                        </div>
                    </div>

                    {/* Right side div */}
                    <div className="w-full md:w-1/3 text-white flex flex-col">

                        <p>The Consulting Experience and Investment Plan progress bars showcase trusted professionals with expertise in strategic consulting and financial planning, reflecting our commitment to connecting clients with top-tier talent in these fields.</p>


                        <div className="mt-10">
                            <div className="flex justify-between items-center mb-1 font-medium">
                                <span>Consulting Experience</span>
                                <span>80%</span>
                            </div>

                            <div className="bg-gray-300 rounded h-2">
                                <div
                                    className="bg-[#ff7e5f] text-primary-content text-center text-sm font-medium leading-6 h-full rounded"
                                    style={{ width: '80%' }}
                                    role="progressbar"
                                    aria-valuenow="70"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="flex justify-between items-center mb-1 font-medium">
                                <span>Investment Plan</span>
                                <span>70%</span>
                            </div>

                            <div className="bg-gray-300 rounded h-2">
                                <div
                                    className="bg-[#ff7e5f] text-primary-content text-center text-sm font-medium leading-6 h-full rounded"
                                    style={{ width: '70%' }}
                                    role="progressbar"
                                    aria-valuenow="70"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Section Bottom Part */}

                <div className="absolute z-50 flex flex-col md:flex-row justify-between items-center md:left-10 md:right-10 md:-bottom-32 bg-white border-t-8 border-[#ff7e5f]">

                    <div className="p-10 w-1/4 shadow-md border-r">
                        <div className="text-white flex flex-col items-center rounded ">
                            <span className="text-6xl text-[#ff7e5f] mb-8">
                                <BsPersonWorkspace />
                            </span>

                            <p className="text-4xl text-[#111922] font-semibold mb-4">2580</p>

                            <p className="text-[#919191]">No. of Candidates Hired</p>

                        </div>
                    </div>

                    <div className="p-10 w-1/4 shadow-md border-r">
                        <div className="text-white flex flex-col items-center rounded ">
                            <span className="text-6xl text-[#ff7e5f] mb-8">
                                <BsPersonVcard />
                            </span>

                            <p className="text-4xl text-[#111922] font-semibold mb-4">315</p>

                            <p className="text-[#919191]">Professional Employee</p>

                        </div>
                    </div>

                    <div className="p-10 w-1/4 shadow-lg border-r">
                        <div className="text-white flex flex-col items-center rounded ">
                            <span className="text-6xl text-[#ff7e5f] mb-8">
                                <BiSupport />
                            </span>

                            <p className="text-4xl text-[#111922] font-semibold mb-4">24/7</p>

                            <p className="text-[#919191]">Comprehensive Support</p>

                        </div>
                    </div>

                    <div className="p-10 w-1/4 shadow-md">
                        <div className="text-white flex flex-col items-center rounded ">
                            <span className="text-6xl text-[#ff7e5f] mb-8">
                                <RiCommunityLine />
                            </span>

                            <p className="text-4xl text-[#111922] font-semibold mb-4">6850</p>

                            <p className="text-[#919191]">Larger Community</p>

                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default TrustedAgency;