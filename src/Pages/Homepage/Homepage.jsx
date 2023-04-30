import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import Speciality from "./Speciality/Speciality";
import Testimonial from "./Testimonial/Testimonial";
import TopAndBest from "./TopAndBest/TopAndBest";
/* import { lazyLoad } from "./LazyLoads/lazyload";
const Banner = lazyLoad("../Banner/Banner");
const Products = lazyLoad("../Products/Products");
const Speciality = lazyLoad("../Speciality/Speciality");
const Testimonial = lazyLoad("../Testimonial/Testimonial");
const TopAndBest = lazyLoad("../TopAndBest/TopAndBest"); */
const Homepage = () => {
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
