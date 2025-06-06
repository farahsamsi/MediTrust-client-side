import { useState } from "react";
import DashboardBanner from "./Shared/DashboardBanner";
import { FaSearch, FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import MedCard from "./Shared/MedCard";
import useMedicines from "../Hooks/useMedicines";
import { Link, useLocation, useParams } from "react-router-dom";
import useCategoryMedicines from "../Hooks/useCategoryMedicines";

const Shop = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [medicines, refetchMedicines] = useMedicines();
  const { categoryName } = useParams();

  const [categoryMedicines] = useCategoryMedicines(categoryName);

  const location = useLocation();

  return (
    <section className="w-full px-1 mb-10">
      <DashboardBanner
        heading={categoryName ? `${categoryName} Category` : "Medicine Shop"}
        subHeading="Browse and buy trusted medicines from verified companies, all in one place"
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
          {location?.pathname === "/shop" ? (
            medicines?.map((med) => (
              <MedCard key={med?._id} med={med}></MedCard>
            ))
          ) : categoryMedicines?.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 md:col-span-2">
              <div className="text-6xl text-gray-400 mb-4">
                <FaSearch />
              </div>
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">
                No Medicines Found
              </h2>
              <p className="text-gray-500 max-w-md">
                We couldn't find any medicines matching your search or selected
                filters. Please try adjusting your search criteria or check back
                later.
              </p>
              <Link to="/shop" className="btn btn-outline mt-6">
                See Available Medicines
              </Link>
            </div>
          ) : (
            categoryMedicines?.map((med) => (
              <MedCard key={med?._id} med={med}></MedCard>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Shop;
