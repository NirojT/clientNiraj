import React from 'react'
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { TbInfoHexagon } from "react-icons/tb";
import { GiBlackBook } from "react-icons/gi";
import Tour from '../../assets/tour.svg'
const BottomNav = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white backdrop-blur-md">
      <ul className="flex justify-around border-b-[1px] py-[.8rem] text-[#595959]">
        <Link to="/">
          <li className="text-[1rem] font-semibold hover:text-[#2e2e2e] flex items-center gap-x-1">
            <BiHomeAlt2 className="text-[1.1rem] sm:text-[1.2rem]" />
            <span className="pt-[2px] text-[.9rem] sm:text-[1rem]">Home</span>
          </li>
        </Link>
        <Link to="">
          <li className="text-[1rem] font-semibold hover:text-[#2e2e2e] flex items-center gap-x-1">
            <TbInfoHexagon className="text-[1.1rem] sm:text-[1.2rem]" />
            <span className="pt-[2px] text-[.9rem] sm:text-[1rem]">
              About us
            </span>
          </li>
        </Link>
        <Link to="/view-course">
          <li className="text-[1rem] font-semibold hover:text-[#2e2e2e] flex items-center gap-x-1">
            <GiBlackBook className="text-[1.1rem] sm:text-[1.2rem]" />
            <span className="pt-[2px] text-[.9rem] sm:text-[1rem]">
              Courses
            </span>
          </li>
        </Link>
        <Link to="">
          <li className="text-[1rem] font-semibold hover:text-[#2e2e2e] flex items-center gap-x-1">
            <img src={Tour} alt="" className="h-[1.75em] sm:h-[2em]" />
            <span className="pt-[2px] text-[.9rem] sm:text-[1rem]">VT</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default BottomNav