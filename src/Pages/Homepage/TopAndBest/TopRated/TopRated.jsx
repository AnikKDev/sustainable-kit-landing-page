import React from "react";
import TopAndBestSmallCard from "../TopAndBestSmallCard";
import styles from "./TopRated.module.css";
import { AiFillCaretRight } from "react-icons/ai";
const TopRated = () => {
  const dummyCardArray = [1, 2, 3, 4, 5, 6];
  return (
    <div className={`w-4/5 ${styles.topRated__container}`}>
      <h1 className="text-3xl flex items-center mb-16">
        <span
          className="text-secondary font-extrabold
        "
        >
          Top
        </span>{" "}
        Rated <AiFillCaretRight color={"#347758"} />
      </h1>
      <div className="grid grid-cols-1 gap-3">
        {dummyCardArray.map((data) => (
          <TopAndBestSmallCard />
        ))}
      </div>
    </div>
  );
};

export default TopRated;
