import React from "react";
import { ITenstimonialCards } from "./interface";
import {BsQuote} from 'react-icons/bs'
import assets from "../../../../assets/asset.svg";
const TestimonialCars = ({
  image,
  words,
  name,
  designation,
}: ITenstimonialCards) => {
  return (
    <>
      <div className="p- sm:w-[40em] lg:w-[32%] lg:mb-0 border relative mt-20 lg:mt-0 hover:border-[#e0644b]/50 hover:shadow-sm delay-200 duration-100 cursor-pointer group  isolate z-10">
        <div className="flex justify-center h-full p-4 backdrop-blur-md">
          <img
            alt="testimonial"
            className="absolute inline-block object-cover object-center w-20 h-20 bg-gray-100 border-2 border-gray-200 rounded-full -top-[2.75rem] group-hover:shadow-xl"
            src={image}
          />
          <div className="mt-[2em] text-center">
            <p className="leading-relaxed md:text-[1.1rem]">{words}</p>
            <span className="inline-block w-10 h-1 mt-6 mb-4 bg-[#585858] delay-200 duration-100 group-hover:bg-[#e0644b] rounded"></span>
            <h2 className="text-sm font-semibold tracking-wider text-gray-900 md:text-base">
              {name}
            </h2>
            <p className="text-gray-500">{designation}</p>
          </div>
        </div>
        <img
          src={assets}
          alt=""
          className="absolute bottom-[8%] right-[10%] h-[10em] rounded-full -z-10 hidden group-hover:block "
        />
      </div>
    </>
  );
};

export default TestimonialCars;
