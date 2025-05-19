import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DashboardBanner from "./Shared/DashboardBanner";
import { MdDeleteForever } from "react-icons/md";
import useCart from "../Hooks/useCart";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const CartPage = () => {
  const navigate = useNavigate();
  const [cart, refetch, cartIsLoading] = useCart();
  const axiosPublic = useAxiosPublic();
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    refetch();
    let calculatedSubTotal = cart.reduce(
      (sum, item) => sum + item.totalPrice,
      0
    );
    setSubTotal(calculatedSubTotal);
  }, [cart, refetch]);

  const handleQuantity = async (id, type, buyerEmail) => {
    await axiosPublic
      .patch(`/carts/${id}`, { type, buyerEmail })
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

  const handleDelete = async (item) => {
    Swal.fire({
      title: `Are you sure want to Delete ${item?.medicineName} from your cart?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosPublic
          .delete(`/carts/${item?._id}`)
          .then(async (res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${item?.medicineName} has been deleted from your cart`,
                showConfirmButton: false,
                timer: 1500,
              });
              refetch();
            }
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${err.message}`,
            });
          });
      }
    });
  };

  const handleClearCart = async (buyerEmail) => {
    Swal.fire({
      title: `Are you sure want to Clear your cart?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Clear Cart!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosPublic
          .delete(`/carts?buyerEmail=${buyerEmail}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `All items from your cart has been deleted`,
                showConfirmButton: false,
                timer: 1500,
              });
              refetch();
            }
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${err.message}`,
            });
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
        <button
          onClick={() => handleClearCart(cart[0]?.buyerEmail)}
          disabled={cart?.length === 0}
          className="btn btn-outline btn-error hidden md:flex"
        >
          <MdDeleteForever className="text-xl" />
          Clear Cart
        </button>
        <div className="text-lg font-semibold">Total: Tk {subTotal}</div>
        <button
          className="btn btn-secondary "
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      </div>

      {cartIsLoading ? (
        <div className="h-screen flex items-center justify-center">
          <span className="loading loading-ring text-secondary w-xl"></span>
        </div>
      ) : cart?.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
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
                        onClick={() =>
                          handleQuantity(item._id, "decrease", item.buyerEmail)
                        }
                      >
                        <FaMinus />
                      </button>
                      <span>{item?.medicineQuantity}</span>
                      <button
                        className="btn btn-xs"
                        onClick={() =>
                          handleQuantity(item._id, "increase", item.buyerEmail)
                        }
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </td>
                  <td>${item?.totalPrice}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-xs btn-error text-white"
                    >
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
