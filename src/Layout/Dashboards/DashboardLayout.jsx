import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useUser from "../../Hooks/useUser";
import Navbar from "../../Pages/Shared/Navbar";
import useSeller from "../../Hooks/useSeller";

const DashboardLayout = () => {
  const [currentUser] = useUser();
  const [isAdmin] = useAdmin();
  const [isSeller] = useSeller();

  return (
    <div>
      <div className="hidden lg:block">
        <Navbar></Navbar>
      </div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <div className="navbar bg-base-100 shadow-sm lg:hidden">
            <div className="flex-1">
              <Link to="/" className="btn btn-ghost text-xl">
                <h1 className="text-xl md:text-2xl">
                  Medi<span className="text-secondary">Trust</span>
                </h1>
              </Link>
            </div>
            <div className="flex-none">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-square btn-ghost drawer-button "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>{" "}
                </svg>
              </label>
            </div>
          </div>

          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu bg-base-200 text-base-content min-h-full w-8/12 md:w-80 p-4">
            {/* Sidebar content here */}
            {/* navbar links */}
            <div className="flex justify-center items-center py-2">
              <div className="avatar">
                {currentUser && (
                  <div className="ring-secondary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                    <img
                      referrerPolicy="no-referrer"
                      src={currentUser[0]?.photoURL}
                    />
                  </div>
                )}
              </div>
            </div>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            {
              // navlinks for isAdmin true
              isAdmin && (
                <>
                  <li>
                    <NavLink to="/dashboard" end>
                      Admin Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manageUsers">Manage Users</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manageCategories">
                      Manage Category
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/managePayment">
                      Payment Management
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/salesReport">Sales Report</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manageAdvertise">
                      Manage Banner Advertise
                    </NavLink>
                  </li>
                </>
              )
            }

            {
              // navlinks for isSeller true
              isSeller && (
                <>
                  <li>
                    <NavLink to="/dashboard" end>
                      Seller Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manageMedicines">
                      Manage Medicines
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/paymentHistory">
                      Payment History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/askForAd">
                      Ask For Advertise
                    </NavLink>
                  </li>
                </>
              )
            }
            {!isAdmin && !isSeller && (
              <>
                <li>
                  <NavLink to="/dashboard" end>
                    User Home
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
