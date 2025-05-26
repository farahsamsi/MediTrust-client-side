import { useEffect, useState } from "react";
import { FaCheckCircle, FaClock } from "react-icons/fa";
import DashboardBanner from "../../Shared/DashboardBanner";
import useAuth from "../../../Hooks/useAuth";
import useAllOrders from "../../../Hooks/useAllOrders";

const SellerPaymentHistory = () => {
  const { user } = useAuth();
  const [allOrders] = useAllOrders();

  const [paidMedicines, setPaidMedicines] = useState([]);
  const [pendingMedicines, setPendingMedicines] = useState([]);

  useEffect(() => {
    const MedicineArray = [];
    allOrders
      ?.filter((order) => order?.paymentStatus === "paid")
      ?.map((order) => MedicineArray?.push(...(order?.order?.items || {})));

    const filteredSeller = MedicineArray?.filter(
      (item) => item?.sellerEmail === user.email
    );

    setPaidMedicines(filteredSeller);
  }, [allOrders, user.email]);

  useEffect(() => {
    const MedicineArray = [];
    allOrders
      ?.filter((order) => order?.paymentStatus === "pending")
      ?.map((order) => MedicineArray?.push(...(order?.order?.items || {})));

    const filteredSeller = MedicineArray?.filter(
      (item) => item?.sellerEmail === user.email
    );

    setPendingMedicines(filteredSeller);
  }, [allOrders, user.email]);

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
              <th>Quantity</th>
              <th>Amount (Tk)</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {pendingMedicines?.map((medicine, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{medicine?.medicineName}</td>
                <td>{medicine?.buyerEmail}</td>
                <td>{medicine?.medicineQuantity}</td>
                <td>{medicine?.totalPrice}</td>
                <td>{medicine?.date}</td>
                <td>
                  <span className="badge badge-warning gap-2 text-white">
                    <FaClock /> Pending
                  </span>
                </td>
              </tr>
            ))}
            {paidMedicines?.map((medicine, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{medicine?.medicineName}</td>
                <td>{medicine?.buyerEmail}</td>
                <td>{medicine?.medicineQuantity}</td>
                <td>{medicine?.totalPrice}</td>
                <td>{medicine?.date}</td>
                <td>
                  <span className="badge badge-success gap-2">
                    <FaCheckCircle /> Paid
                  </span>
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
