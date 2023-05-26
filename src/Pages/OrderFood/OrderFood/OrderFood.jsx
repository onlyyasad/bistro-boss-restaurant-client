import { Helmet } from "react-helmet-async";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import orderImg from "../../../assets/order/order-food.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import TabItems from "../../Shared/components/TabItems";
import { useParams } from "react-router-dom";


const OrderFood = () => {
    const categories = ["salads", "pizza", "soups", "desserts"]
    const {category} = useParams();
    const [tabIndex, setTabIndex] = useState(categories.indexOf(category));
    const [menu] = useMenu();
    const drinks = menu.filter(item => item.category === "drinks");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <PageBanner bannerImg={orderImg} pageTitle={"Order Food"} pageSubTitle={"Would you like to try a dish?"}></PageBanner>
            <div className="max-w-6xl mx-auto my-20">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="flex cursor-pointer justify-center items-center gap-4 my-10">
                        <Tab >Salad</Tab>
                        <Tab >Pizza</Tab>
                        <Tab >Soups</Tab>
                        <Tab >Desserts</Tab>
                        <Tab >Drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <TabItems items={salad}></TabItems>
                    </TabPanel>
                    <TabPanel>
                        <TabItems items={pizza}></TabItems>
                    </TabPanel>
                    <TabPanel>
                        <TabItems items={soup}></TabItems>
                    </TabPanel>
                    <TabPanel>
                        <TabItems items={dessert}></TabItems>
                    </TabPanel>
                    <TabPanel>
                        <TabItems items={drinks}></TabItems>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OrderFood;