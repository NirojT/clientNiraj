import React from "react";
import GraduateCard from "./graduate-cards";

const Graduates = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-end mb-4">
          <select
            name=""
            id=""
            className="w-[15em] h-[2em] px-2 focus:outline-transparent"
          >
            <option value="bachelors">Bachelors</option>
            <option value="masters">Masters</option>
          </select>
        </div>
        <div className="grid justify-center grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <GraduateCard />
          <GraduateCard />
          <GraduateCard />
          <GraduateCard />
          <GraduateCard />
          <GraduateCard />
        </div>
      </div>
    </>
  );
};

export default Graduates;
