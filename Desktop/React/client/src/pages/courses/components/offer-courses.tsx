import React, { useState } from "react";
const OfferCourses = () => {
  return (
    <>
      <div className="lg:pr-[5em]">
        <p className="h-[.25rem] my-1 bg-[#eae8e8] lg:pr-[5em] rounded" />
        <div className="flex items-center gap-x-7 lg:gap-x-[3em] cursor-pointer py-2 relative group">
          <div className="flex items-center py-2 gap-x-5 w-[12em]">
            <img
              src="https://vac.edu.np/images/school.png"
              alt="Vishwa Adarsha School"
              className="h-[3em] rounded border"
            />
            <p className="text-[#585858] font-semibold text-[.9rem] leading-tight">
              Vishwa Adarsha <br /> School
            </p>
          </div>
          <p className="text-[.75rem] w-[50%] md:w-[60%] font-semibold text-[#585858]">
            We have a long experience teaching: Montessori, pre-primary,
            primary, and secondary levels.
          </p>
        </div>
        <p className="h-[.25rem] my-1 bg-[#eae8e8] lg:pr-[5em] rounded" />
        <div className="flex items-center gap-x-7 lg:gap-x-[3em] cursor-pointer py-2">
          <div className="flex items-center py-2 gap-x-5 w-[12em]">
            <img
              src="https://vac.edu.np/images/school.png"
              alt="Vishwa Adarsha School"
              className="h-[3em] rounded border"
            />
            <p className="text-[#585858] font-semibold text-[.9rem] leading-tight">
              +2
            </p>
          </div>
          <p className="text-[.75rem] w-[50%] md:w-[60%] font-semibold text-[#585858]">
            We got a long experience in teaching science and commerce faculty
            with over 50,000+ alumni all over the world.
          </p>
        </div>
        <p className="h-[.25rem] my-1 bg-[#eae8e8] lg:pr-[5em] rounded" />
        <div className="flex items-center gap-x-7 lg:gap-x-[3em] cursor-pointer py-2">
          <div className="flex items-center py-2 gap-x-5 w-[12em]">
            <img
              src="https://vac.edu.np/images/logo.png"
              alt="Vishwa Adarsha School"
              className="h-[3em] rounded border"
            />
            <p className="text-[#585858] font-semibold text-[.9rem] leading-tight">
              Vishwa Adarsha <br /> College
            </p>
          </div>
          <p className="text-[.75rem] w-[50%] md:w-[60%] font-semibold text-[#585858]">
            We got a long experience in teaching BCA, BBS, and MBS faculty with
            over 5,000+ alumni all over the world.
          </p>
        </div>
      </div>
    </>
  );
};

export default OfferCourses;
