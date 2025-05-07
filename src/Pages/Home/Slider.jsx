import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Slider = () => {
  const sliderProducts = [
    {
      name: "Paracetamol 500mg",
      image: "https://i.ibb.co.com/YVr64R3/Paracetamol-500mg.png",
      description: "Fast relief from fever and mild to moderate pain.",
      sellerEmail: "seller1@mediplus.com",
    },
    {
      name: "Napa Extra",
      image: "https://i.ibb.co.com/Y4Nk16XR/Napa-Extra.png",
      description: "Extra strength pain reliever for headaches and colds.",
      sellerEmail: "healthmart@bdmed.com",
    },
    {
      name: "Antacid Suspension",
      image: "https://i.ibb.co.com/0yZ94868/Antacid-Suspension.png",
      description: "Provides instant relief from acidity and heartburn.",
      sellerEmail: "drpharma@medishop.com",
    },
  ];

  return (
    <section className="min-h-[calc(100vh-900px)] pb-12">
      <Carousel autoPlay infiniteLoop>
        {sliderProducts.map((product, index) => (
          <div key={index} className="h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 lg:py-0">
              <div className="flex flex-col items-center justify-center w-10/12 mx-auto">
                <h1 className="text-2xl lg:text-4xl font-semibold">
                  {product.name}
                </h1>
                <p className="text-xl mt-4 mb-6">{product.description}</p>

                <button className="btn btn-secondary px-6 font-semibold">
                  Buy Now
                </button>
              </div>
              <div className="flex items-center justify-center h-full">
                <img
                  className="w-full h-full object-cover"
                  src={product.image}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Slider;
