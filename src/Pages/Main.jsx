import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./SharedPages/Navbar";
import TopNav from "./SharedPages/TopNav";

const Main = () => {
  return (
    <div className="">
      {/* nav */}
      <TopNav />
      <Navbar />

      <div className="max-w-7xl w-[95%] mx-auto my-16">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
