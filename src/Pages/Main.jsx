import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "./SharedPages/TopNav";

const Main = () => {
  return (
    <div>
      {/* nav */}
      <TopNav />
      <Outlet />
    </div>
  );
};

export default Main;
