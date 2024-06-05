
import Overview from "../Overview";
import Carosel from "./Caresol";
import TourType from "./TourType";


const Home = () => {
    return (
        <div>
            <div>
                <Carosel></Carosel>
                <Overview></Overview>
                <TourType></TourType>
            </div>
        </div>
    );
};

export default Home;