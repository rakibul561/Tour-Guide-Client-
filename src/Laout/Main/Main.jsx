import { Outlet } from "react-router-dom";
import Navbar from "../../Componet/Shared/Navbar/Navbar";
import Footer from "../../Componet/Shared/Footer/Footer";



const Main = () => {
    return (
        <div className=" ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <TourType></TourType> */}
                <Footer></Footer>
           
        </div>
    );
};

export default Main;