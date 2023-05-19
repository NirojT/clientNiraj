import React from 'react'
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const AppBar = () => {
  return (
    <>
      <div className="w-[100%] bg-[#2e2e2e] text-white">
        <div className="flex gap-x-1 py-4">
          <MdOutlineAdminPanelSettings className="text-[1.4rem] md:text-[1.5rem] lg:text-[1.8rem]" />
          <p className='md:text-[1.1rem] lg:font-semibold lg:text-[1.2rem]'>Admin</p>
        </div>
      </div>
    </>
  );
};

export default AppBar