import React from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const userInfo = {
          name: res.user.displayName,
          email: res.user.email,
        };
        console.log(userInfo);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Welcome to MediTrust",
          showConfirmButton: false,
          timer: 1500,
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
