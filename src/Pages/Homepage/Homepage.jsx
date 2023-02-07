import React from "react";
import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import ProductsCarouselContainer from "./Products/ProductsCarouselCard/ProductsCarouselContainer";
import Speciality from "./Speciality/Speciality";
import Testimonial from "./Testimonial/Testimonial";
import TopAndBest from "./TopAndBest/TopAndBest";

const Homepage = () => {
  // array for products
  return (
    <div>
      <Banner />
      <Speciality />
      <Products />
      <Products />
      <Testimonial />
      <TopAndBest />
    </div>
  );
};

export default Homepage;
