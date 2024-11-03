
import { Helmet } from "react-helmet-async";
import Overview from "../Overview";
import Carosel from "./Caresol";
import TourType from "./TourType";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || Pagse</title>
            </Helmet>
            <div>
                <Carosel></Carosel>
                <Overview></Overview>
                <TourType></TourType>
                
            </div>
        </div>
    );
};

export default Home;