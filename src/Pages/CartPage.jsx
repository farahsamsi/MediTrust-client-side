import { useState } from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DashboardBanner from "./Shared/DashboardBanner";
import { MdDeleteForever } from "react-icons/md";

const CartPage = () => {
  const navigate = useNavigate();

  // TODO: make this functionalities from server
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Napa Extra",
      company: "Beximco",
      price: 50,
      quantity: 1,
    },
    {
      id: 2,
      name: "Seclo",
      company: "Square",
      price: 30,
      quantity: 2,
    },
  ]);

  const updateQuantity = (id, action) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "inc"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="w-full px-1 mb-10">
      <DashboardBanner
        heading="Your Shopping Cart"
        subHeading="Review your selected medicines, update quantities, or proceed to checkout for a smooth purchase experience."
      ></DashboardBanner>

      {/* Button actions */}
      <div className="flex justify-between items-center my-8">
        <button
          className="btn btn-outline btn-error hidden"
          onClick={clearCart}
        >
          <MdDeleteForever className="text-xl" />
          Clear Cart
        </button>
        <div className="text-lg font-semibold">Total: ৳{total}</div>
        <button
          className="btn btn-secondary "
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      </div>

      {cartItems.length === 0 ? (
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
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.company}</td>
                  <td>৳{item.price}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button
                        className="btn btn-xs"
                        onClick={() => updateQuantity(item.id, "dec")}
                      >
                        <FaMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-xs"
                        onClick={() => updateQuantity(item.id, "inc")}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </td>
                  <td>৳{item.price * item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-xs btn-error text-white"
                      onClick={() => removeItem(item.id)}
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
        <button
          className="btn btn-outline btn-error md:hidden"
          onClick={clearCart}
        >
          <MdDeleteForever className="text-xl" />
          Clear Cart
        </button>
      </div>
    </section>
  );
};

export default CartPage;
