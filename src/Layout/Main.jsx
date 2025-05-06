import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Main;
