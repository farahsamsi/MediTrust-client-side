import { useState } from "react";
import DashboardBanner from "./Shared/DashboardBanner";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import MedCard from "./Shared/MedCard";

const Shop = () => {
  const [sortOrder, setSortOrder] = useState("asc");

  const products = [{}, {}, {}, {}, {}, {}];
  return (
    <section className="w-full px-1 mb-10">
      <DashboardBanner
        heading="Payment History"
        subHeading="View all your medicine payment transactions with their status."
      ></DashboardBanner>
      {/* Search and Sort Controls */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-4">
        {/* <input
          type="text"
          placeholder="Search medicine, generic or company..."
          className="input input-bordered w-full md:w-1/2"
          // onChange={handleSearch}
        /> */}
        <label className="input">
          Search
          <input
            type="text"
            className="grow"
            placeholder="medicine, generic or company..."
            // onChange={handleSearch}
          />
        </label>
        <button
          className="btn btn-outline flex items-center gap-2"
          // onClick={toggleSortOrder}
        >
          {sortOrder === "asc" ? <FaSortAmountDown /> : <FaSortAmountUp />}
          Sort by Price ({sortOrder})
        </button>
      </div>

      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          {products.map((item) => (
            <MedCard item={item}></MedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
