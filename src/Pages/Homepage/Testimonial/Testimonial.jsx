import React from "react";
import TestimonialCard from "./TestimonialCard";
import styles from "./Testimonial.module.css";
const Testimonial = () => {
  return (
    <div
      className={`border-2 border-primary p-12 h-full ${styles.testimonials__container}`}
    >
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <h1 className="text-4xl text-white">
        What our <span className="text-primary font-bold">Happy Customers</span>{" "}
        says,
      </h1>
      {/* cards will be here */}
      <div className="grid grid-cols-1 lg:grid-cols-3 my-12 gap-3">
        <div data-aos="zoom-in" data-aos-duration="2000">
          <TestimonialCard />
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <TestimonialCard />
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
