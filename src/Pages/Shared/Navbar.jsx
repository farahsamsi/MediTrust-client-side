import React from "react";
import logo from "../../assets/Logo/MediBazaarLogo.png";
import { Link, NavLink } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink>Shop</NavLink>
      </li>

      <li className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="">
          Languages
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-200 rounded-box z-1  w-52 p-2 shadow-sm"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </li>

      <li className="text-xl">
        <NavLink>
          <BsCartPlus />
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="py-4">
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost flex justify-center items-center"
          >
            <div className="w-10 md:w-20 hidden md:flex">
              <img src={logo} alt="MediBazaar Logo" />
            </div>
            <h1 className="text-xl md:text-2xl">MediBazaar</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/signup" className="btn btn-secondary">
            Join Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
