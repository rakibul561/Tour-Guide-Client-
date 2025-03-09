import { FaAd, FaCalendar, FaHome, FaList, FaUser } from "react-icons/fa";
import { FaPersonRifle } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useFetchSingleUser from "../Hooks/useFindSingleUser";
import UseAuth from "../Hooks/UseAuth";
import Loading from "../Loading/Loading";

const Dashboard = () => {
    // const [isAdmin] = useAdmin();

    // const isAdmin = true;
    // const [isAdmin] = useAdmin();
    const { user } = UseAuth()

    const { singleUser, loading } = useFetchSingleUser(user?.email)
    console.log(loading);
    if (loading) {
        return <Loading/>
    }
    if (!singleUser) {
        return <h1>User not Found</h1>
    }
    const { role } = singleUser || {}
    console.log(role);



    return (
        <div>
            <div className="flex">
                {/* dashboard side bar*/}
                <div className="w-64 text-white min-h-screen bg-gray-800">
                    <ul className="menu p-4 space-y-2">
                        {

                            singleUser && singleUser?.role === "admin" && <>
                                <>
                                    <li>
                                        <NavLink to='/dashboard/profile'>
                                            <FaPersonRifle></FaPersonRifle>
                                            My Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/addpackage'>
                                            <FaAd></FaAd>
                                            Add Package

                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/users'>
                                            <FaUser></FaUser>
                                            Manage Users
                                        </NavLink>
                                    </li>
                                </>
                            </>


                        }

                        {
                            singleUser?.role === "Tour Guide" && <>
                                <li>
                                    <NavLink to='/dashboard/profile'>
                                        <FaPersonRifle></FaPersonRifle>
                                        My Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/assigned'>
                                        <FaList></FaList>
                                        My Assigned tour

                                    </NavLink>
                                </li>



                            </>
                        }
                        {
                            singleUser?.role === "user" && <>
                                <li>
                                    <NavLink to='/dashboard/userProfile'>
                                        <FaPersonRifle></FaPersonRifle>
                                       Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/bookings'>
                                        <FaList></FaList>
                                        My Bookings

                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/love'>
                                        <FaCalendar></FaCalendar>
                                        My Wishlist
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/payment-history'>
                                        <FaCalendar></FaCalendar>
                                        Payment History
                                    </NavLink>
                                </li>
                                

                            </>
                        }

                        <div className="divider">OR</div>

                        <div>
                            <li>
                                <NavLink to='/'>
                                    <FaHome></FaHome>
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/contact'>
                                    <FaPersonRifle></FaPersonRifle>
                                    Contract
                                </NavLink>
                            </li>
                        </div>
                    </ul>
                </div>
                {/* dashboard content */}
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;