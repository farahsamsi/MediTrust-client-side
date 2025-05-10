import React from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const userInfo = {
          name: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
          role: "user",
        };
        axiosPublic
          .post("/users", userInfo)
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Welcome to MediTrust",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <button onClick={handleGoogleLogin} className="btn btn-soft ">
      <img
        className="p-1"
        width="48"
        height="48"
        src="https://img.icons8.com/color/48/google-logo.png"
        alt="google-logo"
      />
      Continue with Google
    </button>
  );
};

export default GoogleLogin;
