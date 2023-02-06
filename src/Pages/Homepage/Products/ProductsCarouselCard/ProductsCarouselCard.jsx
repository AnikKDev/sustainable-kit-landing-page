import React from "react";

const ProductsCarouselCard = () => {
  return (
    <div className="card card-compact hover:shadow-lg transition-all bg-base-100  my-6">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1564419434663-c49967363849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCarouselCard;
