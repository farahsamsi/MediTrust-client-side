import { FaCheckCircle, FaClock } from "react-icons/fa";
import DashboardBanner from "../../Shared/DashboardBanner";

const PaymentHistory = () => {
  // TODO: Dummy payment history data
  const payments = [
    {
      id: 1,
      date: "2025-05-10",
      medicine: "Paracetamol 500mg",
      transactionId: "TXN123456789",
      amount: 120,
      status: "paid",
    },
    {
      id: 2,
      date: "2025-05-08",
      medicine: "Napa Extra",
      transactionId: "TXN987654321",
      amount: 95,
      status: "pending",
    },
  ];

  return (
    <section className="w-full px-1">
      <DashboardBanner
        heading="Payment History"
        subHeading="View all your medicine payment transactions with their status."
      ></DashboardBanner>

      <div className="overflow-x-auto">
        <table className="table w-full table-zebra">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Medicine</th>
              <th>Transaction ID</th>
              <th>Amount (৳)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment.id}>
                <td>{index + 1}</td>
                <td>{payment.date}</td>
                <td>{payment.medicine}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.amount}</td>
                <td>
                  {payment.status === "paid" ? (
                    <span className="badge badge-success gap-2">
                      <FaCheckCircle /> Paid
                    </span>
                  ) : (
                    <span className="badge badge-warning gap-2">
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

export default PaymentHistory;
