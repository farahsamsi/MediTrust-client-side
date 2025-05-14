import { Link } from "react-router-dom";
import useCategoryMedicines from "../../Hooks/useCategoryMedicines";

const CatCard = ({ category }) => {
  const { id, categoryName, categoryImage } = category;

  const [categoryMedicines] = useCategoryMedicines(categoryName);

  return (
    <Link
      to={`/shop/${categoryName}`}
      className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out"
    >
      <figure>
        <img src={categoryImage} alt={categoryName} />
      </figure>
      <div className="card-body flex justify-between">
        <h2 className="card-title">
          {categoryName}{" "}
          {/* <span className="badge badge-secondary">{medicineCount}</span> */}
        </h2>

        <div className="badge badge-outline badge-secondary h-fit">
          Available Medicine : {categoryMedicines?.length}
        </div>
      </div>
    </Link>
  );
};

export default CatCard;
