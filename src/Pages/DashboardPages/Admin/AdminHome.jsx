import React from "react";
import { FaCheckCircle, FaClock, FaMoneyBillWave } from "react-icons/fa";

const AdminHome = () => {
  // Dummy data (TODO: replace with API data or state)
  const totalRevenue = 150000;
  const paidTotal = 120000;
  const pendingTotal = 30000;

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h2>

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
