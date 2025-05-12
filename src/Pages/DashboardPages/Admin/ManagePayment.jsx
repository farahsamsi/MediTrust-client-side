import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const ManagePayment = () => {
  const [payments, setPayments] = useState([
    {
      id: 1,
      userName: "Rahim Uddin",
      email: "rahim@example.com",
      amount: 1200,
      status: "pending",
    },
    {
      id: 2,
      userName: "Salma Khatun",
      email: "salma@example.com",
      amount: 950,
      status: "paid",
    },
    {
      id: 3,
      userName: "Tania Sultana",
      email: "tania@example.com",
      amount: 2000,
      status: "pending",
    },
  ]);

  const handleAcceptPayment = (id) => {
    const updated = payments.map((p) =>
      p.id === id ? { ...p, status: "paid" } : p
    );
    setPayments(updated);
  };

  return (
    <section className="w-full px-1">
      <h2 className="text-3xl font-bold mb-4 text-center w-full">
        Payment Management
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Email</th>
              <th>Amount (৳)</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment.id}>
                <td>{index + 1}</td>
                <td>{payment.userName}</td>
                <td>{payment.email}</td>
                <td>{payment.amount}</td>
                <td>
                  <span
                    className={`badge ${
                      payment.status === "paid"
                        ? "badge-success"
                        : "badge-warning"
                    } text-white`}
                  >
                    {payment.status}
                  </span>
                </td>
                <td>
                  {payment.status === "pending" ? (
                    <button
                      onClick={() => handleAcceptPayment(payment.id)}
                      className="btn btn-sm btn-outline btn-success flex items-center gap-2"
                    >
                      <FaCheckCircle />
                      Accept Payment
                    </button>
                  ) : (
                    <span className="text-green-500 font-semibold">Paid ✔</span>
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

export default ManagePayment;
