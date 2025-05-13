import { useEffect, useState } from "react";
import { FaCheckCircle, FaClock } from "react-icons/fa";
import DashboardBanner from "../../Shared/DashboardBanner";

const SellerPaymentHistory = () => {
  const [payments, setPayments] = useState([]);

  // Simulated data fetching
  useEffect(() => {
    const fakePayments = [
      {
        id: 1,
        medicine: "Paracetamol 500mg",
        buyerEmail: "user1@example.com",
        amount: 120,
        date: "2025-05-10",
        status: "paid",
      },
      {
        id: 2,
        medicine: "Napa Extra",
        buyerEmail: "user2@example.com",
        amount: 90,
        date: "2025-05-08",
        status: "pending",
      },
      {
        id: 3,
        medicine: "Zinc Tablets",
        buyerEmail: "user3@example.com",
        amount: 60,
        date: "2025-05-05",
        status: "paid",
      },
    ];
    setPayments(fakePayments);
  }, []);

  return (
    <section className="w-full px-1">
      <DashboardBanner
        heading="Payment History"
        subHeading="Review the payment records of your sold medicines, track status and history."
      ></DashboardBanner>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Medicine Name</th>
              <th>Buyer Email</th>
              <th>Amount (৳)</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment.id}>
                <td>{index + 1}</td>
                <td>{payment.medicine}</td>
                <td>{payment.buyerEmail}</td>
                <td>৳ {payment.amount}</td>
                <td>{payment.date}</td>
                <td>
                  {payment.status === "paid" ? (
                    <span className="badge badge-success gap-2">
                      <FaCheckCircle /> Paid
                    </span>
                  ) : (
                    <span className="badge badge-warning gap-2 text-white">
                      <FaClock /> Pending
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SellerPaymentHistory;
