import React from "react";

const GraduateCard = () => {
  return (
    <>
      <div className="relative flex flex-wrap rounded cursor-pointer group">
        <img
          alt="gallery"
          className="absolute inset-0 object-cover object-center w-full h-full rounded brightness-50"
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        />
        <p className="text-[1.2rem] font-semibold font-sans mb-2 absolute top-[45%] left-[33%] sm:left-[20%] md:left-[25%] lg:left-[30%] text-[#e0644b] tracking-widest group-hover:opacity-0">
          +2 Management
        </p>
        <div className="relative  z-10 w-full px-8 py-10 rounded border-[3px] border-[#e0644b] opacity-0 backdrop-blur-[2px] hover:opacity-100 duration-300 delay-100">
          <h2 className="mb-1 text-sm font-medium tracking-widest text-[#e0644b] title-font">
            +2 Management
          </h2>
          <p className="leading-relaxed text-[#efefef]">
            Our +2 management program offers the study of organizational
            activities, processes, principles and types of managerial role.
          </p>
          <button className="py-2 mt-3 border uppercase  px-[1.25em] text-[#fff] hover:border-[#e0644b]">
            Explore
          </button>
        </div>
      </div>
    </>
  );
};

export default GraduateCard;
