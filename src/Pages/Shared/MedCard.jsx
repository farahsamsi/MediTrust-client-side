import { FaEye } from "react-icons/fa";
import AddToCart from "./AddToCart";

const MedCard = ({ med }) => {
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
        <AddToCart med={med}></AddToCart>
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
            <AddToCart med={med}></AddToCart>
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
