import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const UpperNav = () => {
  return (
    // 2121a5
    <div className=" text-[#595959] flex py-[.5rem] gap-x-4 text-[.8rem] justify-between px-[1em] sm:px-[3.8em] border-b-[1px]">
      <div className="flex items-center gap-x-2">
        <Link to="#" className="hidden sm:block">
          <div className="flex gap-x-1 items-center hover:text-[#2e2e2e]">
            <AiOutlineQuestionCircle className="text-[.8rem]" />
            <span>Have a question?</span>
          </div>
        </Link>
        <span>vaccollegeith@gmail.com,</span>
        <span>025-586017</span>

        {/* <div className="flex items-center gap-x-1">
          <LocalPhoneIcon className="text-[1.1rem]" />
          </div>
          <div className="flex items-center gap-x-1">
          <HiOutlineMail className="text-[1.1rem]" />
        </div> */}
        {/* <a
          href="https://www.facebook.com/vacitahari"
          target="_blank"
          title="Vishwa Adarsha"
        >
          <FaFacebookSquare className="text-[1.4rem] hover:cursor-pointer" />
        </a> */}
      </div>
      <div className="">
        <button
          className="border-[blue]/70 bg-[blue]/70 px-3 py-2 rounded-sm font-semibold hover:bg-[blue]/90 text-[white]"
        >
          Contact us
        </button>
      </div>
    </div>
  );
};

export default UpperNav;
