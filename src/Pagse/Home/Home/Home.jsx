
import { Helmet } from "react-helmet-async";
import Overview from "../Overview";
import Carosel from "./Caresol";
import TourType from "./TourType";
import Community from "../../../Componet/Pagse/Community";
import Blogs from "../../../Componet/Pagse/Blogs";
import UserReview from "./UserReview";

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
              <div className="text-center mt-20 mb-20"> 
                <h2 className="text-5xl font-bold text-[#00B19D]"> Our All Blogs</h2>
                <p className="text-xl mb-20 mt-4">
  Explore all our blog posts here. Feel free to ask any questions and meet our dedicated team members.
</p>

              <Blogs/> 

              </div>
              <div className="max-w-7xl mx-auto">


              <h2 className="text-5xl text-center font-bold text-[#00B19D]">Our Client Reviews</h2>
<p className="text-xl text-center mb-20 mt-4">
  Explore all the reviews from our valued clients. Feel free to ask any questions and  <br /> learn more about their experiences with our services.
</p>

                
              <UserReview/>
             
              </div>

                
            </div>
        </div>
    );
};

export default Home;