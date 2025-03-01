import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provaider/AuthProvaider";
import Swal from "sweetalert2";
import "./nav.css";

const Navbar = () => {
  const [userOpen, setUserOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    <div className="fixed top-0 left-0 w-full bg-base-300 shadow-md py-4 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 lg:px-12">
        {/* Navbar Start */}
        <div className="flex items-center">
          <button
            className="btn btn-ghost lg:hidden"
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
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-lg md:text-xl text-black">
              Beautiful <span className="text-green-500">Bangladesh</span>
            </span>
          </Link>
        </div>

        {/* Navbar Center */}
        <div
          className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-base-300 lg:bg-transparent transition-transform duration-300 lg:flex lg:items-center lg:gap-6 font-bold text-center ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <NavLink to="/" className="hover:text-[#00B19D] block py-2 lg:inline">
            Home
          </NavLink>
          <NavLink
            to="/community"
            className="hover:text-[#00B19D] block py-2 lg:inline"
          >
            Community
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-[#00B19D] block py-2 lg:inline"
          >
            About Us
          </NavLink>
          <NavLink
            to="/blogs"
            className="hover:text-[#00B19D] block py-2 lg:inline"
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-[#00B19D] block py-2 lg:inline"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Navbar End */}
        <div className="relative flex items-center">
          {user ? (
            <button
              onClick={() => setUserOpen(!userOpen)}
              className="border-2 border-[#FF497C] rounded-full w-[40px] lg:w-[50px] overflow-hidden"
            >
              <img
                src={user?.photoURL}
                alt="user avatar"
                className="w-full h-full object-cover"
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

          {/* User Dropdown */}
          <div
            className={`absolute right-0 top-14 lg:top-16 w-40 lg:w-48 p-4 shadow-lg bg-base-200 rounded-lg ${
              userOpen ? "block" : "hidden"
            }`}
          >
            <p className="text-sm text-black font-semibold">
              {user?.displayName}
            </p>
            <p className="text-sm text-black font-semibold">{user?.email}</p>
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
