import useAdmin from "../../Hooks/useAdmin";
import AdminHome from "./Admin/AdminHome";

const DashboardHome = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);

  const isSeller = false;
  return (
    <div>
      {/* Admin home content */}
      {isAdmin && <AdminHome></AdminHome>}
      {/* seller home content */}
      {isSeller && <h1>Home for seller</h1>}

      {/* user home content */}
    </div>
  );
};

export default DashboardHome;
