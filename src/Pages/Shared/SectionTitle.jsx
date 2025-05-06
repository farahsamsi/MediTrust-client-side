import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className=" mx-auto text-center px-3 mb-5 md:mb-9">
      <p className="text-2xl md:text-4xl uppercase  py-4">{heading}</p>
      <p className=" mb-2">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
