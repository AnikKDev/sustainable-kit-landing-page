import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./ProductsCarouselContainer.css";
import ProductsCarouselCard from "./ProductsCarouselCard";
const ProductsCarouselContainer = () => {
  const dummyArray = [1, 2, 3, 4];
  return (
    <div className="">
      <Swiper slidesPerView={2} spaceBetween={20}>
        {dummyArray.map((item) => (
          <SwiperSlide key={Math.random().toString()}>
            <ProductsCarouselCard />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsCarouselContainer;
