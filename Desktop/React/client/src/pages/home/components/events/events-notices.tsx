import React, { useState } from "react";
import Test from "./test";
import NoticeEventCards from "./notices-events-cards";

const Events = () => {
  const [flag, setaFlag] = useState(false)
  return (
    <div className="mt-[2em]">
      <div className="">
        <p className="uppercase text-[1rem] w-fit relative font-semibold text-[#e0644b] mt-4 before:content-[''] before:absolute before:bg-[#e0644b] before:w-[45%] before:h-[2px] before:bottom-0 ]">
          NOTICE BOARDS
        </p>
        <p className="text-[2rem] font-bold text-[#595959] leading-[2.5rem] sm:w-[12em] mt-5">
          Upcoming events &{" "}
          <span className="w-fit relative before:content-[''] before:absolute before:bg-[#e0644b] before:w-[100%] before:h-[3px] before:bottom-0 before:left-0 capitalize underline underline-offset-[3px]">
            Recent Notices
          </span>
        </p>
      </div>
      {/* <Test /> */}
      <div className="flex">
        {/* <NoticeEventCards /> */}
        {/* <NoticeEventCards />
        <NoticeEventCards /> */}
      </div>
    </div>
  );
};

export default Events