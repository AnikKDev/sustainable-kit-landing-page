import React from "react";
import styles from "./PercentageCard.module.css";
const PercentageCard = () => {
  return (
    <div
      className={`card my-3 w-96 bg-base-100 shadow-xl image-full ${styles.percentageCard__container}`}
    >
      <figure>
        <img
          src="https://images.unsplash.com/photo-1564419320408-38e24e038739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Shoes"
        />
      </figure>
      <div className="card-body justify-center items-center">
        <div>
          <h2 className="card-title text-4xl text-white">Shoes!</h2>
          <p className="text-white">
            If a dog chews shoes whose shoes does he choose?
          </p>
        </div>
      </div>
    </div>
  );
};

export default PercentageCard;
