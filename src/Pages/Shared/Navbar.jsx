import React from "react";
import logo from "../../assets/Logo/MediBazaarLogo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { IoMdArrowDropdown } from "react-icons/io";
import useCart from "../../Hooks/useCart";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [cart] = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure want to Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logout().then(() => {
          navigate("/");
          Swal.fire({
            title: "Logged out!",
            icon: "success",
          });
        });
      }
    });
  };
  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/shop">Shop</NavLink>
      </li>

      <li className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="">
          Languages <IoMdArrowDropdown />
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-200 rounded-box z-1  w-52 p-2 shadow-sm"
        >
          <li>
            <a>English</a>
          </li>
          <li>
            <a>Bangla</a>
          </li>
        </ul>
      </li>

      <li className="text-xl">
        <NavLink to="cart">
          <BsCartPlus />{" "}
          <div className="badge badge-sm badge-secondary">{`+${cart?.length}`}</div>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-10 bg-base-100">
      <div className="navbar shadow-sm ">
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
            <h1 className="text-xl md:text-2xl">
              Medi<span className="text-secondary">Trust</span>
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-4 items-center">
              <p className="hidden md:flex font-bold">
                Hi, {user?.displayName}
              </p>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-20 rounded-full">
                    <img referrerPolicy="no-referrer" src={user?.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="" className="justify-between">
                      Profile
                    </Link>
                  </li>

                  <li onClick={handleLogout}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link to="/signup" className="btn btn-secondary">
              Join Us
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
