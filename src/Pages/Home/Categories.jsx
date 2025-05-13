import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import CatCard from "./CatCard";
import useCategories from "../../Hooks/useCategories";

const Categories = () => {
  const [categories] = useCategories();

  return (
    <div className="mb-10 lg:mb-20">
      <SectionTitle
        heading="Explore Medicines by Category"
        subHeading="Browse through various health categories to find the right medicine tailored to your needs. From pain relief to daily supplements – it's all here"
      ></SectionTitle>
      <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories?.map((category) => (
          <CatCard key={category?.id} category={category}></CatCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
