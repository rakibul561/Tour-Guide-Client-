import { Outlet } from "react-router-dom";
import Navbar from "../../Componet/Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div className="">
            <Navbar></Navbar>
             <Outlet></Outlet>
        </div>
    );
};

export default Main;