import React from "react";
import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import ProductsCarouselContainer from "./Products/ProductsCarouselCard/ProductsCarouselContainer";
import Speciality from "./Speciality/Speciality";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Speciality />
      <Products />
    </div>
  );
};

export default Homepage;
