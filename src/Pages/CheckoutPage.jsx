import React from "react";
import { useForm } from "react-hook-form";
import { MdOutlineLocalShipping } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const CheckoutPage = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Side - Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-xl shadow-md col-span-2"
      >
        <h2 className="text-2xl font-bold mb-4">Contact information</h2>
        <input
          {...register("buyerEmail", { required: true })}
          type="email"
          value={user?.email}
          readOnly
          placeholder="Email"
          className="input input-bordered w-full mb-2"
        />
        <label className="label cursor-pointer">
          <input type="checkbox" className="checkbox mr-2" />
          <span className="label-text">Email me with news and offers</span>
        </label>

        <h2 className="text-2xl font-bold mt-6 mb-4">Shipping address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            {...register("buyerName", { required: true })}
            className="input input-bordered w-full"
          />
          {errors.buyerName && <p className="text-error">Name is required.</p>}
        </div>
        <input
          type="text"
          placeholder="Company (optional)"
          className="input input-bordered w-full mt-4"
        />
        <input
          type="text"
          placeholder="Address"
          {...register("buyerAddress", { required: true })}
          className="input input-bordered w-full mt-4"
        />
        {errors.buyerAddress && (
          <p className="text-error">Shipping Address is required.</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <select
            {...register("deliveryDivision", { required: true })}
            className="select select-bordered w-full"
          >
            <option defaultValue="null">Select Your Division</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattogram">Chattogram</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Khulna">Khulna </option>
            <option value="Barishal">Barishal </option>
            <option value="Sylhet">Sylhet </option>
            <option value="Rangpur">Rangpur </option>
            <option value="Mymensingh">Mymensingh </option>
          </select>

          <input
            type="text"
            placeholder="Post code"
            {...register("postCode")}
            className="input input-bordered w-full"
          />
        </div>

        <input
          type="text"
          placeholder="Phone"
          {...register("contactNumber", { required: true })}
          className="input input-bordered w-full mt-4"
        />
        {errors.contactNumber && (
          <p className="text-error">Phone Number is required.</p>
        )}
        <label className="label cursor-pointer mt-4">
          <input type="checkbox" className="checkbox mr-2" />
          <span className="label-text">Text me with news and offers</span>
        </label>

        <div className="mt-6 flex justify-between items-center">
          <Link to="/cart" className="link text-sm text-secondary">
            Return to cart
          </Link>
          <button type="submit" className="btn btn-secondary px-6">
            Continue to shipping
          </button>
        </div>
      </form>

      {/* Right Side - Order Summary */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://i.ibb.co/Bzrm4Gq/detergent.png"
            alt="Laundry Detergent"
            className="w-16 h-16 object-cover rounded"
          />
          <div className="flex-1">
            <p className="font-semibold">
              Laundry Detergent Packs - Fragrance Free, 2-Pack
            </p>
            <p className="text-sm">$17.00</p>
          </div>
        </div>

        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>$17.00</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="flex items-center gap-1">
            Shipping <MdOutlineLocalShipping className="text-lg" />
          </span>
          <span className="text-sm text-gray-600">Calculated at next step</span>
        </div>

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>USD $17.00</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
