import { useContext, useState } from 'react';
import image from '../../../assets/Login/logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provaider/AuthProvaider';
import Swal from 'sweetalert2';

import './nav.css';




  
const Navbar = () => {
    const [userOpen, setUserOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const navLink = (
         <>
            <li className="my-2 add text-xl lg:my-0"><NavLink to='/'>Home</NavLink></li>
            <li className="my-2 add text-xl lg:my-0"><NavLink to='/community'>Community</NavLink></li>
            <li className="my-2 add text-xl lg:my-0"><NavLink to='/blogs'>Blogs</NavLink></li>
            <li className="my-2 add text-xl lg:my-0"><NavLink to='/about'>About Us</NavLink></li>
            <li className="my-2 add text-xl lg:my-0"><NavLink to='/contact'>Contact Us</NavLink></li>
        </>
    );

    const handleLogOut = async () => {
        try {
            await logOut();
            Swal.fire({
                title: 'Success!',
                text: 'Logged out successfully',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            navigate("/login");
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Log out failed',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        }
    };

    return (
        <div className="navbar bg-base-300  shadow-md rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <button tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </button>
                    <ul tabIndex={0} className="menu add dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 lg:hidden">
                        {navLink}
                    </ul>
                </div>
                <Link to='/' className='flex gap-2 items-center'>
                    <img className='h-12 md:h-16' src={image} alt='' />
                    <span className='font-bold text-lg md:text-xl text-black'>Beautiful <span className='text-green-500'>Bangladesh</span></span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2 px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="relative flex items-center w-full md:w-auto pl-24">
                    {user ? (
                        <button
                            onClick={() => setUserOpen(!userOpen)}
                            className="border-2 border-[#FF497C] rounded-full w-[40px] lg:w-[50px] overflow-hidden"
                        >
                            <img
                                src={user?.photoURL}
                                alt="user avatar"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </button>
                    ) : (
                        <Link
                            to={"/login"}
                            className="bg-[#FF497C] hover:bg-[#ab3154] duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded"
                        >
                            Login
                        </Link>
                    )}

                    <div
                        className={`absolute right-0 top-14 lg:top-16 z-50 w-40 lg:w-48 p-4 shadow-lg bg-base-200 rounded-lg ${userOpen ? "block" : "hidden"}`}
                    >
                        <p className="text-sm text-black  font-semibold">{user?.displayName}</p>
                        <p className="text-sm text-black  font-semibold">{user?.email}</p>
                        <Link to="/dashboard">
                            <button className="w-full my-2 btn btn-sm btn-outline btn-success font-bold">
                                Dashboard
                            </button>
                        </Link>
                        <button
                            className="w-full btn btn-sm btn-outline btn-error font-bold"
                            onClick={handleLogOut}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
