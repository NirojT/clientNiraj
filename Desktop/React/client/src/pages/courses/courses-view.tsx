import React from "react";
import AboutCollege from "./components/about-college";
import CollegeName from "./components/college-name";
import OfferCourses from "./components/offer-courses";
const CoursesView = () => {
  return (
    <>
      <div className="mt-5 lg:flex">
        <AboutCollege />
        <div className="w-full lg:w-[60%] mt-20 lg:mt-0 px-10 md:px-[5em] lg:px-0 ">
          <CollegeName />
          <p className="mt-[4em] mb-1 text-[#585858] text-[1.2rem] font-semibold">
            Our Courses
          </p>
          <div className="flex w-full">
            <OfferCourses />
          </div>
        </div>
      </div>
    
    </>
  );
};

export default CoursesView;
