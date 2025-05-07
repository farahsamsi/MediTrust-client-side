import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import CatCard from "./CatCard";

const Categories = () => {
  const categoryCards = [
    {
      id: 1,
      categoryName: "Pain Relief",
      image: "https://i.ibb.co.com/1fS8xRHW/Pain-Relief.png",
      medicineCount: 24,
    },
    {
      id: 2,
      categoryName: "Digestive Health",
      image: "https://i.ibb.co.com/dw4pwrGY/Digestive-Health.png",
      medicineCount: 18,
    },
    {
      id: 3,
      categoryName: "Vitamins & Supplements",
      image: "https://i.ibb.co.com/KjKmgmxw/Vitamins-Supplements.png",
      medicineCount: 32,
    },
    {
      id: 4,
      categoryName: "Cough & Cold",
      image: "https://i.ibb.co.com/4Zq6rkYk/Cough-Cold.png",
      medicineCount: 15,
    },
    {
      id: 5,
      categoryName: "Skin Care",
      image: "https://i.ibb.co.com/gLNrwgDP/Skin-Care.png",
      medicineCount: 12,
    },
    {
      id: 6,
      categoryName: "Child Care",
      image: "https://i.ibb.co.com/JwQVz5mY/Child-Care.png",
      medicineCount: 20,
    },
  ];
  return (
    <div>
      <SectionTitle
        heading="Explore Medicines by Category"
        subHeading="Browse through various health categories to find the right medicine tailored to your needs. From pain relief to daily supplements – it's all here"
      ></SectionTitle>
      <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categoryCards.map((card) => (
          <CatCard key={card.id} card={card}></CatCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
