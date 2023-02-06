import React from "react";
import PercentageCard from "./PercentageCard/PercentageCard";
import ShopNowCard from "./ShopNowCard/ShopNowCard";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <div className="col-span-2">
        {/* bg image and shop will be here */}
        <ShopNowCard />
      </div>
      <div className="flex flex-col justify-around">
        {/* small percentage card's will be here */}
        <PercentageCard />
        <PercentageCard />
      </div>
    </div>
  );
};

export default Banner;
