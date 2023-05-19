import React from "react";
import VAC from "../../assets/vac.jpg";
const TopHero = () => {
  return (
    <div className="flex justify-center -z-10">
      <div className="relative bg-center h-[50vh] md:h-[65vh] lg:h-[100dvh] w-[100%] overflow-hidden">
        <img
          src={VAC}
          alt=""
          className="object-cover w-full h-full brightness-[.8] burns z-[-1]"
        />
        <div className="absolute top-[50%] md:top-[55%] z-10 lg:w-[60%] text-[#fff] left-[1.5em] sm:left-[5%] brightness-100 select-none">
          <p className="font-mono text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-bold leading-[2.75rem] lg:leading-[4rem] xl:leading-[5rem]">
            Vishawa Adarsha Academy
          </p>
          <p className="leading-[2rem] sm:text-[1.1rem] lg:text-[1.25rem] xl:text-[1.4] md:leading-[2.5rem] font-semibold tracking-wider font-mono">
            Inspiring academic space
          </p>
        </div>
        <div className="absolute top-[4em] lg:top-[8em] flex justify-center w-full pr-[3em] lg:pr-[5em]">
          <div className=" logo-container h-[4em] w-[4em] sm:h-[4.75em] sm:w-[4.75em] lg:h-[6.25em] lg:w-[6.25em]">
            <div className="cursor-pointer logo-card">
              <div className="relative logo-front group">
                <img
                  src="https://vac.edu.np/images/logo.png"
                  alt="college-logo"
                  className="object-cover w-full h-full brightness-[.8]"
                />
              </div>
              <div className=" logo-back text-[#fff]">
                <img
                  src="https://vac.edu.np/images/school.png"
                  alt="college-logo"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="absolute top-[50%] md:top-[55%] z-10 w-[70%] sm:w-[60%] lg:w-[50%] xl:w-[40%] text-[#fff] left-[1.5em] sm:left-[5%] brightness-100">
          <span className="tracking-widest font-bold text-[1.4rem] md:text-[2rem] lg:text-[2.5rem]">
            We strengthen students
          </span>
          <br />
          <span className="text-[.8rem] md:text-[.9rem] lg:text-[1rem] capitalize">
            providing quality education to help students to grow
          </span>
          <br />
          <button className="border mt-5 px-2 py-[.5rem] md:px-5 md:py-3 rounded-sm text-[.9rem] sm:text-[1rem] md:text-[1.01rem] tracking-wide font-medium text-[#fff] bg-[#cb472c] uppercase hover:shadow-sm hover:shadow-[#efefef] hover:tracking-wider duration-150 delay-200">
            Learn more
          </button>
        </div> 
        */}
      </div>
    </div>
  );
};

export default TopHero;
