import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menus = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/find-jobs"
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          Find Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/post-jobs"
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          Post Jobs
        </NavLink>
      </li>
    </>
  );

  return (

    <div className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300
    ${isScrolled ? "bg-black bg-opacity-50 text-white shadow-lg"
        : " "}`}>

      <div className="navbar">

        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown">

            <div tabIndex={0} role="button" className="lg:hidden">
              <AiOutlineMenu />
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-lg z-[1] mt-3 w-52 p-2 shadow">
              {menus}
            </ul>

          </div>

          {/* Website Logo */}
          <div>

            <Link to="/">
              <button className="text-2xl md:text-4xl font-bold">
                Job Sphere
              </button>
            </Link>

          </div>

        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">

          <ul className="menu-horizontal flex space-x-4 font-medium">
            {menus}
          </ul>

        </div>

        <div className="navbar-end">

          <div className="flex justify-center gap-4">

            <Link to={'login'}>
              <button className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] hover:from-[#feb47b] hover:to-[#ff7e5f] text-white font-medium px-4 py-2 rounded-lg">
                Log In
              </button>
            </Link>

            <Link to={'sign-up'}>
              <button className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] hover:from-[#feb47b] hover:to-[#ff7e5f] text-white font-medium px-4 py-2 rounded-lg">
                Sign Up
              </button>
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
