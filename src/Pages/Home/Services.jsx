import React from "react";
import { FaArrowRight } from "react-icons/fa";
import SectionTitle from "../Shared/SectionTitle";

const Services = () => {
  const services = [
    "Vaccines Immunizations",
    "Methadone dispensing",
    "Disposal review",
    "Specialty Compounding",
    "Smoking Cessation",
    "Pill packs",
  ];
  return (
    <section className="my-16 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <img
          src="https://i.ibb.co.com/gZJ6NsVP/Service.png"
          alt="Pharmacy Services"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />

        {/* Right Content */}
        <div>
          <SectionTitle
            heading="MediTrust services"
            subHeading="Find the right care right when you need it. Start by choosing your
            reason for visit, and we’ll help you find the right care."
          ></SectionTitle>
          {/* <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Pharmacy Services
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Find the right care right when you need it. Start by choosing your
            reason for visit, and we’ll help you find the right care.
          </p> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {services.map((service, index) => (
              <p key={index} className="text-blue-700 flex items-start gap-2">
                <span className="text-yellow-500 mt-1">•</span>
                <span>{service}</span>
              </p>
            ))}
          </div>

          <button className="btn btn-secondary px-6">
            View More Services <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
