import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Laout/Main/Main";
import Home from "../Pagse/Home/Home/Home";
import Error from "../Error/Error";
import Login from "../Componet/Pagse/Login";
import Register from "../Componet/Pagse/Register";
import PrivetRoute from "./PribetRoutes";
import Blogs from "../Componet/Pagse/Blogs";

 export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blogs',
                element: <PrivetRoute><Blogs></Blogs></PrivetRoute>
            }
        ]
    },
]);