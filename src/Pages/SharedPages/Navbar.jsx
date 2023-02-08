import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navContents = (
    <>
      <li>
        <Link to="/">Home</Link>
        <a>Items</a>
        <a>About</a>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div
      className={`navbar bg-base-200 px-4 rounded-lg w-[90%] mx-auto sticky top-0 z-50`}
    >
      <div className="flex-1 ">
        <ul className="menu menu-horizontal px-1">{navContents}</ul>
      </div>
      {/* social links */}
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a href="">
              <BsFacebook
                className="mx-3 cursor-pointer hover:text-secondary transition-all"
                size={30}
              />{" "}
              Facebook
            </a>
          </li>

          <li>
            <a href="">
              <BsInstagram
                className="mx-3 cursor-pointer hover:text-secondary transition-all"
                size={30}
              />{" "}
              Instagram
            </a>
          </li>
          <li>
            <a href="">
              <BsWhatsapp
                className="mx-3 cursor-pointer hover:text-secondary transition-all"
                size={30}
              />{" "}
              Linkedin
            </a>
          </li>
        </ul>
      </div>
      <div className="lg:flex flex-none h-full hidden">
        {/* dropdown */}
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
