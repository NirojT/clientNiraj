import React from "react";

const CollegeName = () => {
  return (
    <>
      
        <div className="">
          <div className="flex w-full gap-x-1 lg:mt-16">
            <span className="text-[2rem] font-semibold text-[#585858]">*</span>
            <p className="text-[#585858] text-[.9rem] font-semibold mt-2">
              Quality Education is <br /> Our Motto
            </p>
          </div>
          <div className="text-[4rem] md:text-[5.5rem] text-[#585858] font-semibold font-mono leading-[1.12] tracking-wider mt-6 select-none">
            <p>Vishwa Adarsha</p>
            <p>Academics</p>
          </div>
          <button className="px-5 py-3 mt-10 tracking-wider duration-200 delay-150 border hover:tracking-widest border-[#585858] rounded-sm hover:shadow-md">
            Apply Now
          </button>
        </div>
    </>
  );
};

export default CollegeName;
