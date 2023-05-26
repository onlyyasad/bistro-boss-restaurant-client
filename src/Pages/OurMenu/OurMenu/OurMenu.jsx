import PageBanner from "../../Shared/PageBanner/PageBanner";
import menuBannerImg from "../../../assets/menu/banner3.jpg"
import { Helmet } from "react-helmet-async";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaBg from "../../../assets/menu/pizza-bg.jpg"
import saladBg from "../../../assets/menu/salad-bg.jpg"
import soupBg from "../../../assets/menu/soup-bg.jpg"


const OurMenu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");

    console.log(dessert)
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <PageBanner bannerImg={menuBannerImg} pageTitle={"Our Menu"} pageSubTitle={"Would you like to try a dish?"}></PageBanner>
            <div className="max-w-6xl mx-auto">
                <div className="my-20">
                    <MenuCategory items={offered} sectionImg={""} secHeading={""} title="Today's Offer" subTitle="Don't miss" btnText="Order your favorite food"></MenuCategory>
                </div>
                <div className="my-20">
                    <MenuCategory items={dessert} sectionImg={dessertBg} secHeading={"desserts"} title="" subTitle="" btnText="Order your favorite food"></MenuCategory>
                </div>
                <div className="my-20">
                    <MenuCategory items={pizza} sectionImg={pizzaBg} secHeading={"pizza"} title="" subTitle="" btnText="Order your favorite food"></MenuCategory>
                </div>
                <div className="my-20">
                    <MenuCategory items={salad} sectionImg={saladBg} secHeading={"salads"} title="" subTitle="" btnText="Order your favorite food"></MenuCategory>
                </div>
                <div className="my-20">
                    <MenuCategory items={soup} sectionImg={soupBg} secHeading={"soups"} title="" subTitle="" btnText="Order your favorite food"></MenuCategory>
                </div>
            </div>
        </div>
    );
};

export default OurMenu;