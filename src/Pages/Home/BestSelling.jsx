import SectionTitle from "../Shared/SectionTitle";

import MedCard from "../Shared/MedCard";
import useMedicines from "../../Hooks/useMedicines";

const BestSelling = () => {
  const [medicines] = useMedicines();

  return (
    <div className="mb-10 lg:mb-20">
      <SectionTitle
        heading="Best Selling Products"
        subHeading="Discover our most loved health and wellness essentials, handpicked by our happy customers."
      ></SectionTitle>
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          {medicines?.map((med) => (
            <MedCard key={med?._id} med={med}></MedCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
