import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecore";
import { useQuery } from "@tanstack/react-query";
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

    const Adventure = menu.filter(item => item.tour_type === 'Adventure');
    const Cultural = menu.filter(item => item.tour_type === 'Cultural');
    const Wildlife = menu.filter(item => item.tour_type === 'Wildlife');
    const Nature = menu.filter(item => item.tour_type === 'Nature');
    const Historical = menu.filter(item => item.tour_type === 'Historical');

    return (
        <div className="text-center mb-12 px-4 sm:px-6 md:px-8 lg:px-10">
            <Tabs
                defaultIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
                className="max-w-5xl mx-auto"
            >
                <TabList className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6 mt-4 mb-8 text-sm sm:text-base md:text-lg">
                    <Tab className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-100 transition duration-200">
                        Adventure
                    </Tab>
                    <Tab className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-100 transition duration-200">
                        Cultural
                    </Tab>
                    <Tab className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-100 transition duration-200">
                        Nature
                    </Tab>
                    <Tab className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-100 transition duration-200">
                        Wildlife
                    </Tab>
                    <Tab className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-100 transition duration-200">
                        Historical
                    </Tab>
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
