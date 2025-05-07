import React from "react";
import Slider from "./Slider";
import Categories from "./Categories";
import DiscountSection from "./DiscountSection";
import Services from "./Services";
import BestSelling from "./BestSelling";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Categories></Categories>
      <DiscountSection></DiscountSection>
      <Services></Services>
      <BestSelling></BestSelling>
    </div>
  );
};

export default Home;
