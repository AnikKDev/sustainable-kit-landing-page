import React from "react";
import ProductsCarouselCard from "./ProductsCarouselCard/ProductsCarouselCard";
import ProductsCarouselContainer from "./ProductsCarouselCard/ProductsCarouselContainer";
import ProductsMainCard from "./ProductsMainCard/ProductsMainCard";

const Products = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <ProductsMainCard />
      </div>
      {/* carousel will be here */}
      <div className="">
        {/* <ProductsCarouselCard />
        <ProductsCarouselCard /> */}
        <ProductsCarouselContainer />
      </div>
    </div>
  );
};

export default Products;
