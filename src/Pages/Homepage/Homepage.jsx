import React, { createContext, useContext, useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import ProductsCarouselContainer from "./Products/ProductsCarouselCard/ProductsCarouselContainer";
import Speciality from "./Speciality/Speciality";
import Testimonial from "./Testimonial/Testimonial";
import TopAndBest from "./TopAndBest/TopAndBest";
import axios from "axios";

export const PRODUCTS_CONTEXT = createContext();
const Homepage = () => {
  // array for products
  const [products, setProducts] = useState({});
  useEffect(() => {
    axios.get("products.json").then((res) => {
      res.status === 200 ? setProducts(res.data) : setProducts({});
    });
  }, []);
  console.log(products);
  return (
    <div>
      <Banner />
      <Speciality />
      <div data-aos="fade-up" data-aos-duration="1500">
        <Products productData={products.shopping} />
      </div>

      <div data-aos="fade-up" data-aos-duration="2000">
        <Products productData={products.wasteManagement} />
      </div>
      <Testimonial />
      <TopAndBest />
    </div>
  );
};

export default Homepage;
