import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
const Navbar = () => {
  const navContents = (
    <>
      <li>
        <a>Home</a>
        <a>Items</a>
        <a>About</a>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div
      className={`navbar bg-base-200 backdrop-blur-lg px-4 rounded-lg w-[90%] mx-auto sticky top-0 z-50`}
    >
      <div className="flex-1 ">
        <ul className="menu menu-horizontal px-1">{navContents}</ul>
      </div>
      {/* social links */}
      <div className="flex-none h-full">
        <BsFacebook
          className="mx-3 cursor-pointer hover:text-secondary transition-all"
          size={30}
        />
        <BsInstagram
          className="mx-3 cursor-pointer hover:text-secondary transition-all"
          size={30}
        />
        <BsWhatsapp
          className="mx-3 cursor-pointer hover:text-secondary transition-all"
          size={30}
        />
      </div>
    </div>
  );
};

export default Navbar;
