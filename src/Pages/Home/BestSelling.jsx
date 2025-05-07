import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import { FaShoppingCart } from "react-icons/fa";

const BestSelling = () => {
  const products = [{}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="mb-10 lg:mb-20">
      <SectionTitle
        heading="Best Selling Products"
        subHeading="Discover our most loved health and wellness essentials, handpicked by our happy customers."
      ></SectionTitle>
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border-b py-3"
            >
              <div className="flex items-center gap-4">
                <img
                  // src={item.image}
                  alt={item.name}
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
              <button className="btn btn-circle bg-gray-100 ">
                <FaShoppingCart className="text-secondary" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
