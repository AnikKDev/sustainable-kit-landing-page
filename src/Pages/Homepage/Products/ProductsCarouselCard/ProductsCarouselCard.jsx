import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineEye,
} from "react-icons/ai";
const ProductsCarouselCard = () => {
  return (
    <div className="card hover:bg-white card-compact hover:shadow-lg transition-all bg-base-100  my-6">
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
          <button className="btn hover:bg-white hover:text-secondary hover:border-2 hover:border-secondary btn-sm rounded-full btn-primary">
            <AiOutlineEye size={20} />
          </button>
          <button className="btn hover:bg-white hover:text-secondary hover:border-2 hover:border-secondary btn-sm rounded-full btn-primary">
            <AiOutlineHeart size={20} />
          </button>
          <button className="btn hover:bg-white hover:text-secondary hover:border-2 hover:border-secondary btn-sm rounded-full btn-primary">
            <AiOutlineShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCarouselCard;
