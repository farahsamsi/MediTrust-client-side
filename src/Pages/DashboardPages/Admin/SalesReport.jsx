import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import DashboardBanner from "../../Shared/DashboardBanner";

const SalesReport = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const salesData = [
    {
      id: 1,
      medicine: "Paracetamol 500mg",
      seller: "seller1@mediplus.com",
      buyer: "buyer1@gmail.com",
      price: 200,
      date: "2025-05-01",
    },
    {
      id: 2,
      medicine: "Zinc Tablets",
      seller: "seller2@wellcare.com",
      buyer: "buyer2@gmail.com",
      price: 150,
      date: "2025-05-08",
    },
  ];

  return (
    <section className="w-full px-1">
      <DashboardBanner
        heading="Sales Report Overview"
        subHeading="Analyze and track all medicine sales. Filter by date and download reports."
      ></DashboardBanner>

      {/* Filter and Download Controls */}
      <div className="flex flex-wrap gap-4 items-center mb-6">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Start Date</span>
          </div>
          <input
            type="date"
            className="input input-bordered"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">End Date</span>
          </div>
          <input
            type="date"
            className="input input-bordered"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>

        <div className="ml-auto flex gap-2">
          <button className="btn btn-outline btn-sm">
            <FaDownload className="mr-1" />
            PDF
          </button>
        </div>
      </div>

      {/* Sales Table */}
      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Medicine</th>
              <th>Seller Email</th>
              <th>Buyer Email</th>
              <th>Total Price (৳)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale, idx) => (
              <tr key={sale.id}>
                <td>{idx + 1}</td>
                <td>{sale.medicine}</td>
                <td>{sale.seller}</td>
                <td>{sale.buyer}</td>
                <td>{sale.price}</td>
                <td>{sale.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SalesReport;
