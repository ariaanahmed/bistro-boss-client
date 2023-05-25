import { Helmet } from "react-helmet-async";
import orderCoverImg from '../../assets/shop/banner2.jpg'
import Cover from "../shared/cover/Cover";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu()
    const dessert = menu.filter((item) => item.category === 'dessert')
    const soup = menu.filter((item) => item.category === 'soup')
    const salad = menu.filter((item) => item.category === 'salad')
    const pizza = menu.filter((item) => item.category === 'pizza')
    const offered = menu.filter((item) => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>

            <Cover img={orderCoverImg} title={"Order Food"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    salad
                </TabPanel>
                <TabPanel>
                    Pizza
                </TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;