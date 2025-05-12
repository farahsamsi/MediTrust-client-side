import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import DashboardLayout from "../Layout/Dashboards/DashboardLayout";

import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../Pages/DashboardPages/DashboardHome";
import ManageUsers from "../Pages/DashboardPages/Admin/ManageUsers";
import Shop from "../Pages/Shop";
import ManageCategories from "../Pages/DashboardPages/Admin/ManageCategories";
import ManagePayment from "../Pages/DashboardPages/Admin/ManagePayment";

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
      {
        path: "shop",
        element: <Shop></Shop>,
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
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "/dashboard/manageCategories",
        element: <ManageCategories></ManageCategories>,
      },
      {
        path: "/dashboard/managePayment",
        element: <ManagePayment></ManagePayment>,
      },
    ],
  },
]);
