import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import TrustedAgency from "../../../components/TrustedAgency/TrustedAgency";

const Home = () => {

    return (

        <div>
            {/* Banner */}
            <section>
                <Banner></Banner>
            </section>

            <section className="w-11/12 mx-auto mt-10">
                <Categories></Categories>

            </section>

            {/* Trusted Agency Section */}
            <section>
                <TrustedAgency></TrustedAgency>
            </section>

            <div>
                <Helmet>
                    <title>Home - Job Sphere</title>
                </Helmet>
            </div>

        </div>
    );
};

export default Home;