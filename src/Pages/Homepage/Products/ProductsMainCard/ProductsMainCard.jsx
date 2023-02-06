import React from "react";

const ProductsMainCard = () => {
  return (
    <div className="card lg:card-side bg-white h-full shadow-xl">
      <figure>
        <img
          className="h-full"
          src="https://images.unsplash.com/photo-1564419434663-c49967363849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsMainCard;
