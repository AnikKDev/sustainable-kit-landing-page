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
      <Products productData={products.shopping} />
      <Products productData={products.wasteManagement} />
      <Testimonial />
      <TopAndBest />
    </div>
  );
};

export default Homepage;
