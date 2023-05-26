import Banner from "../Banner/Banner";
import OrderOnline from "../OrderOnline/OrderOnline";
import chefServiceImg from "../../../assets/home/chef-service.jpg";
import SectionCover from "../../Shared/SectionCover/SectionCover";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto">
                <div>
                    <OrderOnline></OrderOnline>
                </div>
                <div>
                    <SectionCover sectionImg={chefServiceImg} secHeading="Bistro Boss"></SectionCover>
                </div>
                <div className="my-20">
                    <FromOurMenu></FromOurMenu>
                </div>
                <div className="bg-black px-10 py-16 my-20">
                    <h2 className="text-3xl text-center text-white">Call Us: +88 01923 456 789</h2>
                </div>
            </div>
            <div>
                <FeaturedSection></FeaturedSection>
            </div>
            <div className="max-w-6xl my-20 mx-auto">
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;