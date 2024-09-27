import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {

    return (

        <div>
            {/* Banner */}
            <div>
                <Banner></Banner>
            </div>

            <div className="w-11/12 mx-auto mt-10">
                <Categories></Categories>

            </div>

            <div>
                <Helmet>
                    <title>Home - Job Sphere</title>
                </Helmet>
            </div>

        </div>
    );
};

export default Home;