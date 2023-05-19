import React from "react";
import Courses from "../corses/courses";

const WeOffer = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center w-full min-h-[110dvh] lg:flex-row gap-x-2 "
      
      >
        <div
          className=" mt-[4em] lg:w-[50%] xl:w-[39%]"
          data-aos="fade-up-right"
        >
          <p className="uppercase text-[1rem] w-fit relative font-semibold text-[#e0644b] mt-4 before:content-[''] before:absolute before:bg-[#e0644b] before:w-[60%] before:h-[2px] before:bottom-0 ]">
            What we offer
          </p>

          <div className="mt-4">
            <div className="leading-[3.5rem] select-none">
              <p className="w-fit text-[2rem] text-[#585858] capitalize font-mono">
                Student-centered
              </p>
              <p className="font-extrabold tracking-wider text-[5rem] text-[#585858] capitalize font-mono">
                Pedagogy
              </p>
            </div>
            <p className=" text-[#585858] mt-8 font-semibold md:w-[80%]">
              Experience the best in education with our pre-primary, primary,
              and secondary programs, as well as science and commerce faculties,
              and BCA, BBS, and MBS programs, boasting over 50,000+ and 5,000+
              alumni worldwide.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[60%] md:w-[50%]">
          <Courses />
        </div>
      </div>
    </>
  );
};

export default WeOffer;
