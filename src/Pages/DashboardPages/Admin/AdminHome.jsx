import { FaCheckCircle, FaClock, FaMoneyBillWave } from "react-icons/fa";
import DashboardBanner from "../../Shared/DashboardBanner";
import useAllOrders from "../../../Hooks/useAllOrders";

const AdminHome = () => {
  const [allOrders] = useAllOrders();

  const paidTotal = allOrders
    .filter((order) => order.paymentStatus === "paid")
    .reduce((acc, order) => acc + (order.order.totalBill || 0), 0);

  const pendingTotal = allOrders
    .filter((order) => order?.paymentStatus === "pending")
    .reduce((acc, order) => acc + (order?.order?.totalBill || 0), 0);

  const totalRevenue = allOrders?.reduce((acc, order) => {
    return acc + (order?.order?.totalBill || 0);
  }, 0);

  return (
    <section className="w-full px-1">
      {/* <h2 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h2> */}
      <DashboardBanner
        heading="Welcome to Admin Dashboard"
        subHeading="Monitor your platform’s performance at a glance — track total sales, payments, and user activities in one centralized place."
      ></DashboardBanner>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Revenue */}
        <div className="bg-base-100 shadow-xl rounded-2xl p-6 flex flex-col items-center">
          <FaMoneyBillWave className="text-4xl text-green-500 mb-2" />
          <h3 className="text-xl font-semibold">Total Sales Revenue</h3>
          <p className="text-2xl font-bold mt-2 text-green-600">
            ${totalRevenue.toLocaleString()}
          </p>
        </div>

        {/* Paid Total */}
        <div className="bg-base-100 shadow-xl rounded-2xl p-6 flex flex-col items-center">
          <FaCheckCircle className="text-4xl text-blue-500 mb-2" />
          <h3 className="text-xl font-semibold">Paid Total</h3>
          <p className="text-2xl font-bold mt-2 text-blue-600">
            ${paidTotal.toLocaleString()}
          </p>
        </div>

        {/* Pending Total */}
        <div className="bg-base-100 shadow-xl rounded-2xl p-6 flex flex-col items-center">
          <FaClock className="text-4xl text-yellow-500 mb-2" />
          <h3 className="text-xl font-semibold">Pending Total</h3>
          <p className="text-2xl font-bold mt-2 text-yellow-600">
            ${pendingTotal.toLocaleString()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdminHome;
