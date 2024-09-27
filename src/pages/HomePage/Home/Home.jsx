import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";

const Home = () => {

    return (

        <div>
            {/* Banner */}
            <div>
                <Banner></Banner>
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