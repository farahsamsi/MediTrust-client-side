import { FaDollarSign, FaClock, FaCheckCircle } from "react-icons/fa";
import DashboardBanner from "../../Shared/DashboardBanner";

const SellerHome = () => {
  return (
    <section className="w-full px-1">
      <DashboardBanner
        heading="Welcome to Seller Dashboard"
        subHeading="Overview of your medicine sales performance."
      ></DashboardBanner>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Paid Total Card */}
        <div className="bg-green-100 p-6 rounded-2xl shadow-md flex items-center space-x-4">
          <FaCheckCircle className="text-green-600 text-4xl" />
          <div>
            <h3 className="text-xl font-semibold text-green-700">Paid Total</h3>
            <p className="text-2xl font-bold text-green-900">$3,240.50</p>
          </div>
        </div>

        {/* Pending Total Card */}
        <div className="bg-yellow-100 p-6 rounded-2xl shadow-md flex items-center space-x-4">
          <FaClock className="text-yellow-600 text-4xl" />
          <div>
            <h3 className="text-xl font-semibold text-yellow-700">
              Pending Total
            </h3>
            <p className="text-2xl font-bold text-yellow-900">$1,120.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerHome;
