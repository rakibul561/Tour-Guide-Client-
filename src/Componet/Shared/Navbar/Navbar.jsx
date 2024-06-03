

import { useContext, useState } from 'react';
import image from '../../../assets/Login/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../Provaider/AuthProvaider';
import Swal from 'sweetalert2';
// import logo from '../assets/logo/editable-hotel-logo-vector-business-corporate-identity-hostel_53876-111553.avif'


const Navbar = () => {

    // const {user,logOut} = useContext(AuthContext);
    // const navigate = useNavigate();
    const [userOpen, setUserOpen] = useState();
    const { user,logOut } = useContext(AuthContext)
      const navigate = useNavigate()
    //   const { handleModeChnage } = useTheme()



    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/community'>Community</NavLink></li>
        <li><NavLink to='/blogs'> Blogs</NavLink></li>
        <li><NavLink to='/about'> About Us</NavLink></li>
        <li><NavLink to='/contact'> Contact Us</NavLink></li>


    </>



      const handleLogOUt = async () => {
        await logOut()
        if (logOut.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'User Added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })

        }
        navigate("/login")
      }


    return (

        <div>
            <div className="navbar bg-green-500  text-black shadow-md rounded-lg ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu absolute z-50 menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}

                        </ul>
                    </div>
                    <Link to='/' className='flex gap-2 items-center'>
                    <img className='h-16' src={image} alt='' />
                    <span className='font-bold text-xl text-black'>Beautiful <span className='text-white'>Bangladesh</span></span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end  ">
                    {/* <p className="btn btn-secondary  "><Link to= '/login'>Login</Link></p> */}
                    <div className="relative md:border-l flex items-center w-full md:w-auto pl-5 ">
                        <div className=" w-[50px]"></div>

                        <div className="mr-2">
                            <label className="cursor-pointer grid place-items-center">
                                <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                                <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                                <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                            </label>
                        </div>

                        {user ? (
                            <button
                                onClick={() => setUserOpen(!userOpen)}
                                className="border-2 border-[#FF497C] rounded-full w-[40px]"
                            >
                                <img
                                    src={user?.photoURL}
                                    alt=""
                                    className="w-10 h-10 rounded-full"
                                />
                            </button>
                        ) : (
                            <Link
                                to={"/login"}
                                className="bg-[#FF497C] hover:bg-[#ab3154]  duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded"
                            >
                                Login
                            </Link>
                        )}

                        {/* user Menu */}
                        <div
                            className={`absolute  z-50  ${userOpen ? "block" : "hidden"
                                } flex flex-col  gap-4  shadow-lg bg-base-200 px-2  py-4 top-16 `}
                        >
                            <p className="text-sm text-black font-semibold">{user?.displayName}</p>
                            <p className="text-sm text-black font-semibold">{user?.email}</p>

                            {
                                user && <button
                                 
                                    className="bg-[#FF497C] hover:bg-[#ab3154] duration-200 text-black font-bold px-4 xl:px-6 py-1 rounded cursor-pointer"
                                    onClick={handleLogOUt}
                                >
                                    logout
                                </button>
                            }

                        </div>

                    </div>

                </div>



            </div>
        </div>

    )
}

export default Navbar





