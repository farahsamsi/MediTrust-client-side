import React from "react";
import SectionTitle from "./Shared/SectionTitle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "./Shared/GoogleLogin";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password).then((result) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Logged in",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };
  return (
    <div className="py-5 md:py-10 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-4 w-10/12 mx-auto ">
        <div className="w-full flex justify-center items-center">
          <div>
            <SectionTitle
              heading="Welcome Back!"
              subHeading="Log in to continue managing your health with ease."
            ></SectionTitle>
          </div>
        </div>
        <div>
          <form
            onSubmit={handleLogin}
            className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4"
          >
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Enter Your Email"
            />

            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
            />

            <input
              className="btn btn-secondary mt-4"
              type="submit"
              value="Login"
            />
          </form>
          <div className="flex flex-col md:flex-row gap-4 justify-around items-center mb-6 bg-base-200 py-5">
            <div className="flex flex-col justify-center">
              <p>Do not have an account ?</p>
              <Link to="/signup" className="btn btn-soft">
                <button>Sign Up</button>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p>Or</p>
              <GoogleLogin></GoogleLogin>
            </div>

            {/* <button onClick={handleLogOut} className="btn">Log out</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
