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
import SalesReport from "../Pages/DashboardPages/Admin/SalesReport";
import ManageAdvertise from "../Pages/DashboardPages/Admin/ManageAdvertise";
import ManageMedicines from "../Pages/DashboardPages/Seller/ManageMedicines";
import SellerPaymentHistory from "../Pages/DashboardPages/Seller/SellerPaymentHistory";
import AskForAdvertise from "../Pages/DashboardPages/Seller/AskForAdvertise";
import CartPage from "../Pages/CartPage";
import CheckoutPage from "../Pages/CheckOutPage";
import PaymentSuccess from "../Pages/PaymentSuccess";
import PaymentFailed from "../Pages/PaymentFailed";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "shop/:categoryName",
        element: <Shop></Shop>,
      },
      {
        path: "cart",
        element: <CartPage></CartPage>,
      },
      {
        path: "checkout",
        element: <CheckoutPage></CheckoutPage>,
      },
      {
        path: "payment/success/:tranId",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "payment/fail/:tranId",
        element: <PaymentFailed></PaymentFailed>,
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
      // admin routes
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
      {
        path: "/dashboard/salesReport",
        element: <SalesReport></SalesReport>,
      },
      {
        path: "/dashboard/manageAdvertise",
        element: <ManageAdvertise></ManageAdvertise>,
      },
      // seller routes
      {
        path: "/dashboard/manageMedicines",
        element: <ManageMedicines></ManageMedicines>,
      },
      {
        path: "/dashboard/paymentHistory",
        element: <SellerPaymentHistory></SellerPaymentHistory>,
      },
      {
        path: "/dashboard/askForAd",
        element: <AskForAdvertise></AskForAdvertise>,
      },
    ],
  },
]);
