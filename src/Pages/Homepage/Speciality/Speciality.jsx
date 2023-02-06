import React from "react";
import SpecialityCard from "../Speciality/SpecialityCard/SpecialityCard";
const Speciality = () => {
  // const { icon } = servicesData;
  const servicesData = [
    {
      title: "Medicine Selection To Prescribe From Around The Globe",
      description: "Eating locally grown foods has many benefits",
      // icon: <TfiWrite size={40} />,
      image:
        "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=940&q=80",
      subTitle: "Medicine Selection",
    },
    {
      title: "Convenient Schedule",
      description: "Made with passion by 300+ curators across.",
      // icon: <BsSmartwatch size={40} />,
      image:
        "https://images.unsplash.com/37/tEREUy1vSfuSu8LzTop3_IMG_2538.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      subTitle: "Convenient Schedule",
    },
    {
      title: "Connect With Doctors Across The Globe",
      description: "Free shipping is valid on orders of $50 or more shipped",
      // icon: <GiHealthDecrease size={40} />,
      subTitle: "Doctors Around Globe",
    },
    {
      title: "Find The Right Doctor For You",
      description: "Eat local, consume local, closer to nature.",
      // icon: <MdOutlineHealthAndSafety size={40} />,
      subTitle: "Options To Decide",
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
