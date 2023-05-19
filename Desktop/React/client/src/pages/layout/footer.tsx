import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import footer from '../../assets/footer.svg'
const Footer = () => {
  return (
    <>
      <div
        className="mt-16 h-[50dvh]"
        style={{
          backgroundImage: `url(${footer})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center">
          <div
            className="flex items-center cursor-pointer gap-x-1"
            onClick={() => {}}
          >
            <img src={logo} alt="VAC" className="h-[4em]" />
            <p className="font-semibold text-[1.25rem] md:text-[1.5rem] text-[#585858] select-none">
              Visha Adarsha
            </p>
          </div>
          <div className="flex gap-x-[1.75em] text-[1.1rem] text-[#585858] font-semibold w-full justify-center mt-1 ">
            <Link
              to="/"
              className="cursor-pointer text-[1rem] sm:text-[1.05rem] md:text-[1.115rem]"
            >
              Home
            </Link>
            <Link className="cursor-pointer text-[1rem] sm:text-[1.05rem] md:text-[1.115rem]">
              Courses
            </Link>
            <p className="cursor-pointer text-[1rem] sm:text-[1.05rem] md:text-[1.115rem]">
              About us
            </p>
            <p className="cursor-pointer text-[1rem] sm:text-[1.05rem] md:text-[1.115rem] tracking-wider">
              BOD
            </p>
            <p className="cursor-pointer text-[1rem] sm:text-[1.05rem] md:text-[1.115rem] tracking-widest">
              VT
            </p>
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default Footer;
