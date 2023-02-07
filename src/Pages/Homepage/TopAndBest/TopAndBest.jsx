import React from "react";
import BestSeller from "./BestSeller/BestSeller";
import TopRated from "./TopRated/TopRated";

const TopAndBest = () => {
  return (
    <div className="grid grid-cols-1 my-20 justify-items-center lg:grid-cols-2 gap-6">
      <TopRated />
      <BestSeller />
    </div>
  );
};

export default TopAndBest;
