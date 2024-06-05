import { FaAd, FaCalendar, FaHome, FaList, FaUser } from "react-icons/fa";
import { FaPersonRifle } from "react-icons/fa6";
import { FiGitPullRequest } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    // const [isAdmin] = useAdmin();
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    return (
        <div>
            <div className="flex">
                {/* dashboard side bar*/}
                <div className="w-64 text-white min-h-screen bg-gray-800">
                    <ul className="menu p-4 space-y-2">
                        {

                            isAdmin ? <>
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
                                : <>
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