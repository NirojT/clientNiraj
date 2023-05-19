import React from "react";
import WeOffer from "./components/we-offer/we-offer";
import WeAre from "./components/we-are/we-are";
import Events from "./components/events/events-notices";
import ChooseUs from "./components/choose-us/choose-us";
import Testimonial from "./components/testimonial/testimonial";
import CoursesTabs from "./components/tab/courses-tabs";

const Home = () => {
  return (
    <>
      <WeAre />
      <div className="px-[2em] lg:px-[2.5em] ">
        <ChooseUs />
        <WeOffer />
      </div>
      <div className=" mt-[5em] lg:mt-0 px-[2em] lg:px-[2.5em]">
        <Events />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
