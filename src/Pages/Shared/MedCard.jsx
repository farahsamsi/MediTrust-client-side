import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const MedCard = ({ med }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const {
    _id,
    medicineName,
    genericName,
    description,
    medicineImage,
    category,
    companyName,
    massUnit,
    price,
    discountPercentage,
    sellerEmail,
  } = med || {};

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
          src={medicineImage}
          alt={medicineName}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h4 className="font-medium">{medicineName}</h4>
          <div className="text-sm">
            {/* Old Price */}
            {/* {item.oldPrice && (
                            <span className="line-through text-gray-400 mr-2">
                              ${item.oldPrice.toFixed(2)}
                            </span>
                          )} */}
            <span className="font-semibold text-secondary">
              {/* ${item.price.toFixed(2)} */}${price}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
        <button
          onClick={() => document.getElementById(`${_id}`).showModal()}
          className="btn btn-circle bg-gray-100 "
        >
          <FaEye className="text-secondary lg:text-xl" />
        </button>
        <button
          onClick={() => handleAddToCart(med)}
          className="btn btn-circle bg-gray-100 "
        >
          <FaShoppingCart className="text-secondary lg:text-xl" />
        </button>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id={`${_id}`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-xl mb-2">{medicineName}</h3>
          <img
            src={medicineImage}
            alt=""
            className="w-full h-52 object-cover rounded mb-4"
          />
          <p>
            <span className="font-semibold">Generic Name:</span> {genericName}
          </p>
          <p>
            <span className="font-semibold">Company:</span> {companyName}
          </p>
          <p>
            <span className="font-semibold">Mass Unit:</span> 500 {massUnit}
          </p>
          <p>
            <span className="font-semibold">Price:</span> ${price}
          </p>
          <p>
            <span className="font-semibold">Discount:</span>{" "}
            {discountPercentage}%
          </p>
          <p className="mt-2">
            <span className="font-semibold">Description:</span> {description}
          </p>

          <div className="modal-action">
            <button className="btn btn-secondary">
              <FaShoppingCart></FaShoppingCart> Add to Cart
            </button>
          </div>
        </div>
        {/* modal closes when clicked outside */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default MedCard;
