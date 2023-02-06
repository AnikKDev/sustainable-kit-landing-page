import React from "react";
import styles from "./TestimonialCard.module.css";
const TestimonialCard = () => {
  return (
    <div>
      <div
        className={`card glass max-w-96 bg-base-100 text-white shadow-xl ${styles.testimonialCard__contianer}`}
      >
        <div className="card-body">
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
              </div>
            </div>
            <div className="mx-3">
              <h2 className="card-title ">Name!</h2>
              <h6 className="">12/12/2023</h6>
            </div>
          </div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem rerum cum dolorem, corporis repudiandae id in odio
            soluta praesentium nam!
          </p>
          <div className="card-actions justify-end">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
