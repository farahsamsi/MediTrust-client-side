import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineLocalShipping } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useCart from "../Hooks/useCart";

const CheckoutPage = () => {
  const { user } = useAuth();
  const [cart, refetch] = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    refetch();
    let calculatedSubTotal = cart.reduce(
      (sum, item) => sum + item.totalPrice,
      0
    );
    setSubTotal(calculatedSubTotal);
  }, [cart, refetch]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10 grid grid-cols-1 lg:grid-cols-3 space-y-6 lg:space-y-0 lg:gap-6">
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
          <span className="label-text text-xs ">
            Email me with news and offers
          </span>
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
          <span className="label-text text-xs">
            Text me with news and offers
          </span>
        </label>

        <div className="mt-6 flex flex-col md:flex-row gap-4 md:justify-between  items-center">
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
        <div className="">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="hidden md:flex"></th>
                  <th>Name</th>
                  <th className="hidden md:flex">Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cart &&
                  cart?.map((item, index) => (
                    <tr className="hover:bg-base-300">
                      <th className="hidden md:flex">{index + 1}</th>
                      <td>{item?.medicineName}</td>
                      <td className="hidden md:flex">
                        {item?.medicineQuantity}
                      </td>
                      <td>
                        {item?.medicineQuantity}x{item?.price}=
                        {item?.totalPrice}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>Tk {subTotal}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="flex items-center gap-1">
            Shipping <MdOutlineLocalShipping className="text-lg" />
          </span>
          <span className="text-sm text-gray-600">Tk 25</span>
        </div>

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>Tk {subTotal + 25}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
