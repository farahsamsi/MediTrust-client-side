import React from "react";
import SectionTitle from "./Shared/SectionTitle";

const SignUp = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="grid md:grid-cols-2 gap-4 w-10/12 mx-auto ">
        <div>
          <SectionTitle
            heading="Join Us Today!"
            subHeading="Create your account to explore a trusted medicine shopping experience."
          ></SectionTitle>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  );
};

export default SignUp;
