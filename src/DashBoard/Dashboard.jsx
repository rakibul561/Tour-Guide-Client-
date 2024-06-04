import { FaAd, FaCalendar, FaEnvelope, FaFileContract, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { FaPersonRifle } from "react-icons/fa6";
import { FiGitPullRequest } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="flex">
                {/* dashboard side bar*/}
                <div className="w-64 min-h-screen bg-gray-800">
                    <ul className="menu p-4 space-y-2">
                        {/* {
                            isAdmin ? <>
                                <li>
                                    <NavLink to='/dashboard/adminhome'>
                                        <FaHome></FaHome>
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addItems'>
                                        <FaUtensils></FaUtensils>
                                        Add Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageItems'>
                                        <FaList></FaList>
                                        Manage Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/bookings'>
                                        <FaBook></FaBook>
                                        Manage Bookings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/allUsers'>
                                        <FaUser></FaUser>
                                        All User
                                    </NavLink>
                                </li>
                            </>
                                : */}
                        <>
                            <li>
                                <NavLink to='/dashboard/profile'>
                                    <FaPersonRifle></FaPersonRifle>
                                    My Profile
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
                                <NavLink to='/dashboard/request'>
                                    <FiGitPullRequest />
                                    Request to Admin
                                </NavLink>
                            </li>

                        </>

                        <div className="divider">OR</div>
                        {/* shared navbar Links */}
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