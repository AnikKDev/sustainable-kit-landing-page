import React from "react";
import SpecialityCard from "../Speciality/SpecialityCard/SpecialityCard";
import { MdOutlineNaturePeople } from "react-icons/md";
import { AiFillShopping, AiOutlineSecurityScan } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
const Speciality = () => {
  // const { icon } = servicesData;
  const servicesData = [
    {
      title: "Wide range of eco-friendly products",
      description:
        "Offer a diverse range of products made from eco-friendly materials.",
      icon: <MdOutlineNaturePeople size={40} />,
      image:
        "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=940&q=80",
      subTitle: "Eco-friendly products",
    },
    {
      title: "Convenient Schedule",
      description: "Make shopping for sustainable products effortless.",
      icon: <AiFillShopping size={40} />,
      image:
        "https://images.unsplash.com/37/tEREUy1vSfuSu8LzTop3_IMG_2538.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      subTitle: "Convenient Shopping",
    },
    {
      title: "Connect With Doctors Across The Globe",
      description:
        "Products are sourced from ethical and environmentally responsible suppliers.",
      icon: <AiOutlineSecurityScan size={40} />,
      subTitle: "Responsible and Ethical",
    },
    {
      title: "Find The Right Doctor For You",
      description: "Provide exceptional customer service.",
      icon: <BiSupport size={40} />,
      subTitle: "Dedicated Support",
    },
  ];
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      style={{ boxShadow: "0px 16px 21px -19px grey" }}
      className="grid p-4 my-16 rounded-md sm:gap-2 lg:gap-0 md:grid-cols-2 lg:grid-cols-4"
    >
      {servicesData.map((data) => (
        <SpecialityCard key={Math.random().toString()} data={data} />
      ))}
    </div>
  );
};

export default Speciality;
