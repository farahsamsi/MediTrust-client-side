import React from "react";
import SectionTitle from "../Shared/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { FaTag } from "react-icons/fa";

const DiscountSection = () => {
  const discountCards = [
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
    <div className="mb-10 lg:mb-20">
      <SectionTitle
        heading="Grab the Best Deals on Medicines!"
        subHeading="Explore our discounted medicines and save more on your healthcare essentials. Limited-time offers—don’t miss out!"
      ></SectionTitle>
      <div>
        <Swiper
          //   slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          //   making the slides per view responsive
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {discountCards.map((card) => (
            <SwiperSlide>
              <div className="relative bg-base-100 shadow-md rounded-lg p-4 hover:shadow-lg transition">
                {/* Sale Badge */}
                <div className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full animate-bounce">
                  <FaTag className="inline mr-1" /> Sale!
                </div>

                {/* Product Image */}
                <img
                  src={card.image}
                  className="mx-auto h-40 object-contain mb-4"
                />

                {/* Category */}
                <p className="text-center text-sm text-gray-500">
                  {card.categoryName}
                </p>

                {/* Product Name */}
                <h2 className="text-center text-lg font-semibold">
                  Medicine Name
                </h2>

                {/* Pricing */}
                <div className="text-center mt-2">
                  <span className="line-through text-gray-400 mr-2">$20</span>
                  <span className="text-blue-600 font-bold">$15</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default DiscountSection;
