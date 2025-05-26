import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import { useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const AddToCart = ({ med }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = (med) => {
    if (user && user?.email) {
      // send cart item to the database
      const cartItem = {
        ...med,
        medicineQuantity: 1,
        buyerEmail: user?.email,
        totalPrice: med?.price,
      };
      axiosSecure
        .post("/carts", cartItem)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${med?.medicineName} has been added to your cart`,
              showConfirmButton: false,
              timer: 1500,
            });
            // refetch the cart to update the cart refetch count
            refetch();
          }
        })
        .catch((err) => {
          if (err.response?.status === 400) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${med?.medicineName} is already in your cart`,
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Failed to add to cart.",
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login First",
        text: "You won't be able to add medicines to your cart unless you are logged in",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F43098",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
    document.getElementById(`${med?._id}`).close();
  };
  return (
    <button
      onClick={() => handleAddToCart(med)}
      className="btn btn-circle bg-gray-100 hover:scale-105"
    >
      <FaShoppingCart className="text-secondary lg:text-xl" />
    </button>
  );
};

export default AddToCart;
