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
import Contact from "../Componet/Pagse/Contact/Contact";
import Community from "../Componet/Pagse/Community";
import About from "../Componet/Pagse/About";
import AllPackages from "../Pagse/Home/Home/AllPackages";
import Details from "../Pagse/Home/Details";
import Dashboard from "../DashBoard/Dashboard";
import MyProfile from "../DashBoard/Pagse/MyProfile";
import AllUser from "../DashBoard/Pagse/AllUser/AllUser";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/community',
                element: <PrivetRoute><Community></Community></PrivetRoute>
            },
            {
                path: '/about',
                element: <PrivetRoute><About></About></PrivetRoute>
            },
            {
                path: '/blogs',
                element: <PrivetRoute><Blogs></Blogs></PrivetRoute>
            },
            {
                path: '/package',
                element: <AllPackages></AllPackages>
            },
            {
                path: '/details/:id',
                element: <PrivetRoute
                >
                    <Details></Details>
                </PrivetRoute>
            },

        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
               path:'profile',
               element:<MyProfile></MyProfile>
            },
            // admin routes
            {
                path:'users',
                element:<AllUser></AllUser>
            }
        ]
    }
]);