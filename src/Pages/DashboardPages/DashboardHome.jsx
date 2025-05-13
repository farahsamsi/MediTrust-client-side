import useAdmin from "../../Hooks/useAdmin";
import AdminHome from "./Admin/AdminHome";
import SellerHome from "./Seller/SellerHome";
import PaymentHistory from "./User/PaymentHistory";

const DashboardHome = () => {
  // const [isAdmin] = useAdmin();
  const isAdmin = false;

  const isSeller = false;
  return (
    <div className="w-full px-1">
      {/* Admin home content */}
      {isAdmin && <AdminHome></AdminHome>}
      {/* seller home content */}
      {isSeller && <SellerHome></SellerHome>}

      {/* user home content */}
      {!isAdmin && !isSeller && <PaymentHistory></PaymentHistory>}
    </div>
  );
};

export default DashboardHome;
