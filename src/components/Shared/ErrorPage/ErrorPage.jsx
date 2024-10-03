import { Link } from "react-router-dom";

const ErrorPage = () => {

    return (

        <div className="w-full min-h-screen flex flex-col md:flex-row md:justify-between md:items-center p-4 md:p-10 ">

            <div className="w-1/2">
                <h3 className="text-8xl font-bold">Oops!</h3>
                <h4 className="text-6xl font-semibold my-6">Page Not Found</h4>

                <Link to={"/"}>
                    <button className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] hover:from-[#feb47b] hover:to-[#ff7e5f] text-white font-medium mt-8 px-4 py-2 rounded-lg">
                        Back to Home
                    </button>
                </Link>
            </div>

            <div className="w-1/2">
                <img src="https://i.ibb.co.com/sKgfpXH/404.png"
                    alt="Error Page"
                    className="w-full" />
            </div>
        </div>
    );
};

export default ErrorPage;