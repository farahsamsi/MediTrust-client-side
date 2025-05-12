import SectionTitle from "./SectionTitle";

const DashboardBanner = ({ heading, subHeading }) => {
  return (
    <div className="bg-secondary text-white py-6">
      <SectionTitle heading={heading} subHeading={subHeading}></SectionTitle>
    </div>
  );
};

export default DashboardBanner;
