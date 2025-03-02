
import { Helmet } from "react-helmet-async";
import Overview from "../Overview";
import Carosel from "./Caresol";
import TourType from "./TourType";
import Community from "../../../Componet/Pagse/Community";


const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>Home || Pagse</title>
            </Helmet>
            <div>
                <Carosel></Carosel>
                <Overview></Overview>
                <TourType></TourType>
              <div className="text-center
              "> 
                <h2 className="text-5xl font-bold text-[#00B19D]"> Meet our Team </h2>
                <p className="text-xl ">this is my all tour guide . please say your any question .
                    and meet our alll team team Member
                </p>
              <Community/>
              </div>

                
            </div>
        </div>
    );
};

export default Home;