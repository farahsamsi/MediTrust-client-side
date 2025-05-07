import React from "react";

const CatCard = ({ card }) => {
  const { id, categoryName, image, medicineCount } = card;
  return (
    <div className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out">
      <figure>
        <img src={image} alt={categoryName} />
      </figure>
      <div className="card-body flex justify-between">
        <h2 className="card-title">
          {categoryName}{" "}
          {/* <span className="badge badge-secondary">{medicineCount}</span> */}
        </h2>

        <div className="badge badge-outline badge-secondary h-fit">
          Available Medicine : {medicineCount}
        </div>
      </div>
    </div>
  );
};

export default CatCard;
