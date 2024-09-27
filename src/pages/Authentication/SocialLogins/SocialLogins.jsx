import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const SocialLogins = () => {

    return (

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">

            <button
                className="w-1/3 flex justify-center items-center gap-3 text-xl text-white px-4 py-2 rounded-lg border-2 transition-colors duration-400
            bg-[#d34836] hover:bg-white 
            hover:border-[#d34836] hover:text-[#d34836]">
                <FaGoogle />
                Google
            </button>

            <button
                className="w-1/3 flex justify-center items-center gap-3 text-xl text-white px-4 py-2 rounded-lg border-2 transition-colors duration-400
            bg-[#1877f2] hover:bg-white 
            hover:border-[#1877f2] hover:text-[#1877f2]">
                <FaFacebookF />
                Facebook
            </button>

            <button
                className="w-1/3 flex justify-center items-center gap-3 text-xl text-white px-4 py-2 rounded-lg border-2 transition-colors duration-400
            bg-[#0a66c2] hover:bg-white 
            hover:border-[#0a66c2] hover:text-[#0a66c2]">
                <FaLinkedinIn />
                LinkedIn
            </button>

        </div>
    );
};

export default SocialLogins;