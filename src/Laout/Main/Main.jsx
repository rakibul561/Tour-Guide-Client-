import { Outlet } from "react-router-dom";
import Navbar from "../../Componet/Shared/Navbar/Navbar";
import Footer from "../../Componet/Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;