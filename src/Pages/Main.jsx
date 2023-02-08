import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import FooterPage from "./SharedPages/FooterPage";
import Navbar from "./SharedPages/Navbar";
import TopNav from "./SharedPages/TopNav";

const Main = () => {
  return (
    <div className="">
      <Toaster position="top-center" />
      {/* nav */}
      <TopNav />
      <Navbar />

      <div className="max-w-7xl w-[95%] mx-auto my-16">
        <Outlet />
      </div>
      {/* footer */}
      <FooterPage />
    </div>
  );
};

export default Main;
