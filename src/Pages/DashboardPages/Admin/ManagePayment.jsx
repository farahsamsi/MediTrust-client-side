import { FaCheckCircle } from "react-icons/fa";
import DashboardBanner from "../../Shared/DashboardBanner";
import useAllOrders from "../../../Hooks/useAllOrders";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManagePayment = () => {
  const [allOrders, refetchAllOrders] = useAllOrders();
  const axiosSecure = useAxiosSecure();

  const handleAcceptPayment = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#F43098",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Accept Payment!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await axiosSecure.patch(`/order/update/${id}`);
        if (result.data.modifiedCount > 0) {
          refetchAllOrders();
          Swal.fire({
            title: "Accepted!",
            text: "Payment has been accepted",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <section className="w-full px-1">
      <DashboardBanner
        heading="Payment Management Dashboard"
        subHeading="Monitor all pending and completed payments. Accept payments and update statuses in real-time."
      ></DashboardBanner>

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
            {allOrders.map((payment, index) => (
              <tr key={payment._id}>
                <td>{index + 1}</td>
                <td>{payment?.order?.buyerName}</td>
                <td>{payment?.order?.buyerEmail}</td>
                <td>{payment?.order?.totalBill}</td>
                <td>
                  <span
                    className={`badge
                      ${payment?.paymentStatus === "pending" && "badge-warning"}
                      ${payment?.paymentStatus === "failed" && "badge-error"}
                       ${
                         payment?.paymentStatus === "paid" && "badge-success"
                       } text-white`}
                  >
                    {payment?.paymentStatus}
                  </span>
                </td>
                <td>
                  {payment?.paymentStatus === "pending" && (
                    <button
                      onClick={() => handleAcceptPayment(payment?._id)}
                      className="btn btn-sm btn-outline btn-success flex items-center gap-2"
                    >
                      <FaCheckCircle />
                      Accept Payment
                    </button>
                  )}
                  {payment?.paymentStatus === "paid" && (
                    <span className="text-green-500 font-semibold">Paid ✔</span>
                  )}
                  {payment?.paymentStatus === "failed" && (
                    <span className="text-red-500 font-semibold">Canceled</span>
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
