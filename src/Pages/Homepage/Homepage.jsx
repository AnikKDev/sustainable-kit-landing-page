import React from "react";
import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import ProductsCarouselContainer from "./Products/ProductsCarouselCard/ProductsCarouselContainer";
import Speciality from "./Speciality/Speciality";
import Testimonial from "./Testimonial/Testimonial";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Speciality />
      <Products />
      <Products />
      <Testimonial />
    </div>
  );
};

export default Homepage;
