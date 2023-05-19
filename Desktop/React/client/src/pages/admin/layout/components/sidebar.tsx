import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineEventAvailable } from "react-icons/md";
import { AiOutlineNotification } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineImportContacts } from "react-icons/md";
import { adminLayoutStore } from "../store";
const SideBar = () => {
  const activeUrl = adminLayoutStore((state: any) => state.activeUrl);
  return (
    <>
      <div className="h-[100vh] sticky top-0 w-[5em] md:w-[15em] lg:w-[18em] p-4 bg-[#2e2e2e] text-[#efefef]">
        <div className="py-[.5em] text-center font-semibold text-[1.2rem] select-none cursor-pointer border-b-[1px]">
          VAC
        </div>
        <div className="flex flex-col justify-between rounded-sm ">
          <div className="flex flex-col pt-4 gap-y-.5 ">
            <Link
              to="/admin/dashboard"
              className={`flex items-center justify-center md:justify-normal ${
                activeUrl === "/admin/dashboard" && "border"
              }
              gap-2 md:pl-[1em] py-2 border-b-[1px]`}
            >
              <AiOutlineHome className="text-[1.4rem] md:text-[1.3rem]" />
              <span className="mt-1 text-[1.025rem] hidden md:block">
                Dashboard
              </span>
            </Link>
            <Link
              to="/admin/course"
              className={`flex items-center justify-center md:justify-normal gap-2 ${
                activeUrl === "/admin/course" && "border"
              } border-b-[1px] md:pl-[1em] py-2`}
            >
              <MdOutlineImportContacts className="text-[1.4rem] md:text-[1.3rem]" />
              <span className="mt-1 text-[1.025rem] hidden md:block">
                Courses
              </span>
            </Link>
            <Link
              to="/admin/notices"
              className={`flex items-center justify-center md:justify-normal gap-2 ${
                activeUrl === "/admin/notices" && "border"
              } border-b-[1px] md:pl-[1em] py-2`}
            >
              <AiOutlineNotification className="text-[1.4rem] md:text-[1.3rem]" />
              <span className="mt-1 text-[1.025rem] hidden md:block">
                Notices
              </span>
            </Link>
            <Link
              to="/admin/events"
              className={`flex items-center justify-center md:justify-normal ${
                activeUrl === "/admin/events" && "border"
              } gap-2 border-b-[1px] md:pl-[1em] py-2`}
            >
              <MdOutlineEventAvailable className="text-[1.4rem] md:text-[1.3rem]" />
              <span className="mt-1 text-[1.025rem] hidden md:block">
                Events
              </span>
            </Link>
            <Link
              to="/admin/contacts"
              className={`flex items-center justify-center md:justify-normal ${
                activeUrl === "/admin/contacts" && "border"
              } gap-2  md:pl-[1em] py-2`}
            >
              <RiContactsLine className="text-[1.4rem] md:text-[1.23rem] text-white" />
              <span className="mt-1 text-[1.025rem] hidden md:block">
                Contacts
              </span>
            </Link>
          </div>
          {/* <div className="">
            <Link className="flex items-center justify-center md:justify-normal gap-2  md:pl-[1em] pb-2">
              <BiLogOut className="text-[1.4rem] md:text-[1.3rem]" />
              <span className="mt-1 text-[1.025rem] hidden md:block">
                Logout
              </span>
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SideBar;
