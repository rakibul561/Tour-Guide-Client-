import { Outlet } from "react-router-dom";
import Navbar from "../../Componet/Shared/Navbar/Navbar";
import Footer from "../../Componet/Shared/Footer/Footer";
import TourType from "../../Pagse/Home/Home/TourType";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <TourType></TourType> */}
                <Footer></Footer>
           
        </div>
    );
};

export default Main;