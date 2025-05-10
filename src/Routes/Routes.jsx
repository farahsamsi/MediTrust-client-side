import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import DashboardLayout from "../Layout/Dashboards/DashboardLayout";
import UserDashboard from "../Layout/Dashboards/UserDashboard";
import Admin from "../Layout/Dashboards/Admin";
import Seller from "../Layout/Dashboards/Seller";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "admin",
        element: <Admin></Admin>,
      },
      {
        path: "seller",
        element: <Seller></Seller>,
      },
    ],
  },
]);
