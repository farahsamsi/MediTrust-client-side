import { FaCheckCircle, FaClock } from "react-icons/fa";
import DashboardBanner from "../../Shared/DashboardBanner";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { format } from "date-fns";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [payments, setPayments] = useState([]);

  const getUserPaymentHistory = async () => {
    const result = await axiosPublic.get(`/order/user/${user.email}`);
    setPayments(result.data);
  };

  useEffect(() => {
    getUserPaymentHistory();
  }, [user]);

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
              <th>Seller Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment?._id}>
                <td>{index + 1}</td>
                {/* <td>{payment?.transactionDate}</td> */}

                <td>
                  {payment?.transactionDate &&
                    format(
                      new Date(payment?.transactionDate),
                      "yyyy-MM-dd hh:mm:ss a"
                    )}
                </td>

                <td>
                  {payment?.order?.items?.map((item) => (
                    <p>{item?.medicineName},</p>
                  ))}
                </td>
                <td>{payment?.transactionID}</td>
                <td>{payment?.order?.totalBill}</td>
                <td>
                  {payment?.order?.items?.map((item) => (
                    <p>{item?.sellerEmail},</p>
                  ))}
                </td>
                <td>
                  {payment?.paymentStatus === "paid" ? (
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
