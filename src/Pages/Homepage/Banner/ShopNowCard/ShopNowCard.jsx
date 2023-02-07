import React from "react";
import Typewriter from "typewriter-effect";
const ShopNowCard = () => {
  return (
    <div
      className="hero h-full"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1013&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            <Typewriter
              options={{
                strings: ["Eco-Friendly Solutions for a Better Tomorrow..."],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="mb-5">
            Join the Movement towards a Sustainable Future with Us
          </p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default ShopNowCard;
