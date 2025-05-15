import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DashboardBanner from "./Shared/DashboardBanner";
import { MdDeleteForever } from "react-icons/md";
import useCart from "../Hooks/useCart";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const CartPage = () => {
  const navigate = useNavigate();
  const [cart, refetch] = useCart();
  const axiosPublic = useAxiosPublic();

  const handleQuantity = async (id, type) => {
    await axiosPublic
      .patch(`/carts/${id}`, { type })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
        }
      })
      .catch((err) => {
        if (err.response?.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Invalid quantity update`,
          });
        }
      });
  };

  return (
    <section className="w-full px-1 mb-10">
      <DashboardBanner
        heading="Your Shopping Cart"
        subHeading="Review your selected medicines, update quantities, or proceed to checkout for a smooth purchase experience."
      ></DashboardBanner>

      {/* Button actions */}
      <div className="flex justify-between items-center my-8">
        <button className="btn btn-outline btn-error hidden">
          <MdDeleteForever className="text-xl" />
          Clear Cart
        </button>
        <div className="text-lg font-semibold">Total: ৳{}</div>
        <button
          className="btn btn-secondary "
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      </div>

      {cart?.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full mb-6">
            <thead>
              <tr>
                <th>Medicine</th>
                <th>Company</th>
                <th>Price/Unit</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item) => (
                <tr key={item?._id}>
                  <td>{item?.medicineName}</td>
                  <td>{item?.companyName}</td>
                  <td>৳{item?.price}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button
                        className="btn btn-xs"
                        onClick={() => handleQuantity(item._id, "decrease")}
                      >
                        <FaMinus />
                      </button>
                      <span>{item?.medicineQuantity}</span>
                      <button
                        className="btn btn-xs"
                        onClick={() => handleQuantity(item._id, "increase")}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </td>
                  <td>${item?.totalPrice}</td>
                  <td>
                    <button className="btn btn-xs btn-error text-white">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="flex justify-end mt-6">
        <button className="btn btn-outline btn-error md:hidden">
          <MdDeleteForever className="text-xl" />
          Clear Cart
        </button>
      </div>
    </section>
  );
};

export default CartPage;
