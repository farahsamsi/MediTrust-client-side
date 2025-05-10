import React from "react";
import SectionTitle from "./Shared/SectionTitle";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "./Shared/GoogleLogin";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";

// getting API from env local file
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

// image hosting api
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleSignin = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.files;
    const password = form.password.value;
    const role = form.role.value;

    // uploading the image to imgbb and then get an url
    const imageFile = { image: photo[0] };

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const photoURL = res.data.data.display_url;

    // console.log({ name, photo, email, role });

    if (res.data.success) {
      createUser(email, password)
        .then(() => {
          updateUserProfile(name, photoURL).then(() => {
            const userInfo = { name, photoURL, email, role };
            axiosPublic.post("/users", userInfo).then((res) => {
              console.log(res.data);
              if (res.data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your Account has been created",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
          });
        })
        .catch((err) =>
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${err.message}`,
          })
        );
    }
  };

  return (
    <div className="py-5 md:py-10 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-4 w-10/12 mx-auto ">
        <div className="w-full flex justify-center items-center">
          <div>
            <SectionTitle
              heading="Join Us Today!"
              subHeading="Create your account to explore a trusted medicine shopping experience."
            ></SectionTitle>
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSignin}
            className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4"
          >
            <label className="label">User Name</label>
            <input
              type="name"
              name="name"
              className="input w-full"
              placeholder="Enter Your Name"
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Enter Your Email"
            />

            <label className="label">Profile Photo</label>
            <input type="file" name="photo" className="file-input w-full" />

            <select
              name="role"
              defaultValue="Select Role"
              className="select w-full"
            >
              <option disabled={true}>Select Role</option>
              <option value="user">User</option>
              <option value="seller">Seller</option>
            </select>

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
              value="Sign Up"
            />
          </form>
          <div className="flex flex-col md:flex-row gap-4 justify-around items-center mb-6 bg-base-200 py-5">
            <div className="flex flex-col justify-center">
              <p>Already have an account ?</p>
              <Link to="/login" className="btn btn-soft">
                <button>Login</button>
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

export default SignUp;
