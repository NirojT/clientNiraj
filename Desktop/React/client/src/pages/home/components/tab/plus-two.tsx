import React from "react";

const PlusTwo = () => {
  return (
    <>
      <div className="px-5">
        <div className="flex flex-col items-center md:justify-center md:flex-row md:gap-x-[2em] gap-y-[1em] md:gap-y-0">
          <div className="container px-5 sm:px-0">
            <div className="card">
              <div className="relative rounded front group">
                <img
                  src="https://images.unsplash.com/photo-1604313890727-5542ff314405?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                  className="object-cover w-full h-full brightness-[.8]"
                />
                <p className="text-[1.2rem] font-semibold font-sans mb-2 absolute top-[50%] left-[25%] text-[#e0644b] group-hover:text-[#efefef] tracking-widest">
                  +2 Science
                </p>
              </div>
              <div className="rounded back text-[#fff] px-[2em]">
                <p className="text-[1.2rem] font-semibold font-sans mb-2 tracking-wider">
                  +2 Science
                </p>
                <p>
                  Our +2 science program offers the study of the natural world's
                  behavior and structure through experimentation and
                  observation.
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex cursor-pointer group w-[460px] sm:w-[500px] h-[250px] rounded group">
            <img
              alt="gallery"
              className="absolute inset-0 object-cover object-center w-full h-full rounded brightness-50"
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            />
            <p className="text-[1.2rem] font-semibold font-sans mb-2 absolute top-[45%] left-[33%] text-[#e0644b] tracking-widest group-hover:opacity-0">
              +2 Management
            </p>
            <div className="relative  z-10 w-full px-8 py-10 rounded border-[3px] border-[#e0644b] opacity-0 backdrop-blur-[2px] hover:opacity-100 duration-300 delay-100">
              <h2 className="mb-1 text-sm font-medium tracking-widest text-[#e0644b] title-font">
                +2 Management
              </h2>
              <h1 className="mb-3 text-lg font-medium text-gray-100 title-font">
                Marketing Stars
              </h1>
              <p className="leading-relaxed text-[#efefef]">
                Our +2 management program offers the study of organizational
                activities, processes, principles and types of managerial role.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlusTwo;
