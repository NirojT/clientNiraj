import { useState } from "react";
import Logo from "../../assets/logo.jpg";
import { AiFillSetting } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
const AppBar = () => {
  const [search, setSearch] = useState("");
  // const [flag, setFlag] = useState(false);
  return (
    <>
      <div className="sticky top-0 pt-3 backdrop-blur-md z-[5]">
        <div className="h-[5em] bg-white w-full rounded shadow-sm flex items-center px-[1em] justify-between ">
          <div className="flex items-center gap-x-10">
            <div className="flex items-center gap-x-3 ">
              <img
                src={Logo}
                alt="kanchanjunga"
                className="h-[2.75rem] md:h-[3em] rounded-full"
              />
              <p className="flex flex-col leading-[1.15rem] select-none md:leading-5">
                <span className="font-bold font-mono text-[1.1rem] md:text-[1.15rem] text-[#585858]">
                  Kanchanjunga
                </span>
                <span className=" text-[.8rem] md:text-[.9rem] font-semibold text-[#585858]">
                  Itahari
                </span>
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center gap-x-2 border border-[#585858] rounded-sm px-2 py-[.55rem]">
                <BiSearch className="w-6 h-6 text-[#585858]" />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                  className="outline-none text-[#585858] bg-white text-[.9rem] font-semibold w-[15em] xl:w-[20em]"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center sm:pr-4 sm:gap-x-[.5em]">
            <div className="lg:hidden" title="search">
              <div className="flex items-center gap-x-2 border-[#585858] cursor-pointer rounded-sm px-2 py-[.55rem]">
                <BiSearch className="w-6 h-6 text-[#585858]" />
                {/* <input
                type="search"
                placeholder="Search"
                className="outline-none text-[#585858] text-[.9rem] font-semibold w-[15em]"
              /> */}
              </div>
            </div>
            <AiFillSetting
              className="w-7 h-7 text-[#585858] md:w-8 md:h-8 cursor-pointer"
              title="setting"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBar;
