import useAdmin from "../../Hooks/useAdmin";
import AdminHome from "./Admin/AdminHome";
import SellerHome from "./Seller/SellerHome";

const DashboardHome = () => {
  // const [isAdmin] = useAdmin();
  const isAdmin = false;

  const isSeller = true;
  return (
    <div className="w-full px-1">
      {/* Admin home content */}
      {isAdmin && <AdminHome></AdminHome>}
      {/* seller home content */}
      {isSeller && <SellerHome></SellerHome>}

      {/* user home content */}
    </div>
  );
};

export default DashboardHome;
