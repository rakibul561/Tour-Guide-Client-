import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecore";
import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import Cetegory from "../../Tabs/Cetegory";
import OrderTabs from "../../Tabs/OrderTabs";



const TourType = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const axiosSecure = UseAxiosSecure();

    const { data: menu = [], isLoading } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/menu');
            return data;
        }
    });
    console.log(menu);


    const Adventure = menu.filter(item => item.tour_type === 'Adventure')
    const Cultural = menu.filter(item => item.tour_type === 'Cultural')
    const Wildlife = menu.filter(item => item.tour_type === 'Wildlife')
    const Nature = menu.filter(item => item.tour_type === 'Nature')
    const Historical = menu.filter(item => item.tour_type === 'AdventHistoricalure');




    return (
        <div className="text-center ">

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Adventure</Tab>
                    <Tab> Cultural</Tab>
                    <Tab> Nature</Tab>
                    <Tab> Wildlife</Tab>
                    <Tab> Historical</Tab>
                </TabList>
                <TabPanel>
                    <OrderTabs items={Adventure}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={Cultural}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={Nature}></OrderTabs>
                </TabPanel>
                <TabPanel>
                  <OrderTabs items={Wildlife}></OrderTabs>
                </TabPanel>
                <TabPanel>
                  <OrderTabs items={Historical}></OrderTabs>
                </TabPanel>
                
            </Tabs>

        </div>
    );
};

export default TourType;