import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provaider/AuthProvaider";
import Swal from "sweetalert2";

import "./nav.css";

const Navbar = () => {
  const [userOpen, setUserOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle state
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      Swal.fire({
        title: "Success!",
        text: "Logged out successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate("/login");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Log out failed",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <nav className="bg-[#00B19D] text-white shadow-md py-3 relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-10">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <Link to="/" className="flex items-center ml-2">
            <h2 className="font-bold text-lg md:text-2xl text-black">
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-yellow-500 to-[#000000] text-transparent bg-clip-text animate-gradient">
                EasyTrips
              </span>
            </h2>
          </Link>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full  bg-[#00B19D] flex flex-col items-center space-y-6 p-10 shadow-lg lg:hidden z-50">
            <button
              className="absolute top-5 right-5 text-white"
              onClick={() => setMenuOpen(false)}
            >
              ✖
            </button>
            <NavLink to="/" className="hover:text-black" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/package" className="hover:text-black" onClick={() => setMenuOpen(false)}>
              Package
            </NavLink>
            <NavLink to="/community" className="hover:text-black" onClick={() => setMenuOpen(false)}>
              Community
            </NavLink>
            <NavLink to="/blogs" className="hover:text-black" onClick={() => setMenuOpen(false)}>
              Blogs
            </NavLink>
            <NavLink to="/contact" className="hover:text-black" onClick={() => setMenuOpen(false)}>
              Contact Us
            </NavLink>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavLink to="/" className="hover:text-black">Home</NavLink>
          <NavLink to="/package" className="hover:text-black">Package</NavLink>
          <NavLink to="/community" className="hover:text-black">Community</NavLink>
          <NavLink to="/blogs" className="hover:text-black">Blogs</NavLink>
          <NavLink to="/contact" className="hover:text-black">Contact Us</NavLink>
        </div>

        {/* Right Side - User/Login Button */}
        <div className="relative flex items-center">
          {user ? (
            <button
              onClick={() => setUserOpen(!userOpen)}
              className="border-2 border-[#00B19D] rounded-full w-[40px] overflow-hidden"
            >
              <img
                src={user?.photoURL}
                alt="user avatar"
                className="w-full h-full object-cover"
              />
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-[#FF497C] hover:bg-[#ab3154] duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded"
            >
              Login
            </Link>
          )}

          {/* User Dropdown */}
          <div
            className={`absolute text-center right-0 top-14 z-50 w-40 lg:w-72 p-4 shadow-lg bg-white text-black rounded-lg ${
              userOpen ? "block" : "hidden"
            }`}
          >
            <p className="text-sm font-semibold">{user?.displayName}</p>
            <p className="text-sm">{user?.email}</p>
            <Link to="dashboard/profile">
              <button className="w-full my-2 btn btn-sm btn-outline btn-success font-bold">
                Profile
              </button>
            </Link>
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
    </nav>
  );
};

export default Navbar;
