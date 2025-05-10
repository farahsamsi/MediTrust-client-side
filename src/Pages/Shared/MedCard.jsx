import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const MedCard = (item) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = (item) => {
    if (user && user?.email) {
      // TODO: send cart item to the database
      const cartItem = {
        email: user?.email,
        //   medicineId : _id,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Name has been added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch the cart to update the cart refetch count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Please Login First",
        text: "You won't be able to add medicines to your cart unless you are logged in",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="flex items-center justify-between border-b py-3">
      <div className="flex items-center gap-4">
        <img
          // src={item.image}
          alt={item?.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h4 className="font-medium">Med Name</h4>
          <div className="text-sm">
            {/* Old Price */}
            {/* {item.oldPrice && (
                            <span className="line-through text-gray-400 mr-2">
                              ${item.oldPrice.toFixed(2)}
                            </span>
                          )} */}
            <span className="font-semibold text-secondary">
              {/* ${item.price.toFixed(2)} */}
              $New price
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleAddToCart(item)}
        className="btn btn-circle bg-gray-100 "
      >
        <FaShoppingCart className="text-secondary" />
      </button>
    </div>
  );
};

export default MedCard;
