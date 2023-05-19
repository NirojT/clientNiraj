import React from "react";
import lekhnath from "../../../../assets/lekhnath.jpg";
import ganesh from "../../../../assets/ganesh.jpg";
import ritesh from "../../../../assets/ritesh.jpg";
import TestimonialCars from "./testimonial-card";
import { ITenstimonialCards } from "./interface";
const Testimonial = () => {
  const testimonial: ITenstimonialCards[] = [
    {
      image: lekhnath,
      words:
        "It's an honor to be a part of this institution which is preparing the next generation of officers, innovators, and world leaders. I am committed to continue this legacy in every way possible. Thank you.",
      name: "Lekhnath Ghimire",
      designation: "Chairman",
    },
    {
      image: ganesh,
      words:
        "I have a dream - that every child should get an opportunity to evolve into a role model in society. I have a dream - that working on this auspicious mission will truly transform the face of the world,",
      name: "Ganesh Dulal",
      designation: "Principal",
    },
    {
      image: ritesh,
      words:
        "We always dedicate to goal of producing energetic and efficient students, providing them with most conducive environment to improve their all round development.",
      name: "Ritesh Chaudhary",
      designation: "Vice Principal",
    },
  ];

  return (
    <>
      <section className="w-full text-[#2e2e2e] mt-[4em]">
        <div className="">
          <p className="uppercase text-[1rem] w-fit relative font-semibold text-[#e0644b] mt-4 before:content-[''] before:absolute before:bg-[#e0644b] before:w-[83%] before:h-[2px] before:bottom-0 ]">
            WHAT OUR LEADER'S SAY
          </p>
          <div className="flex justify-center text-center">
            <p className="text-[2rem] font-bold text-[#595959] leading-[2.5rem] mt-5">
              Here what our respected associated tells about
              <br />
              <span className="w-fit relative before:content-[''] before:absolute before:bg-[#e0644b] before:w-[99%] before:h-[3px] before:bottom-1 before:left-1 capitalize">
                Vishwa Adarsha
              </span>
            </p>
          </div>
        </div>
        <div className="px-5 mx-auto lg:pt-20 ">
          <div className="flex flex-wrap justify-center w-full gap-1">
            {testimonial.map((item: ITenstimonialCards, index: number) => (
              <TestimonialCars
                key={index}
                image={item.image}
                words={item.words}
                name={item.name}
                designation={item.designation}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
